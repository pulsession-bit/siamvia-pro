import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import EliteClientPage from './EliteClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    // Use elite_page metadata if available, otherwise fallback
    const meta = (t as any).elite_page?.meta || {
        title: "Visa Elite Thaïlande (Thailand Privilege)",
        description: "Visa 5 à 20 ans pour la Thaïlande. Service VIP et Conciergerie."
    };

    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: `https://www.siamvisapro.com${getTranslatedPath('elite-visa', lang)}`,
            languages: languages.reduce((acc, l) => {
                acc[l] = `https://www.siamvisapro.com${getTranslatedPath('elite-visa', l)}`;
                return acc;
            }, {} as Record<string, string>),
        },
    };
}

export default function Page() {
    return <EliteClientPage />;
}
