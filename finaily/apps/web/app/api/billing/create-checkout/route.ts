import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({
    status: 'checkout_ready',
    plan: 'PRO',
    provider: 'pending'
  });
}
