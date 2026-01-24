import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import MediaClientPage from './MediaClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    const meta = (t.media_visa_page as any).meta || {
        title: t.media_visa_page.hero_title,
        description: t.media_visa_page.hero_subtitle
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
