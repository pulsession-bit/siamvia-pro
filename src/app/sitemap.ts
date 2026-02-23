import { MetadataRoute } from 'next';
import { getTranslatedPath, PageKey } from '@/utils/slugs';
import { getAllPosts } from '@/lib/blog/posts';

export const dynamic = 'force-static';

const pages: PageKey[] = [
    'home',
    'dtv',
    'services',
    'tourist-visa',
    'elite-visa',
    'retirement-visa',
    'ltr',
    'visa-run',
    'search',
    'business-visa',
    'exemption-visa',
    'student-visa',
    'family-visa',
    'smart-visa',
    'volunteer-visa',
    'medical-visa',
    'religious-visa',
    'media-visa',
    'official-visa',
    'scientific-visa',
    'apply',
    'about',
    'ai-technology',
    'faq',
    'contact',
    'terms',
    'sitemap',
    'company-setup',
    'buy-property',
    'blog',
    'insurance'
];

// DTV satellite pages — FR only
const frOnlyPages: PageKey[] = [
    'dtv/documents',
    'dtv/erreurs',
    'dtv/comparatif',
    'dtv/delais'
];


const languages = ['fr', 'en', 'de', 'es', 'it', 'th', 'ru', 'zh', 'ja', 'ko', 'ar'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siamvisapro.com';
    const currentDate = new Date();

    const urls: MetadataRoute.Sitemap = [];

    // Generate a single sitemap containing ALL languages and ALL pages
    languages.forEach((lang) => {
        pages.forEach((page) => {
            // Prioritize home and DTV (most popular)
            const priority =
                page === 'home' || page === 'dtv'
                    ? 0.9
                    : ['services', 'tourist-visa', 'elite-visa', 'retirement-visa', 'ltr', 'visa-run', 'company-setup', 'buy-property'].includes(page)
                        ? 0.8
                        : page === 'search'
                            ? 0.7
                            : page === 'faq'
                                ? 0.6
                                : page === 'contact'
                                    ? 0.5
                                    : 0.3;

            const translatedPath = getTranslatedPath(page, lang);

            // Create alternates map including ALL languages for this page
            const alternates: Record<string, string> = {};
            languages.forEach((l) => {
                alternates[l] = `${baseUrl}${getTranslatedPath(page, l)}`;
            });

            // Add x-default pointing to French (default language, no prefix)
            alternates['x-default'] = `${baseUrl}${getTranslatedPath(page, 'fr')}`;

            urls.push({
                url: `${baseUrl}${translatedPath}`,
                lastModified: currentDate,
                changeFrequency:
                    page === 'home' || page === 'dtv' ? 'weekly' : page === 'terms' ? 'yearly' : 'monthly',
                priority,
                alternates: {
                    languages: alternates,
                },
            });
        });
    });

    // FR-only satellite pages (no alternates for other languages)
    frOnlyPages.forEach((page) => {
        const translatedPath = getTranslatedPath(page, 'fr');
        urls.push({
            url: `${baseUrl}${translatedPath}`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
            alternates: {
                languages: {
                    fr: `${baseUrl}${translatedPath}`,
                    'x-default': `${baseUrl}${translatedPath}`,
                },
            },
        });
    });

    // Blog article URLs (FR, EN, TH only)
    const blogSlugs: Record<string, string> = { fr: 'blog-visa-thailande', en: 'thailand-visa-blog', th: 'blog' };
    const blogLangs = ['fr', 'en', 'th'];
    for (const lang of blogLangs) {
        const posts = getAllPosts(lang);
        const blogSlug = blogSlugs[lang];
        for (const post of posts) {
            // FR blog: URL sans préfixe /fr/
            const articleUrl = lang === 'fr'
                ? `${baseUrl}/${blogSlug}/${post.frontmatter.slug}`
                : `${baseUrl}/${lang}/${blogSlug}/${post.frontmatter.slug}`;
            const articleAlternates: Record<string, string> = {};

            if (post.frontmatter.hreflang) {
                for (const [hLang, hSlug] of Object.entries(post.frontmatter.hreflang)) {
                    articleAlternates[hLang] = `${baseUrl}/${hLang}/${blogSlugs[hLang] || 'blog'}/${hSlug}`;
                }
                articleAlternates['x-default'] = articleAlternates['fr'] || articleUrl;
            }

            urls.push({
                url: articleUrl,
                lastModified: new Date(post.frontmatter.updated_at || post.frontmatter.published_at),
                changeFrequency: 'monthly',
                priority: 0.7,
                alternates: Object.keys(articleAlternates).length > 0 ? { languages: articleAlternates } : undefined,
            });
        }
    }

    // Add llms.txt
    urls.push({
        url: `${baseUrl}/llms.txt`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.5,
    });

    return urls;
}
