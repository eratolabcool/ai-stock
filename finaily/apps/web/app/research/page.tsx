import { getResearchReports } from '@/lib/research-data';

export default function ResearchPage() {
  const reports = getResearchReports();

  return (
    <main className="space-y-8">
      <section>
        <p className="text-sm uppercase tracking-widest text-blue-600">Finaily Research</p>
        <h1 className="text-4xl font-bold">AI Investment Research Center</h1>
        <p className="mt-3 text-slate-600">
          Research reports covering AI companies, technology cycles and market themes.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {reports.map((report) => (
          <article key={report.slug} className="rounded-2xl bg-white p-6 shadow-sm border">
            <h2 className="text-2xl font-bold">{report.title}</h2>
            <p className="mt-3 text-slate-600">{report.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {report.themes.map((theme) => (
                <span key={theme} className="rounded-full bg-slate-100 px-3 py-1 text-sm">
                  {theme}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
