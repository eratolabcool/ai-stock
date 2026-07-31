type StockCardProps = {
  rank: number;
  symbol: string;
  name: string;
  score: number;
  theme: string;
};

export default function StockCard({
  rank,
  symbol,
  name,
  score,
  theme,
}: StockCardProps) {
  return (
    <article className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">Rank #{rank}</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-900">
            {name} ({symbol})
          </h2>
        </div>
        <div className="rounded-xl bg-slate-900 px-4 py-2 text-white">
          <span className="text-xs uppercase">Score</span>
          <div className="text-2xl font-bold">{score}</div>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-600">Theme: {theme}</p>
    </article>
  );
}
