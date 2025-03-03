import { Metadata } from 'next';
import { siteConfig } from './constants';

/**
 * Creates metadata with canonical URL, Open Graph URL, and hreflang tags for any page
 * 
 * @param path The path of the page (e.g., '/blog', '/features')
 * @param metadata Additional metadata to merge
 * @returns Metadata object with canonical URL, Open Graph URL, and hreflang tags
 */
export function createMetadata(path: string, metadata: Partial<Metadata> = {}): Metadata {
  // Ensure path starts with a slash
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  
  // Create the full URL by combining the site URL with the path
  const fullUrl = `${siteConfig.links.home}${canonicalPath === '/' ? '' : canonicalPath}`;
  
  // Default Open Graph image
  const defaultOgImage = {
    url: '/images/bordful-job-board-software.png',
    width: 1200,
    height: 630,
    alt: 'Bordful - Open Source Job Board Software',
  };
  
  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical: canonicalPath,
      languages: {
        'en-US': fullUrl,
        'x-default': fullUrl,
      },
    },
    openGraph: {
      ...metadata.openGraph,
      type: "website",
      url: fullUrl,
      images: metadata.openGraph?.images || [defaultOgImage],
    },
  };
}
