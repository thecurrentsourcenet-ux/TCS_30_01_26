import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BarChart3, TrendingUp, Globe } from 'lucide-react';
import SimplifiedEmailForm from '../components/SimplifiedEmailForm';
import BreadcrumbNavigation from '../components/BreadcrumbNavigation';

interface InfographicCard {
  id: string;
  title: string;
  country: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  path: string;
  highlights: string[];
}

const infographics: InfographicCard[] = [
  {
    id: 'greenland-resources',
    title: "Greenland: A Strategic Crossroads of Resources & Energy Transition",
    country: 'Greenland',
    description: 'Examine Greenland\'s unique position holding vast fossil fuel reserves and critical rare earth minerals, while navigating indigenous sovereignty, the 2021 oil ban, and conflicting global demands of the energy transition.',
    imageSrc: '/images/infographics/greenland_infographic_the_current_source.jpg',
    imageAlt: 'Greenland strategic resources and energy transition paradox infographic',
    path: '/infographics/greenland-strategic-resources-energy-transition',
    highlights: [
      '2021 Oil Exploration Ban',
      'Critical Rare Earth Minerals',
      'Indigenous Sovereignty Model'
    ]
  },
  {
    id: 'rwanda-2030',
    title: "Rwanda's 2030 Vision: A Blueprint for Clean Energy & Climate Action",
    country: 'Rwanda',
    description: 'Explore Rwanda\'s ambitious pathway from 10% to 100% electricity access, targeting 60% renewable energy share and 38% emission cuts by 2030 through hydropower, solar, and Lake Kivu methane extraction.',
    imageSrc: '/images/infographics/rwanda_infographic_the_current_source.jpg',
    imageAlt: 'Rwanda 2030 clean energy and climate goals infographic',
    path: '/infographics/rwanda-2030-clean-energy-climate',
    highlights: [
      '100% Electricity Access by 2030',
      '60% Renewable Energy Share',
      '$11B Green Investment Required'
    ]
  },
  {
    id: 'uruguay-renewable',
    title: "Uruguay's Renewable Energy Success: 98% Clean Power Achievement",
    country: 'Uruguay',
    description: 'Discover how Uruguay transformed its electricity system to 98% renewable energy through wind, hydropower, and biomass, achieving energy security and economic competitiveness without consumer subsidies.',
    imageSrc: '/images/infographics/uruguay_infographic_the_current_source.jpg',
    imageAlt: 'Uruguay renewable energy success story infographic showing 98% clean electricity',
    path: '/infographics/uruguay-renewable-energy-success',
    highlights: [
      '98% Renewable Electricity',
      '40% Wind Energy Share',
      'No Consumer Subsidies'
    ]
  }
];

export default function Infographics() {
  return (
    <>
      <Helmet>
        <title>Energy Transition Infographics | Country-by-Country Clean Energy Analysis</title>
        <meta
          name="description"
          content="Explore comprehensive energy transition infographics for countries worldwide. Visual data analysis of renewable energy deployment, climate policies, grid modernization, and investment strategies from Rwanda to Uruguay and beyond."
        />
        <meta
          name="keywords"
          content="energy transition infographics, renewable energy data visualization, country energy profiles, clean energy statistics, climate policy analysis, energy mix charts, renewable energy investment, global energy transformation"
        />
        <link rel="canonical" href="https://www.thecurrentsource.net/infographics" />
        <meta property="og:title" content="Energy Transition Infographics | Global Clean Energy Analysis" />
        <meta property="og:description" content="Interactive infographics showcasing energy transitions worldwide. Data-driven visual analysis of renewable energy deployment, policies, and investment strategies." />
        <meta property="og:type" content="website" />
      </Helmet>

      <BreadcrumbNavigation
        items={[
          { name: 'Infographics', href: '/infographics' }
        ]}
      />

      <div className="max-w-6xl mx-auto py-8">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Energy Transition Infographics
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Country-by-country visual analysis of renewable energy deployment, climate policies, and clean power strategies. Data-driven insights for understanding the global energy transformation.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="bg-electric-100 p-2 rounded">
                <BarChart3 className="h-5 w-5 text-electric" />
              </div>
              <span className="font-semibold">Comprehensive Data</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="bg-teal-100 p-2 rounded">
                <TrendingUp className="h-5 w-5 text-teal-600" />
              </div>
              <span className="font-semibold">Policy Analysis</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="bg-blue-100 p-2 rounded">
                <Globe className="h-5 w-5 text-blue-600" />
              </div>
              <span className="font-semibold">Global Coverage</span>
            </div>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Country Profiles</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {infographics.map((infographic) => (
              <article
                key={infographic.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <Link to={infographic.path} className="block">
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={infographic.imageSrc}
                      alt={infographic.imageAlt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-electric-100 text-electric font-semibold text-sm rounded-full">
                      {infographic.country}
                    </span>
                  </div>

                  <Link to={infographic.path}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-electric transition-colors leading-tight">
                      {infographic.title}
                    </h3>
                  </Link>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {infographic.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {infographic.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={infographic.path}
                    className="inline-flex items-center gap-2 text-electric font-semibold hover:text-electric-600 transition-colors"
                  >
                    View Full Infographic
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-electric-50 to-teal-50 rounded-xl p-8 sm:p-10 border border-electric-100">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              Monthly Energy Infographics in Your Inbox
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Get exclusive access to new country profiles, policy analysis, and energy data visualizations. Join thousands of energy professionals staying informed.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <SimplifiedEmailForm variant="inline" size="medium" />
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">What you'll get:</span> Monthly infographics • Policy updates • Investment trends • Exclusive analysis
            </p>
          </div>
        </section>

        <section className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">About These Infographics</h2>
          <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Our energy transition infographics synthesize complex data from government reports, international agencies, and industry sources into clear, accessible visual formats. Each country profile includes renewable energy deployment statistics, policy frameworks, investment requirements, and infrastructure development strategies.
            </p>
            <p>
              These resources are designed for energy professionals, policymakers, researchers, investors, and anyone seeking to understand how different nations are navigating the shift to clean power systems.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
