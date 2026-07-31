export default function ResearchPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-2 text-slate-300">
        {items.map((item) => <li key={item}>• {item}</li>)}
      </ul>
    </section>
  );
}
