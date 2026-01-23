import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import TouristVisaClientPage from './TouristVisaClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    const meta = (t.tourist_visa_page as any).meta || {
        title: t.tourist_visa_page.hero_title,
        description: t.tourist_visa_page.hero_subtitle
    };

    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: `https://www.siamvisapro.com${getTranslatedPath('tourist-visa', lang)}`,
            languages: languages.reduce((acc, l) => {
                acc[l] = `https://www.siamvisapro.com${getTranslatedPath('tourist-visa', l)}`;
                return acc;
            }, {} as Record<string, string>),
        },
    };
}

export default function Page() {
    return <TouristVisaClientPage />;
}
