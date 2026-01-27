# AdSense EEA Compliance Fix - Implementation Guide

## Problem Diagnosis

Your AdSense integration was returning "unfilled" ads in EEA (Italy) because:

1. **Missing NPA Flag**: AdSense script loaded without `requestNonPersonalizedAds = 1`
2. **No Fallback**: When consent was denied (default in EEA), AdSense had no instruction to serve non-personalized ads
3. **No Refresh Mechanism**: After consent changes, ads weren't re-requested

**Why it worked before**: Google recently increased EEA compliance enforcement. Your setup technically works in non-EEA regions or with looser enforcement.

---

## What Was Fixed

### 1. **index.html Changes**

#### Before AdSense loads (lines 51-79):
```javascript
// Initialize AdSense array FIRST
window.adsbygoogle = window.adsbygoogle || [];

// Check stored consent
var storedConsent = localStorage.getItem('consent.v1') || 'unset';

// Set NPA flag BEFORE script loads
if (storedConsent !== 'accepted') {
  window.adsbygoogle.requestNonPersonalizedAds = 1; // Request NPA
} else {
  window.adsbygoogle.requestNonPersonalizedAds = 0; // Allow personalized
}
```

**Critical ordering**:
1. ✅ Set NPA flag
2. ✅ Set consent default
3. ✅ THEN load AdSense script (line 82)

#### Cookie Banner (lines 129-215):
- When user **accepts**: Set NPA = 0, update consent, reload page
- When user **rejects**: Keep NPA = 1, update consent, reload page
- **Page reload** ensures ads load with correct consent state (most reliable for SPA)

---

### 2. **New React Hook: useConsent.ts**

Located at: `src/hooks/useConsent.ts`

**Usage**:
```typescript
import { useConsent } from '@/hooks/useConsent';

function MyComponent() {
  const { status, acceptConsent, rejectConsent, showBanner } = useConsent();

  return (
    <div>
      {showBanner && (
        <button onClick={acceptConsent}>Accept Cookies</button>
      )}
      <p>Current status: {status}</p> {/* 'accepted' | 'rejected' | 'unset' */}
    </div>
  );
}
```

**Benefits**:
- React-friendly consent management
- Programmatic accept/reject from anywhere in app
- Automatic state sync with localStorage

---

### 3. **Enhanced AdUnit Component**

Added lazy loading with IntersectionObserver:
- Ads only load when near viewport (performance optimization)
- Still respects NPA flag and consent state
- Prevents multiple push() calls in strict mode

---

## How It Works Now

### Scenario 1: First Visit (No Consent)
1. User lands on site
2. `requestNonPersonalizedAds = 1` is set **before** AdSense loads
3. AdSense loads → sees NPA flag → serves non-personalized ads
4. Banner shows → user can accept/reject

### Scenario 2: User Accepts Cookies
1. User clicks "Accept all"
2. `requestNonPersonalizedAds = 0` (allow personalized)
3. Consent updated to "granted"
4. **Page reloads** → AdSense loads fresh with personalized ads enabled
5. Banner hidden on reload (consent stored)

### Scenario 3: User Rejects Cookies
1. User clicks "Reject non-essential"
2. `requestNonPersonalizedAds = 1` (keep NPA)
3. Consent stays "denied"
4. **Page reloads** → AdSense continues serving NPA
5. Banner hidden on reload

### Scenario 4: Returning User (Previously Accepted)
1. User returns to site
2. Consent loaded from localStorage = 'accepted'
3. `requestNonPersonalizedAds = 0` set on line 62
4. Consent default set to "granted" on line 71
5. AdSense loads → personalized ads served immediately
6. No banner shown

---

## Testing Checklist

### Local Testing (Chrome DevTools)

1. **Clear State**:
   ```javascript
   // In Console
   localStorage.clear();
   location.reload();
   ```

2. **Test NPA (No Consent)**:
   - Reload page
   - Check Console: `window.adsbygoogle.requestNonPersonalizedAds` should be `1`
   - Inspect ad element: Should NOT be `data-ad-status="unfilled"`
   - Expected: Non-personalized ads show

3. **Test Accept Flow**:
   - Click "Accept all"
   - Page reloads
   - Check Console: `requestNonPersonalizedAds` should be `0`
   - Check localStorage: `consent.v1` = "accepted"
   - Expected: Personalized ads show

4. **Test Reject Flow**:
   - Clear localStorage, reload
   - Click "Reject non-essential"
   - Page reloads
   - Check Console: `requestNonPersonalizedAds` should be `1`
   - Expected: NPA ads still show

### Production Testing (Italy/EEA)

1. **VPN to Italy** or use EEA region
2. Clear cookies/localStorage
3. Visit site → Verify NPA ads load (not unfilled)
4. Accept cookies → Verify personalized ads after reload
5. Check GA4 consent signals in Debug Mode

---

## Key Architectural Decisions

### Why Page Reload?

**Options considered**:
1. ❌ Re-push ads dynamically: Unreliable with Auto Ads + SPA routing
2. ❌ Destroy/recreate ad elements: Complex, breaks Auto Ads
3. ✅ **Full page reload**: Simplest, most reliable, ensures clean state

**Trade-off**: Slight UX interruption (reload) vs. guaranteed ad delivery. For ad revenue optimization, reliability trumps smoothness.

### Why Not TCF/CMP?

You're using **Consent Mode v2** (correct), but without a certified CMP (Consent Management Platform). This works because:
- ✅ You explicitly request NPA for denied consent
- ✅ Consent Mode v2 signals are properly set
- ✅ AdSense respects the NPA flag

**If you need full TCF compliance** (enterprise requirement), you'd integrate a certified CMP like Cookiebot/OneTrust. Current setup is **compliant for most publishers**.

---

## Debugging Commands

### Check Current State
```javascript
// In browser console
console.log('NPA Flag:', window.adsbygoogle.requestNonPersonalizedAds);
console.log('Consent:', localStorage.getItem('consent.v1'));
console.log('gtag dataLayer:', window.dataLayer);
```

### Force NPA Mode (Testing)
```javascript
window.adsbygoogle.requestNonPersonalizedAds = 1;
location.reload();
```

### Check Ad Status
```javascript
document.querySelectorAll('.adsbygoogle').forEach(ad => {
  console.log({
    status: ad.getAttribute('data-ad-status'),
    adsbygoogleStatus: ad.getAttribute('data-adsbygoogle-status'),
    style: ad.style.display
  });
});
```

---

## What to Monitor

### Google AdSense Console
- ✅ Policy Center should stay "Nessun problema"
- ✅ Impressions should increase (EEA traffic now monetized)
- ✅ RPM may be lower for NPA ads (expected)

### Google Analytics 4
- ✅ Check consent signals in DebugView
- ✅ Verify `ad_storage: denied` → NPA served
- ✅ Verify `ad_storage: granted` → personalized served

### Chrome DevTools
- ✅ No `data-ad-status="unfilled"` on ad elements
- ✅ Ads render (not `display:none`)
- ✅ No console errors from AdSense

---

## Rollback Plan

If issues occur, revert `index.html` to:
```html
<!-- Minimal working version -->
<script>
  window.adsbygoogle = window.adsbygoogle || [];
  window.adsbygoogle.requestNonPersonalizedAds = 1;
</script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4468932841277540" crossorigin="anonymous"></script>
```

This forces **NPA-only mode** (no personalization), but guarantees ads serve in EEA.

---

## Next Steps

1. ✅ Deploy changes to production
2. ✅ Monitor AdSense impressions for 24-48 hours
3. ✅ Verify EEA traffic monetization in reports
4. Optional: Add consent analytics (track accept/reject rates)
5. Optional: A/B test banner copy to improve accept rate

---

## Questions?

**"Why did this happen suddenly?"**
Google increased EEA enforcement in late 2024. Publishers without explicit NPA requests started seeing unfilled ads.

**"Will revenue drop?"**
NPA ads typically have 20-40% lower RPM than personalized ads, but **showing NPA ads is better than showing nothing** (0 revenue). Accept rate will determine overall impact.

**"Do I need a CMP?"**
Not legally required for most publishers. Current setup is compliant. CMPs add complexity but may increase accept rates with better UI/trust signals.

**"What if Auto Ads stop working?"**
The page reload ensures Auto Ads re-initialize cleanly. If issues persist, check AdSense console for policy violations.

---

**Implementation Date**: 2025-12-20
**Status**: ✅ Ready for Production
**Tested**: Build successful, TypeScript types valid
