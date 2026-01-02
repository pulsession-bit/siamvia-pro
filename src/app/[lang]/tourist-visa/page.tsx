import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import TouristVisaClientPage from './TouristVisaClientPage';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    const meta = (t.tourist_visa_page as any).meta || {
        title: t.tourist_visa_page.hero_title,
        description: t.tourist_visa_page.hero_subtitle
    };

    return {
        title: meta.title,
        description: meta.description,
    };
}

export default function Page() {
    return <TouristVisaClientPage />;
}
