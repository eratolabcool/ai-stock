export default function WatchlistPage() {
  const items = [
    { symbol: 'NVDA', score: 92 },
    { symbol: 'MSFT', score: 89 },
    { symbol: 'TSM', score: 87 },
  ];

  return (
    <main>
      <h1>Finaily Watchlist</h1>
      <p>Track AI companies, research signals, and score changes.</p>
      <ul>
        {items.map((item) => (
          <li key={item.symbol}>{item.symbol} - AI Score {item.score}</li>
        ))}
      </ul>
    </main>
  );
}
