
import { Metadata } from 'next';
import LTRClientPage from './LTRClientPage';
import { translations } from '@/utils/translations';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

type Props = {
    params: Promise<{ lang: string }>;
};

import { generateMetadataWithHreflang } from '@/utils/seo';
import { getTranslatedPath } from '@/utils/slugs';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const langTranslations = translations[lang as keyof typeof translations];
    const ltrPage = (langTranslations && 'ltr_page' in langTranslations)
        ? (langTranslations as any).ltr_page
        : translations.fr.ltr_page;

    const meta = ltrPage?.meta || translations.fr.ltr_page.meta;

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pathname: getTranslatedPath('ltr', lang),
    });
}

export default async function LTRPage({ params }: Props) {
    return <LTRClientPage />;
}
