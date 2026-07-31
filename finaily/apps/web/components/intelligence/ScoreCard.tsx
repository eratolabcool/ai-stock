type Props = {
  score: number;
  label?: string;
};

export function ScoreCard({ score, label = 'Finaily Score' }: Props) {
  return (
    <section className="rounded-xl border p-6">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-4xl font-bold">{score}</p>
      <p className="mt-2 text-sm">AI investment intelligence rating</p>
    </section>
  );
}

export default ScoreCard;
