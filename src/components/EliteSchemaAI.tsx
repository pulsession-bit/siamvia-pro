import React from 'react';
import { getTranslatedPath } from '@/utils/slugs';

interface EliteSchemaAIProps {
    lang: string;
}

/**
 * Enhanced Schema & structured data for AI bots (ChatGPT, Perplexity, Google AI Overviews)
 * Thailand Elite Visa (Privilege Card)
 */
export const EliteSchemaAI: React.FC<EliteSchemaAIProps> = ({ lang }) => {
    const baseUrl = 'https://www.siamvisapro.com';
    const pageUrl = `${baseUrl}${getTranslatedPath('elite-visa', lang)}`;
    const currentDate = '2026-02-10';

    // 1. FAQPage Schema
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'What is the Thailand Elite Visa (Privilege Card)?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The Thailand Elite Visa (now called Thailand Privilege Card) is a premium long-stay visa program offering 5 to 20 years of residency in Thailand. Launched in 2003 by the Thai government, it provides VIP airport services, luxury lounge access, government concierge, and unlimited entries. Membership fees range from 600,000 THB to 2 million THB depending on the package.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How much does the Thailand Elite Visa cost in 2026?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Thailand Elite Visa packages in 2026 start at 600,000 THB (~€15,000) for the 5-year Gold membership, 1,000,000 THB (~€25,000) for the 10-year Platinum, and up to 2,000,000 THB (~€50,000) for the 20-year Diamond package. Family packages are also available with discounted rates for spouses and children.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Can I work in Thailand with an Elite Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'No. The Thailand Elite Visa does not grant a work permit. It is strictly a long-stay residency visa. To work legally in Thailand, you need a Non-B visa with a work permit, a SMART visa, or an LTR visa. However, remote work for foreign employers is generally tolerated but not explicitly authorized like the DTV visa.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What are the benefits of the Thailand Elite Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Key benefits include: (1) VIP airport fast-track and limousine transfers, (2) 90-day report assistance, (3) Government concierge services (driving license, banking), (4) Annual health checkup, (5) Complimentary golf, spa, and dining privileges, (6) Multiple unlimited entries, (7) No need to leave Thailand for visa runs, (8) No financial requirements beyond the membership fee.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Who is eligible for the Thailand Elite Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Almost anyone can qualify. There are no age, income, or employment requirements. The main criteria are: (1) Valid passport from an eligible country, (2) No criminal record in Thailand, (3) Not on the Thai immigration blacklist, (4) Ability to pay the membership fee. It is the easiest long-stay visa to obtain in Thailand.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How long does the Thailand Elite Visa application take?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Processing typically takes 2-4 weeks for approval after submitting a complete application. Once approved, the membership card is issued within 2-3 weeks. First entry can be made immediately after receiving the approval letter. Total process from application to first entry: approximately 4-8 weeks.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Can I include my family on the Thailand Elite Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes. Thailand Privilege offers family packages. Spouses and children can be added at discounted rates. The Elite Family Premium package (800,000 THB for 5 years per member) or similar family bundles provide the same VIP benefits to all family members.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Is the Thailand Elite Visa worth it compared to other visas?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'It depends on your profile. The Elite Visa is ideal if you want hassle-free long-term residency without work requirements. Compared to DTV (€350, 5 years, work allowed), LTR (€1,600, 10 years, work permit), or Retirement visa (€50/year, age 50+), the Elite is the most expensive but offers the most convenience with zero administrative burden and VIP perks.'
                }
            }
        ]
    };

    // 2. HowTo Schema
    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Apply for a Thailand Elite Visa (Privilege Card) in 2026',
        'description': 'Step-by-step guide to obtaining the Thailand Elite Visa for long-term residency with VIP benefits.',
        'totalTime': 'P42D',
        'estimatedCost': {
            '@type': 'MonetaryAmount',
            'currency': 'THB',
            'value': '600000'
        },
        'step': [
            {
                '@type': 'HowToStep',
                'position': 1,
                'name': 'Choose your membership package',
                'text': 'Select from Gold (5 years, 600K THB), Platinum (10 years, 1M THB), or Diamond (20 years, 2M THB). Family options available.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 2,
                'name': 'Submit your application',
                'text': 'Complete the online application form with passport copy, photo, and personal details. No financial proof required beyond the membership fee.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 3,
                'name': 'Background check and approval',
                'text': 'Thailand Privilege processes your application and conducts a background check. This takes 2-4 weeks.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 4,
                'name': 'Pay the membership fee',
                'text': 'Once approved, pay the membership fee via bank transfer. Payment can be made in THB or equivalent foreign currency.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 5,
                'name': 'Receive your membership and enter Thailand',
                'text': 'Receive your Thailand Privilege membership card and approval letter. Enter Thailand with VIP airport fast-track and limousine service on your first arrival.',
                'url': pageUrl
            }
        ]
    };

    // 3. Article Schema
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Thailand Elite Visa 2026: Complete Guide to the Privilege Card',
        'alternativeHeadline': 'Thailand Privilege Card — Packages, Costs, Benefits, and Application Process',
        'description': 'Comprehensive guide to the Thailand Elite Visa (Privilege Card) for 2026. Compare packages, learn about VIP benefits, costs, and how to apply for long-term residency.',
        'image': 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1200&q=80',
        'datePublished': '2025-06-01',
        'dateModified': currentDate,
        'author': {
            '@type': 'Person',
            'name': 'Raphaël Buresi',
            'url': 'https://www.linkedin.com/in/raphael-buresi-4a9562a/',
            'jobTitle': 'Thailand Visa Expert & Immigration Consultant',
            'worksFor': {
                '@type': 'Organization',
                'name': 'SiamVisa Pro',
                'url': baseUrl
            }
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'SiamVisa Pro',
            'url': baseUrl,
            'logo': {
                '@type': 'ImageObject',
                'url': `${baseUrl}/favicon.ico`
            }
        },
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': pageUrl
        },
        'about': [
            {
                '@type': 'GovernmentService',
                'name': 'Thailand Privilege Card (Elite Visa)',
                'serviceType': 'Long-term Residency Visa',
                'provider': {
                    '@type': 'GovernmentOrganization',
                    'name': 'Thailand Privilege Card Co., Ltd.',
                    'url': 'https://www.thailandprivilege.com'
                },
                'areaServed': {
                    '@type': 'Country',
                    'name': 'Thailand'
                }
            }
        ],
        'keywords': 'Thailand Elite Visa, Thailand Privilege Card, long-stay Thailand, VIP visa Thailand, Elite visa cost, Elite visa 2026, Thailand residency',
        'inLanguage': lang,
        'isAccessibleForFree': true
    };

    // 4. Product Schema
    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Thailand Elite Visa Application Assistance — SiamVisa Pro',
        'description': 'Professional assistance for your Thailand Elite Visa application. Package selection, application support, and VIP onboarding.',
        'brand': {
            '@type': 'Brand',
            'name': 'SiamVisa Pro'
        },
        'category': 'Immigration & Visa Services',
        'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'EUR',
            'lowPrice': '250',
            'highPrice': '900',
            'offerCount': '3',
            'availability': 'https://schema.org/InStock'
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '89',
            'bestRating': '5',
            'worstRating': '1'
        },
        'review': [
            {
                '@type': 'Review',
                'reviewRating': {
                    '@type': 'Rating',
                    'ratingValue': '5',
                    'bestRating': '5'
                },
                'author': {
                    '@type': 'Person',
                    'name': 'James W.'
                },
                'reviewBody': 'SiamVisa Pro made the Elite Visa process seamless. Got my Platinum membership approved in 3 weeks. VIP service from start to finish.',
                'datePublished': '2025-10-20'
            },
            {
                '@type': 'Review',
                'reviewRating': {
                    '@type': 'Rating',
                    'ratingValue': '5',
                    'bestRating': '5'
                },
                'author': {
                    '@type': 'Person',
                    'name': 'Sophie M.'
                },
                'reviewBody': 'Excellent conseil pour choisir le bon package Elite. L\'équipe a tout géré, de la candidature à l\'accueil VIP à l\'aéroport.',
                'datePublished': '2025-12-10'
            }
        ]
    };

    // 5. Speakable Schema
    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Thailand Elite Visa 2026 — Complete Guide',
        'url': pageUrl,
        'speakable': {
            '@type': 'SpeakableSpecification',
            'cssSelector': [
                'h1',
                '.hero-description',
                '.faq-answer'
            ]
        }
    };

    // 6. DefinedTerm Schema
    const definedTermSchema = {
        '@context': 'https://schema.org',
        '@type': 'DefinedTermSet',
        'name': 'Thailand Elite Visa Terminology',
        'hasDefinedTerm': [
            {
                '@type': 'DefinedTerm',
                'name': 'Thailand Privilege Card',
                'description': 'The official name (since 2023) for the Thailand Elite Visa program, managed by Thailand Privilege Card Co., Ltd. Offers 5-20 year memberships with VIP benefits.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'Elite Gold',
                'description': 'The entry-level Thailand Privilege membership: 5-year validity, 600,000 THB, includes VIP airport service, government concierge, and annual health checkup.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'VIP Airport Fast-Track',
                'description': 'Exclusive service for Thailand Elite members: personal escort through immigration, limousine transfer, and lounge access at Suvarnabhumi and Don Mueang airports.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            }
        ]
    };

    // 7. Comparison Schema
    const comparisonSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Thailand Premium Visa Comparison 2026',
        'description': 'Compare the Thailand Elite Visa with other long-stay visa options.',
        'numberOfItems': 4,
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Thailand Elite Visa (Privilege Card)',
                'description': '5-20 years, unlimited entries, VIP airport service, no work permit, 600K-2M THB fee',
                'url': `${baseUrl}${getTranslatedPath('elite-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'DTV Visa (Destination Thailand Visa)',
                'description': '5 years, 180 days/entry, remote work allowed, 500K THB savings required, ~€350 fee',
                'url': `${baseUrl}${getTranslatedPath('dtv', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': 'LTR Visa (Long-Term Resident)',
                'description': '10 years, work permit included, 17% flat tax, $80K+ income required',
                'url': `${baseUrl}${getTranslatedPath('ltr', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 4,
                'name': 'Retirement Visa (Non-O)',
                'description': '1 year renewable, age 50+, 800K THB in bank, no work allowed, ~€50 fee',
                'url': `${baseUrl}${getTranslatedPath('retirement-visa', lang)}`
            }
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
        </>
    );
};
