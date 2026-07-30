const aiCompanies = [
  { symbol: 'NVDA', name: 'NVIDIA', theme: 'AI Infrastructure' },
  { symbol: 'MSFT', name: 'Microsoft', theme: 'Cloud AI' },
  { symbol: 'TSM', name: 'TSMC', theme: 'AI Semiconductor' },
  { symbol: 'AMD', name: 'AMD', theme: 'AI Semiconductor' },
  { symbol: 'ASML', name: 'ASML', theme: 'Semiconductor Equipment' },
  { symbol: 'GOOGL', name: 'Alphabet', theme: 'AI Models' },
];

export async function seedStocks() {
  return aiCompanies;
}
