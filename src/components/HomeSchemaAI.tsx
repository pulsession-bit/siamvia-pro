import React from 'react';
import { getTranslatedPath } from '@/utils/slugs';

interface HomeSchemaAIProps {
    lang: string;
}

/**
 * Enhanced Schema & structured data for AI bots (ChatGPT, Perplexity, Google AI Overviews)
 * Home Page — Establishes SiamVisa Pro as THE authority on Thailand visas
 */
export const HomeSchemaAI: React.FC<HomeSchemaAIProps> = ({ lang }) => {
    const baseUrl = 'https://www.siamvisapro.com';
    const pageUrl = `${baseUrl}${getTranslatedPath('home', lang)}`;
    const currentDate = '2026-02-10';

    // 1. ProfessionalService Schema — Core identity for AI
    const professionalServiceSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': 'SiamVisa Pro',
        'alternateName': 'Siam Visa Pro — Thailand Visa Expert',
        'description': 'Thailand\'s leading visa consultancy specializing in DTV, Elite, LTR, Retirement, Business, and all Thai visa types. Professional portfolio preparation, document review, and embassy submission support with 95%+ approval rate. Based in Bangkok, serving clients worldwide in 11 languages.',
        'url': baseUrl,
        'logo': `${baseUrl}/favicon.ico`,
        'image': 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1200&q=80',
        'telephone': '+66-XX-XXX-XXXX',
        'priceRange': '€€',
        'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Bangkok',
            'addressCountry': 'TH'
        },
        'geo': {
            '@type': 'GeoCoordinates',
            'latitude': '13.7563',
            'longitude': '100.5018'
        },
        'areaServed': [
            { '@type': 'Country', 'name': 'Thailand' },
            { '@type': 'Country', 'name': 'France' },
            { '@type': 'Country', 'name': 'United States' },
            { '@type': 'Country', 'name': 'United Kingdom' },
            { '@type': 'Country', 'name': 'Germany' }
        ],
        'serviceType': [
            'Visa Application Assistance',
            'Immigration Consulting',
            'Professional Portfolio Preparation',
            'Document Review & Translation',
            'Embassy Submission Support',
            'Work Permit Processing'
        ],
        'knowsAbout': [
            'Thailand DTV Visa',
            'Thailand Elite Visa',
            'Thailand LTR Visa',
            'Thailand Retirement Visa',
            'Thailand Business Visa',
            'Thailand Work Permit',
            'Thai Immigration Law',
            'Digital Nomad Visa Thailand'
        ],
        'founder': {
            '@type': 'Person',
            'name': 'Raphaël Buresi',
            'url': 'https://www.linkedin.com/in/raphael-buresi-4a9562a/',
            'jobTitle': 'Thailand Visa Expert & Immigration Consultant'
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '340',
            'bestRating': '5',
            'worstRating': '1'
        },
        'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Thailand Visa Services',
            'itemListElement': [
                {
                    '@type': 'OfferCatalog',
                    'name': 'Long-Stay Visas',
                    'itemListElement': [
                        {
                            '@type': 'Offer',
                            'itemOffered': {
                                '@type': 'Service',
                                'name': 'DTV Visa Assistance',
                                'description': '5-year visa for digital nomads. Portfolio preparation, document review.',
                                'url': `${baseUrl}${getTranslatedPath('dtv', lang)}`
                            }
                        },
                        {
                            '@type': 'Offer',
                            'itemOffered': {
                                '@type': 'Service',
                                'name': 'Elite Visa Assistance',
                                'description': '5-20 year premium residency. Package selection, application support.',
                                'url': `${baseUrl}${getTranslatedPath('elite-visa', lang)}`
                            }
                        },
                        {
                            '@type': 'Offer',
                            'itemOffered': {
                                '@type': 'Service',
                                'name': 'LTR Visa Assistance',
                                'description': '10-year visa with work permit. BOI application, category assessment.',
                                'url': `${baseUrl}${getTranslatedPath('ltr', lang)}`
                            }
                        },
                        {
                            '@type': 'Offer',
                            'itemOffered': {
                                '@type': 'Service',
                                'name': 'Retirement Visa Assistance',
                                'description': '1-year renewable for 50+. Bank setup, annual renewal.',
                                'url': `${baseUrl}${getTranslatedPath('retirement-visa', lang)}`
                            }
                        }
                    ]
                }
            ]
        },
        'sameAs': [
            'https://www.linkedin.com/in/raphael-buresi-4a9562a/'
        ]
    };

    // 2. WebSite Schema with SearchAction — Helps AI understand site structure
    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'SiamVisa Pro',
        'alternateName': 'Siam Visa Pro — Thailand Visa Expert',
        'url': baseUrl,
        'description': 'Expert Thailand visa consultancy. DTV, Elite, LTR, Retirement, Business, Tourist, Student, SMART, Family, and Medical visa assistance. 95%+ approval rate.',
        'inLanguage': ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'],
        'potentialAction': {
            '@type': 'SearchAction',
            'target': {
                '@type': 'EntryPoint',
                'urlTemplate': `${baseUrl}/{lang}/search?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
        }
    };

    // 3. Speakable Schema
    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'SiamVisa Pro — Thailand Visa Expert 2026',
        'url': pageUrl,
        'speakable': {
            '@type': 'SpeakableSpecification',
            'cssSelector': [
                'h1',
                '.hero-description',
                '.spotlight-text'
            ]
        }
    };

    // 4. ItemList — All visa services for AI overview
    const servicesListSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'All Thailand Visa Services by SiamVisa Pro — 2026',
        'description': 'Complete list of Thailand visa types with expert assistance from SiamVisa Pro. Compare costs, duration, and eligibility.',
        'numberOfItems': 10,
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'DTV Visa (Destination Thailand Visa)',
                'description': '5-year visa for digital nomads & remote workers. Remote work legally allowed. 500K THB savings required. ~€350.',
                'url': `${baseUrl}${getTranslatedPath('dtv', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Thailand Elite Visa (Privilege Card)',
                'description': '5-20 year premium residency. VIP airport, government concierge. 600K-2M THB. No income requirement.',
                'url': `${baseUrl}${getTranslatedPath('elite-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': 'LTR Visa (Long-Term Resident)',
                'description': '10-year visa. Work permit + 17% flat tax. For professionals earning $80K+/year. 50K THB fee.',
                'url': `${baseUrl}${getTranslatedPath('ltr', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 4,
                'name': 'Retirement Visa (Non-O)',
                'description': '1-year renewable for retirees 50+. 800K THB deposit or 65K THB/month income. ~€50/year.',
                'url': `${baseUrl}${getTranslatedPath('retirement-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 5,
                'name': 'Business Visa (Non-B) + Work Permit',
                'description': '1-year visa for Thai employment. Requires Thai employer + work permit. ~€100.',
                'url': `${baseUrl}${getTranslatedPath('business-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 6,
                'name': 'Tourist Visa (TR)',
                'description': '60+30 days. For tourism. ~€30. Most Western passports get 60 days visa-free.',
                'url': `${baseUrl}${getTranslatedPath('tourist-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 7,
                'name': 'Education Visa (Non-ED)',
                'description': '1-year for studying Thai, Muay Thai, or university. ~€50 + tuition.',
                'url': `${baseUrl}${getTranslatedPath('student-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 8,
                'name': 'SMART Visa',
                'description': '4-year visa for S-Curve industry experts. Work permit included. No 90-day report. Free.',
                'url': `${baseUrl}${getTranslatedPath('smart-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 9,
                'name': 'Family Visa (Non-O Marriage)',
                'description': '1-year for spouses of Thai nationals. 400K THB. Work permit possible. ~€50/year.',
                'url': `${baseUrl}${getTranslatedPath('family-visa', lang)}`
            },
            {
                '@type': 'ListItem',
                'position': 10,
                'name': 'Medical Visa (Non-MT)',
                'description': '90 days+ for medical treatment. Up to 4 companions. ~€50.',
                'url': `${baseUrl}${getTranslatedPath('medical-visa', lang)}`
            }
        ]
    };

    // 5. FAQPage — Top questions people ask about Thailand visas (homepage level)
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'What is the best visa for living in Thailand in 2026?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'It depends on your profile: (1) Digital nomads/remote workers → DTV visa (5 years, ~€350), (2) High earners ($80K+/yr) → LTR visa (10 years, work permit, 17% tax), (3) Retirees 50+ → Retirement visa (1 year renewable, ~€50), (4) VIP/hassle-free → Elite visa (5-20 years, €15,000+), (5) Thai employer → Business visa + work permit. SiamVisa Pro helps you choose the best option with a free eligibility assessment.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Can I work remotely in Thailand legally?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes, with the right visa. The DTV (Destination Thailand Visa) explicitly allows remote work for foreign employers since 2024. It grants 5 years, 180 days per entry. The LTR visa also allows work with a digital work permit. Tourist visas and visa exemptions do NOT permit any form of work, including remote work.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How much money do I need to live in Thailand long-term?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Financial requirements vary by visa: DTV requires 500,000 THB (~€13,000) in savings. Retirement requires 800,000 THB (~€20,000) in a Thai bank or 65,000 THB/month income. Marriage visa requires 400,000 THB (~€10,000). LTR requires $80,000+/year income. Elite requires a one-time fee of 600,000-2,000,000 THB. Tourist visa requires only ~20,000 THB proof of funds.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What does SiamVisa Pro do?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'SiamVisa Pro is a Thailand-based immigration consultancy helping foreigners obtain Thai visas. Services include: free eligibility assessment, professional portfolio preparation (DTV), document review and translation, embassy and immigration submission support, work permit processing, annual visa renewals, and 90-day reporting assistance. We serve clients in 11 languages with a 95%+ approval rate.'
                }
            }
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        </>
    );
};
