import { Metadata } from 'next';

/**
 * Supported languages for the application
 */
export const SUPPORTED_LANGUAGES = [
    'en',
    'fr',
    'de',
    'it',
    'es',
    'ru',
    'zh',
    'ja',
    'ko',
    'ar',
    'th',
] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

/**
 * Language configuration with labels and flags
 */
export const LANGUAGE_CONFIG = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    { code: 'th', label: 'ไทย', flag: '🇹🇭' },
] as const;

/**
 * Generate hreflang alternate links for SEO
 * 
 * @param pathname - Current page path (e.g., '/dtv', '/contact')
 * @param baseUrl - Base URL of the site (e.g., 'https://siamvisapro.com')
 * @returns Array of alternate language links
 */
export function generateHreflangLinks(pathname: string, baseUrl: string = 'https://www.siamvisapro.com') {
    return SUPPORTED_LANGUAGES.map(lang => ({
        rel: 'alternate',
        hreflang: lang,
        href: `${baseUrl}/${lang}${pathname}`,
    }));
}

/**
 * Generate metadata with hreflang for a page
 * 
 * @param options - Metadata options
 * @returns Next.js Metadata object with alternates
 * 
 * @example
 * ```tsx
 * export const metadata = generateMetadataWithHreflang({
 *   title: 'DTV Visa Thailand',
 *   description: 'Get your DTV visa approved',
 *   pathname: '/dtv',
 * });
 * ```
 */
import { getTranslatedPath, PageKey } from './slugs';

export function generateMetadataWithHreflang(options: {
    title: string;
    description: string;
    pageKey: PageKey;
    lang: string;
    baseUrl?: string;
}): Metadata {
    const { title, description, pageKey, lang, baseUrl = 'https://www.siamvisapro.com' } = options;

    const languages: Record<string, string> = {};

    SUPPORTED_LANGUAGES.forEach(l => {
        languages[l] = `${baseUrl}${getTranslatedPath(pageKey, l)}`;
    });

    // Add x-default pointing to English version
    languages['x-default'] = `${baseUrl}${getTranslatedPath(pageKey, 'en')}`;

    return {
        title,
        description,
        alternates: {
            canonical: `${baseUrl}${getTranslatedPath(pageKey, lang)}`,
            languages,
        },
        openGraph: {
            title,
            description,
            url: `${baseUrl}${getTranslatedPath(pageKey, lang)}`,
            siteName: 'SiamVisa Pro',
            locale: lang === 'fr' ? 'fr_FR' : 'en_US',
            type: 'website',
        },
    };
}
