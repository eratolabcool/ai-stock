export function createMetadata({
  title,
  description,
  path = '',
}: {
  title: string
  description: string
  path?: string
}) {
  return {
    title,
    description,
    alternates: {
      canonical: `https://finaily.net${path}`,
    },
    openGraph: {
      title,
      description,
      url: `https://finaily.net${path}`,
      siteName: 'Finaily',
    },
  }
}
