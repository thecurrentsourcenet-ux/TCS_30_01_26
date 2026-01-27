import fs from 'node:fs';
import path from 'node:path';

const categories = {
  technical: {
    name: 'Technical Knowledge Base',
    description: 'Comprehensive guides on clean energy production, storage, transportation, safety standards, and industrial applications.',
    subcategories: [
      {
        id: 'production',
        name: 'Clean Energy Production',
        description: 'Methods for producing hydrogen, e-fuels, and other renewable energy sources. Explore electrolysis technologies, biomass conversion, solar-to-fuel processes, and emerging production methods for sustainable energy carriers.'
      },
      {
        id: 'storage',
        name: 'Energy Storage Solutions',
        description: 'Technologies for storing hydrogen, ammonia, and other energy carriers. Learn about compressed gas storage, liquid hydrogen systems, metal hydrides, chemical carriers, and underground storage solutions for long-term energy security.'
      },
      {
        id: 'transport',
        name: 'Transportation & Distribution',
        description: 'Infrastructure and methods for transporting clean energy carriers. Discover pipeline networks, shipping solutions, road transport, rail logistics, and innovative distribution systems for hydrogen and alternative fuels.'
      },
      {
        id: 'safety',
        name: 'Safety Standards',
        description: 'Safety protocols and best practices for handling various energy carriers. Essential guidelines for hydrogen safety, ammonia handling, storage facility design, emergency response procedures, and regulatory compliance requirements.'
      },
      {
        id: 'applications',
        name: 'Industrial Applications',
        description: 'Applications of hydrogen, e-fuels, and other low-carbon solutions across industries. Explore use cases in steel production, chemical manufacturing, aviation, shipping, heavy transport, and power generation.'
      }
    ]
  },
  legislation: {
    name: 'Energy Policy & Regulation',
    description: 'Global clean energy legislation, regulatory frameworks, and policy developments shaping the energy transition.',
    subcategories: [
      { id: 'us', name: 'United States', description: 'Clean energy legislation and regulations in the United States, including IRA incentives, state-level policies, and federal energy initiatives.' },
      { id: 'eu', name: 'European Union', description: 'Clean energy legislation and regulations in the European Union, including REPowerEU, hydrogen strategy, and emissions trading system.' },
      { id: 'uk', name: 'United Kingdom', description: 'Clean energy legislation and regulations in the United Kingdom, including Net Zero strategy and hydrogen production targets.' },
      { id: 'de', name: 'Germany', description: 'Clean energy legislation and regulations in Germany, including Energiewende policies and hydrogen roadmap.' },
      { id: 'fr', name: 'France', description: 'Clean energy legislation and regulations in France, including nuclear and renewable energy integration plans.' },
      { id: 'jp', name: 'Japan', description: 'Clean energy legislation and regulations in Japan, including hydrogen society vision and energy security policies.' },
      { id: 'cn', name: 'China', description: 'Clean energy legislation and regulations in China, including renewable energy mandates and green hydrogen initiatives.' },
      { id: 'kr', name: 'South Korea', description: 'Clean energy legislation and regulations in South Korea, including hydrogen economy roadmap and carbon neutrality goals.' },
      { id: 'au', name: 'Australia', description: 'Clean energy legislation and regulations in Australia, including hydrogen export strategy and renewable energy zones.' },
      { id: 'in', name: 'India', description: 'Clean energy legislation and regulations in India, including National Hydrogen Mission and renewable energy targets.' },
      { id: 'vn', name: 'Vietnam', description: 'Clean energy legislation and regulations in Vietnam, including renewable energy development and offshore wind policies.' }
    ]
  }
};

function generateCategoryHTML(categoryId, categoryData, siteUrl = 'https://thecurrentsource.net') {
  const canonicalUrl = `${siteUrl}/category/${categoryId}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${categoryData.name} | TheCurrentSource</title>

  <meta name="description" content="${categoryData.description}">
  <meta name="keywords" content="clean energy, ${categoryId}, energy transition, renewable energy, hydrogen, sustainable energy">

  <link rel="canonical" href="${canonicalUrl}">

  <meta property="og:title" content="${categoryData.name}">
  <meta property="og:description" content="${categoryData.description}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="TheCurrentSource">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${categoryData.name}">
  <meta name="twitter:description" content="${categoryData.description}">

  <link rel="stylesheet" href="/static-article.css">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "${categoryData.name}",
    "description": "${categoryData.description}",
    "url": "${canonicalUrl}",
    "isPartOf": {
      "@type": "WebSite",
      "name": "TheCurrentSource",
      "url": "${siteUrl}"
    }
  }
  </script>
</head>
<body>
  <header class="site-header">
    <div class="container">
      <a href="/" class="logo">TheCurrentSource</a>
      <nav>
        <a href="/">Home</a>
        <a href="/category/technical">Technical</a>
        <a href="/category/legislation">Policy</a>
        <a href="/about">About</a>
      </nav>
    </div>
  </header>

  <main class="article-page">
    <article class="article-content">
      <a href="/" class="back-link">← Back to Timeline</a>

      <header class="article-header">
        <h1 class="article-title">${categoryData.name}</h1>
        <p class="article-dek">${categoryData.description}</p>
      </header>

      <div class="category-sections">
        ${categoryData.subcategories.map(sub => `
        <div class="category-section">
          <h2><a href="/category/${categoryId}/${sub.id}">${sub.name}</a></h2>
          <p>${sub.description}</p>
          <a href="/category/${categoryId}/${sub.id}" class="section-link">Explore ${sub.name} →</a>
        </div>
        `).join('\n')}
      </div>

      <div class="article-end-cta">
        <h3>Stay Informed on the Energy Transition</h3>
        <p>Get the latest insights, analysis, and developments shaping the global energy landscape.</p>
        <div class="cta-buttons">
          <a href="/" class="btn-primary">Latest Articles →</a>
        </div>
      </div>
    </article>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>&copy; 2025 TheCurrentSource. All rights reserved.</p>
    </div>
  </footer>

  <style>
    .category-sections {
      display: grid;
      gap: 2rem;
      margin: 3rem 0;
    }

    .category-section {
      padding: 2rem;
      background: linear-gradient(to bottom right, #f0f9ff, #e0f2fe);
      border-radius: 12px;
      border: 1px solid #bae6fd;
    }

    .category-section h2 {
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      color: #0c4a6e;
    }

    .category-section h2 a {
      color: #0c4a6e;
      text-decoration: none;
    }

    .category-section h2 a:hover {
      color: #0369a1;
      text-decoration: underline;
    }

    .category-section p {
      margin-bottom: 1.5rem;
      line-height: 1.7;
      color: #334155;
    }

    .section-link {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background: #0284c7;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      transition: background 0.2s;
    }

    .section-link:hover {
      background: #0369a1;
    }
  </style>
</body>
</html>`;
}

function generateSubcategoryHTML(categoryId, categoryName, subcategory, siteUrl = 'https://thecurrentsource.net') {
  const canonicalUrl = `${siteUrl}/category/${categoryId}/${subcategory.id}`;
  const breadcrumb = categoryId === 'technical' ? 'Technical Knowledge Base' : 'Energy Policy & Regulation';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subcategory.name} | ${categoryName} | TheCurrentSource</title>

  <meta name="description" content="${subcategory.description}">
  <meta name="keywords" content="${subcategory.name}, ${categoryName}, clean energy, energy transition, renewable energy">

  <link rel="canonical" href="${canonicalUrl}">

  <meta property="og:title" content="${subcategory.name}">
  <meta property="og:description" content="${subcategory.description}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="TheCurrentSource">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${subcategory.name}">
  <meta name="twitter:description" content="${subcategory.description}">

  <link rel="stylesheet" href="/static-article.css">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "${subcategory.name}",
    "description": "${subcategory.description}",
    "url": "${canonicalUrl}",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "${siteUrl}/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "${breadcrumb}",
          "item": "${siteUrl}/category/${categoryId}"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "${subcategory.name}",
          "item": "${canonicalUrl}"
        }
      ]
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": "TheCurrentSource",
      "url": "${siteUrl}"
    }
  }
  </script>
</head>
<body>
  <header class="site-header">
    <div class="container">
      <a href="/" class="logo">TheCurrentSource</a>
      <nav>
        <a href="/">Home</a>
        <a href="/category/technical">Technical</a>
        <a href="/category/legislation">Policy</a>
        <a href="/about">About</a>
      </nav>
    </div>
  </header>

  <main class="article-page">
    <article class="article-content">
      <nav class="breadcrumb">
        <a href="/">Home</a> /
        <a href="/category/${categoryId}">${breadcrumb}</a> /
        <span>${subcategory.name}</span>
      </nav>

      <header class="article-header">
        <h1 class="article-title">${subcategory.name}</h1>
        <p class="article-dek">${subcategory.description}</p>
      </header>

      <div class="article-body">
        <div class="info-box">
          <h2>📚 Articles in this category</h2>
          <p>This page displays all articles related to <strong>${subcategory.name}</strong>. Browse our comprehensive coverage of this topic from the latest news, analysis, and developments.</p>
          <a href="/" class="btn-primary">View All Articles →</a>
        </div>

        <div class="related-section">
          <h2>Related Categories</h2>
          <a href="/category/${categoryId}" class="related-link">← Back to ${breadcrumb}</a>
        </div>
      </div>

      <div class="article-end-cta">
        <h3>Stay Informed on the Energy Transition</h3>
        <p>Get the latest insights, analysis, and developments shaping the global energy landscape.</p>
        <div class="cta-buttons">
          <a href="/" class="btn-primary">Latest Articles →</a>
        </div>
      </div>
    </article>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>&copy; 2025 TheCurrentSource. All rights reserved.</p>
    </div>
  </footer>

  <style>
    .breadcrumb {
      margin-bottom: 2rem;
      color: #64748b;
      font-size: 0.95rem;
    }

    .breadcrumb a {
      color: #0284c7;
      text-decoration: none;
    }

    .breadcrumb a:hover {
      text-decoration: underline;
    }

    .info-box {
      background: linear-gradient(to bottom right, #f0f9ff, #e0f2fe);
      border-left: 4px solid #0284c7;
      padding: 2rem;
      margin: 2rem 0;
      border-radius: 8px;
    }

    .info-box h2 {
      margin-top: 0;
      color: #0c4a6e;
    }

    .related-section {
      margin: 3rem 0;
      padding: 2rem;
      background: #f8fafc;
      border-radius: 8px;
    }

    .related-link {
      display: inline-block;
      margin-top: 1rem;
      color: #0284c7;
      text-decoration: none;
      font-weight: 600;
    }

    .related-link:hover {
      text-decoration: underline;
    }
  </style>
</body>
</html>`;
}

async function generateCategoryPages() {
  try {
    console.log('Generating static category pages...');

    const categoryDir = path.join(process.cwd(), 'public', 'category');
    if (fs.existsSync(categoryDir)) {
      fs.rmSync(categoryDir, { recursive: true, force: true });
    }
    fs.mkdirSync(categoryDir, { recursive: true });

    let generatedCount = 0;

    for (const [categoryId, categoryData] of Object.entries(categories)) {
      const catDir = path.join(categoryDir, categoryId);
      fs.mkdirSync(catDir, { recursive: true });

      const mainHtml = generateCategoryHTML(categoryId, categoryData);
      const mainPath = path.join(catDir, 'index.html');
      fs.writeFileSync(mainPath, mainHtml);
      console.log(`✓ Generated: /category/${categoryId}/`);
      generatedCount++;

      for (const subcategory of categoryData.subcategories) {
        const subDir = path.join(catDir, subcategory.id);
        fs.mkdirSync(subDir, { recursive: true });

        const subHtml = generateSubcategoryHTML(categoryId, categoryData.name, subcategory);
        const subPath = path.join(subDir, 'index.html');
        fs.writeFileSync(subPath, subHtml);
        console.log(`✓ Generated: /category/${categoryId}/${subcategory.id}/`);
        generatedCount++;
      }
    }

    console.log('\n=== Generation Summary ===');
    console.log(`Total pages generated: ${generatedCount}`);

  } catch (error) {
    console.error('Failed to generate category pages:', error);
    process.exit(1);
  }
}

generateCategoryPages();
