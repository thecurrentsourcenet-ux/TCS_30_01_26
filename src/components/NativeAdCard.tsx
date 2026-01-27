import React from 'react';
import { ExternalLink, Zap, TrendingUp, Award } from 'lucide-react';

interface NativeAdProps {
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaUrl: string;
  company: string;
  category: 'solar' | 'wind' | 'storage' | 'grid' | 'efficiency' | 'investment';
  badge?: string;
  className?: string;
}

export default function NativeAdCard({
  title,
  description,
  imageUrl,
  ctaText,
  ctaUrl,
  company,
  category,
  badge,
  className = ''
}: NativeAdProps) {
  const handleClick = () => {
    window.open(ctaUrl, '_blank', 'noopener,noreferrer');
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

  return (
    <article 
      className={`bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer group ${className}`}
      onClick={handleClick}
    >
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">
            Sponsored
          </span>
          {badge && (
            <span className="text-xs bg-electric text-white px-2 py-1 rounded">
              {badge}
            </span>
          )}
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-electric transition-colors line-clamp-2">
              {title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-3">
              {description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {getCategoryIcon(category)}
                <span className="text-xs text-gray-500">{company}</span>
              </div>
              <span className="inline-flex items-center gap-1 text-electric hover:text-electric-700 text-sm font-medium group-hover:gap-2 transition-all">
                {ctaText}
                <ExternalLink className="h-3 w-3" />
              </span>
            </div>
          </div>

          <div className="flex-shrink-0 w-20 h-20">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </article>
  );
}