import { NextResponse } from 'next/server';

const companies = [
  { symbol: 'NVDA', name: 'NVIDIA', score: 92, theme: 'AI Semiconductor', signal: 'Strong' },
  { symbol: 'MSFT', name: 'Microsoft', score: 88, theme: 'Cloud AI', signal: 'Strong' },
  { symbol: 'TSM', name: 'TSMC', score: 86, theme: 'AI Infrastructure', signal: 'Positive' },
  { symbol: 'ASML', name: 'ASML', score: 85, theme: 'Semiconductor Equipment', signal: 'Positive' }
];

export async function GET() {
  return NextResponse.json({ data: companies });
}
