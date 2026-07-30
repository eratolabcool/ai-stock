export default function StocksPage() {
  const stocks = [
    { symbol: 'NVDA', name: 'NVIDIA', score: 92 },
    { symbol: 'MSFT', name: 'Microsoft', score: 88 },
    { symbol: 'TSM', name: 'TSMC', score: 86 },
  ];

  return (
    <main>
      <h1>AI Stock Research</h1>
      <p>Explore AI-powered investment intelligence.</p>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol}>
            {stock.name} ({stock.symbol}) - Finaily Score {stock.score}
          </li>
        ))}
      </ul>
    </main>
  );
}
