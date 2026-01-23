import { Metadata } from 'next';

/**
 * SEO Metadata Generator
 * 
 * Génère des métadonnées optimisées pour le SEO avec Open Graph et Twitter Cards
 */

interface PageMetadataOptions {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
    ogImage?: string;
}

const SITE_NAME = 'SiamVisa Pro';
const SITE_URL = 'https://www.siamvisapro.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * Génère les métadonnées complètes pour une page
 */
export function generatePageMetadata(options: PageMetadataOptions): Metadata {
    const {
        title,
        description,
        path,
        keywords = [],
        ogImage = DEFAULT_OG_IMAGE,
    } = options;

    const fullTitle = `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;

    return {
        title: fullTitle,
        description,
        keywords: keywords.join(', '),
        authors: [{ name: SITE_NAME }],
        creator: SITE_NAME,
        publisher: SITE_NAME,
        metadataBase: new URL(SITE_URL),
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: 'website',
            url,
            title: fullTitle,
            description,
            siteName: SITE_NAME,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: 'fr_FR',
            alternateLocale: ['en_US', 'de_DE', 'es_ES', 'it_IT', 'th_TH'],
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [ogImage],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

/**
 * Métadonnées par défaut pour les pages principales
 */
export const PAGE_METADATA = {
    home: {
        title: 'Visa Thaïlande DTV - Expert en Visas Thaïlandais',
        description:
            'Expert en visas pour la Thaïlande. DTV, visa touristique, visa retraite. Accompagnement personnalisé et garantie de succès.',
        keywords: [
            'visa thailande',
            'dtv visa',
            'visa touristique thailande',
            'visa retraite thailande',
            'digital nomad visa',
            'visa long sejour thailande',
        ],
        path: '/',
    },
    dtv: {
        title: 'Visa DTV Thaïlande - Digital Nomad 5 ans',
        description:
            'Obtenez votre visa DTV pour la Thaïlande. Visa digital nomad valable 5 ans, entrées multiples. Accompagnement complet et garantie.',
        keywords: [
            'dtv visa',
            'digital nomad thailand',
            'visa 5 ans thailande',
            'remote work visa',
            'freelance visa thailand',
        ],
        path: '/dtv',
    },
    services: {
        title: 'Nos Services - Accompagnement Visa Thaïlande',
        description:
            'Découvrez nos formules d\'accompagnement pour votre visa thaïlandais. Audit, Sérénité, VIP. Garantie de succès.',
        keywords: [
            'service visa thailande',
            'accompagnement visa',
            'expert visa',
            'conseil visa thailande',
        ],
        path: '/services',
    },
    touristVisa: {
        title: 'Visa Touristique Thaïlande - 60 jours',
        description:
            'Visa touristique pour la Thaïlande. Séjour de 60 jours extensible. Documents requis et procédure complète.',
        keywords: [
            'visa touristique thailande',
            'tourist visa thailand',
            'visa 60 jours',
            'visa vacances thailande',
        ],
        path: '/tourist-visa',
    },
    retirementVisa: {
        title: 'Visa Retraite Thaïlande - Long Séjour +50 ans',
        description:
            'Visa retraite pour la Thaïlande. Pour les plus de 50 ans. Critères financiers et accompagnement personnalisé.',
        keywords: [
            'visa retraite thailande',
            'retirement visa thailand',
            'visa long sejour',
            'retraite thailande',
        ],
        path: '/retirement-visa',
    },
    faq: {
        title: 'FAQ - Questions Fréquentes Visa Thaïlande',
        description:
            'Réponses aux questions fréquentes sur les visas pour la Thaïlande. DTV, visa touristique, visa retraite.',
        keywords: ['faq visa thailande', 'questions visa', 'aide visa'],
        path: '/faq',
    },
    contact: {
        title: 'Contact - Expert Visa Thaïlande',
        description:
            'Contactez nos experts en visas thaïlandais. Paris et Bangkok. Réponse sous 24h.',
        keywords: ['contact visa thailande', 'expert visa', 'conseil visa'],
        path: '/contact',
    },
    terms: {
        title: 'Mentions Légales - SiamVisa Pro',
        description: 'Mentions légales, conditions générales et politique de confidentialité.',
        keywords: ['mentions legales', 'cgu', 'confidentialite'],
        path: '/terms',
    },
};
