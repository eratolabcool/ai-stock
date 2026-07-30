import { NextResponse } from "next/server";

const demoStocks = [
  {
    symbol: "NVDA",
    company: "NVIDIA",
    theme: "AI Infrastructure",
    aiScore: 92,
    risk: "Medium",
  },
  {
    symbol: "MSFT",
    company: "Microsoft",
    theme: "Cloud AI",
    aiScore: 89,
    risk: "Low",
  },
  {
    symbol: "TSM",
    company: "TSMC",
    theme: "AI Semiconductor",
    aiScore: 87,
    risk: "Medium",
  },
];

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ symbol: string }> }
) {
  const { symbol } = await params;
  const stock = demoStocks.find(
    (item) => item.symbol.toLowerCase() === symbol.toLowerCase()
  );

  if (!stock) {
    return NextResponse.json(
      { error: "Stock not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(stock);
}
