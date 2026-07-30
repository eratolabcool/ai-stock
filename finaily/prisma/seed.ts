export const initialStocks = [
  { symbol: "NVDA", company: "NVIDIA", theme: "AI Infrastructure", aiScore: 92 },
  { symbol: "MSFT", company: "Microsoft", theme: "Cloud AI", aiScore: 89 },
  { symbol: "TSM", company: "TSMC", theme: "AI Semiconductor", aiScore: 87 },
  { symbol: "AMD", company: "AMD", theme: "AI Semiconductor", aiScore: 84 },
  { symbol: "ASML", company: "ASML", theme: "Semiconductor Equipment", aiScore: 86 }
];

export function seedStocks() {
  return initialStocks;
}
