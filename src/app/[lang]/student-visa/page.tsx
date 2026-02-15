import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import StudentClientPage from './StudentClientPage';
import PageTranslations from '@/components/PageTranslations';
import { generateMetadataWithHreflang } from '@/utils/seo';
import { SchemaOrg } from '@/components/SchemaOrg';
import { VisaServiceSchemas } from '@/components/ServiceSchema';
import { StudentSchemaAI } from '@/components/StudentSchemaAI';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;

    const meta = t.student_visa_page?.meta || {
        title: t.student_visa_page?.hero_title || 'Student Visa',
        description: t.student_visa_page?.hero_subtitle || ''
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'student-visa',
        lang,
    });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;
    const keys = PAGE_TRANSLATION_KEYS['student-visa'];
    const dict = getPageDictionary(lang, keys);
    const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

    return (
        <>
            <SchemaOrg lang={lang} pageKey="student-visa" title={t.nav.student || 'Student Visa'} showGlobal={false} />
            {VisaServiceSchemas.student(lang)}
            <StudentSchemaAI lang={lang} />
            <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
                <StudentClientPage />
            </PageTranslations>
        </>
    );
}
