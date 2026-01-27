# Year-End Presentation Promotion Guide

Quick reference for promoting your landing page across The Current Source.

---

## Landing Page URL

```
https://thecurrentsource.net/year-end-presentation
```

---

## 1. Add to Main Navigation (Optional)

If you want to feature this in your header navigation:

**File**: `/src/components/header/MainNav.tsx`

Add a temporary promotional link:

```tsx
<Link
  to="/year-end-presentation"
  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
>
  Free Year-End Report
</Link>
```

---

## 2. Add Banner to Homepage

**File**: `/src/pages/Home.tsx` or `/src/pages/Timeline.tsx`

Insert at the top of the page:

```tsx
<div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-4 mb-8">
  <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
    <div className="text-center sm:text-left">
      <p className="text-lg font-semibold">
        New: The Energy Year in 13 Slides
      </p>
      <p className="text-blue-100 text-sm">
        Free visual summary of what actually mattered in 2024
      </p>
    </div>
    <Link
      to="/year-end-presentation"
      className="px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold whitespace-nowrap"
    >
      Download Free →
    </Link>
  </div>
</div>
```

---

## 3. Add to Newsletter Signup Forms

Mention the presentation as a bonus:

**Example copy**:
```
Subscribe to get weekly energy insights + instant access to our year-end presentation (13 slides, free).
```

---

## 4. Email Signature Promotion

For your personal/team emails:

```
---
New: The Energy Year in 13 Slides (Free)
Download: https://thecurrentsource.net/year-end-presentation
```

---

## 5. Social Media Posts

### LinkedIn Post Template

```
We just released our year-end energy presentation — a visual, data-driven summary of what actually mattered in the global energy system this year.

13 slides. No hype. No vendor agendas.

✓ What accelerated in the energy transition (and what didn't)
✓ Renewables, grids, and system bottlenecks
✓ How energy security thinking evolved
✓ Key signals to watch in 2025

Free download: https://thecurrentsource.net/year-end-presentation

#energy #energytransition #renewables #cleanenergy
```

### Twitter/X Post Template

```
The Energy Year in 13 Slides — clear, visual, data-driven.

What mattered in the global energy system this year:
→ Energy transition progress
→ Grid bottlenecks
→ Security dynamics
→ 2025 signals

Free: https://thecurrentsource.net/year-end-presentation
```

---

## 6. Google Ads Campaign

### Search Ad Example

**Headline 1**: The Energy Year in 13 Slides
**Headline 2**: Free Visual Report for 2024
**Headline 3**: Data-Driven Energy Insights

**Description 1**: Clear, analytical summary of what mattered in the global energy system this year. No hype, just signals.
**Description 2**: Download instantly. Perfect for energy professionals, analysts, and policymakers.

**Final URL**: https://thecurrentsource.net/year-end-presentation

### Display Ad Copy

**Headline**: The Energy Year, Explained
**Description**: Free 13-slide presentation for energy professionals
**CTA**: Download Free Report

---

## 7. Blog Post Announcement

Create a blog post announcing the release:

**Title**: "Our Year-End Energy Presentation: 13 Slides on What Actually Mattered"

**Structure**:
1. Why we created this
2. What's inside (preview 2-3 key insights)
3. Who it's for
4. How to download (link to landing page)

---

## 8. Add Exit-Intent Popup (Optional)

For users about to leave your site, show a popup:

**Create component**: `/src/components/ExitIntentPopup.tsx`

```tsx
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !show) {
        setShow(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          Before you go...
        </h3>
        <p className="text-slate-600 mb-6">
          Download our free year-end energy presentation—13 slides on what actually mattered this year.
        </p>

        <Link
          to="/year-end-presentation"
          className="block w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg font-semibold transition-colors"
        >
          Get the presentation (free)
        </Link>

        <button
          onClick={() => setShow(false)}
          className="block w-full mt-3 text-sm text-slate-500 hover:text-slate-700"
        >
          No thanks, maybe later
        </button>
      </div>
    </div>
  );
}
```

**Add to Layout** (use sparingly):
```tsx
import ExitIntentPopup from './ExitIntentPopup';

// Inside Layout component
<ExitIntentPopup />
```

---

## 9. Add to Article Pages (Content Upgrade)

At the end of energy-related articles, add a CTA:

```tsx
<div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
  <h3 className="text-xl font-bold text-slate-900 mb-2">
    Want the full year-end picture?
  </h3>
  <p className="text-slate-600 mb-4">
    Download our free presentation: The Energy Year in 13 Slides—a visual summary of what mattered in 2024.
  </p>
  <Link
    to="/year-end-presentation"
    className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
  >
    Download free presentation →
  </Link>
</div>
```

---

## 10. Email Newsletter Promotion

### Dedicated Email

**Subject**: The Energy Year in 13 Slides (Free)

**Body**:
```
Hi [Name],

We just released our year-end energy presentation.

It's a clear, visual, data-driven summary of what actually mattered
in the global energy system this year.

Inside:
• What accelerated in the energy transition (and what didn't)
• Renewables, grids, and system bottlenecks
• How energy security thinking evolved
• Key signals to watch in 2025

13 slides. No fluff. Built for energy professionals.

→ Download here: https://thecurrentsource.net/year-end-presentation

[Your Name]
The Current Source
```

### Newsletter Footer CTA

Add to every newsletter:

```
---
🎁 Free Download: The Energy Year in 13 Slides
Visual summary of what mattered in 2024 → [Download]
```

---

## 11. Tracking & Analytics

### Google Analytics Events

Track engagement with:

```javascript
// Button clicks
gtag('event', 'click_cta', {
  'location': 'hero',
  'page': 'year-end-presentation'
});

// Form submissions
gtag('event', 'generate_lead', {
  'currency': 'USD',
  'value': 5.00  // Estimated lead value
});
```

### Conversion Rate Goals

Set up goals:
- **Micro**: Scroll to form section
- **Macro**: Email submission (conversion)

Target conversion rate: 10-30% (industry standard for content offers)

---

## 12. Partner Promotion (Optional)

If you have industry partners, provide them with:

### Co-Promotion Copy

```
Our partners at The Current Source just released their year-end
energy presentation—a visual, data-driven review of 2024.

Free download: https://thecurrentsource.net/year-end-presentation
```

### Affiliate Link (if applicable)

```
https://thecurrentsource.net/year-end-presentation?ref=partner-name
```

---

## 13. Content Repurposing Ideas

### Blog Series

Break the 13 slides into blog posts:
- "Top 5 Energy Trends from 2024"
- "What Accelerated in the Energy Transition"
- "Grid Bottlenecks: The Real Challenge"

Each post links to full presentation.

### LinkedIn Carousel Post

Convert 3-4 slides into a LinkedIn carousel:
1. Slide 1: Hook ("The Energy Year in 3 Charts")
2. Slides 2-4: Key insights
3. Slide 5: CTA to download full presentation

### Video Summary

Create a 3-minute video walkthrough:
- Post on YouTube
- Embed on landing page
- Share on LinkedIn

---

## Promotion Timeline

### Week 1: Launch
- [ ] Email existing subscribers
- [ ] Post on LinkedIn, Twitter
- [ ] Add banner to homepage
- [ ] Launch Google Ads campaign

### Week 2-3: Amplify
- [ ] Follow-up email to non-openers
- [ ] Create blog post
- [ ] LinkedIn carousel post
- [ ] Partner outreach

### Week 4: Last Call
- [ ] "Last chance" email campaign
- [ ] Social media reminder posts
- [ ] Update homepage banner ("24 hours left")

---

## Success Metrics

Track these KPIs:

| Metric | Target (30 days) |
|--------|------------------|
| Landing page visits | 1,000+ |
| Email signups | 200+ (20% conversion) |
| PDF downloads | 200+ |
| Social shares | 50+ |
| Google Ads CTR | 2-5% |
| Cost per lead | <$5 |

---

## Quick Links

- **Landing Page**: https://thecurrentsource.net/year-end-presentation
- **Setup Guide**: `YEAR_END_LANDING_PAGE_SETUP.md`
- **Page File**: `/src/pages/YearEndPresentation.tsx`

---

**Next Actions**:
1. Integrate Mailchimp form
2. Add slide preview images
3. Set up Mailchimp automation for PDF delivery
4. Launch initial promotion campaign
5. Monitor conversion rates and optimize
