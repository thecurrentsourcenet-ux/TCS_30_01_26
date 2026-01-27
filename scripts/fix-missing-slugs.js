import fs from 'node:fs';
import path from 'node:path';

function slugify(text) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\uD800-\uDFFF]/g, '')
    .replace(/[^\x00-\x7F]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function fixMissingSlugs() {
  try {
    const staticDataPath = path.join(process.cwd(), 'public', 'static-data.json');
    const staticData = JSON.parse(fs.readFileSync(staticDataPath, 'utf8'));

    let fixedCount = 0;

    staticData.articles.forEach(article => {
      if (!article.slug || article.slug === '') {
        article.slug = slugify(article.title);
        console.log(`Fixed slug for: ${article.title}`);
        console.log(`  New slug: ${article.slug}`);
        fixedCount++;
      }
    });

    fs.writeFileSync(staticDataPath, JSON.stringify(staticData, null, 2));

    console.log(`\nFixed ${fixedCount} articles with missing slugs.`);

  } catch (error) {
    console.error('Failed to fix missing slugs:', error);
    process.exit(1);
  }
}

fixMissingSlugs();
