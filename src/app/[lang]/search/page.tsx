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
                'en': `https://siamvisapro.com/en/search`,
                'fr': `https://siamvisapro.com/fr/recherche`,
                'de': `https://siamvisapro.com/de/suche`,
                'es': `https://siamvisapro.com/es/buscar`,
                'it': `https://siamvisapro.com/it/cerca`,
                'th': `https://siamvisapro.com/th/search`,
                // Add others as needed
            },
        },
    };
}

export default async function SearchPage({ params }: Props) {
    const { lang } = await params;
    return <SearchClientPage />;
}
