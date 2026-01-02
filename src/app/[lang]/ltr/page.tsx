
import { Metadata } from 'next';
import LTRClientPage from './LTRClientPage';
import { translations } from '@/utils/translations';

type Props = {
    params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations]?.ltr_page?.meta || translations.fr.ltr_page.meta;

    return {
        title: t.title,
        description: t.description,
    };
}

export default async function LTRPage({ params }: Props) {
    return <LTRClientPage />;
}
