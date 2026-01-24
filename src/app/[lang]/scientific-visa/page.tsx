import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import ScientificClientPage from './ScientificClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const meta = {
        title: `Visa Recherche Scientifique Thaïlande (Non-RS) | Guide ${new Date().getFullYear()}`,
        description: "Visa pour les chercheurs, experts et scientifiques menant des travaux de recherche en Thaïlande."
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'scientific-visa',
        lang,
    });
}

export default function Page() {
    return <ScientificClientPage />;
}
