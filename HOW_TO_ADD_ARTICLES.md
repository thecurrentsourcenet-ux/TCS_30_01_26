# How to Add New Articles - Complete Guide

This guide explains multiple ways to add articles to your static website, from simple command-line tools to batch imports.

## Quick Start

### Method 1: Add Single Article from JSON File (Recommended)

1. Create a JSON file with your article data (see `example-article.json`)
2. Run: `npm run article:add your-article.json`
3. Run: `npm run publish`
4. Deploy

### Method 2: Interactive Mode

1. Run: `npm run article:add-interactive`
2. Follow the prompts to enter article details
3. Run: `npm run publish`
4. Deploy

### Method 3: Batch Import Multiple Articles

1. Create a JSON array of articles (see `example-articles-batch.json`)
2. Run: `npm run article:batch your-articles.json`
3. Run: `npm run publish`
4. Deploy

---

## Detailed Instructions

### Method 1: Single Article from JSON

**Step 1:** Create a JSON file with your article data

```json
{
  "title": "New Breakthrough in Solar Technology",
  "description": "Scientists develop solar panels with 50% higher efficiency.",
  "content": "Full article content here.\n\nSecond paragraph.\n\nThird paragraph.",
  "category": "technology",
  "region": "Global",
  "imageUrl": "/images/articles/my-image.jpg",
  "tags": ["Solar", "Innovation"],
  "url": "https://source-url.com/article",
  "source": "Research Institute",
  "author": "Dr. Jane Smith",
  "featured": false
}
```

**Step 2:** Run the add article command

```bash
npm run article:add my-article.json
```

The script will:
- Validate all required fields
- Generate a unique ID and slug
- Check for duplicate slugs
- Calculate read time automatically
- Add the article to `public/static-data.json`

**Step 3:** Publish

```bash
npm run publish
```

This single command runs all the necessary steps:
- Generates static HTML pages
- Updates the sitemap
- Builds the production site

---

### Method 2: Interactive Mode

For a guided experience with prompts:

```bash
npm run article:add-interactive
```

You'll be asked to enter:
- Title (required)
- Slug (auto-generated, but you can customize)
- Description (required)
- Content (required - paste full text, then press Enter twice)
- Category (required - choose from list)
- Region (required - choose from list)
- Image path (optional)
- Source (optional)
- Author (optional)
- Original URL (optional)
- Tags (optional - comma-separated)
- Featured status (y/n)

The script will preview your article and ask for confirmation before adding it.

---

### Method 3: Batch Import

To add multiple articles at once:

**Step 1:** Create a JSON array file

```json
[
  {
    "title": "Article 1 Title",
    "description": "Article 1 description",
    "content": "Article 1 content",
    "category": "Energy",
    "region": "Global",
    "tags": ["Tag1", "Tag2"]
  },
  {
    "title": "Article 2 Title",
    "description": "Article 2 description",
    "content": "Article 2 content",
    "category": "Policy",
    "region": "Europe",
    "tags": ["Tag1", "Tag2"]
  }
]
```

**Step 2:** Run batch import

```bash
npm run article:batch my-articles.json
```

The script will:
- Process each article sequentially
- Validate all articles
- Skip duplicates
- Show a summary with counts of added/skipped/errors

**Step 3:** Publish

```bash
npm run publish
```

---

## Article Field Reference

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Article headline |
| `description` | string | Short summary (1-2 sentences) |
| `content` | string | Full article text (use `\n\n` for paragraphs) |
| `category` | string | One of: `Energy`, `Policy`, `technology`, `solar`, `wind`, `hydrogen`, `markets` |
| `region` | string | One of: `Global`, `North America`, `Europe`, `Asia Pacific`, `Middle East`, `Africa`, `Latin America` |

### Optional Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `imageUrl` | string | - | Path to image (e.g., `/images/articles/my-image.jpg`) |
| `slug` | string | Auto-generated | URL-friendly version of title |
| `id` | string | Auto-generated | Unique identifier |
| `date` | string (ISO) | Current time | Publication date |
| `source` | string | "TheCurrentSource" | Publication source name |
| `author` | string | "TheCurrentSource" | Author name |
| `url` | string | - | Link to original article |
| `tags` | array | [] | Array of tags |
| `featured` | boolean | false | Feature on homepage |
| `premium` | boolean | false | Premium content flag |
| `readTime` | number | Auto-calculated | Estimated read time (minutes) |

### Auto-Generated Fields

These fields are automatically set by the script:
- `id` - Unique hash-based identifier
- `slug` - URL-friendly version of title (can be customized)
- `date` - Current timestamp in ISO format (can be overridden)
- `readTime` - Calculated from word count (~200 words/minute)
- `likesCount` - Set to 0
- `viewsCount` - Set to 0

---

## Quick Reference Commands

```bash
# Add single article
npm run article:add article.json

# Add article interactively
npm run article:add-interactive

# Batch import multiple articles
npm run article:batch articles.json

# Generate static pages
npm run static:generate

# Full publish (generate + build)
npm run publish

# Development server
npm run dev

# Production preview
npm run preview
```

---

## Example Files

- `example-article.json` - Single article example
- `example-articles-batch.json` - Batch import example (3 articles)

---

## Tips & Best Practices

1. **Always validate JSON** before running scripts (use jsonlint.com)
2. **Use descriptive slugs** for better SEO
3. **Optimize images** before adding them
4. **Test locally** before deploying
5. **Backup** `static-data.json` regularly
6. **Use batch import** for multiple articles to save time
7. **Set featured: true** for important articles
8. **Add relevant tags** for better categorization
9. **Write clear descriptions** for better search results
10. **Use proper categories** for correct navigation
