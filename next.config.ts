import type { NextConfig } from "next";

// Define the slug mapping inside next.config.ts or import if possible
// However, next.config.ts has limited support for imports outside its scope in some versions.
// We'll define a simpler version or try to import it.

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
    const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'];
    const slugMap: Record<string, Record<string, string>> = {
      fr: {
        dtv: 'visa-dtv-thailande',
        'tourist-visa': 'visa-touristique-thailande',
        'retirement-visa': 'visa-retraite-thailande',
        services: 'services-et-tarifs',
        terms: 'conditions-generales'
      },
      en: {
        dtv: 'thailand-dtv-visa',
        'tourist-visa': 'thailand-tourist-visa',
        'retirement-visa': 'thailand-retirement-visa',
        services: 'services-and-rates',
        terms: 'terms-and-conditions'
      },
      de: {
        dtv: 'thailand-dtv-visum',
        'tourist-visa': 'thailand-touristenvisum',
        'retirement-visa': 'thailand-ruhestandsvisum',
        services: 'leistungen-und-preise',
        contact: 'kontakt',
        terms: 'allgemeine-geschaeftsbedingungen'
      },
      es: {
        dtv: 'visa-dtv-tailandia',
        'tourist-visa': 'visa-turista-tailandia',
        'retirement-visa': 'visa-jubilacion-tailandia',
        services: 'servicios-y-tarifas',
        contact: 'contacto',
        faq: 'preguntas-frecuentes',
        terms: 'terminos-y-condiciones'
      },
      it: {
        dtv: 'visto-dtv-thailandia',
        'tourist-visa': 'visto-turistico-thailandia',
        'retirement-visa': 'visto-pensionati-thailandia',
        services: 'servizi-e-tariffe',
        contact: 'contatti',
        faq: 'domande-frequenti',
        terms: 'termini-e-condizioni'
      }
    };

    const rewrites: any[] = [];

    languages.forEach(lang => {
      const slugs = slugMap[lang];
      if (slugs) {
        Object.entries(slugs).forEach(([internal, translated]) => {
          rewrites.push({
            source: `/${lang}/${translated}`,
            destination: `/${lang}/${internal}`,
          });
        });
      }
    });

    return rewrites;
  },
};

export default nextConfig;
