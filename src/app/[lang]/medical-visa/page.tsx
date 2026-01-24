import { Metadata } from 'next';
import { translations } from '@/utils/translations';
import { getTranslatedPath } from '@/utils/slugs';
import MedicalClientPage from './MedicalClientPage';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;

import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const meta = {
        title: `Visa Médical Thaïlande (Non-MT / Non-O) | Guide ${new Date().getFullYear()}`,
        description: "Se soigner en Thaïlande. Tout savoir sur le visa médical, les extensions pour soins prolongés et les accompagnateurs."
    };

    return generateMetadataWithHreflang({
        title: meta.title,
        description: meta.description,
        pageKey: 'medical-visa',
        lang,
    });
}

export default function Page() {
    return <MedicalClientPage />;
}
