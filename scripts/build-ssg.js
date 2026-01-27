import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import fs from 'node:fs';
import path from 'node:path';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

// Re-implement slugify function for Node.js environment
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
    .replace(/^-+|-+$/g, '');
}

async function generateStaticData() {
  try {
    console.log('Generating static data for SSG...');

    const publicDir = path.join(process.cwd(), 'public');
    const dataPath = path.join(publicDir, 'static-data.json');

    if (fs.existsSync(dataPath)) {
      const existingData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
      if (existingData.articles && existingData.articles.length > 0) {
        console.log(`Found existing static-data.json with ${existingData.articles.length} articles`);
        console.log('Skipping Supabase fetch to preserve existing data');
        return;
      }
    }

    let articles = [];

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .order('published_at', { ascending: false });

        if (error) {
          console.error('Error fetching articles:', error.message);
        } else {
          articles = data || [];
          console.log(`Fetched ${articles.length} articles from database`);
        }
      } catch (fetchError) {
        console.error('Failed to fetch articles:', fetchError);
      }
    }

    // Transform articles to match frontend format
    const transformedArticles = articles.map(article => ({
      id: article.id,
      title: article.title,
      description: article.summary,
      imageUrl: article.image_url,
      category: article.category,
      source: article.source_name,
      date: article.published_at,
      url: article.source_url,
      featured: false,
      premium: article.is_premium,
      content: article.content,
      author: article.author,
      readTime: article.read_time,
      likesCount: article.likes_count,
      viewsCount: article.views_count,
      tags: article.tags,
      region: article.region,
      slug: slugify(article.title)
    }));

    // Generate categories and years
    const categories = [...new Set(transformedArticles.map(article => article.category))];
    const years = [...new Set(transformedArticles.map(article => 
      new Date(article.date).getFullYear().toString()
    ))].sort((a, b) => parseInt(b) - parseInt(a));

    // Create static data object
    const staticData = {
      articles: transformedArticles,
      categories,
      years,
      totalCount: transformedArticles.length,
      generatedAt: new Date().toISOString()
    };

    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(dataPath, JSON.stringify(staticData, null, 2));

    console.log(`Static data generated successfully at ${dataPath}`);
    console.log(`Total articles: ${transformedArticles.length}`);
    console.log(`Categories: ${categories.join(', ')}`);
    console.log(`Years: ${years.join(', ')}`);

  } catch (error) {
    console.error('Failed to generate static data:', error);
    process.exit(1);
  }
}

generateStaticData();