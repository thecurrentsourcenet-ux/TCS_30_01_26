# Static Site Conversion - Complete Guide

## Overview

Your website has been converted from a dynamic Supabase-powered site to a **fully static** site. This improves SEO, reduces costs, and simplifies deployment.

## What Changed

### Before (Dynamic Site)
- Articles stored in Supabase database
- Images stored in Supabase storage
- React app fetches data on page load
- Requires JavaScript to render content
- Google struggles to index content

### After (Static Site)
- Articles stored in `public/static-data.json`
- Images stored locally in `public/images/articles/`
- Each article has a pre-generated HTML page
- Google can crawl all content immediately
- No database required

## File Structure

```
public/
├── static-data.json           # All article data (generated)
├── static-article.css         # Styling for static pages
├── images/
│   └── articles/             # All article images (72 images)
│       ├── energy_equilibrium_scale.jpg
│       ├── grid_transition_interconnected_flows.jpg
│       └── ...
└── articles/                 # Static HTML pages (generated)
    ├── article-slug-1/
    │   └── index.html
    ├── article-slug-2/
    │   └── index.html
    └── ...
```

## Critical Files

### `public/static-data.json`
- **SOURCE OF TRUTH** for all articles
- Manually edit this file to add/modify articles
- Contains 72 articles with all metadata
- **IMPORTANT**: Build script now preserves this file!

### `scripts/build-ssg.js` (Modified)
- No longer overwrites existing articles
- Only fetches from Supabase if `static-data.json` is empty
- Safe to run multiple times

### `scripts/download-images.js` (New)
- Downloads images from Supabase to local storage
- Skips already downloaded images
- Updates image URLs in static-data.json

### `scripts/generate-static-pages.js` (New)
- Generates HTML pages for each article
- Creates SEO-optimized pages with structured data
- Pages are at `/articles/[slug]/index.html`

### `scripts/fix-missing-slugs.js` (New)
- Auto-generates slugs for articles without one
- Handles special characters

## Build Process

The new build process:

```bash
npm run build
```

Runs these steps in order:
1. `build-ssg.js` - Preserves existing static-data.json
2. `download-images.js` - Downloads any new images from Supabase
3. `fix-missing-slugs.js` - Ensures all articles have slugs
4. `generate-static-pages.js` - Creates HTML pages
5. `generate-sitemap.js` - Updates sitemap.xml
6. `tsc` - TypeScript compilation
7. `vite build` - Builds React app

## How to Add New Articles

See `HOW_TO_ADD_ARTICLES.md` for detailed instructions.

**Quick version:**

1. Edit `public/static-data.json`
2. Add your article at the top of the `articles` array
3. Save article image to `public/images/articles/`
4. Run `npm run static:generate`
5. Run `npm run build`
6. Deploy!

## SEO Benefits

### Static HTML Pages
Every article now has its own HTML page with:
- Full content visible to search engines
- No JavaScript required to render
- Fast loading times
- Proper meta tags and structured data

### Example Static Page
`/articles/world-energy-outlook-2025/index.html`
- Contains full article text
- Has proper Open Graph tags
- Includes JSON-LD structured data
- Optimized for social sharing

### Sitemap
The sitemap is automatically generated and includes:
- All article URLs
- Last modification dates
- Priority and change frequency

## React App Integration

The React app still works for:
- Navigation
- Search functionality
- Category filtering
- Interactive features

But now it loads articles from `static-data.json` instead of Supabase.

### Component Changes

**`NewsFeed.tsx`** - Now tries static data first:
1. Loads from `/static-data.json`
2. Falls back to Supabase (if configured)
3. Falls back to sample data

**`ArticlePage.tsx`** - Same prioritization:
1. Static data
2. SSG fetch
3. Supabase
4. Sample data

## Deployment

### Netlify / Vercel
1. Build: `npm run build`
2. Deploy the `dist/` folder
3. Done!

### Custom Server
1. Build locally: `npm run build`
2. Upload `dist/` folder to server
3. Configure web server to serve static files
4. Done!

## Important Notes

### DO NOT Delete static-data.json
This file contains all your articles. Back it up!

### Images Are Local
All 72 images are now in `public/images/articles/`. They're committed to your repo.

### No Database Needed
Supabase is no longer required for the site to work. You can remove it if you want.

### Build is Safe
Running `npm run build` multiple times is safe. It won't delete your articles anymore.

## Troubleshooting

### Build overwrote my articles
This shouldn't happen anymore. The build script now preserves existing articles.

### Images not showing
- Check that images are in `public/images/articles/`
- Verify imageUrl paths start with `/images/articles/`
- Rebuild: `npm run build`

### Article not appearing
1. Check it's in `public/static-data.json`
2. Verify it has a unique slug
3. Run `npm run static:generate`
4. Run `npm run build`

### Old articles in database
The 72 articles in `static-data.json` came from your Supabase database. They're now local. You can delete the Supabase data if you want.

## Recovery

If something goes wrong and you lose articles:

1. Check Git history: `git log public/static-data.json`
2. Check backups in `dist/` folder (if you kept old builds)
3. Re-export from Supabase (if data still there)

## Future Enhancements

### Article Management Script
Create a script to make adding articles easier:

```bash
npm run add-article "Article Title" "path/to/image.jpg"
```

### Markdown Support
Convert to Markdown for easier editing:
- Store articles as `.md` files
- Build script converts to JSON
- Easier to write and version control

### CMS Integration
Add a simple CMS like:
- Decap CMS (formerly Netlify CMS)
- Strapi
- Custom admin panel

## Questions?

See `HOW_TO_ADD_ARTICLES.md` for article management.

Contact support if you need help recovering data.
