import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import Banner from '@/components/shared/Banner';
import Footer from '@/components/shared/Footer';

const josefinSans = Josefin_Sans({
  variable: '--font-josefin-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${josefinSans.variable} antialiased bg-gray-900 text-white`}
      >
        <Navbar />
        <Banner />

        <div className='container min-h-56'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
