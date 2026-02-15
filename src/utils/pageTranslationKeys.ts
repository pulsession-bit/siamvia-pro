/**
 * Mapping of each page to the translation keys its client component needs.
 * These keys are passed via DictionaryExtender, separate from the shared
 * layout keys (nav, footer, cart, login).
 *
 * To add a new page: simply add an entry with its translation key dependencies.
 *
 * Key names must match the top-level keys in the locale files (fr.ts, en.ts, etc.)
 */

export const PAGE_TRANSLATION_KEYS: Record<string, string[]> = {
    // Homepage
    home: ['home_page', 'hero', 'spotlight', 'visas', 'ai_block', 'meta', 'schema', 'cta_footer'],

    // Visa pages
    dtv: ['dtv_page', 'visas', 'faq_page'],
    'elite-visa': ['elite_page', 'visas'],
    'tourist-visa': ['tourist_visa_page', 'tourist_page', 'visas'],
    'retirement-visa': ['retirement_visa_page', 'retirement_page', 'visas'],
    'business-visa': ['business_visa_page', 'visas'],
    'smart-visa': ['smart_visa_page', 'visas'],
    'exemption-visa': ['exemption_visa_page', 'visas'],
    'family-visa': ['family_visa_page', 'visas'],
    'student-visa': ['student_visa_page', 'visas'],
    'volunteer-visa': ['volunteer_visa_page', 'visas'],
    'medical-visa': ['medical_visa_page', 'visas'],
    'religious-visa': ['religious_visa_page', 'visas'],
    'media-visa': ['media_visa_page', 'visas'],
    'official-visa': ['official_visa_page', 'visas'],
    'scientific-visa': ['scientific_visa_page', 'visas'],
    ltr: ['ltr_page', 'visas'],
    'visa-run': ['visa_run_page', 'visas'],

    // DTV satellite pages (FR only)
    'dtv-documents': ['dtv_documents_page'],
    'dtv-erreurs': ['dtv_erreurs_page'],
    'dtv-comparatif': ['dtv_comparatif_page', 'visas'],
    'dtv-delais': ['dtv_delais_page'],

    // Other pages
    about: ['about_page'],
    services: ['services_page'],
    search: ['search_page', 'visas'],
    faq: ['faq_page'],
    contact: ['contact_page'],
    terms: ['terms_page'],
    sitemap: ['sitemap_page', 'visas'],
    apply: ['apply_page'],
    'ai-technology': ['ai_technology_page', 'ai_block'],
};
