import { notFound } from 'next/navigation';

const reports = {
  'ai-market-outlook-2026': {
    title: 'AI Market Outlook 2026',
    summary: 'An AI-powered research view of the companies and themes shaping the next technology cycle.',
    themes: ['AI Semiconductor', 'Cloud AI', 'AI Agents'],
    companies: ['NVIDIA', 'Microsoft', 'TSMC'],
    risks: ['Regulation', 'Competition', 'Market concentration'],
  },
  'ai-agent-economy': {
    title: 'AI Agent Economy',
    summary: 'Research into the emerging AI agent ecosystem and companies building automation infrastructure.',
    themes: ['AI Agents', 'Enterprise AI'],
    companies: ['Microsoft', 'Google', 'Amazon'],
    risks: ['Adoption speed', 'Platform competition'],
  },
};

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = reports[slug as keyof typeof reports];

  if (!report) notFound();

  return (
    <main>
      <h1>{report.title}</h1>
      <p>{report.summary}</p>

      <h2>Key Themes</h2>
      <ul>
        {report.themes.map((theme) => <li key={theme}>{theme}</li>)}
      </ul>

      <h2>Featured Companies</h2>
      <ul>
        {report.companies.map((company) => <li key={company}>{company}</li>)}
      </ul>

      <h2>Risk Factors</h2>
      <ul>
        {report.risks.map((risk) => <li key={risk}>{risk}</li>)}
      </ul>
    </main>
  );
}
