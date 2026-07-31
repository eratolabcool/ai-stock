const metrics = [
  ['AI Market Score', '91'],
  ['Tracked Companies', '120+'],
  ['Research Signals', '36'],
];

const stocks = [
  ['NVIDIA', 'NVDA', '92'],
  ['Microsoft', 'MSFT', '88'],
  ['TSMC', 'TSM', '86'],
];

export default function DashboardPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">AI Investment Dashboard</h1>
        <p className="mt-2 text-slate-600">Market intelligence powered by Finaily research engines.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map(([a,b]) => <div className="rounded-2xl bg-white p-6 shadow-sm" key={a}><p>{a}</p><strong className="text-3xl">{b}</strong></div>)}
      </div>
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">AI Stock Radar</h2>
        {stocks.map(s => <div key={s[0]} className="flex justify-between border-b py-3"><span>{s[0]} ({s[1]})</span><strong>{s[2]}</strong></div>)}
      </div>
    </section>
  );
}
