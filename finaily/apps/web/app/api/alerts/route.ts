import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    alerts: [
      {
        symbol: "NVDA",
        type: "AI_SCORE_CHANGE",
        message: "Finaily signal detected"
      }
    ]
  });
}
