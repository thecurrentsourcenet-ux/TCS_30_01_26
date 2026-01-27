import React, { useState, useEffect } from 'react';
import { Zap, TrendingUp, Award, ExternalLink, Clock, Users, BarChart } from 'lucide-react';

interface SponsoredArticle {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  readTime: string;
  category: string;
  sponsor: string;
  ctaUrl: string;
  publishedAt: string;
  engagement: {
    views: string;
    shares: string;
  };
}

const sponsoredArticles: SponsoredArticle[] = [
  {
    id: 'renewable-trends-2025',
    title: 'Renewable Energy Trends Shaping 2025: What Industry Leaders Need to Know',
    excerpt: 'Discover the key renewable energy trends that will define the industry in 2025. From breakthrough storage technologies to policy changes, get insights that matter for your business strategy.',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=600',
    readTime: '5 min read',
    category: 'Industry Analysis',
    sponsor: 'EnergyInsights Pro',
    ctaUrl: '#',
    publishedAt: '2025-01-15',
    engagement: {
      views: '12.5K',
      shares: '340'
    }
  },
  {
    id: 'grid-modernization-guide',
    title: 'Smart Grid Modernization: A Complete Implementation Guide for Utilities',
    excerpt: 'Learn how utilities are successfully modernizing their grids with smart technologies. Real case studies, ROI analysis, and step-by-step implementation strategies.',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600',
    readTime: '8 min read',
    category: 'Technology Guide',
    sponsor: 'GridTech Solutions',
    ctaUrl: '#',
    publishedAt: '2025-01-12',
    engagement: {
      views: '8.7K',
      shares: '156'
    }
  },
  {
    id: 'energy-storage-economics',
    title: 'The Economics of Energy Storage: Making the Business Case in 2025',
    excerpt: 'Comprehensive analysis of energy storage economics, including cost trends, financing options, and revenue models that make projects profitable.',
    imageUrl: 'https://images.unsplash.com/photo-1564281616392-43272c85a74e?auto=format&fit=crop&q=80&w=600',
    readTime: '6 min read',
    category: 'Financial Analysis',
    sponsor: 'StorageCapital Advisors',
    ctaUrl: '#',
    publishedAt: '2025-01-10',
    engagement: {
      views: '15.2K',
      shares: '428'
    }
  }
];

interface SponsoredContentProps {
  placement?: 'timeline' | 'sidebar' | 'footer';
  maxItems?: number;
  className?: string;
}

export default function SponsoredContent({ 
  placement = 'timeline', 
  maxItems = 3,
  className = '' 
}: SponsoredContentProps) {
  const [articles, setArticles] = useState<SponsoredArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading sponsored content
    const timer = setTimeout(() => {
      setArticles(sponsoredArticles.slice(0, maxItems));
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [maxItems]);

  const handleArticleClick = (article: SponsoredArticle) => {
    // Track sponsored content engagement
    console.log('Sponsored content clicked:', article.id);
    window.open(article.ctaUrl, '_blank', 'noopener,noreferrer');
  };

  if (isLoading) {
    return (
      <div className={`space-y-4 ${className}`}>
        {Array.from({ length: maxItems }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 animate-pulse">
            <div className="flex gap-4">
              <div className="flex-1 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
              <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (placement === 'sidebar') {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-electric" />
          <h3 className="font-semibold text-gray-800">Sponsored Insights</h3>
        </div>
        
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all cursor-pointer group"
            onClick={() => handleArticleClick(article)}
          >
            <div className="flex items-start gap-2 mb-2">
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                Sponsored
              </span>
              <span className="text-xs text-electric bg-electric-50 px-2 py-1 rounded">
                {article.category}
              </span>
            </div>
            
            <h4 className="font-medium text-gray-800 mb-2 group-hover:text-electric transition-colors line-clamp-2">
              {article.title}
            </h4>
            
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{article.sponsor}</span>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    );
  }

  // Timeline placement (default)
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-electric-100 p-2 rounded-lg">
          <Award className="h-5 w-5 text-electric" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Sponsored Industry Insights</h2>
      </div>
      
      {articles.map((article, index) => (
        <article
          key={article.id}
          className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all cursor-pointer group"
          onClick={() => handleArticleClick(article)}
        >
          <div className="flex items-start gap-2 mb-4">
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">
              Sponsored Content
            </span>
            <span className="text-xs text-electric bg-electric-50 px-3 py-1 rounded-full font-medium">
              {article.category}
            </span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-electric transition-colors">
                {article.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{article.engagement.views} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <BarChart className="h-4 w-4" />
                  <span>{article.engagement.shares} shares</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm font-medium text-gray-700">
                  By {article.sponsor}
                </span>
                <span className="inline-flex items-center gap-1 text-electric hover:text-electric-700 font-medium group-hover:gap-2 transition-all">
                  Read Full Analysis
                  <ExternalLink className="h-4 w-4" />
                </span>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 md:h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                <TrendingUp className="h-4 w-4 text-electric" />
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}