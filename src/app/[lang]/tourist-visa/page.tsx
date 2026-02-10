import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import TouristVisaClientPage from './TouristVisaClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    const meta = (t.tourist_visa_page as any).meta || {
        title: t.tourist_visa_page.hero_title,
        description: t.tourist_visa_page.hero_subtitle
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'tourist-visa',
        lang,
    });
}

import { SchemaOrg } from '@/components/SchemaOrg';
import { VisaServiceSchemas } from '@/components/ServiceSchema';
import { TouristSchemaAI } from '@/components/TouristSchemaAI';

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    return (
        <>
            <SchemaOrg lang={lang} pageKey="tourist-visa" title={t.nav.tourist} showGlobal={false} />
            {VisaServiceSchemas.tourist(lang)}
            <TouristSchemaAI lang={lang} />
            <TouristVisaClientPage />
        </>
    );
}

