export interface ProcessedContent {
  sections: ContentSection[];
  keyTakeaways: string[];
}

export interface ContentSection {
  heading: string;
  level: 2 | 3;
  content: string[];
}

export function extractKeyTakeaways(content: string, description: string): string[] {
  const takeaways: string[] = [];

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
    const sentences = content.split(/[.!?]\s+/).filter(s => s.trim().length > 50);
    const importantSentences = sentences.filter(s =>
      /\b(critical|key|important|significant|major|breakthrough|revolutionary|unprecedented)\b/i.test(s)
    );

    if (importantSentences.length >= 3) {
      return importantSentences.slice(0, 4);
    }

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

export function splitLongParagraphs(text: string): string[] {
  if (text.length <= 400) {
    return [text];
  }

  const urlPattern = /https?:\/\/[^\s<>"')]+/g;
  const urls: string[] = [];
  const placeholders: string[] = [];

  let protectedText = text;
  let match;
  let index = 0;

  while ((match = urlPattern.exec(text)) !== null) {
    const placeholder = `__URL_PLACEHOLDER_${index}__`;
    urls.push(match[0]);
    placeholders.push(placeholder);
    protectedText = protectedText.replace(match[0], placeholder);
    index++;
  }

  const sentences = protectedText.match(/[^.!?]+[.!?]+/g) || [protectedText];
  const paragraphs: string[] = [];
  let current = '';

  for (const sentence of sentences) {
    const trimmed = sentence.trim();
    if ((current + ' ' + trimmed).length > 400) {
      if (current) paragraphs.push(current.trim());
      current = trimmed;
    } else {
      current = current ? current + ' ' + trimmed : trimmed;
    }
  }

  if (current) paragraphs.push(current.trim());

  return paragraphs.map(para => {
    let restored = para;
    placeholders.forEach((placeholder, idx) => {
      restored = restored.replace(placeholder, urls[idx]);
    });
    return restored;
  });
}

export function parseContentSections(content: string): ContentSection[] {
  const sections: ContentSection[] = [];
  const lines = content.split('\n').filter(line => line.trim());

  let currentSection: ContentSection | null = null;

  const commonHeaders = [
    'Executive Overview', 'Market & Policy', 'Technology & Innovation',
    'Funding & Projects', 'Risks & Constraints', 'Outlook',
    'Introduction', 'Background', 'Key Developments', 'Analysis',
    'Implementation', 'Challenges', 'Opportunities', 'Conclusion',
    'Market Analysis', 'Policy Update', 'Technical Details'
  ];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    const isHeader = commonHeaders.some(header =>
      line === header || line.startsWith(header)
    );

    const looksLikeHeader =
      line.length < 100 &&
      line.length > 5 &&
      /^[A-Z]/.test(line) &&
      !line.endsWith('.') &&
      !line.includes('://');

    if ((isHeader || looksLikeHeader) && !line.includes('http')) {
      if (currentSection && currentSection.content.length > 0) {
        sections.push(currentSection);
      }

      currentSection = {
        heading: line,
        level: commonHeaders.includes(line) ? 2 : 3,
        content: []
      };
    } else if (currentSection && line.length > 0) {
      currentSection.content.push(line);
    }
  }

  if (currentSection && currentSection.content.length > 0) {
    sections.push(currentSection);
  }

  return sections;
}

export function addInternalLinks(text: string, availableArticles?: Array<{title: string; slug: string}>): string {
  const keyTerms: Record<string, string> = {
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
  const alreadyLinked = new Set<string>();

  for (const [term, url] of Object.entries(keyTerms)) {
    if (alreadyLinked.has(term)) continue;

    const regex = new RegExp(`\\b(${term})\\b`, 'i');
    const match = linkedText.match(regex);

    if (match && !linkedText.includes(`>${match[0]}</a>`)) {
      linkedText = linkedText.replace(
        regex,
        `<a href="${url}" class="internal-link">${match[0]}</a>`
      );
      alreadyLinked.add(term);
    }
  }

  return linkedText;
}

export function generateDek(description: string, content: string): string {
  if (description.length > 100 && description.length < 200) {
    return description;
  }

  const firstParagraph = content.split('\n\n')[0];
  if (firstParagraph && firstParagraph.length > 100) {
    const sentences = firstParagraph.split(/[.!?]\s+/);
    if (sentences.length >= 2) {
      return (sentences[0] + '. ' + sentences[1] + '.').slice(0, 200);
    }
    return firstParagraph.slice(0, 200) + '...';
  }

  return description.slice(0, 200);
}
