export default function StocksPage() {
  const stocks = [
    { symbol: 'NVDA', name: 'NVIDIA', score: 92 },
    { symbol: 'MSFT', name: 'Microsoft', score: 88 },
    { symbol: 'TSM', name: 'TSMC', score: 86 },
  ];

  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-4xl font-bold">AI Stock Research</h1>
      <p className="mt-3 text-gray-600">
        Explore AI-powered company research and market intelligence.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {stocks.map((stock) => (
          <article key={stock.symbol} className="rounded-xl border p-5">
            <h2 className="text-xl font-semibold">{stock.name}</h2>
            <p>{stock.symbol}</p>
            <strong>AI Score {stock.score}</strong>
          </article>
        ))}
      </div>
    </main>
  );
}
