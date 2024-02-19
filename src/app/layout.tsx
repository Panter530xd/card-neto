import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const onest = Onest({
  subsets: ['latin'],
  variable: '--font-onest',
});

export const metadata: Metadata = {
  title: 'Card Neto',
  description: 'Grow your network rapidly and in a professional way!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={onest.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
