'use client';

import { usePathname } from 'next/navigation';

export function useCurrentLang(): 'fr' | 'en' {
    const pathname = usePathname();

    // Extract language from pathname (e.g., /fr/contact -> fr)
    const match = pathname?.match(/^\/(fr|en)/);
    return (match?.[1] as 'fr' | 'en') || 'fr';
}

export function useLangPath(path: string): string {
    const lang = useCurrentLang();

    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Return language-prefixed path
    return `/${lang}/${cleanPath}`;
}
