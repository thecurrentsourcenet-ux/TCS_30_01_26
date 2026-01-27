# AdSense EEA Fix - Changes Summary

## Files Modified

### 1. `/index.html` ⭐ **CRITICAL**

#### Change 1: NPA Flag + Consent Initialization (lines 50-106)
**Before**:
```html
<!-- Google AdSense -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4468932841277540" crossorigin="anonymous"></script>

<!-- GA4 + Consent Mode v2: deferred load -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    // ...
  });
</script>
```

**After**:
```html
<!-- AdSense + Consent Mode v2 Setup -->
<script>
  // Initialize AdSense array
  window.adsbygoogle = window.adsbygoogle || [];

  // Check stored consent
  var storedConsent = localStorage.getItem('consent.v1') || 'unset';

  // 🔥 CRITICAL: Set NPA flag BEFORE AdSense loads
  if (storedConsent !== 'accepted') {
    window.adsbygoogle.requestNonPersonalizedAds = 1;
  } else {
    window.adsbygoogle.requestNonPersonalizedAds = 0;
  }

  // Initialize gtag stub
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }

  // Set consent based on stored preference
  gtag('consent', 'default', {
    'ad_storage': storedConsent === 'accepted' ? 'granted' : 'denied',
    // ...
  });
</script>

<!-- Google AdSense (loads AFTER NPA flag set) -->
<script async src="..." crossorigin="anonymous"></script>
```

**Why**: AdSense must see `requestNonPersonalizedAds = 1` **before** loading to serve NPA in EEA.

---

#### Change 2: Cookie Banner Logic (lines 129-215)
**Before**:
```javascript
function grantAndTrack() {
  gtag('consent', 'update', { 'ad_storage': 'granted', /* ... */ });
  gtag('event', 'page_view', { /* ... */ });
}

document.getElementById('cc-accept').onclick = function(){
  set('accepted'); hideBanner(); grantAndTrack();
};
```

**After**:
```javascript
function handleAccept() {
  set('accepted');
  hideBanner();

  // Toggle NPA flag
  if (window.adsbygoogle) {
    window.adsbygoogle.requestNonPersonalizedAds = 0;
  }

  // Update consent
  if (typeof gtag === 'function') {
    gtag('consent', 'update', { 'ad_storage': 'granted', /* ... */ });
  }

  // 🔥 Reload page to refresh ads
  setTimeout(function() {
    window.location.reload();
  }, 100);
}

document.getElementById('cc-accept').onclick = handleAccept;
```

**Why**: Page reload ensures AdSense re-initializes with correct consent state. Most reliable for SPA + Auto Ads.

---

#### Change 3: Removed Orphaned gtag Event
**Removed**:
```html
<!-- Google tag (gtag.js) event -->
<script>
  gtag('event', 'ads_conversion_PAGE_VIEW_1', {
    // <event_parameters>
  });
</script>
```

**Why**: This was firing before gtag.js loaded and before consent was determined. Caused console errors.

---

### 2. `/src/hooks/useConsent.ts` ⭐ **NEW FILE**

React hook for programmatic consent management:

```typescript
export function useConsent(): ConsentState {
  const [status, setStatus] = useState<ConsentStatus>(() => {
    return (localStorage.getItem('consent.v1') as ConsentStatus) || 'unset';
  });

  const acceptConsent = () => {
    if (window.acceptConsent) {
      window.acceptConsent(); // Calls index.html handler (includes reload)
    } else {
      localStorage.setItem('consent.v1', 'accepted');
      window.location.reload();
    }
  };

  // ...
}
```

**Usage**:
```tsx
import { useConsent } from '@/hooks/useConsent';

function CookieBanner() {
  const { status, acceptConsent, showBanner } = useConsent();

  if (!showBanner) return null;

  return <button onClick={acceptConsent}>Accept</button>;
}
```

**Why**: Allows React components to trigger consent changes programmatically (e.g., settings page, custom banners).

---

### 3. `/src/components/AdUnit.tsx` (Enhanced)

**Before**:
```typescript
useEffect(() => {
  if (inited.current) return;
  inited.current = true;
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch { }
}, []);

return <ins className="adsbygoogle" ... />;
```

**After**:
```typescript
useEffect(() => {
  if (inited.current) return;
  inited.current = true;

  const pushAd = () => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) { console.warn('AdSense push failed:', e); }
  };

  // Lazy load ads (IntersectionObserver)
  if (adRef.current) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            pushAd();
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );
    observer.observe(adRef.current);
    return () => observer.disconnect();
  } else {
    pushAd();
  }
}, []);

return <ins ref={adRef} className="adsbygoogle" ... />;
```

**Why**: Performance optimization (ads load when near viewport). Also prevents multiple push() calls in React Strict Mode.

---

## Critical Ordering

The fix relies on **precise execution order**:

```
1. Set window.adsbygoogle = []
2. Set requestNonPersonalizedAds = 1 (if consent denied)
3. Set gtag('consent', 'default', ...)
4. Load AdSense script
5. Load gtag.js
6. Fire initial page_view (if accepted)
```

**If order is wrong**: Ads show as "unfilled" because AdSense doesn't know to serve NPA.

---

## Testing Quick Reference

### Console Commands
```javascript
// Check NPA flag
window.adsbygoogle.requestNonPersonalizedAds // Should be 1 (denied) or 0 (accepted)

// Check consent
localStorage.getItem('consent.v1') // 'accepted' | 'rejected' | 'unset'

// Check ad status
document.querySelectorAll('.adsbygoogle')[0].getAttribute('data-ad-status')
// Should NOT be 'unfilled'

// Force reset
localStorage.clear(); location.reload();
```

### Expected Behavior
| Consent Status | NPA Flag | Ad Type          | data-ad-status |
|----------------|----------|------------------|----------------|
| unset          | 1        | Non-personalized | filled         |
| rejected       | 1        | Non-personalized | filled         |
| accepted       | 0        | Personalized     | filled         |

**Before fix**: All showed `unfilled` in EEA with consent denied.

---

## Deployment Checklist

- [ ] Backup current `index.html`
- [ ] Deploy changes to production
- [ ] Clear browser cache / hard refresh
- [ ] Test in EEA region (VPN or real user)
- [ ] Verify ads show (not unfilled)
- [ ] Monitor AdSense console for 24 hours
- [ ] Check impressions increase in reports

---

## Minimal Working Version (Fallback)

If full solution has issues, use this minimal fix in `index.html`:

```html
<head>
  <script>
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.requestNonPersonalizedAds = 1;
  </script>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4468932841277540" crossorigin="anonymous"></script>
  <!-- Rest of head -->
</head>
```

This forces NPA-only (no personalization), but guarantees ads serve.

---

**Key Takeaway**: The core fix is **one line**:
```javascript
window.adsbygoogle.requestNonPersonalizedAds = 1;
```

Everything else ensures this line executes at the right time and toggles appropriately when consent changes.
