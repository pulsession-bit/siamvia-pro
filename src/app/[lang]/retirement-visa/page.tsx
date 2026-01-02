import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import RetirementVisaClientPage from './RetirementVisaClientPage';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;

    const meta = (t.retirement_page as any)?.meta || {
        title: t.retirement_visa_page.hero_title,
        description: t.retirement_visa_page.hero_subtitle
    };

    return {
        title: meta.title,
        description: meta.description,
    };
}

export default function Page() {
    return <RetirementVisaClientPage />;
}
