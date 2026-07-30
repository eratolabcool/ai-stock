import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({
    received: true,
    message: 'Billing webhook endpoint ready'
  });
}
