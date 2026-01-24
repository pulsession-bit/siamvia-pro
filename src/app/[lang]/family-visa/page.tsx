import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import FamilyClientPage from './FamilyClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    // Hardcoded metadata for canonical page
    const meta = {
        title: `Visa Famille Thaïlande (Non-O) | Mariage & Enfants ${new Date().getFullYear()}`,
        description: "Visa pour regroupement familial en Thaïlande : Mariage avec un(e) Thaï(e) ou parent d'enfant thaïlandais. Conditions financières."
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'family-visa',
        lang,
    });
}

export default function Page() {
    return <FamilyClientPage />;
}
