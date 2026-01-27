import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { memo } from 'react';
import type { NewsArticle } from '../types';

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

const NewsCard = memo(function NewsCard({ article, featured = false }: NewsCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the new slug-based article view
    navigate(`/articles/${article.slug}`);
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col ${featured ? 'md:grid md:grid-cols-2 md:gap-6 md:h-auto' : ''}`}
      onClick={handleClick}
    >
      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={article.title}
          className={`w-full ${featured ? 'h-full md:h-full' : 'h-48'} object-cover hover:scale-105 transition-transform duration-300 flex-shrink-0`}
          loading="lazy"
          decoding="async"
          fetchpriority={featured ? "high" : "auto"}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      )}
      <div className={`p-6 ${featured ? '' : 'flex-1 flex flex-col'}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-electric font-medium">
            {article.category}
          </span>
          <span className="text-sm text-gray-500">
            {formatDistanceToNow(new Date(article.date), { addSuffix: true })}
          </span>
        </div>
        <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-semibold mb-3 ${featured ? '' : 'line-clamp-2'}`}>
          {article.title}
        </h3>
        <p className={`text-gray-600 mb-4 line-clamp-3 ${featured ? '' : 'flex-1'}`}>{article.description}</p>
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-sm text-gray-500">{article.source}</span>
          <span
            className="flex items-center text-electric hover:text-electric-700 text-sm font-medium"
          >
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
});

export default NewsCard;