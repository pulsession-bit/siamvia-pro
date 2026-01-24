
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
            'addressCountry': 'TH'
        },
        'contactPoint': {
            '@type': 'ContactPoint',
            'contactType': 'customer service',
            'email': 'support@siamvisapro.com',
            'availableLanguage': ['French', 'English', 'Thai']
        },
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
