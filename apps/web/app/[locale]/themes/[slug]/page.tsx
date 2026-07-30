const themes: Record<string, any> = {
  'ai-semiconductor': {
    title: 'AI Semiconductor Stocks',
    description: 'Explore companies building the hardware foundation of artificial intelligence.'
  },
  robotics: {
    title: 'Robotics Stocks',
    description: 'Track companies connecting AI models with physical automation.'
  }
};

export default async function ThemePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const theme = themes[slug];

  if (!theme) return null;

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-bold">{theme.title}</h1>
      <p className="mt-4 text-lg">{theme.description}</p>
      <div className="mt-8 rounded-xl border p-6">
        Finaily AI Theme Intelligence tracks companies, research signals and market trends.
      </div>
    </main>
  );
}
