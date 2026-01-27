import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InfographicDisplayProps {
  imageSrc: string;
  imageAlt: string;
  country: string;
  year: string;
  caption: string;
  keyTakeaways: string[];
  relatedArticles?: Array<{
    title: string;
    slug: string;
  }>;
  width?: number;
  height?: number;
}

export default function InfographicDisplay({
  imageSrc,
  imageAlt,
  country,
  year,
  caption,
  keyTakeaways,
  relatedArticles = [],
  width,
  height
}: InfographicDisplayProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <section className="max-w-6xl mx-auto">
        <figure className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="relative group cursor-zoom-in" onClick={() => setIsLightboxOpen(true)}>
            <img
              src={imageSrc}
              alt={imageAlt}
              width={width}
              height={height}
              className="w-full h-auto"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="bg-white rounded-full p-3 shadow-lg">
                <ZoomIn className="h-6 w-6 text-gray-700" />
              </div>
            </div>
          </div>

          <figcaption className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <span className="font-semibold text-gray-800">{country}</span>
              <span className="text-gray-400">•</span>
              <span>{year}</span>
              <span className="text-gray-400">•</span>
              <span className="font-medium">Source: The Current Source</span>
            </div>
            {caption && (
              <p className="mt-3 text-gray-700 leading-relaxed">{caption}</p>
            )}
          </figcaption>
        </figure>

        <div className="mt-10 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6 sm:p-8 border border-blue-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <svg className="h-6 w-6 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Key Takeaways
          </h3>
          <ul className="space-y-3">
            {keyTakeaways.map((takeaway, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-electric text-white flex items-center justify-center text-sm font-semibold mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700 leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {relatedArticles.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-800 mb-5">Related Articles</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((article, index) => (
                <Link
                  key={index}
                  to={`/articles/${article.slug}`}
                  className="block p-5 bg-white border border-gray-200 rounded-lg hover:border-electric hover:shadow-md transition-all"
                >
                  <h4 className="font-semibold text-gray-800 hover:text-electric transition-colors line-clamp-3">
                    {article.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-7xl max-h-[90vh] overflow-auto">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}
