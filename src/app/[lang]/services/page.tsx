import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import ServicesClientPage from './ServicesClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    const meta = (t.services_page as any).meta || {
        title: t.services_page.hero_title,
        description: t.services_page.hero_subtitle
    };

    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: `https://siamvisapro.com${getTranslatedPath('services', lang)}`,
            languages: languages.reduce((acc, l) => {
                acc[l] = `https://siamvisapro.com${getTranslatedPath('services', l)}`;
                return acc;
            }, {} as Record<string, string>),
        },
    };
}

export default function Page() {
    return <ServicesClientPage />;
}
