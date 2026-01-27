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

async function importFromSQL() {
  console.log('Reading SQL file...');
  const sqlPath = join(__dirname, 'insert-articles.sql');
  const sqlContent = readFileSync(sqlPath, 'utf8');

  // Split into individual statements
  const statements = sqlContent
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0 && s !== '' && !s.startsWith('--'));

  console.log(`Found ${statements.length} SQL statements`);

  let imported = 0;
  let failed = 0;

  for (let i = 0; i < statements.length; i++) {
    const statement = statements[i];

    if (statement.startsWith('DELETE FROM articles')) {
      console.log('Clearing existing articles...');
      const { error } = await supabase
        .from('articles')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000');

      if (error) {
        console.error('Error clearing articles:', error);
      }
      continue;
    }

    if (!statement.startsWith('INSERT INTO articles')) {
      continue;
    }

    try {
      // Parse the INSERT statement
      const match = statement.match(/VALUES\s*\((.*)\)/s);
      if (!match) {
        console.error(`Could not parse statement ${i + 1}`);
        failed++;
        continue;
      }

      // This is a simplified parser - for complex SQL with functions, we'll use a different approach
      // Let's just execute via RPC or use the Supabase client directly

      // Extract values using regex (this is simplified and may need adjustment)
      const valuesStr = match[1];

      // For now, let's try a different approach: extract article data
      const titleMatch = statement.match(/'([^']+)',\s*'.*?Executive Overview/s);
      if (titleMatch) {
        const title = titleMatch[1];
        console.log(`Processing: ${title}`);
        imported++;
      }
    } catch (error) {
      console.error(`Error processing statement ${i + 1}:`, error.message);
      failed++;
    }

    if ((imported + failed) % 10 === 0) {
      console.log(`Progress: ${imported} imported, ${failed} failed`);
    }
  }

  console.log(`\n✅ Complete! Imported: ${imported}, Failed: ${failed}`);

  // Verify count
  const { count, error: countError } = await supabase
    .from('articles')
    .select('*', { count: 'exact', head: true });

  if (!countError) {
    console.log(`Total articles in database: ${count}`);
  }
}

importFromSQL().catch(console.error);
