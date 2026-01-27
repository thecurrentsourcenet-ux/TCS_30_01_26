import React from 'react';
import { Helmet } from 'react-helmet-async';
import InfographicDisplay from '../../components/InfographicDisplay';
import SimplifiedEmailForm from '../../components/SimplifiedEmailForm';
import BreadcrumbNavigation from '../../components/BreadcrumbNavigation';

export default function UruguayInfographic() {
  const keyTakeaways = [
    "Uruguay has achieved over 98% renewable electricity generation, making it one of the world's cleanest energy systems powered predominantly by wind, hydropower, and biomass.",
    "Wind energy now represents approximately 40% of Uruguay's electricity mix, supported by utility-scale wind farms distributed across the country's interior grasslands.",
    "The country maintains energy security through a diversified renewable portfolio, complemented by regional interconnections with Brazil and Argentina for grid stability.",
    "Uruguay's transition was achieved without subsidies for consumers, demonstrating the economic competitiveness of renewable energy when deployed at scale with supportive policy frameworks.",
    "The model combines public utility leadership (UTE) with private sector renewable energy investments, regulatory certainty, and long-term power purchase agreements to de-risk project financing."
  ];

  const relatedArticles = [
    {
      title: "Renewables Boom Worldwide: Reshaping the Future of Energy",
      slug: "renewables-boom-worldwide-reshaping-the-future-of-energy"
    },
    {
      title: "Global Renewable Energy: Latest on Growth, Investment, and Policy Shifts",
      slug: "global-renewable-energy-latest-on-growth-investment-and-policy-shifts"
    },
    {
      title: "Lagarde: Europe's Renewable Energy Transition, Opportunities and Hurdles",
      slug: "lagarde-europes-renewable-energy-transition-opportunities-and-hurdles"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Uruguay's Renewable Energy Success Story | 98% Clean Power Infographic</title>
        <meta
          name="description"
          content="Discover how Uruguay achieved 98% renewable electricity through wind, hydropower, and biomass. Interactive infographic showing Uruguay's diversified clean energy mix, regional grid integration, and policy framework for sustainable power generation without consumer subsidies."
        />
        <meta
          name="keywords"
          content="Uruguay renewable energy, Uruguay wind power, Uruguay clean energy model, Uruguay electricity mix, South America renewable energy, Uruguay hydropower, Uruguay biomass energy, Latin America energy transition, UTE Uruguay, renewable energy without subsidies"
        />
        <link rel="canonical" href="https://www.thecurrentsource.net/infographics/uruguay-renewable-energy-success" />
        <meta property="og:title" content="Uruguay's Renewable Energy Success Story" />
        <meta property="og:description" content="Interactive infographic revealing how Uruguay transformed its electricity system to 98% renewable energy through wind, hydro, and biomass, achieving energy security and economic competitiveness." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.thecurrentsource.net/images/infographics/uruguay_infographic_the_current_source.jpg" />
      </Helmet>

      <BreadcrumbNavigation
        items={[
          { name: 'Infographics', href: '/infographics' },
          { name: 'Uruguay Renewable Success', href: '/infographics/uruguay-renewable-energy-success' }
        ]}
      />

      <article className="max-w-6xl mx-auto py-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Uruguay's Renewable Energy Success: From Fossil Fuels to 98% Clean Power
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            In just over a decade, Uruguay transformed itself from an oil-dependent nation to a renewable energy powerhouse. Today, wind, hydropower, and biomass supply over 98% of the country's electricity, making Uruguay a global benchmark for rapid, economically viable energy transitions. This infographic details Uruguay's diversified renewable portfolio, regional grid connections, and the policy framework that enabled private investment without burdening consumers with subsidies.
          </p>
        </header>

        <InfographicDisplay
          imageSrc="/images/infographics/uruguay_infographic_the_current_source.jpg"
          imageAlt="Uruguay renewable energy infographic displaying 98% clean electricity generation mix with approximately 40% wind energy from utility-scale wind farms, significant hydropower contribution, biomass from agricultural residues, regional interconnections with Brazil and Argentina for grid stability, public-private partnership model combining UTE state utility leadership with private renewable investments, long-term power purchase agreements, and achievement of energy security and economic competitiveness without consumer subsidies."
          country="Uruguay"
          year="Current Status & Achievements"
          caption="Uruguay's energy transformation demonstrates that rapid decarbonization is achievable through strategic policy design, diversified renewable resources, and regional cooperation, all while maintaining grid reliability and competitive electricity prices."
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
                Explore proven pathways to clean energy across continents. Our monthly infographics break down successful energy transitions with data-driven analysis.
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
