import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog/posts';
import { getTranslatedPath } from '@/utils/slugs';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BLOG_LANGS = ['fr', 'en', 'th'] as const;

const BLOG_SLUGS: Record<string, string> = {
    fr: 'blog-visa-thailande',
    en: 'thailand-visa-blog',
    th: 'blog',
};

const TRANSLATIONS: Record<string, {
    meta_title: string;
    meta_description: string;
    hero_title: string;
    hero_subtitle: string;
    read_more: string;
    reading_time: string;
    published_on: string;
    no_articles: string;
    breadcrumb_home: string;
    breadcrumb_blog: string;
}> = {
    fr: {
        meta_title: 'Blog Visa Thailande — Guides & Actualites | SiamVisa Pro',
        meta_description: 'Articles, guides et analyses sur les visas thailandais : DTV, Elite, Retraite, Business. Informations a jour pour 2026.',
        hero_title: 'Blog & Actualites',
        hero_subtitle: 'Guides, analyses et actualites sur les visas thailandais',
        read_more: "Lire l'article",
        reading_time: 'min de lecture',
        published_on: 'Publie le',
        no_articles: 'Aucun article pour le moment.',
        breadcrumb_home: 'Accueil',
        breadcrumb_blog: 'Blog',
    },
    en: {
        meta_title: 'Thailand Visa Blog — Guides & News | SiamVisa Pro',
        meta_description: 'Articles, guides and analysis on Thailand visas: DTV, Elite, Retirement, Business. Up-to-date information for 2026.',
        hero_title: 'Blog & News',
        hero_subtitle: 'Guides, analysis and updates on Thailand visas',
        read_more: 'Read article',
        reading_time: 'min read',
        published_on: 'Published on',
        no_articles: 'No articles yet.',
        breadcrumb_home: 'Home',
        breadcrumb_blog: 'Blog',
    },
    th: {
        meta_title: 'บล็อกวีซ่าไทย — คู่มือและข่าวสาร | SiamVisa Pro',
        meta_description: 'บทความ คู่มือ และการวิเคราะห์เกี่ยวกับวีซ่าไทย: DTV, Elite, เกษียณ, ธุรกิจ',
        hero_title: 'บล็อกและข่าวสาร',
        hero_subtitle: 'คู่มือ การวิเคราะห์ และข่าวอัปเดตเกี่ยวกับวีซ่าไทย',
        read_more: 'อ่านบทความ',
        reading_time: 'นาทีอ่าน',
        published_on: 'เผยแพร่เมื่อ',
        no_articles: 'ยังไม่มีบทความ',
        breadcrumb_home: 'หน้าแรก',
        breadcrumb_blog: 'บล็อก',
    },
};

export function generateStaticParams() {
    return BLOG_LANGS.map(lang => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
    const baseUrl = 'https://www.siamvisapro.com';
    const blogSlug = BLOG_SLUGS[lang] || 'blog';

    const languages: Record<string, string> = {};
    for (const l of BLOG_LANGS) {
        languages[l] = `${baseUrl}/${l}/${BLOG_SLUGS[l] || 'blog'}`;
    }
    languages['x-default'] = languages['en'];

    return {
        title: t.meta_title,
        description: t.meta_description,
        alternates: {
            canonical: `${baseUrl}/${lang}/${blogSlug}`,
            languages,
        },
    };
}

export default async function BlogIndexPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const posts = getAllPosts(lang);
    const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
    const blogSlug = BLOG_SLUGS[lang] || 'blog';
    const baseUrl = 'https://www.siamvisapro.com';

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.breadcrumb_home, item: `${baseUrl}/${lang}` },
            { '@type': 'ListItem', position: 2, name: t.breadcrumb_blog },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="bg-slate-50 min-h-screen pb-20">
                <div className="bg-slate-900 text-white pt-32 pb-16">
                    <Container>
                        <nav className="text-sm text-slate-400 mb-6">
                            <Link href={getTranslatedPath('home', lang)} className="hover:text-white">{t.breadcrumb_home}</Link>
                            <span className="mx-2">/</span>
                            <span className="text-slate-300">{t.breadcrumb_blog}</span>
                        </nav>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.hero_title}</h1>
                        <p className="text-xl text-slate-300">{t.hero_subtitle}</p>
                    </Container>
                </div>

                <Container className="py-12">
                    {posts.length === 0 ? (
                        <p className="text-center text-slate-500 py-20 text-lg">{t.no_articles}</p>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map(post => {
                                const formattedDate = new Date(post.frontmatter.published_at).toLocaleDateString(
                                    lang === 'fr' ? 'fr-FR' : lang === 'th' ? 'th-TH' : 'en-US',
                                    { year: 'numeric', month: 'long', day: 'numeric' }
                                );

                                return (
                                    <Link
                                        key={post.frontmatter.slug}
                                        href={`/${lang}/${blogSlug}/${post.frontmatter.slug}`}
                                        className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md hover:border-amber-200 transition-all"
                                    >
                                        {post.frontmatter.featured_image && (
                                            <div className="relative h-48 overflow-hidden">
                                                <Image
                                                    src={post.frontmatter.featured_image}
                                                    alt={post.frontmatter.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        )}
                                        <div className="p-6">
                                            {post.frontmatter.tags && (
                                                <div className="flex flex-wrap gap-1.5 mb-3">
                                                    {post.frontmatter.tags.slice(0, 3).map(tag => (
                                                        <span key={tag} className="px-2 py-0.5 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                            <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                                                {post.frontmatter.title}
                                            </h2>
                                            <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                                                {post.frontmatter.description}
                                            </p>
                                            <div className="flex items-center justify-between text-xs text-slate-400">
                                                <div className="flex items-center gap-3">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="h-3.5 w-3.5" />
                                                        {formattedDate}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="h-3.5 w-3.5" />
                                                        {post.readingTime} {t.reading_time}
                                                    </span>
                                                </div>
                                                <ArrowRight className="h-4 w-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </Container>
            </div>
        </>
    );
}
