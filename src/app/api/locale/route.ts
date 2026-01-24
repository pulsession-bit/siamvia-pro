import { NextRequest, NextResponse } from "next/server";

const LOCALE_COOKIE = "NEXT_LOCALE";

export async function POST(req: NextRequest) {
    try {
        const { locale } = await req.json();
        const res = NextResponse.json({ ok: true });

        res.cookies.set(LOCALE_COOKIE, locale, {
            path: "/",
            httpOnly: false, // Accessible by client if needed, or set to true for security
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 365, // 1 year
        });

        return res;
    } catch (error) {
        return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
    }
}
