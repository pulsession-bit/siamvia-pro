import React from 'react';
import { Metadata } from 'next';
import BuyPropertyClientPage from './BuyPropertyClientPage';
import BuyPropertySchema from './BuyPropertySchema';
import { languages } from '@/components/navbar/LanguageSelector';

interface PageProps {
    params: {
        lang: string;
    };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const lang = params.lang;

    if (lang === 'fr') {
        return {
            title: "Acheter un bien en Thaïlande (2026) — Condo, villa, leasehold, due diligence",
            description: "Guide 2026 : ce qu’un étranger peut acheter en Thaïlande (condo 49%, leasehold 30 ans, usufruit), titres (Chanote), taxes/frais, checklists et pièges à éviter.",
            alternates: {
                canonical: `https://www.siamvisapro.com/${lang}/acheter-immobilier-thailande`,
            }
        };
    }

    return {
        title: "Buying Property in Thailand (2026) - Condo, Villa, Leasehold Guide",
        description: "2026 Guide for foreigners buying property in Thailand: Condo 49% quota, Leasehold 30 years, Usufruct, Land Titles (Chanote), Taxes & Fees.",
        alternates: {
            canonical: `https://www.siamvisapro.com/${lang}/buy-property-thailand`,
        }
    };
}

export function generateStaticParams() {
    return languages.map((lang) => ({ lang: lang.code }));
}

export default function BuyPropertyPage({ params }: PageProps) {
    return (
        <>
            <BuyPropertySchema />
            <BuyPropertyClientPage lang={params.lang} />
        </>
    );
}
