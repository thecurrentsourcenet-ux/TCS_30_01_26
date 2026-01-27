import React, { useState, useEffect, useMemo } from 'react';
import { Calendar, X, Globe, Zap, Linkedin, TrendingUp, Filter } from 'lucide-react';
import { lazy, Suspense } from 'react';
import SEOHead from '../components/SEOHead';
import SimpleSidebar from '../components/SimpleSidebar';
import SidebarNewsletterCTA from '../components/SidebarNewsletterCTA';
import WeeklyInsights from '../components/WeeklyInsights';
import ScrollNewsletterPopup from '../components/ScrollNewsletterPopup';
import { useScrollNewsletterPopup } from '../components/useScrollNewsletterPopup';
import EmailSignup from '../components/EmailSignup';
import FilterDropdown from '../components/header/FilterDropdown';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { fetchTimelineData } from '../lib/ssg';
import { supabaseUrl, getFullImageUrl } from '../lib/ssg';
import { getStaticData } from '../lib/staticData';
import { articleToNewsArticle } from '../types';
import type { NewsArticle } from '../types';

const HeaderHomeAd = () => {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="my-8">
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-4468932841277540"
           data-ad-slot="3201463151"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

// Lazy load heavy components
const NewsCard = lazy(() => import('../components/NewsCard'));
const YouTubeShortsSection = lazy(() => import('../components/YouTubeShortsSection'));
const IntelligentNavigationBot = lazy(() => import('../components/IntelligentNavigationBot'));
const VietnamDeepDiveBanner = lazy(() => import('../components/VietnamDeepDiveBanner'));
const HydrogenBookBanner = lazy(() => import('../components/HydrogenBookBanner'));
const InfographicsBanner = lazy(() => import('../components/InfographicsBanner'));

// Loading component for lazy components
const ComponentLoader = () => (
  <div className="animate-pulse bg-gray-100 rounded-lg h-32"></div>
);

export default function Timeline() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [selectedYears, setSelectedYears] = useState<Set<string>>(new Set());
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [availableYears, setAvailableYears] = useState<string[]>([]);
  
  // SEO data
  const pageTitle = "Energy News Timeline - TheCurrentSource";
  const pageDescription = "Stay current with the latest energy developments. Comprehensive timeline of energy news, policy updates, and industry innovations from around the world.";
  const canonicalUrl = "https://thecurrentsource.net/";
  
  // Newsletter popup hook
  const { showPopup, closePopup } = useScrollNewsletterPopup();

  useEffect(() => {
    // Try to use SSG data first, fallback to client fetch
    const initializeData = async () => {
      try {
        const ssgData = await fetchTimelineData();
        if (ssgData.articles && ssgData.articles.length > 0) {
          setArticles(ssgData.articles);
          setAvailableCategories(ssgData.categories || []);
          setAvailableYears(ssgData.years || []);
          setLoading(false);
          return;
        }
      } catch (error) {
        console.warn('SSG data not available, falling back to client fetch');
      }
      
      // Fallback to client-side fetch
      fetchArticles();
    };
    
    initializeData();
  }, []);

  const fetchArticles = async () => {
    // Try static data first (for better performance)
    try {
      const staticData = await getStaticData();
      if (staticData && staticData.articles.length > 0) {
        setArticles(staticData.articles);
        setAvailableCategories(staticData.categories);
        setAvailableYears(staticData.years);
        setLoading(false);
        return;
      }
    } catch (error) {
      console.warn('Static data not available, trying SSG fetch');
    }

    // Try SSG data
    try {
      const ssgData = await fetchTimelineData();
      if (ssgData.articles && ssgData.articles.length > 0) {
        setArticles(ssgData.articles);
        setAvailableCategories(ssgData.categories || []);
        setAvailableYears(ssgData.years || []);
        setLoading(false);
        return;
      }
    } catch (error) {
      console.warn('SSG data not available, falling back to client fetch');
    }

    if (!isSupabaseConfigured() || !supabase) {
      // Fallback sample data when Supabase is not configured
      const sampleNews: NewsArticle[] = [
        {
          id: '1',
          title: 'Global Energy Sector Faces Talent, Investment, and Policy Headwinds',
          description: 'The energy industry is grappling with a severe talent shortage, rising investment needs, and shifting policy landscapes.',
          imageUrl: `${supabaseUrl}/storage/v1/object/public/publicimages/TalentInvestmentandPolicyHeadwinds.png`,
          category: 'markets',
          source: 'Energy Industry Analysis',
          date: '2025-01-21T10:00:00Z',
          url: '#',
          featured: true,
          readTime: 8,
          tags: ['Industry', 'Investment', 'Policy', 'Talent']
        },
        {
          id: '2',
          title: 'Hydrogen Power: Global Projects, Innovation, and Market Shifts',
          description: 'Hydrogen energy is advancing globally, with large-scale projects in China and Korea, new microgrid applications, and ongoing cost reductions.',
          imageUrl: `${supabaseUrl}/storage/v1/object/public/publicimages/Hydrogen_Energy_Global_Advancement.png`,
          category: 'technology',
          source: 'Hydrogen Technology Review',
          date: '2025-01-21T10:00:00Z',
          url: '#',
          featured: true,
          readTime: 10,
          tags: ['Hydrogen', 'Technology', 'Global', 'Innovation']
        },
        {
          id: '3',
          title: 'Renewable Energy Developments and Challenges in 2025',
          description: 'Recent trends in renewable energy highlight significant developments across Europe, the Middle East, and the United States.',
          imageUrl: `${supabaseUrl}/storage/v1/object/public/publicimages/Renewable_Energy_Global_Surge_and_Challenges.png`,
          category: 'renewable',
          source: 'Renewable Energy Weekly',
          date: '2025-01-21T10:00:00Z',
          url: '#',
          featured: false,
          readTime: 7,
          tags: ['Renewable', 'Europe', 'Policy', 'Challenges']
        }
      ];
      
      setArticles(sampleNews);
      setAvailableCategories(['markets', 'technology', 'renewable', 'solar', 'wind']);
      setAvailableYears(['2025']);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) throw error;

      const newsArticles = (data || []).map(article => {
        const newsArticle = articleToNewsArticle(article);
        newsArticle.imageUrl = getFullImageUrl(newsArticle.imageUrl, supabaseUrl);
        return newsArticle;
      });
      
      setArticles(newsArticles);

      // Extract unique categories and years
      const categories = [...new Set(newsArticles.map(article => article.category))];
      const years = [...new Set(newsArticles.map(article => 
        new Date(article.date).getFullYear().toString()
      ))].sort((a, b) => parseInt(b) - parseInt(a));

      setAvailableCategories(categories);
      setAvailableYears(years);
    } catch (err) {
      console.error('Error fetching articles:', err);
      // Fallback to sample data on error
      const sampleNews: NewsArticle[] = [
        {
          id: '1',
          title: 'Sample: Energy Storage Breakthrough',
          description: 'Scientists have developed a new battery technology that could revolutionize energy storage.',
          imageUrl: 'https://images.unsplash.com/photo-1564281616392-43272c85a74e?auto=format&fit=crop&q=80',
          category: 'technology',
          source: 'Sample Source',
          date: '2024-03-15T10:00:00Z',
          url: '#',
          featured: true
        }
      ];
      setArticles(sampleNews);
      setAvailableCategories(['technology']);
      setAvailableYears(['2024']);
    } finally {
      setLoading(false);
    }
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const toggleYear = (year: string) => {
    setSelectedYears(prev => {
      const newSet = new Set(prev);
      if (newSet.has(year)) {
        newSet.delete(year);
      } else {
        newSet.add(year);
      }
      return newSet;
    });
  };

  const clearAllFilters = () => {
    setSelectedCategories(new Set());
    setSelectedYears(new Set());
  };

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const categoryMatch = selectedCategories.size === 0 || selectedCategories.has(article.category);
      const yearMatch = selectedYears.size === 0 || selectedYears.has(new Date(article.date).getFullYear().toString());
      return categoryMatch && yearMatch;
    });
  }, [articles, selectedCategories, selectedYears]);

  // Get the latest 6 news articles
  const latestNews = useMemo(() => {
    return filteredArticles.slice(0, 6);
  }, [filteredArticles]);

  // Group remaining articles by category
  const remainingArticlesGroupedByCategory = useMemo(() => {
    const remainingArticles = filteredArticles.slice(6);
    const grouped: { [key: string]: NewsArticle[] } = {};
    
    remainingArticles.forEach(article => {
      if (!grouped[article.category]) {
        grouped[article.category] = [];
      }
      grouped[article.category].push(article);
    });
    
    return grouped;
  }, [filteredArticles]);

  const hasActiveFilters = selectedCategories.size > 0 || selectedYears.size > 0;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-electric mx-auto mb-4"></div>
          <p className="text-gray-600">Loading timeline...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="energy news timeline, energy developments, renewable energy news, energy policy updates, clean energy innovations, energy industry news"
        canonicalUrl={canonicalUrl}
        ogType="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Energy News Timeline",
          "description": pageDescription,
          "url": canonicalUrl,
          "isPartOf": {
            "@type": "WebSite",
            "name": "TheCurrentSource",
            "url": "https://thecurrentsource.net"
          }
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1 order-2 lg:order-1 space-y-6" role="complementary">
          <SidebarNewsletterCTA />
          <SimpleSidebar />
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3 order-1 lg:order-2 space-y-8" role="main">
          {/* Infographics Banner */}
          <Suspense fallback={<ComponentLoader />}>
            <InfographicsBanner />
          </Suspense>

          {/* Hydrogen Book Banner */}
          <Suspense fallback={<ComponentLoader />}>
            <HydrogenBookBanner />
          </Suspense>

          {/* Google Ad - Header Home */}
          <HeaderHomeAd />

          {/* Page Header */}
          <header>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-electric-100 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-electric" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Energy News Timeline</h1>
              </div>

              {/* Filter Dropdown */}
              <FilterDropdown
                categories={availableCategories}
                years={availableYears}
                selectedCategories={selectedCategories}
                selectedYears={selectedYears}
                onToggleCategory={toggleCategory}
                onToggleYear={toggleYear}
                onClearAll={clearAllFilters}
              />
            </div>
            <p className="text-gray-600 text-base sm:text-lg">
              Stay current with the latest energy developments from around the world
            </p>
          </header>

          {/* Filter Status */}
          {hasActiveFilters && (
            <div className="bg-electric-50 border border-electric-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-electric" />
                  <span className="text-sm font-medium text-electric-700">
                    Filters active: {filteredArticles.length} of {articles.length} articles
                  </span>
                </div>
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-electric-600 hover:text-electric-800 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}

          {/* Latest 6 News */}
          {latestNews.length > 0 && (
            <section className="animate-fadeIn">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-6 w-6 text-electric" />
                <h2 className="text-2xl font-bold text-gray-800">Latest News</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestNews.map(article => (
                  <div key={article.id} className="transform hover:scale-[1.02] transition-transform duration-300">
                    <Suspense fallback={<ComponentLoader />}>
                      <NewsCard article={article} />
                    </Suspense>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Newsletter Signup */}
          <EmailSignup />

          {/* Vietnam Deep Dive Banner */}
          <Suspense fallback={<ComponentLoader />}>
            <VietnamDeepDiveBanner />
          </Suspense>

          {/* YouTube Shorts */}
          <Suspense fallback={<ComponentLoader />}>
            <YouTubeShortsSection />
          </Suspense>

          {/* News by Category */}
          {Object.keys(remainingArticlesGroupedByCategory).length > 0 && (
            <section className="animate-fadeIn">
              <div className="flex items-center gap-3 mb-8">
                <Globe className="h-6 w-6 text-electric" />
                <h2 className="text-2xl font-bold text-gray-800">News by Category</h2>
              </div>
              
              {Object.entries(remainingArticlesGroupedByCategory).map(([category, categoryArticles]) => (
                <div key={category} className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-electric-100 p-2 rounded-lg">
                      <Zap className="h-5 w-5 text-electric" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 capitalize">
                      {category} News
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {categoryArticles.length} articles
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryArticles.map(article => (
                      <div key={article.id} className="transform hover:scale-[1.02] transition-transform duration-300">
                        <Suspense fallback={<ComponentLoader />}>
                          <NewsCard article={article} />
                        </Suspense>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Weekly Insights */}
          <WeeklyInsights />

          {/* Connect Section */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Linkedin className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">Connect with Us</h2>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Follow us on LinkedIn for the latest energy industry insights and updates
              </p>
              
              {/* LinkedIn Badge */}
              <div className="flex justify-center mb-4">
                <div 
                  className="badge-base LI-profile-badge" 
                  data-locale="en_US" 
                  data-size="medium" 
                  data-theme="light" 
                  data-type="VERTICAL" 
                  data-vanity="the-current-source-616307380" 
                  data-version="v1"
                >
                  <a 
                    className="badge-base__link LI-simple-link" 
                    href="https://it.linkedin.com/in/the-current-source-616307380?trk=profile-badge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Current Source
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://it.linkedin.com/in/the-current-source-616307380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <Linkedin className="h-5 w-5" />
                  Follow on LinkedIn
                </a>
                
                <a
                  href="mailto:thecurrentsource.net@gmail.com"
                  className="inline-flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
                >
                  Contact Us
                </a>
              </div>
              
              {/* Social Icons Row */}
              <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-100">
                {/* LinkedIn Icon */}
                <a
                  href="https://it.linkedin.com/in/the-current-source-616307380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                
                {/* YouTube Icon */}
                <a
                  href="https://www.youtube.com/@TheCurrentSource"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                  </svg>
                </a>
                
                {/* TikTok Icon */}
                <a
                  href="https://www.tiktok.com/@TheCurrentSource"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-black transition-colors"
                  aria-label="TikTok"
                  title="TikTok"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Suspense fallback={null}>
        <IntelligentNavigationBot />
      </Suspense>
      <ScrollNewsletterPopup isVisible={showPopup} onClose={closePopup} />
    </>
  );
}