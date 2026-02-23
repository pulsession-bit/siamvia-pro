import React from 'react';
import { getTranslatedPath } from '@/utils/slugs';

interface MedicalSchemaAIProps {
    lang: string;
}

/**
 * Enhanced Schema & structured data for AI bots
 * Thailand Medical Visa (Non-MT)
 */
export const MedicalSchemaAI: React.FC<MedicalSchemaAIProps> = ({ lang }) => {
    const baseUrl = 'https://www.siamvisapro.com';
    const pageUrl = `${baseUrl}${getTranslatedPath('medical-visa', lang)}`;
    const currentDate = '2026-02-10';

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'What is the Thailand Medical Visa (Non-MT)?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The Thailand Medical Treatment visa (Non-Immigrant MT) is for foreigners seeking medical treatment in Thailand. It allows a stay of up to 90 days, extendable based on treatment duration. Thailand is a world-renowned medical tourism destination with JCI-accredited hospitals offering treatments at a fraction of Western prices.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What medical treatments are covered by the Thailand Medical Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'All medical treatments at accredited Thai hospitals qualify: (1) Elective surgery (cosmetic, dental, orthopedic), (2) Cancer treatment, (3) Cardiac procedures, (4) Fertility treatments (IVF), (5) Gender reassignment surgery, (6) Wellness and rehabilitation programs, (7) Thai traditional medicine. The hospital must provide a treatment plan for the visa application.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How much does the Thailand Medical Visa cost?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The Medical Visa fee is approximately 2,000 THB (~€50) at embassy. Extensions at Immigration cost 1,900 THB (~€50). The visa itself is affordable — the main costs are medical treatment and hospital stays. Thailand\'s medical costs are typically 50-80% lower than in Western countries.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How long can I stay in Thailand on a Medical Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Initial stay is 90 days. Extensions are granted based on medical necessity — your doctor must provide a letter confirming ongoing treatment. Total stay can extend to 1 year or more for complex treatments. Up to 4 companions/attendants can receive accompanying visas.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Can my family accompany me on a Medical Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes. Up to 4 companions (family members or attendants) can receive Non-MT visas linked to the patient\'s visa. They receive the same duration and extension rights. This is designed to allow family support during treatment and recovery.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Which hospitals in Thailand accept Medical Visa patients?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Major hospitals include: Bumrungrad International Hospital, Bangkok Hospital, Samitivej Hospital, BNH Hospital, Chulalongkorn Hospital, and Phuket International Hospital. Most JCI-accredited hospitals can issue treatment plans for visa applications. Thailand has over 60 JCI-accredited healthcare facilities.'
                }
            }
        ]
    };

    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Get a Thailand Medical Visa in 2026',
        'description': 'Step-by-step guide to obtaining a Medical Treatment visa (Non-MT) for healthcare in Thailand.',
        'totalTime': 'P14D',
        'estimatedCost': {
            '@type': 'MonetaryAmount',
            'currency': 'THB',
            'value': '2000'
        },
        'step': [
            {
                '@type': 'HowToStep',
                'position': 1,
                'name': 'Choose a hospital and treatment plan',
                'text': 'Contact a Thai hospital for consultation. Obtain a treatment plan and appointment confirmation letter for your visa application.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 2,
                'name': 'Gather required documents',
                'text': 'Prepare passport, hospital appointment letter, treatment plan, proof of funds, and application form.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 3,
                'name': 'Apply at Thai Embassy',
                'text': 'Submit your Medical Visa application at the nearest Thai Embassy or Consulate. Processing takes 3-5 business days.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 4,
                'name': 'Travel and receive treatment',
                'text': 'Enter Thailand and begin your treatment. Extend your stay at Immigration if treatment requires more than 90 days.',
                'url': pageUrl
            }
        ]
    };

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Thailand Medical Visa 2026: Healthcare & Medical Tourism Guide',
        'alternativeHeadline': 'Non-MT Visa Thailand — Medical Treatment, Hospitals, Requirements',
        'description': 'Complete guide to the Thailand Medical Visa (Non-MT) for 2026. Medical tourism, hospital selection, treatment costs, and visa application process.',
        'image': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
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
        'keywords': 'Thailand medical visa, Non-MT visa, medical tourism Thailand, hospital Thailand, healthcare Thailand 2026, Bumrungrad, Bangkok Hospital',
        'inLanguage': lang,
        'isAccessibleForFree': true
    };

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Medical Visa Assistance — SiamVisa Pro',
        'description': 'Assistance for Thailand Medical Visa. Hospital coordination, treatment plan documentation, visa application, and extension support.',
        'brand': { '@type': 'Brand', 'name': 'SiamVisa Pro' },
        'category': 'Immigration & Visa Services',
        'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'EUR',
            'lowPrice': '100',
            'highPrice': '400',
            'offerCount': '2',
            'availability': 'https://schema.org/InStock'
        },

    };

    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Thailand Medical Visa 2026 — Healthcare Guide',
        'url': pageUrl,
        'speakable': {
            '@type': 'SpeakableSpecification',
            'cssSelector': ['h1', '.hero-description', '.faq-answer']
        }
    };

    const definedTermSchema = {
        '@context': 'https://schema.org',
        '@type': 'DefinedTermSet',
        'name': 'Thailand Medical Visa Terminology',
        'hasDefinedTerm': [
            {
                '@type': 'DefinedTerm',
                'name': 'Non-MT Visa (Medical Treatment)',
                'description': 'Thai visa category for foreigners seeking medical treatment. Allows 90 days initially, extendable based on treatment needs. Up to 4 companions allowed.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'JCI Accreditation',
                'description': 'Joint Commission International accreditation — the gold standard for international hospital quality. Thailand has 60+ JCI-accredited facilities, among the highest in Southeast Asia.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            }
        ]
    };

    const comparisonSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Thailand Short-Stay Visa Comparison 2026',
        'description': 'Compare medical visa with other short-stay options in Thailand.',
        'numberOfItems': 4,
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Medical Visa (Non-MT)',
                'description': '90 days extendable, for medical treatment, up to 4 companions, ~€50',
                'url': `${baseUrl}${getTranslatedPath('medical-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Tourist Visa (TR)',
                'description': '60+30 days, tourism only, no treatment extension, ~€30',
                'url': `${baseUrl}${getTranslatedPath('tourist-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': 'Visa Exemption',
                'description': '60 days free, no extension for medical, many nationalities eligible',
                'url': `${baseUrl}${getTranslatedPath('exemption-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 4,
                'name': 'Elite Visa (Long-term care)',
                'description': '5-20 years, annual health checkup included, VIP hospital access, 600K+ THB',
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
