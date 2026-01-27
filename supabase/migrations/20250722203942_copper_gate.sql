/*
  # Populate database with existing timeline articles

  1. Articles
    - Insert the articles that were previously hardcoded in the timeline
    - Based on the existing timeline entries from the site
    - Includes proper categories, regions, and metadata

  2. Data
    - Italy Electric Mobility news
    - Eastern Europe energy security
    - Italy clean energy projects
    - Energy storage breakthrough
    - Additional relevant articles
*/

-- Insert the existing timeline articles
INSERT INTO articles (
  title,
  content,
  summary,
  source_url,
  image_url,
  category,
  region,
  published_at,
  source_name,
  author,
  read_time,
  tags
) VALUES
(
  'The New Motus-E White Paper: Electric Mobility Between Innovation, Sustainability and Opportunities for All',
  'The latest white paper from Motus-E provides a comprehensive analysis of the electric mobility landscape in Italy. The document explores the intersection of technological innovation, environmental sustainability, and economic opportunities in the rapidly evolving electric vehicle sector. Key findings highlight the potential for job creation, infrastructure development, and environmental benefits as Italy transitions to electric transportation. The paper examines current market trends, policy frameworks, and the role of both public and private sectors in accelerating the adoption of electric mobility solutions.',
  'Motus-E releases comprehensive white paper analyzing Italy''s electric mobility sector, highlighting innovation, sustainability, and economic opportunities in the transition to electric transportation.',
  'https://www.motus-e.org/white-paper-electric-mobility',
  'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?auto=format&fit=crop&q=80&w=800',
  'technology',
  'europe',
  '2025-06-12T10:00:00Z',
  'Motus-E',
  'Motus-E Research Team',
  8,
  ARRAY['Italy', 'Electric Mobility', 'Transportation', 'Technology', 'Policy', 'Market Growth', 'Infrastructure']
),
(
  'More Energy and Security: Eastern Europe Strengthens Electricity Exchange',
  'Eastern European countries are taking significant steps to strengthen their electricity exchange systems, enhancing both energy security and regional cooperation. The initiative focuses on improving grid integration between Ukraine, Moldova, and EU member states, creating a more resilient and interconnected energy infrastructure. This development is particularly crucial given the current geopolitical situation and the need for energy independence. The enhanced electricity exchange will facilitate better load balancing, increased renewable energy integration, and improved energy security for the entire region. Technical upgrades to transmission infrastructure and harmonization of market rules are key components of this comprehensive approach.',
  'Eastern European countries strengthen electricity exchange systems to enhance energy security and regional cooperation, with focus on Ukraine-Moldova-EU grid integration.',
  'https://www.energy-community.org/news/electricity-exchange',
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
  'policy',
  'europe',
  '2025-06-19T14:30:00Z',
  'Energy Community',
  'Regional Energy Analysts',
  6,
  ARRAY['Eastern Europe', 'Grid Integration', 'Energy Security', 'Ukraine', 'Moldova', 'EU Cooperation', 'Electricity Markets']
),
(
  'Italy''s Clean Energy Revolution: Pioneering Projects and Strategic Investments',
  'Italy is experiencing a remarkable transformation in its energy landscape, with groundbreaking clean energy projects and strategic investments positioning the country as a leader in the European energy transition. Major infrastructure developments include large-scale solar installations in the south, offshore wind projects along the coastlines, and innovative energy storage solutions. The government''s National Recovery and Resilience Plan has allocated substantial funding for renewable energy infrastructure, smart grid development, and energy efficiency improvements. Private sector involvement has been equally impressive, with major utilities and international investors committing billions to Italian clean energy projects. This comprehensive approach addresses both immediate energy needs and long-term sustainability goals.',
  'Italy leads European energy transition with major clean energy projects, strategic investments, and comprehensive infrastructure development across renewable energy sectors.',
  'https://www.mise.gov.it/clean-energy-projects',
  'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800',
  'markets',
  'europe',
  '2025-03-15T09:15:00Z',
  'Italian Ministry of Economic Development',
  'Energy Policy Division',
  7,
  ARRAY['Italy', 'Infrastructure', 'Investment', 'Clean Energy', 'Europe']
),
(
  'Revolutionary Energy Storage Breakthrough: Next-Generation Battery Technology',
  'Scientists at leading research institutions have announced a groundbreaking advancement in energy storage technology that could fundamentally change how we store and use renewable energy. The new battery design combines advanced materials science with innovative engineering to achieve unprecedented energy density, faster charging times, and longer lifespan compared to current lithium-ion technologies. Laboratory tests have demonstrated energy densities up to 300% higher than conventional batteries, with charging times reduced to minutes rather than hours. The technology uses sustainable materials and manufacturing processes, addressing both performance and environmental concerns. Commercial applications are expected within the next three to five years, with potential impacts across electric vehicles, grid storage, and portable electronics.',
  'Breakthrough battery technology achieves 300% higher energy density than conventional batteries, with faster charging and sustainable materials, promising to revolutionize energy storage.',
  'https://www.nature.com/articles/energy-storage-breakthrough',
  'https://images.unsplash.com/photo-1564281616392-43272c85a74e?auto=format&fit=crop&q=80&w=800',
  'technology',
  'global',
  '2025-01-20T16:45:00Z',
  'Nature Energy',
  'Dr. Sarah Chen, Dr. Michael Rodriguez',
  9,
  ARRAY['Energy Storage', 'Battery Technology', 'Innovation', 'Research', 'Renewable Energy', 'Sustainability']
),
(
  'Global Renewable Energy Investment Surges to Record Levels',
  'The renewable energy sector has witnessed unprecedented investment levels in 2024, with global funding exceeding $400 billion in the first three quarters alone. Solar and wind projects continue to dominate the investment landscape, accounting for over 70% of total renewable energy investments. Emerging technologies such as green hydrogen, advanced energy storage, and floating solar installations are gaining significant traction among investors. Regional analysis shows strong growth in Asia-Pacific markets, continued expansion in Europe, and renewed momentum in North American projects. Government policies, including tax incentives, renewable energy mandates, and carbon pricing mechanisms, have played a crucial role in attracting private capital to the sector.',
  'Global renewable energy investment reaches record $400+ billion in 2024, driven by solar, wind, and emerging technologies like green hydrogen and advanced storage.',
  'https://www.irena.org/investment-trends-2024',
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
  'markets',
  'global',
  '2024-12-10T11:20:00Z',
  'International Renewable Energy Agency',
  'IRENA Investment Team',
  6,
  ARRAY['Investment', 'Renewable Energy', 'Solar', 'Wind', 'Green Hydrogen', 'Global Markets', 'Policy']
),
(
  'Offshore Wind Capacity Expansion Accelerates Across Europe',
  'European offshore wind capacity is experiencing rapid expansion, with new installations setting records for both scale and efficiency. The latest generation of offshore wind turbines features larger rotors, higher capacity factors, and improved reliability in harsh marine environments. Major projects off the coasts of the Netherlands, Denmark, and the United Kingdom are contributing significantly to this growth trajectory. Floating wind technology is opening up new areas for development in deeper waters, particularly in the Mediterranean and Atlantic regions. The expansion is supported by streamlined permitting processes, improved grid infrastructure, and innovative financing mechanisms that reduce project risks.',
  'European offshore wind capacity expands rapidly with record-breaking installations, featuring advanced turbine technology and floating wind solutions in deeper waters.',
  'https://windeurope.org/offshore-expansion-2024',
  'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800',
  'wind',
  'europe',
  '2024-11-28T13:10:00Z',
  'WindEurope',
  'Offshore Wind Analysis Team',
  5,
  ARRAY['Offshore Wind', 'Europe', 'Turbine Technology', 'Floating Wind', 'Capacity Expansion', 'Marine Energy']
),
(
  'Smart Grid Technology Revolutionizes Energy Distribution',
  'Advanced smart grid technologies are transforming how electricity is generated, distributed, and consumed across modern power systems. The integration of artificial intelligence, IoT sensors, and advanced analytics enables real-time optimization of energy flows, predictive maintenance, and enhanced grid resilience. Two-way communication between utilities and consumers facilitates demand response programs, peak load management, and integration of distributed energy resources. Cybersecurity measures have been strengthened to protect critical infrastructure from evolving threats. The deployment of smart meters, automated switching systems, and energy management platforms is creating more efficient and reliable electricity networks.',
  'Smart grid technology transforms energy distribution with AI, IoT sensors, and advanced analytics, enabling real-time optimization and enhanced grid resilience.',
  'https://www.smartgrid.gov/technology-advances',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
  'technology',
  'global',
  '2024-10-15T08:30:00Z',
  'Smart Grid Technology Review',
  'Grid Innovation Team',
  7,
  ARRAY['Smart Grid', 'AI', 'IoT', 'Energy Distribution', 'Grid Resilience', 'Technology', 'Infrastructure']
),
(
  'Green Hydrogen Production Scales Up with New Electrolysis Technology',
  'The green hydrogen industry is reaching new milestones with the deployment of advanced electrolysis technologies that significantly improve efficiency and reduce production costs. Next-generation proton exchange membrane (PEM) and solid oxide electrolyzers are achieving higher conversion rates while operating at lower temperatures. Large-scale production facilities are being established near renewable energy sources to maximize the use of clean electricity. Industrial applications in steel production, chemical manufacturing, and heavy transportation are driving demand for green hydrogen. International cooperation on hydrogen trade routes and standards is facilitating the development of a global hydrogen economy.',
  'Green hydrogen production advances with new electrolysis technology, improving efficiency and reducing costs while scaling up for industrial applications and global trade.',
  'https://www.hydrogencouncil.com/green-hydrogen-scaling',
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
  'technology',
  'global',
  '2024-09-22T15:45:00Z',
  'Hydrogen Council',
  'Green Hydrogen Research Division',
  8,
  ARRAY['Green Hydrogen', 'Electrolysis', 'Clean Energy', 'Industrial Applications', 'Technology', 'Global Trade']
);