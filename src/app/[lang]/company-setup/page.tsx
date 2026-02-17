import { Metadata } from 'next';
import CompanySetupClientPage from './CompanySetupClientPage';
import CompanySetupSchema from './CompanySetupSchema';
import { generateMetadataWithHreflang } from '@/utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;

    if (lang === 'fr') {
        return generateMetadataWithHreflang({
            title: "Créer une entreprise en Thaïlande (2026) — Structures, BOI, licences, visa & work permit",
            description: "Guide opérationnel 2026 pour créer une société en Thaïlande : Thai Co., succursale, rep office, BOI, Foreign Business Act, taxes, banque, Non-B & Work Permit.",
            pageKey: 'company-setup',
            lang,
        });
    }

    return generateMetadataWithHreflang({
        title: "Company Registration in Thailand (2026) - Structures, BOI, Licenses",
        description: "Operational guide 2026 to open a company in Thailand: Thai Co., Branch Office, Rep Office, BOI, Foreign Business Act, Taxes, Bank Accounts, Work Permit.",
        pageKey: 'company-setup',
        lang,
    });
}

export default async function CompanySetupPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return (
        <>
            <CompanySetupSchema lang={lang} />
            <CompanySetupClientPage lang={lang} />
        </>
    );
}
