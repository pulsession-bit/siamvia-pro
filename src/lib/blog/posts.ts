import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export interface PostFrontmatter {
    title: string;
    description: string;
    slug: string;
    published_at: string;
    updated_at?: string;
    author: string;
    stage?: 'discover' | 'compare' | 'apply';
    intent?: 'informational' | 'comparative' | 'transactional';
    visa_scope?: string[];
    clusters?: string[];
    tags?: string[];
    featured_image?: string;
    reading_time?: number;
    hreflang?: Record<string, string>;
}

export interface Post {
    frontmatter: PostFrontmatter;
    content: string;
    readingTime: number;
}

const BLOG_LANGS = ['fr', 'en', 'th'] as const;
const CONTENT_DIR = path.join(process.cwd(), 'src/content/blog');

function getPostFiles(lang: string): string[] {
    const dir = path.join(CONTENT_DIR, lang);
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter(f => f.endsWith('.mdx'));
}

export function getPostBySlug(lang: string, slug: string): Post | null {
    const filePath = path.join(CONTENT_DIR, lang, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    const rt = readingTime(content);

    return {
        frontmatter: {
            ...data,
            slug,
            reading_time: data.reading_time || Math.ceil(rt.minutes),
        } as PostFrontmatter,
        content,
        readingTime: data.reading_time || Math.ceil(rt.minutes),
    };
}

export function getAllPosts(lang: string): Post[] {
    const files = getPostFiles(lang);
    const now = new Date();

    return files
        .map(file => {
            const slug = file.replace('.mdx', '');
            return getPostBySlug(lang, slug);
        })
        .filter((post): post is Post => {
            if (!post) return false;
            const pubDate = new Date(post.frontmatter.published_at);
            return pubDate <= now;
        })
        .sort((a, b) =>
            new Date(b.frontmatter.published_at).getTime() -
            new Date(a.frontmatter.published_at).getTime()
        );
}

export function getAllSlugs(): { lang: string; slug: string }[] {
    const slugs: { lang: string; slug: string }[] = [];
    for (const lang of BLOG_LANGS) {
        const posts = getAllPosts(lang);
        for (const post of posts) {
            slugs.push({ lang, slug: post.frontmatter.slug });
        }
    }
    return slugs;
}
