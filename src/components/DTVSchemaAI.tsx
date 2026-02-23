import React from 'react';
import { getTranslatedPath } from '@/utils/slugs';

interface DTVSchemaAIProps {
    lang: string;
}

/**
 * Enhanced Schema & structured data for AI bots (ChatGPT, Perplexity, Google AI Overviews)
 * 
 * Includes:
 * - FAQPage schema (for AI snippet extraction)
 * - HowTo schema (step-by-step process)
 * - Product schema (visa as product with features)
 * - Article schema (for content authority)
 * - Speakable schema (for voice assistants)
 * - Government-service schema
 */
export const DTVSchemaAI: React.FC<DTVSchemaAIProps> = ({ lang }) => {
    const baseUrl = 'https://www.siamvisapro.com';
    const pageUrl = `${baseUrl}${getTranslatedPath('dtv', lang)}`;
    const currentDate = '2026-02-10';

    // 1. FAQPage Schema — Most important for AI extraction
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'What is the DTV visa (Destination Thailand Visa)?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The DTV (Destination Thailand Visa) is a 5-year multiple-entry visa launched in 2024 by the Thai government. It allows digital nomads, remote workers, freelancers, and soft power enthusiasts (Muay Thai, cooking, music) to live and work legally in Thailand. Each entry permits a stay of up to 180 days, extendable by another 180 days. The visa requires proof of 500,000 THB (~$13,500) in savings.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Who is eligible for the Thailand DTV visa in 2026?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The DTV visa is available to: (1) Remote workers employed by companies outside Thailand, (2) Freelancers and digital nomads with client contracts, (3) Soft power participants (Muay Thai training, Thai cooking classes, traditional medicine, music, arts), (4) Spouses and children under 20 of DTV holders (dependent visa). Applicants must show 500,000 THB in savings and provide a professional portfolio.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How much does the DTV visa cost?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The official embassy/consulate fee for the DTV visa is approximately 10,000 THB (~€250-350). Additionally, applicants need to show proof of 500,000 THB (~$13,500 / ~€13,000) in their bank account at the time of application. The money does not need to be blocked — it just needs to be visible. Professional assistance services (portfolio preparation, document review) cost extra.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Can I work legally on a DTV visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes. The DTV is the first Thai visa that explicitly permits remote work for foreign employers without requiring a Thai work permit. You can legally work remotely for clients or employers outside Thailand. However, you cannot work for a Thai company or perform local employment — that requires a Non-B visa with a work permit.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How long can I stay in Thailand with a DTV visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The DTV visa is valid for 5 years with multiple entries. Each entry allows a stay of up to 180 days, which can be extended once for an additional 180 days at a Thai immigration office (total 360 days per entry). You can exit and re-enter Thailand freely during the 5-year validity period.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Can my family join me on a DTV visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes. Your legal spouse and children under 20 years old can obtain a DTV Dependent visa linked to yours. They benefit from the same conditions: 5-year validity, 180-day stays, and multiple entries.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Am I tax resident in Thailand with a DTV visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Not necessarily. If your income is sourced from outside Thailand and is not remitted to Thailand in the same fiscal year, you are generally not subject to Thai income tax (subject to the 180-day rule). However, spending more than 180 days in Thailand in a calendar year may trigger tax residency. Consult a qualified tax advisor for your specific situation.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What documents are needed for a DTV visa application?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Required documents include: (1) Valid passport with 6+ months validity, (2) Completed visa application form, (3) Professional portfolio proving remote work or soft power activity, (4) Bank statement showing 500,000 THB or equivalent, (5) Employment contract or freelance contracts, (6) Passport-sized photos, (7) Flight itinerary or proof of travel plans. The professional portfolio is the most critical document and the #1 reason for refusal when poorly prepared.'
                }
            }
        ]
    };

    // 2. HowTo Schema — Step-by-step process for AI extraction
    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Apply for a Thailand DTV Visa in 2026',
        'description': 'Step-by-step guide to obtaining the Destination Thailand Visa (DTV) for digital nomads and remote workers.',
        'totalTime': 'P15D',
        'estimatedCost': {
            '@type': 'MonetaryAmount',
            'currency': 'THB',
            'value': '10000'
        },
        'step': [
            {
                '@type': 'HowToStep',
                'position': 1,
                'name': 'Check your eligibility',
                'text': 'Verify you meet the DTV requirements: remote worker, freelancer, or soft power participant. Confirm you have at least 500,000 THB in savings.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 2,
                'name': 'Prepare your professional portfolio',
                'text': 'Create a comprehensive portfolio proving your remote work activity, including employment contracts, client agreements, income proof, and a professional CV. This is the most critical document.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 3,
                'name': 'Gather required documents',
                'text': 'Collect: passport (6+ months validity), bank statements, passport photos, application form, and supporting documents.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 4,
                'name': 'Submit your application',
                'text': 'Apply at a Thai Embassy or Consulate in your country of residence. Some consulates accept online applications. Processing takes 5-15 business days.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 5,
                'name': 'Receive your visa and travel',
                'text': 'Once approved, your DTV visa sticker is placed in your passport. Enter Thailand within the specified period and enjoy up to 180 days per entry.',
                'url': pageUrl
            }
        ]
    };

    // 3. Article Schema — Establishes content authority for AI
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Thailand DTV Visa 2026: Complete Guide for Digital Nomads',
        'alternativeHeadline': 'Destination Thailand Visa — Requirements, Cost, and Application Process',
        'description': 'Comprehensive guide to the DTV visa (Destination Thailand Visa) for 2026. Learn about eligibility, costs, application process, and how to work legally as a digital nomad in Thailand.',
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
                'name': 'Destination Thailand Visa (DTV)',
                'serviceType': 'Visa',
                'provider': {
                    '@type': 'GovernmentOrganization',
                    'name': 'Royal Thai Government',
                    'url': 'https://www.mfa.go.th'
                },
                'areaServed': {
                    '@type': 'Country',
                    'name': 'Thailand'
                }
            }
        ],
        'keywords': 'DTV visa, Destination Thailand Visa, digital nomad Thailand, remote work Thailand, Thailand visa 2026, work visa Thailand, nomad visa, freelancer visa Thailand',
        'inLanguage': lang,
        'isAccessibleForFree': true
    };

    // 4. Product Schema — Treats the visa service as a product (rich snippets)
    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'DTV Visa Application Assistance — SiamVisa Pro',
        'description': 'Professional assistance for your DTV visa application. Portfolio preparation, document review, and embassy submission support. 95%+ approval rate.',
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

    };

    // 5. Speakable Schema — For voice assistants (Alexa, Google Assistant, Siri)
    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'DTV Visa Thailand 2026 — Complete Guide',
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

    // 6. DefinedTerm Schema — Helps AI understand the terminology
    const definedTermSchema = {
        '@context': 'https://schema.org',
        '@type': 'DefinedTermSet',
        'name': 'Thailand Visa Terminology',
        'hasDefinedTerm': [
            {
                '@type': 'DefinedTerm',
                'name': 'DTV',
                'description': 'Destination Thailand Visa — A 5-year multiple-entry visa for digital nomads, remote workers, and soft power participants introduced by the Thai government in 2024.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'Soft Power Activities',
                'description': 'Cultural activities recognized by the Thai government for DTV eligibility, including Muay Thai, Thai cooking, traditional medicine, Thai massage, music, film, fashion, and festivals.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'Professional Portfolio',
                'description': 'A structured document required for DTV visa applications proving the applicant\'s remote work activity or soft power engagement. Includes contracts, CV, income proof, and activity description.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            }
        ]
    };

    // 7. ItemList Schema — Comparison with other visas (AI loves comparisons)
    const comparisonSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Thailand Long-Stay Visa Comparison 2026',
        'description': 'Compare the DTV visa with other long-stay visa options in Thailand.',
        'numberOfItems': 4,
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'DTV Visa (Destination Thailand Visa)',
                'description': '5-year multiple entry, 180 days/entry, remote work allowed, 500K THB required, ~€350 fee',
                'url': `${baseUrl}${getTranslatedPath('dtv', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Thailand Elite Visa',
                'description': '5-20 years, unlimited stays, VIP airport service, 600K-2M THB fee, no work permit',
                'url': `${baseUrl}${getTranslatedPath('elite-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': 'LTR Visa (Long-Term Resident)',
                'description': '10-year visa, work permit included, 17% flat tax, for wealthy/skilled professionals, $80K+ income required',
                'url': `${baseUrl}${getTranslatedPath('ltr', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 4,
                'name': 'Tourist Visa (TR)',
                'description': '60 days +30 extension, no work allowed, low cost, ideal for short stays',
                'url': `${baseUrl}${getTranslatedPath('tourist-visa', lang)}`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
            />
        </>
    );
};
