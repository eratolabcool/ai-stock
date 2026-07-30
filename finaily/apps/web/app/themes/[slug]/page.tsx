import { notFound } from 'next/navigation';

const themes = {
  'ai-semiconductor': {
    title: 'AI Semiconductor Stocks',
    description: 'Companies building the infrastructure behind artificial intelligence.'
  },
  'cloud-ai': {
    title: 'Cloud AI Companies',
    description: 'AI platforms and cloud infrastructure leaders.'
  },
  robotics: {
    title: 'AI Robotics Market',
    description: 'Companies combining artificial intelligence with automation.'
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
      <p>Powered by Finaily AI research intelligence.</p>
    </main>
  );
}
