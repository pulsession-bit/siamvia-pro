import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import RetirementVisaClientPage from './RetirementVisaClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    const meta = (t.retirement_page as any)?.meta || {
        title: t.retirement_visa_page.hero_title,
        description: t.retirement_visa_page.hero_subtitle
    };

    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: `https://siamvisapro.com${getTranslatedPath('retirement-visa', lang)}`,
            languages: languages.reduce((acc, l) => {
                acc[l] = `https://siamvisapro.com${getTranslatedPath('retirement-visa', l)}`;
                return acc;
            }, {} as Record<string, string>),
        },
    };
}

export default function Page() {
    return <RetirementVisaClientPage />;
}
