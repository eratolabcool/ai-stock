export default async function ReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold">{slug.replaceAll('-', ' ')}</h1>
      <p className="mt-4">AI generated market research report powered by Finaily intelligence engine.</p>
      <article className="mt-8 rounded-xl border p-6">
        This report combines market signals, industry themes, company research and AI summaries.
      </article>
    </main>
  );
}
