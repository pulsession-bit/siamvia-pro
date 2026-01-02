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
        'tourist-visa': 'visa-touristique-thailande',
        'retirement-visa': 'visa-retraite-thailande',
        services: 'services-et-tarifs',
        contact: 'nous-contacter',
        faq: 'questions-frequentes',
        terms: 'conditions-generales',
        sitemap: 'plan-du-site'
      },
      en: {
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
