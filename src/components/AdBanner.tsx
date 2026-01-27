import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Zap, TrendingUp, Award, Clock } from 'lucide-react';

interface AdData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaUrl: string;
  company: string;
  category: 'solar' | 'wind' | 'storage' | 'grid' | 'efficiency' | 'policy' | 'investment';
  badge?: string;
  sponsored: boolean;
}

interface AdBannerProps {
  placement: 'header' | 'sidebar' | 'inline' | 'footer';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

// Sample energy-related ads (in production, these would come from an ad server)
const energyAds: AdData[] = [
  {
    id: 'solar-tech-1',
    title: 'Advanced Solar Panel Technology',
    description: 'Increase efficiency by 40% with next-generation photovoltaic cells. Perfect for commercial and residential installations.',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=400',
    ctaText: 'Learn More',
    ctaUrl: '#',
    company: 'SolarTech Innovations',
    category: 'solar',
    badge: 'New Technology',
    sponsored: true
  },
  {
    id: 'wind-energy-1',
    title: 'Offshore Wind Solutions',
    description: 'Leading offshore wind turbine technology for maximum energy generation in marine environments.',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=400',
    ctaText: 'Explore Solutions',
    ctaUrl: '#',
    company: 'WindPower Marine',
    category: 'wind',
    sponsored: true
  },
  {
    id: 'battery-storage-1',
    title: 'Grid-Scale Energy Storage',
    description: 'Revolutionary battery technology for utility-scale energy storage. Proven reliability and performance.',
    imageUrl: 'https://images.unsplash.com/photo-1564281616392-43272c85a74e?auto=format&fit=crop&q=80&w=400',
    ctaText: 'Get Quote',
    ctaUrl: '#',
    company: 'PowerStore Systems',
    category: 'storage',
    badge: 'Industry Leading',
    sponsored: true
  },
  {
    id: 'smart-grid-1',
    title: 'Smart Grid Management Platform',
    description: 'AI-powered grid optimization software for utilities. Reduce costs and improve reliability.',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400',
    ctaText: 'Request Demo',
    ctaUrl: '#',
    company: 'GridSmart Technologies',
    category: 'grid',
    sponsored: true
  },
  {
    id: 'energy-efficiency-1',
    title: 'Industrial Energy Efficiency',
    description: 'Cut energy costs by up to 30% with our comprehensive efficiency audit and implementation services.',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400',
    ctaText: 'Schedule Audit',
    ctaUrl: '#',
    company: 'EcoEfficiency Solutions',
    category: 'efficiency',
    badge: 'Save 30%',
    sponsored: true
  },
  {
    id: 'investment-fund-1',
    title: 'Clean Energy Investment Fund',
    description: 'Invest in the future of energy. Diversified portfolio of renewable energy projects with strong returns.',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=400',
    ctaText: 'Learn About Investing',
    ctaUrl: '#',
    company: 'GreenCapital Partners',
    category: 'investment',
    sponsored: true
  }
];

export default function AdBanner({ placement, size = 'medium', className = '' }: AdBannerProps) {
  const [currentAd, setCurrentAd] = useState<AdData | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Select appropriate ad based on placement and context
  useEffect(() => {
    const selectAd = () => {
      // In production, this would be more sophisticated ad targeting
      const availableAds = energyAds.filter(ad => {
        // Filter ads based on placement context
        if (placement === 'header') return ['solar', 'wind', 'investment'].includes(ad.category);
        if (placement === 'sidebar') return ['storage', 'efficiency', 'grid'].includes(ad.category);
        return true;
      });

      const randomAd = availableAds[Math.floor(Math.random() * availableAds.length)];
      setCurrentAd(randomAd);
      setIsLoading(false);
    };

    const timer = setTimeout(selectAd, 500); // Simulate loading
    return () => clearTimeout(timer);
  }, [placement]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleClick = () => {
    if (currentAd) {
      // Track ad click (in production)
      console.log('Ad clicked:', currentAd.id);
      window.open(currentAd.ctaUrl, '_blank', 'noopener,noreferrer');
    }
  };

  if (!isVisible || !currentAd || isLoading) {
    return null;
  }

  const sizeClasses = {
    small: 'p-3',
    medium: 'p-4',
    large: 'p-6'
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'solar': return <Zap className="h-4 w-4 text-yellow-600" />;
      case 'wind': return <TrendingUp className="h-4 w-4 text-blue-600" />;
      case 'storage': return <Award className="h-4 w-4 text-purple-600" />;
      case 'grid': return <Zap className="h-4 w-4 text-electric" />;
      case 'efficiency': return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'investment': return <Award className="h-4 w-4 text-emerald-600" />;
      default: return <Zap className="h-4 w-4 text-electric" />;
    }
  };

  // Different layouts based on placement
  if (placement === 'header') {
    return (
      <div className={`bg-gradient-to-r from-electric-50 to-teal-50 border border-electric-100 rounded-lg ${sizeClasses[size]} ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0">
              {getCategoryIcon(currentAd.category)}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-gray-500 font-medium">Sponsored</span>
                {currentAd.badge && (
                  <span className="text-xs bg-electric text-white px-2 py-0.5 rounded-full">
                    {currentAd.badge}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-gray-800 text-sm truncate">{currentAd.title}</h3>
              <p className="text-gray-600 text-xs truncate">{currentAd.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 ml-4">
            <button
              onClick={handleClick}
              className="bg-electric text-white px-3 py-1 rounded text-xs font-medium hover:bg-electric-600 transition-colors"
            >
              {currentAd.ctaText}
            </button>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 p-1"
              aria-label="Close ad"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default card layout for sidebar and inline placements
  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all ${sizeClasses[size]} ${className}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 font-medium">Sponsored</span>
          {currentAd.badge && (
            <span className="text-xs bg-electric text-white px-2 py-0.5 rounded-full">
              {currentAd.badge}
            </span>
          )}
        </div>
        <button
          onClick={handleClose}
          className="text-gray-400 hover:text-gray-600 p-1"
          aria-label="Close ad"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="cursor-pointer" onClick={handleClick}>
        <div className="relative mb-3 overflow-hidden rounded-lg">
          <img
            src={currentAd.imageUrl}
            alt={currentAd.title}
            className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute top-2 left-2">
            {getCategoryIcon(currentAd.category)}
          </div>
        </div>

        <h3 className="font-semibold text-gray-800 mb-2 hover:text-electric transition-colors">
          {currentAd.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
          {currentAd.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{currentAd.company}</span>
          <button className="inline-flex items-center gap-1 text-electric hover:text-electric-700 text-sm font-medium group">
            {currentAd.ctaText}
            <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}