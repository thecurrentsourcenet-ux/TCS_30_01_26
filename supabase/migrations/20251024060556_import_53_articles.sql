/*
  # Import 53 Real Articles
  
  This migration imports all 53 articles from the static-data.json file to replace the 8 placeholder articles.
  
  Articles include:
  - EU energy policy and Russian gas phase-out
  - Global hydrogen initiatives and infrastructure
  - Renewable energy developments
  - EV charging infrastructure
  - Smart grid technology
  - Energy market analysis
  
  Categories: Policy, Hydrogen, Energy, EV Charging, Renewables, Oil & Gas, Electrical Power, Smart Grid
*/

-- First, clear any existing articles
DELETE FROM articles;
