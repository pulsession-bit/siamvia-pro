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
        search: 'comparateur-visa-thailande-2026',
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
        search: 'thailand-visa-comparator-2026',
        ltr: 'long-term-resident-visa'
      },
      de: {
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
