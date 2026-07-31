import { analyzePortfolio } from '../../lib/portfolio';

export default function PortfolioPage() {
  const result = analyzePortfolio([
    { symbol: 'NVDA', allocation: 40 },
    { symbol: 'MSFT', allocation: 30 },
    { symbol: 'TSM', allocation: 30 },
  ]);

  return (
    <main className="p-8 space-y-8">
      <section>
        <h1 className="text-4xl font-bold">Portfolio Intelligence</h1>
        <p className="text-slate-600 mt-2">
          AI exposure analysis powered by Finaily Intelligence.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-sm text-slate-500">AI Exposure</h2>
          <div className="text-4xl font-bold mt-2">{result.aiExposure}%</div>
        </div>
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-sm text-slate-500">Risk</h2>
          <div className="text-3xl font-bold mt-2">{result.risk}</div>
        </div>
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-sm text-slate-500">Main Theme</h2>
          <div className="text-2xl font-bold mt-2">{result.dominantTheme}</div>
        </div>
      </div>
    </main>
  );
}
