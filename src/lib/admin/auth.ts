import { createHmac, timingSafeEqual } from 'crypto';

export const COOKIE_NAME = 'admin_session';
export const SESSION_MAX_AGE = 24 * 60 * 60 * 1000; // 24 hours

export function createSessionToken(secret: string): string {
    const timestamp = Date.now().toString();
    const hmac = createHmac('sha256', secret).update(timestamp).digest('hex');
    return `${timestamp}:${hmac}`;
}

export function verifySessionToken(token: string, secret: string, maxAgeMs: number = SESSION_MAX_AGE): boolean {
    const parts = token.split(':');
    if (parts.length !== 2) return false;

    const [timestamp, providedHmac] = parts;
    const ts = parseInt(timestamp, 10);
    if (isNaN(ts)) return false;

    // Check expiration
    if (Date.now() - ts > maxAgeMs) return false;

    // Recompute HMAC
    const expectedHmac = createHmac('sha256', secret).update(timestamp).digest('hex');

    // Timing-safe comparison
    const a = Buffer.from(providedHmac, 'hex');
    const b = Buffer.from(expectedHmac, 'hex');
    if (a.length !== b.length) return false;

    return timingSafeEqual(a, b);
}

export function getSessionCookieOptions() {
    return {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax' as const,
        path: '/admin',
        maxAge: SESSION_MAX_AGE / 1000, // in seconds for cookie
    };
}
