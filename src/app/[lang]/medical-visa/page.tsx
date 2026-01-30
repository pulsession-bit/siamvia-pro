import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import MedicalClientPage from './MedicalClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    const meta = (t.medical_visa_page as any).meta || {
        title: t.medical_visa_page.hero_title,
        description: t.medical_visa_page.hero_subtitle
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'medical-visa',
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
            <SchemaOrg lang={lang} pageKey="medical-visa" title={t.nav.medical || 'Medical Visa'} showGlobal={false} />
            {VisaServiceSchemas.medical(lang)}
            <MedicalClientPage />
        </>
    );
}
