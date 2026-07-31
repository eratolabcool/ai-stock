import { notFound } from 'next/navigation';

const themes = {
  'ai-semiconductor': {
    title: 'AI Semiconductor Stocks',
    description: 'Companies building the infrastructure behind artificial intelligence.',
    opportunity: 'High',
    companies: ['NVIDIA', 'TSMC', 'ASML', 'AMD'],
    thesis: ['AI compute demand is increasing.', 'Advanced semiconductor infrastructure remains critical for AI growth.'],
    risks: ['Supply chain concentration', 'Export restrictions']
  },
  'cloud-ai': {
    title: 'Cloud AI Companies',
    description: 'AI platforms and cloud infrastructure leaders.',
    opportunity: 'High',
    companies: ['Microsoft', 'Google', 'Amazon'],
    thesis: ['Enterprise AI adoption is accelerating.'],
    risks: ['Cloud competition']
  },
  robotics: {
    title: 'AI Robotics Market',
    description: 'Companies combining artificial intelligence with automation.',
    opportunity: 'Growing',
    companies: ['Tesla', 'NVIDIA'],
    thesis: ['AI models are expanding into physical automation.'],
    risks: ['Technology adoption cycle']
  }
};

export default async function ThemePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const theme = themes[slug as keyof typeof themes];

  if (!theme) notFound();

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-6 py-12">
      <header>
        <h1 className="text-4xl font-bold">{theme.title}</h1>
        <p className="mt-3 text-lg">{theme.description}</p>
      </header>

      <section className="rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Opportunity</h2>
        <strong>{theme.opportunity}</strong>
      </section>

      <section className="rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Investment Thesis</h2>
        <ul>{theme.thesis.map(item => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Companies</h2>
        <p>{theme.companies.join(' · ')}</p>
      </section>

      <section className="rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Risks</h2>
        <ul>{theme.risks.map(item => <li key={item}>{item}</li>)}</ul>
      </section>
    </main>
  );
}
