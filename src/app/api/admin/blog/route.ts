import { NextResponse, NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { verifySessionToken, COOKIE_NAME } from '@/lib/admin/auth';
import { listArticles, getArticleWithFrontmatter, createArticle } from '@/lib/admin/github';
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

export async function GET(request: NextRequest) {
    const authError = await requireAuth();
    if (authError) return authError;

    const lang = request.nextUrl.searchParams.get('lang') || 'fr';

    try {
        const files = await listArticles(lang);

        // Fetch frontmatter for each file in parallel
        const articles = await Promise.all(
            files.map(async (file) => {
                const data = await getArticleWithFrontmatter(lang, file);
                if (!data) return null;
                return {
                    slug: file.name.replace('.mdx', ''),
                    title: data.frontmatter.title,
                    description: data.frontmatter.description,
                    published_at: data.frontmatter.published_at,
                    updated_at: data.frontmatter.updated_at,
                    tags: data.frontmatter.tags,
                    sha: data.sha,
                };
            })
        );

        return NextResponse.json({
            articles: articles.filter(Boolean),
        });
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Failed to list articles' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    const authError = await requireAuth();
    if (authError) return authError;

    try {
        const { lang, slug, frontmatter, content } = await request.json() as {
            lang: string;
            slug: string;
            frontmatter: PostFrontmatter;
            content: string;
        };

        const validation = validateFrontmatter(frontmatter);
        if (!validation.valid) {
            return NextResponse.json({ error: 'Validation failed', details: validation.errors }, { status: 400 });
        }

        await createArticle(lang, slug, frontmatter, content);

        return NextResponse.json({ success: true, slug }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Failed to create article' },
            { status: 500 }
        );
    }
}
