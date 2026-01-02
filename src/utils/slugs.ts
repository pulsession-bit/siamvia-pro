
export type PageKey = 'home' | 'dtv' | 'tourist-visa' | 'retirement-visa' | 'services' | 'contact' | 'faq' | 'terms';

export const SLUG_MAP: Record<string, Record<PageKey, string>> = {
    fr: {
        home: '',
        dtv: 'visa-dtv-thailande',
        'tourist-visa': 'visa-touristique-thailande',
        'retirement-visa': 'visa-retraite-thailande',
        services: 'services-et-tarifs',
        contact: 'contact',
        faq: 'faq',
        terms: 'conditions-generales'
    },
    en: {
        home: '',
        dtv: 'thailand-dtv-visa',
        'tourist-visa': 'thailand-tourist-visa',
        'retirement-visa': 'thailand-retirement-visa',
        services: 'services-and-rates',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms-and-conditions'
    },
    de: {
        home: '',
        dtv: 'thailand-dtv-visum',
        'tourist-visa': 'thailand-touristenvisum',
        'retirement-visa': 'thailand-ruhestandsvisum',
        services: 'leistungen-und-preise',
        contact: 'kontakt',
        faq: 'faq',
        terms: 'allgemeine-geschaeftsbedingungen'
    },
    es: {
        home: '',
        dtv: 'visa-dtv-tailandia',
        'tourist-visa': 'visa-turista-tailandia',
        'retirement-visa': 'visa-jubilacion-tailandia',
        services: 'servicios-y-tarifas',
        contact: 'contacto',
        faq: 'preguntas-frecuentes',
        terms: 'terminos-y-condiciones'
    },
    it: {
        home: '',
        dtv: 'visto-dtv-thailandia',
        'tourist-visa': 'visto-turistico-thailandia',
        'retirement-visa': 'visto-pensionati-thailandia',
        services: 'servizi-e-tariffe',
        contact: 'contatti',
        faq: 'domande-frequenti',
        terms: 'termini-e-condizioni'
    },
    th: {
        home: '',
        dtv: 'visa-dtv',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms'
    },
    ru: {
        home: '',
        dtv: 'visa-dtv-thailand',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms'
    },
    zh: {
        home: '',
        dtv: 'visa-dtv',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms'
    },
    ja: {
        home: '',
        dtv: 'visa-dtv',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms'
    },
    ko: {
        home: '',
        dtv: 'visa-dtv',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms'
    },
    ar: {
        home: '',
        dtv: 'visa-dtv',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms'
    }
};

export function getTranslatedPath(page: PageKey, lang: string): string {
    const langSlugs = SLUG_MAP[lang] || SLUG_MAP.en;
    const slug = langSlugs[page];
    return slug === '' ? `/${lang}` : `/${lang}/${slug}`;
}

export const REVERSE_MAP: Record<string, Record<string, PageKey>> = Object.entries(SLUG_MAP).reduce((acc, [lang, slugs]) => {
    acc[lang] = Object.entries(slugs).reduce((innerAcc, [key, slug]) => {
        if (slug !== '') innerAcc[slug] = key as PageKey;
        return innerAcc;
    }, {} as Record<string, PageKey>);
    return acc;
}, {} as Record<string, Record<string, PageKey>>);
