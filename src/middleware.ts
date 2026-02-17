import { NextRequest, NextResponse } from "next/server";
import { REVERSE_MAP } from "@/utils/slugs";

const LOCALES = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;
const DEFAULT_LOCALE = "fr";
const LOCALE_COOKIE = "NEXT_LOCALE";

function detectFromAcceptLanguage(header: string | null): string | null {
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

function isBot(ua: string | null) {
    if (!ua) return false;
    return /(googlebot|bingbot|duckduckbot|yandex|baiduspider|slurp|semrush|ahrefs|mj12bot)/i.test(ua);
}

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // 0) Exclusions
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/admin") ||
        pathname.startsWith("/robots.txt") ||
        pathname.startsWith("/sitemap.xml") ||
        pathname.startsWith("/favicon.ico") ||
        pathname.includes("/@") || // Exclude Next.js/Vite dev assets
        pathname.match(/\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt|xml|woff2?|tsx|jsx|ts)$/)
    ) {
        return NextResponse.next();
    }

    // 1) Check if already has locale prefix
    const parts = pathname.split("/");
    const first = parts[1];

    if (LOCALES.includes(first as any)) {
        // It has a locale. Check if we strictly need to rewrite a localized slug to an internal folder structure.
        const locale = first;
        const slug = parts.slice(2).join("/"); // everything after /fr/

        // Check REVERSE_MAP
        // REVERSE_MAP['fr']['creer-entreprise-thailande'] => 'company-setup'
        const internalKey = REVERSE_MAP[locale]?.[slug];

        if (internalKey) {
            // We found a corresponding internal key.
            // Rewrite the URL to point to the actual Next.js folder (e.g. /fr/company-setup)
            // But keep the URL in the browser bar as is.
            const url = req.nextUrl.clone();
            url.pathname = `/${locale}/${internalKey}`;
            return NextResponse.rewrite(url);
        }

        return NextResponse.next();
    }

    // 2) Detect locale: cookie > accept-language > default
    const cookieLocale = req.cookies.get(LOCALE_COOKIE)?.value;
    const detected =
        (cookieLocale && LOCALES.includes(cookieLocale as any) ? cookieLocale : null) ||
        detectFromAcceptLanguage(req.headers.get("accept-language")) ||
        DEFAULT_LOCALE;

    // 3) SEO for bots
    const targetLocale = isBot(req.headers.get("user-agent")) ? DEFAULT_LOCALE : detected;

    const url = req.nextUrl.clone();
    url.pathname = `/${targetLocale}${pathname === '/' ? '' : pathname}`;

    return NextResponse.redirect(url, 307);
}

export const config = {
    matcher: ["/((?!api|admin|_next/static|_next/image|favicon.ico|sitemap.*|robots.txt|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.webp).*)"],
};
