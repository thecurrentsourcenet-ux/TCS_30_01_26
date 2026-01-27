import fs from 'node:fs';
import path from 'node:path';

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function generateDek(description, content) {
  if (description.length > 100 && description.length < 200) {
    return description;
  }
  const firstPara = content.split('\n\n')[0];
  if (firstPara && firstPara.length > 100) {
    const sentences = firstPara.split(/[.!?]\s+/);
    if (sentences.length >= 2) {
      return (sentences[0] + '. ' + sentences[1] + '.').slice(0, 200);
    }
    return firstPara.slice(0, 200) + '...';
  }
  return description.slice(0, 200);
}

function extractKeyTakeaways(content, description) {
  const takeaways = [];
  const lines = content.split('\n').filter(line => line.trim());

  for (const line of lines) {
    if (line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().startsWith('*')) {
      const cleaned = line.replace(/^[•\-*]\s*/, '').trim();
      if (cleaned.length > 20 && cleaned.length < 200) {
        takeaways.push(cleaned);
      }
    }
  }

  if (takeaways.length === 0) {
    const paragraphs = content.split('\n\n').filter(p => p.trim());
    if (paragraphs.length > 0) {
      const firstSentences = paragraphs
        .slice(0, 4)
        .map(p => {
          const firstSentence = p.split(/[.!?]\s+/)[0];
          return firstSentence?.trim();
        })
        .filter(s => s && s.length > 30 && s.length < 200);
      return firstSentences.slice(0, 4);
    }
  }

  return takeaways.slice(0, 4);
}

function addInternalLinks(text) {
  const keyTerms = {
    'World Energy Outlook': '/articles/world-energy-outlook-2025-the-age-of-electricity-and-systemic-shifts',
    'green hydrogen': '/articles/green-hydrogen-production-scales-up-with-new-electrolysis-technology',
    'smart grid': '/articles/smart-grid-technology-revolutionizes-energy-distribution',
    'renewable energy': '/articles/global-renewable-energy-investment-surges-to-record-levels',
    'EV charging': '/articles/ev-charging-infrastructure-innovation-and-integration',
    'microgrid': '/articles/microgrid-innovation-weekly-developments-and-global-trends',
    'energy transition': '/timeline',
    'Net Zero': '/timeline',
    'critical minerals': '/articles/execution-capacity-not-ambition-determines-global-progress'
  };

  let linkedText = text;
  const alreadyLinked = new Set();

  for (const [term, url] of Object.entries(keyTerms)) {
    if (alreadyLinked.has(term)) continue;
    const regex = new RegExp(`\\b(${term})\\b`, 'i');
    const match = linkedText.match(regex);
    if (match && !linkedText.includes(`>${match[0]}</a>`)) {
      linkedText = linkedText.replace(regex, `<a href="${url}" class="internal-link">${match[0]}</a>`);
      alreadyLinked.add(term);
    }
  }

  return linkedText;
}

function linkifyUrls(text) {
  const urlRegex = /\bhttps?:\/\/[^\s<>"'()]+[^\s<>"'(),.?!]/g;
  return text.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });
}

function splitLongParagraphs(text) {
  if (text.length <= 500) return [text];

  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  const paragraphs = [];
  let currentPara = '';

  for (const sentence of sentences) {
    if ((currentPara + sentence).length > 500 && currentPara.length > 0) {
      paragraphs.push(currentPara.trim());
      currentPara = sentence;
    } else {
      currentPara += sentence;
    }
  }

  if (currentPara.trim()) {
    paragraphs.push(currentPara.trim());
  }

  return paragraphs.length > 0 ? paragraphs : [text];
}

function formatContentWithStructure(content) {
  if (!content) return '';

  const paragraphs = content.split('\n\n').filter(p => p.trim());
  let html = '';
  let adInserted = false;

  paragraphs.forEach((para, index) => {
    const splitParas = splitLongParagraphs(para);
    splitParas.forEach(p => {
      const processed = addInternalLinks(linkifyUrls(escapeHtml(p)));
      html += `        <p>${processed}</p>\n`;
    });

    // Insert ad placeholder after 2nd paragraph
    if (index === 1 && !adInserted) {
      html += `        <div class="article-ad-placeholder" style="margin: 2rem 0; padding: 2rem; background: #f9fafb; border: 1px dashed #d1d5db; text-align: center; color: #9ca3af;">Ad Space</div>\n`;
      adInserted = true;
    }
  });

  return html;
}

function generateArticleHTML(article, siteUrl = 'https://thecurrentsource.net') {
  const canonicalUrl = `${siteUrl}/articles/${article.slug}`;
  const imageUrl = article.imageUrl?.startsWith('http')
    ? article.imageUrl
    : `${siteUrl}${article.imageUrl}`;

  const dek = generateDek(article.description, article.content || '');
  const takeaways = extractKeyTakeaways(article.content || '', article.description);
  const contentHtml = formatContentWithStructure(article.content || '');

  const tags = article.tags?.length > 0
    ? article.tags.map(tag => `<span class="tag">#${escapeHtml(tag)}</span>`).join(' ')
    : '';

  const keyTakeawaysHTML = takeaways.length > 0 ? `
      <div class="key-takeaways">
        <div class="takeaways-header">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <h2>Key Takeaways</h2>
        </div>
        <ul class="takeaways-list">
          ${takeaways.map((t, i) => `<li><span class="number">${i + 1}</span>${escapeHtml(t)}</li>`).join('\n          ')}
        </ul>
      </div>
  ` : '';

  // Social share buttons
  const shareUrl = encodeURIComponent(canonicalUrl);
  const shareTitle = encodeURIComponent(article.title);
  const socialShareHTML = `
      <div class="social-share">
        <a href="https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}"
           target="_blank" rel="noopener noreferrer" class="social-share-button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Share
        </a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}"
           target="_blank" rel="noopener noreferrer" class="social-share-button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          Share
        </a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}"
           target="_blank" rel="noopener noreferrer" class="social-share-button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Share
        </a>
      </div>
  `;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(article.title)} | TheCurrentSource</title>

  <meta name="description" content="${escapeHtml(article.description)}">
  <meta name="keywords" content="${escapeHtml(article.tags?.join(', ') || 'energy news')}">
  <meta name="author" content="${escapeHtml(article.author || 'TheCurrentSource')}">

  <link rel="canonical" href="${canonicalUrl}">

  <meta property="og:title" content="${escapeHtml(article.title)}">
  <meta property="og:description" content="${escapeHtml(article.description)}">
  <meta property="og:image" content="${imageUrl}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="TheCurrentSource">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(article.title)}">
  <meta name="twitter:description" content="${escapeHtml(article.description)}">
  <meta name="twitter:image" content="${imageUrl}">

  <meta property="article:published_time" content="${article.date}">
  <meta property="article:modified_time" content="${article.date}">
  <meta property="article:author" content="${escapeHtml(article.author || 'TheCurrentSource')}">
  <meta property="article:section" content="${escapeHtml(article.category)}">
  ${article.tags?.map(tag => `<meta property="article:tag" content="${escapeHtml(tag)}">`).join('\n  ') || ''}

  <link rel="stylesheet" href="/static-styles.css">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "${escapeHtml(article.title)}",
    "description": "${escapeHtml(article.description)}",
    "image": "${imageUrl}",
    "datePublished": "${article.date}",
    "dateModified": "${article.date}",
    "author": {
      "@type": "${article.author ? 'Person' : 'Organization'}",
      "name": "${escapeHtml(article.author || 'TheCurrentSource')}"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TheCurrentSource",
      "logo": {
        "@type": "ImageObject",
        "url": "${siteUrl}/Logo.PNG"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${canonicalUrl}"
    }
  }
  </script>

  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-X4EMC0MJ3Q"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-X4EMC0MJ3Q');
  </script>
</head>
<body>
  <header class="site-header">
    <div class="container">
      <a href="/" class="logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
        TheCurrentSource
      </a>
      <nav>
        <a href="/">Home</a>
        <a href="/infographics">Infographics</a>
        <a href="/about">About</a>
        <a href="/newsletter">Newsletter</a>
      </nav>
    </div>
  </header>

  <main>
    <div class="container">
      <a href="/" class="back-link">← Back to Timeline</a>

      <article itemscope itemtype="https://schema.org/NewsArticle">
        ${article.imageUrl ? `<img src="${article.imageUrl}" alt="${escapeHtml(article.title)}" class="article-image" itemprop="image">` : ''}

        <header class="article-header">
          <time class="article-date" datetime="${article.date}" itemprop="datePublished">
            ${formatDate(article.date)}
          </time>

          <h1 class="article-title" itemprop="headline">${escapeHtml(article.title)}</h1>

          <p class="article-dek" itemprop="description">${escapeHtml(dek)}</p>

          ${tags ? `<div class="article-tags">${tags}</div>` : ''}

          <div class="article-meta">
            ${article.source ? `<span itemprop="publisher" itemscope itemtype="https://schema.org/Organization"><span itemprop="name">Source: ${escapeHtml(article.source)}</span></span>` : ''}
            ${article.author ? `<span itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">By ${escapeHtml(article.author)}</span></span>` : ''}
            ${article.readTime ? `<span>⏱️ ${article.readTime} min read</span>` : ''}
          </div>

          ${socialShareHTML}
        </header>

${keyTakeawaysHTML}

        <div class="article-body" itemprop="articleBody">
${contentHtml}
        </div>

        ${article.url && article.url !== '' && article.url !== '#' ? `
        <a href="${escapeHtml(article.url)}" target="_blank" rel="noopener noreferrer" class="source-link" itemprop="url">
          Read Original Article →
        </a>
        ` : ''}

        <div class="article-end-cta">
          <h3>Stay Informed on the Energy Transition</h3>
          <p>Get the latest insights, analysis, and developments shaping the global energy landscape.</p>
          <a href="/" class="btn-primary">More Articles →</a>
        </div>

        <div class="newsletter-cta">
          <h3>📬 Subscribe to Our Newsletter</h3>
          <p>Get weekly energy insights delivered to your inbox</p>
          <a href="/newsletter" class="btn-primary">Subscribe Free</a>
        </div>

        <meta itemprop="dateModified" content="${article.date}">
      </article>
    </div>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-section">
          <p style="font-size: 0.875rem; font-weight: 600; color: #0ea5e9; margin-bottom: 0.5rem;">TheCurrentSource</p>
          <p style="font-size: 0.75rem; color: #6b7280;">Comprehensive energy information hub</p>
        </div>

        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Timeline</a></li>
            <li><a href="/infographics">Infographics</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/newsletter">Newsletter</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Contact</h3>
          <p style="font-size: 0.75rem; color: #6b7280;">
            <a href="mailto:thecurrentsource.net@gmail.com" style="color: inherit;">thecurrentsource.net@gmail.com</a>
          </p>
        </div>

        <div class="footer-section">
          <h3>Connect</h3>
          <div class="social-icons">
            <a href="https://it.linkedin.com/in/the-current-source-616307380" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@TheCurrentSource" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-copyright">
        &copy; ${new Date().getFullYear()} TheCurrentSource. All rights reserved.
      </div>
    </div>
  </footer>
</body>
</html>`;
}

async function generateStaticPages() {
  try {
    console.log('Generating static HTML pages...');

    const staticDataPath = path.join(process.cwd(), 'public', 'static-data.json');
    if (!fs.existsSync(staticDataPath)) {
      console.error('static-data.json not found. Run build-ssg.js first.');
      process.exit(1);
    }

    const staticData = JSON.parse(fs.readFileSync(staticDataPath, 'utf8'));
    const articles = staticData.articles;

    const articlesDir = path.join(process.cwd(), 'public', 'articles');
    if (fs.existsSync(articlesDir)) {
      fs.rmSync(articlesDir, { recursive: true, force: true });
    }
    fs.mkdirSync(articlesDir, { recursive: true });

    let generatedCount = 0;
    let skippedCount = 0;

    for (let i = 0; i < articles.length; i++) {
      const article = articles[i];

      if (!article.slug) {
        console.log(`[${i + 1}/${articles.length}] ⚠ No slug for: ${article.title}`);
        skippedCount++;
        continue;
      }

      const articleDir = path.join(articlesDir, article.slug);
      fs.mkdirSync(articleDir, { recursive: true });

      const html = generateArticleHTML(article);
      const htmlPath = path.join(articleDir, 'index.html');
      fs.writeFileSync(htmlPath, html, 'utf8');

      console.log(`[${i + 1}/${articles.length}] ✓ Generated: ${article.slug}`);
      generatedCount++;
    }

    console.log('\n=== Static Page Generation Complete ===');
    console.log(`Total articles: ${articles.length}`);
    console.log(`Generated: ${generatedCount}`);
    console.log(`Skipped: ${skippedCount}`);

  } catch (error) {
    console.error('Error generating static pages:', error);
    process.exit(1);
  }
}

generateStaticPages();
