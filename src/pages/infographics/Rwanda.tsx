import React from 'react';
import { Helmet } from 'react-helmet-async';
import InfographicDisplay from '../../components/InfographicDisplay';
import SimplifiedEmailForm from '../../components/SimplifiedEmailForm';
import BreadcrumbNavigation from '../../components/BreadcrumbNavigation';

export default function RwandaInfographic() {
  const keyTakeaways = [
    "Rwanda aims for 38% GHG emission cuts by 2030, targeting 7.5 MtCO2e avoided through clean energy and climate-smart policies.",
    "The country surged from 10% electricity access in 2009 to approximately 75% by mid-2023, combining grid expansion and off-grid solar solutions.",
    "Hydropower remains the foundation of Rwanda's power generation at approximately 50%, supplemented by ambitious solar energy development and Lake Kivu methane extraction for baseload power.",
    "Rwanda targets 60% renewable energy share in its national generation mix by 2030, up from approximately 53% in 2022.",
    "The transition requires an estimated $11 billion investment, mobilized through green finance mechanisms including the Green Fund (FONERWA), IMF facilities, and pioneering carbon credit markets with Singapore."
  ];

  const relatedArticles = [
    {
      title: "Rwanda's Integrated Energy and Climate Strategy: Progress, Projects, and Regional Links",
      slug: "rwandas-integrated-energy-and-climate-strategy-progress-projects-and-regional-links"
    },
    {
      title: "Nepal's Clean Energy Transition: Ambition, Progress, and Regional Impact",
      slug: "nepals-clean-energy-transition-ambition-progress-and-regional-impact"
    },
    {
      title: "Global Renewable Energy: Latest on Growth, Investment, and Policy Shifts",
      slug: "global-renewable-energy-latest-on-growth-investment-and-policy-shifts"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Rwanda's 2030 Clean Energy & Climate Vision | Energy Transition Infographic</title>
        <meta
          name="description"
          content="Explore Rwanda's ambitious 2030 climate and energy goals including 38% emission cuts, 100% electricity access, 60% renewable energy share, and $11 billion green investment strategy. Interactive infographic with hydropower, solar, and methane power generation data."
        />
        <meta
          name="keywords"
          content="Rwanda energy transition, Rwanda climate goals 2030, Rwanda renewable energy, Rwanda hydropower, Rwanda solar energy, Lake Kivu methane, Rwanda electricity access, East Africa clean energy, Rwanda carbon markets, FONERWA green fund"
        />
        <link rel="canonical" href="https://www.thecurrentsource.net/infographics/rwanda-2030-clean-energy-climate" />
        <meta property="og:title" content="Rwanda's 2030 Clean Energy & Climate Vision" />
        <meta property="og:description" content="Interactive infographic showcasing Rwanda's comprehensive energy transition strategy, from 10% to 100% electricity access and 60% renewable energy by 2030." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.thecurrentsource.net/images/infographics/rwanda_infographic_the_current_source.jpg" />
      </Helmet>

      <BreadcrumbNavigation
        items={[
          { name: 'Infographics', href: '/infographics' },
          { name: 'Rwanda 2030 Vision', href: '/infographics/rwanda-2030-clean-energy-climate' }
        ]}
      />

      <article className="max-w-6xl mx-auto py-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Rwanda's 2030 Vision: A Blueprint for Clean Energy & Climate Action
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Rwanda is emerging as a regional leader in Africa's energy transition. From just 10% electricity access in 2009 to a targeted 100% by 2030, the country combines hydropower expansion, solar deployment, and innovative methane-to-power technology from Lake Kivu. This infographic maps Rwanda's comprehensive climate and energy roadmap, including emission reduction targets, financing mechanisms, and cross-border energy integration.
          </p>
        </header>

        <InfographicDisplay
          imageSrc="/images/infographics/rwanda_infographic_the_current_source.jpg"
          imageAlt="Rwanda renewable energy mix and climate policy infographic showing 2030 goals: 38% GHG emission cuts, 100% electricity access via grid and off-grid solar, 60% renewable energy share increase from 53% in 2022. Displays hydropower foundation with Busumo Falls and Nyabarongo II projects, Lake Kivu methane extraction for baseload power, solar energy expansion, grid extension strategies, off-grid solutions, $11 billion investment requirement through FONERWA Green Fund and carbon markets, and pioneering carbon credit trading with Singapore."
          country="Rwanda"
          year="2030 Climate & Energy Goals"
          caption="This comprehensive visual breakdown illustrates Rwanda's integrated approach to energy access, renewable generation, and climate finance, positioning the country as a model for sustainable development in East Africa."
          keyTakeaways={keyTakeaways}
          relatedArticles={relatedArticles}
          width={2752}
          height={1536}
        />

        <div className="mt-12 border-t border-gray-200 pt-12">
          <div className="bg-gradient-to-br from-electric-50 to-teal-50 rounded-xl p-8 border border-electric-100">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Get Monthly Country Energy Insights
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Stay informed on energy transitions across Africa, Asia, and beyond. Our monthly infographics and deep-dive reports deliver the data-driven analysis you need.
              </p>
            </div>
            <div className="max-w-xl mx-auto">
              <SimplifiedEmailForm variant="inline" size="medium" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
