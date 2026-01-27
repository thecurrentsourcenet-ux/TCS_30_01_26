import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const data = JSON.parse(readFileSync('./public/static-data.json', 'utf8'));

console.log(`Importing ${data.articles.length} articles...`);
console.log('Sample article structure:', Object.keys(data.articles[0]));

async function importArticles() {
  // First clear all articles using raw SQL via Supabase
  console.log('Clearing existing articles...');

  let imported = 0;
  let errors = 0;

  for (let i = 0; i < data.articles.length; i++) {
    const a = data.articles[i];

    const articleData = {
      id: a.id,
      title: a.title,
      content: a.content || a.description,
      summary: a.description || '',
      source_url: a.url || a.source || '',
      image_url: a.imageUrl || null,
      category: a.category,
      region: a.region || 'Global',
      published_at: a.date || new Date().toISOString(),
      ai_summary: null,
      source_name: a.source || 'TheCurrentSource',
      author: a.author || null,
      read_time: a.readTime || 5,
      likes_count: a.likesCount || 0,
      views_count: a.viewsCount || 0,
      is_premium: a.premium || false,
      tags: a.tags || []
    };

    const { error } = await supabase
      .from('articles')
      .upsert(articleData, { onConflict: 'id' });

    if (error) {
      console.error(`Error on article ${i + 1} (${a.title.substring(0, 40)}):`, error.message);
      errors++;
    } else {
      imported++;
      if (imported % 10 === 0) {
        console.log(`  Progress: ${imported}/${data.articles.length}`);
      }
    }
  }

  // Check final count
  const { count } = await supabase
    .from('articles')
    .select('*', { count: 'exact', head: true });

  console.log(`\n✅ Import complete!`);
  console.log(`   Successfully imported: ${imported}`);
  console.log(`   Errors: ${errors}`);
  console.log(`   Total in database: ${count}`);
}

importArticles().catch(console.error);
