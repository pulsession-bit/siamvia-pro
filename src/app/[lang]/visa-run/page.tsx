import React from 'react';
import VisaRunClientPage from './VisaRunClientPage';
import { Metadata } from 'next';
import { translations } from '@/utils/translations';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

type Props = {
    params: Promise<{
        lang: string;
    }>;
};

import { generateMetadataWithHreflang } from '@/utils/seo';
import { getTranslatedPath } from '@/utils/slugs';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const t = (translations as any)[lang]?.visa_run_page?.meta || (translations as any)['en']?.visa_run_page?.meta || {
        title: "Thailand Visa Run: Risks & Alternatives 2026",
        description: "Stop doing visa runs. Discover legal, long-term visa options for Thailand."
    };

    return generateMetadataWithHreflang({
        title: t.title,
        description: t.description,
        pageKey: 'visa-run',
        lang,
    });
}

export default async function VisaRunPage({ params }: Props) {
    const { lang } = await params;
    return (
        <React.Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading content...</div>}>
            <VisaRunClientPage />
        </React.Suspense>
    );
}
