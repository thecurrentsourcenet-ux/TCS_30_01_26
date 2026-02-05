import React from 'react';
import { Helmet } from 'react-helmet-async';
import InfographicDisplay from '../../components/InfographicDisplay';
import SimplifiedEmailForm from '../../components/SimplifiedEmailForm';
import BreadcrumbNavigation from '../../components/BreadcrumbNavigation';

export default function BrazilInfographic() {
  const keyTakeaways = [
    "Brazil boasts one of the cleanest power sectors globally, with approximately 92% of electricity generated from renewable sources, anchored by hydropower and bolstered by rapid wind and solar expansion.",
    "Renewable deployment is accelerating faster than predicted; projections indicate the country could exceed 115 GW of solar and 40 GW of wind capacity by 2028, surpassing earlier government targets.",
    "To ensure grid stability against droughts, Brazil utilizes 'firm capacity' auctions to contract backup power—including natural gas and new battery storage systems—creating a resilient hybrid grid.",
    "Major regulatory reforms, including the privatization of Eletrobras and the planned full opening of the retail electricity market by 2027–2028, are driving modernization and attracting private investment.",
    "Brazil is establishing itself as a future leader in low-carbon fuels, with a new legal framework for green hydrogen and offshore wind aiming to decarbonize heavy industry and create export opportunities."
  ];

  const relatedArticles = [
    {
      title: "Global Renewable Energy: Latest on Growth, Investment, and Policy Shifts",
      slug: "global-renewable-energy-latest-on-growth-investment-and-policy-shifts"
    },
    {
      title: "Uruguay's Renewable Energy Success: 98% Clean Power Achievement",
      slug: "uruguay-renewable-energy-success"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Brazil's Green Energy Evolution | 92% Clean Electricity Infographic</title>
        <meta
          name="description"
          content="Explore Brazil's energy transformation: 92% renewable electricity mix with hydropower, wind, and solar. Discover how market reforms, firm capacity auctions, and green hydrogen framework position Brazil as a global clean energy powerhouse."
        />
        <meta
          name="keywords"
          content="Brazil energy transition, Brazil renewable energy, Brazil hydropower, Brazil solar energy, Brazil wind power, green hydrogen Brazil, Eletrobras privatization, Brazil energy market reform, firm capacity auctions, offshore wind Brazil"
        />
        <link rel="canonical" href="https://www.thecurrentsource.net/infographics/brazil-green-energy-evolution" />
        <meta property="og:title" content="Brazil's Green Energy Evolution: 92% Clean Electricity" />
        <meta property="og:description" content="Interactive infographic showcasing Brazil's shift from hydropower dominance to a diversified renewable energy mix with solar, wind, and emerging green hydrogen sector." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.thecurrentsource.net/images/infographics/brasil_infographic_2026_the_current_source.jpg" />
      </Helmet>

      <BreadcrumbNavigation
        items={[
          { name: 'Infographics', href: '/infographics' },
          { name: 'Brazil Green Energy Evolution', href: '/infographics/brazil-green-energy-evolution' }
        ]}
      />

      <article className="max-w-6xl mx-auto py-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Brazil's Green Energy Evolution: Balancing Hydro Dominance with Wind, Solar, and Hydrogen
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Brazil is already one of the world's cleanest energy economies, with about 92% of its electricity coming from renewable sources. The country is aggressively diversifying beyond its historical hydroelectric backbone, with solar and wind deployment significantly outpacing official targets. Supported by landmark market reforms and a new legal framework for low-carbon hydrogen and offshore wind, Brazil is positioning itself as a global powerhouse for the green economy.
          </p>
        </header>

        <InfographicDisplay
          imageSrc="/images/infographics/brasil_infographic_2026_the_current_source.jpg"
          imageAlt="Brazil renewable energy infographic displaying a 92% clean electricity generation mix dominated by hydropower but featuring a rapidly expanding share of solar and wind. Visuals include the firm capacity role of natural gas backups and energy storage to mitigate drought risks, transmission infrastructure connecting the wind-rich Northeast to the Southeast, and emerging green hydrogen hubs at industrial ports. The graphic highlights the privatization of Eletrobras and the opening of the retail energy market as key drivers for private investment."
          country="Brazil"
          year="Current Status & Achievements"
          caption="Brazil's energy transformation illustrates a strategic shift from state-centric hydroelectric reliance to a market-driven, multi-source grid. By integrating variable renewables with firm capacity backups and opening the retail market to competition, Brazil ensures energy security while aiming for a 59–67% emissions reduction by 2035."
          keyTakeaways={keyTakeaways}
          relatedArticles={relatedArticles}
          width={2752}
          height={1504}
        />

        <div className="mt-12 border-t border-gray-200 pt-12">
          <div className="bg-gradient-to-br from-electric-50 to-teal-50 rounded-xl p-8 border border-electric-100">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Get Monthly Country Energy Insights
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Stay informed on energy transitions across the Americas and beyond. Our monthly infographics and deep-dive reports deliver the data-driven analysis you need.
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
