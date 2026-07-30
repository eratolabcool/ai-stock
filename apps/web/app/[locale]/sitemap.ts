import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://finaily.net'

  const routes = [
    '',
    '/market',
    '/stocks',
    '/themes',
    '/reports',
    '/dashboard',
    '/newsletter',
    '/tools/portfolio-analyzer',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}
