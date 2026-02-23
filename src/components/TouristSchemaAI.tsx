import React from 'react';
import { getTranslatedPath } from '@/utils/slugs';

interface TouristSchemaAIProps {
    lang: string;
}

/**
 * Enhanced Schema & structured data for AI bots
 * Thailand Tourist Visa (TR)
 */
export const TouristSchemaAI: React.FC<TouristSchemaAIProps> = ({ lang }) => {
    const baseUrl = 'https://www.siamvisapro.com';
    const pageUrl = `${baseUrl}${getTranslatedPath('tourist-visa', lang)}`;
    const currentDate = '2026-02-10';

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'What is the Thailand Tourist Visa (TR)?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The Thailand Tourist Visa (TR) is a single or multiple entry visa for travelers visiting Thailand for tourism purposes. It grants a 60-day stay, extendable by 30 days at a Thai Immigration office (total 90 days). It is the most common visa for tourists planning to stay longer than the 30-day visa exemption.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How long can I stay in Thailand with a Tourist Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'A single-entry Tourist Visa allows 60 days, extendable once for 30 more days (90 days total). A multiple-entry Tourist Visa (METV) allows multiple 60-day entries over 6 months. Note: since 2024, visa exemption allows 60 days for many nationalities without any visa.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How much does the Thailand Tourist Visa cost?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Single-entry Tourist Visa: ~1,000 THB (~€25-35). Multiple-entry Tourist Visa (METV): ~5,000 THB (~€130). Extension at immigration: 1,900 THB (~€50). Many nationalities can enter visa-free for 60 days, making the Tourist Visa primarily useful for stays over 60 days or when visa exemption is unavailable.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Can I work in Thailand with a Tourist Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'No. Working on a Tourist Visa is strictly illegal and can result in arrest, fines, detention, and deportation. This includes both physical employment and remote work. For working in Thailand, consider the DTV visa (remote work), Non-B visa (Thai employment), or LTR visa (work permit included).'
                }
            },
            {
                '@type': 'Question',
                'name': 'What is the difference between visa exemption and Tourist Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Visa exemption: No visa needed, 60 days (since 2024 for most nationalities), extendable +30 days, free. Tourist Visa (TR): Applied at embassy, 60 days, extendable +30 days, costs ~€30. The Tourist Visa is mainly useful for nationalities not eligible for visa exemption or for METV (multiple entries over 6 months).'
                }
            },
            {
                '@type': 'Question',
                'name': 'What documents do I need for a Thailand Tourist Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Required: (1) Passport with 6+ months validity, (2) Completed visa application form, (3) Passport photo, (4) Proof of accommodation (hotel booking), (5) Return flight ticket, (6) Proof of funds (bank statement showing ~20,000 THB/person), (7) Travel insurance (recommended). Requirements vary by embassy.'
                }
            }
        ]
    };

    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Apply for a Thailand Tourist Visa in 2026',
        'description': 'Step-by-step guide to obtaining a Thailand Tourist Visa for stays longer than the visa exemption period.',
        'totalTime': 'P10D',
        'estimatedCost': {
            '@type': 'MonetaryAmount',
            'currency': 'THB',
            'value': '1000'
        },
        'step': [
            {
                '@type': 'HowToStep',
                'position': 1,
                'name': 'Check if you need a Tourist Visa',
                'text': 'Many nationalities enjoy 60-day visa exemption. Check if your passport qualifies for visa-free entry before applying for a Tourist Visa.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 2,
                'name': 'Prepare required documents',
                'text': 'Gather passport, photos, hotel booking, return flight, bank statement, and application form.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 3,
                'name': 'Apply at Thai Embassy or e-Visa',
                'text': 'Submit your application at the nearest Thai Embassy/Consulate or through the e-Visa online portal (available for select countries).',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 4,
                'name': 'Receive visa and travel',
                'text': 'Processing takes 3-5 business days. Once approved, enter Thailand within 90 days of issue date.',
                'url': pageUrl
            }
        ]
    };

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Thailand Tourist Visa 2026: Complete Guide',
        'alternativeHeadline': 'Thailand TR Visa — Requirements, Cost, Extension, vs Visa Exemption',
        'description': 'Everything you need to know about the Thailand Tourist Visa in 2026. Compare with visa exemption, learn about extensions, costs, and application process.',
        'image': 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=80',
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
        'keywords': 'Thailand tourist visa, TR visa, visa exemption Thailand, tourist visa 2026, Thailand travel visa, METV Thailand',
        'inLanguage': lang,
        'isAccessibleForFree': true
    };

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Tourist Visa Assistance — SiamVisa Pro',
        'description': 'Assistance for Thailand Tourist Visa applications. Document preparation, embassy submission, and extension support.',
        'brand': { '@type': 'Brand', 'name': 'SiamVisa Pro' },
        'category': 'Immigration & Visa Services',
        'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'EUR',
            'lowPrice': '50',
            'highPrice': '200',
            'offerCount': '2',
            'availability': 'https://schema.org/InStock'
        },

    };

    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Thailand Tourist Visa 2026 — Complete Guide',
        'url': pageUrl,
        'speakable': {
            '@type': 'SpeakableSpecification',
            'cssSelector': ['h1', '.hero-description', '.faq-answer']
        }
    };

    const definedTermSchema = {
        '@context': 'https://schema.org',
        '@type': 'DefinedTermSet',
        'name': 'Thailand Tourist Visa Terminology',
        'hasDefinedTerm': [
            {
                '@type': 'DefinedTerm',
                'name': 'Visa Exemption',
                'description': 'Entry into Thailand without a visa for eligible nationalities. Since 2024, most Western passport holders receive 60 days visa-free (previously 30 days).',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'METV (Multiple Entry Tourist Visa)',
                'description': 'A 6-month tourist visa allowing unlimited 60-day entries. Costs ~5,000 THB. Ideal for travelers making multiple trips to Thailand.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'Visa Run',
                'description': 'The practice of leaving Thailand and re-entering to reset the visa-free stay period. Common at land borders (Cambodia, Laos, Malaysia, Myanmar).',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            }
        ]
    };

    const comparisonSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Thailand Short & Medium Stay Visa Comparison 2026',
        'description': 'Compare tourist visa options for visiting Thailand.',
        'numberOfItems': 4,
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Tourist Visa (TR)',
                'description': '60 days +30 extension, no work, ~€30, applied at embassy',
                'url': `${baseUrl}${getTranslatedPath('tourist-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Visa Exemption',
                'description': '60 days (since 2024), no work, free, passport stamp on arrival',
                'url': `${baseUrl}${getTranslatedPath('exemption-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': 'DTV Visa (Destination Thailand Visa)',
                'description': '5 years, 180 days/entry, remote work OK, ~€350',
                'url': `${baseUrl}${getTranslatedPath('dtv', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 4,
                'name': 'Medical Visa (Non-MT)',
                'description': '60 days, for medical treatment, extendable, ~€50',
                'url': `${baseUrl}${getTranslatedPath('medical-visa', lang)}`
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
