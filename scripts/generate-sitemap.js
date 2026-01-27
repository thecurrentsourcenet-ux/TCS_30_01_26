import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { create } from 'xmlbuilder2';
import fs from 'node:fs';
import path from 'node:path';

dotenv.config(); // Load environment variables from .env

// Re-implement slugify function for Node.js environment
// This is a direct copy of the logic from src/types.ts to avoid transpilation issues
function slugify(text) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Warning: Supabase URL or Anon Key not found in environment variables.');
  console.warn('Generating sitemap with static pages only.');
  console.warn('To include dynamic articles, ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your .env file.');
}

const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

async function generateSitemap() {
  try {
    console.log('Generating sitemap...');

    let articles = null;

    // Enhanced sitemap generation with better error handling and metadata
    // Fetch articles from Supabase if configured
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('title, published_at, updated_at, summary, image_url, tags, category, author')
          .order('published_at', { ascending: false });

        if (error) {
          console.error('Error fetching articles from Supabase:', error.message);
          if (error.code === '42P01') {
            console.warn('Articles table not found. Run Supabase migrations to create the table.');
          }
        } else {
          articles = data;
          console.log(`Found ${articles.length} articles in database`);
        }
      } catch (fetchError) {
        console.error('Failed to fetch articles:', fetchError);
      }
    }

    const root = create({ version: '1.0', encoding: 'UTF-8' })
      .ele('urlset', {
        'xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
        'xmlns:news': 'http://www.google.com/schemas/sitemap-news/0.9',
        'xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1'
      });

    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

    // Define static pages
    const staticPages = [
      { loc: 'https://thecurrentsource.net/', lastmod: today, changefreq: 'daily', priority: '1.0' },
      { loc: 'https://thecurrentsource.net/home', lastmod: today, changefreq: 'weekly', priority: '0.9' },
      { loc: 'https://thecurrentsource.net/about', lastmod: today, changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://thecurrentsource.net/newsletter', lastmod: today, changefreq: 'monthly', priority: '0.9' },
      { loc: 'https://thecurrentsource.net/privacy', lastmod: today, changefreq: 'monthly', priority: '0.5' },

      // Infographics
      { loc: 'https://thecurrentsource.net/infographics', lastmod: today, changefreq: 'monthly', priority: '0.9' },
      { loc: 'https://thecurrentsource.net/infographics/rwanda-2030-clean-energy-climate', lastmod: today, changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://thecurrentsource.net/infographics/uruguay-renewable-energy-success', lastmod: today, changefreq: 'monthly', priority: '0.8' },

      // Category pages
      { loc: 'https://thecurrentsource.net/category/technical', lastmod: today, changefreq: 'weekly', priority: '0.9' },
      { loc: 'https://thecurrentsource.net/category/technical/production', lastmod: today, changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://thecurrentsource.net/category/technical/storage', lastmod: today, changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://thecurrentsource.net/category/technical/transport', lastmod: today, changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://thecurrentsource.net/category/technical/safety', lastmod: today, changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://thecurrentsource.net/category/technical/applications', lastmod: today, changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://thecurrentsource.net/hydrogen-book', lastmod: today, changefreq: 'monthly', priority: '0.9' },
      { loc: 'https://thecurrentsource.net/hydrogen/2009-dawn-of-a-new-hydrogen-era', lastmod: today, changefreq: 'monthly', priority: '0.8' },

      // Legislation pages
      { loc: 'https://thecurrentsource.net/category/legislation', lastmod: today, changefreq: 'weekly', priority: '0.9' },
      { loc: 'https://thecurrentsource.net/category/legislation/us', lastmod: today, changefreq: 'weekly', priority: '0.8' },
      { loc: 'https://thecurrentsource.net/category/legislation/eu', lastmod: today, changefreq: 'weekly', priority: '0.8' },
      { loc: 'https://thecurrentsource.net/category/legislation/uk', lastmod: today, changefreq: 'weekly', priority: '0.7' },
      { loc: 'https://thecurrentsource.net/category/legislation/de', lastmod: today, changefreq: 'weekly', priority: '0.7' },
      { loc: 'https://thecurrentsource.net/category/legislation/fr', lastmod: today, changefreq: 'weekly', priority: '0.7' },
      { loc: 'https://thecurrentsource.net/category/legislation/jp', lastmod: today, changefreq: 'weekly', priority: '0.7' },
      { loc: 'https://thecurrentsource.net/category/legislation/cn', lastmod: today, changefreq: 'weekly', priority: '0.7' },
      { loc: 'https://thecurrentsource.net/category/legislation/kr', lastmod: today, changefreq: 'weekly', priority: '0.7' },
      { loc: 'https://thecurrentsource.net/category/legislation/au', lastmod: today, changefreq: 'weekly', priority: '0.7' },
      { loc: 'https://thecurrentsource.net/category/legislation/in', lastmod: today, changefreq: 'weekly', priority: '0.7' },
      { loc: 'https://thecurrentsource.net/category/legislation/vn', lastmod: today, changefreq: 'weekly', priority: '0.7' },
      
      // User pages
      { loc: 'https://thecurrentsource.net/login', lastmod: today, changefreq: 'monthly', priority: '0.6' },
      
      // Topic pages for better ad targeting
      { loc: 'https://thecurrentsource.net/topics/renewable-energy', lastmod: today, changefreq: 'weekly', priority: '0.8' },
      { loc: 'https://thecurrentsource.net/topics/energy-storage', lastmod: today, changefreq: 'weekly', priority: '0.8' },
      { loc: 'https://thecurrentsource.net/topics/smart-grid', lastmod: today, changefreq: 'weekly', priority: '0.8' },
      { loc: 'https://thecurrentsource.net/topics/hydrogen-energy', lastmod: today, changefreq: 'weekly', priority: '0.8' },
      { loc: 'https://thecurrentsource.net/topics/electric-vehicles', lastmod: today, changefreq: 'weekly', priority: '0.8' },
      { loc: 'https://thecurrentsource.net/topics/energy-policy', lastmod: today, changefreq: 'weekly', priority: '0.8' },
      
      // Industry pages for B2B targeting
      { loc: 'https://thecurrentsource.net/industry/utilities', lastmod: today, changefreq: 'weekly', priority: '0.7' },
      { loc: 'https://thecurrentsource.net/industry/manufacturing', lastmod: today, changefreq: 'weekly', priority: '0.7' },
      { loc: 'https://thecurrentsource.net/industry/transportation', lastmod: today, changefreq: 'weekly', priority: '0.7' },
      { loc: 'https://thecurrentsource.net/industry/oil-gas', lastmod: today, changefreq: 'weekly', priority: '0.7' },
      
      // Video content
      { loc: 'https://thecurrentsource.net/videos', lastmod: today, changefreq: 'weekly', priority: '0.7' },
      { loc: 'https://thecurrentsource.net/videos/shorts', lastmod: today, changefreq: 'weekly', priority: '0.7' },
      
      // Resources
      { loc: 'https://thecurrentsource.net/resources', lastmod: today, changefreq: 'monthly', priority: '0.6' },
      { loc: 'https://thecurrentsource.net/resources/reports', lastmod: today, changefreq: 'monthly', priority: '0.6' },
      { loc: 'https://thecurrentsource.net/resources/whitepapers', lastmod: today, changefreq: 'monthly', priority: '0.6' },
      
      // Market data (high value for financial ads)
      { loc: 'https://thecurrentsource.net/market-data', lastmod: today, changefreq: 'daily', priority: '0.8' },
      { loc: 'https://thecurrentsource.net/market-data/commodities', lastmod: today, changefreq: 'daily', priority: '0.7' },
      { loc: 'https://thecurrentsource.net/market-data/stocks', lastmod: today, changefreq: 'daily', priority: '0.7' },
      
      // Company pages
    ];

    // Add static pages to sitemap
    staticPages.forEach(page => {
      const urlElement = root.ele('url');
      urlElement.ele('loc').txt(page.loc).up()
        .ele('lastmod').txt(page.lastmod).up()
        .ele('changefreq').txt(page.changefreq).up()
        .ele('priority').txt(page.priority).up();
    });

    // Add dynamic article pages if fetched successfully
    if (articles && articles.length > 0) {
      console.log(`Adding ${articles.length} articles to sitemap`);
      
      articles.forEach(article => {
        const articleSlug = slugify(article.title);
        const articleUrl = `https://thecurrentsource.net/articles/${articleSlug}`;
        // Use updated_at if available, otherwise published_at, formatted to YYYY-MM-DD
        const lastmodDate = (article.updated_at || article.published_at).split('T')[0]; 

        const urlElement = root.ele('url');
        urlElement.ele('loc').txt(articleUrl).up()
          .ele('lastmod').txt(lastmodDate).up()
          .ele('changefreq').txt('monthly').up()
          .ele('priority').txt('0.8').up(); // Higher priority for articles

        // Add news:news for Google News sitemap
        const newsElement = urlElement.ele('news:news');
        newsElement.ele('news:publication')
          .ele('news:name').txt('TheCurrentSource').up()
          .ele('news:language').txt('en').up()
          .up(); // End news:publication
        newsElement.ele('news:publication_date').txt(lastmodDate).up();
        newsElement.ele('news:title').txt(article.title).up();
        if (article.tags && article.tags.length > 0) {
          newsElement.ele('news:keywords').txt(article.tags.join(', ')).up();
        }
        newsElement.up(); // End news:news

        // Add image:image for image sitemap
        if (article.image_url) {
          const imageElement = urlElement.ele('image:image');
          // Ensure absolute URL for images
          const absoluteImageUrl = article.image_url.startsWith('http') 
            ? article.image_url 
            : `https://thecurrentsource.net${article.image_url}`;
          imageElement.ele('image:loc').txt(absoluteImageUrl).up();
          imageElement.ele('image:title').txt(article.title).up();
          if (article.summary) {
            imageElement.ele('image:caption').txt(article.summary).up();
          }
          imageElement.up(); // End image:image
        }

        // Add additional metadata for better indexing
        if (article.category) {
          urlElement.ele('category').txt(article.category).up();
        }
      });
    } else {
      console.log('No articles found or Supabase not configured - sitemap contains static pages only');
    }

    const xmlString = root.end({ prettyPrint: true });
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');

    fs.writeFileSync(sitemapPath, xmlString);
    console.log(`Sitemap generated successfully at ${sitemapPath}`);
    console.log(`Total URLs: ${staticPages.length + (articles ? articles.length : 0)}`);
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
    process.exit(1); // Exit with error code to fail the build if sitemap generation fails
  }
}

generateSitemap();