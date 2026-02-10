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

import { SchemaOrg } from '@/components/SchemaOrg';
import { VisaServiceSchemas } from '@/components/ServiceSchema';
import { StudentSchemaAI } from '@/components/StudentSchemaAI';

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    return (
        <>
            <SchemaOrg lang={lang} pageKey="student-visa" title={t.nav.student || 'Student Visa'} showGlobal={false} />
            {VisaServiceSchemas.student(lang)}
            <StudentSchemaAI lang={lang} />
            <StudentClientPage />
        </>
    );
}
