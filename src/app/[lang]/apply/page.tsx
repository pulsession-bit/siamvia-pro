import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { generateMetadataWithHreflang } from '@/utils/seo';
import ApplicationFlow from '@/components/visa/ApplicationFlow';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    const meta = (t.apply_page as any).meta || {
        title: "Thailand Visa Application",
        description: "Start your Thailand visa application online."
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'apply',
        lang,
    });
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <ApplicationFlow />
    );
}
