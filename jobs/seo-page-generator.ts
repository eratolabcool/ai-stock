export interface SEOPageInput {
  slug: string;
  title: string;
  content: string;
}

export function generateSEOPage(input: SEOPageInput) {
  return {
    ...input,
    generatedAt: new Date().toISOString(),
  };
}
