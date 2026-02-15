import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import SmartClientPage from './SmartClientPage';
import PageTranslations from '@/components/PageTranslations';
import { generateMetadataWithHreflang } from '@/utils/seo';
import { SchemaOrg } from '@/components/SchemaOrg';
import { VisaServiceSchemas } from '@/components/ServiceSchema';
import { SmartSchemaAI } from '@/components/SmartSchemaAI';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;

    const meta = t.smart_visa_page?.meta || {
        title: t.smart_visa_page.hero_title,
        description: t.smart_visa_page.hero_subtitle
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'smart-visa',
        lang,
    });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;
    const keys = PAGE_TRANSLATION_KEYS['smart-visa'];
    const dict = getPageDictionary(lang, keys);
    const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

    return (
        <>
            <SchemaOrg lang={lang} pageKey="smart-visa" title={t.nav.smart || 'SMART Visa'} showGlobal={false} />
            {VisaServiceSchemas.smart(lang)}
            <SmartSchemaAI lang={lang} />
            <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
                <SmartClientPage />
            </PageTranslations>
        </>
    );
}
