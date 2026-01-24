import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import ExemptionClientPage from './ExemptionClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    // Hardcoded metadata for canonical page
    const meta = {
        title: `Exemption de Visa Thaïlande (60 jours) | Guide ${new Date().getFullYear()}`,
        description: "Tout savoir sur l'entrée sans visa en Thaïlande : durée de 60 jours, pays éligibles (France, Belgique...), extension et règles."
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'exemption-visa',
        lang,
    });
}

export default function Page() {
    return <ExemptionClientPage />;
}
