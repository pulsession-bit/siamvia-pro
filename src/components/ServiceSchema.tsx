import React from 'react';

interface ServiceSchemaProps {
    serviceName: string;
    serviceDescription: string;
    serviceType: string;
    price?: string;
    priceCurrency?: string;
    duration?: string;
    lang: string;
}

/**
 * Service Schema for visa pages - improves SEO rich snippets
 */
export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
    serviceName,
    serviceDescription,
    serviceType,
    price,
    priceCurrency = 'THB',
    duration,
    lang,
}) => {
    const baseUrl = 'https://www.siamvisapro.com';

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': serviceName,
        'description': serviceDescription,
        'serviceType': serviceType,
        'provider': {
            '@type': 'Organization',
            'name': 'SiamVisa Pro',
            'url': baseUrl,
            'logo': `${baseUrl}/favicon.ico`,
            'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Bangkok',
                'addressCountry': 'TH',
            },
        },
        'areaServed': {
            '@type': 'Country',
            'name': 'Thailand',
        },
        'availableChannel': {
            '@type': 'ServiceChannel',
            'serviceUrl': baseUrl,
            'serviceLanguage': lang,
        },
        ...(price && {
            'offers': {
                '@type': 'Offer',
                'price': price,
                'priceCurrency': priceCurrency,
                'availability': 'https://schema.org/InStock',
            },
        }),
        ...(duration && {
            'termsOfService': `Visa validity: ${duration}`,
        }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
    );
};

// Pre-configured schemas for common visa types
export const VisaServiceSchemas = {
    dtv: (lang: string) => (
        <ServiceSchema
            serviceName="Thailand DTV Visa (Destination Thailand Visa)"
            serviceDescription="5-year multiple entry visa for digital nomads, remote workers, and freelancers. Work legally in Thailand."
            serviceType="Visa Application Assistance"
            duration="5 years"
            lang={lang}
        />
    ),
    elite: (lang: string) => (
        <ServiceSchema
            serviceName="Thailand Elite Visa (Privilege Card)"
            serviceDescription="Premium long-stay visa program with VIP benefits. 5 to 20 years validity."
            serviceType="Visa Application Assistance"
            price="600000"
            priceCurrency="THB"
            duration="5-20 years"
            lang={lang}
        />
    ),
    retirement: (lang: string) => (
        <ServiceSchema
            serviceName="Thailand Retirement Visa (Non-O)"
            serviceDescription="Long-stay visa for retirees aged 50+. Renewable annually with financial requirements."
            serviceType="Visa Application Assistance"
            duration="1 year (renewable)"
            lang={lang}
        />
    ),
    tourist: (lang: string) => (
        <ServiceSchema
            serviceName="Thailand Tourist Visa (TR)"
            serviceDescription="Tourist visa for Thailand. 60 days stay, extendable by 30 days."
            serviceType="Visa Application Assistance"
            duration="60 days"
            lang={lang}
        />
    ),
    business: (lang: string) => (
        <ServiceSchema
            serviceName="Thailand Business Visa (Non-B)"
            serviceDescription="Business visa for employment or business activities in Thailand. Requires work permit."
            serviceType="Visa Application Assistance"
            duration="1 year (renewable)"
            lang={lang}
        />
    ),
    student: (lang: string) => (
        <ServiceSchema
            serviceName="Thailand Education Visa (Non-ED)"
            serviceDescription="Student visa for studying Thai language, martial arts, or academic programs."
            serviceType="Visa Application Assistance"
            duration="1 year (renewable)"
            lang={lang}
        />
    ),
    smart: (lang: string) => (
        <ServiceSchema
            serviceName="Thailand SMART Visa"
            serviceDescription="Visa for highly skilled professionals, investors, executives, and startups in targeted industries."
            serviceType="Visa Application Assistance"
            duration="4 years"
            lang={lang}
        />
    ),
    ltr: (lang: string) => (
        <ServiceSchema
            serviceName="Thailand LTR Visa (Long-Term Resident)"
            serviceDescription="10-year visa for wealthy individuals, retirees, remote workers, and highly skilled professionals."
            serviceType="Visa Application Assistance"
            duration="10 years"
            lang={lang}
        />
    ),
    family: (lang: string) => (
        <ServiceSchema
            serviceName="Thailand Family Visa (Non-O)"
            serviceDescription="Visa for spouses of Thai nationals or parents of Thai children. Allows work permit application."
            serviceType="Visa Application Assistance"
            duration="1 year (renewable)"
            lang={lang}
        />
    ),
    medical: (lang: string) => (
        <ServiceSchema
            serviceName="Thailand Medical Visa (Non-MT)"
            serviceDescription="Visa for patients receiving medical treatment in Thailand. Extendable based on treatment duration."
            serviceType="Visa Application Assistance"
            duration="90 days (extendable)"
            lang={lang}
        />
    ),
};
