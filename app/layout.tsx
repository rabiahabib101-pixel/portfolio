import type { Metadata } from 'next';
import './globals.css';
import './visual.css';
import { siteUrl } from '@/lib/site';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Rabia Habib — AI Engineer & Software Developer', template: '%s | Rabia Habib' },
  description: 'Rabia Habib is an AI engineer in Karachi building practical generative AI, private RAG systems, machine learning, and business automation solutions.',
  openGraph: { type: 'website', locale: 'en_US', siteName: 'Rabia Habib', title: 'Rabia Habib — AI Engineer & Software Developer', description: 'Practical AI. Thoughtful engineering. Explore selected work in RAG, conversational AI, and automation.', images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Rabia Habib — Intelligent systems. Real-world impact.' }] },
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
