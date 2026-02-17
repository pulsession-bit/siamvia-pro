'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import AdminGuard from './components/AdminGuard';
import ConfirmDialog from './components/ConfirmDialog';

interface ArticleSummary {
    slug: string;
    title: string;
    description: string;
    published_at: string;
    updated_at?: string;
    tags?: string[];
    sha: string;
}

const LANGS = ['fr', 'en', 'th'] as const;

export default function AdminBlogPage() {
    return (
        <AdminGuard>
            <BlogDashboard />
        </AdminGuard>
    );
}

function BlogDashboard() {
    const [lang, setLang] = useState<string>('fr');
    const [articles, setArticles] = useState<ArticleSummary[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [deleteTarget, setDeleteTarget] = useState<ArticleSummary | null>(null);
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();

    const fetchArticles = useCallback(async () => {
        setLoading(true);
        setError('');
        try {
            const res = await fetch(`/api/admin/blog?lang=${lang}`);
            if (!res.ok) throw new Error('Failed to fetch articles');
            const data = await res.json();
            setArticles(data.articles);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erreur de chargement');
        } finally {
            setLoading(false);
        }
    }, [lang]);

    useEffect(() => {
        fetchArticles();
    }, [fetchArticles]);

    async function handleDelete() {
        if (!deleteTarget) return;
        setDeleting(true);
        try {
            const res = await fetch(`/api/admin/blog/${lang}/${deleteTarget.slug}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sha: deleteTarget.sha }),
            });
            if (!res.ok) throw new Error('Failed to delete');
            setDeleteTarget(null);
            fetchArticles();
        } catch {
            setError('Erreur lors de la suppression');
        } finally {
            setDeleting(false);
        }
    }

    async function handleLogout() {
        await fetch('/api/admin/logout', { method: 'POST' });
        router.push('/admin/login');
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Top bar */}
            <header className="bg-white border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <h1 className="text-lg font-bold text-slate-900">SiamVisa Pro <span className="text-amber-500">Admin</span></h1>
                    <button
                        onClick={handleLogout}
                        className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                    >
                        Deconnexion
                    </button>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-8">
                {/* Title + New button */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Articles Blog</h2>
                    <button
                        onClick={() => router.push('/admin/blog/new')}
                        className="px-4 py-2 text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 rounded-lg transition-colors"
                    >
                        + Nouvel article
                    </button>
                </div>

                {/* Language tabs */}
                <div className="flex gap-1 mb-6 bg-slate-100 p-1 rounded-lg w-fit">
                    {LANGS.map(l => (
                        <button
                            key={l}
                            onClick={() => setLang(l)}
                            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                lang === l
                                    ? 'bg-white text-slate-900 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-700'
                            }`}
                        >
                            {l.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Error */}
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">{error}</div>
                )}

                {/* Loading */}
                {loading ? (
                    <div className="text-center py-20 text-slate-400">Chargement...</div>
                ) : articles.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-slate-400 mb-4">Aucun article en {lang.toUpperCase()}</p>
                        <button
                            onClick={() => router.push('/admin/blog/new')}
                            className="text-amber-500 hover:text-amber-600 font-medium text-sm"
                        >
                            Creer le premier article
                        </button>
                    </div>
                ) : (
                    /* Articles table */
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-100">
                                    <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-slate-400 tracking-wider">Titre</th>
                                    <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-slate-400 tracking-wider hidden md:table-cell">Slug</th>
                                    <th className="text-left px-6 py-3 text-xs font-semibold uppercase text-slate-400 tracking-wider hidden sm:table-cell">Date</th>
                                    <th className="text-right px-6 py-3 text-xs font-semibold uppercase text-slate-400 tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles.map(article => (
                                    <tr key={article.slug} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-slate-900 text-sm">{article.title}</div>
                                            {article.tags && (
                                                <div className="flex flex-wrap gap-1 mt-1">
                                                    {article.tags.slice(0, 3).map(tag => (
                                                        <span key={tag} className="px-1.5 py-0.5 bg-slate-100 text-slate-500 text-xs rounded">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-500 font-mono hidden md:table-cell">
                                            {article.slug}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-500 hidden sm:table-cell">
                                            {new Date(article.published_at).toLocaleDateString('fr-FR')}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => router.push(`/admin/blog/edit/${lang}/${article.slug}`)}
                                                    className="px-3 py-1.5 text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 rounded-md transition-colors"
                                                >
                                                    Modifier
                                                </button>
                                                <button
                                                    onClick={() => setDeleteTarget(article)}
                                                    className="px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors"
                                                >
                                                    Supprimer
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Delete confirmation */}
            <ConfirmDialog
                isOpen={!!deleteTarget}
                title="Supprimer l'article"
                message={`Voulez-vous vraiment supprimer "${deleteTarget?.title}" ? Cette action est irreversible.`}
                onConfirm={handleDelete}
                onCancel={() => setDeleteTarget(null)}
                loading={deleting}
            />
        </div>
    );
}
