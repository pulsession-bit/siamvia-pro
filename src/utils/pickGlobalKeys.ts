/**
 * Extracts only the translation keys needed by layout-level components
 * (Navbar, Footer, CartDrawer) to avoid serializing the entire dictionary
 * into every page's HTML.
 *
 * Page-specific components get the full dictionary via the LanguageProvider
 * on the client side after hydration.
 */

// Top-level keys used by Navbar, Footer, CartDrawer, and shared UI
const GLOBAL_KEYS = [
    'nav',
    'footer',
    'cart',
    'visas',
    'meta',
    'hero',
    'common',
    'login',
    'cta_footer',
] as const;

// Individual nested keys from other sections used in global components
const EXTRA_PICKS: Record<string, string[]> = {
    about_page: ['hero_title'],
    faq_page: ['subtitle'],
};

export function pickGlobalKeys(dictionary: Record<string, any>): Record<string, any> {
    const slim: Record<string, any> = {};

    // Copy full top-level sections that are used globally
    for (const key of GLOBAL_KEYS) {
        if (dictionary[key] !== undefined) {
            slim[key] = dictionary[key];
        }
    }

    // Copy specific nested keys from other sections
    for (const [section, keys] of Object.entries(EXTRA_PICKS)) {
        if (dictionary[section]) {
            slim[section] = {};
            for (const k of keys) {
                if (dictionary[section][k] !== undefined) {
                    slim[section][k] = dictionary[section][k];
                }
            }
        }
    }

    return slim;
}
