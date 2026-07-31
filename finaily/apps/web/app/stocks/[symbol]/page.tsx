import { notFound } from "next/navigation";
import { getCompanyBySymbol } from "@/lib/research";
import { ScoreCard } from "@/components/intelligence/ScoreCard";
import { ThesisCard } from "@/components/intelligence/ThesisCard";
import { RiskCard } from "@/components/intelligence/RiskCard";
import { ResearchHeader } from "@/components/intelligence/ResearchHeader";
import { RelatedCompanies } from "@/components/intelligence/RelatedCompanies";

export async function generateMetadata({ params }: { params: Promise<{ symbol: string }> }) {
  const { symbol } = await params;
  const company = getCompanyBySymbol(symbol);

  return {
    title: company ? `${company.name} AI Stock Research | Finaily` : `${symbol.toUpperCase()} Research | Finaily`,
    description: "AI investment intelligence research powered by Finaily.",
  };
}

export default async function StockPage({ params }: { params: Promise<{ symbol: string }> }) {
  const { symbol } = await params;
  const company = getCompanyBySymbol(symbol);

  if (!company) notFound();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl space-y-8 px-6 py-12">
        <ResearchHeader
          title={`${company.name} (${company.symbol})`}
          subtitle={`${company.theme} · AI Investment Research Terminal`}
        />

        <section className="grid gap-6 lg:grid-cols-4">
          <ScoreCard score={company.finailyScore} />
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">AI Position</p>
            <p className="mt-3 text-2xl font-bold">Leader</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">Theme</p>
            <p className="mt-3 text-2xl font-bold">{company.theme}</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">Coverage</p>
            <p className="mt-3 text-2xl font-bold">AI Research</p>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">Finaily Intelligence View</h2>
          <p className="mt-3 text-slate-300">
            Finaily analyzes strategic positioning, AI exposure, industry themes and potential risks.
          </p>
        </section>

        <ThesisCard thesis={company.thesis ?? []} />
        <RiskCard risks={company.risks ?? []} />
        <RelatedCompanies companies={company.relatedCompanies ?? []} />
      </div>
    </main>
  );
}
