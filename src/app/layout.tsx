import type { Metadata } from 'next';

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
  // We move html and body to [lang]/layout.tsx to support dynamic lang attribute
  // Next.js will wrap this in a default html/body for the root redirect page, 
  // which is acceptable as it's just a redirect.
  return children;
}
