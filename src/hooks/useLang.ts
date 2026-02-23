'use client';

import { usePathname } from 'next/navigation';
import { getTranslatedPath, PageKey } from '../utils/slugs';

export type SupportedLang = 'fr' | 'en' | 'de' | 'es' | 'it' | 'th' | 'ru' | 'zh' | 'ja' | 'ko' | 'ar';

const ALL_LANGS: SupportedLang[] = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'];
// Langues avec préfixe dans l'URL (FR est la langue par défaut, sans préfixe)
const NON_DEFAULT_LANGS = ['en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'];

export function useCurrentLang(): SupportedLang {
    const pathname = usePathname();

    // Extraire le premier segment du path
    // Ex: /en/contact → 'en' | /visa-dtv-thailande → 'visa-dtv-...' (pas une langue)
    const firstSegment = pathname?.split('/')?.[1] || '';

    // FR n'a pas de préfixe : si le premier segment n'est pas une langue connue → FR
    if (NON_DEFAULT_LANGS.includes(firstSegment as SupportedLang)) {
        return firstSegment as SupportedLang;
    }

    // Par défaut : français (langue par défaut sans préfixe)
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
            // getTranslatedPath génère déjà la bonne URL :
            // FR → /slug-fr (sans préfixe), autres → /[lang]/slug
            return getTranslatedPath(pageKey, lang);
        } catch (e) {
            // Fallback : FR sans préfixe, autres avec préfixe
            return lang === 'fr'
                ? (cleanPath ? `/${cleanPath}` : '/')
                : `/${lang}/${cleanPath}`;
        }
    };
}
