import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import readline from 'node:readline';

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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function main() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  Add New Article to TheCurrentSource');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  const article = {};

  // Title (required)
  article.title = await question('Title (required): ');
  while (!article.title.trim()) {
    console.log('❌ Title is required');
    article.title = await question('Title (required): ');
  }

  // Auto-generate slug
  article.slug = generateSlug(article.title);
  console.log(`Generated slug: ${article.slug}`);
  const customSlug = await question('Custom slug (press Enter to use generated): ');
  if (customSlug.trim()) {
    article.slug = generateSlug(customSlug);
  }

  // Check for duplicate slug
  const staticData = loadStaticData();
  const existingArticle = staticData.articles.find(a => a.slug === article.slug);
  if (existingArticle) {
    console.error(`\n❌ An article with slug "${article.slug}" already exists`);
    console.error(`   Title: ${existingArticle.title}`);
    rl.close();
    process.exit(1);
  }

  // Description (required)
  article.description = await question('\nDescription (1-2 sentences, required): ');
  while (!article.description.trim()) {
    console.log('❌ Description is required');
    article.description = await question('Description (1-2 sentences, required): ');
  }

  // Content (required)
  console.log('\nContent (required, type/paste full article, then press Enter twice):');
  const contentLines = [];
  let emptyLineCount = 0;

  process.stdin.on('data', (chunk) => {
    const lines = chunk.toString().split('\n');
    for (const line of lines) {
      if (line.trim() === '') {
        emptyLineCount++;
        if (emptyLineCount >= 2) {
          process.stdin.pause();
          continueInput();
          return;
        }
      } else {
        emptyLineCount = 0;
        contentLines.push(line);
      }
    }
  });

  async function continueInput() {
    article.content = contentLines.join('\n').trim();

    if (!article.content) {
      console.log('❌ Content is required');
      rl.close();
      process.exit(1);
    }

    // Category (required)
    console.log('\nCategories: Energy, Policy, technology, solar, wind, hydrogen, markets');
    article.category = await question('Category (required): ');
    while (!['Energy', 'Policy', 'technology', 'solar', 'wind', 'hydrogen', 'markets'].includes(article.category)) {
      console.log('❌ Invalid category');
      article.category = await question('Category (required): ');
    }

    // Region (required)
    console.log('\nRegions: Global, North America, Europe, Asia Pacific, Middle East, Africa, Latin America');
    article.region = await question('Region (required): ');
    while (!['Global', 'North America', 'Europe', 'Asia Pacific', 'Middle East', 'Africa', 'Latin America'].includes(article.region)) {
      console.log('❌ Invalid region');
      article.region = await question('Region (required): ');
    }

    // Optional fields
    article.imageUrl = await question('\nImage path (optional, e.g., /images/articles/my-image.jpg): ');
    article.source = await question('Source (optional, default: TheCurrentSource): ') || 'TheCurrentSource';
    article.author = await question('Author (optional, default: TheCurrentSource): ') || 'TheCurrentSource';
    article.url = await question('Original article URL (optional): ');

    const tagsInput = await question('Tags (comma-separated, optional): ');
    article.tags = tagsInput ? tagsInput.split(',').map(t => t.trim()).filter(t => t) : [];

    const featuredInput = await question('Featured article? (y/n, default: n): ');
    article.featured = featuredInput.toLowerCase() === 'y';

    // Auto-calculate read time
    article.readTime = Math.ceil(article.content.split(' ').length / 200);
    console.log(`\nCalculated read time: ${article.readTime} minutes`);

    // Set date to now
    article.date = new Date().toISOString();
    console.log(`Date: ${article.date}`);

    // Set defaults
    article.id = generateId();
    article.premium = false;
    article.likesCount = 0;
    article.viewsCount = 0;

    // Preview
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('  Article Preview');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`Title: ${article.title}`);
    console.log(`Slug: ${article.slug}`);
    console.log(`Description: ${article.description}`);
    console.log(`Category: ${article.category}`);
    console.log(`Region: ${article.region}`);
    console.log(`Source: ${article.source}`);
    console.log(`Author: ${article.author}`);
    console.log(`Tags: ${article.tags.join(', ') || 'None'}`);
    console.log(`Featured: ${article.featured ? 'Yes' : 'No'}`);
    console.log(`Read time: ${article.readTime} minutes`);
    console.log(`Content length: ${article.content.length} characters`);

    const confirm = await question('\nAdd this article? (y/n): ');

    if (confirm.toLowerCase() !== 'y') {
      console.log('❌ Cancelled');
      rl.close();
      process.exit(0);
    }

    // Add article
    staticData.articles.unshift(article);
    saveStaticData(staticData);

    console.log('\n✅ Article added successfully!');
    console.log(`\nTotal articles: ${staticData.articles.length}`);
    console.log(`URL: /articles/${article.slug}`);

    console.log('\n📝 Next steps:');
    console.log('1. Run: npm run static:generate');
    console.log('2. Run: npm run build');
    console.log('3. Deploy your site');

    rl.close();
  }
}

main().catch(error => {
  console.error('Error:', error);
  rl.close();
  process.exit(1);
});
