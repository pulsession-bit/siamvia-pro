import React from 'react';
import { Metadata } from 'next';
import CompanySetupClientPage from './CompanySetupClientPage';
import CompanySetupSchema from './CompanySetupSchema';
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
            title: "Créer une entreprise en Thaïlande (2026) — Structures, BOI, licences, visa & work permit",
            description: "Guide opérationnel 2026 pour créer une société en Thaïlande : Thai Co., succursale, rep office, BOI, Foreign Business Act, taxes, banque, Non-B & Work Permit.",
            alternates: {
                canonical: `https://www.siamvisapro.com/${lang}/creer-entreprise-thailande`,
            }
        };
    }

    return {
        title: "Company Registration in Thailand (2026) - Structures, BOI, Licenses",
        description: "Operational guide 2026 to open a company in Thailand: Thai Co., Branch Office, Rep Office, BOI, Foreign Business Act, Taxes, Bank Accounts, Work Permit.",
        alternates: {
            canonical: `https://www.siamvisapro.com/${lang}/company-registration-thailand`,
        }
    };
}

export function generateStaticParams() {
    return languages.map((lang) => ({ lang: lang.code }));
}

export default function CompanySetupPage({ params }: PageProps) {
    return (
        <>
            <CompanySetupSchema />
            <CompanySetupClientPage lang={params.lang} />
        </>
    );
}
