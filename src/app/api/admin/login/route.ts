import { NextResponse } from 'next/server';
import { createSessionToken, COOKIE_NAME, getSessionCookieOptions } from '@/lib/admin/auth';
import { timingSafeEqual } from 'crypto';

export async function POST(request: Request) {
    try {
        const { password } = await request.json();
        const adminPassword = process.env.ADMIN_PASSWORD;
        const adminSecret = process.env.ADMIN_SECRET;

        if (!adminPassword || !adminSecret) {
            return NextResponse.json({ error: 'Admin not configured' }, { status: 500 });
        }

        // Timing-safe password comparison
        const a = Buffer.from(password || '');
        const b = Buffer.from(adminPassword);
        const match = a.length === b.length && timingSafeEqual(a, b);

        if (!match) {
            return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
        }

        const token = createSessionToken(adminSecret);
        const response = NextResponse.json({ success: true });
        response.cookies.set(COOKIE_NAME, token, getSessionCookieOptions());
        return response;
    } catch {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}
