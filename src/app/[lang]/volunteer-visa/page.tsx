import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import VolunteerClientPage from './VolunteerClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const meta = {
        title: `Visa Volontaire Thaïlande (Non-O Volunteer) | Guide ${new Date().getFullYear()}`,
        description: "Obtenez un visa de volontaire pour la Thaïlande. Conditions pour le bénévolat dans des ONG, fondations et organisations caritatives."
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'volunteer-visa',
        lang,
    });
}

export default function Page() {
    return <VolunteerClientPage />;
}
