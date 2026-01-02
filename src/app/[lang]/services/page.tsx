import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import ServicesClientPage from './ServicesClientPage';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    const meta = (t.services_page as any).meta || {
        title: t.services_page.hero_title,
        description: t.services_page.hero_subtitle
    };

    return {
        title: meta.title,
        description: meta.description,
    };
}

export default function Page() {
    return <ServicesClientPage />;
}
