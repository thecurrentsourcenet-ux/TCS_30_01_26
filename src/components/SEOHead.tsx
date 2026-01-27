import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  structuredData?: object;
  noIndex?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  structuredData,
  noIndex = false,
  author,
  publishedTime,
  modifiedTime,
  tags
}: SEOHeadProps) {
  // Ensure title is within 45-60 characters
  const optimizedTitle = title.length > 60 ? `${title.substring(0, 57)}...` : title;
  const fullTitle = optimizedTitle.includes('TheCurrentSource') ? optimizedTitle : `${optimizedTitle} | TheCurrentSource`;
  
  // Ensure description is within 120-160 characters
  const optimizedDescription = description.length > 160 ? `${description.substring(0, 157)}...` : description;
  
  // Clean canonical URL (no trailing slash, lowercase)
  const cleanCanonicalUrl = canonicalUrl?.toLowerCase().replace(/\/$/, '') || '';
  
  // Default OG image
  const defaultOgImage = 'https://thecurrentsource.net/og-image.jpg';
  const finalOgImage = ogImage || defaultOgImage;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={optimizedDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author || "TheCurrentSource"} />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      
      {/* Canonical URL */}
      {cleanCanonicalUrl && <link rel="canonical" href={cleanCanonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={optimizedDescription} />
      {cleanCanonicalUrl && <meta property="og:url" content={cleanCanonicalUrl} />}
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="TheCurrentSource" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific OG tags */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {ogType === 'article' && tags && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:creator" content="@thecurrentsource" />
      <meta name="twitter:site" content="@thecurrentsource" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0077CC" />
      <meta name="msapplication-TileColor" content="#0077CC" />
      <meta name="application-name" content="TheCurrentSource" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}