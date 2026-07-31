import Link from 'next/link';

const metrics = [
  { label: 'AI Market Score', value: '91', detail: 'Bullish AI cycle' },
  { label: 'Tracked Companies', value: '120+', detail: 'AI ecosystem' },
  { label: 'Research Signals', value: '36', detail: 'Updated daily' },
];

const stocks = [
  { name: 'NVIDIA', symbol: 'NVDA', score: 92, theme: 'AI Semiconductor' },
  { name: 'Microsoft', symbol: 'MSFT', score: 88, theme: 'Cloud AI' },
  { name: 'TSMC', symbol: 'TSM', score: 86, theme: 'AI Infrastructure' },
  { name: 'ASML', symbol: 'ASML', score: 85, theme: 'Semiconductor' },
];

const themes = [
  ['AI Semiconductor', '92'],
  ['Cloud AI', '88'],
  ['AI Agents', '85'],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 space-y-10">
        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">AI Investment Intelligence</p>
          <h1 className="mt-4 text-5xl font-bold">Finaily</h1>
          <p className="mt-4 max-w-3xl text-xl text-slate-300">
            AI-powered market intelligence platform tracking companies, themes and research signals.
          </p>
          <div className="mt-8 flex gap-4">
            <Link className="rounded-xl bg-blue-600 px-5 py-3" href="/stocks">Explore Stocks</Link>
            <Link className="rounded-xl border border-slate-700 px-5 py-3" href="/reports">Research Reports</Link>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {metrics.map((item) => (
            <div key={item.label} className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
              <p className="text-slate-400">{item.label}</p>
              <p className="mt-3 text-4xl font-bold">{item.value}</p>
              <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-2xl font-semibold">AI Stock Radar</h2>
            <div className="mt-5 space-y-3">
              {stocks.map((stock) => (
                <Link key={stock.symbol} href={`/stocks/${stock.symbol.toLowerCase()}`} className="flex justify-between rounded-xl bg-slate-800 p-4 hover:bg-slate-700">
                  <span>{stock.name} ({stock.symbol})<small className="block text-slate-400">{stock.theme}</small></span>
                  <strong>{stock.score}</strong>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-2xl font-semibold">Themes</h2>
            <div className="mt-5 space-y-3">
              {themes.map(([name, score]) => (
                <div key={name} className="rounded-xl bg-slate-800 p-4 flex justify-between">
                  <span>{name}</span><strong>{score}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
