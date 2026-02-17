import { Metadata } from 'next';
import BuyPropertyClientPage from './BuyPropertyClientPage';
import BuyPropertySchema from './BuyPropertySchema';
import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;

    if (lang === 'fr') {
        return generateMetadataWithHreflang({
            title: "Acheter un bien en Thaïlande (2026) — Condo, villa, leasehold, due diligence",
            description: "Guide 2026 : ce qu'un étranger peut acheter en Thaïlande (condo 49%, leasehold 30 ans, usufruit), titres (Chanote), taxes/frais, checklists et pièges à éviter.",
            pageKey: 'buy-property',
            lang,
        });
    }

    return generateMetadataWithHreflang({
        title: "Buying Property in Thailand (2026) - Condo, Villa, Leasehold Guide",
        description: "2026 Guide for foreigners buying property in Thailand: Condo 49% quota, Leasehold 30 years, Usufruct, Land Titles (Chanote), Taxes & Fees.",
        pageKey: 'buy-property',
        lang,
    });
}

export default async function BuyPropertyPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return (
        <>
            <BuyPropertySchema lang={lang} />
            <BuyPropertyClientPage lang={lang} />
        </>
    );
}
