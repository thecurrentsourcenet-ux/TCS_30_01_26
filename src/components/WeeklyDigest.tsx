import React from 'react';
import { format } from 'date-fns';
import { Share2 } from 'lucide-react';

interface NewsItem {
  headline: string;
  url: string;
  summary: string;
  whyItMatters: string;
  tags: string[];
}

interface WeeklyDigestProps {
  startDate: Date;
  endDate: Date;
  introduction: string;
  newsItems: NewsItem[];
}

export default function WeeklyDigest({ startDate, endDate, introduction, newsItems }: WeeklyDigestProps) {
  const title = `Weekly Energy News Digest (${format(startDate, 'MMM d')}-${format(endDate, 'MMM d, yyyy')})`;

  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-100 p-8" itemScope itemType="https://schema.org/NewsArticle">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4" itemProp="headline">
          Week of {format(startDate, 'MMMM d')}-{format(endDate, 'MMMM d, yyyy')}
        </h2>
        <p className="text-gray-600 mb-4" itemProp="description">{introduction}</p>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500 flex items-center">
            <Share2 className="h-4 w-4 mr-2" />
            Share:
          </span>
          <span className="text-sm text-gray-400">Email sharing available</span>
        </div>
      </header>

      <div className="space-y-8" itemProp="articleBody">
        {newsItems.map((item, index) => (
          <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric hover:text-electric-700 transition-colors"
              >
                {item.headline}
              </a>
            </h3>
            <p className="text-gray-600 mb-3 leading-relaxed">{item.summary}</p>
            <div className="bg-gradient-to-r from-electric-50 to-teal-50 p-4 rounded-lg mb-4 border border-electric-100">
              <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <span className="w-2 h-2 bg-electric rounded-full mr-2"></span>
                Why it matters:
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.whyItMatters}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-electric-50 text-electric-700 hover:bg-electric-100 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Structured data for SEO */}
      <div style={{ display: 'none' }}>
        <meta itemProp="datePublished" content={startDate.toISOString()} />
        <meta itemProp="dateModified" content={endDate.toISOString()} />
        <span itemProp="author" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="TheCurrentSource" />
        </span>
        <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="TheCurrentSource" />
          <span itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
            <meta itemProp="url" content="https://thecurrentsource.net/logo.PNG" />
          </span>
        </span>
      </div>
    </article>
  );
}