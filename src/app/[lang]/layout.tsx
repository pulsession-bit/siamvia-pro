import { notFound } from 'next/navigation';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

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

    return (
        <LanguageProvider initialLang={lang as any}>
            <CartProvider>
                <Navbar />
                <CartDrawer />
                <main className="min-h-screen pt-20">{children}</main>
                <Footer />
            </CartProvider>
        </LanguageProvider>
    );
}
