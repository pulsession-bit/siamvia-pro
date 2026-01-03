import React from 'react';
import SearchClientPage from './SearchClientPage';
import { Metadata } from 'next';
import { translations } from '@/utils/translations';

type Props = {
    params: Promise<{
        lang: string;
    }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    // Fallback if translations not ready, but we will add them
    const t = (translations as any)[lang]?.search_page?.meta || {
        title: "Visa Search Engine | Siam Visa Pro",
        description: "Find the perfect Thailand visa for your needs. Compare options for retirement, work, tourism, and elite privileges."
    };

    return {
        title: t.title,
        description: t.description,
        alternates: {
            languages: {
                'en': `https://siamvisapro.com/en/thailand-visa-comparator-2026`,
                'fr': `https://siamvisapro.com/fr/comparateur-visa-thailande-2026`,
                'de': `https://siamvisapro.com/de/thailand-visum-vergleich-2026`,
                'es': `https://siamvisapro.com/es/comparador-visas-tailandia-2026`,
                'it': `https://siamvisapro.com/it/comparatore-visti-thailandia-2026`,
                'th': `https://siamvisapro.com/th/thailand-visa-comparator-2026`,
                'ru': `https://siamvisapro.com/ru/thailand-visa-comparator-2026`,
                'zh': `https://siamvisapro.com/zh/thailand-visa-comparator-2026`,
                'ja': `https://siamvisapro.com/ja/thailand-visa-comparator-2026`,
                'ko': `https://siamvisapro.com/ko/thailand-visa-comparator-2026`,
                'ar': `https://siamvisapro.com/ar/thailand-visa-comparator-2026`,
            },
        },
    };
}

import { I18N } from './data/visas';

export default async function SearchPage({ params }: Props) {
    const { lang } = await params;
    const localI18n = I18N[lang] || I18N.en;

    return (
        <React.Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading search engine...</div>}>
            <SearchClientPage localI18n={localI18n} />
        </React.Suspense>
    );
}
