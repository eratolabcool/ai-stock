export default function ScoreBadge({ score }: { score: number }) {
  return (
    <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-5">
      <p className="text-sm text-slate-400">Finaily Score</p>
      <p className="mt-2 text-4xl font-bold text-blue-400">{score}</p>
    </div>
  );
}
