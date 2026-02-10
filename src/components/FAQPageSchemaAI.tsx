import React from 'react';
import { getTranslatedPath } from '@/utils/slugs';

interface FAQPageSchemaAIProps {
    lang: string;
}

/**
 * Enhanced Schema & structured data for AI bots (ChatGPT, Perplexity, Google AI Overviews)
 * FAQ Page — Complements the dynamic FAQSchema with authority, speakable, and terminology schemas
 */
export const FAQPageSchemaAI: React.FC<FAQPageSchemaAIProps> = ({ lang }) => {
    const baseUrl = 'https://www.siamvisapro.com';
    const pageUrl = `${baseUrl}${getTranslatedPath('faq', lang)}`;
    const currentDate = '2026-02-10';

    // 1. Article Schema — Establishes authority for the FAQ content
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Thailand Visa FAQ 2026: All Your Questions Answered',
        'alternativeHeadline': 'Frequently Asked Questions About Thailand Visas — DTV, Elite, LTR, Retirement, Tourist, Business',
        'description': 'Comprehensive FAQ covering all Thailand visa types for 2026. Expert answers about DTV, Elite, LTR, Retirement, Tourist, Business, Student, SMART, Family, and Medical visas. Requirements, costs, processing times, and eligibility explained.',
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
                'name': 'Thailand Immigration Services',
                'serviceType': 'Visa & Immigration',
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
        'keywords': 'Thailand visa FAQ, visa questions, DTV FAQ, Elite visa FAQ, retirement visa FAQ, tourist visa FAQ, Thailand immigration 2026, visa requirements Thailand',
        'inLanguage': lang,
        'isAccessibleForFree': true
    };

    // 2. Speakable Schema — For voice assistants
    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Thailand Visa FAQ 2026 — Expert Answers',
        'url': pageUrl,
        'speakable': {
            '@type': 'SpeakableSpecification',
            'cssSelector': [
                'h1',
                'h2',
                'h3',
                '.faq-answer'
            ]
        }
    };

    // 3. DefinedTerm Schema — Core Thailand visa terminology for AI understanding
    const definedTermSchema = {
        '@context': 'https://schema.org',
        '@type': 'DefinedTermSet',
        'name': 'Thailand Visa & Immigration Terminology',
        'hasDefinedTerm': [
            {
                '@type': 'DefinedTerm',
                'name': 'DTV (Destination Thailand Visa)',
                'description': '5-year multiple-entry visa for digital nomads and remote workers. Launched 2024. Allows remote work for foreign employers. Requires 500,000 THB savings.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'Thailand Elite Visa (Privilege Card)',
                'description': 'Premium 5-20 year residency program with VIP airport services. Managed by Thailand Privilege Card Co., Ltd. Fees from 600,000 to 2,000,000 THB.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'LTR Visa (Long-Term Resident)',
                'description': '10-year visa for wealthy individuals and skilled professionals. Includes digital work permit and 17% flat tax. Processed by BOI.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'Non-Immigrant O (Retirement)',
                'description': '1-year renewable retirement visa for foreigners aged 50+. Requires 800,000 THB deposit or 65,000 THB monthly income.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'Non-Immigrant B (Business)',
                'description': 'Work and business visa for Thailand. Requires Thai employer and separate work permit from Ministry of Labour.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'SMART Visa',
                'description': 'Up to 4-year visa for experts in S-Curve targeted industries. Work permit included. No 90-day reporting. Processed by BOI.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'Visa Exemption',
                'description': 'Visa-free entry for eligible nationalities. Since 2024, most Western passports receive 60 days (previously 30). Extendable +30 days.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': '90-Day Reporting',
                'description': 'Requirement for all long-stay visa holders to report their address to Thai Immigration every 90 days. Can be done online, by post, or in person.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'TM.30',
                'description': 'Notification form that Thai landlords/hotels must file to report a foreign resident\'s address to Immigration within 24 hours of arrival.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'Re-entry Permit',
                'description': 'A permit required for most long-stay visa holders to leave and re-enter Thailand without losing their visa status. Single (1,000 THB) or multiple (3,800 THB).',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            }
        ]
    };

    // 4. ItemList Schema — Complete visa guide overview for AI
    const visaGuideSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Complete Thailand Visa Guide 2026',
        'description': 'All Thailand visa types explained with requirements, costs, and eligibility for 2026.',
        'numberOfItems': 10,
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'DTV Visa (Destination Thailand Visa)',
                'description': '5 years, remote work allowed, 500K THB savings, ~€350 fee, for digital nomads',
                'url': `${baseUrl}${getTranslatedPath('dtv', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Thailand Elite Visa (Privilege Card)',
                'description': '5-20 years, VIP service, no work, 600K-2M THB, for premium residents',
                'url': `${baseUrl}${getTranslatedPath('elite-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': 'LTR Visa (Long-Term Resident)',
                'description': '10 years, work permit, 17% flat tax, $80K+/yr income, for professionals',
                'url': `${baseUrl}${getTranslatedPath('ltr', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 4,
                'name': 'Retirement Visa (Non-O)',
                'description': '1 year renewable, age 50+, 800K THB deposit, no work, ~€50/yr',
                'url': `${baseUrl}${getTranslatedPath('retirement-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 5,
                'name': 'Tourist Visa (TR)',
                'description': '60+30 days, no work, ~€30, or 60 days visa-free for most Western passports',
                'url': `${baseUrl}${getTranslatedPath('tourist-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 6,
                'name': 'Business Visa (Non-B)',
                'description': '1 year with work permit, Thai employer needed, ~€100',
                'url': `${baseUrl}${getTranslatedPath('business-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 7,
                'name': 'Education Visa (Non-ED)',
                'description': '1 year renewable, study Thai/Muay Thai/university, no work, ~€50 + tuition',
                'url': `${baseUrl}${getTranslatedPath('student-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 8,
                'name': 'SMART Visa',
                'description': '4 years, work permit included, S-Curve industries, no 90-day report, free',
                'url': `${baseUrl}${getTranslatedPath('smart-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 9,
                'name': 'Family Visa (Non-O Marriage)',
                'description': '1 year renewable, married to Thai, 400K THB, work permit possible, ~€50/yr',
                'url': `${baseUrl}${getTranslatedPath('family-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 10,
                'name': 'Medical Visa (Non-MT)',
                'description': '90 days extendable, medical treatment, up to 4 companions, ~€50',
                'url': `${baseUrl}${getTranslatedPath('medical-visa', lang)}`
            }
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(visaGuideSchema) }} />
        </>
    );
};
