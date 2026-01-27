import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

function validateArticle(article) {
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

  return errors;
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

function addArticle(articleData) {
  console.log('Adding new article...\n');

  // Generate ID and slug if not provided
  const article = {
    id: articleData.id || generateId(),
    slug: articleData.slug || generateSlug(articleData.title),
    ...articleData,
  };

  // Set defaults
  article.date = article.date || new Date().toISOString();
  article.featured = article.featured || false;
  article.premium = article.premium || false;
  article.likesCount = article.likesCount || 0;
  article.viewsCount = article.viewsCount || 0;
  article.tags = article.tags || [];
  article.source = article.source || 'TheCurrentSource';
  article.author = article.author || 'TheCurrentSource';
  article.readTime = article.readTime || Math.ceil(article.content.split(' ').length / 200);

  // Validate
  const errors = validateArticle(article);
  if (errors.length > 0) {
    console.error('❌ Validation errors:');
    errors.forEach(error => console.error(`  - ${error}`));
    process.exit(1);
  }

  // Load existing data
  const staticData = loadStaticData();

  // Check for duplicate slug
  const existingArticle = staticData.articles.find(a => a.slug === article.slug);
  if (existingArticle) {
    console.error(`❌ An article with slug "${article.slug}" already exists`);
    console.error(`   Title: ${existingArticle.title}`);
    console.error(`   Add a unique slug to your article data or modify the title`);
    process.exit(1);
  }

  // Add article at the beginning (newest first)
  staticData.articles.unshift(article);

  // Save
  saveStaticData(staticData);

  console.log('✅ Article added successfully!\n');
  console.log('Article details:');
  console.log(`  ID: ${article.id}`);
  console.log(`  Title: ${article.title}`);
  console.log(`  Slug: ${article.slug}`);
  console.log(`  Category: ${article.category}`);
  console.log(`  Region: ${article.region}`);
  console.log(`  Date: ${article.date}`);
  console.log(`  URL: /articles/${article.slug}`);
  console.log(`\nTotal articles: ${staticData.articles.length}`);

  return article;
}

// Main execution
if (process.argv.length < 3) {
  console.log('Usage: node scripts/add-article.js <article-data.json>');
  console.log('');
  console.log('Example article-data.json:');
  console.log(JSON.stringify({
    title: 'New Breakthrough in Solar Technology',
    description: 'Scientists develop solar panels with 50% higher efficiency.',
    content: 'Full article content here.\\n\\nSecond paragraph here.\\n\\nThird paragraph here.',
    category: 'technology',
    region: 'Global',
    date: new Date().toISOString(),
    imageUrl: '/images/articles/solar-breakthrough-2025.jpg',
    tags: ['Solar', 'Innovation', 'Technology'],
    url: 'https://example.com/original-article'
  }, null, 2));
  process.exit(1);
}

const articleFilePath = process.argv[2];

if (!fs.existsSync(articleFilePath)) {
  console.error(`❌ File not found: ${articleFilePath}`);
  process.exit(1);
}

const articleData = JSON.parse(fs.readFileSync(articleFilePath, 'utf8'));
const addedArticle = addArticle(articleData);

console.log('\n📝 Next steps:');
console.log('1. Run: npm run static:generate');
console.log('2. Run: npm run build');
console.log('3. Deploy your site');
