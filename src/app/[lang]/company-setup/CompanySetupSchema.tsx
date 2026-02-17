'use client';

import React from 'react';

const CompanySetupSchema = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
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
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default CompanySetupSchema;
