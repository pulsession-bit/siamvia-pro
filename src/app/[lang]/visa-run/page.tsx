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
                'en': `https://www.siamvisapro.com/en/visa-run`,
                'fr': `https://www.siamvisapro.com/fr/visa-run`,
                'de': `https://www.siamvisapro.com/de/visa-run`,
                'es': `https://www.siamvisapro.com/es/visa-run`,
                'it': `https://www.siamvisapro.com/it/visa-run`,
                'th': `https://www.siamvisapro.com/th/visa-run`,
                'ru': `https://www.siamvisapro.com/ru/visa-run`,
                'zh': `https://www.siamvisapro.com/zh/visa-run`,
                'ja': `https://www.siamvisapro.com/ja/visa-run`,
                'ko': `https://www.siamvisapro.com/ko/visa-run`,
                'ar': `https://www.siamvisapro.com/ar/visa-run`,
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
