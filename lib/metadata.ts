import { Metadata } from 'next';
import { siteConfig } from './constants';

/**
 * Creates metadata with canonical URL and Open Graph URL for any page
 * 
 * @param path The path of the page (e.g., '/blog', '/features')
 * @param metadata Additional metadata to merge
 * @returns Metadata object with canonical URL and Open Graph URL
 */
export function createMetadata(path: string, metadata: Partial<Metadata> = {}): Metadata {
  // Ensure path starts with a slash
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  
  // Create the full URL by combining the site URL with the path
  const fullUrl = `${siteConfig.links.home}${canonicalPath === '/' ? '' : canonicalPath}`;
  
  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical: canonicalPath,
    },
    openGraph: {
      ...metadata.openGraph,
      type: "website",
      url: fullUrl,
    },
  };
}
