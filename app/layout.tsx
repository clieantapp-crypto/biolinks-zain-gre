import './globals.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: '   الخدمات وآخر العروض الحصرية',
  description: 'اكتشف    الخدمات وآخر العروض عبر روابطنا ',
  openGraph: {
    images: [
      {
        url: '',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: '',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir='rtl'>
      <body >{children}</body>
    </html>
  );
}
