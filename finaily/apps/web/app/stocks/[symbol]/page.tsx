import { notFound } from "next/navigation";
import { getCompanyBySymbol } from "@/lib/research";
import { ScoreCard } from "@/components/intelligence/ScoreCard";
import { ThesisCard } from "@/components/intelligence/ThesisCard";
import { RiskCard } from "@/components/intelligence/RiskCard";
import { ResearchHeader } from "@/components/intelligence/ResearchHeader";
import { RelatedCompanies } from "@/components/intelligence/RelatedCompanies";

type StockPageProps = {
  params: Promise<{ symbol: string }>;
};

export async function generateMetadata({ params }: StockPageProps) {
  const { symbol } = await params;
  const company = getCompanyBySymbol(symbol);

  return {
    title: company
      ? `${company.name} AI Stock Research | Finaily`
      : `${symbol.toUpperCase()} AI Research | Finaily`,
    description: company?.description ?? "AI investment intelligence research.",
  };
}

export default async function StockPage({ params }: StockPageProps) {
  const { symbol } = await params;
  const company = getCompanyBySymbol(symbol);

  if (!company) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl space-y-8 px-6 py-12">
      <ResearchHeader
        title={`${company.name} (${company.symbol})`}
        subtitle={`${company.theme} · AI Investment Research`}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ScoreCard score={company.finailyScore} />
        <section className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold">Investment Focus</h2>
          <p className="mt-3">Finaily tracks companies shaping the AI economy through themes, research signals and strategic analysis.</p>
        </section>
      </div>

      <ThesisCard thesis={company.thesis ?? []} />

      <RiskCard risks={company.risks ?? []} />

      <RelatedCompanies companies={company.relatedCompanies ?? []} />
    </main>
  );
}
