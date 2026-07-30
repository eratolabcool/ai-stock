export default function GuidesPage() {
  const guides = [
    'Best AI Stocks 2026',
    'AI Semiconductor Investment Guide',
    'How to Analyze AI Companies'
  ];

  return (
    <main>
      <h1>Finaily Investment Guides</h1>
      <p>AI-powered guides for understanding emerging technology markets.</p>
      <ul>
        {guides.map((guide) => <li key={guide}>{guide}</li>)}
      </ul>
    </main>
  );
}
