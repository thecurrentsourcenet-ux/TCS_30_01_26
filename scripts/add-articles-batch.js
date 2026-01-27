import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';

function generateId() {
  return createHash('sha256')
    .update(Date.now().toString() + Math.random().toString())
    .digest('hex')
    .substring(0, 16);
}

function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function validateArticle(article, index) {
  const errors = [];

  if (!article.title || article.title.trim() === '') {
    errors.push('Title is required');
  }

  if (!article.description || article.description.trim() === '') {
    errors.push('Description is required');
  }

  if (!article.content || article.content.trim() === '') {
    errors.push('Content is required');
  }

  if (!article.category) {
    errors.push('Category is required');
  }

  const validCategories = ['Energy', 'Policy', 'technology', 'solar', 'wind', 'hydrogen', 'markets'];
  if (article.category && !validCategories.includes(article.category)) {
    errors.push(`Category must be one of: ${validCategories.join(', ')}`);
  }

  if (!article.region) {
    errors.push('Region is required');
  }

  const validRegions = ['Global', 'North America', 'Europe', 'Asia Pacific', 'Middle East', 'Africa', 'Latin America'];
  if (article.region && !validRegions.includes(article.region)) {
    errors.push(`Region must be one of: ${validRegions.join(', ')}`);
  }

  if (errors.length > 0) {
    console.error(`\n❌ Validation errors for article ${index + 1} "${article.title || 'Unnamed'}":`);
    errors.forEach(error => console.error(`  - ${error}`));
    return false;
  }

  return true;
}

function loadStaticData() {
  const staticDataPath = path.join(process.cwd(), 'public', 'static-data.json');
  if (!fs.existsSync(staticDataPath)) {
    return { articles: [] };
  }
  return JSON.parse(fs.readFileSync(staticDataPath, 'utf8'));
}

function saveStaticData(data) {
  const staticDataPath = path.join(process.cwd(), 'public', 'static-data.json');
  fs.writeFileSync(staticDataPath, JSON.stringify(data, null, 2));
}

function processArticle(articleData) {
  const article = {
    id: articleData.id || generateId(),
    slug: articleData.slug || generateSlug(articleData.title),
    ...articleData,
  };

  article.featured = article.featured || false;
  article.premium = article.premium || false;
  article.likesCount = article.likesCount || 0;
  article.viewsCount = article.viewsCount || 0;
  article.tags = article.tags || [];
  article.source = article.source || 'TheCurrentSource';
  article.author = article.author || 'TheCurrentSource';
  article.date = article.date || new Date().toISOString();
  article.readTime = article.readTime || Math.ceil(article.content.split(' ').length / 200);

  return article;
}

function batchAddArticles(articlesData) {
  console.log(`\nProcessing ${articlesData.length} articles...\n`);

  const staticData = loadStaticData();
  const existingSlugs = new Set(staticData.articles.map(a => a.slug));

  let addedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (let i = 0; i < articlesData.length; i++) {
    const articleData = articlesData[i];

    console.log(`[${i + 1}/${articlesData.length}] Processing: ${articleData.title || 'Unnamed'}`);

    if (!validateArticle(articleData, i)) {
      errorCount++;
      continue;
    }

    const article = processArticle(articleData);

    if (existingSlugs.has(article.slug)) {
      console.log(`  ⚠ Skipped - slug already exists: ${article.slug}`);
      skippedCount++;
      continue;
    }

    staticData.articles.unshift(article);
    existingSlugs.add(article.slug);

    console.log(`  ✅ Added: /articles/${article.slug}`);
    addedCount++;
  }

  if (addedCount > 0) {
    saveStaticData(staticData);
  }

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  Batch Import Summary');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`Total processed: ${articlesData.length}`);
  console.log(`✅ Added: ${addedCount}`);
  console.log(`⚠ Skipped: ${skippedCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`\nTotal articles in database: ${staticData.articles.length}`);

  if (addedCount > 0) {
    console.log('\n📝 Next steps:');
    console.log('1. Run: npm run static:generate');
    console.log('2. Run: npm run build');
    console.log('3. Deploy your site');
  }

  return { addedCount, skippedCount, errorCount };
}

// Main execution
if (process.argv.length < 3) {
  console.log('Usage: node scripts/add-articles-batch.js <articles-data.json>');
  console.log('');
  console.log('The JSON file should contain an array of article objects.');
  console.log('');
  console.log('Example articles-data.json:');
  console.log('[');
  console.log('  {');
  console.log('    "title": "First Article",');
  console.log('    "description": "Description here",');
  console.log('    "content": "Content here",');
  console.log('    "category": "Energy",');
  console.log('    "region": "Global",');
  console.log('    "tags": ["Tag1", "Tag2"]');
  console.log('  },');
  console.log('  {');
  console.log('    "title": "Second Article",');
  console.log('    "description": "Description here",');
  console.log('    "content": "Content here",');
  console.log('    "category": "technology",');
  console.log('    "region": "Europe",');
  console.log('    "tags": ["Tag1", "Tag2"]');
  console.log('  }');
  console.log(']');
  process.exit(1);
}

const articlesFilePath = process.argv[2];

if (!fs.existsSync(articlesFilePath)) {
  console.error(`❌ File not found: ${articlesFilePath}`);
  process.exit(1);
}

let articlesData;
try {
  articlesData = JSON.parse(fs.readFileSync(articlesFilePath, 'utf8'));
} catch (error) {
  console.error(`❌ Failed to parse JSON file: ${error.message}`);
  process.exit(1);
}

if (!Array.isArray(articlesData)) {
  console.error('❌ JSON file must contain an array of articles');
  process.exit(1);
}

if (articlesData.length === 0) {
  console.error('❌ No articles found in JSON file');
  process.exit(1);
}

const result = batchAddArticles(articlesData);

if (result.errorCount > 0) {
  process.exit(1);
}
