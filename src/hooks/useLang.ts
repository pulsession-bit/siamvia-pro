'use client';

import { usePathname } from 'next/navigation';

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

export function useLangPath(path: string): string {
    const lang = useCurrentLang();

    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Return language-prefixed path
    return `/${lang}/${cleanPath}`;
}
