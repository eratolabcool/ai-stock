export async function GET() {
  return Response.json({
    plan: "FREE",
    availablePlans: ["FREE", "PRO"]
  });
}

export async function POST() {
  return Response.json({
    message: "Subscription checkout integration pending"
  });
}
