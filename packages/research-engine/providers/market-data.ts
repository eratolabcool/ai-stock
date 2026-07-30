export interface MarketQuote {
  symbol: string;
  price: number;
  changePercent: number;
  updatedAt: string;
}

export async function getMarketQuote(symbol: string): Promise<MarketQuote> {
  return {
    symbol,
    price: 0,
    changePercent: 0,
    updatedAt: new Date().toISOString(),
  };
}
