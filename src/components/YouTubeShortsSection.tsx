import React, { useState } from 'react';
import { Play, ExternalLink, Clock, Eye, ChevronLeft, ChevronRight } from 'lucide-react';


// Helper function to extract YouTube video ID from URL
const extractYouTubeId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

// Helper function to get YouTube thumbnail URL
const getYouTubeThumbnail = (videoUrl: string, quality: 'default' | 'medium' | 'high' | 'maxres' = 'maxres'): string => {
  const videoId = extractYouTubeId(videoUrl);
  if (!videoId) {
    // Fallback to a generic energy-related image if video ID can't be extracted
    return 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400';
  }
  
  // YouTube thumbnail URLs by quality:
  // default: 120x90
  // medium: 320x180  
  // high: 480x360
  // maxres: 1280x720 (best quality, but may not exist for all videos)
  return `https://img.youtube.com/vi/${videoId}/${quality === 'maxres' ? 'maxresdefault' : quality === 'high' ? 'hqdefault' : quality === 'medium' ? 'mqdefault' : 'default'}.jpg`;
};
interface YouTubeShort {
  id: string;
  title: string;
  videoUrl: string;
  views?: string;
  publishedAt: string;
}

// Sample shorts data - replace with your actual video links
const sampleShorts: YouTubeShort[] = [
  {
    id: '1',
    title: 'November 2025',
    videoUrl: 'https://youtube.com/shorts/R4sC-xS7nRA?si=eKJxC8lpZRD8A-l2',
    views: 'New',
    publishedAt: 'Latest'
  },
  {
    id: '2',
    title: 'October 2025',
    videoUrl: 'https://youtube.com/shorts/xR5I9ZbMvOE?si=iqsLKn6lityfJwB4',
    views: 'New',
    publishedAt: 'Latest'
  },
  {
    id: '3',
    title: 'September 2025',
    videoUrl: 'https://youtube.com/shorts/SLigNTQFVNc?si=-EO17XtEfOKK6w-8',
    views: 'New',
    publishedAt: 'Latest'
  },
  {
    id: '4',
    title: 'August 2025',
    videoUrl: 'https://youtube.com/shorts/0tJRvwVN7I8?si=7c0SfG4OmpU4wCsC',
    views: 'New',
    publishedAt: 'Latest'
  }
];

interface YouTubeShortsSectionProps {
  className?: string;
  maxVideos?: number;
}

export default function YouTubeShortsSection({ 
  className = '', 
  maxVideos = 4 
}: YouTubeShortsSectionProps) {
  const displayedShorts = sampleShorts.slice(0, maxVideos);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % displayedShorts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + displayedShorts.length) % displayedShorts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleVideoClick = (videoUrl: string, title: string) => {
    // Track video click for analytics
    console.log('YouTube Short clicked:', title);
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  const handleViewAllClick = () => {
    // Link to your YouTube channel
    window.open('https://www.youtube.com/channel/UChTISPWmyoNTAko8YFNksGA', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={`bg-white rounded-lg shadow-sm border border-gray-100 p-8 ${className}`}>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="bg-red-100 p-3 rounded-lg">
            <Play className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              ⚡ Quick Energy Insights
            </h2>
            <p className="text-gray-600">
              Watch our latest YouTube Shorts for bite-sized energy insights
            </p>
          </div>
        </div>
        
        <button
          onClick={handleViewAllClick}
          className="hidden sm:flex items-center gap-2 text-red-600 hover:text-red-700 font-medium group transition-colors"
        >
          View All Shorts
          <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Main Video Display */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Featured Video */}
            <div className="order-2 md:order-1">
              <div className="relative aspect-[9/16] max-w-xs mx-auto bg-gray-200 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
                   onClick={() => handleVideoClick(displayedShorts[currentIndex].videoUrl, displayedShorts[currentIndex].title)}>
                <img
                  src={getYouTubeThumbnail(displayedShorts[currentIndex].videoUrl, 'high')}
                  alt={displayedShorts[currentIndex].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to medium quality if high quality fails
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('hqdefault')) {
                      target.src = getYouTubeThumbnail(displayedShorts[currentIndex].videoUrl, 'medium');
                    } else if (target.src.includes('mqdefault')) {
                      // Final fallback to a generic energy image
                      target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400';
                    }
                  }}
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-red-600 rounded-full p-4 transform group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-white fill-current" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  5s
                </div>

                {/* YouTube Shorts Badge */}
                <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                  Shorts
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {displayedShorts[currentIndex].title}
              </h3>
              <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-600 mb-6">
                {displayedShorts[currentIndex].views && (
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {displayedShorts[currentIndex].views}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{displayedShorts[currentIndex].publishedAt}</span>
                </span>
              </div>
              
              <button
                onClick={() => handleVideoClick(displayedShorts[currentIndex].videoUrl, displayedShorts[currentIndex].title)}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center gap-2 mx-auto md:mx-0"
              >
                <Play className="h-5 w-5" />
                Watch Now
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        {displayedShorts.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all text-gray-600 hover:text-gray-800 z-10"
              aria-label="Previous video"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all text-gray-600 hover:text-gray-800 z-10"
              aria-label="Next video"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {displayedShorts.length > 1 && (
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {displayedShorts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-red-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Thumbnail Grid for Other Videos */}
        {displayedShorts.length > 1 && (
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">More Shorts</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {displayedShorts.map((short, index) => (
                index !== currentIndex && (
                  <div
                    key={short.id}
                    className="cursor-pointer group"
                    onClick={() => goToSlide(index)}
                  >
                    <div className="relative aspect-[9/16] bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={getYouTubeThumbnail(short.videoUrl, 'medium')}
                        alt={short.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to generic energy image if thumbnail fails
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                      <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
                        5s
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 group-hover:text-gray-800 transition-colors">
                      {short.title}
                    </p>
                  </div>
                )
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border border-red-100">
        <div className="text-center">
          <h3 className="font-semibold text-gray-800 mb-2">
            Subscribe for More Quick Insights
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Get notified when we publish new energy insights and explanations
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleViewAllClick}
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
            >
              <Play className="h-4 w-4" />
              Subscribe on YouTube
            </button>
            <a
              href="#newsletter"
              className="inline-flex items-center justify-center gap-2 bg-electric text-white px-4 py-2 rounded-lg hover:bg-electric-600 transition-colors text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                const newsletterElement = document.getElementById('newsletter');
                if (newsletterElement) {
                  newsletterElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
            >
              Newsletter Signup
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}