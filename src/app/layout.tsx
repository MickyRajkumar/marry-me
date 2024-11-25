import type { Metadata } from 'next';
import '@/styles/globals.css';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Marry Me',
  description:
    'A simple Next.js app to propose to my girlfriend. Will you marry me, my love?',
  authors: [{ name: 'Micky Rajkumar', url: 'https://mickyrajkumar.me' }],
  creator: 'Micky Rajkumar'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
