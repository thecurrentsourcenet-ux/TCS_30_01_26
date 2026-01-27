import fs from 'node:fs';
import path from 'node:path';

const BACKUP_URL = 'https://raw.githubusercontent.com/your-repo/main/public/static-data.json';

async function restoreStaticData() {
  try {
    console.log('Restoring static data...');

    const articlesBackup = [
      {
        "id": "e7c6d3e2-4b6f-4f3f-8b7e-8b9e0e8b6c9d",
        "title": "World Energy Outlook 2025: The Age of Electricity and Systemic Shifts",
        "description": "The World Energy Outlook 2025 highlights a global shift toward electricity-driven systems, shaped by digitalization, electrification, and evolving policy.",
        "imageUrl": "/images/articles/energy_equilibrium_scale.jpg",
        "category": "Energy",
        "source": "TheCurrentSource",
        "date": "2025-12-20T17:18:39+00:00",
        "url": "",
        "featured": false,
        "premium": false,
        "content": "Static data was lost. Please add articles manually to articles-source.json",
        "author": "TheCurrentSource",
        "readTime": 1,
        "likesCount": 0,
        "viewsCount": 0,
        "tags": null,
        "region": "Global",
        "slug": "world-energy-outlook-2025-the-age-of-electricity-and-systemic-shifts"
      }
    ];

    const staticData = {
      articles: articlesBackup,
      categories: ['Energy', 'Policy', 'technology'],
      years: ['2025'],
      totalCount: articlesBackup.length,
      generatedAt: new Date().toISOString()
    };

    const publicDir = path.join(process.cwd(), 'public');
    const dataPath = path.join(publicDir, 'static-data.json');

    fs.writeFileSync(dataPath, JSON.stringify(staticData, null, 2));

    console.log(`Restored static data with ${articlesBackup.length} sample article(s)`);
    console.log('WARNING: You need to manually add your articles back to static-data.json');

  } catch (error) {
    console.error('Failed to restore static data:', error);
    process.exit(1);
  }
}

restoreStaticData();
