import React from 'react';
import SitemapClientPage from './SitemapClientPage';
import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import PageTranslations from '@/components/PageTranslations';
import { generateMetadataWithHreflang } from '@/utils/seo';

type Props = {
    params: Promise<{
        lang: string;
    }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;

    return generateMetadataWithHreflang({
        title: t.footer?.sitemap || "Sitemap",
        description: t.meta?.description || "Siam Visa Pro Sitemap",
        pageKey: 'sitemap',
        lang,
    });
}

export default async function SitemapPage({ params }: Props) {
    const { lang } = await params;
    const keys = PAGE_TRANSLATION_KEYS['sitemap'];
    const dict = getPageDictionary(lang, keys);
    const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

    return (
        <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
            <SitemapClientPage />
        </PageTranslations>
    );
}
