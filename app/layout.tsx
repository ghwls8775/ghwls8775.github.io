import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hojinchu.com'),
  title: 'Hojin Chu | Graph Theory & Combinatorics',
  description: 'Hojin Chu is a graph theory researcher at the Korea Institute for Advanced Study, working in combinatorics, structural graph theory, digraphs, and combinatorial matrix theory.',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Hojin Chu | Graph Theory & Combinatorics',
    description: 'Research in combinatorics, structural graph theory, digraphs, and combinatorial matrix theory.',
    url: '/',
    siteName: 'Hojin Chu',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Hojin Chu — Graph Theory and Combinatorics' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hojin Chu | Graph Theory & Combinatorics',
    description: 'Research in combinatorics, structural graph theory, digraphs, and combinatorial matrix theory.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
