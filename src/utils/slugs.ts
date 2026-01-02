
export type PageKey = 'home' | 'dtv' | 'tourist-visa' | 'retirement-visa' | 'services' | 'contact' | 'faq' | 'terms' | 'sitemap';

export const SLUG_MAP: Record<string, Record<PageKey, string>> = {
    fr: {
        home: '',
        dtv: 'visa-dtv-thailande',
        'tourist-visa': 'visa-touristique-thailande',
        'retirement-visa': 'visa-retraite-thailande',
        services: 'services-et-tarifs',
        contact: 'nous-contacter',
        faq: 'questions-frequentes',
        terms: 'conditions-generales',
        sitemap: 'plan-du-site'
    },
    en: {
        home: '',
        dtv: 'thailand-dtv-visa',
        'tourist-visa': 'thailand-tourist-visa',
        'retirement-visa': 'thailand-retirement-visa',
        services: 'services-and-rates',
        contact: 'contact-us',
        faq: 'frequently-asked-questions',
        terms: 'terms-and-conditions',
        sitemap: 'sitemap'
    },
    de: {
        home: '',
        dtv: 'thailand-dtv-visum',
        'tourist-visa': 'thailand-touristenvisum',
        'retirement-visa': 'thailand-ruhestandsvisum',
        services: 'leistungen-und-preise',
        contact: 'kontakt',
        faq: 'haeufig-gestellte-fragen',
        terms: 'allgemeine-geschaeftsbedingungen',
        sitemap: 'seitenuebersicht'
    },
    es: {
        home: '',
        dtv: 'visa-dtv-tailandia',
        'tourist-visa': 'visa-turista-tailandia',
        'retirement-visa': 'visa-jubilacion-tailandia',
        services: 'servicios-y-tarifas',
        contact: 'contacto',
        faq: 'preguntas-frecuentes',
        terms: 'terminos-y-condiciones',
        sitemap: 'mapa-del-sitio'
    },
    it: {
        home: '',
        dtv: 'visto-dtv-thailandia',
        'tourist-visa': 'visto-turistico-thailandia',
        'retirement-visa': 'visto-pensionati-thailandia',
        services: 'servizi-e-tariffe',
        contact: 'contatti',
        faq: 'domande-frequenti',
        terms: 'termini-e-condizioni',
        sitemap: 'mappa-del-sito'
    },
    th: {
        home: '',
        dtv: 'dtv-visa',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap'
    },
    ru: {
        home: '',
        dtv: 'dtv-visa',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap'
    },
    zh: {
        home: '',
        dtv: 'dtv-visa',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap'
    },
    ja: {
        home: '',
        dtv: 'dtv-visa',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap'
    },
    ko: {
        home: '',
        dtv: 'dtv-visa',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap'
    },
    ar: {
        home: '',
        dtv: 'dtv-visa',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap'
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
