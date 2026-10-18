import type { MetadataRoute } from 'next';
import { siteUrl, projects } from '@/lib/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: siteUrl, priority: 1 }, ...projects.map(p => ({ url: `${siteUrl}/projects/${p.slug}`, priority: 0.8 }))]; }
