import { translations } from '@/utils/translations';

/**
 * Shared translation keys needed by layout-level components:
 * - Navbar (uses `nav.*`)
 * - Footer (uses `nav.*`, `footer.*`, `about_page.hero_title`)
 * - CartDrawer (uses `cart.*`)
 * - MobileMenu (uses `nav.*`)
 *
 * All other page-specific keys (dtv_page, elite_page, search_page, etc.)
 * are NOT included here. They are loaded per-page via DictionaryExtender.
 *
 * Impact: ~119 KB → ~5 KB per page (for French locale)
 */

type Lang = keyof typeof translations;

export function getSharedDictionary(lang: Lang) {
    const full = translations[lang] || translations.en;

    return {
        nav: (full as any).nav,
        footer: (full as any).footer,
        cart: (full as any).cart,
        login: (full as any).login,
        common: (full as any).common,
        appointment: (full as any).appointment,
        about_page: {
            hero_title: (full as any).about_page?.hero_title,
        },
    };
}

export function getFullDictionary(lang: Lang) {
    return translations[lang] || translations.en;
}

/**
 * Extract specific top-level keys from the full dictionary.
 * Used by page Server Components to get only the keys their ClientPage needs.
 *
 * Usage:
 *   const pageDictionary = getPageDictionary(lang, ['dtv_page', 'visas', 'faq_page']);
 */
export function getPageDictionary(lang: string, keys: string[]): Record<string, any> {
    const full = (translations[lang as Lang] || translations.en) as any;
    const result: Record<string, any> = {};
    for (const key of keys) {
        if (full[key] !== undefined) {
            result[key] = full[key];
        }
    }
    return result;
}

/**
 * Same as getPageDictionary but always returns English.
 * Used for fallback dictionaries in DictionaryExtender.
 */
export function getPageFallbackDictionary(keys: string[]): Record<string, any> {
    const full = translations.en as any;
    const result: Record<string, any> = {};
    for (const key of keys) {
        if (full[key] !== undefined) {
            result[key] = full[key];
        }
    }
    return result;
}
