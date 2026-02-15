
import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import LTRClientPage from './LTRClientPage';
import PageTranslations from '@/components/PageTranslations';
import { generateMetadataWithHreflang } from '@/utils/seo';
import { SchemaOrg } from '@/components/SchemaOrg';
import { VisaServiceSchemas } from '@/components/ServiceSchema';
import { LTRSchemaAI } from '@/components/LTRSchemaAI';

type Props = {
    params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;
    const ltrPage = t.ltr_page || getFullDictionary('fr' as any).ltr_page;
    const meta = ltrPage?.meta || (getFullDictionary('fr' as any) as any).ltr_page.meta;

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'ltr',
        lang,
    });
}

export default async function LTRPage({ params }: Props) {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;
    const keys = PAGE_TRANSLATION_KEYS['ltr'];
    const dict = getPageDictionary(lang, keys);
    const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

    return (
        <>
            <SchemaOrg lang={lang} pageKey="ltr" title={t.nav.ltr} showGlobal={false} />
            {VisaServiceSchemas.ltr(lang)}
            <LTRSchemaAI lang={lang} />
            <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
                <LTRClientPage />
            </PageTranslations>
        </>
    );
}
