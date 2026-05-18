import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'studAIant · Case study Pegas',
  description:
    'Jak antstudio postavilo brand a web Pegas s pomocí AI. Case study o textech, ilustracích, Higgsfield foto workflow a vibecoding features.',
  openGraph: {
    title: 'studAIant · Case study Pegas',
    description: 'Jak antstudio postavilo brand a web Pegas s pomocí AI.',
    type: 'article',
    locale: 'cs_CZ',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="cs" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
