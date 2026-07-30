export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-8 p-8">
      <section>
        <h1 className="text-4xl font-bold">Finaily Intelligence Dashboard</h1>
        <p className="mt-2 text-gray-600">
          AI-powered market research workspace.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-6">AI Stock Radar</div>
        <div className="rounded-xl border p-6">Market Intelligence</div>
        <div className="rounded-xl border p-6">Research Reports</div>
      </div>
    </main>
  );
}
