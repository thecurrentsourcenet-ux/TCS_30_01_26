import { create } from 'xmlbuilder2';
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://thecurrentsource.net';

const staticPages = [
  '/',
  '/about',
  '/newsletter',
  '/privacy',
  '/davos-2026-report',
  '/hydrogen-book',
  '/hydrogen/2009-dawn-of-a-new-hydrogen-era',

  '/infographics',
  '/infographics/brazil-green-energy-evolution',
  '/infographics/greenland-strategic-resources-energy-transition',
  '/infographics/rwanda-2030-clean-energy-climate',
  '/infographics/uruguay-renewable-energy-success',

  '/category/technical',
  '/category/technical/production',
  '/category/technical/storage',
  '/category/technical/transport',
  '/category/technical/safety',
  '/category/technical/applications',

  '/category/legislation',
  '/category/legislation/us',
  '/category/legislation/eu',
  '/category/legislation/uk',
  '/category/legislation/de',
  '/category/legislation/fr',
  '/category/legislation/jp',
  '/category/legislation/cn',
  '/category/legislation/kr',
  '/category/legislation/au',
  '/category/legislation/in',
  '/category/legislation/vn',
  '/category/legislation/br',
];

function loadArticles() {
  const dataPath = path.join(process.cwd(), 'public', 'static-data.json');
  if (!fs.existsSync(dataPath)) return [];
  const raw = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  return (raw.articles || []).filter(a => a.slug);
}

function generateSitemap() {
  console.log('Generating sitemap...');

  const root = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

  for (const p of staticPages) {
    root.ele('url').ele('loc').txt(`${SITE}${p}`).up().up();
  }

  const articles = loadArticles();
  console.log(`Found ${articles.length} articles in static-data.json`);

  for (const a of articles) {
    const url = root.ele('url');
    url.ele('loc').txt(`${SITE}/articles/${a.slug}`);
    if (a.date) {
      const d = a.date.split('T')[0];
      if (/^\d{4}-\d{2}-\d{2}$/.test(d)) {
        url.ele('lastmod').txt(d);
      }
    }
  }

  const xml = root.end({ prettyPrint: true });
  const out = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(out, xml);

  const total = staticPages.length + articles.length;
  console.log(`Sitemap generated: ${out}`);
  console.log(`Total URLs: ${total} (${staticPages.length} pages + ${articles.length} articles)`);
}

generateSitemap();
