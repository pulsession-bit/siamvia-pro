import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import ExemptionClientPage from './ExemptionClientPage';
import PageTranslations from '@/components/PageTranslations';
import { generateMetadataWithHreflang } from '@/utils/seo';
import { SchemaOrg } from '@/components/SchemaOrg';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;

    const meta = t.exemption_visa_page?.meta || {
        title: t.exemption_visa_page?.hero_title || 'Visa Exemption',
        description: t.exemption_visa_page?.hero_subtitle || ''
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'exemption-visa',
        lang,
    });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const keys = PAGE_TRANSLATION_KEYS['exemption-visa'];
    const dict = getPageDictionary(lang, keys);
    const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

    return (
        <>
            <SchemaOrg lang={lang} pageKey="exemption-visa" title="Visa Exemption" showGlobal={false} />
            <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
                <ExemptionClientPage />
            </PageTranslations>
        </>
    );
}
