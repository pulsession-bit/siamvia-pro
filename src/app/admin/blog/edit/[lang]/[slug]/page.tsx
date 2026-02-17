'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import AdminGuard from '../../../components/AdminGuard';
import ArticleForm from '../../../components/ArticleForm';
import type { PostFrontmatter } from '@/lib/blog/posts';

export default function AdminEditArticlePage() {
    return (
        <AdminGuard>
            <EditArticle />
        </AdminGuard>
    );
}

function EditArticle() {
    const router = useRouter();
    const params = useParams<{ lang: string; slug: string }>();
    const [frontmatter, setFrontmatter] = useState<PostFrontmatter | null>(null);
    const [content, setContent] = useState('');
    const [sha, setSha] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function load() {
            try {
                const res = await fetch(`/api/admin/blog/${params.lang}/${params.slug}`);
                if (!res.ok) throw new Error('Article not found');
                const data = await res.json();
                setFrontmatter(data.frontmatter);
                setContent(data.content);
                setSha(data.sha);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Erreur de chargement');
            } finally {
                setLoading(false);
            }
        }
        load();
    }, [params.lang, params.slug]);

    async function handleSave(data: {
        lang: string;
        slug: string;
        frontmatter: PostFrontmatter;
        content: string;
        sha?: string;
    }) {
        const res = await fetch(`/api/admin/blog/${params.lang}/${params.slug}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                frontmatter: data.frontmatter,
                content: data.content,
                sha: data.sha,
            }),
        });

        if (!res.ok) {
            const body = await res.json();
            throw new Error(body.error || 'Failed to update article');
        }
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <header className="bg-white border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
                    <button
                        onClick={() => router.push('/admin/blog')}
                        className="text-sm text-slate-500 hover:text-slate-700"
                    >
                        &larr; Retour
                    </button>
                    <h1 className="text-lg font-bold text-slate-900">
                        Modifier : <span className="text-amber-500">{params.slug}</span>
                    </h1>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-8">
                {loading ? (
                    <div className="text-center py-20 text-slate-400">Chargement de l&apos;article...</div>
                ) : error ? (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
                ) : frontmatter ? (
                    <ArticleForm
                        mode="edit"
                        initialLang={params.lang}
                        initialFrontmatter={frontmatter}
                        initialContent={content}
                        initialSha={sha}
                        onSave={handleSave}
                    />
                ) : null}
            </div>
        </div>
    );
}
