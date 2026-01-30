
import React from 'react';
import { PageKey, SLUG_MAP, getTranslatedPath } from '@/utils/slugs';

interface SchemaOrgProps {
    lang: string;
    pageKey?: PageKey;
    title?: string;
    showGlobal?: boolean;
}

export const SchemaOrg: React.FC<SchemaOrgProps> = ({ lang, pageKey, title, showGlobal = true }) => {

    const baseUrl = 'https://www.siamvisapro.com';
    const siteName = 'SiamVisa Pro';

    // 1. Organization Schema
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': siteName,
        'url': baseUrl,
        'logo': `${baseUrl}/favicon.ico`,
        'description': 'Experts en visas pour la Thaïlande (DTV, Elite, LTR, Retraite). Assistance administrative et audit d\'éligibilité.',
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': '16192 Coastal Highway',
            'addressLocality': 'Lewes',
            'addressRegion': 'Delaware',
            'postalCode': '19958',
            'addressCountry': 'US'
        },
        'taxID': '2417125',
        'location': [
            {
                '@type': 'Place',
                'name': 'USA Headquarters',
                'address': {
                    '@type': 'PostalAddress',
                    'streetAddress': '16192 Coastal Highway',
                    'addressLocality': 'Lewes',
                    'addressRegion': 'Delaware',
                    'postalCode': '19958',
                    'addressCountry': 'US'
                }
            },
            {
                '@type': 'Place',
                'name': 'Bangkok Office',
                'address': {
                    '@type': 'PostalAddress',
                    'streetAddress': 'Sukhumvit Rd, Khlong Toei',
                    'addressLocality': 'Bangkok',
                    'postalCode': '10110',
                    'addressCountry': 'TH'
                }
            }
        ],


        'contactPoint': {
            '@type': 'ContactPoint',
            'contactType': 'customer service',
            'email': 'support@siamvisapro.com',
            'availableLanguage': ['French', 'English', 'Thai']
        },
        'sameAs': [
            'https://www.linkedin.com/in/raphael-buresi-4a9562a/',
            'https://digitgpt.cloud'
        ],

        'founder': {
            '@type': 'Person',
            'name': 'Raphaël Buresi',
            'url': 'https://www.linkedin.com/in/raphael-buresi-4a9562a/'
        },
        'parentOrganization': {
            '@type': 'Organization',
            'name': 'DigitGpt LLC',
            'url': 'https://digitgpt.cloud'
        }
    };


    // 2. WebSite Schema (Search Box)
    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': siteName,
        'url': baseUrl,
        'potentialAction': {
            '@type': 'SearchAction',
            'target': `${baseUrl}/${lang}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
        }
    };

    // 3. Breadcrumb Schema (Dynamic)
    let breadcrumbSchema = null;
    if (pageKey && pageKey !== 'home') {
        const items = [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': lang === 'fr' ? 'Accueil' : 'Home',
                'item': `${baseUrl}/${lang}`
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': title || pageKey,
                'item': `${baseUrl}${getTranslatedPath(pageKey, lang)}`
            }
        ];

        breadcrumbSchema = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': items
        };
    }

    // 4. LocalBusiness Schema (Bangkok Office)
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'SiamVisa Pro - Bangkok',
        '@id': `${baseUrl}/#localbusiness`,
        'url': baseUrl,
        'image': `${baseUrl}/images/siamvisa-office.jpg`,
        'description': 'Professional Thailand visa services including DTV, Elite, Retirement, Business, and Tourist visas. Expert consultation and application assistance.',
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Sukhumvit Rd, Khlong Toei',
            'addressLocality': 'Bangkok',
            'postalCode': '10110',
            'addressCountry': 'TH'
        },
        'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 13.7563,
            'longitude': 100.5018
        },
        'telephone': '+66-XXX-XXX-XXXX',
        'email': 'support@siamvisapro.com',
        'openingHoursSpecification': [
            {
                '@type': 'OpeningHoursSpecification',
                'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                'opens': '09:00',
                'closes': '18:00'
            }
        ],
        'priceRange': '$$',
        'areaServed': {
            '@type': 'Country',
            'name': 'Thailand'
        },
        'serviceType': [
            'Visa Consultation',
            'Visa Application Assistance',
            'Document Preparation',
            'Immigration Services'
        ],
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '127',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            {showGlobal && (
                <>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                    />
                </>
            )}
            {breadcrumbSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />
            )}
        </>
    );

};
