import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { Search, Loader2, ArrowLeft, Filter, X } from 'lucide-react';
import NewsCard from '../components/NewsCard';
import EmailSignup from '../components/EmailSignup';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { NewsArticle } from '../types';
import { articleToNewsArticle } from '../types';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  
  const [results, setResults] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState(query);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (query) {
      performSearch(query);
      fetchCategories();
    }
  }, [query]);

  const fetchCategories = async () => {
    if (!isSupabaseConfigured() || !supabase) {
      setCategories(['technology', 'markets', 'policy', 'wind', 'solar']);
      return;
    }

    try {
      const { data, error: fetchError } = await supabase
        .from('articles')
        .select('category')
        .order('category');

      if (fetchError) throw fetchError;

      const uniqueCategories = [...new Set(data?.map(item => item.category) || [])];
      setCategories(uniqueCategories);
    } catch (err) {
      console.error('Error fetching categories:', err);
      setCategories(['technology', 'markets', 'policy', 'wind', 'solar']);
    }
  };

  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    if (!isSupabaseConfigured() || !supabase) {
      // Fallback search in sample data
      const sampleData: NewsArticle[] = [
        {
          id: 'sample-1',
          date: '2024-12-15T10:00:00Z',
          title: 'Sample: Revolutionary Energy Storage Breakthrough',
          description: 'Scientists have developed a new battery technology that could revolutionize energy storage.',
          imageUrl: 'https://images.unsplash.com/photo-1564281616392-43272c85a74e?auto=format&fit=crop&q=80',
          category: 'technology',
          source: 'Sample Source',
          url: '#',
          readTime: 5,
          tags: ['Technology', 'Storage', 'Innovation']
        },
        {
          id: 'sample-2',
          date: '2024-12-10T10:00:00Z',
          title: 'Sample: Global Renewable Energy Investment Reaches Record High',
          description: 'Investment in renewable energy projects has reached unprecedented levels this year.',
          imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
          category: 'markets',
          source: 'Sample Source',
          url: '#',
          readTime: 7,
          tags: ['Investment', 'Renewable', 'Global']
        }
      ];

      const filteredResults = sampleData.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );

      setResults(filteredResults);
      setLoading(false);
      return;
    }

    try {
      let query = supabase
        .from('articles')
        .select('*')
        .order('published_at', { ascending: false });

      // Build search query using ilike for case-insensitive search
      const searchTerm = `%${searchQuery}%`;
      query = query.or(`title.ilike.${searchTerm},summary.ilike.${searchTerm},content.ilike.${searchTerm},source_name.ilike.${searchTerm},author.ilike.${searchTerm}`);

      // Apply category filter if selected
      if (selectedCategory !== 'all') {
        query = query.eq('category', selectedCategory);
      }

      const { data, error: fetchError } = await query;

      if (fetchError) throw fetchError;

      const searchResults = (data || []).map(articleToNewsArticle);
      setResults(searchResults);
      
    } catch (err) {
      console.error('Error performing search:', err);
      setError('Failed to perform search. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (query) {
      performSearch(query);
    }
  };

  const clearCategoryFilter = () => {
    setSelectedCategory('all');
    if (query) {
      performSearch(query);
    }
  };

  const filteredResults = selectedCategory === 'all' 
    ? results 
    : results.filter(article => article.category === selectedCategory);

  const pageTitle = query ? `Search: ${query}` : 'Search';
  const pageDescription = query 
    ? `Search results for "${query}" on TheCurrentSource - Your comprehensive energy information hub.`
    : 'Search through our comprehensive energy news database for articles, topics, and insights.';
  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        noIndex={true}
      />

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-4 hover:translate-x-1 transition-transform"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </button>

        {/* Search Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-4 mb-6">
            <Search className="h-8 w-8 text-electric" />
            <h1 className="text-3xl font-bold text-gray-800">Search Energy News</h1>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className="mb-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search articles, topics, or sources..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric text-lg"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-electric text-white px-6 py-3 rounded-lg hover:bg-electric-600 transition-colors font-medium disabled:opacity-50"
              >
                Search
              </button>
            </div>
          </form>

          {/* Category Filter */}
          {categories.length > 0 && (
            <div className="flex items-center gap-3 mb-4">
              <Filter className="h-5 w-5 text-electric" />
              <span className="text-sm font-medium text-gray-700">Filter by category:</span>
              {selectedCategory !== 'all' && (
                <button
                  onClick={clearCategoryFilter}
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-electric transition-colors"
                >
                  <X className="h-4 w-4" />
                  Clear filter
                </button>
              )}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCategoryFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-electric text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                  selectedCategory === category
                    ? 'bg-electric text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results */}
        <div>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <Loader2 className="h-12 w-12 animate-spin text-electric mx-auto mb-4" />
                <p className="text-gray-600">Searching...</p>
              </div>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={() => performSearch(query)}
                className="text-red-700 hover:text-red-900 underline"
              >
                Try again
              </button>
            </div>
          ) : query ? (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Search Results for "{query}"
                </h2>
                <p className="text-gray-600">
                  Found {filteredResults.length} {filteredResults.length === 1 ? 'article' : 'articles'}
                  {selectedCategory !== 'all' && ` in ${selectedCategory} category`}
                </p>
              </div>

              {filteredResults.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
                  <p className="text-gray-500 mb-6">
                    No articles match your search for "{query}"
                    {selectedCategory !== 'all' && ` in the ${selectedCategory} category`}
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p>Try:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Using different keywords</li>
                      <li>Checking your spelling</li>
                      <li>Using broader search terms</li>
                      {selectedCategory !== 'all' && <li>Removing the category filter</li>}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResults.map((article) => (
                    <div key={article.id} className="transform hover:scale-[1.02] transition-transform duration-300">
                      <NewsCard article={article} />
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Start Your Search</h3>
              <p className="text-gray-500">
                Enter keywords to search through our comprehensive energy news database
              </p>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <EmailSignup />
      </div>
    </>
  );
}