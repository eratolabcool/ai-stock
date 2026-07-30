export interface MarketNews {
  title: string;
  source: string;
  url?: string;
  publishedAt: string;
}

export async function getMarketNews(): Promise<MarketNews[]> {
  return [];
}
