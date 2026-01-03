import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'];
const defaultLanguage = 'fr';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if the pathname is missing a locale
    const pathnameIsMissingLocale = languages.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        // Simple language detection from headers
        const acceptLanguage = request.headers.get('accept-language');
        let detectedLang = defaultLanguage;

        if (acceptLanguage) {
            // Check if any of our supported languages are in the accept-language header
            const preferredLang = acceptLanguage
                .split(',')
                .map(lang => lang.split(';')[0].split('-')[0].toLowerCase())
                .find(lang => languages.includes(lang));

            if (preferredLang) {
                detectedLang = preferredLang;
            }
        }

        // Redirect to the detected language (or default)
        return NextResponse.redirect(
            new URL(`/${detectedLang}${pathname === '/' ? '' : pathname}`, request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    // Matcher ignoring _next, api, and static files
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.*|robots.txt|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.webp).*)',
    ],
};
