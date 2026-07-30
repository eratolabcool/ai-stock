export default function ProPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold">Finaily Pro</h1>
      <p className="mt-4 text-lg text-gray-600">
        Advanced AI research, portfolio intelligence and market alerts.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-5">AI Research Reports</div>
        <div className="rounded-xl border p-5">Portfolio Analysis</div>
        <div className="rounded-xl border p-5">Market Alerts</div>
      </div>
    </main>
  );
}
