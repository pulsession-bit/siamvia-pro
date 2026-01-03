import React from 'react';
import VisaRunClientPage from './VisaRunClientPage';
import { Metadata } from 'next';
import { translations } from '@/utils/translations';

type Props = {
    params: Promise<{
        lang: string;
    }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    // Fallback to English if translation missing for specific lang
    const t = (translations as any)[lang]?.visa_run_page?.meta || (translations as any)['en']?.visa_run_page?.meta || {
        title: "Thailand Visa Run: Risks & Alternatives 2026",
        description: "Stop doing visa runs. Discover legal, long-term visa options for Thailand."
    };

    return {
        title: t.title,
        description: t.description,
        alternates: {
            languages: {
                'en': `https://siamvisapro.com/en/visa-run`,
                'fr': `https://siamvisapro.com/fr/visa-run`,
                'de': `https://siamvisapro.com/de/visa-run`,
                'es': `https://siamvisapro.com/es/visa-run`,
                'it': `https://siamvisapro.com/it/visa-run`,
                'th': `https://siamvisapro.com/th/visa-run`,
                'ru': `https://siamvisapro.com/ru/visa-run`,
                'zh': `https://siamvisapro.com/zh/visa-run`,
                'ja': `https://siamvisapro.com/ja/visa-run`,
                'ko': `https://siamvisapro.com/ko/visa-run`,
                'ar': `https://siamvisapro.com/ar/visa-run`,
            },
        },
    };
}

export default async function VisaRunPage({ params }: Props) {
    const { lang } = await params;
    return (
        <React.Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading content...</div>}>
            <VisaRunClientPage />
        </React.Suspense>
    );
}
