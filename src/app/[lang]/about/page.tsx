
import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { generateMetadataWithHreflang } from '@/utils/seo';
import AboutClientPage from './AboutClientPage';
import { SchemaOrg } from '@/components/SchemaOrg';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;
    const meta = (t.about_page as any).meta;

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'about' as any,
        lang,
    });
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    return (
        <>
            <SchemaOrg lang={lang} pageKey="about" title={t.hero_title} showGlobal={false} />
            <AboutClientPage />
        </>
    );
}
