type Props = {
  risks: string[];
};

export function RiskCard({ risks }: Props) {
  return (
    <section className="rounded-xl border p-6">
      <h2 className="text-xl font-semibold">Risk Factors</h2>
      <ul className="mt-4 list-disc pl-5 space-y-2">
        {risks.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}

export default RiskCard;
