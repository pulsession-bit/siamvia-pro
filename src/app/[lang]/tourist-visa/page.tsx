import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import TouristVisaClientPage from './TouristVisaClientPage';
import PageTranslations from '@/components/PageTranslations';
import { generateMetadataWithHreflang } from '@/utils/seo';
import { SchemaOrg } from '@/components/SchemaOrg';
import { VisaServiceSchemas } from '@/components/ServiceSchema';
import { TouristSchemaAI } from '@/components/TouristSchemaAI';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;

    const meta = t.tourist_visa_page?.meta || {
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

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;
    const keys = PAGE_TRANSLATION_KEYS['tourist-visa'];
    const dict = getPageDictionary(lang, keys);
    const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

    return (
        <>
            <SchemaOrg lang={lang} pageKey="tourist-visa" title={t.nav.tourist} showGlobal={false} />
            {VisaServiceSchemas.tourist(lang)}
            <TouristSchemaAI lang={lang} />
            <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
                <TouristVisaClientPage />
            </PageTranslations>
        </>
    );
}
