import { readFileSync, writeFileSync } from 'fs';

const data = JSON.parse(readFileSync('./public/static-data.json', 'utf8'));

const escapeString = (str) => {
  if (!str) return 'NULL';
  return `'${str.replace(/'/g, "''").replace(/\\/g, '\\\\')}'`;
};

let sql = '-- Delete existing articles\nDELETE FROM articles;\n\n';

data.articles.forEach((article, idx) => {
  sql += `-- Article ${idx + 1}: ${article.title.substring(0, 60)}\n`;
  sql += `INSERT INTO articles (id, title, content, summary, source_url, image_url, category, region, published_at, ai_summary, source_name, author, read_time, likes_count, views_count, is_premium, tags) VALUES (\n`;
  sql += `  '${article.id}',\n`;
  sql += `  ${escapeString(article.title)},\n`;
  sql += `  ${escapeString(article.content)},\n`;
  sql += `  ${escapeString(article.summary)},\n`;
  sql += `  ${escapeString(article.sourceUrl)},\n`;
  sql += `  ${escapeString(article.imageUrl)},\n`;
  sql += `  ${escapeString(article.category)},\n`;
  sql += `  ${escapeString(article.region)},\n`;
  sql += `  ${escapeString(article.publishedAt)},\n`;
  sql += `  ${article.aiSummary ? escapeString(article.aiSummary) : 'NULL'},\n`;
  sql += `  ${escapeString(article.sourceName)},\n`;
  sql += `  ${article.author ? escapeString(article.author) : 'NULL'},\n`;
  sql += `  ${article.readTime || 5},\n`;
  sql += `  ${article.likesCount || 0},\n`;
  sql += `  ${article.viewsCount || 0},\n`;
  sql += `  ${article.isPremium || false},\n`;
  sql += `  ARRAY${JSON.stringify(article.tags || [])}::text[]\n`;
  sql += `);\n\n`;
});

writeFileSync('./scripts/insert-articles.sql', sql);
console.log('Generated SQL file with', data.articles.length, 'articles');
