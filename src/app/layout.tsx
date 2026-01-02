import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SiamVisa Pro | Expert Visa Thaïlande - DTV, Touriste, Retraite',
  description:
    'Expert en visas pour la Thaïlande. DTV Digital Nomad 5 ans, visa touristique, visa retraite. Accompagnement personnalisé et garantie de succès. Paris & Bangkok.',
  keywords:
    'visa thailande, dtv visa, digital nomad, visa touristique thailande, visa retraite, long sejour thailande, expert visa',
  authors: [{ name: 'SiamVisa Pro' }],
  creator: 'SiamVisa Pro',
  publisher: 'SiamVisa Pro',
  metadataBase: new URL('https://siamvisapro.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://siamvisapro.com',
    title: 'SiamVisa Pro | Expert Visa Thaïlande',
    description:
      'Expert en visas pour la Thaïlande. DTV, visa touristique, visa retraite. Accompagnement personnalisé.',
    siteName: 'SiamVisa Pro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SiamVisa Pro | Expert Visa Thaïlande',
    description: 'Expert en visas pour la Thaïlande. DTV, visa touristique, visa retraite.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <CartProvider>
            <Navbar />
            <CartDrawer />
            <main className="min-h-screen pt-20">{children}</main>
            <Footer />
          </CartProvider>
        </LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
