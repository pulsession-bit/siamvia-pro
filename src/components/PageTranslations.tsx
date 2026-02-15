'use client';

import React from 'react';
import { DictionaryExtender } from '@/contexts/LanguageContext';

/**
 * Wrapper component that extends the global (shared) dictionary with
 * page-specific translation keys. Use in page Server Components:
 *
 *   import PageTranslations from '@/components/PageTranslations';
 *   import { getPageDictionary, getPageFallbackDictionary } from '@/utils/getSharedDictionary';
 *   import { PAGE_TRANSLATION_KEYS } from '@/utils/pageTranslationKeys';
 *
 *   export default async function Page({ params }) {
 *     const { lang } = await params;
 *     const keys = PAGE_TRANSLATION_KEYS['dtv'];
 *     const dict = getPageDictionary(lang, keys);
 *     const fallback = lang !== 'en' ? getPageFallbackDictionary(keys) : undefined;
 *     return (
 *       <PageTranslations dictionary={dict} fallbackDictionary={fallback}>
 *         <DTVClientPage />
 *       </PageTranslations>
 *     );
 *   }
 */
export default function PageTranslations({
    children,
    dictionary,
    fallbackDictionary,
}: {
    children: React.ReactNode;
    dictionary: Record<string, any>;
    fallbackDictionary?: Record<string, any>;
}) {
    return (
        <DictionaryExtender dictionary={dictionary} fallbackDictionary={fallbackDictionary}>
            {children}
        </DictionaryExtender>
    );
}
