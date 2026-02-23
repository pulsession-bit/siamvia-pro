import { NextRequest, NextResponse } from "next/server";
import { REVERSE_MAP } from "@/utils/slugs";

const LOCALES = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;
const NON_DEFAULT_LOCALES = ['en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'] as const;
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

    // 0) Exclusions statiques
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/admin") ||
        pathname.startsWith("/robots.txt") ||
        pathname.startsWith("/sitemap") ||
        pathname.startsWith("/favicon.ico") ||
        pathname.includes("/@") ||
        pathname.match(/\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt|xml|woff2?|tsx|jsx|ts)$/)
    ) {
        return NextResponse.next();
    }

    const parts = pathname.split("/");
    const first = parts[1];

    // ─────────────────────────────────────────────────────────────────
    // 1) URL avec préfixe /fr/ → 301 vers URL sans préfixe (FR = défaut)
    // ─────────────────────────────────────────────────────────────────
    if (first === DEFAULT_LOCALE) {
        const url = req.nextUrl.clone();
        // /fr → /   |   /fr/slug → /slug
        const rest = parts.slice(2).join("/");
        url.pathname = rest ? `/${rest}` : "/";
        return NextResponse.redirect(url, 301);
    }

    // ─────────────────────────────────────────────────────────────────
    // 2) URL avec préfixe d'une autre langue (/en/, /de/, etc.)
    // ─────────────────────────────────────────────────────────────────
    if (NON_DEFAULT_LOCALES.includes(first as any)) {
        const locale = first;
        const slug = parts.slice(2).join("/"); // tout après /en/

        // Résolution du slug localisé → clé interne
        const internalKey = REVERSE_MAP[locale]?.[slug];
        if (internalKey) {
            const url = req.nextUrl.clone();
            url.pathname = `/${locale}/${internalKey}`;
            return NextResponse.rewrite(url);
        }

        return NextResponse.next();
    }

    // ─────────────────────────────────────────────────────────────────
    // 3) URL sans préfixe → traitement FR (langue par défaut)
    // ─────────────────────────────────────────────────────────────────

    // 3a) Résolution du slug FR localisé → clé interne
    //     Ex: /visa-dtv-thailande → rewrite interne vers /fr/dtv
    const slug = parts.slice(1).join("/");
    const internalKey = REVERSE_MAP[DEFAULT_LOCALE]?.[slug];
    if (internalKey) {
        const url = req.nextUrl.clone();
        url.pathname = `/fr/${internalKey}`;
        return NextResponse.rewrite(url);
    }

    // 3b) URL racine ou path direct → rewrite silencieux vers /fr/...
    //     Le navigateur voit "/" mais Next.js sert "/fr/"
    //     Les bots voient bien du contenu FR sur l'URL canonique
    const url = req.nextUrl.clone();
    url.pathname = `/fr${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
}

export const config = {
    matcher: ["/((?!api|admin|_next/static|_next/image|favicon.ico|sitemap.*|robots.txt|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.webp).*)"],
};
