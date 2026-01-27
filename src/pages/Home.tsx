import React, { useEffect } from "react";
import SEOHead from "../components/SEOHead";
import EmailSignup from "../components/EmailSignup";
import QuickLinks from "../components/QuickLinks";
import WeeklyDigest from "../components/WeeklyDigest";
import YouTubeShortsSection from "../components/YouTubeShortsSection";
import Layout from "../components/Layout";
import AdUnit from "../components/AdUnit";

const HeaderHomeAd = () => {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="my-8">
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-4468932841277540"
           data-ad-slot="3201463151"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

const sampleDigest = {
  startDate: new Date(2024, 2, 10),
  endDate: new Date(2024, 2, 16),
  introduction:
    "This week's digest covers major breakthroughs in energy technology, new policy developments, and innovative solutions that could reshape the industry.",
  newsItems: [
    {
      headline: "New Catalyst Doubles Production Efficiency",
      url: "#",
      summary:
        "Researchers have developed a novel catalyst that significantly improves the efficiency of clean energy production.",
      whyItMatters:
        "This breakthrough could substantially reduce production costs, making clean energy more competitive with traditional sources.",
      tags: ["Research", "Innovation", "Technology"],
    },
    {
      headline: "EU Announces €3B Clean Energy Infrastructure Fund",
      url: "#",
      summary:
        "The European Union has unveiled a major funding initiative to develop clean energy infrastructure across member states.",
      whyItMatters:
        "This investment signals strong governmental support for energy transition and could accelerate industry growth.",
      tags: ["Policy", "Infrastructure", "Europe"],
    },
    {
      headline: "Revolutionary Storage Solution Unveiled",
      url: "#",
      summary:
        "A startup has developed a new energy storage technology that increases capacity while reducing costs.",
      whyItMatters:
        "Improved storage solutions are crucial for widespread renewable energy adoption in transportation and industry.",
      tags: ["Storage", "Technology", "Startup"],
    },
  ],
};

export default function Home() {
  const pageTitle = "TheCurrentSource - Plugged Into Energy News";
  const pageDescription = "Stay ahead with TheCurrentSource - Your trusted source for energy news and analysis. Get expert insights, market intelligence, and comprehensive coverage of the energy sector.";
  const canonicalUrl = "https://thecurrentsource.net/home";

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="energy news, renewable energy, energy analysis, energy markets, clean energy, energy insights"
        canonicalUrl={canonicalUrl}
        ogType="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "TheCurrentSource",
          "description": pageDescription,
          "url": "https://thecurrentsource.net",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://thecurrentsource.net/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />

      <Layout>
        <div className="space-y-8">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-electric-50 to-white py-16 rounded-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                The Current<span className="text-electric">Source</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Powering informed decisions with comprehensive energy news, market analysis, and industry insights.
                We gather and organize energy information from across all sectors, delivering monthly insights 
                that save you valuable research time. Our comprehensive coverage includes renewable energy developments, 
                policy updates, market trends, technological innovations, and industry analysis from reliable sources worldwide.
                Stay informed about solar power advancements, wind energy projects, energy storage breakthroughs, 
                smart grid technologies, and regulatory changes that shape the global energy landscape.
              </p>
            </div>
          </section>

          {/* Quick Links */}
          <div className="order-2 lg:col-span-2">
            <QuickLinks />
          </div>

          {/* Google Ad - Header Home */}
          <HeaderHomeAd />

          {/* Main Content Wrapper with Responsive Order */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
            {/* Weekly Digest - First on mobile */}
            <div className="order-1 lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Monthly Digest</h2>
              <WeeklyDigest {...sampleDigest} />
            </div>

            {/* YouTube Shorts Section - Third on mobile */}
            <div className="order-3 lg:col-span-2 lg:mt-0 mt-12">
              <YouTubeShortsSection />
            </div>

            {/* Sidebar - Fourth on mobile */}
            <aside className="order-4 lg:col-span-1 space-y-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">The Pulse of Energy Innovation</h2>
                <p className="text-gray-600 leading-relaxed">
                  Your weekly source for the latest developments in energy technology, featuring curated news,
                  expert analysis, and industry insights.
                </p>
              </div>

              {/* Ad */}
              <AdUnit />

              {/* Newsletter Signup */}
              <EmailSignup />
            </aside>
          </div>
        </div>
      </Layout>
    </>
  );
}