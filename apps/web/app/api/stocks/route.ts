import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const stocks = await db.stock.findMany({
      orderBy: { aiScore: "desc" },
      take: 50,
    });

    return NextResponse.json({
      success: true,
      data: stocks,
    });
  } catch {
    return NextResponse.json({
      success: true,
      data: [],
      source: "fallback",
    });
  }
}
