/**
 * SEO Meta Tags Utility
 * Provides utilities for dynamically updating meta tags for better SEO
 * 
 * Usage:
 * import { updateMetaTags } from './utils/seoMetaTags'
 * 
 * updateMetaTags({
 *   title: 'Page Title',
 *   description: 'Page description',
 *   keywords: 'keyword1, keyword2'
 * })
 */

interface MetaTagsConfig {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}

/**
 * Update meta tags dynamically (useful for SPA routing)
 * @param config - Configuration object with meta tag values
 */
export const updateMetaTags = (config: MetaTagsConfig): void => {
  // Update title
  if (config.title) {
    document.title = config.title;
    updateOrCreateMetaTag('og:title', config.ogTitle || config.title);
    updateOrCreateMetaTag('twitter:title', config.twitterTitle || config.title);
  }

  // Update description
  if (config.description) {
    updateOrCreateMetaTag('description', config.description);
    updateOrCreateMetaTag('og:description', config.ogDescription || config.description);
    updateOrCreateMetaTag('twitter:description', config.twitterDescription || config.description);
  }

  // Update keywords
  if (config.keywords) {
    updateOrCreateMetaTag('keywords', config.keywords);
  }

  // Update OG image
  if (config.ogImage) {
    updateOrCreateMetaTag('og:image', config.ogImage);
    updateOrCreateMetaTag('twitter:image', config.twitterImage || config.ogImage);
  }

  // Update OG URL
  if (config.ogUrl) {
    updateOrCreateMetaTag('og:url', config.ogUrl);
  }

  // Update canonical URL
  if (config.canonicalUrl) {
    updateOrCreateCanonicalLink(config.canonicalUrl);
  }
};

/**
 * Helper function to update or create meta tags
 */
function updateOrCreateMetaTag(name: string, content: string): void {
  const isProperty = name.startsWith('og:') || name.startsWith('twitter:');
  const selector = isProperty 
    ? `meta[property="${name}"]`
    : `meta[name="${name}"]`;
  
  let metaTag = document.querySelector(selector) as HTMLMetaElement;
  
  if (!metaTag) {
    metaTag = document.createElement('meta');
    if (isProperty) {
      metaTag.setAttribute('property', name);
    } else {
      metaTag.setAttribute('name', name);
    }
    document.head.appendChild(metaTag);
  }
  
  metaTag.content = content;
}

/**
 * Update or create canonical link
 */
function updateOrCreateCanonicalLink(url: string): void {
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    document.head.appendChild(canonicalLink);
  }
  
  canonicalLink.href = url;
}

/**
 * Generate schema markup for a project
 */
export const generateProjectSchema = (project: {
  name: string;
  description: string;
  image: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}): string => {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: project.name,
    description: project.description,
    image: project.image,
    url: project.url,
    author: {
      '@type': 'Person',
      name: project.author || 'Sai Charan'
    },
    datePublished: project.datePublished,
    dateModified: project.dateModified
  });
};

/**
 * Generate FAQ schema markup
 */
export const generateFAQSchema = (faqs: Array<{
  question: string;
  answer: string;
}>): string => {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  });
};

/**
 * Get current page meta information
 */
export const getPageMetaInfo = (): MetaTagsConfig => {
  return {
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
    keywords: document.querySelector('meta[name="keywords"]')?.getAttribute('content') || '',
    ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '',
    ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '',
    ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '',
    ogUrl: document.querySelector('meta[property="og:url"]')?.getAttribute('content') || '',
    canonicalUrl: (document.querySelector('link[rel="canonical"]') as HTMLLinkElement)?.href || ''
  };
};

/**
 * Format excerpt to proper length for meta description
 * Google typically displays 150-160 characters
 */
export const formatMetaDescription = (text: string, maxLength: number = 160): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
};

/**
 * Generate keywords from text
 */
export const generateKeywords = (text: string, limit: number = 5): string => {
  // This is a simple implementation - for production, use a proper keyword extraction library
  const words = text.toLowerCase().split(/\s+/);
  const commonWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'be'
  ]);
  
  const filtered = words
    .filter(word => word.length > 3 && !commonWords.has(word))
    .slice(0, limit);
  
  return filtered.join(', ');
};
