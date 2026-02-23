import React from 'react';
import { getTranslatedPath } from '@/utils/slugs';

interface StudentSchemaAIProps {
    lang: string;
}

/**
 * Enhanced Schema & structured data for AI bots
 * Thailand Student/Education Visa (Non-ED)
 */
export const StudentSchemaAI: React.FC<StudentSchemaAIProps> = ({ lang }) => {
    const baseUrl = 'https://www.siamvisapro.com';
    const pageUrl = `${baseUrl}${getTranslatedPath('student-visa', lang)}`;
    const currentDate = '2026-02-10';

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'What is the Thailand Education Visa (Non-ED)?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The Non-Immigrant ED visa (Education Visa) allows foreigners to study in Thailand. It covers Thai language courses, international schools, university programs, Muay Thai training, and other accredited educational programs. It is valid for 1 year (renewable) with 90-day extensions. It is one of the most affordable ways to stay long-term in Thailand.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What can I study on a Thailand Education Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Approved programs include: (1) Thai language courses at accredited schools, (2) International school or university programs, (3) Muay Thai training at certified gyms, (4) Thai cooking courses (accredited), (5) Buddhist meditation programs, (6) Vocational training. The school must be registered with the Thai Ministry of Education.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How much does the Thailand Education Visa cost?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Visa fee: ~2,000 THB (~€50) at embassy. Extension fee: 1,900 THB (~€50) every 90 days. School tuition varies: Thai language courses cost 20,000-60,000 THB/year, Muay Thai programs 15,000-40,000 THB/year. International schools and universities are significantly more expensive.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Can I work on a Thailand Education Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'No. Working on an Education Visa is not permitted. Attendance at your school is monitored, and schools report to Immigration. If caught working, your visa will be revoked. For working in Thailand, consider the Non-B visa (employment), DTV (remote work), or combining studies with a proper work authorization.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How long can I stay in Thailand on an Education Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The Education Visa is typically valid for 1 year. You receive 90-day stamps that are extended at Immigration as long as your enrollment is active. Many students renew for 2-3 consecutive years. There is no hard limit, but Immigration may scrutinize renewals after extended periods if you are not making academic progress.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What documents do I need for the Thailand Education Visa?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Required: (1) Passport with 6+ months validity, (2) Visa application form, (3) Acceptance letter from accredited Thai school, (4) School registration documents, (5) Proof of tuition payment, (6) Passport photos, (7) Proof of funds (~20,000 THB), (8) Criminal background check (some embassies). The school typically prepares the enrollment documentation.'
                }
            }
        ]
    };

    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Get a Thailand Education Visa in 2026',
        'description': 'Step-by-step guide to obtaining a Non-ED visa for studying in Thailand.',
        'totalTime': 'P21D',
        'estimatedCost': {
            '@type': 'MonetaryAmount',
            'currency': 'THB',
            'value': '2000'
        },
        'step': [
            {
                '@type': 'HowToStep',
                'position': 1,
                'name': 'Choose an accredited school or program',
                'text': 'Select a school registered with the Thai Ministry of Education. Popular options: Thai language schools, Muay Thai gyms, international universities.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 2,
                'name': 'Enroll and receive acceptance letter',
                'text': 'Register for your program and obtain an official acceptance letter and school documentation for visa application.',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 3,
                'name': 'Apply at Thai Embassy or convert in-country',
                'text': 'Apply at a Thai Embassy abroad with school documents, or convert from a tourist visa at Thai Immigration (if eligible).',
                'url': pageUrl
            },
            {
                '@type': 'HowToStep',
                'position': 4,
                'name': 'Attend classes and maintain enrollment',
                'text': 'Attend classes regularly. The school reports attendance to Immigration. Extend your 90-day stay at Immigration with updated enrollment proof.',
                'url': pageUrl
            }
        ]
    };

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Thailand Education Visa 2026: Student Visa Guide',
        'alternativeHeadline': 'Non-ED Visa Thailand — Study Thai, Muay Thai, University Programs',
        'description': 'Complete guide to the Thailand Education Visa (Non-ED) for 2026. Study Thai language, Muay Thai, or university programs. Requirements, costs, and application process.',
        'image': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
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
        'keywords': 'Thailand education visa, Non-ED visa, study in Thailand, Thai language school, Muay Thai visa, student visa 2026, learn Thai',
        'inLanguage': lang,
        'isAccessibleForFree': true
    };

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Education Visa Assistance — SiamVisa Pro',
        'description': 'Assistance for Thailand Education Visa. School selection, enrollment, visa application, and renewal support.',
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
        'name': 'Thailand Education Visa 2026 — Student Visa Guide',
        'url': pageUrl,
        'speakable': {
            '@type': 'SpeakableSpecification',
            'cssSelector': ['h1', '.hero-description', '.faq-answer']
        }
    };

    const definedTermSchema = {
        '@context': 'https://schema.org',
        '@type': 'DefinedTermSet',
        'name': 'Thailand Education Visa Terminology',
        'hasDefinedTerm': [
            {
                '@type': 'DefinedTerm',
                'name': 'Non-Immigrant ED Visa',
                'description': 'Education visa for Thailand allowing foreigners to study at accredited institutions. Valid for 1 year with 90-day extensions. Covers language, sports, academic, and vocational programs.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            },
            {
                '@type': 'DefinedTerm',
                'name': 'Ministry of Education Accreditation',
                'description': 'Thai government certification required for schools to sponsor Education Visas. Only accredited institutions can issue acceptance letters for visa applications.',
                'inDefinedTermSet': 'Thailand Immigration Terms'
            }
        ]
    };

    const comparisonSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Thailand Long-Stay Visa Comparison for Young Adults 2026',
        'description': 'Compare education visa with other options for staying long-term in Thailand.',
        'numberOfItems': 4,
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Education Visa (Non-ED)',
                'description': '1 year renewable, study required, no work, ~€50 + tuition',
                'url': `${baseUrl}${getTranslatedPath('student-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'DTV Visa (Destination Thailand Visa)',
                'description': '5 years, remote work allowed, 500K THB savings, ~€350',
                'url': `${baseUrl}${getTranslatedPath('dtv', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': 'Tourist Visa (TR)',
                'description': '60+30 days, no study/work, ~€30, short-term only',
                'url': `${baseUrl}${getTranslatedPath('tourist-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 4,
                'name': 'Volunteer Visa (Non-O Volunteer)',
                'description': '1 year, for registered NGO work, no salary, ~€50',
                'url': `${baseUrl}${getTranslatedPath('volunteer-visa', lang)}`
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
