import { notFound } from 'next/navigation';

const themes = {
  'ai-semiconductor': {
    title: 'AI Semiconductor Stocks',
    description: 'Companies building the infrastructure behind artificial intelligence.',
    opportunity: 'High',
    companies: ['NVIDIA', 'TSMC', 'ASML', 'AMD'],
    thesis: [
      'AI compute demand is increasing.',
      'Advanced semiconductor infrastructure remains critical for AI growth.'
    ],
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

export default async function ThemePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const theme = themes[slug as keyof typeof themes];

  if (!theme) notFound();

  return (
    <main>
      <h1>{theme.title}</h1>
      <p>{theme.description}</p>

      <h2>Opportunity</h2>
      <p>{theme.opportunity}</p>

      <h2>Investment Thesis</h2>
      <ul>
        {theme.thesis.map((item) => <li key={item}>{item}</li>)}
      </ul>

      <h2>Companies</h2>
      <ul>
        {theme.companies.map((company) => <li key={company}>{company}</li>)}
      </ul>

      <h2>Risks</h2>
      <ul>
        {theme.risks.map((risk) => <li key={risk}>{risk}</li>)}
      </ul>

      <p>Powered by Finaily AI research intelligence.</p>
    </main>
  );
}
