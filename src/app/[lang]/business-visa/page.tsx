import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import BusinessVisaClientPage from './BusinessVisaClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    // Hardcoded metadata for canonical page
    const meta = {
        title: `Visa Business Thaïlande (Non-B) | Guide & Conditions ${new Date().getFullYear()}`,
        description: "Tout savoir sur le Visa Non-Immigrant B pour travailler légalement en Thaïlande. Permis de travail, documents et procédures."
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'business-visa',
        lang,
    });
}

export default function Page() {
    return <BusinessVisaClientPage />;
}
