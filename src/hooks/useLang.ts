'use client';

import { usePathname } from 'next/navigation';
import { getTranslatedPath, PageKey } from '../utils/slugs';

export type SupportedLang = 'fr' | 'en' | 'de' | 'es' | 'it' | 'th' | 'ru' | 'zh' | 'ja' | 'ko' | 'ar';

export function useCurrentLang(): SupportedLang {
    const pathname = usePathname();

    // Extract language from pathname (e.g., /fr/contact -> fr)
    const match = pathname?.match(/^\/([a-z]{2})/);
    const lang = match?.[1] as SupportedLang;

    const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'];

    if (lang && languages.includes(lang)) {
        return lang;
    }

    return 'fr';
}

export function useLangPath() {
    const lang = useCurrentLang();

    return (path: string) => {
        // Remove leading slash if present
        const cleanPath = path.startsWith('/') ? path.slice(1) : path;

        // Check if it's a known page key
        const pageKey = (cleanPath === '' ? 'home' : cleanPath) as PageKey;

        try {
            return getTranslatedPath(pageKey, lang);
        } catch (e) {
            // Fallback to simple language prefix if not in map
            return `/${lang}/${cleanPath}`;
        }
    };
}
