import React, { useState, useEffect, useMemo } from 'react';
import NewsCard from './NewsCard';
import { Loader2 } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { articleToNewsArticle } from '../types';
import type { NewsArticle, Article } from '../types';

interface NewsFeedProps {
  category?: string;
  subcategory?: string;
  searchQuery?: string;
}

export default function NewsFeed({ category = 'all', subcategory, searchQuery }: NewsFeedProps) {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles();
  }, [category, subcategory, searchQuery]);

  const fetchArticles = async () => {
    try {
      setLoading(true);

      const { getStaticData } = await import('../lib/staticData');
      const staticData = await getStaticData();

      if (staticData && staticData.articles.length > 0) {
        let filteredArticles = staticData.articles;

        if (category && category !== 'all') {
          filteredArticles = filteredArticles.filter(a =>
            a.category?.toLowerCase() === category.toLowerCase()
          );
        }

        if (subcategory) {
          filteredArticles = filteredArticles.filter(a =>
            a.region?.toLowerCase() === subcategory.toLowerCase()
          );
        }

        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          filteredArticles = filteredArticles.filter(a =>
            a.title.toLowerCase().includes(query) ||
            a.description.toLowerCase().includes(query) ||
            a.tags?.some(tag => tag.toLowerCase().includes(query))
          );
        }

        setArticles(filteredArticles);
        setLoading(false);
        setError(null);
        return;
      }
    } catch (error) {
      console.warn('Static data not available, trying Supabase');
    }

    if (!isSupabaseConfigured() || !supabase) {
      // Fallback sample data when Supabase is not configured
      const sampleNews: NewsArticle[] = [
        {
          id: '1',
          title: 'Sample: Solar Power Breakthrough',
          description: 'Scientists have developed a revolutionary solar panel design that significantly improves energy capture efficiency.',
          imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
          category: 'solar',
          source: 'Sample Source',
          date: '2024-03-15T10:00:00Z',
          url: '#',
          featured: true
        },
        {
          id: '2',
          title: 'Sample: Offshore Wind Farm Operations',
          description: 'A new offshore wind farm capable of powering over 1 million homes has commenced operations.',
          imageUrl: 'https://images.unsplash.com/photo-1467533003447-e295ff1b0435?auto=format&fit=crop&q=80',
          category: 'wind',
          source: 'Sample Source',
          date: '2024-03-14T15:30:00Z',
          url: '#',
          featured: true
        },
        {
          id: '3',
          title: 'Sample: Energy Storage Technology',
          description: 'New battery technology demonstrates breakthrough that cuts costs in half.',
          imageUrl: 'https://images.unsplash.com/photo-1564281616392-43272c85a74e?auto=format&fit=crop&q=80',
          category: 'technology',
          source: 'Sample Source',
          date: '2024-03-13T09:15:00Z',
          url: '#',
          featured: false
        }
      ];
      
      setArticles(sampleNews);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      let query = supabase
        .from('articles')
        .select('*')
        .order('published_at', { ascending: false })
        .limit(20);

      // Apply category filter
      if (category && category !== 'all') {
        query = query.eq('category', category);
      }

      // Apply region filter for subcategory (if it represents a region)
      if (subcategory) {
        query = query.eq('region', subcategory);
      }

      // Apply search filter
      if (searchQuery) {
        query = query.or(`title.ilike.%${searchQuery}%,summary.ilike.%${searchQuery}%,tags.cs.{${searchQuery}}`);
      }

      const { data, error: fetchError } = await query;

      if (fetchError) throw fetchError;

      const newsArticles = (data || []).map(articleToNewsArticle);
      setArticles(newsArticles);
      setError(null);
    } catch (err) {
      console.error('Error fetching articles:', err);
      
      // Check if the error is due to missing table
      const errorMessage = err instanceof Error ? err.message : String(err);
      if (errorMessage.includes('relation "public.articles" does not exist') || 
          errorMessage.includes('42P01')) {
        setError('Database not configured. Please run the Supabase migrations to create the articles table.');
        
        // Fallback to sample data when table doesn't exist
        const sampleNews: NewsArticle[] = [
          {
            id: '1',
            title: 'Sample: Solar Power Breakthrough',
            description: 'Scientists have developed a revolutionary solar panel design that significantly improves energy capture efficiency.',
            imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
            category: 'solar',
            source: 'Sample Source',
            date: '2024-03-15T10:00:00Z',
            url: '#',
            featured: true
          },
          {
            id: '2',
            title: 'Sample: Offshore Wind Farm Operations',
            description: 'A new offshore wind farm capable of powering over 1 million homes has commenced operations.',
            imageUrl: 'https://images.unsplash.com/photo-1467533003447-e295ff1b0435?auto=format&fit=crop&q=80',
            category: 'wind',
            source: 'Sample Source',
            date: '2024-03-14T15:30:00Z',
            url: '#',
            featured: true
          },
          {
            id: '3',
            title: 'Sample: Energy Storage Technology',
            description: 'New battery technology demonstrates breakthrough that cuts costs in half.',
            imageUrl: 'https://images.unsplash.com/photo-1564281616392-43272c85a74e?auto=format&fit=crop&q=80',
            category: 'technology',
            source: 'Sample Source',
            date: '2024-03-13T09:15:00Z',
            url: '#',
            featured: false
          }
        ];
        
        setArticles(sampleNews);
      } else {
        setError('Failed to load articles. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  const filteredNews = useMemo(() => {
    let news = articles;
    
    if (category !== 'all') {
      news = news.filter(article => article.category === category);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      news = news.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
      );
    }
    
    return news;
  }, [articles, category, searchQuery]);

  const featuredNews = filteredNews.filter(article => article.featured);
  const latestNews = filteredNews.filter(article => !article.featured);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-electric mx-auto mb-4" />
          <p className="text-gray-600">Loading articles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={fetchArticles}
            className="text-red-700 hover:text-red-900 underline"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (filteredNews.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">No articles found</h2>
        <p className="text-gray-500">
          {searchQuery 
            ? `No articles match your search for "${searchQuery}"`
            : !isSupabaseConfigured() 
              ? 'Configure Supabase to see articles from your database'
            : 'No articles available in this category yet'}
        </p>
        {!isSupabaseConfigured() && (
          <p className="text-sm text-gray-400 mt-2">
            Add your Supabase credentials to the .env file to connect to your database.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {!searchQuery && category === 'all' && featuredNews.length > 0 && (
        <section className="animate-fadeIn">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredNews.map(article => (
              <div key={article.id} className="md:first:col-span-2 transform hover:scale-[1.02] transition-transform duration-300">
                <NewsCard article={article} featured={true} />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {searchQuery 
            ? 'Search Results'
            : category === 'all' 
              ? 'Latest News' 
              : `Latest ${category} News`}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNews.map(article => (
            <div key={article.id} className="transform hover:scale-[1.02] transition-transform duration-300">
              <NewsCard key={article.id} article={article} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}