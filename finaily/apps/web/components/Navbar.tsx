export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-xl font-bold">Finaily</div>
        <nav className="flex gap-6 text-sm text-gray-600">
          <a href="/stocks/nvda">Stocks</a>
          <a href="/themes/ai-semiconductor">Themes</a>
          <a href="/reports/ai-market-outlook-2026">Reports</a>
          <a href="/portfolio">Portfolio</a>
        </nav>
      </div>
    </header>
  );
}
