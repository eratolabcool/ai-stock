import Link from 'next/link';
import { intelligenceThemes, marketMetrics, rankedStocks, researchFeed } from '../lib/market-data';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10">
        <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-cyan-950/20 p-10">
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">AI Investment Intelligence Platform</p>
              <h1 className="mt-5 text-5xl font-black md:text-7xl">Finaily</h1>
              <p className="mt-6 text-xl leading-relaxed text-slate-300">
                Discover AI companies, emerging technology themes and investment research signals powered by Finaily Intelligence.
              </p>
              <div className="mt-8 flex gap-4">
                <Link href="/stocks" className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-slate-950">Explore Stocks</Link>
                <Link href="/research" className="rounded-xl border border-slate-700 px-6 py-3 font-bold">Research Center</Link>
              </div>
            </div>
            <div className="min-w-[260px] rounded-3xl border border-cyan-800 bg-cyan-950/40 p-8">
              <p className="text-slate-400">AI Market Score</p>
              <p className="mt-3 text-7xl font-black text-cyan-400">91</p>
              <p className="mt-3 text-green-400">Strong AI innovation cycle</p>
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
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:col-span-2">
            <div className="flex items-center justify-between"><h2 className="text-2xl font-bold">AI Stock Radar</h2><Link href="/stocks" className="text-cyan-400">View ranking →</Link></div>
            <div className="mt-5 space-y-3">
              {rankedStocks.map((stock) => (
                <Link href={`/stocks/${stock.symbol.toLowerCase()}`} key={stock.symbol} className="flex items-center justify-between rounded-xl bg-slate-800 p-4 transition hover:bg-slate-700">
                  <div><b>{stock.name} ({stock.symbol})</b><p className="text-sm text-slate-400">{stock.theme} · {stock.position}</p></div>
                  <span className="text-3xl font-black text-cyan-400">{stock.score}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-2xl font-bold">AI Themes</h2>
              {intelligenceThemes.map((theme) => (
                <div key={theme.name} className="mt-4 rounded-xl bg-slate-800 p-4"><b>{theme.name}</b><p className="text-cyan-400">Score {theme.score}</p><p className="text-sm text-slate-400">{theme.companies}</p></div>
              ))}
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-2xl font-bold">Research Feed</h2>
              {researchFeed.map((item) => <p key={item} className="mt-3 text-slate-300">→ {item}</p>)}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
