export default function Home() {
  const themes = [
    { name: 'AI Semiconductor', score: 92, companies: 'NVDA · TSM · ASML' },
    { name: 'Cloud AI', score: 88, companies: 'MSFT · GOOGL · AMZN' },
    { name: 'AI Agents', score: 85, companies: 'PLTR · ORCL' },
  ];

  const companies = [
    ['NVIDIA', 'NVDA', 92],
    ['Microsoft', 'MSFT', 88],
    ['TSMC', 'TSM', 86],
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
      <section className="mx-auto max-w-6xl space-y-10">
        <div className="rounded-3xl bg-slate-950 p-10 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
            AI Investment Intelligence
          </p>
          <h1 className="mt-4 text-5xl font-bold">Finaily</h1>
          <p className="mt-4 max-w-3xl text-xl text-slate-300">
            Discover AI companies, investment themes and research insights powered by intelligence engines.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {themes.map((theme) => (
            <div key={theme.name} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">{theme.name}</h2>
              <p className="mt-4 text-4xl font-bold">{theme.score}</p>
              <p className="mt-2 text-slate-500">Finaily Score</p>
              <p className="mt-4 text-sm text-slate-600">{theme.companies}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-2xl font-semibold">Top AI Companies</h2>
          <div className="mt-5 space-y-3">
            {companies.map(([name, symbol, score]) => (
              <div key={symbol} className="flex justify-between rounded-xl bg-slate-50 p-4">
                <span>{name} ({symbol})</span>
                <strong>{score}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-2xl font-semibold">Latest Research</h2>
            <p className="mt-3 text-slate-600">AI Market Outlook 2026</p>
            <p className="text-slate-600">AI Agent Economy</p>
          </div>
          <div className="rounded-2xl bg-blue-600 p-6 text-white">
            <h2 className="text-2xl font-semibold">Build your AI portfolio intelligence</h2>
            <p className="mt-3">Track themes, companies and research signals in one place.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
