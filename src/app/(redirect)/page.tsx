import { redirect } from 'next/navigation';
import { headers, cookies } from 'next/headers';

const LOCALES = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;
const DEFAULT_LOCALE = 'fr';
const LOCALE_COOKIE = "NEXT_LOCALE";

function detectFromAcceptLanguage(header: string | null) {
    if (!header) return null;
    const parts = header.split(",").map(s => s.trim());
    for (const p of parts) {
        const lang = p.split(";")[0]?.toLowerCase();
        if (!lang) continue;
        const base = lang.split("-")[0];
        if (LOCALES.includes(base as any)) return base;
    }
    return null;
}

/**
 * Root Page
 * 
 * This page is hit if the middleware doesn't catch the root request.
 * It serves as a server-side fallback redirect, respecting user language preferences.
 */
export default async function RootPage() {
    const cookieStore = await cookies();
    const headersList = await headers();

    const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
    const acceptLang = headersList.get('accept-language');

    const detected =
        (cookieLocale && LOCALES.includes(cookieLocale as any) ? cookieLocale : null) ||
        detectFromAcceptLanguage(acceptLang) ||
        DEFAULT_LOCALE;

    redirect(`/${detected}`);
}
