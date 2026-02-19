import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import InsuranceClientPage from './InsuranceClientPage';
import PageTranslations from '@/components/PageTranslations';
import { generateMetadataWithHreflang } from '@/utils/seo';
import { SchemaOrg } from '@/components/SchemaOrg';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;
    const en = getFullDictionary('en' as any) as any;

    return generateMetadataWithHreflang({
        title: t.insurance_page?.meta_title || t.insurance_page?.hero_title || en.insurance_page?.meta_title,
        description: t.insurance_page?.meta_description || t.insurance_page?.hero_subtitle || en.insurance_page?.meta_description,
        pageKey: 'insurance',
        lang,
    });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const keys = PAGE_TRANSLATION_KEYS['insurance'];
    const dict = getPageDictionary(lang, keys);
    const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

    return (
        <>
            <SchemaOrg lang={lang} pageKey="insurance" title="Assurance Voyage Thaïlande" showGlobal={false} />
            <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
                <InsuranceClientPage />
            </PageTranslations>
        </>
    );
}
