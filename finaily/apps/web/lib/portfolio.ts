export type Holding = {
  symbol: string;
  allocation: number;
};

export function analyzePortfolio(holdings: Holding[]) {
  const aiExposure = Math.min(
    100,
    Math.round(
      holdings.reduce((sum, item) => {
        const aiStocks = ['NVDA', 'MSFT', 'TSM', 'ASML', 'AMD'];
        return sum + (aiStocks.includes(item.symbol) ? item.allocation : 0);
      }, 0)
    )
  );

  return {
    aiExposure,
    risk: aiExposure > 75 ? 'Medium' : 'Low',
    dominantTheme: 'AI Infrastructure',
  };
}
