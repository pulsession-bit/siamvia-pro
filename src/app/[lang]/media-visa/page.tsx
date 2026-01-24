import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import MediaClientPage from './MediaClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const meta = {
        title: `Visa Média / Journaliste Thaïlande (Non-M) | Guide ${new Date().getFullYear()}`,
        description: "Visa pour les journalistes, correspondants de presse et équipes de tournage en Thaïlande. Accréditation et conditions."
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'media-visa',
        lang,
    });
}

export default function Page() {
    return <MediaClientPage />;
}
