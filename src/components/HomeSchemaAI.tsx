import React from 'react';
import { getTranslatedPath } from '@/utils/slugs';
import { translations } from '@/utils/translations';

interface HomeSchemaAIProps {
    lang: string;
}

/**
 * Enhanced Schema & structured data for AI bots (ChatGPT, Perplexity, Google AI Overviews)
 * Home Page — All content is translated to match the page language.
 * The WebSite schema is handled by SchemaOrg.tsx (no duplication).
 */
export const HomeSchemaAI: React.FC<HomeSchemaAIProps> = ({ lang }) => {
    const baseUrl = 'https://www.siamvisapro.com';
    const t = (translations as any)[lang] || translations.en;
    const schema = t.schema || (translations.en as any).schema;

    // 1. ProfessionalService Schema — Core identity for AI
    const professionalServiceSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': 'SiamVisa Pro',
        'alternateName': 'Siam Visa Pro — Thailand Visa Expert',
        'description': schema.professional_description,
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
        'serviceType': schema.service_types,
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
            'jobTitle': schema.founder_title
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
                                'name': schema.visa_items[0]?.name || 'DTV Visa Assistance',
                                'description': schema.visa_items[0]?.description || '',
                                'url': `${baseUrl}${getTranslatedPath('dtv', lang)}`
                            }
                        },
                        {
                            '@type': 'Offer',
                            'itemOffered': {
                                '@type': 'Service',
                                'name': schema.visa_items[1]?.name || 'Elite Visa Assistance',
                                'description': schema.visa_items[1]?.description || '',
                                'url': `${baseUrl}${getTranslatedPath('elite-visa', lang)}`
                            }
                        },
                        {
                            '@type': 'Offer',
                            'itemOffered': {
                                '@type': 'Service',
                                'name': schema.visa_items[2]?.name || 'LTR Visa Assistance',
                                'description': schema.visa_items[2]?.description || '',
                                'url': `${baseUrl}${getTranslatedPath('ltr', lang)}`
                            }
                        },
                        {
                            '@type': 'Offer',
                            'itemOffered': {
                                '@type': 'Service',
                                'name': schema.visa_items[3]?.name || 'Retirement Visa Assistance',
                                'description': schema.visa_items[3]?.description || '',
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

    // 2. Speakable Schema (language-agnostic CSS selectors)
    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'SiamVisa Pro — Thailand Visa Expert 2026',
        'url': `${baseUrl}${getTranslatedPath('home', lang)}`,
        'speakable': {
            '@type': 'SpeakableSpecification',
            'cssSelector': [
                'h1',
                '.hero-description',
                '.spotlight-text'
            ]
        }
    };

    // 3. ItemList — All visa services (translated)
    const visaPages = ['dtv', 'elite-visa', 'ltr', 'retirement-visa', 'business-visa', 'tourist-visa', 'student-visa', 'smart-visa', 'family-visa', 'medical-visa'] as const;
    const servicesListSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'All Thailand Visa Services by SiamVisa Pro — 2026',
        'description': schema.professional_description,
        'numberOfItems': schema.visa_items.length,
        'itemListElement': schema.visa_items.map((item: any, i: number) => ({
            '@type': 'ListItem',
            'position': i + 1,
            'name': item.name,
            'description': item.description,
            'url': `${baseUrl}${getTranslatedPath(visaPages[i] || 'home', lang)}`
        }))
    };

    // 4. FAQPage — Top questions (translated)
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': schema.faq.map((item: any) => ({
            '@type': 'Question',
            'name': item.q,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': item.a
            }
        }))
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        </>
    );
};
