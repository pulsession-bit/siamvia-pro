
import { Metadata } from 'next';
import { getFullDictionary, getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
import AITechnologyClientPage from './AITechnologyClientPage';
import PageTranslations from '@/components/PageTranslations';
import { generateMetadataWithHreflang } from '@/utils/seo';
import { SchemaOrg } from '@/components/SchemaOrg';
import { AITechnologySchemaAI } from './AITechnologySchemaAI';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = getFullDictionary(lang as any) as any;
    const meta = t.ai_technology_page?.meta || {
        title: 'AI Visa Technology | Siam Visa Pro',
        description: 'Discover how Siam Visa Pro uses Artificial Intelligence to score visa eligibility, provide live expert consultations via Gemini, and generate personalized audit reports.'
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'ai-technology' as any,
        lang,
    });
}

export default async function AITechnologyPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const keys = PAGE_TRANSLATION_KEYS['ai-technology'];
    const dict = getPageDictionary(lang, keys);
    const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;

    return (
        <>
            <SchemaOrg lang={lang} pageKey="ai-technology" title="AI Visa Technology" showGlobal={false} />
            <AITechnologySchemaAI lang={lang} />
            <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
                <AITechnologyClientPage />
            </PageTranslations>
        </>
    );
}
