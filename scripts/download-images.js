import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import http from 'node:http';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);

    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        file.close();
        fs.unlink(filepath, () => {});
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadAllImages() {
  try {
    console.log('Starting image download process...');

    const staticDataPath = path.join(process.cwd(), 'public', 'static-data.json');
    if (!fs.existsSync(staticDataPath)) {
      console.error('static-data.json not found. Run build-ssg.js first.');
      process.exit(1);
    }

    const staticData = JSON.parse(fs.readFileSync(staticDataPath, 'utf8'));
    const articles = staticData.articles;

    const imagesDir = path.join(process.cwd(), 'public', 'images', 'articles');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }

    let downloadCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    for (let i = 0; i < articles.length; i++) {
      const article = articles[i];

      if (!article.imageUrl) {
        console.log(`[${i + 1}/${articles.length}] No image for: ${article.title}`);
        skipCount++;
        continue;
      }

      const imageUrl = article.imageUrl;

      if (!imageUrl.includes('supabase.co')) {
        console.log(`[${i + 1}/${articles.length}] External image (skipped): ${article.title}`);
        skipCount++;
        continue;
      }

      const urlParts = new URL(imageUrl);
      const pathParts = urlParts.pathname.split('/');
      const filename = pathParts[pathParts.length - 1];

      const sanitizedFilename = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
      const localPath = path.join(imagesDir, sanitizedFilename);

      if (fs.existsSync(localPath)) {
        console.log(`[${i + 1}/${articles.length}] Already exists: ${sanitizedFilename}`);
        article.imageUrl = `/images/articles/${sanitizedFilename}`;
        skipCount++;
        continue;
      }

      try {
        console.log(`[${i + 1}/${articles.length}] Downloading: ${sanitizedFilename}...`);
        await downloadImage(imageUrl, localPath);
        article.imageUrl = `/images/articles/${sanitizedFilename}`;
        downloadCount++;
        console.log(`[${i + 1}/${articles.length}] ✓ Downloaded: ${sanitizedFilename}`);
      } catch (error) {
        console.error(`[${i + 1}/${articles.length}] ✗ Failed: ${sanitizedFilename}`, error.message);
        errorCount++;
      }
    }

    fs.writeFileSync(staticDataPath, JSON.stringify(staticData, null, 2));

    console.log('\n=== Download Summary ===');
    console.log(`Total articles: ${articles.length}`);
    console.log(`Downloaded: ${downloadCount}`);
    console.log(`Skipped: ${skipCount}`);
    console.log(`Errors: ${errorCount}`);
    console.log(`\nstatic-data.json updated with local image paths.`);

  } catch (error) {
    console.error('Failed to download images:', error);
    process.exit(1);
  }
}

downloadAllImages();
