type StockPageProps = {
  params: Promise<{ symbol: string }>;
};

const stocks: Record<string, {
  company: string;
  theme: string;
  score: number;
  description: string;
}> = {
  nvda: {
    company: "NVIDIA",
    theme: "AI Infrastructure",
    score: 92,
    description: "AI computing infrastructure leader powering accelerated computing.",
  },
  msft: {
    company: "Microsoft",
    theme: "Cloud AI",
    score: 89,
    description: "Enterprise AI platform and cloud intelligence ecosystem.",
  },
  tsm: {
    company: "TSMC",
    theme: "AI Semiconductor",
    score: 87,
    description: "Advanced semiconductor manufacturing supporting AI hardware growth.",
  },
};

export default async function StockPage({ params }: StockPageProps) {
  const { symbol } = await params;
  const stock = stocks[symbol.toLowerCase()] ?? {
    company: symbol.toUpperCase(),
    theme: "AI Research",
    score: 0,
    description: "Finaily research profile.",
  };

  return (
    <main>
      <h1>{stock.company}</h1>
      <p>{stock.theme}</p>
      <strong>Finaily AI Score: {stock.score}</strong>
      <p>{stock.description}</p>
    </main>
  );
}
