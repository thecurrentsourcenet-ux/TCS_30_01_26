import { Database } from './lib/database.types';

// Utility function to slugify a string
export function slugify(text: string): string {
  return text
    .normalize("NFKD") // Normalize diacritics
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, "") // Trim hyphens from start and end
    .slice(0, 80); // Limit length to 80 characters
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  date: string;
  highlights: string[];
}

export type EnergyCategory = 'technical' | 'legislation' | 'all';

export interface LegislationCountry {
  id: string;
  name: string;
  code: string;
}

export interface CategoryStructure {
  id: string;
  name: string;
  icon: string;
  subcategories?: {
    id: string;
    name: string;
    description?: string;
  }[];
}


export type Tables = Database['public']['Tables'];
export type Enums = Database['public']['Enums'];

// Type aliases for easier use
export type Profile = Tables['profiles']['Row'];
export type Subscription = Tables['user_subscriptions']['Row'];
export type Article = Tables['articles']['Row'];
export type Comment = Tables['comments']['Row'];
export type UserPreferences = Tables['user_preferences']['Row'];

// Enhanced Profile type with subscription
export interface ProfileWithSubscription extends Profile {
  subscription?: Subscription;
}

// Enhanced NewsArticle interface that maps to Supabase Article
export interface NewsArticle {
  id: string;
  title: string;
  description: string; // Maps to summary
  imageUrl: string | null; // Maps to image_url
  category: string;
  source: string; // Maps to source_name
  date: string; // Maps to published_at
  url: string; // Maps to source_url
  featured?: boolean;
  premium?: boolean; // Maps to is_premium
  content?: string;
  author?: string | null;
  readTime?: number; // Maps to read_time
  likesCount?: number; // Maps to likes_count
  viewsCount?: number; // Maps to views_count
  tags?: string[];
  region?: string;
  slug?: string; // Added slug property
}

// Helper function to convert Supabase Article to NewsArticle
export function articleToNewsArticle(article: Article): NewsArticle {
  return {
    id: article.id,
    title: article.title,
    description: article.summary,
    imageUrl: article.image_url,
    category: article.category,
    source: article.source_name,
    date: article.published_at,
    url: article.source_url,
    featured: false, // Can be determined by logic or additional field
    premium: article.is_premium,
    content: article.content,
    author: article.author,
    readTime: article.read_time,
    likesCount: article.likes_count,
    viewsCount: article.views_count,
    tags: article.tags,
    region: article.region,
    slug: slugify(article.title) // Generate slug from title
  };
}