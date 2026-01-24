import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import StudentClientPage from './StudentClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    // Hardcoded metadata for canonical page
    const meta = {
        title: `Visa Étudiant Thaïlande (Non-ED) | Guide ${new Date().getFullYear()}`,
        description: "Visa pour étudier en Thaïlande (Université, École de langue, Muay Thai). Conditions, durée, inscription et interdiction de travail."
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'student-visa',
        lang,
    });
}

export default function Page() {
    return <StudentClientPage />;
}
