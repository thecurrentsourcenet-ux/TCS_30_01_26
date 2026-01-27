import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Cog, Factory, Scale, BookOpen, ChevronRight } from 'lucide-react';
import EmailSignup from '../components/EmailSignup';

export default function HydrogenFuture() {
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
    <>
      <Helmet>
        <title>The Future of Clean Energy - TheCurrentSource</title>
        <meta name="description" content="Explore the future of clean energy, including technological advancements, sectoral applications, global policies, and key challenges in the energy transition." />
      </Helmet>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Introduction Banner */}
        <div className="bg-gradient-to-br from-electric-50 to-teal-50 rounded-xl p-8 border border-electric-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white p-3 rounded-lg">
              <Zap className="h-8 w-8 text-electric" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">The Future of Clean Energy</h1>
          </div>
          <p className="text-gray-600 text-lg">
            The energy sector is poised for significant transformation, driven by technological innovation,
            policy support, and the urgent need to address climate change. Discover how new technologies
            and market developments are shaping the future of clean energy.
          </p>
        </div>

        {/* Google Ad Unit - Future of Hydrogen */}
        <div className="my-8">
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-4468932841277540"
               data-ad-slot="7701204694"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>

        {/* Sources Section */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-electric" />
            <h2 className="text-2xl font-semibold text-gray-800">Key Sources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">McKinsey & Company</h3>
              <p className="text-gray-600 text-sm">Global Energy Perspective 2023</p>
              <a 
                href="https://www.mckinsey.com/industries/oil-and-gas/our-insights/global-energy-perspective-2023"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-electric hover:text-electric-700 group text-sm"
              >
                Read Report
                <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">World Economic Forum</h3>
              <p className="text-gray-600 text-sm">Energy Transition Index</p>
              <a 
                href="https://www.weforum.org/reports/fostering-effective-energy-transition-2023"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-electric hover:text-electric-700 group text-sm"
              >
                View Insights
                <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">International Energy Agency</h3>
              <p className="text-gray-600 text-sm">World Energy Outlook</p>
              <a 
                href="https://www.iea.org/reports/world-energy-outlook-2023"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-electric hover:text-electric-700 group text-sm"
              >
                View Report
                <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Main Content Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Technological Advancements */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Cog className="h-6 w-6 text-electric" />
              <h2 className="text-2xl font-semibold text-gray-800">Technological Advancements</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Innovations in renewable energy technology, energy storage, and smart grid solutions
                are making clean energy more scalable and cost-effective than ever before.
              </p>
              <p className="text-gray-600">
                Advanced energy storage systems and grid management technologies are enabling
                higher penetration of renewable energy sources.
              </p>
            </div>
          </section>

          {/* Sectoral Applications */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Factory className="h-6 w-6 text-electric" />
              <h2 className="text-2xl font-semibold text-gray-800">Sectoral Applications</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Clean energy solutions are transforming hard-to-abate sectors like steel,
                cement, and heavy transport through innovative applications and technologies.
              </p>
              <p className="text-gray-600">
                By 2050, renewable energy is projected to dominate the global energy mix,
                with significant adoption across all major sectors.
              </p>
            </div>
          </section>

          {/* Global Policy and Investment */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-electric" />
              <h2 className="text-2xl font-semibold text-gray-800">Global Policy and Investment</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Governments and private sectors are heavily investing in clean energy infrastructure,
                including production facilities, storage solutions, and distribution networks.
              </p>
              <p className="text-gray-600">
                Strategic initiatives and innovation centers are accelerating research and adoption
                of clean energy technologies worldwide.
              </p>
            </div>
          </section>

          {/* Decarbonization Goals */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="h-6 w-6 text-electric" />
              <h2 className="text-2xl font-semibold text-gray-800">Decarbonization Goals</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Clean energy technologies are central to achieving global climate targets
                and reducing carbon emissions across all sectors.
              </p>
              <p className="text-gray-600">
                By 2050, renewable energy could constitute up to 90% of the global
                electricity mix under favorable scenarios.
              </p>
            </div>
          </section>
        </div>

        {/* Challenges Section */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Challenges</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Economic Barriers</h3>
              <p className="text-gray-600">High initial costs and infrastructure development remain significant obstacles.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Policy Framework</h3>
              <p className="text-gray-600">Need for comprehensive policy frameworks and incentives to make clean energy competitive with traditional sources.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Technical Integration</h3>
              <p className="text-gray-600">Addressing grid integration challenges and developing robust energy storage solutions.</p>
            </div>
          </div>
        </section>

        <EmailSignup />
      </div>
    </>
  );
}