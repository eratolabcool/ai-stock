import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Finaily - AI Investing Intelligence',
  description: 'AI-powered market intelligence, stock research and portfolio insights.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
