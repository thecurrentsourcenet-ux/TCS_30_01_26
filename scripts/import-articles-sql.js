import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

// Use service role key bypass RLS
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const data = JSON.parse(readFileSync('./public/static-data.json', 'utf8'));

console.log(`Importing ${data.articles.length} articles...`);

async function importArticles() {
  for (let i = 0; i < data.articles.length; i++) {
    const article = data.articles[i];

    const { error } = await supabase.rpc('exec_sql', {
      sql: `INSERT INTO articles (id, title, content, summary, source_url, image_url, category, region, published_at, ai_summary, source_name, author, read_time, likes_count, views_count, is_premium, tags)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
            ON CONFLICT (id) DO NOTHING`,
      params: [
        article.id,
        article.title,
        article.content,
        article.summary,
        article.sourceUrl,
        article.imageUrl,
        article.category,
        article.region,
        article.publishedAt,
        article.aiSummary || null,
        article.sourceName,
        article.author || null,
        article.readTime || 5,
        article.likesCount || 0,
        article.viewsCount || 0,
        article.isPremium || false,
        article.tags || []
      ]
    });

    if (error) {
      console.error(`Error importing article ${i + 1}:`, error);
    } else if ((i + 1) % 10 === 0) {
      console.log(`Imported ${i + 1}/${data.articles.length} articles`);
    }
  }

  const { count } = await supabase.from('articles').select('*', { count: 'exact', head: true });
  console.log(`✅ Complete! Total articles: ${count}`);
}

importArticles().catch(console.error);
