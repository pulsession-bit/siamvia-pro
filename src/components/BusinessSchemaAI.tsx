import React from 'react';
import { getTranslatedPath } from '@/utils/slugs';

interface BusinessSchemaAIProps {
    lang: string;
}

/**
 * Enhanced Schema & structured data for AI bots
 * Thailand Business Visa (Non-B)
 */
export const BusinessSchemaAI: React.FC<BusinessSchemaAIProps> = ({ lang }) => {
    const baseUrl = 'https://www.siamvisapro.com';
    const pageUrl = `${baseUrl}${getTranslatedPath('business-visa', lang)}`;
    const currentDate = '2026-02-10';

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'What is the Thailand Business Visa (Non-B)?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The Non-Immigrant B visa (Non-B) is the standard work and business visa for Thailand. It allows foreigners to work for Thai companies, establish businesses, or conduct business activities in the country. It is issued for 90 days initially and can be extended to 1 year with a valid work permit. A work permit is mandatory to work legally on a Non-B visa.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What is the difference between Non-B and work permit in Thailand?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The Non-B visa allows you to enter and stay in Thailand for business purposes. The Work Permit (issued by the Ministry of Labour) authorizes you to actually work. You need BOTH: the Non-B visa to stay, and the work permit to work. The work permit specifies your employer, job title, and work location. Working without a work permit is illegal even with a Non-B visa.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How much does the Thailand Business Visa cost?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Non-B visa fee: ~2,000 THB (~€50) at embassy. Work permit: ~3,000 THB (~€75). Annual extension: 1,900 THB (~€50). The employer typically covers the work permit costs. Additional costs include document legalization and translation. BOI or IEAT companies may benefit from streamlined processing.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Who is eligible for the Thailand Business Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Eligible applicants include: (1) Employees of Thai-registered companies, (2) Business owners and directors of Thai companies, (3) Teachers and lecturers at Thai institutions, (4) Foreigners attending business meetings (short-term). The employer must be registered in Thailand with proper capitalization (2M THB per foreign worker, or 4:1 Thai-to-foreign employee ratio).'
                }
            },
            {
                '@type': 'Question',
                'name': 'Can I start my own business in Thailand on a Non-B visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes, but with restrictions. Foreigners can own up to 49% of a Thai Limited Company (unless BOI promoted or under certain treaties). You need a minimum registered capital of 2 million THB per foreign worker. The company must employ at least 4 Thai employees per foreign worker. BOI-promoted companies enjoy relaxed ownership and employment ratio requirements.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What documents are needed for the Thailand Business Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Required: (1) Passport with 6+ months validity, (2) Completed visa application, (3) Company registration documents (affidavit, shareholder list), (4) Employment contract or invitation letter, (5) Company financial statements, (6) WP.3 form (work permit application), (7) Photos, (8) Proof of qualifications. The Thai employer handles most company-side documents.'
                }
            }
        ]
    };

    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Get a Thailand Business Visa and Work Permit in 2026',
        'description': 'Step-by-step guide to obtaining a Non-B visa and work permit for working legally in Thailand.',
        'totalTime': 'P30D',
        'estimatedCost': {
            '@type': 'MonetaryAmount',
            'currency': 'THB',
            'value': '5000'
        },
        'step': [
            {
                '@type': 'HowToStep',
                'position': 1,
                'name': 'Secure employment or register a company',
                'text': 'Get a job offer from a Thai company or register your own Thai Limited Company with proper capitalization.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 2,
                'name': 'Apply for Non-B visa at embassy',
                'text': 'Submit application at a Thai Embassy with company documents, employment contract, and personal documents.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 3,
                'name': 'Enter Thailand and apply for work permit',
                'text': 'Enter on your Non-B visa and apply for a work permit at the Ministry of Labour within 90 days.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 4,
                'name': 'Extend visa to 1 year',
                'text': 'With work permit in hand, extend your Non-B visa to 1 year at Immigration. Renew annually.',
                'url': pageUrl
            }
        ]
    };

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Thailand Business Visa 2026: Non-B Visa & Work Permit Guide',
        'alternativeHeadline': 'Non-Immigrant B Visa Thailand — Requirements, Work Permit, Company Setup',
        'description': 'Complete guide to the Thailand Business Visa (Non-B) for 2026. Work permit process, company requirements, costs, and comparison with other work visas.',
        'image': 'https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=1200&q=80',
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
        'keywords': 'Thailand business visa, Non-B visa, work permit Thailand, Thai company setup, BOI Thailand, work in Thailand 2026',
        'inLanguage': lang,
        'isAccessibleForFree': true
    };

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Business Visa & Work Permit Assistance — SiamVisa Pro',
        'description': 'Complete Non-B visa and work permit processing. Company registration, document preparation, and annual renewal support.',
        'brand': { '@type': 'Brand', 'name': 'SiamVisa Pro' },
        'category': 'Immigration & Visa Services',
        'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'EUR',
            'lowPrice': '300',
            'highPrice': '1200',
            'offerCount': '3',
            'availability': 'https://schema.org/InStock'
        },

    };

    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Thailand Business Visa 2026 — Non-B & Work Permit Guide',
        'url': pageUrl,
        'speakable': {
            '@type': 'SpeakableSpecification',
            'cssSelector': ['h1', '.hero-description', '.faq-answer']
        }
    };

    const definedTermSchema = {
        '@context': 'https://schema.org',
        '@type': 'DefinedTermSet',
        'name': 'Thailand Business Visa Terminology',
        'hasDefinedTerm': [
            {
                '@type': 'DefinedTerm',
                'name': 'Non-Immigrant B Visa',
                'description': 'The standard business and employment visa for Thailand. Required for anyone working for a Thai employer. Must be paired with a Work Permit issued by the Ministry of Labour.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'Work Permit (WP)',
                'description': 'A document issued by the Thai Ministry of Labour authorizing a foreigner to work in Thailand. Specifies employer, job title, and location. Required alongside a Non-B visa for legal employment.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'BOI Promotion',
                'description': 'Board of Investment promotional privileges for companies in targeted industries. BOI-promoted companies enjoy relaxed foreign ownership rules, streamlined work permits, and tax incentives.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            }
        ]
    };

    const comparisonSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Thailand Work Visa Comparison 2026',
        'description': 'Compare business and work visa options in Thailand.',
        'numberOfItems': 4,
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Business Visa (Non-B) + Work Permit',
                'description': '1 year renewable, Thai employer required, full work rights, ~€100 total fee',
                'url': `${baseUrl}${getTranslatedPath('business-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'DTV Visa (Remote Work)',
                'description': '5 years, remote work for foreign employers only, no Thai work permit, ~€350',
                'url': `${baseUrl}${getTranslatedPath('dtv', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': 'SMART Visa',
                'description': '4 years, work permit included, for tech/science experts, no 90-day reporting',
                'url': `${baseUrl}${getTranslatedPath('smart-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 4,
                'name': 'LTR Visa (Highly Skilled Professional)',
                'description': '10 years, digital work permit, 17% flat tax, $80K+ income required',
                'url': `${baseUrl}${getTranslatedPath('ltr', lang)}`
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
