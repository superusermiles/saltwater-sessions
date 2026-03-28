export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';

const baseUrl = 'https://saltwater-sessions.vercel.app';
const lastModified = new Date('2026-03-28T08:11:53.229Z');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    '/gallery',
    '/prints',
    '/workshops',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));
}
