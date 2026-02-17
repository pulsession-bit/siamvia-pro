'use client';

import React from 'react';

interface CompanySetupSchemaProps {
    lang: string;
}

const CompanySetupSchema: React.FC<CompanySetupSchemaProps> = ({ lang }) => {
    let questions = [];

    if (lang === 'fr') {
        questions = [
            {
                "@type": "Question",
                "name": "Peut-on créer une société 100% étrangère en Thaïlande ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui dans certains cadres (ex. BOI) ou selon l’activité. Sinon, l’actionnariat et le contrôle étranger déclenchent potentiellement des obligations sous le Foreign Business Act."
                }
            },
            {
                "@type": "Question",
                "name": "Quelles sont les étapes DBD pour enregistrer une Thai Limited Company ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Réservation du nom, dépôt du MOA, statutory meeting, puis enregistrement de la société auprès du Department of Business Development."
                }
            },
            {
                "@type": "Question",
                "name": "Puis-je travailler dans ma propre société ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Travailler légalement requiert généralement un visa Non-Immigrant B et un work permit (sauf statuts/exemptions spécifiques, ex. certains cadres BOI)."
                }
            }
        ];
    } else {
        // English (Default)
        questions = [
            {
                "@type": "Question",
                "name": "Can a foreigner own 100% of a company in Thailand?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, but only under specific conditions: 1) Obtaining BOI Promotion (for tech/manufacturing), 2) Using the US Treaty of Amity (for US citizens), or 3) Getting a Foreign Business License. Otherwise, foreign ownership is generally capped at 49%."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need a Thai partner to open a business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For a standard Thai Limited Company operating in service sectors (FBA List 3), legal compliance usually requires 51% Thai shareholding. Nominee shareholders are illegal."
                }
            },
            {
                "@type": "Question",
                "name": "How much capital is required for a Work Permit?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A minimum of 2 Million THB registered capital (fully paid-up) is required for each foreign Work Permit, plus a ratio of 4 Thai employees per foreigner."
                }
            }
        ];
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": questions
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default CompanySetupSchema;
