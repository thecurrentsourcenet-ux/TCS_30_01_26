import type { NewsArticle } from '../types';

export interface StaticData {
  articles: NewsArticle[];
  categories: string[];
  years: string[];
  totalCount: number;
  generatedAt: string;
}

let cachedStaticData: StaticData | null = null;

export async function getStaticData(): Promise<StaticData | null> {
  if (cachedStaticData) {
    return cachedStaticData;
  }

  try {
    const timestamp = Date.now();
    const response = await fetch(`/static-data.json?v=${timestamp}`);
    if (!response.ok) {
      throw new Error('Static data not found');
    }

    const data = await response.json();
    cachedStaticData = data;
    return data;
  } catch (error) {
    console.warn('Could not load static data:', error);
    return null;
  }
}

export function clearStaticDataCache() {
  cachedStaticData = null;
}