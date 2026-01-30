import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import EliteClientPage from './EliteClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    // Use elite_page metadata if available, otherwise fallback
    const meta = (t as any).elite_page?.meta || {
        title: "Visa Elite Thaïlande (Thailand Privilege)",
        description: "Visa 5 à 20 ans pour la Thaïlande. Service VIP et Conciergerie."
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'elite-visa',
        lang,
    });
}

import { SchemaOrg } from '@/components/SchemaOrg';
import { VisaServiceSchemas } from '@/components/ServiceSchema';

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    return (
        <>
            <SchemaOrg lang={lang} pageKey="elite-visa" title={t.nav.elite} showGlobal={false} />
            {VisaServiceSchemas.elite(lang)}
            <EliteClientPage />
        </>
    );
}

