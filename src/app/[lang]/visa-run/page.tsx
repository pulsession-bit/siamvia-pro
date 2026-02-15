import React from 'react';
import VisaRunClientPage from './VisaRunClientPage';
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
    const meta = t.visa_run_page?.meta || {
        title: "Thailand Visa Run: Risks & Alternatives 2026",
        description: "Stop doing visa runs. Discover legal, long-term visa options for Thailand."
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'visa-run',
        lang,
    });
}

export default async function VisaRunPage({ params }: Props) {
    const { lang } = await params;
    const keys = PAGE_TRANSLATION_KEYS['visa-run'];
    const dict = getPageDictionary(lang, keys);
    const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

    return (
        <React.Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading content...</div>}>
            <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
                <VisaRunClientPage />
            </PageTranslations>
        </React.Suspense>
    );
}
