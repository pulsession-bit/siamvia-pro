import { notFound } from 'next/navigation';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { translations } from '@/utils/translations';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    // Fallback to home metadata if available
    const meta = (t as any).meta || { title: "Siam Visa Pro", description: "Thailand Visa Expert" };

    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: `https://siamvisapro.com/${lang}`,
            languages: languages.reduce((acc, l) => {
                acc[l] = `https://siamvisapro.com/${l}`;
                return acc;
            }, {} as Record<string, string>),
        },
    };
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

    // Load dictionaries on server
    const dictionary = translations[lang as keyof typeof translations] || translations.en;
    const englishFallback = translations.en;

    return (
        <html lang={lang}>
            <body className={inter.className}>
                {/* Google tag (gtag.js) */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-SPPNR4KM76"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-SPPNR4KM76');
                    `}
                </Script>

                <LanguageProvider
                    initialLang={lang as any}
                    dictionary={dictionary}
                    fallbackDictionary={lang !== 'en' ? englishFallback : undefined}
                >
                    <CartProvider>
                        <Navbar />
                        <CartDrawer />
                        <main className="min-h-screen pt-20">{children}</main>
                        <Footer />
                    </CartProvider>
                </LanguageProvider>
                {/* <SpeedInsights /> */}
            </body>
        </html>
    );
}
