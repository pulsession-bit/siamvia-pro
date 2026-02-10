import React from 'react';
import { getTranslatedPath } from '@/utils/slugs';

interface SmartSchemaAIProps {
    lang: string;
}

/**
 * Enhanced Schema & structured data for AI bots
 * Thailand SMART Visa
 */
export const SmartSchemaAI: React.FC<SmartSchemaAIProps> = ({ lang }) => {
    const baseUrl = 'https://www.siamvisapro.com';
    const pageUrl = `${baseUrl}${getTranslatedPath('smart-visa', lang)}`;
    const currentDate = '2026-02-10';

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'What is the Thailand SMART Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The SMART Visa is a special visa for highly skilled professionals, investors, executives, and startups in Thailand\'s targeted industries (S-Curve industries). It offers up to 4 years of stay, includes a work permit, and exempts holders from 90-day reporting. It was launched in 2018 by BOI (Board of Investment) to attract global talent.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What are the SMART Visa categories?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'There are 4 categories: (1) SMART T (Talent) — Highly skilled experts with $50K+/year salary, up to 4 years, (2) SMART I (Investor) — Investors with 20M+ THB investment in targeted industries, up to 4 years, (3) SMART E (Executive) — Senior executives with $100K+/year salary, up to 4 years, (4) SMART S (Startup) — Startup founders with 600K+ THB capital, up to 2 years. Dependents receive SMART O visas.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What are the targeted industries for the SMART Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The 13 S-Curve targeted industries are: (1) Next-gen automotive, (2) Smart electronics, (3) Medical & wellness tourism, (4) Agriculture & biotech, (5) Food processing, (6) Robotics & AI, (7) Aviation & logistics, (8) Biofuels & biochemicals, (9) Digital economy, (10) Medical hub, (11) Defense, (12) Human resource development, (13) Environmental management. Your expertise must align with at least one of these.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How much does the SMART Visa cost?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The SMART Visa application is processed by BOI and is free of charge for the visa itself. However, applicants must meet income thresholds: SMART T ($50K+/year), SMART E ($100K+/year), SMART I (20M+ THB investment). Professional endorsement from a relevant Thai government agency is also required.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What are the benefits of the SMART Visa vs Non-B?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'SMART Visa advantages over Non-B: (1) Up to 4 years (vs 1 year), (2) Work permit included automatically, (3) No 90-day reporting requirement, (4) Spouse gets SMART O with own work permit, (5) No need for separate work permit application, (6) Can work for multiple companies. The main drawback is stricter eligibility requirements and longer processing time.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How long does the SMART Visa application take?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The SMART Visa process typically takes 30-45 business days: (1) Online application at smart-visa.boi.go.th (~1 week review), (2) Endorsement from relevant government agency (2-3 weeks), (3) BOI approval (1-2 weeks), (4) Visa issuance at Immigration (1 week). Total: approximately 6-8 weeks from application to visa in hand.'
                }
            }
        ]
    };

    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Apply for a Thailand SMART Visa in 2026',
        'description': 'Step-by-step guide to obtaining the Thailand SMART Visa for skilled professionals and investors.',
        'totalTime': 'P45D',
        'step': [
            {
                '@type': 'HowToStep',
                'position': 1,
                'name': 'Verify eligibility and targeted industry',
                'text': 'Confirm your expertise aligns with one of the 13 S-Curve industries and you meet the income/investment threshold for your category.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 2,
                'name': 'Prepare endorsement documents',
                'text': 'Gather employment contracts, qualifications, salary proof, and industry certifications. Apply for endorsement from the relevant Thai government agency.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 3,
                'name': 'Submit online application to BOI',
                'text': 'Apply through smart-visa.boi.go.th with all required documents and agency endorsement.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 4,
                'name': 'BOI review and approval',
                'text': 'BOI reviews your application (2-4 weeks). If approved, receive your SMART Visa at Immigration or Thai Embassy.',
                'url': pageUrl
            }
        ]
    };

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Thailand SMART Visa 2026: Guide for Skilled Professionals & Investors',
        'alternativeHeadline': 'SMART Visa Thailand — Categories, Requirements, Targeted Industries',
        'description': 'Complete guide to the Thailand SMART Visa for 2026. Learn about SMART T, I, E, S categories, targeted industries, benefits over Non-B, and application process.',
        'image': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80',
        'datePublished': '2025-06-01',
        'dateModified': currentDate,
        'author': {
            '@type': 'Person',
            'name': 'Raphaël Buresi',
            'url': 'https://www.linkedin.com/in/raphael-buresi-4a9562a/',
            'jobTitle': 'Thailand Visa Expert & Immigration Consultant',
            'worksFor': { '@type': 'Organization', 'name': 'SiamVisa Pro', 'url': baseUrl }
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'SiamVisa Pro',
            'url': baseUrl,
            'logo': { '@type': 'ImageObject', 'url': `${baseUrl}/favicon.ico` }
        },
        'mainEntityOfPage': { '@type': 'WebPage', '@id': pageUrl },
        'keywords': 'SMART visa Thailand, S-Curve industries, work in Thailand, BOI visa, tech visa Thailand, investor visa Thailand, SMART visa 2026',
        'inLanguage': lang,
        'isAccessibleForFree': true
    };

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'SMART Visa Application Assistance — SiamVisa Pro',
        'description': 'Professional assistance for Thailand SMART Visa. Category assessment, endorsement support, BOI application, and document preparation.',
        'brand': { '@type': 'Brand', 'name': 'SiamVisa Pro' },
        'category': 'Immigration & Visa Services',
        'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'EUR',
            'lowPrice': '500',
            'highPrice': '2000',
            'offerCount': '3',
            'availability': 'https://schema.org/InStock'
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '42',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Thailand SMART Visa 2026 — Complete Guide',
        'url': pageUrl,
        'speakable': {
            '@type': 'SpeakableSpecification',
            'cssSelector': ['h1', '.hero-description', '.faq-answer']
        }
    };

    const definedTermSchema = {
        '@context': 'https://schema.org',
        '@type': 'DefinedTermSet',
        'name': 'Thailand SMART Visa Terminology',
        'hasDefinedTerm': [
            {
                '@type': 'DefinedTerm',
                'name': 'S-Curve Industries',
                'description': 'Thailand\'s 13 targeted industries for economic development: automotive, electronics, medical, agriculture, food, robotics/AI, aviation, biofuels, digital, medical hub, defense, HR, environment. SMART Visa applicants must work in one of these sectors.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'SMART T (Talent)',
                'description': 'SMART Visa category for highly skilled professionals with $50,000+/year salary working in S-Curve industries. Grants up to 4 years with automatic work permit.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'SMART S (Startup)',
                'description': 'SMART Visa category for startup founders with 600,000+ THB capital in a targeted industry. Grants up to 2 years with incubation support from Thai government agencies.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            }
        ]
    };

    const comparisonSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Thailand Professional Visa Comparison 2026',
        'description': 'Compare the SMART Visa with other professional visa options in Thailand.',
        'numberOfItems': 4,
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'SMART Visa',
                'description': '4 years, work permit included, no 90-day report, S-Curve industries only, free',
                'url': `${baseUrl}${getTranslatedPath('smart-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'LTR Visa (Long-Term Resident)',
                'description': '10 years, work permit, 17% flat tax, $80K+ income, any industry, 50K THB',
                'url': `${baseUrl}${getTranslatedPath('ltr', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': 'Business Visa (Non-B)',
                'description': '1 year, separate work permit needed, any industry, Thai employer required, ~€100',
                'url': `${baseUrl}${getTranslatedPath('business-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 4,
                'name': 'DTV Visa (Remote Work)',
                'description': '5 years, remote work only, no Thai employer needed, ~€350',
                'url': `${baseUrl}${getTranslatedPath('dtv', lang)}`
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
