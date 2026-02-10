import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import ScientificClientPage from './ScientificClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    const meta = (t.scientific_visa_page as any).meta || {
        title: t.scientific_visa_page.hero_title,
        description: t.scientific_visa_page.hero_subtitle
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'scientific-visa',
        lang,
    });
}

import { SchemaOrg } from '@/components/SchemaOrg';

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return (
        <>
            <SchemaOrg lang={lang} pageKey="scientific-visa" title="Scientific Visa" showGlobal={false} />
            <ScientificClientPage />
        </>
    );
}
