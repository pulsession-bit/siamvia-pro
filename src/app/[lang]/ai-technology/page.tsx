
import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { generateMetadataWithHreflang } from '@/utils/seo';
import AITechnologyClientPage from './AITechnologyClientPage';
import { SchemaOrg } from '@/components/SchemaOrg';
import { AITechnologySchemaAI } from './AITechnologySchemaAI';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;
    const meta = (t as any).ai_technology_page?.meta || {
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

    return (
        <>
            <SchemaOrg lang={lang} pageKey="ai-technology" title="AI Visa Technology" showGlobal={false} />
            <AITechnologySchemaAI lang={lang} />
            <AITechnologyClientPage />
        </>
    );
}
