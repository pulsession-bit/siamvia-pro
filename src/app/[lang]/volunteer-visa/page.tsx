import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import VolunteerClientPage from './VolunteerClientPage';
import PageTranslations from '@/components/PageTranslations';
import { generateMetadataWithHreflang } from '@/utils/seo';
import { SchemaOrg } from '@/components/SchemaOrg';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;

    const meta = t.volunteer_visa_page?.meta || {
        title: t.volunteer_visa_page?.hero_title || 'Volunteer Visa',
        description: t.volunteer_visa_page?.hero_subtitle || ''
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'volunteer-visa',
        lang,
    });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const keys = PAGE_TRANSLATION_KEYS['volunteer-visa'];
    const dict = getPageDictionary(lang, keys);
    const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

    return (
        <>
            <SchemaOrg lang={lang} pageKey="volunteer-visa" title="Volunteer Visa" showGlobal={false} />
            <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
                <VolunteerClientPage />
            </PageTranslations>
        </>
    );
}
