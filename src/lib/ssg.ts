import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';
import { articleToNewsArticle, slugify } from '../types';
import type { NewsArticle } from '../types';

// Server-side Supabase client for SSG
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabaseSSG = supabaseUrl && supabaseAnonKey 
  ? createClient<Database>(supabaseUrl, supabaseAnonKey)
  : null;

export interface PageData {
  articles?: NewsArticle[];
  article?: NewsArticle;
  categories?: string[];
  years?: string[];
  totalCount?: number;
}

// Helper to construct full Supabase Storage URL if it's a relative path
export function getFullImageUrl(relativeOrAbsoluteUrl: string | null, baseUrl: string | undefined): string | null {
  if (!relativeOrAbsoluteUrl) return null;
  
  // If it's already an absolute URL, return as-is
  if (relativeOrAbsoluteUrl.startsWith('http://') || relativeOrAbsoluteUrl.startsWith('https://')) {
    return relativeOrAbsoluteUrl;
  }
  
  // If it's not an absolute URL and base URL is missing, we can't form a valid URL
  if (!baseUrl) {
    console.warn('Supabase base URL is not defined for image URL resolution. Cannot resolve relative path:', relativeOrAbsoluteUrl);
    return null;
  }
  
  const cleanedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

  // Remove any leading slash from the relative path for consistent concatenation
  const pathWithinBucket = relativeOrAbsoluteUrl.startsWith('/') ? relativeOrAbsoluteUrl.slice(1) : relativeOrAbsoluteUrl;

  // Construct the full public URL for the object in the 'public' bucket
  // This assumes your public image bucket is named 'publicimages' based on your sitemap and previous migrations.
  const bucketName = 'publicimages'; 
  let finalPath = pathWithinBucket;

  // If the path doesn't start with the assumed bucket name, prepend it.
  // This handles cases where `image_url` in the DB might just be `filename.png`
  // and the actual path in storage is `publicimages/filename.png`.
  if (!pathWithinBucket.startsWith(bucketName + '/') && !pathWithinBucket.startsWith('storage/v1/object/public/')) {
    finalPath = `${bucketName}/${pathWithinBucket}`;
  }

  const fullUrl = `${cleanedBaseUrl}/storage/v1/object/public/${finalPath}`;

  // Final validation: ensure the constructed URL is actually a valid URL format
  try {
    new URL(fullUrl); // Attempt to create a URL object to validate format
    return fullUrl;
  } catch (e) {
    console.warn('Constructed image URL is invalid:', fullUrl, e);
    return null; // Return null if the constructed URL is not valid
  }
}

export async function fetchTimelineData(): Promise<PageData> {
  if (!supabaseSSG) {
    return {
      articles: [],
      categories: [],
      years: [],
      totalCount: 0
    };
  }

  try {
    const { data, error } = await supabaseSSG
      .from('articles')
      .select('*')
      .order('published_at', { ascending: false });

    if (error) throw error;

    const articles = (data || []).map(article => {
      const newsArticle = articleToNewsArticle(article);
      // Ensure imageUrl is a full URL
      newsArticle.imageUrl = getFullImageUrl(newsArticle.imageUrl, supabaseUrl);
      return newsArticle;
    });
    
    const categories = [...new Set(articles.map(article => article.category))];
    const years = [...new Set(articles.map(article => 
      new Date(article.date).getFullYear().toString()
    ))].sort((a, b) => parseInt(b) - parseInt(a));

    return {
      articles,
      categories,
      years,
      totalCount: articles.length
    };
  } catch (error) {
    console.error('Error fetching timeline data:', error);
    return {
      articles: [],
      categories: [],
      years: [],
      totalCount: 0
    };
  }
}

export async function fetchArticleBySlug(slug: string): Promise<PageData> {
  if (!supabaseSSG) {
    return {};
  }

  try {
    const { data, error } = await supabaseSSG
      .from('articles')
      .select('*')
      .order('published_at', { ascending: false });

    if (error) throw error;

    const articles = (data || []).map(article => {
      const newsArticle = articleToNewsArticle(article);
      newsArticle.imageUrl = getFullImageUrl(newsArticle.imageUrl, supabaseUrl);
      return newsArticle;
    });

    const foundArticle = articles.find(a => a.slug === slug);

    return foundArticle ? { article: foundArticle } : {};
  } catch (error) {
    console.error('Error fetching article by slug:', error);
    return {};
  }
}