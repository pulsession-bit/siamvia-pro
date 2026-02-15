import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import ReligiousClientPage from './ReligiousClientPage';
import PageTranslations from '@/components/PageTranslations';
import { generateMetadataWithHreflang } from '@/utils/seo';
import { SchemaOrg } from '@/components/SchemaOrg';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;

    const meta = t.religious_visa_page?.meta || {
        title: t.religious_visa_page?.hero_title || 'Religious Visa',
        description: t.religious_visa_page?.hero_subtitle || ''
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'religious-visa',
        lang,
    });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const keys = PAGE_TRANSLATION_KEYS['religious-visa'];
    const dict = getPageDictionary(lang, keys);
    const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

    return (
        <>
            <SchemaOrg lang={lang} pageKey="religious-visa" title="Religious Visa" showGlobal={false} />
            <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
                <ReligiousClientPage />
            </PageTranslations>
        </>
    );
}
