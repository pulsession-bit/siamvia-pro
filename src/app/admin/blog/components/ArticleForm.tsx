'use client';

import { useState, useCallback, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { PostFrontmatter } from '@/lib/blog/posts';
import { slugify, DEFAULT_FRONTMATTER, BLOG_LANGS } from '@/lib/admin/frontmatter';

interface ArticleFormProps {
    mode: 'create' | 'edit';
    initialLang?: string;
    initialFrontmatter?: PostFrontmatter;
    initialContent?: string;
    initialSha?: string;
    onSave: (data: {
        lang: string;
        slug: string;
        frontmatter: PostFrontmatter;
        content: string;
        sha?: string;
    }) => Promise<void>;
}

const today = new Date().toISOString().split('T')[0];

export default function ArticleForm({
    mode,
    initialLang = 'fr',
    initialFrontmatter,
    initialContent = '',
    initialSha,
    onSave,
}: ArticleFormProps) {
    const [lang, setLang] = useState(initialLang);
    const [title, setTitle] = useState(initialFrontmatter?.title || '');
    const [description, setDescription] = useState(initialFrontmatter?.description || '');
    const [slug, setSlug] = useState(initialFrontmatter?.slug || '');
    const [publishedAt, setPublishedAt] = useState(initialFrontmatter?.published_at || today);
    const [updatedAt, setUpdatedAt] = useState(initialFrontmatter?.updated_at || '');
    const [author, setAuthor] = useState(initialFrontmatter?.author || DEFAULT_FRONTMATTER.author || 'SiamVisa Pro');
    const [stage, setStage] = useState<'discover' | 'compare' | 'apply'>(initialFrontmatter?.stage || 'discover');
    const [intent, setIntent] = useState<'informational' | 'comparative' | 'transactional'>(initialFrontmatter?.intent || 'informational');
    const [visaScope, setVisaScope] = useState(initialFrontmatter?.visa_scope?.join(', ') || '');
    const [clusters, setClusters] = useState(initialFrontmatter?.clusters?.join(', ') || '');
    const [tags, setTags] = useState(initialFrontmatter?.tags?.join(', ') || '');
    const [featuredImage, setFeaturedImage] = useState(initialFrontmatter?.featured_image || '');
    const [hreflang, setHreflang] = useState(
        initialFrontmatter?.hreflang
            ? Object.entries(initialFrontmatter.hreflang).map(([k, v]) => `${k}:${v}`).join(', ')
            : ''
    );
    const [content, setContent] = useState(initialContent);
    const [showPreview, setShowPreview] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [autoSlug, setAutoSlug] = useState(mode === 'create');

    const handleTitleChange = useCallback((value: string) => {
        setTitle(value);
        if (autoSlug && mode === 'create') {
            setSlug(slugify(value));
        }
    }, [autoSlug, mode]);

    const handleSlugChange = useCallback((value: string) => {
        setSlug(value);
        setAutoSlug(false);
    }, []);

    const wordCount = useMemo(() => {
        return content.trim().split(/\s+/).filter(Boolean).length;
    }, [content]);

    const readingTime = useMemo(() => {
        return Math.max(1, Math.ceil(wordCount / 200));
    }, [wordCount]);

    function parseCommaSeparated(value: string): string[] {
        return value.split(',').map(s => s.trim()).filter(Boolean);
    }

    function parseHreflang(value: string): Record<string, string> {
        const result: Record<string, string> = {};
        value.split(',').forEach(pair => {
            const [k, v] = pair.split(':').map(s => s.trim());
            if (k && v) result[k] = v;
        });
        return result;
    }

    async function handleSubmit() {
        setError('');
        setSuccess('');
        setSaving(true);

        try {
            const frontmatter: PostFrontmatter = {
                title,
                description,
                slug,
                published_at: publishedAt,
                author,
                stage,
                intent,
            };

            if (updatedAt) frontmatter.updated_at = updatedAt;
            if (visaScope) frontmatter.visa_scope = parseCommaSeparated(visaScope);
            if (clusters) frontmatter.clusters = parseCommaSeparated(clusters);
            if (tags) frontmatter.tags = parseCommaSeparated(tags);
            if (featuredImage) frontmatter.featured_image = featuredImage;
            frontmatter.reading_time = readingTime;
            if (hreflang) frontmatter.hreflang = parseHreflang(hreflang);

            await onSave({
                lang,
                slug,
                frontmatter,
                content,
                sha: initialSha,
            });

            setSuccess(mode === 'create'
                ? 'Article cree ! Le site se reconstruit automatiquement (1-3 min).'
                : 'Article mis a jour ! Le site se reconstruit automatiquement (1-3 min).'
            );
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erreur lors de la sauvegarde');
        } finally {
            setSaving(false);
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">
                    {mode === 'create' ? 'Nouvel article' : 'Modifier l\'article'}
                </h2>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setShowPreview(!showPreview)}
                        className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                    >
                        {showPreview ? 'Editeur' : 'Preview'}
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={saving || !title || !slug}
                        className="px-6 py-2 text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 rounded-lg transition-colors"
                    >
                        {saving ? 'Sauvegarde...' : 'Sauvegarder'}
                    </button>
                </div>
            </div>

            {/* Messages */}
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
            )}
            {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">{success}</div>
            )}

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Left: Form */}
                <div className={showPreview ? 'hidden lg:block' : ''}>
                    <div className="space-y-4">
                        {/* Language */}
                        {mode === 'create' && (
                            <Field label="Langue">
                                <select
                                    value={lang}
                                    onChange={(e) => setLang(e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm"
                                >
                                    {BLOG_LANGS.map(l => (
                                        <option key={l} value={l}>{l.toUpperCase()}</option>
                                    ))}
                                </select>
                            </Field>
                        )}

                        {/* Title */}
                        <Field label="Titre">
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => handleTitleChange(e.target.value)}
                                placeholder="Guide complet du Visa DTV..."
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm"
                            />
                        </Field>

                        {/* Slug */}
                        <Field label="Slug">
                            <input
                                type="text"
                                value={slug}
                                onChange={(e) => handleSlugChange(e.target.value)}
                                placeholder="guide-visa-dtv-2026"
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm font-mono"
                                readOnly={mode === 'edit'}
                            />
                        </Field>

                        {/* Description */}
                        <Field label="Description (SEO)">
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={2}
                                placeholder="Description pour les moteurs de recherche..."
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm"
                            />
                            <span className="text-xs text-slate-400 mt-1 block">{description.length}/160 chars</span>
                        </Field>

                        {/* Dates */}
                        <div className="grid grid-cols-2 gap-4">
                            <Field label="Date de publication">
                                <input type="date" value={publishedAt} onChange={(e) => setPublishedAt(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm" />
                            </Field>
                            <Field label="Derniere mise a jour">
                                <input type="date" value={updatedAt} onChange={(e) => setUpdatedAt(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm" />
                            </Field>
                        </div>

                        {/* Author */}
                        <Field label="Auteur">
                            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm" />
                        </Field>

                        {/* Stage + Intent */}
                        <div className="grid grid-cols-2 gap-4">
                            <Field label="Stage">
                                <select value={stage} onChange={(e) => setStage(e.target.value as 'discover' | 'compare' | 'apply')} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm">
                                    <option value="discover">Discover</option>
                                    <option value="compare">Compare</option>
                                    <option value="apply">Apply</option>
                                </select>
                            </Field>
                            <Field label="Intent">
                                <select value={intent} onChange={(e) => setIntent(e.target.value as 'informational' | 'comparative' | 'transactional')} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm">
                                    <option value="informational">Informational</option>
                                    <option value="comparative">Comparative</option>
                                    <option value="transactional">Transactional</option>
                                </select>
                            </Field>
                        </div>

                        {/* Visa Scope */}
                        <Field label="Visa Scope (comma-separated)">
                            <input
                                type="text"
                                value={visaScope}
                                onChange={(e) => setVisaScope(e.target.value)}
                                placeholder="DTV, LTR, ELITE"
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm"
                            />
                        </Field>

                        {/* Clusters */}
                        <Field label="Clusters (comma-separated)">
                            <input
                                type="text"
                                value={clusters}
                                onChange={(e) => setClusters(e.target.value)}
                                placeholder="dtv, digital-nomad"
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm"
                            />
                        </Field>

                        {/* Tags */}
                        <Field label="Tags (comma-separated)">
                            <input
                                type="text"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                                placeholder="dtv, digital-nomad, 2026"
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm"
                            />
                            {tags && (
                                <div className="flex flex-wrap gap-1 mt-1.5">
                                    {parseCommaSeparated(tags).map(tag => (
                                        <span key={tag} className="px-2 py-0.5 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">{tag}</span>
                                    ))}
                                </div>
                            )}
                        </Field>

                        {/* Featured Image */}
                        <Field label="Image URL">
                            <input
                                type="url"
                                value={featuredImage}
                                onChange={(e) => setFeaturedImage(e.target.value)}
                                placeholder="https://images.unsplash.com/..."
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm"
                            />
                            {featuredImage && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={featuredImage} alt="Preview" className="mt-2 h-32 w-full object-cover rounded-lg" />
                            )}
                        </Field>

                        {/* Hreflang */}
                        <Field label="Hreflang (fr:slug-fr, en:slug-en, th:slug-th)">
                            <input
                                type="text"
                                value={hreflang}
                                onChange={(e) => setHreflang(e.target.value)}
                                placeholder="fr:guide-visa-dtv-2026, en:dtv-visa-guide-2026"
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm font-mono"
                            />
                        </Field>

                        {/* Reading time (auto) */}
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                            <span>{wordCount} mots</span>
                            <span>{readingTime} min de lecture</span>
                        </div>
                    </div>

                    {/* MDX Content Editor */}
                    <div className="mt-6">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Contenu MDX
                        </label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            rows={20}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none font-mono text-sm leading-relaxed resize-y"
                            placeholder="## Mon titre&#10;&#10;Ecrivez votre article en Markdown..."
                        />
                    </div>
                </div>

                {/* Right: Preview */}
                <div className={!showPreview ? 'hidden lg:block' : ''}>
                    <div className="bg-white border border-slate-200 rounded-xl p-6 sticky top-4">
                        <h3 className="text-xs font-semibold uppercase text-slate-400 mb-4 tracking-wider">Preview</h3>

                        {/* Title preview */}
                        {title && <h1 className="text-2xl font-bold text-slate-900 mb-2">{title}</h1>}
                        {description && <p className="text-sm text-slate-500 mb-4">{description}</p>}

                        {tags && (
                            <div className="flex flex-wrap gap-1 mb-4">
                                {parseCommaSeparated(tags).map(tag => (
                                    <span key={tag} className="px-2 py-0.5 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">{tag}</span>
                                ))}
                            </div>
                        )}

                        <hr className="my-4" />

                        {/* MDX Preview */}
                        <div className="prose prose-slate prose-sm max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {content || '*Aucun contenu*'}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom save button (mobile) */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4">
                <button
                    onClick={handleSubmit}
                    disabled={saving || !title || !slug}
                    className="w-full py-3 text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 rounded-lg transition-colors"
                >
                    {saving ? 'Sauvegarde...' : 'Sauvegarder'}
                </button>
            </div>
        </div>
    );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
            {children}
        </div>
    );
}
