import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function generateResearchReport(symbol: string) {
  // LLM integration point.
  return prisma.report.create({
    data: {
      slug: `${symbol.toLowerCase()}-ai-research`,
      title: `${symbol} AI Research Report`,
      summary: 'AI generated research placeholder.',
    },
  });
}

