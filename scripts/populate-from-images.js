import fs from 'node:fs';
import path from 'node:path';

async function populateFromImages() {
  try {
    console.log('Creating static-data.json from existing images...');

    const imagesDir = path.join(process.cwd(), 'public', 'images', 'articles');

    if (!fs.existsSync(imagesDir)) {
      console.error('No images directory found!');
      process.exit(1);
    }

    const images = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg'));
    console.log(`Found ${images.length} images`);

    const sampleArticle = {
      id: "sample-1",
      title: "Sample Article - Please Update",
      description: "This is a placeholder. Edit static-data.json to add your real articles.",
      imageUrl: `/images/articles/${images[0]}`,
      category: "Energy",
      source: "TheCurrentSource",
      date: new Date().toISOString(),
      url: "",
      featured: false,
      premium: false,
      content: "Please restore your articles from backup or add them manually to static-data.json.\n\nYour images are safe in public/images/articles/",
      author: "TheCurrentSource",
      readTime: 1,
      likesCount: 0,
      viewsCount: 0,
      tags: ["Sample"],
      region: "Global",
      slug: "sample-article-please-update"
    };

    const staticData = {
      articles: [sampleArticle],
      categories: ["Energy", "Policy", "technology"],
      years: [new Date().getFullYear().toString()],
      totalCount: 1,
      generatedAt: new Date().toISOString()
    };

    const publicDir = path.join(process.cwd(), 'public');
    const dataPath = path.join(publicDir, 'static-data.json');

    fs.writeFileSync(dataPath, JSON.stringify(staticData, null, 2));

    console.log(`\nCreated static-data.json with sample article`);
    console.log(`Images found: ${images.length}`);
    console.log(`\nNEXT STEPS:`);
    console.log(`1. Restore your articles from backup`);
    console.log(`2. Or add articles manually to public/static-data.json`);
    console.log(`3. Run: npm run static:generate`);
    console.log(`4. Run: npm run build`);

  } catch (error) {
    console.error('Failed:', error);
    process.exit(1);
  }
}

populateFromImages();
