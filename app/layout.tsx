import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'studAIant · Case study PEGAS',
  description: 'Pohřebnictví (má) v rukou AI.',
  openGraph: {
    title: 'studAIant · Case study PEGAS',
    description: 'Pohřebnictví (má) v rukou AI.',
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
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
};

export default RootLayout;
