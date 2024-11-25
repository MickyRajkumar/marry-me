import type { Metadata } from 'next';
import '@/styles/globals.css';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Marry Me',
  description:
    'about celebrating the unpredictability of human connection through laughter.',
  authors: [{ name: 'Micky Rajkumar', url: 'https://mickyrajkumar.me' }],
  creator: 'Micky Rajkumar',
  openGraph: {
    title: 'Marry Me',
    description:
      'about celebrating the unpredictability of human connection through laughter.',
    images: [
      {
        url: '/images/meta-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Description of image'
      }
    ]
  }
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
