import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function importArticles() {
  console.log('Reading static-data.json...');
  const staticDataPath = join(__dirname, '../public/static-data.json');
  const staticData = JSON.parse(readFileSync(staticDataPath, 'utf8'));

  console.log(`Found ${staticData.articles.length} articles to import`);

  // First, clear existing articles
  console.log('Clearing existing articles...');
  const { error: deleteError } = await supabase
    .from('articles')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all

  if (deleteError) {
    console.error('Error clearing articles:', deleteError);
  }

  // Insert articles in batches of 10
  const batchSize = 10;
  let imported = 0;

  for (let i = 0; i < staticData.articles.length; i += batchSize) {
    const batch = staticData.articles.slice(i, i + batchSize);
    console.log(`Importing batch ${Math.floor(i/batchSize) + 1} (${batch.length} articles)...`);

    const { data, error } = await supabase
      .from('articles')
      .insert(batch.map(article => ({
        id: article.id,
        title: article.title,
        content: article.content,
        summary: article.summary,
        source_url: article.sourceUrl,
        image_url: article.imageUrl,
        category: article.category,
        region: article.region,
        published_at: article.publishedAt,
        ai_summary: article.aiSummary || null,
        source_name: article.sourceName,
        author: article.author || null,
        read_time: article.readTime || 5,
        likes_count: article.likesCount || 0,
        views_count: article.viewsCount || 0,
        is_premium: article.isPremium || false,
        tags: article.tags || []
      })));

    if (error) {
      console.error(`Error importing batch:`, error);
    } else {
      imported += batch.length;
      console.log(`✓ Successfully imported ${imported}/${staticData.articles.length} articles`);
    }
  }

  // Verify final count
  const { count, error: countError } = await supabase
    .from('articles')
    .select('*', { count: 'exact', head: true });

  if (countError) {
    console.error('Error counting articles:', countError);
  } else {
    console.log(`\n✅ Import complete! Total articles in database: ${count}`);
  }
}

importArticles().catch(console.error);
