import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import SmartClientPage from './SmartClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    // Hardcoded metadata for canonical page
    const meta = {
        title: `SMART Visa Thaïlande (4 Ans) | Tech & Investisseurs ${new Date().getFullYear()}`,
        description: "Visa spécial 4 ans pour talents, investisseurs et exécutifs. Pas de Work Permit requis, famille incluse. Conditions BOI."
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'smart-visa',
        lang,
    });
}

export default function Page() {
    return <SmartClientPage />;
}
