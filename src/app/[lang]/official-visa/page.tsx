import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import OfficialClientPage from './OfficialClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const meta = {
        title: `Visa Officiel Thaïlande (Non-F) | Guide ${new Date().getFullYear()}`,
        description: "Visa pour les officiels, diplomates et employés d'organisations internationales en mission en Thaïlande."
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'official-visa',
        lang,
    });
}

export default function Page() {
    return <OfficialClientPage />;
}
