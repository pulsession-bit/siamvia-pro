'use client';

import React from 'react';

interface BuyPropertySchemaProps {
    lang: string;
}

const BuyPropertySchema: React.FC<BuyPropertySchemaProps> = ({ lang }) => {
    let questions = [];

    if (lang === 'fr') {
        questions = [
            {
                "@type": "Question",
                "name": "Un étranger peut-il acheter une villa en Thaïlande ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pas le terrain en nom propre. Vous pouvez acheter la construction (la maison) et louer le terrain via un bail de 30 ans (Leasehold) enregistré."
                }
            },
            {
                "@type": "Question",
                "name": "Est-ce qu'un condo est 100% à mon nom ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, si c'est un Condo Freehold dans le quota étranger. Vous obtenez un titre de propriété (Chanote) identique à un propriétaire thaïlandais."
                }
            },
            {
                "@type": "Question",
                "name": "Le bail de 90 ans (30+30+30) est-il légal ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Légalement, seul le bail de 30 ans est reconnu et enregistré. Les extensions sont contractuelles et ne constituent pas un droit réel opposable aux tiers en cas de vente du terrain."
                }
            }
        ];
    } else {
        // English (Default)
        questions = [
            {
                "@type": "Question",
                "name": "Can foreigners own land in Thailand?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Foreigners cannot directly own land in their name. However, they can own the building structure (house/villa) and secure the land through a 30-year registered lease (Leasehold) or Usufruct rights."
                }
            },
            {
                "@type": "Question",
                "name": "What is the safest way to buy property?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Buying a Freehold Condominium is the safest method, as foreigners can legally own 100% of the unit under the Foreign Quota. You receive a government-issued Title Deed (Chanote)."
                }
            },
            {
                "@type": "Question",
                "name": "Are 90-year leases valid in Thailand?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Under Thai Civil Code, the maximum registered lease term is 30 years. Any agreement for renewal (e.g., +30+30 years) is a private contract and not guaranteed by the Land Office."
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

export default BuyPropertySchema;
