import { notFound } from 'next/navigation';

const demoStocks: Record<string, any> = {
  nvda: {
    name: 'NVIDIA',
    symbol: 'NVDA',
    score: 92,
    theme: 'AI Infrastructure',
    summary: 'Leading AI compute infrastructure company powering modern artificial intelligence workloads.'
  },
  amd: {
    name: 'AMD',
    symbol: 'AMD',
    score: 84,
    theme: 'AI Chips',
    summary: 'Semiconductor company competing in accelerated computing and AI hardware.'
  }
};

export default async function StockPage({ params }: { params: Promise<{ symbol: string }> }) {
  const { symbol } = await params;
  const stock = demoStocks[symbol.toLowerCase()];

  if (!stock) notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-bold">{stock.name} ({stock.symbol})</h1>
      <div className="mt-6 rounded-xl border p-6">
        <p>AI Research Score: <strong>{stock.score}/100</strong></p>
        <p className="mt-2">Theme: {stock.theme}</p>
        <p className="mt-4 text-gray-600">{stock.summary}</p>
      </div>
      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-5"><h2 className="font-bold">Bull Case</h2><p>AI adoption, infrastructure demand and ecosystem expansion.</p></div>
        <div className="rounded-xl border p-5"><h2 className="font-bold">Risk Factors</h2><p>Valuation, competition and macro environment.</p></div>
      </section>
    </main>
  );
}
