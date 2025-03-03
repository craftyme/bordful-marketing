import { Metadata } from 'next';

/**
 * Creates metadata with canonical URL for any page
 * 
 * @param path The path of the page (e.g., '/blog', '/features')
 * @param metadata Additional metadata to merge
 * @returns Metadata object with canonical URL
 */
export function createMetadata(path: string, metadata: Partial<Metadata> = {}): Metadata {
  // Ensure path starts with a slash
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  
  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical: canonicalPath,
    },
  };
}
