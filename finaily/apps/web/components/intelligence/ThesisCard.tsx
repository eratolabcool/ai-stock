type Props = {
  thesis: string[];
};

export default function ThesisCard({ thesis }: Props) {
  return (
    <section className="rounded-xl border p-6">
      <h2 className="text-xl font-semibold">Investment Thesis</h2>
      <ul className="mt-4 list-disc pl-5 space-y-2">
        {thesis.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}
