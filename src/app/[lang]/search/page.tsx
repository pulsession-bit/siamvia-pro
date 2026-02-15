import React from 'react';
import SearchClientPage from './SearchClientPage';
import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import PageTranslations from '@/components/PageTranslations';
import { SchemaOrg } from '@/components/SchemaOrg';
import { generateMetadataWithHreflang } from '@/utils/seo';

type Props = {
    params: Promise<{
        lang: string;
    }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;
    const meta = t.search_page?.meta || {
        title: "Visa Search Engine | Siam Visa Pro",
        description: "Find the perfect Thailand visa for your needs. Compare options for retirement, work, tourism, and elite privileges."
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'search',
        lang,
    });
}

export default async function SearchPage({ params }: Props) {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;
    const localI18n = t.search_page || getFullDictionary('en' as any).search_page;
    const keys = PAGE_TRANSLATION_KEYS['search'];
    const dict = getPageDictionary(lang, keys);
    const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

    return (
        <React.Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading search engine...</div>}>
            <SchemaOrg lang={lang} pageKey="search" title={t.nav?.search || "Search"} showGlobal={false} />
            <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
                <SearchClientPage localI18n={localI18n} />
            </PageTranslations>
        </React.Suspense>
    );
}
