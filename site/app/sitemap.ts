export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saltwater-sessions.vercel.app';
  const routes = ['', '/gallery', '/prints', '/workshops', '/about', '/contact'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
