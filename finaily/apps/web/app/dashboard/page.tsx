import Link from 'next/link';

const metrics = [
  ['AI Market Score', '91'],
  ['Tracked Companies', '120+'],
  ['Research Signals', '36'],
];

const stocks = [
  ['NVIDIA', 'NVDA', '92'],
  ['Microsoft', 'MSFT', '88'],
  ['TSMC', 'TSM', '86'],
  ['ASML', 'ASML', '85'],
];

const themes = [
  ['AI Semiconductor', '92'],
  ['Cloud AI', '88'],
  ['AI Agents', '85'],
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8 space-y-8">
      <header>
        <p className="text-blue-400 uppercase tracking-widest">Finaily Terminal</p>
        <h1 className="text-5xl font-bold mt-3">AI Investment Intelligence</h1>
        <p className="mt-3 text-slate-400">Market signals, AI companies and research insights.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-5">
        {metrics.map(([name,value]) => <div key={name} className="rounded-2xl border border-slate-800 bg-slate-900 p-6"><p className="text-slate-400">{name}</p><strong className="text-4xl">{value}</strong></div>)}
      </section>

      <section className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">AI Stock Radar</h2>
          {stocks.map(([name,symbol,score]) => <Link key={symbol} href={`/stocks/${symbol.toLowerCase()}`} className="block border-b border-slate-800 py-4">{name} ({symbol}) <b className="float-right">{score}</b></Link>)}
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">Theme Intelligence</h2>
          {themes.map(([name,score]) => <div key={name} className="border-b border-slate-800 py-4">{name}<b className="float-right">{score}</b></div>)}
        </div>
      </section>
    </main>
  );
}
