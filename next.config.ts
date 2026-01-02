import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    const slugMap: Record<string, Record<string, string>> = {
      fr: {
        dtv: 'visa-dtv-thailande',
        'elite-visa': 'visa-elite-thailande',
        'tourist-visa': 'visa-touristique-thailande',
        'retirement-visa': 'visa-retraite-thailande',
        services: 'services-et-tarifs',
        contact: 'nous-contacter',
        faq: 'questions-frequentes',
        terms: 'conditions-generales',
        sitemap: 'plan-du-site',
        search: 'recherche',
        ltr: 'visa-ltr-thailande'
      },
      en: {
        dtv: 'thailand-dtv-visa',
        'elite-visa': 'thailand-elite-visa',
        'tourist-visa': 'thailand-tourist-visa',
        'retirement-visa': 'thailand-retirement-visa',
        services: 'services-and-rates',
        contact: 'contact-us',
        faq: 'frequently-asked-questions',
        terms: 'terms-and-conditions',
        sitemap: 'sitemap',
        search: 'search',
        ltr: 'long-term-resident-visa'
      },
      de: {
        dtv: 'thailand-dtv-visum',
        'elite-visa': 'thailand-elite-visum',
        'tourist-visa': 'thailand-touristenvisum',
        'retirement-visa': 'thailand-ruhestandsvisum',
        services: 'leistungen-und-preise',
        contact: 'kontakt',
        faq: 'haeufig-gestellte-fragen',
        terms: 'allgemeine-geschaeftsbedingungen',
        sitemap: 'seitenuebersicht',
        search: 'suche',
        ltr: 'long-term-resident-visa'
      },
      es: {
        dtv: 'visa-dtv-tailandia',
        'elite-visa': 'visa-elite-tailandia',
        'tourist-visa': 'visa-turista-tailandia',
        'retirement-visa': 'visa-jubilacion-tailandia',
        services: 'servicios-y-tarifas',
        contact: 'contacto',
        faq: 'preguntas-frecuentes',
        terms: 'terminos-y-condiciones',
        sitemap: 'mapa-del-sitio',
        search: 'buscar',
        ltr: 'visado-residencia-larga-duracion'
      },
      it: {
        dtv: 'visto-dtv-thailandia',
        'elite-visa': 'visto-elite-thailandia',
        'tourist-visa': 'visto-turistico-thailandia',
        'retirement-visa': 'visto-pensionati-thailandia',
        services: 'servizi-e-tariffe',
        contact: 'contatti',
        faq: 'domande-frequenti',
        terms: 'termini-e-condizioni',
        sitemap: 'mappa-del-sito',
        search: 'cerca',
        ltr: 'visto-residenza-lungo-termine'
      },
      th: {
        dtv: 'dtv-visa',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap',
        search: 'search',
        ltr: 'long-term-resident-visa'
      },
      ru: {
        dtv: 'dtv-visa',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap',
        search: 'search',
        ltr: 'long-term-resident-visa'
      },
      zh: {
        dtv: 'dtv-visa',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap',
        search: 'search',
        ltr: 'global-wealthy-citizen-visa'
      },
      ja: {
        dtv: 'dtv-visa',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap',
        search: 'search',
        ltr: 'long-term-resident-visa'
      },
      ko: {
        dtv: 'dtv-visa',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap',
        search: 'search',
        ltr: 'long-term-resident-visa'
      },
      ar: {
        dtv: 'dtv-visa',
        'tourist-visa': 'tourist-visa',
        'retirement-visa': 'retirement-visa',
        services: 'services',
        contact: 'contact',
        faq: 'faq',
        terms: 'terms',
        sitemap: 'sitemap',
        search: 'search',
        ltr: 'long-term-resident-visa'
      }
    };

    const rewrites: any[] = [];


    Object.entries(slugMap).forEach(([lang, slugs]) => {
      Object.entries(slugs).forEach(([internal, translated]) => {
        rewrites.push({
          source: `/${lang}/${translated}`,
          destination: `/${lang}/${internal}`,
        });
      });
    });

    return rewrites;
  },
};

export default nextConfig;
