export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            AI Investment Intelligence
          </p>
          <h1 className="text-5xl font-bold tracking-tight">Finaily</h1>
          <p className="max-w-3xl text-xl text-slate-600">
            Discover AI companies, investment themes, and research insights powered by artificial intelligence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border p-6">
            <h2 className="text-2xl font-semibold">AI Stock Radar</h2>
            <p className="mt-3 text-slate-600">
              Explore companies with Finaily Score, investment thesis, risks, and AI industry positioning.
            </p>
          </section>

          <section className="rounded-2xl border p-6">
            <h2 className="text-2xl font-semibold">Market Intelligence</h2>
            <p className="mt-3 text-slate-600">
              Understand AI infrastructure, semiconductor, cloud AI, and emerging technology themes.
            </p>
          </section>

          <section className="rounded-2xl border p-6">
            <h2 className="text-2xl font-semibold">Portfolio Intelligence</h2>
            <p className="mt-3 text-slate-600">
              Organize AI exposure and discover connections between companies and themes.
            </p>
          </section>

          <section className="rounded-2xl border p-6">
            <h2 className="text-2xl font-semibold">Research Reports</h2>
            <p className="mt-3 text-slate-600">
              Read structured AI market research generated from Finaily intelligence engines.
            </p>
          </section>
        </div>

        <div className="rounded-2xl bg-slate-900 p-8 text-white">
          <h2 className="text-3xl font-semibold">Explore the AI economy</h2>
          <p className="mt-3 text-slate-300">
            Finaily tracks the companies and themes shaping the next generation of technology.
          </p>
        </div>
      </section>
    </main>
  );
}
