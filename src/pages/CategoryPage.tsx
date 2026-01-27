import React from 'react';
import { useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import NewsFeed from '../components/NewsFeed';
import CategoryNav from '../components/CategoryNav';
import ProductionMethods from '../components/ProductionMethods';
import StorageSolutions from '../components/StorageSolutions';
import TransportationMethods from '../components/TransportationMethods';
import SafetyStandards from '../components/SafetyStandards';
import IndustrialApplications from '../components/IndustrialApplications';
import TechnicalCarousel from '../components/TechnicalCarousel';
import Legislation from '../components/Legislation';
import EmailSignup from '../components/EmailSignup';
import PremiumBanner from '../components/PremiumBanner';
import { categories } from '../data/categories';
import type { EnergyCategory } from '../types';
import { useAuth } from '../hooks/useAuth';

export default function CategoryPage() {
  const { subscription } = useAuth();
  const { category, subcategory } = useParams<{ 
    category: EnergyCategory;
    subcategory?: string;
  }>();

  const categoryData = categories.find(c => c.id === category);
  const subcategoryData = categoryData?.subcategories?.find(s => s.id === subcategory);
  
  const title = subcategoryData 
    ? `${subcategoryData.name} - ${categoryData?.name}`
    : categoryData
      ? categoryData.name
      : category
        ? category.charAt(0).toUpperCase() + category.slice(1)
        : 'Category';

  const description = subcategoryData?.description || 
    `Latest ${title.toLowerCase()} news and analysis from TheCurrentSource. Comprehensive coverage of energy developments, policy updates, and market insights.`;

  const canonicalUrl = `https://thecurrentsource.net/category/${category}${subcategory ? `/${subcategory}` : ''}`;

  const isProductionMethods = category === 'technical' && subcategory === 'production';
  const isStorageSolutions = category === 'technical' && subcategory === 'storage';
  const isTransportation = category === 'technical' && subcategory === 'transport';
  const isSafety = category === 'technical' && subcategory === 'safety';
  const isApplications = category === 'technical' && subcategory === 'applications';
  const isLegislation = category === 'legislation';

  // Check if we're on the main technical category page (no subcategory)
  const isTechnicalMain = category === 'technical' && !subcategory;

  // Generate structured data for the category page
  const categoryStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": title,
    "description": description,
    "url": `https://thecurrentsource.net/category/${category}${subcategory ? `/${subcategory}` : ''}`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "TheCurrentSource",
      "url": "https://thecurrentsource.net"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://thecurrentsource.net"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": categoryData?.name || category,
          "item": `https://thecurrentsource.net/category/${category}`
        },
        ...(subcategoryData ? [{
          "@type": "ListItem",
          "position": 3,
          "name": subcategoryData.name,
          "item": `https://thecurrentsource.net/category/${category}/${subcategory}`
        }] : [])
      ]
    }
  };

  return (
    <>
      <SEOHead
        title={`${title} | TheCurrentSource - Energy News & Analysis`}
        description={description}
        keywords={`${title.toLowerCase()}, energy news, energy analysis, energy policy, renewable energy, clean energy, energy markets`}
        canonicalUrl={canonicalUrl}
        ogType="website"
        structuredData={categoryStructuredData}
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="hidden lg:block lg:col-span-1" role="complementary">
          <nav aria-label="Category navigation">
            <CategoryNav />
          </nav>
          <div className="mt-8">
            <EmailSignup />
          </div>
        </aside>
        <main className="col-span-1 lg:col-span-3" role="main">
          {!subscription?.status === 'active' && <PremiumBanner />}
          
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
            {subcategoryData?.description && (
              <p className="text-gray-600 text-lg leading-relaxed">{subcategoryData.description}</p>
            )}
          </header>
          
          {isProductionMethods ? (
            <ProductionMethods />
          ) : isStorageSolutions ? (
            <StorageSolutions />
          ) : isTransportation ? (
            <TransportationMethods />
          ) : isSafety ? (
            <SafetyStandards />
          ) : isApplications ? (
            <IndustrialApplications />
          ) : isTechnicalMain ? (
            <TechnicalCarousel />
          ) : isLegislation ? (
            <Legislation countryId={subcategory} />
          ) : (
            <NewsFeed category={category} subcategory={subcategory} />
          )}
        </main>
      </div>
    </>
  );
}