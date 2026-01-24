import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import ReligiousClientPage from './ReligiousClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const meta = {
        title: `Visa Religieux Thaïlande (Non-R) | Guide ${new Date().getFullYear()}`,
        description: "Visa pour les moines, missionnaires et activités religieuses en Thaïlande. Conditions d'obtention et parrainage par les autorités religieuses."
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'religious-visa',
        lang,
    });
}

export default function Page() {
    return <ReligiousClientPage />;
}
