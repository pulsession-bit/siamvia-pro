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
    | 'ltr'
    | 'visa-run'
    | 'business-visa'
    | 'exemption-visa'
    | 'student-visa'
    | 'family-visa'
    | 'smart-visa'
    | 'volunteer-visa'
    | 'medical-visa'
    | 'religious-visa'
    | 'media-visa'
    | 'official-visa'
    | 'scientific-visa'
    | 'apply'
    | 'about'
    | 'ai-technology'
    | 'dtv-documents'
    | 'dtv-erreurs'
    | 'dtv-comparatif'
    | 'dtv-delais';

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
        ltr: 'visa-ltr-thailande',
        'visa-run': 'risques-visa-run-thailande',
        'business-visa': 'visa-business-thailande',
        'exemption-visa': 'exemption-visa-thailande',
        'student-visa': 'visa-etudiant-thailande',
        'family-visa': 'visa-famille-thailande',
        'smart-visa': 'smart-visa-thailande',
        'volunteer-visa': 'visa-volontaire-thailande',
        'medical-visa': 'visa-medical-thailande',
        'religious-visa': 'visa-religieux-thailande',
        'media-visa': 'visa-media-thailande',
        'official-visa': 'visa-officiel-thailande',
        'scientific-visa': 'visa-scientifique-thailande',
        apply: 'demande-de-visa',
        about: 'a-propos',
        'ai-technology': 'technologie-ia-visa',
        'dtv-documents': 'visa-dtv-thailande/documents-requis',
        'dtv-erreurs': 'visa-dtv-thailande/erreurs-frequentes',
        'dtv-comparatif': 'visa-dtv-thailande/comparatif-visas',
        'dtv-delais': 'visa-dtv-thailande/delais-traitement'
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
        ltr: 'long-term-resident-visa',
        'visa-run': 'thailand-visa-run-risks',
        'business-visa': 'thailand-business-visa',
        'exemption-visa': 'thailand-visa-exemption',
        'student-visa': 'thailand-student-visa',
        'family-visa': 'thailand-family-visa',
        'smart-visa': 'thailand-smart-visa',
        'volunteer-visa': 'thailand-volunteer-visa',
        'medical-visa': 'thailand-medical-visa',
        'religious-visa': 'thailand-religious-visa',
        'media-visa': 'thailand-media-visa',
        'official-visa': 'thailand-official-visa',
        'scientific-visa': 'thailand-scientific-visa',
        apply: 'apply-visa',
        about: 'about-us',
        'ai-technology': 'ai-visa-technology',
        'dtv-documents': 'dtv/documents',
        'dtv-erreurs': 'dtv/erreurs',
        'dtv-comparatif': 'dtv/comparatif',
        'dtv-delais': 'dtv/delais'
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
        ltr: 'long-term-resident-visa',
        'visa-run': 'thailand-visa-run-risiken',
        'business-visa': 'thailand-business-visa',
        'exemption-visa': 'thailand-visa-exemption',
        'student-visa': 'thailand-student-visa',
        'family-visa': 'thailand-family-visa',
        'smart-visa': 'thailand-smart-visa',
        'volunteer-visa': 'thailand-volunteer-visa',
        'medical-visa': 'thailand-medical-visa',
        'religious-visa': 'thailand-religious-visa',
        'media-visa': 'thailand-media-visa',
        'official-visa': 'thailand-official-visa',
        'scientific-visa': 'thailand-scientific-visa',
        apply: 'apply-visa',
        about: 'ueber-uns',
        'ai-technology': 'ki-visum-technologie',
        'dtv-documents': 'dtv/documents',
        'dtv-erreurs': 'dtv/erreurs',
        'dtv-comparatif': 'dtv/comparatif',
        'dtv-delais': 'dtv/delais'
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
        ltr: 'visado-residencia-larga-duracion',
        'visa-run': 'riesgos-visa-run-tailandia',
        'business-visa': 'thailand-business-visa',
        'exemption-visa': 'thailand-visa-exemption',
        'student-visa': 'thailand-student-visa',
        'family-visa': 'thailand-family-visa',
        'smart-visa': 'thailand-smart-visa',
        'volunteer-visa': 'thailand-volunteer-visa',
        'medical-visa': 'thailand-medical-visa',
        'religious-visa': 'thailand-religious-visa',
        'media-visa': 'thailand-media-visa',
        'official-visa': 'thailand-official-visa',
        'scientific-visa': 'thailand-scientific-visa',
        apply: 'solicitar-visa',
        about: 'sobre-nosotros',
        'ai-technology': 'tecnologia-ia-visa',
        'dtv-documents': 'dtv/documents',
        'dtv-erreurs': 'dtv/erreurs',
        'dtv-comparatif': 'dtv/comparatif',
        'dtv-delais': 'dtv/delais'
    },
    it: {
        home: '',
        dtv: 'visto-destinazione-thailandia',
        'elite-visa': 'visto-elite-thailandia', // Updated to match likely user intent, but syncing with next.config
        'tourist-visa': 'visto-turistico',
        'retirement-visa': 'visto-pensionati',
        services: 'servizi',
        contact: 'contatto',
        faq: 'domande-frequenti',
        terms: 'termini-e-condizioni',
        sitemap: 'mappa-del-sito',
        search: 'comparatore-visti-thailandia-2026',
        ltr: 'visto-residenza-lungo-termine',
        'visa-run': 'rischi-visa-run-thailandia',
        'business-visa': 'thailand-business-visa',
        'exemption-visa': 'thailand-visa-exemption',
        'student-visa': 'thailand-student-visa',
        'family-visa': 'thailand-family-visa',
        'smart-visa': 'thailand-smart-visa',
        'volunteer-visa': 'thailand-volunteer-visa',
        'medical-visa': 'thailand-medical-visa',
        'religious-visa': 'thailand-religious-visa',
        'media-visa': 'thailand-media-visa',
        'official-visa': 'thailand-official-visa',
        'scientific-visa': 'thailand-scientific-visa',
        apply: 'richiedi-visto',
        about: 'chi-siamo',
        'ai-technology': 'tecnologia-ia-visto',
        'dtv-documents': 'dtv/documents',
        'dtv-erreurs': 'dtv/erreurs',
        'dtv-comparatif': 'dtv/comparatif',
        'dtv-delais': 'dtv/delais'
    },
    th: {
        home: '',
        dtv: 'destination-thailand-visa',
        'elite-visa': 'thailand-resident-visa', // Changed from elite-visa to match next.config.ts
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap',
        search: 'thailand-visa-comparator-2026',
        ltr: 'long-term-resident-visa',
        'visa-run': 'thailand-visa-run-risks',
        'business-visa': 'thailand-business-visa',
        'exemption-visa': 'thailand-visa-exemption',
        'student-visa': 'thailand-student-visa',
        'family-visa': 'thailand-family-visa',
        'smart-visa': 'thailand-smart-visa',
        'volunteer-visa': 'thailand-volunteer-visa',
        'medical-visa': 'thailand-medical-visa',
        'religious-visa': 'thailand-religious-visa',
        'media-visa': 'thailand-media-visa',
        'official-visa': 'thailand-official-visa',
        'scientific-visa': 'thailand-scientific-visa',
        apply: 'apply',
        about: 'about',
        'ai-technology': 'ai-technology',
        'dtv-documents': 'dtv/documents',
        'dtv-erreurs': 'dtv/erreurs',
        'dtv-comparatif': 'dtv/comparatif',
        'dtv-delais': 'dtv/delais'
    },
    ru: {
        home: '',
        dtv: 'destination-thailand-visa',
        'elite-visa': 'thailand-resident-visa', // Matches next.config.ts
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap',
        search: 'thailand-visa-comparator-2026',
        ltr: 'long-term-resident-visa',
        'visa-run': 'thailand-visa-run-risks',
        'business-visa': 'thailand-business-visa',
        'exemption-visa': 'thailand-visa-exemption',
        'student-visa': 'thailand-student-visa',
        'family-visa': 'thailand-family-visa',
        'smart-visa': 'thailand-smart-visa',
        'volunteer-visa': 'thailand-volunteer-visa',
        'medical-visa': 'thailand-medical-visa',
        'religious-visa': 'thailand-religious-visa',
        'media-visa': 'thailand-media-visa',
        'official-visa': 'thailand-official-visa',
        'scientific-visa': 'thailand-scientific-visa',
        apply: 'apply',
        about: 'about',
        'ai-technology': 'ai-technology',
        'dtv-documents': 'dtv/documents',
        'dtv-erreurs': 'dtv/erreurs',
        'dtv-comparatif': 'dtv/comparatif',
        'dtv-delais': 'dtv/delais'
    },
    zh: {
        home: '',
        dtv: 'destination-thailand-visa',
        'elite-visa': 'thailand-resident-visa', // Matches next.config.ts
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap',
        search: 'thailand-visa-comparator-2026',
        ltr: 'global-wealthy-citizen-visa', // Matches next.config.ts
        'visa-run': 'thailand-visa-run-risks',
        'business-visa': 'thailand-business-visa',
        'exemption-visa': 'thailand-visa-exemption',
        'student-visa': 'thailand-student-visa',
        'family-visa': 'thailand-family-visa',
        'smart-visa': 'thailand-smart-visa',
        'volunteer-visa': 'thailand-volunteer-visa',
        'medical-visa': 'thailand-medical-visa',
        'religious-visa': 'thailand-religious-visa',
        'media-visa': 'thailand-media-visa',
        'official-visa': 'thailand-official-visa',
        'scientific-visa': 'thailand-scientific-visa',
        apply: 'apply',
        about: 'about',
        'ai-technology': 'ai-technology',
        'dtv-documents': 'dtv/documents',
        'dtv-erreurs': 'dtv/erreurs',
        'dtv-comparatif': 'dtv/comparatif',
        'dtv-delais': 'dtv/delais'
    },
    ja: {
        home: '',
        dtv: 'destination-thailand-visa',
        'elite-visa': 'thailand-resident-visa', // Matches next.config.ts
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap',
        search: 'thailand-visa-comparator-2026',
        ltr: 'long-term-resident-visa',
        'visa-run': 'thailand-visa-run-risks',
        'business-visa': 'thailand-business-visa',
        'exemption-visa': 'thailand-visa-exemption',
        'student-visa': 'thailand-student-visa',
        'family-visa': 'thailand-family-visa',
        'smart-visa': 'thailand-smart-visa',
        'volunteer-visa': 'thailand-volunteer-visa',
        'medical-visa': 'thailand-medical-visa',
        'religious-visa': 'thailand-religious-visa',
        'media-visa': 'thailand-media-visa',
        'official-visa': 'thailand-official-visa',
        'scientific-visa': 'thailand-scientific-visa',
        apply: 'apply',
        about: 'about',
        'ai-technology': 'ai-technology',
        'dtv-documents': 'dtv/documents',
        'dtv-erreurs': 'dtv/erreurs',
        'dtv-comparatif': 'dtv/comparatif',
        'dtv-delais': 'dtv/delais'
    },
    ko: {
        home: '',
        dtv: 'destination-thailand-visa',
        'elite-visa': 'thailand-resident-visa', // Matches next.config.ts
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap',
        search: 'thailand-visa-comparator-2026',
        ltr: 'long-term-resident-visa',
        'visa-run': 'thailand-visa-run-risks',
        'business-visa': 'thailand-business-visa',
        'exemption-visa': 'thailand-visa-exemption',
        'student-visa': 'thailand-student-visa',
        'family-visa': 'thailand-family-visa',
        'smart-visa': 'thailand-smart-visa',
        'volunteer-visa': 'thailand-volunteer-visa',
        'medical-visa': 'thailand-medical-visa',
        'religious-visa': 'thailand-religious-visa',
        'media-visa': 'thailand-media-visa',
        'official-visa': 'thailand-official-visa',
        'scientific-visa': 'thailand-scientific-visa',
        apply: 'apply',
        about: 'about',
        'ai-technology': 'ai-technology',
        'dtv-documents': 'dtv/documents',
        'dtv-erreurs': 'dtv/erreurs',
        'dtv-comparatif': 'dtv/comparatif',
        'dtv-delais': 'dtv/delais'
    },
    ar: {
        home: '',
        dtv: 'destination-thailand-visa',
        'elite-visa': 'thailand-resident-visa', // Matches next.config.ts
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap',
        search: 'thailand-visa-comparator-2026',
        ltr: 'long-term-resident-visa',
        'visa-run': 'thailand-visa-run-risks',
        'business-visa': 'thailand-business-visa',
        'exemption-visa': 'thailand-visa-exemption',
        'student-visa': 'thailand-student-visa',
        'family-visa': 'thailand-family-visa',
        'smart-visa': 'thailand-smart-visa',
        'volunteer-visa': 'thailand-volunteer-visa',
        'medical-visa': 'thailand-medical-visa',
        'religious-visa': 'thailand-religious-visa',
        'media-visa': 'thailand-media-visa',
        'official-visa': 'thailand-official-visa',
        'scientific-visa': 'thailand-scientific-visa',
        apply: 'apply',
        about: 'about',
        'ai-technology': 'ai-technology',
        'dtv-documents': 'dtv/documents',
        'dtv-erreurs': 'dtv/erreurs',
        'dtv-comparatif': 'dtv/comparatif',
        'dtv-delais': 'dtv/delais'
    }
};

export function getTranslatedPath(page: PageKey, lang: string): string {
    const langSlugs = SLUG_MAP[lang] || SLUG_MAP.en;
    const slug = langSlugs[page];

    // If slug is undefined, check if it exists in English map as fallback
    if (slug === undefined) {
        const enSlug = SLUG_MAP.en[page];
        if (enSlug !== undefined) {
            return enSlug === '' ? `/${lang}` : `/${lang}/${enSlug}`;
        }
        // Last resort: use the page key itself if not mapped
        return `/${lang}/${page}`;
    }

    return slug === '' ? `/${lang}` : `/${lang}/${slug}`;
}

export const REVERSE_MAP: Record<string, Record<string, PageKey>> = Object.entries(SLUG_MAP).reduce((acc, [lang, slugs]) => {
    acc[lang] = Object.entries(slugs).reduce((innerAcc, [key, slug]) => {
        if (slug !== '') innerAcc[slug] = key as PageKey;
        return innerAcc;
    }, {} as Record<string, PageKey>);
    return acc;
}, {} as Record<string, Record<string, PageKey>>);
