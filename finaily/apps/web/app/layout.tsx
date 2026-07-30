import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finaily - AI Investing Intelligence',
  description: 'AI-powered market intelligence, stock research and portfolio insights.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
