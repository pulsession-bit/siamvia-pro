import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { getPostBySlug, getAllSlugs } from '@/lib/blog/posts';
import { mdxComponents } from '@/lib/blog/mdx-components';
import { Container } from '@/components/ui/Container';
import { getTranslatedPath } from '@/utils/slugs';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const BLOG_SLUGS: Record<string, string> = {
    fr: 'blog-visa-thailande',
    en: 'thailand-visa-blog',
    th: 'blog',
};

export function generateStaticParams() {
    return getAllSlugs();
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
    const { lang, slug } = await params;
    const post = getPostBySlug(lang, slug);
    if (!post) return { title: 'Article not found' };

    const baseUrl = 'https://www.siamvisapro.com';
    const blogSlug = BLOG_SLUGS[lang] || 'blog';
    const canonical = `${baseUrl}/${lang}/${blogSlug}/${slug}`;

    const languages: Record<string, string> = {};
    if (post.frontmatter.hreflang) {
        for (const [hLang, hSlug] of Object.entries(post.frontmatter.hreflang)) {
            const hBlogSlug = BLOG_SLUGS[hLang] || 'blog';
            languages[hLang] = `${baseUrl}/${hLang}/${hBlogSlug}/${hSlug}`;
        }
        languages['x-default'] = languages['en'] || canonical;
    }

    return {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        alternates: {
            canonical,
            languages: Object.keys(languages).length > 0 ? languages : undefined,
        },
        openGraph: {
            title: post.frontmatter.title,
            description: post.frontmatter.description,
            url: canonical,
            type: 'article',
            publishedTime: post.frontmatter.published_at,
            modifiedTime: post.frontmatter.updated_at,
            images: post.frontmatter.featured_image ? [{ url: post.frontmatter.featured_image, width: 1200, height: 630 }] : undefined,
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
    const { lang, slug } = await params;
    const post = getPostBySlug(lang, slug);
    if (!post) notFound();

    const blogSlug = BLOG_SLUGS[lang] || 'blog';
    const baseUrl = 'https://www.siamvisapro.com';

    const t = {
        fr: { back: 'Retour au blog', published: 'Publie le', reading: 'min de lecture', breadcrumb_home: 'Accueil', breadcrumb_blog: 'Blog' },
        en: { back: 'Back to blog', published: 'Published on', reading: 'min read', breadcrumb_home: 'Home', breadcrumb_blog: 'Blog' },
        th: { back: 'กลับไปบล็อก', published: 'เผยแพร่เมื่อ', reading: 'นาทีอ่าน', breadcrumb_home: 'หน้าแรก', breadcrumb_blog: 'บล็อก' },
    }[lang] || { back: 'Back to blog', published: 'Published on', reading: 'min read', breadcrumb_home: 'Home', breadcrumb_blog: 'Blog' };

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.frontmatter.title,
        description: post.frontmatter.description,
        datePublished: post.frontmatter.published_at,
        dateModified: post.frontmatter.updated_at || post.frontmatter.published_at,
        author: { '@type': 'Organization', name: post.frontmatter.author || 'SiamVisa Pro' },
        publisher: { '@type': 'Organization', name: 'SiamVisa Pro', url: baseUrl },
        mainEntityOfPage: `${baseUrl}/${lang}/${blogSlug}/${slug}`,
        image: post.frontmatter.featured_image,
        inLanguage: lang,
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.breadcrumb_home, item: `${baseUrl}/${lang}` },
            { '@type': 'ListItem', position: 2, name: t.breadcrumb_blog, item: `${baseUrl}/${lang}/${blogSlug}` },
            { '@type': 'ListItem', position: 3, name: post.frontmatter.title },
        ],
    };

    const formattedDate = new Date(post.frontmatter.published_at).toLocaleDateString(
        lang === 'fr' ? 'fr-FR' : lang === 'th' ? 'th-TH' : 'en-US',
        { year: 'numeric', month: 'long', day: 'numeric' }
    );

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="bg-slate-50 min-h-screen pb-20">
                <div className="bg-slate-900 text-white pt-32 pb-16">
                    <Container>
                        <nav className="text-sm text-slate-400 mb-6">
                            <Link href={getTranslatedPath('home', lang)} className="hover:text-white">{t.breadcrumb_home}</Link>
                            <span className="mx-2">/</span>
                            <Link href={`/${lang}/${blogSlug}`} className="hover:text-white">{t.breadcrumb_blog}</Link>
                            <span className="mx-2">/</span>
                            <span className="text-slate-300">{post.frontmatter.title}</span>
                        </nav>

                        <div className="max-w-3xl">
                            {post.frontmatter.tags && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.frontmatter.tags.slice(0, 4).map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full border border-amber-500/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                {post.frontmatter.title}
                            </h1>

                            <p className="text-lg text-slate-300 mb-6">{post.frontmatter.description}</p>

                            <div className="flex items-center gap-6 text-sm text-slate-400">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="h-4 w-4" />
                                    <span>{t.published} {formattedDate}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="h-4 w-4" />
                                    <span>{post.readingTime} {t.reading}</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

                {post.frontmatter.video && (
                    <div className="bg-slate-900">
                        <div className="max-w-5xl mx-auto px-4">
                            <div className="relative w-full rounded-xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={post.frontmatter.video}
                                    title={post.frontmatter.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        <div className="h-12 bg-gradient-to-b from-slate-900 to-slate-50" />
                    </div>
                )}

                <Container>
                    <article className="max-w-3xl py-12 prose-slate">
                        <MDXRemote
                            source={post.content}
                            components={mdxComponents}
                            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
                        />
                    </article>

                    <div className="max-w-3xl pt-8 border-t border-slate-200">
                        <Link
                            href={`/${lang}/${blogSlug}`}
                            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            {t.back}
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    );
}
