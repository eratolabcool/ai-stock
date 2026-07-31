import { NextResponse } from 'next/server';

const themes = [
  { name: 'AI Semiconductor', score: 92, companies: ['NVDA','TSM','ASML'] },
  { name: 'Cloud AI', score: 88, companies: ['MSFT','AMZN','GOOGL'] },
  { name: 'AI Agents', score: 85, companies: ['PLTR','ORCL'] }
];

export async function GET() {
  return NextResponse.json({ data: themes });
}
