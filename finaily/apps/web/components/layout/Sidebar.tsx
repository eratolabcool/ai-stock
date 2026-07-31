import Link from 'next/link';

const items = [
  ['Dashboard', '/'],
  ['Stocks', '/stocks'],
  ['Themes', '/themes/ai-semiconductor'],
  ['Reports', '/reports/ai-market-outlook-2026'],
  ['Portfolio', '/portfolio'],
];

export default function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 border-r border-slate-200 bg-white p-6 md:block">
      <div className="mb-8 text-xl font-bold">Finaily</div>
      <nav className="space-y-2">
        {items.map(([label, href]) => (
          <Link key={href} href={href} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
