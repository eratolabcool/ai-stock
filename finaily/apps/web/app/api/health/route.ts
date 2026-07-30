import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    service: 'finaily-web',
    status: 'ok',
    timestamp: new Date().toISOString(),
  })
}
