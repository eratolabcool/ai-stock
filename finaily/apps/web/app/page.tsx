import Link from 'next/link';
import { intelligenceThemes, marketMetrics, rankedStocks, researchFeed } from '../lib/market-data';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">AI Investment Terminal</p>
              <h1 className="mt-4 text-6xl font-bold">Finaily</h1>
              <p className="mt-5 max-w-2xl text-xl text-slate-300">
                Intelligence platform for discovering AI companies, investment themes and research signals.
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-900 bg-cyan-950/30 p-8">
              <p className="text-slate-400">Today's AI Market Signal</p>
              <p className="mt-3 text-6xl font-bold text-cyan-400">91</p>
              <p className="text-green-400">Bullish AI cycle</p>
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {marketMetrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-slate-400">{metric.label}</p>
              <p className="mt-3 text-4xl font-bold">{metric.value}</p>
              <p className="mt-2 text-cyan-400">{metric.trend}</p>
              <p className="mt-2 text-sm text-slate-500">{metric.detail}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex justify-between"><h2 className="text-2xl font-bold">AI Stock Radar</h2><Link href="/stocks" className="text-cyan-400">View all</Link></div>
            <div className="mt-5 space-y-3">
              {rankedStocks.map((stock) => (
                <Link href={`/stocks/${stock.symbol.toLowerCase()}`} key={stock.symbol} className="flex items-center justify-between rounded-xl bg-slate-800 p-4 hover:bg-slate-700">
                  <div><b>{stock.name} ({stock.symbol})</b><p className="text-sm text-slate-400">{stock.theme} · {stock.position}</p></div>
                  <span className="text-3xl font-bold text-cyan-400">{stock.score}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-2xl font-bold">Themes</h2>
              {intelligenceThemes.map((theme) => <div key={theme.name} className="mt-4 rounded-xl bg-slate-800 p-4"><b>{theme.name}</b><p className="text-cyan-400">Score {theme.score}</p><p className="text-sm text-slate-400">{theme.companies}</p></div>)}
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-2xl font-bold">Research Feed</h2>
              {researchFeed.map((item)=><p key={item} className="mt-3 text-slate-300">→ {item}</p>)}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
