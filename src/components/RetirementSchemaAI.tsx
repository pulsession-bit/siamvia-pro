import React from 'react';
import { getTranslatedPath } from '@/utils/slugs';

interface RetirementSchemaAIProps {
    lang: string;
}

/**
 * Enhanced Schema & structured data for AI bots (ChatGPT, Perplexity, Google AI Overviews)
 * Thailand Retirement Visa (Non-O / Non-OA)
 */
export const RetirementSchemaAI: React.FC<RetirementSchemaAIProps> = ({ lang }) => {
    const baseUrl = 'https://www.siamvisapro.com';
    const pageUrl = `${baseUrl}${getTranslatedPath('retirement-visa', lang)}`;
    const currentDate = '2026-02-10';

    // 1. FAQPage Schema
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'What is the Thailand Retirement Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The Thailand Retirement Visa (Non-Immigrant O or Non-OA) is a 1-year renewable visa for foreigners aged 50 and above. It allows retirees to live in Thailand long-term. The visa requires a deposit of 800,000 THB (~€20,000) in a Thai bank account or proof of monthly income of 65,000 THB (~€1,600). It does not allow employment.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What are the financial requirements for the Thailand Retirement Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'You must meet ONE of these requirements: (1) 800,000 THB (~€20,000 / ~$22,000) deposited in a Thai bank for at least 2 months before application and maintained for 3 months after, OR (2) Monthly income of at least 65,000 THB (~€1,600) from pension or other sources, OR (3) A combination of bank deposit + annual income totaling 800,000 THB.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How do I renew the Thailand Retirement Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The Retirement Visa is renewed annually at the local Thai Immigration office. You must file for renewal 30 days before expiry. Requirements for renewal are the same: maintain 800,000 THB in your Thai bank or prove 65,000 THB monthly income. You also need proof of address (TM.30) and a 90-day report history.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Can I work in Thailand with a Retirement Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'No. The Thailand Retirement Visa strictly prohibits any form of employment, including remote work. If you wish to work, consider the DTV visa (remote work), LTR visa (work permit included), or Non-B visa (Thai employment). Violating work restrictions can lead to visa revocation and deportation.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What is the difference between Non-O and Non-OA retirement visas?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Non-O (Retirement): Applied for inside Thailand or at embassy, 1-year extension, requires 800K THB in Thai bank. Non-OA: Applied only at embassy abroad, grants 1-year entry, requires health insurance (minimum $100K coverage), can be converted to Non-O once in Thailand. Non-OA has mandatory health insurance; Non-O does not (though recommended).'
                }
            },
            {
                '@type': 'Question',
                'name': 'Do I need health insurance for the Thailand Retirement Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'For Non-OA visa: Yes, mandatory health insurance with minimum $40,000 outpatient and $100,000 inpatient coverage from an approved Thai insurer. For Non-O visa: Not legally required but strongly recommended. Medical costs in Thailand can be high without insurance, and many immigration offices now request proof of coverage.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Can my spouse get a visa based on my Retirement Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Your spouse cannot directly derive a visa from your Retirement Visa. However, if married to a Thai national, your spouse can apply for their own Non-O (Marriage) visa. If your spouse is also 50+, they can apply for their own Retirement Visa independently. For younger spouses, the DTV dependent visa may be an option.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What documents do I need for the Thailand Retirement Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Required documents: (1) Passport with 1+ year validity, (2) Completed TM.7 application form, (3) Bank statement showing 800,000 THB or income letter from embassy, (4) Bank book update, (5) Passport photos, (6) Proof of address (rental contract + TM.30), (7) Medical certificate (for Non-OA), (8) Health insurance policy (for Non-OA). Police clearance may be required for first-time applicants.'
                }
            }
        ]
    };

    // 2. HowTo Schema
    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Apply for a Thailand Retirement Visa in 2026',
        'description': 'Step-by-step guide to obtaining the Thailand Retirement Visa (Non-O) for retirees aged 50+.',
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
                'name': 'Verify eligibility',
                'text': 'Confirm you are 50 years old or above with a valid passport. Ensure you have no criminal record and meet the financial requirements (800,000 THB deposit or 65,000 THB monthly income).',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 2,
                'name': 'Open a Thai bank account and deposit funds',
                'text': 'Open a bank account in Thailand (Bangkok Bank, Kasikorn, etc.) and deposit 800,000 THB. The money must season for at least 2 months before application.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 3,
                'name': 'Gather required documents',
                'text': 'Prepare passport, bank letter, bank book, photos, TM.7 form, proof of address, and TM.30 registration. For Non-OA, add medical certificate and health insurance.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 4,
                'name': 'Submit application at Immigration',
                'text': 'Apply at your local Thai Immigration office (or Thai embassy for Non-OA). Processing takes 1-7 business days. Fee is 1,900 THB for the 1-year extension.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 5,
                'name': 'Complete 90-day reporting and annual renewals',
                'text': 'Report your address every 90 days (online or in person). Renew your visa annually with updated financial proof. Maintain 800,000 THB in your account.',
                'url': pageUrl
            }
        ]
    };

    // 3. Article Schema
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Thailand Retirement Visa 2026: Complete Guide for Retirees 50+',
        'alternativeHeadline': 'Non-O Retirement Visa Thailand — Requirements, Costs, Renewal Process',
        'description': 'Comprehensive guide to the Thailand Retirement Visa for 2026. Financial requirements, application process, renewal, health insurance, and comparison with other long-stay visas.',
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
                'name': 'Thailand Retirement Visa (Non-O / Non-OA)',
                'serviceType': 'Retirement Visa',
                'provider': {
                    '@type': 'GovernmentOrganization',
                    'name': 'Thai Immigration Bureau',
                    'url': 'https://www.immigration.go.th'
                },
                'areaServed': {
                    '@type': 'Country',
                    'name': 'Thailand'
                }
            }
        ],
        'keywords': 'Thailand retirement visa, Non-O visa, retire in Thailand, 800000 THB, retirement visa 2026, Thailand retiree, pension visa Thailand',
        'inLanguage': lang,
        'isAccessibleForFree': true
    };

    // 4. Product Schema
    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Retirement Visa Application Assistance — SiamVisa Pro',
        'description': 'Professional assistance for your Thailand Retirement Visa. Bank account setup, document preparation, immigration office submission, and annual renewal support.',
        'brand': {
            '@type': 'Brand',
            'name': 'SiamVisa Pro'
        },
        'category': 'Immigration & Visa Services',
        'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'EUR',
            'lowPrice': '150',
            'highPrice': '500',
            'offerCount': '3',
            'availability': 'https://schema.org/InStock'
        },

    };

    // 5. Speakable Schema
    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Thailand Retirement Visa 2026 — Complete Guide',
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
        'name': 'Thailand Retirement Visa Terminology',
        'hasDefinedTerm': [
            {
                '@type': 'DefinedTerm',
                'name': 'Non-Immigrant O (Retirement)',
                'description': 'The primary retirement visa for Thailand, applied for inside the country or at embassies. Requires 800,000 THB deposit or 65,000 THB monthly income. Renewable annually.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'Non-OA (Long Stay)',
                'description': 'A variant of the retirement visa applied for only at Thai embassies abroad. Grants 1-year entry, requires mandatory health insurance with $100K inpatient coverage.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': '90-Day Reporting',
                'description': 'A requirement for all long-stay visa holders in Thailand to report their address to Immigration every 90 days. Can be done online, by mail, or in person.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            }
        ]
    };

    // 7. Comparison Schema
    const comparisonSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Thailand Retirement & Long-Stay Visa Comparison 2026',
        'description': 'Compare the Retirement Visa with other long-stay options for retirees in Thailand.',
        'numberOfItems': 4,
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Retirement Visa (Non-O)',
                'description': '1 year renewable, age 50+, 800K THB deposit, no work allowed, ~€50 fee',
                'url': `${baseUrl}${getTranslatedPath('retirement-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Thailand Elite Visa (Privilege Card)',
                'description': '5-20 years, any age, VIP perks, no financial proof needed, 600K-2M THB',
                'url': `${baseUrl}${getTranslatedPath('elite-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': 'LTR Visa — Wealthy Pensioner',
                'description': '10 years, $80K+/year pension, work permit, 17% flat tax, 50K THB fee',
                'url': `${baseUrl}${getTranslatedPath('ltr', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 4,
                'name': 'Family Visa (Non-O Marriage)',
                'description': '1 year renewable, married to Thai national, 400K THB deposit, work permit possible',
                'url': `${baseUrl}${getTranslatedPath('family-visa', lang)}`
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
