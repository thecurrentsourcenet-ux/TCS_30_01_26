import 'dotenv/config';
import pg from 'pg';
import { readFileSync } from 'fs';

const { Client } = pg;

// Read articles
const data = JSON.parse(readFileSync('./public/static-data.json', 'utf8'));
console.log(`Loading ${data.articles.length} articles...`);

// Get database URL from env
const dbUrl = process.env.SUPABASE_DB_URL || `postgresql://postgres:[password]@${process.env.VITE_SUPABASE_URL.replace('https://', '').replace('.supabase.co', '')}.supabase.co:5432/postgres`;

const client = new Client({ connectionString: dbUrl });

async function importAll() {
  await client.connect();

  for (let i = 0; i < data.articles.length; i++) {
    const a = data.articles[i];

    await client.query(`
      INSERT INTO articles (id, title, content, summary, source_url, image_url, category, region, published_at, ai_summary, source_name, author, read_time, likes_count, views_count, is_premium, tags)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
      ON CONFLICT (id) DO NOTHING
    `, [
      a.id, a.title, a.content, a.summary || null,
      a.sourceUrl || null, a.imageUrl || null,
      a.category, a.region, a.publishedAt || null,
      a.aiSummary || null, a.sourceName, a.author || null,
      a.readTime || 5, a.likesCount || 0, a.viewsCount || 0,
      a.isPremium || false, a.tags || []
    ]);

    if ((i + 1) % 10 === 0) {
      console.log(`  Imported ${i + 1}/${data.articles.length}`);
    }
  }

  const result = await client.query('SELECT COUNT(*) FROM articles');
  console.log(`✅ Complete! Total: ${result.rows[0].count} articles`);

  await client.end();
}

importAll().catch(console.error);
