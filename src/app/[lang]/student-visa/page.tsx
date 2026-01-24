import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import StudentClientPage from './StudentClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    const meta = (t.student_visa_page as any).meta || {
        title: t.student_visa_page.hero_title,
        description: t.student_visa_page.hero_subtitle
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
