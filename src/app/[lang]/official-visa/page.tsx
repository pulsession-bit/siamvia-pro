import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import OfficialClientPage from './OfficialClientPage';
import PageTranslations from '@/components/PageTranslations';
import { generateMetadataWithHreflang } from '@/utils/seo';
import { SchemaOrg } from '@/components/SchemaOrg';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;

    const meta = t.official_visa_page?.meta || {
        title: t.official_visa_page?.hero_title || 'Official Visa',
        description: t.official_visa_page?.hero_subtitle || ''
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'official-visa',
        lang,
    });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const keys = PAGE_TRANSLATION_KEYS['official-visa'];
    const dict = getPageDictionary(lang, keys);
    const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

    return (
        <>
            <SchemaOrg lang={lang} pageKey="official-visa" title="Official Visa" showGlobal={false} />
            <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
                <OfficialClientPage />
            </PageTranslations>
        </>
    );
}
