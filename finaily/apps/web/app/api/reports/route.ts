import { NextResponse } from 'next/server';

const reports = [
  { title: 'AI Market Outlook 2026', category: 'Market Research', status: 'Published' },
  { title: 'AI Agent Economy', category: 'Emerging Technology', status: 'Published' },
  { title: 'Semiconductor Infrastructure Cycle', category: 'Industry', status: 'Research' }
];

export async function GET() {
  return NextResponse.json({ data: reports });
}
