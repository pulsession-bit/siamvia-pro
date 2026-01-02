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
export function generateHreflangLinks(pathname: string, baseUrl: string = 'https://siamvisapro.com') {
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
export function generateMetadataWithHreflang(options: {
    title: string;
    description: string;
    pathname: string;
    baseUrl?: string;
}): Metadata {
    const { title, description, pathname, baseUrl = 'https://siamvisapro.com' } = options;

    return {
        title,
        description,
        alternates: {
            canonical: `${baseUrl}${pathname}`,
            languages: Object.fromEntries(
                SUPPORTED_LANGUAGES.map(lang => [lang, `${baseUrl}/${lang}${pathname}`])
            ),
        },
        openGraph: {
            title,
            description,
            url: `${baseUrl}${pathname}`,
            siteName: 'SiamVisa Pro',
            locale: 'en_US',
            type: 'website',
        },
    };
}
