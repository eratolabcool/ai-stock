import type { MetadataRoute } from 'next';

const base = 'https://finaily.net';

const stockPages = ['nvda', 'msft', 'tsm', 'amd', 'asml'];
const themePages = ['ai-semiconductor', 'cloud-ai', 'robotics'];
const reportPages = ['ai-market-outlook-2026', 'ai-agent-economy'];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/dashboard',
    '/stocks',
    '/themes',
    '/reports',
    '/research',
    '/guides',
    '/portfolio',
    '/pro',
  ];

  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: route === '' ? 1 : 0.8,
    })),
    ...stockPages.map((symbol) => ({
      url: `${base}/stocks/${symbol}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...themePages.map((slug) => ({
      url: `${base}/themes/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...reportPages.map((slug) => ({
      url: `${base}/reports/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];
}
