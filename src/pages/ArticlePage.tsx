import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { format } from 'date-fns';
import { ArrowLeft, Loader2, Clock, ExternalLink } from 'lucide-react';
import SocialShare from '../components/SocialShare';
import SEOHead from '../components/SEOHead';
import OptimizedImage from '../components/OptimizedImage';
import EmailSignup from '../components/EmailSignup';
import ArticleNewsletterCTA from '../components/ArticleNewsletterCTA';
import ArticleKeyTakeaways from '../components/ArticleKeyTakeaways';
import ArticleEndCTA from '../components/ArticleEndCTA';
import InArticleAd from '../components/InArticleAd';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { fetchArticleBySlug } from '../lib/ssg';
import { supabaseUrl, getFullImageUrl } from '../lib/ssg';
import type { NewsArticle } from '../types';
import { slugify, articleToNewsArticle } from '../types';
import {
  extractKeyTakeaways,
  splitLongParagraphs,
  parseContentSections,
  addInternalLinks,
  generateDek
} from '../utils/contentProcessing';

// --- simple, no-deps linkifier ---
function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Basic matcher for http/https URLs; trims trailing punctuation.
const urlRegex = /\bhttps?:\/\/[^\s<>"')]+[^\s<>"'),.?!]/g;

function linkifyAndPreserve(text: string) {
  // Split by double newlines to identify paragraphs
  const paragraphs = text.split('\n\n').filter(p => p.trim());
  
  return paragraphs.map(paragraph => {
    // Process each paragraph
    const safe = escapeHtml(paragraph.trim());
    const linkified = safe.replace(urlRegex, (url) => {
      const href = url.startsWith("http") ? url : `https://${url}`;
      return `<a href="${href}" target="_blank" rel="noopener noreferrer nofollow">${url}</a>`;
    });
    // Replace single newlines with <br/> within paragraphs
    const withBreaks = linkified.replace(/\n/g, "<br/>");
    // Return processed content without wrapping in paragraph tags
    return withBreaks;
  }).join('<br/><br/>');
}

// Format multi-section articles with emoji headers
const formatMultiSectionArticle = (content: string) => {
  const sectionEmojis = ['🔋', '⚖️', '🏛️', '☀️', '🔄', '🏥', '⚡'];
  
  // Split content into lines and process them
  const lines = content.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  const sections = [];
  let currentSection: { title: string; content: string[] } | null = null;
  
  for (const line of lines) {
    // Check if line starts with a section emoji
    const startsWithSectionEmoji = sectionEmojis.some(emoji => line.startsWith(emoji));
    
    // Clean the line by removing only leading section emoji and whitespace
    const cleanLine = startsWithSectionEmoji 
      ? line.replace(/^[🔋⚖️🏛️☀️🔄🏥⚡]\s*/, '').trim()
      : line.trim();
    
    // Skip empty lines after cleaning
    if (!cleanLine) continue;
    
    // Check if this line looks like a section header (starts with capital letter, reasonable length)
    const isLikelyHeader = startsWithSectionEmoji && /^[A-Z][^.]*[A-Za-z]$/.test(cleanLine) && cleanLine.length < 100;
    
    if (isLikelyHeader && !cleanLine.includes('Smart Grid Snapshot') && !cleanLine.includes('latest innovations')) {
      // Save previous section if exists
      if (currentSection) {
        sections.push(currentSection);
      }
      // Start new section
      currentSection = {
        title: cleanLine,
        content: []
      };
    } else if (currentSection) {
      // Add content to current section
      currentSection.content.push(cleanLine);
    } else if (line.includes('Smart Grid Snapshot') || line.includes('latest innovations')) {
      // This is intro content - we'll handle it separately
      continue;
    }
  }
  
  // Don't forget the last section
  if (currentSection) {
    sections.push(currentSection);
  }
  
  return sections.map((section, index) => {
    return (
      <React.Fragment key={index}>
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
            {section.title}
          </h3>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-electric">
            <p
              className="text-gray-700 leading-relaxed text-lg"
              dangerouslySetInnerHTML={{
                __html: linkifyAndPreserve(section.content.join('\n\n'))
              }}
            />
          </div>
        </div>
        {index === 1 && <InArticleAd />}
      </React.Fragment>
    );
  });
};

const formatRegularArticle = (content: string) => {
  const sections = parseContentSections(content);

  if (sections.length > 0) {
    return sections.map((section, sectionIndex) => (
      <React.Fragment key={sectionIndex}>
        <section className="mb-10">
          {section.level === 2 ? (
            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-10 pb-3 border-b-2 border-gray-200">
              {section.heading}
            </h2>
          ) : (
            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">
              {section.heading}
            </h3>
          )}

          {section.content.map((paragraph, pIndex) => {
            const splitParas = splitLongParagraphs(paragraph);
            return splitParas.map((para, splitIndex) => (
              <p
                key={`${pIndex}-${splitIndex}`}
                className="text-gray-700 leading-relaxed text-lg mb-5"
                dangerouslySetInnerHTML={{
                  __html: addInternalLinks(linkifyAndPreserve(para))
                }}
              />
            ));
          })}
        </section>

        {sectionIndex === 1 && <InArticleAd />}
      </React.Fragment>
    ));
  }

  const paragraphs = content.split('\n\n').filter(p => p.trim());

  return paragraphs.map((paragraph, index) => {
    const splitParas = splitLongParagraphs(paragraph);
    return (
      <React.Fragment key={index}>
        {splitParas.map((para, splitIndex) => (
          <p
            key={`${index}-${splitIndex}`}
            className="text-gray-700 leading-relaxed text-lg mb-5"
            dangerouslySetInnerHTML={{
              __html: addInternalLinks(linkifyAndPreserve(para))
            }}
          />
        ))}
        {index === 1 && <InArticleAd />}
      </React.Fragment>
    );
  });
};

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticle = useCallback(async () => {
    if (!slug) {
      setError('No article slug provided');
      setLoading(false);
      return;
    }

    // Try static data first
    try {
      const { getStaticData } = await import('../lib/staticData');
      const staticData = await getStaticData();
      if (staticData && staticData.articles.length > 0) {
        const foundArticle = staticData.articles.find(a => a.slug === slug);
        if (foundArticle) {
          setArticle(foundArticle);
          setLoading(false);
          return;
        }
      }
    } catch (error) {
      console.warn('Static data not available, trying SSG fetch');
    }

    // Try SSG data first
    try {
      const ssgData = await fetchArticleBySlug(slug);
      if (ssgData.article) {
        setArticle(ssgData.article);
        setLoading(false);
        return;
      }
    } catch (error) {
      console.warn('SSG data not available, falling back to client fetch');
    }

    if (!isSupabaseConfigured() || !supabase) {
      // Fallback sample data when Supabase is not configured
      const sampleArticle: NewsArticle = {
        id: 'sample-slug-article',
        title: 'Sample: Revolutionary Energy Storage Breakthrough (Sample - Supabase Not Configured)',
        description: 'Scientists have developed a new battery technology that could revolutionize energy storage with 300% higher energy density and faster charging times.',
        content: `Scientists at leading research institutions have announced a groundbreaking advancement in energy storage technology that could fundamentally change how we store and use renewable energy. The new battery design combines advanced materials science with innovative engineering to achieve unprecedented energy density, faster charging times, and longer lifespan compared to current lithium-ion technologies.

Laboratory tests have demonstrated energy densities up to 300% higher than conventional batteries, with charging times reduced to minutes rather than hours. The technology uses sustainable materials and manufacturing processes, addressing both performance and environmental concerns.

Commercial applications are expected within the next three to five years, with potential impacts across electric vehicles, grid storage, and portable electronics. The breakthrough represents a significant step forward in making renewable energy more practical and accessible for widespread adoption.`,
        imageUrl: 'https://images.unsplash.com/photo-1564281616392-43272c85a74e?auto=format&fit=crop&q=80',
        category: 'technology',
        region: 'global',
        date: new Date().toISOString(),
        source: 'Sample Source',
        url: '#',
        author: 'Dr. Sample Author',
        readTime: 5,
        likesCount: 0,
        viewsCount: 0,
        premium: false,
        tags: ['Technology', 'Storage', 'Innovation', 'Research'],
        slug: slugify('Sample: Revolutionary Energy Storage Breakthrough')
      };
      
      setArticle(sampleArticle);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Fetch all articles and find by slug (since slug is not a DB column)
      const { data, error: fetchError } = await supabase
        .from('articles')
        .select('*')
        .order('published_at', { ascending: false });

      if (fetchError) throw fetchError;

      const articles = (data || []).map(article => {
        const newsArticle = articleToNewsArticle(article);
        // Ensure imageUrl is a full URL
        newsArticle.imageUrl = getFullImageUrl(newsArticle.imageUrl, supabaseUrl);
        return newsArticle;
      });
      
      const foundArticle = articles.find(a => a.slug === slug);

      if (!foundArticle) {
        setError('ARTICLE_NOT_FOUND');
        setArticle(null);
      } else {
        setArticle(foundArticle);
      }
      
    } catch (err) {
      console.error('Error fetching article:', err);
      const errorMessage = err instanceof Error ? err.message : String(err);
      
      if (errorMessage.includes('relation "public.articles" does not exist') || errorMessage.includes('42P01')) {
        setError('MISSING_TABLE');
        // Fallback multi-section article when table doesn't exist
        const sampleArticle: NewsArticle = {
          id: 'sample-multi-section',
          title: 'Sample: Smart Grid Snapshot - July 2025 (Sample - Missing Table)',
          description: 'Sample multi-section article demonstrating smart grid developments including hydrogen storage, energy equity, legislation, and solar projects.',
          content: `🔋 Hydrogen Storage Simulation Advances Microgrid Design
A new open-source simulation tool is bringing green hydrogen into the spotlight for remote microgrid systems. Published on ScienceDirect, the model tracks both electrical and thermal energy flows, enabling researchers and engineers to design regenerative hydrogen-powered microgrids with greater accuracy.

⚖️ Energy Equity in Microgrid Planning
A recent study has applied Benders decomposition to optimize community microgrid planning with a focus on energy equity. The framework demonstrated improved outcomes for underserved populations, including better energy access, affordability, and resilience.

🏛️ Oregon Sets National Benchmark with Microgrid Legislation
Oregon has passed what is being called the most ambitious microgrid policy framework in the United States. The legislation simplifies the process for deploying community-based microgrids and supports grid resilience through local energy generation and storage.

☀️ Business Parks Go Solar with Smart Microgrids
The ESS Group has completed a new solar PV and battery storage project at Evegate Business Park. This commercial microgrid system reduces energy costs and boosts reliability for local businesses.`,
          imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
          category: 'technology',
          region: 'global',
          date: new Date().toISOString(),
          source: 'Sample Source',
          url: '#',
          author: 'Sample Author',
          readTime: 5,
          likesCount: 0,
          viewsCount: 0,
          premium: false,
          tags: ['Smart Grid', 'Microgrids', 'Technology', 'Sample'],
          slug: slugify('Sample: Smart Grid Snapshot - July 2025')
        };
        setArticle(sampleArticle);
      } else {
        setError(`FETCH_ERROR: ${errorMessage}`);
      }
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    fetchArticle();
  }, [fetchArticle]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-electric mx-auto mb-4" />
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    const getErrorContent = () => {
      switch (error) {
        case 'MISSING_TABLE':
          return {
            title: 'Database Table Missing',
            message: 'The articles table does not exist in your Supabase database.',
            advice: 'Run the Supabase migrations to create the articles table: supabase db push'
          };
        case 'ARTICLE_NOT_FOUND':
          return {
            title: 'Article Not Found',
            message: `No article found with slug: ${slug}`,
            advice: 'Try a different article slug or check if the article exists in your database.'
          };
        default:
          if (error?.startsWith('FETCH_ERROR:')) {
            return {
              title: 'Database Error',
              message: error.replace('FETCH_ERROR: ', ''),
              advice: 'Check your Supabase configuration and database connection.'
            };
          }
          return {
            title: 'Article Not Available',
            message: error || "The article you're looking for doesn't exist.",
            advice: 'Check your .env file for correct Supabase configuration.'
          };
      }
    };

    const errorContent = getErrorContent();

    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-8 mx-auto"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Timeline
        </button>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-amber-800 mb-4">
            {errorContent.title}
          </h1>
          <p className="text-amber-700 mb-4">
            {errorContent.message}
          </p>
          <div className="bg-amber-100 rounded-lg p-4">
            <p className="text-sm text-amber-800 font-medium mb-2">💡 How to fix this:</p>
            <p className="text-sm text-amber-700">{errorContent.advice}</p>
          </div>
        </div>
        
        <div className="text-sm text-gray-500 space-y-1">
          <p>Debug Info:</p>
          <p>Article Slug: {slug}</p>
          <p>Supabase Configured: {isSupabaseConfigured() ? 'Yes' : 'No'}</p>
          <p>Error Type: {error || 'Unknown'}</p>
        </div>
      </div>
    );
  }

  // Generate canonical URL using slug
  const canonicalUrl = `https://thecurrentsource.net/articles/${article.slug}`;

  // Generate structured data for the article
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": article.author ? "Person" : "Organization",
      "name": article.author || "TheCurrentSource"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TheCurrentSource",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thecurrentsource.net/logo.png"
      }
    },
    "url": canonicalUrl,
    "image": article.imageUrl ? [article.imageUrl] : [],
    "keywords": article.tags?.join(', '),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.description}
        keywords={article.tags?.join(', ') || 'energy news'}
        canonicalUrl={canonicalUrl}
        ogImage={article.imageUrl || undefined}
        ogType="article"
        author={article.author || undefined}
        publishedTime={article.date}
        modifiedTime={article.date}
        tags={article.tags}
        structuredData={articleStructuredData}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-8 hover:translate-x-1 transition-transform"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Timeline
        </button>

        <article itemScope itemType="https://schema.org/NewsArticle">
          {article.imageUrl && (
            <div className="mb-8">
              <OptimizedImage
                src={article.imageUrl}
                alt={article.title}
                width={1200}
                height={400}
                className="w-full h-64 object-cover rounded-lg shadow-sm"
                priority={true}
              />
            </div>
          )}
          
          <header className="mb-8">
            <time
              className="text-sm text-electric font-medium"
              dateTime={article.date}
              itemProp="datePublished"
            >
              {format(new Date(article.date), 'MMMM d, yyyy')}
            </time>
            <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4 leading-tight" itemProp="headline">
              {article.title}
            </h1>

            {article.description && (
              <p className="text-xl text-gray-600 leading-relaxed mb-6 font-light">
                {generateDek(article.description, article.content || '')}
              </p>
            )}
            
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-electric-50 text-electric-700"
                    itemProp="keywords"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              {article.source && (
                <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                  <span itemProp="name">Source: {article.source}</span>
                </span>
              )}
              {article.author && (
                <span itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">By {article.author}</span>
                </span>
              )}
              {article.readTime && (
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {article.readTime} min read
                </span>
              )}
            </div>
            
            <SocialShare
              url={canonicalUrl}
              title={article.title}
              description={article.description}
            />
          </header>

          {article.content && (
            <ArticleKeyTakeaways
              takeaways={extractKeyTakeaways(article.content, article.description)}
            />
          )}

          <div className="prose prose-lg max-w-none mb-8" itemProp="articleBody">
            {(() => {
              const content = article.content;
              
              // Handle different article formats uniformly
              if (content && (content.includes('🔋') || content.includes('⚖️') || content.includes('🏛️'))) {
                // This is a multi-section article (like Smart Grid Snapshot)
                return formatMultiSectionArticle(content);
              } else if (content) {
                // This is a regular article - format as clean paragraphs
                return formatRegularArticle(content);
              }
              return null;
            })()}
          </div>

          {article.url && article.url !== '#' && (
            <div className="flex flex-wrap gap-2 mb-4">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-electric text-white rounded-lg hover:bg-electric-600 transition-colors"
                itemProp="url"
              >
                Read Original Article
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          )}
          
          <meta itemProp="dateModified" content={article.date} />

          <ArticleEndCTA />
        </article>

        <ArticleNewsletterCTA articleTitle={article.title} />

        <EmailSignup />
      </div>
    </>
  );
}