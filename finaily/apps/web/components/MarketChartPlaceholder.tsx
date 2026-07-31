export default function MarketChartPlaceholder() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white">
      <h3 className="text-xl font-semibold">AI Market Trend</h3>
      <div className="mt-6 h-32 rounded-xl bg-gradient-to-r from-blue-900 to-slate-800 flex items-end p-4">
        <div className="h-16 w-full rounded bg-blue-500/30" />
      </div>
      <p className="mt-3 text-sm text-slate-400">Real market data integration will connect here.</p>
    </div>
  );
}
