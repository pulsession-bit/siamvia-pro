import { notFound } from 'next/navigation';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { getSharedDictionary, getFullDictionary } from '@/utils/getSharedDictionary';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getFullDictionary(lang as any);

    // Fallback to home metadata if available
    const meta = (t as any).meta || { title: "Siam Visa Pro", description: "Thailand Visa Expert" };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'home',
        lang,
    });
}

// This is a Server Component - generateStaticParams works here
export function generateStaticParams() {
    return languages.map((lang) => ({ lang }));
}

type Props = {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
};

export default async function LangLayout({ children, params }: Props) {
    // Await params in Next.js 15+
    const { lang } = await params;

    // Validate language
    if (!languages.includes(lang as any)) {
        notFound();
    }

    // Load ONLY shared dictionaries (nav, footer, cart) — page-specific translations
    // are loaded directly in each page's Server Component to avoid bloating the RSC payload.
    // Before: ~119 KB (FR) of translations sent to EVERY page
    // After:  ~5 KB of shared keys only
    const dictionary = getSharedDictionary(lang as any);
    const englishFallback = lang !== 'en' ? getSharedDictionary('en') : undefined;

    return (
        <html lang={lang}>
            <head>
                {/* DNS Prefetch & Preconnect for faster external resource loading */}
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
                <link rel="dns-prefetch" href="https://code.tidio.co" />
                <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className={inter.className}>


                <LanguageProvider
                    initialLang={lang as any}
                    dictionary={dictionary}
                    fallbackDictionary={englishFallback}
                >
                    <CartProvider>
                        <Navbar />
                        <CartDrawer />
                        <main className="min-h-screen pt-20">{children}</main>
                        <Footer />
                    </CartProvider>
                </LanguageProvider>
                <Analytics />
                <SpeedInsights />
                <Script src="https://code.tidio.co/uqia2uffujyfrwmdhfzniodpqgvgy73b.js" strategy="lazyOnload" />
            </body>
        </html>
    );
}
