# Quick Start: Adding Articles

## 🚀 Fastest Way to Add Articles

### Option 1: From JSON File (Recommended)
```bash
# 1. Create my-article.json with your content
# 2. Run:
npm run article:add my-article.json
npm run publish
```

### Option 2: Interactive Mode
```bash
npm run article:add-interactive
# Follow prompts, then:
npm run publish
```

### Option 3: Multiple Articles at Once
```bash
# 1. Create articles.json with array of articles
# 2. Run:
npm run article:batch articles.json
npm run publish
```

## 📝 Minimal Article JSON

```json
{
  "title": "Your Article Title",
  "description": "Brief summary of the article.",
  "content": "Full article text.\n\nUse double newlines for paragraphs.",
  "category": "Energy",
  "region": "Global"
}
```

Everything else (ID, slug, date, read time) is auto-generated!

## 📋 Available Categories
- `Energy` | `Policy` | `technology` | `solar` | `wind` | `hydrogen` | `markets`

## 🌍 Available Regions
- `Global` | `North America` | `Europe` | `Asia Pacific` | `Middle East` | `Africa` | `Latin America`

## 🎯 Optional Fields
- `tags: ["Tag1", "Tag2"]` - Article tags
- `imageUrl: "/images/articles/image.jpg"` - Article image
- `url: "https://..."` - Original source URL
- `source: "Source Name"` - Publication source
- `author: "Author Name"` - Article author
- `featured: true` - Feature on homepage

## ✅ Examples

See these files for complete examples:
- `example-article.json` - Single article
- `example-articles-batch.json` - Multiple articles

## 🛠️ All Commands

```bash
# Add single article
npm run article:add article.json

# Interactive mode
npm run article:add-interactive

# Batch import
npm run article:batch articles.json

# Publish (generate + build)
npm run publish

# Dev server
npm run dev
```

## 📚 Full Documentation

See `HOW_TO_ADD_ARTICLES.md` for complete guide.
