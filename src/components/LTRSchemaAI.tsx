import React from 'react';
import { getTranslatedPath } from '@/utils/slugs';

interface LTRSchemaAIProps {
    lang: string;
}

/**
 * Enhanced Schema & structured data for AI bots (ChatGPT, Perplexity, Google AI Overviews)
 * Thailand LTR Visa (Long-Term Resident)
 */
export const LTRSchemaAI: React.FC<LTRSchemaAIProps> = ({ lang }) => {
    const baseUrl = 'https://www.siamvisapro.com';
    const pageUrl = `${baseUrl}${getTranslatedPath('ltr', lang)}`;
    const currentDate = '2026-02-10';

    // 1. FAQPage Schema
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'What is the Thailand LTR Visa (Long-Term Resident)?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The LTR (Long-Term Resident) visa is a 10-year visa launched in 2022 by the Thai government to attract wealthy individuals, retirees, remote workers, and highly skilled professionals. It includes a digital work permit, 17% flat income tax rate, and exemption from the 90-day reporting requirement. It is one of the most advantageous visas in Thailand for high-income earners.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What are the 4 categories of the LTR visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The LTR visa has 4 categories: (1) Wealthy Global Citizen — $1M+ in assets and $80K+/year income, (2) Wealthy Pensioner — $80K+/year pension or $250K+ in assets with $40K+/year, (3) Work-from-Thailand Professional — $80K+/year income working for a company with $150M+ revenue, (4) Highly Skilled Professional — expertise in targeted industries (tech, science, etc.) with $80K+/year or $40K+ with advanced degree.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How much does the LTR visa cost?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The LTR visa application fee is 50,000 THB (~€1,300). There is no annual renewal fee — the visa is valid for 10 years. The digital work permit is included at no extra cost. Compared to Elite (600K-2M THB) or DTV (10K THB), the LTR is moderately priced but has strict income requirements.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Can I work in Thailand with an LTR visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes. The LTR visa includes a digital work permit, allowing you to work legally in Thailand for both Thai and foreign employers. This is a major advantage over the Elite visa (no work allowed) and DTV (remote work only). You can also benefit from a 17% flat income tax rate instead of the progressive rates up to 35%.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What are the income requirements for the LTR visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Most categories require $80,000+/year in income or pension. The Wealthy Pensioner category accepts $40,000+/year with $250,000+ in assets. The Highly Skilled Professional category accepts $40,000+/year with a master\'s degree or higher in a targeted field. All income must be documented with tax returns or employer certification.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What tax benefits does the LTR visa offer?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'LTR visa holders enjoy a 17% flat income tax rate (vs. up to 35% standard), exemption from the requirement to file Thai taxes on foreign-sourced income for certain categories, and no double taxation thanks to Thailand\'s tax treaties. Wealthy Global Citizens and Wealthy Pensioners are exempt from Thai tax on foreign income entirely.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How long does the LTR visa application take?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The LTR visa application is processed by BOI (Board of Investment). Typical processing time is 20-30 business days after submitting a complete application. Pre-qualification can be done online. Once approved, the visa is stamped in your passport at a Thai immigration office or embassy.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Can my family join me on an LTR visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes. LTR visa holders can add up to 4 dependents (spouse and children). Dependents receive the same 10-year visa with identical benefits including work permits and tax advantages. Each dependent pays a separate 50,000 THB application fee.'
                }
            }
        ]
    };

    // 2. HowTo Schema
    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Apply for a Thailand LTR Visa in 2026',
        'description': 'Step-by-step guide to obtaining the Thailand Long-Term Resident visa for high-income professionals and investors.',
        'totalTime': 'P45D',
        'estimatedCost': {
            '@type': 'MonetaryAmount',
            'currency': 'THB',
            'value': '50000'
        },
        'step': [
            {
                '@type': 'HowToStep',
                'position': 1,
                'name': 'Determine your LTR category',
                'text': 'Identify which of the 4 LTR categories you qualify for: Wealthy Global Citizen, Wealthy Pensioner, Work-from-Thailand Professional, or Highly Skilled Professional.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 2,
                'name': 'Gather financial documentation',
                'text': 'Prepare income proof ($80K+/year), tax returns, bank statements, employment contracts, or asset documentation. Advanced degree certificates if applying as Highly Skilled Professional.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 3,
                'name': 'Submit online pre-qualification',
                'text': 'Apply through the BOI (Board of Investment) online portal at ltr.boi.go.th. Upload all required documents for pre-qualification review.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 4,
                'name': 'BOI review and approval',
                'text': 'BOI reviews your application (20-30 business days). If approved, you receive an endorsement letter for visa issuance.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 5,
                'name': 'Obtain your LTR visa stamp',
                'text': 'Present your BOI endorsement at a Thai immigration office or embassy to receive your 10-year LTR visa stamp and digital work permit.',
                'url': pageUrl
            }
        ]
    };

    // 3. Article Schema
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Thailand LTR Visa 2026: Complete Guide for High-Income Professionals',
        'alternativeHeadline': 'Long-Term Resident Visa Thailand — Categories, Requirements, Tax Benefits',
        'description': 'Comprehensive guide to the Thailand LTR visa for 2026. Learn about the 4 categories, income requirements, 17% flat tax, work permit, and application process.',
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
                'name': 'Thailand LTR Visa (Long-Term Resident)',
                'serviceType': 'Long-term Residency Visa',
                'provider': {
                    '@type': 'GovernmentOrganization',
                    'name': 'Board of Investment (BOI)',
                    'url': 'https://www.boi.go.th'
                },
                'areaServed': {
                    '@type': 'Country',
                    'name': 'Thailand'
                }
            }
        ],
        'keywords': 'LTR visa Thailand, Long-Term Resident visa, Thailand work permit, 17% tax Thailand, BOI visa, Thailand visa 2026, high income visa Thailand',
        'inLanguage': lang,
        'isAccessibleForFree': true
    };

    // 4. Product Schema
    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'LTR Visa Application Assistance — SiamVisa Pro',
        'description': 'Professional assistance for your Thailand LTR visa application. Category assessment, document preparation, BOI submission support. High approval rate.',
        'brand': {
            '@type': 'Brand',
            'name': 'SiamVisa Pro'
        },
        'category': 'Immigration & Visa Services',
        'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'EUR',
            'lowPrice': '500',
            'highPrice': '1500',
            'offerCount': '3',
            'availability': 'https://schema.org/InStock'
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '64',
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
                    'name': 'Michael R.'
                },
                'reviewBody': 'Applied for LTR as a Work-from-Thailand Professional. SiamVisa Pro handled the entire BOI process. Approved in 25 days. Highly recommend.',
                'datePublished': '2025-11-08'
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
                    'name': 'Catherine D.'
                },
                'reviewBody': 'Processus LTR complexe mais très bien accompagné. Le 17% flat tax est un énorme avantage. Merci SiamVisa Pro !',
                'datePublished': '2025-12-22'
            }
        ]
    };

    // 5. Speakable Schema
    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Thailand LTR Visa 2026 — Complete Guide',
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
        'name': 'Thailand LTR Visa Terminology',
        'hasDefinedTerm': [
            {
                '@type': 'DefinedTerm',
                'name': 'LTR Visa',
                'description': 'Long-Term Resident visa — A 10-year visa program launched by Thailand in 2022 for wealthy individuals, retirees, remote workers, and skilled professionals. Managed by BOI (Board of Investment).',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'Digital Work Permit',
                'description': 'An electronic work permit issued automatically to LTR visa holders, allowing legal employment in Thailand without the traditional paper-based work permit process.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'BOI (Board of Investment)',
                'description': 'The Thai government agency responsible for processing LTR visa applications and promoting foreign investment in Thailand.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            }
        ]
    };

    // 7. Comparison Schema
    const comparisonSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Thailand Long-Stay Visa Comparison 2026',
        'description': 'Compare the LTR visa with other premium long-stay visa options in Thailand.',
        'numberOfItems': 4,
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'LTR Visa (Long-Term Resident)',
                'description': '10 years, work permit included, 17% flat tax, $80K+ income, 50K THB fee',
                'url': `${baseUrl}${getTranslatedPath('ltr', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Thailand Elite Visa (Privilege Card)',
                'description': '5-20 years, unlimited stays, VIP service, no work, 600K-2M THB fee',
                'url': `${baseUrl}${getTranslatedPath('elite-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': 'DTV Visa (Destination Thailand Visa)',
                'description': '5 years, 180 days/entry, remote work allowed, 500K THB savings, ~€350 fee',
                'url': `${baseUrl}${getTranslatedPath('dtv', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 4,
                'name': 'SMART Visa',
                'description': '4 years, work permit included, for tech/science experts, no 90-day reporting',
                'url': `${baseUrl}${getTranslatedPath('smart-visa', lang)}`
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
