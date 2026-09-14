import type { Metadata } from 'next';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: 'Hojin Chu',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Hojin Chu — Graph Theory and Combinatorics' }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og.png'],
    },
  };
}
