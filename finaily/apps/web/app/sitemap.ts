import type { MetadataRoute } from 'next';

const base = 'https://finaily.net';

const stockPages = [
  'nvda',
  'msft',
  'tsm',
  'amd',
  'asml',
];

const themePages = [
  'ai-semiconductor',
  'cloud-ai',
  'robotics',
];

const reportPages = [
  'ai-market-outlook-2026',
  'ai-agent-economy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base },
    { url: `${base}/stocks` },
    { url: `${base}/themes` },
    { url: `${base}/reports` },
    { url: `${base}/guides` },
    { url: `${base}/portfolio` },
    { url: `${base}/pro` },
    ...stockPages.map((symbol) => ({
      url: `${base}/stocks/${symbol}`,
    })),
    ...themePages.map((slug) => ({
      url: `${base}/themes/${slug}`,
    })),
    ...reportPages.map((slug) => ({
      url: `${base}/reports/${slug}`,
    })),
  ];
}
