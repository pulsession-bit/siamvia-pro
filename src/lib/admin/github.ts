import matter from 'gray-matter';
import type { PostFrontmatter } from '@/lib/blog/posts';

const GITHUB_API = 'https://api.github.com';
const REPO = process.env.GITHUB_REPO || 'pulsession-bit/siamvia-pro';
const BRANCH = process.env.GITHUB_BRANCH || 'main';
const CONTENT_PATH = 'src/content/blog';

function getToken(): string {
    const token = process.env.GITHUB_TOKEN;
    if (!token) throw new Error('GITHUB_TOKEN environment variable is not set');
    return token;
}

function headers() {
    return {
        Authorization: `Bearer ${getToken()}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
    };
}

export interface GitHubFile {
    name: string;
    path: string;
    sha: string;
    size: number;
}

export interface ArticleData {
    frontmatter: PostFrontmatter;
    content: string;
    sha: string;
}

export async function listArticles(lang: string): Promise<GitHubFile[]> {
    const url = `${GITHUB_API}/repos/${REPO}/contents/${CONTENT_PATH}/${lang}?ref=${BRANCH}`;
    const res = await fetch(url, { headers: headers(), cache: 'no-store' });

    if (res.status === 404) return [];
    if (!res.ok) throw new Error(`GitHub API error: ${res.status} ${await res.text()}`);

    const files = await res.json();
    return (files as GitHubFile[]).filter(f => f.name.endsWith('.mdx'));
}

export async function getArticle(lang: string, slug: string): Promise<ArticleData | null> {
    const url = `${GITHUB_API}/repos/${REPO}/contents/${CONTENT_PATH}/${lang}/${slug}.mdx?ref=${BRANCH}`;
    const res = await fetch(url, { headers: headers(), cache: 'no-store' });

    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`GitHub API error: ${res.status} ${await res.text()}`);

    const file = await res.json();
    const raw = Buffer.from(file.content, 'base64').toString('utf-8');
    const { data, content } = matter(raw);

    return {
        frontmatter: data as PostFrontmatter,
        content,
        sha: file.sha,
    };
}

export async function getArticleWithFrontmatter(lang: string, file: GitHubFile): Promise<{ frontmatter: PostFrontmatter; sha: string } | null> {
    const slug = file.name.replace('.mdx', '');
    const article = await getArticle(lang, slug);
    if (!article) return null;
    return { frontmatter: article.frontmatter, sha: article.sha };
}

function buildFileContent(frontmatter: PostFrontmatter, content: string): string {
    return matter.stringify(content, frontmatter);
}

export async function createArticle(lang: string, slug: string, frontmatter: PostFrontmatter, content: string): Promise<void> {
    const url = `${GITHUB_API}/repos/${REPO}/contents/${CONTENT_PATH}/${lang}/${slug}.mdx`;
    const fileContent = buildFileContent(frontmatter, content);
    const encoded = Buffer.from(fileContent).toString('base64');

    const res = await fetch(url, {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify({
            message: `blog: add ${lang}/${slug}`,
            content: encoded,
            branch: BRANCH,
        }),
    });

    if (!res.ok) {
        const body = await res.text();
        throw new Error(`GitHub API error creating article: ${res.status} ${body}`);
    }
}

export async function updateArticle(lang: string, slug: string, frontmatter: PostFrontmatter, content: string, sha: string): Promise<void> {
    const url = `${GITHUB_API}/repos/${REPO}/contents/${CONTENT_PATH}/${lang}/${slug}.mdx`;
    const fileContent = buildFileContent(frontmatter, content);
    const encoded = Buffer.from(fileContent).toString('base64');

    const res = await fetch(url, {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify({
            message: `blog: update ${lang}/${slug}`,
            content: encoded,
            sha,
            branch: BRANCH,
        }),
    });

    if (res.status === 409) {
        throw new Error('CONFLICT: Article was modified by someone else. Please reload and try again.');
    }
    if (!res.ok) {
        const body = await res.text();
        throw new Error(`GitHub API error updating article: ${res.status} ${body}`);
    }
}

export async function deleteArticle(lang: string, slug: string, sha: string): Promise<void> {
    const url = `${GITHUB_API}/repos/${REPO}/contents/${CONTENT_PATH}/${lang}/${slug}.mdx`;

    const res = await fetch(url, {
        method: 'DELETE',
        headers: headers(),
        body: JSON.stringify({
            message: `blog: delete ${lang}/${slug}`,
            sha,
            branch: BRANCH,
        }),
    });

    if (res.status === 409) {
        throw new Error('CONFLICT: Article was modified by someone else. Please reload and try again.');
    }
    if (!res.ok) {
        const body = await res.text();
        throw new Error(`GitHub API error deleting article: ${res.status} ${body}`);
    }
}
