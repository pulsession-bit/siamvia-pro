import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifySessionToken, COOKIE_NAME } from '@/lib/admin/auth';
import { getArticle, updateArticle, deleteArticle } from '@/lib/admin/github';
import { validateFrontmatter } from '@/lib/admin/frontmatter';
import type { PostFrontmatter } from '@/lib/blog/posts';

async function requireAuth() {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    const secret = process.env.ADMIN_SECRET;
    if (!token || !secret || !verifySessionToken(token, secret)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return null;
}

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ lang: string; slug: string }> }
) {
    const authError = await requireAuth();
    if (authError) return authError;

    const { lang, slug } = await params;

    try {
        const article = await getArticle(lang, slug);
        if (!article) {
            return NextResponse.json({ error: 'Article not found' }, { status: 404 });
        }
        return NextResponse.json(article);
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Failed to get article' },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ lang: string; slug: string }> }
) {
    const authError = await requireAuth();
    if (authError) return authError;

    const { lang, slug } = await params;

    try {
        const { frontmatter, content, sha } = await request.json() as {
            frontmatter: PostFrontmatter;
            content: string;
            sha: string;
        };

        const validation = validateFrontmatter(frontmatter);
        if (!validation.valid) {
            return NextResponse.json({ error: 'Validation failed', details: validation.errors }, { status: 400 });
        }

        await updateArticle(lang, slug, frontmatter, content, sha);

        return NextResponse.json({ success: true });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Failed to update article';
        const status = message.startsWith('CONFLICT') ? 409 : 500;
        return NextResponse.json({ error: message }, { status });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ lang: string; slug: string }> }
) {
    const authError = await requireAuth();
    if (authError) return authError;

    const { lang, slug } = await params;

    try {
        const { sha } = await request.json() as { sha: string };
        await deleteArticle(lang, slug, sha);
        return NextResponse.json({ success: true });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Failed to delete article';
        const status = message.startsWith('CONFLICT') ? 409 : 500;
        return NextResponse.json({ error: message }, { status });
    }
}
