import React from 'react';
import SearchClientPage from './SearchClientPage';
import { Metadata } from 'next';
import { translations } from '@/utils/translations';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;
import { SchemaOrg } from '@/components/SchemaOrg';

type Props = {
    params: Promise<{
        lang: string;
    }>;
};

import { generateMetadataWithHreflang } from '@/utils/seo';
import { getTranslatedPath } from '@/utils/slugs';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    // Fallback if translations not ready, but we will add them
    const t = (translations as any)[lang]?.search_page?.meta || {
        title: "Visa Search Engine | Siam Visa Pro",
        description: "Find the perfect Thailand visa for your needs. Compare options for retirement, work, tourism, and elite privileges."
    };

    return generateMetadataWithHreflang({
        title: t.title,
        description: t.description,
        pageKey: 'search',
        lang,
    });
}



export default async function SearchPage({ params }: Props) {
    const { lang } = await params;
    // @ts-ignore
    const localI18n = translations[lang]?.search_page || translations.en.search_page;
    const t = (translations as any)[lang] || translations.en;

    return (
        <React.Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading search engine...</div>}>
            <SchemaOrg lang={lang} pageKey="search" title={t.nav?.search || "Search"} showGlobal={false} />
            <SearchClientPage localI18n={localI18n} />
        </React.Suspense>
    );
}

