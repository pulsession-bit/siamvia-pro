export type PageKey =
    | 'home'
    | 'dtv'
    | 'elite-visa'
    | 'tourist-visa'
    | 'retirement-visa'
    | 'services'
    | 'contact'
    | 'faq'
    | 'terms'
    | 'sitemap'
    | 'search'
    | 'ltr'; // Added LTR

export const SLUG_MAP: Record<string, Record<PageKey, string>> = {
    fr: {
        home: '',
        dtv: 'visa-dtv-thailande',
        'elite-visa': 'visa-elite-thailande',
        'tourist-visa': 'visa-touristique-thailande',
        'retirement-visa': 'visa-retraite-thailande',
        services: 'services-et-tarifs',
        contact: 'nous-contacter',
        faq: 'questions-frequentes',
        terms: 'conditions-generales',
        sitemap: 'plan-du-site',
        search: 'comparateur-visa-thailande-2026',
        ltr: 'visa-ltr-thailande'
    },
    en: {
        home: '',
        dtv: 'thailand-dtv-visa',
        'elite-visa': 'thailand-elite-visa',
        'tourist-visa': 'thailand-tourist-visa',
        'retirement-visa': 'thailand-retirement-visa',
        services: 'services-and-rates',
        contact: 'contact-us',
        faq: 'frequently-asked-questions',
        terms: 'terms-and-conditions',
        sitemap: 'sitemap',
        search: 'thailand-visa-comparator-2026',
        ltr: 'long-term-resident-visa'
    },
    de: {
        home: '',
        dtv: 'destination-thailand-visum',
        'elite-visa': 'thailand-elite-visum',
        'tourist-visa': 'touristenvisum',
        'retirement-visa': 'ruhestandsvisum',
        services: 'leistungen',
        contact: 'kontakt',
        faq: 'haufig-gestellte-fragen',
        terms: 'allgemeine-geschaftsbedingungen',
        sitemap: 'seitenverzeichnis',
        search: 'thailand-visum-vergleich-2026',
        ltr: 'long-term-resident-visa'
    },
    es: {
        home: '',
        dtv: 'visado-destino-tailandia',
        'elite-visa': 'visado-elite-tailandia',
        'tourist-visa': 'visado-turista',
        'retirement-visa': 'visado-jubilacion',
        services: 'servicios',
        contact: 'contacto',
        faq: 'preguntas-frecuentes',
        terms: 'terminos-y-condiciones',
        sitemap: 'mapa-del-sito',
        search: 'comparador-visas-tailandia-2026',
        ltr: 'visado-residencia-larga-duracion'
    },
    it: {
        home: '',
        dtv: 'visto-destinazione-thailandia',
        'elite-visa': 'visto-elite-thailandia',
        'tourist-visa': 'visto-turistico',
        'retirement-visa': 'visto-pensionati',
        services: 'servizi',
        contact: 'contatto',
        faq: 'domande-frequenti',
        terms: 'termini-e-condizioni',
        sitemap: 'mappa-del-sito',
        search: 'comparatore-visti-thailandia-2026',
        ltr: 'visto-residenza-lungo-termine'
    },
    th: {
        home: '',
        dtv: 'destination-thailand-visa',
        'elite-visa': 'thailand-resident-visa',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap',
        search: 'thailand-visa-comparator-2026',
        ltr: 'long-term-resident-visa'
    },
    ru: {
        home: '',
        dtv: 'destination-thailand-visa',
        'elite-visa': 'thailand-resident-visa',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap',
        search: 'thailand-visa-comparator-2026',
        ltr: 'long-term-resident-visa'
    },
    zh: {
        home: '',
        dtv: 'destination-thailand-visa',
        'elite-visa': 'thailand-resident-visa',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap',
        search: 'thailand-visa-comparator-2026',
        ltr: 'global-wealthy-citizen-visa'
    },
    ja: {
        home: '',
        dtv: 'destination-thailand-visa',
        'elite-visa': 'thailand-resident-visa',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap',
        search: 'thailand-visa-comparator-2026',
        ltr: 'long-term-resident-visa'
    },
    ko: {
        home: '',
        dtv: 'destination-thailand-visa',
        'elite-visa': 'thailand-resident-visa',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap',
        search: 'thailand-visa-comparator-2026',
        ltr: 'long-term-resident-visa'
    },
    ar: {
        home: '',
        dtv: 'destination-thailand-visa',
        'elite-visa': 'thailand-resident-visa',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap',
        search: 'thailand-visa-comparator-2026',
        ltr: 'long-term-resident-visa'
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
