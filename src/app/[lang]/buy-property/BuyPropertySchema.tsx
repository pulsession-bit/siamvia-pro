'use client';

import React from 'react';

const BuyPropertySchema = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Un étranger peut-il acheter un condo en Thaïlande ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, un étranger peut acheter une unité de condominium en nom propre, sous réserve du quota étranger (souvent présenté comme 49% des surfaces)."
                }
            },
            {
                "@type": "Question",
                "name": "Un étranger peut-il acheter un terrain ou une maison ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La propriété foncière directe est très limitée. La pratique consiste plutôt à sécuriser un droit (leasehold enregistré, usufruit, superficies) selon le cas."
                }
            },
            {
                "@type": "Question",
                "name": "Quels sont les frais de transfert typiques au Land Office ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Selon les cas : transfer fee 2%, stamp duty 0.5% ou specific business tax 3.3%, et withholding tax selon le profil du vendeur."
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

export default BuyPropertySchema;
