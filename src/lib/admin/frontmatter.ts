import type { PostFrontmatter } from '@/lib/blog/posts';

export const BLOG_LANGS = ['fr', 'en', 'th'] as const;

export const DEFAULT_FRONTMATTER: Partial<PostFrontmatter> = {
    author: 'SiamVisa Pro',
    stage: 'discover',
    intent: 'informational',
    visa_scope: [],
    clusters: [],
    tags: [],
};

export function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // remove diacritics
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

export function validateFrontmatter(data: Partial<PostFrontmatter>): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.title?.trim()) errors.push('Title is required');
    if (!data.description?.trim()) errors.push('Description is required');
    if (!data.slug?.trim()) errors.push('Slug is required');
    if (!data.published_at) errors.push('Publication date is required');
    if (!data.author?.trim()) errors.push('Author is required');

    if (data.slug && !/^[a-z0-9-]+$/.test(data.slug)) {
        errors.push('Slug must only contain lowercase letters, numbers and hyphens');
    }

    if (data.published_at && isNaN(Date.parse(data.published_at))) {
        errors.push('Invalid publication date format');
    }

    if (data.updated_at && isNaN(Date.parse(data.updated_at))) {
        errors.push('Invalid update date format');
    }

    return { valid: errors.length === 0, errors };
}
