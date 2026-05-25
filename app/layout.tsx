import type { Metadata } from 'next';
import { Cormorant_Garamond, Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google';
import Nav from '@/components/Nav';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'August Sixteen',
  description: 'A private keepsake',
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans">
        <Nav />
        <main>{children}</main>
        <footer className="py-16 text-center">
          <div className="ornament mx-auto" aria-hidden="true">
            <span className="font-serif italic text-gold/70 text-sm">written with love</span>
          </div>
          <p className="mt-6 text-xs tracking-widest uppercase text-muted">
            16 · 08 · 2026
          </p>
        </footer>
      </body>
    </html>
  );
}
