import React from 'react';
import { getTranslatedPath } from '@/utils/slugs';

interface FamilySchemaAIProps {
    lang: string;
}

/**
 * Enhanced Schema & structured data for AI bots
 * Thailand Family Visa (Non-O Marriage / Guardian)
 */
export const FamilySchemaAI: React.FC<FamilySchemaAIProps> = ({ lang }) => {
    const baseUrl = 'https://www.siamvisapro.com';
    const pageUrl = `${baseUrl}${getTranslatedPath('family-visa', lang)}`;
    const currentDate = '2026-02-10';

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'What is the Thailand Family Visa (Non-O)?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The Thailand Family Visa (Non-Immigrant O) is for foreigners married to a Thai national or who are parents/guardians of Thai children. It grants a 1-year renewable stay and allows application for a work permit. The financial requirement is 400,000 THB (~€10,000) in a Thai bank or monthly income of 40,000 THB (~€1,000).'
                }
            },
            {
                '@type': 'Question',
                'name': 'What are the financial requirements for the Thailand Marriage Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'For a marriage-based Non-O visa: 400,000 THB (~€10,000) deposited in a Thai bank for at least 2 months, OR monthly income of 40,000 THB (~€1,000), OR a combination totaling 400,000 THB/year. This is half the requirement of the Retirement Visa (800,000 THB).'
                }
            },
            {
                '@type': 'Question',
                'name': 'Can I work in Thailand with a Family Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The Family Visa itself does not grant work rights, but unlike the Retirement Visa, you CAN apply for a work permit while on a Non-O (Marriage) visa. You need a Thai employer willing to sponsor your work permit. Alternatively, the DTV visa allows remote work without a Thai employer.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What documents are needed for the Thailand Marriage Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Required: (1) Passport with 1+ year validity, (2) Thai marriage certificate (Kor Ror 2), (3) Spouse\'s Thai ID card and house registration, (4) Bank statement (400K THB), (5) Marriage photos, (6) Map to your residence, (7) TM.30 residence report, (8) Completed TM.7 form. Some offices may require an interview with both spouses.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How do I get a Thai marriage certificate?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Steps: (1) Obtain an affirmation of freedom to marry from your embassy in Bangkok, (2) Have it translated into Thai and certified by the MFA, (3) Register the marriage at the local Amphoe (district office) with your Thai spouse. The process takes 2-5 days. You need your passport, affirmation letter, and spouse\'s Thai ID.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Can I get a Family Visa as a parent of a Thai child?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes. If you are the parent or legal guardian of a Thai child (under 20), you can apply for a Non-O (Guardian) visa. Requirements: proof of parentage (birth certificate), Thai child\'s ID/house registration, 400,000 THB in bank. You do not need to be married to the Thai parent.'
                }
            }
        ]
    };

    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Get a Thailand Family/Marriage Visa in 2026',
        'description': 'Step-by-step guide to obtaining the Thailand Non-O visa for marriage or guardianship of a Thai child.',
        'totalTime': 'P30D',
        'estimatedCost': {
            '@type': 'MonetaryAmount',
            'currency': 'THB',
            'value': '1900'
        },
        'step': [
            {
                '@type': 'HowToStep',
                'position': 1,
                'name': 'Register your marriage in Thailand',
                'text': 'Obtain embassy affirmation, translate and certify at MFA, register at local Amphoe. Skip if already married or applying as guardian.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 2,
                'name': 'Open Thai bank account and deposit funds',
                'text': 'Deposit 400,000 THB in a Thai bank. The money must be seasoned for at least 2 months before applying for the 1-year extension.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 3,
                'name': 'Gather required documents',
                'text': 'Collect marriage certificate, spouse\'s documents, bank statements, photos, TM.30, and completed application form.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 4,
                'name': 'Apply at Immigration for 1-year extension',
                'text': 'Submit at your local Immigration office. Processing takes 1-7 days. Fee: 1,900 THB. Some offices conduct home visits.',
                'url': pageUrl
            }
        ]
    };

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Thailand Family Visa 2026: Marriage & Guardian Visa Guide',
        'alternativeHeadline': 'Non-O Marriage Visa Thailand — Requirements, Costs, Work Permit',
        'description': 'Complete guide to the Thailand Family Visa (Non-O) for 2026. Marriage registration, financial requirements, work permit eligibility, and guardian visa for parents of Thai children.',
        'image': 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=1200&q=80',
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
        'keywords': 'Thailand marriage visa, Non-O visa, family visa Thailand, Thai spouse visa, guardian visa, marriage in Thailand 2026',
        'inLanguage': lang,
        'isAccessibleForFree': true
    };

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Family Visa Assistance — SiamVisa Pro',
        'description': 'Complete marriage visa and guardian visa processing. Marriage registration, document preparation, immigration submission, and annual renewal.',
        'brand': { '@type': 'Brand', 'name': 'SiamVisa Pro' },
        'category': 'Immigration & Visa Services',
        'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'EUR',
            'lowPrice': '200',
            'highPrice': '600',
            'offerCount': '3',
            'availability': 'https://schema.org/InStock'
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '95',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Thailand Family Visa 2026 — Marriage & Guardian Guide',
        'url': pageUrl,
        'speakable': {
            '@type': 'SpeakableSpecification',
            'cssSelector': ['h1', '.hero-description', '.faq-answer']
        }
    };

    const definedTermSchema = {
        '@context': 'https://schema.org',
        '@type': 'DefinedTermSet',
        'name': 'Thailand Family Visa Terminology',
        'hasDefinedTerm': [
            {
                '@type': 'DefinedTerm',
                'name': 'Non-O Marriage Visa',
                'description': 'A Non-Immigrant O visa based on marriage to a Thai national. Requires 400,000 THB financial proof. Renewable annually at Immigration. Allows work permit application.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'Kor Ror 2 (Marriage Certificate)',
                'description': 'The official Thai marriage certificate issued by the Amphoe (district office). Required document for Non-O marriage visa applications.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'Affirmation of Freedom to Marry',
                'description': 'A document issued by your home country\'s embassy in Bangkok confirming you are legally free to marry. Required before registering a marriage in Thailand.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            }
        ]
    };

    const comparisonSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Thailand Family & Long-Stay Visa Comparison 2026',
        'description': 'Compare family visa options with other long-stay visas in Thailand.',
        'numberOfItems': 4,
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Family Visa (Non-O Marriage)',
                'description': '1 year renewable, 400K THB, work permit possible, married to Thai national',
                'url': `${baseUrl}${getTranslatedPath('family-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Retirement Visa (Non-O)',
                'description': '1 year renewable, 800K THB, no work allowed, age 50+',
                'url': `${baseUrl}${getTranslatedPath('retirement-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': 'DTV Visa (Destination Thailand Visa)',
                'description': '5 years, dependents eligible, remote work OK, 500K THB savings',
                'url': `${baseUrl}${getTranslatedPath('dtv', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 4,
                'name': 'Thailand Elite Visa',
                'description': '5-20 years, family packages available, no work, 600K+ THB',
                'url': `${baseUrl}${getTranslatedPath('elite-visa', lang)}`
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
