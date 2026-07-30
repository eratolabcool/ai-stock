import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://finaily.net';

  return [
    { url: base },
    { url: `${base}/stocks` },
    { url: `${base}/themes` },
    { url: `${base}/reports` },
    { url: `${base}/portfolio` },
    { url: `${base}/pro` },
  ];
}
