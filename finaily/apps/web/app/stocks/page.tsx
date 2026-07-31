const stocks = [
  {
    rank: 1,
    name: 'NVIDIA',
    symbol: 'NVDA',
    score: 92,
    theme: 'AI Semiconductor'
  },
  {
    rank: 2,
    name: 'Microsoft',
    symbol: 'MSFT',
    score: 88,
    theme: 'Cloud AI'
  },
  {
    rank: 3,
    name: 'TSMC',
    symbol: 'TSM',
    score: 86,
    theme: 'AI Semiconductor'
  },
  {
    rank: 4,
    name: 'ASML',
    symbol: 'ASML',
    score: 85,
    theme: 'AI Infrastructure'
  },
  {
    rank: 5,
    name: 'AMD',
    symbol: 'AMD',
    score: 82,
    theme: 'AI Compute'
  }
];

export default function StocksPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-5xl space-y-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Finaily Intelligence
          </p>
          <h1 className="mt-3 text-5xl font-bold">AI Stock Radar</h1>
          <p className="mt-4 text-xl text-slate-600">
            AI companies ranked by Finaily Intelligence Score.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border bg-white">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4 text-left">Rank</th>
                <th className="p-4 text-left">Company</th>
                <th className="p-4 text-left">Score</th>
                <th className="p-4 text-left">Theme</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock) => (
                <tr key={stock.symbol} className="border-t">
                  <td className="p-4">#{stock.rank}</td>
                  <td className="p-4 font-semibold">{stock.name} ({stock.symbol})</td>
                  <td className="p-4 font-bold text-blue-600">{stock.score}</td>
                  <td className="p-4">{stock.theme}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
