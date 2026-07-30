import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <main className="min-h-screen bg-white px-8 py-16 text-slate-900">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-5xl font-bold">Finaily</h1>
        <p className="mt-4 text-xl">{t('headline')}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border p-6">
            <h2 className="font-semibold">AI Stock Research</h2>
            <p>AI-powered company intelligence.</p>
          </article>
          <article className="rounded-xl border p-6">
            <h2 className="font-semibold">Market Radar</h2>
            <p>Track themes and industry signals.</p>
          </article>
          <article className="rounded-xl border p-6">
            <h2 className="font-semibold">Finance Tools</h2>
            <p>Analyze portfolios and decisions.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
