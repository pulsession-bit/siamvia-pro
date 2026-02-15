import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import EliteClientPage from './EliteClientPage';
import PageTranslations from '@/components/PageTranslations';
import { generateMetadataWithHreflang } from '@/utils/seo';
import { SchemaOrg } from '@/components/SchemaOrg';
import { VisaServiceSchemas } from '@/components/ServiceSchema';
import { EliteSchemaAI } from '@/components/EliteSchemaAI';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;

    const meta = t.elite_page?.meta || {
        title: "Visa Elite Thaïlande (Thailand Privilege)",
        description: "Visa 5 à 20 ans pour la Thaïlande. Service VIP et Conciergerie."
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'elite-visa',
        lang,
    });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;
    const keys = PAGE_TRANSLATION_KEYS['elite-visa'];
    const dict = getPageDictionary(lang, keys);
    const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

    return (
        <>
            <SchemaOrg lang={lang} pageKey="elite-visa" title={t.nav.elite} showGlobal={false} />
            {VisaServiceSchemas.elite(lang)}
            <EliteSchemaAI lang={lang} />
            <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
                <EliteClientPage />
            </PageTranslations>
        </>
    );
}
