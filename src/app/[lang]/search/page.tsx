import React from 'react';
import SearchClientPage from './SearchClientPage';
import { getDictionary } from '@/utils/dictionaries'; // Assuming this exists or similar mechanism, mostly generic server page
import { Metadata } from 'next';
import { translations } from '@/utils/translations'; // Actually just use generateMetadata logic
import { Lang } from '@/utils/slugs'; // Or equivalent type

type Props = {
    params: Promise<{
        lang: Lang;
    }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    // Fallback if translations not ready, but we will add them
    const t = translations[lang]?.search_page?.meta || {
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
