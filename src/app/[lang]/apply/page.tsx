import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import { generateMetadataWithHreflang } from '@/utils/seo';
import ApplicationFlow from '@/components/visa/ApplicationFlow';
import PageTranslations from '@/components/PageTranslations';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;

    const meta = t.apply_page?.meta || {
        title: "Thailand Visa Application",
        description: "Start your Thailand visa application online."
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'apply',
        lang,
    });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const keys = PAGE_TRANSLATION_KEYS['apply'];
    const dict = getPageDictionary(lang, keys);
    const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

    return (
        <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
            <ApplicationFlow />
        </PageTranslations>
    );
}
