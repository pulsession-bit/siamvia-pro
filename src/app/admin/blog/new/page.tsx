'use client';

import { useRouter } from 'next/navigation';
import AdminGuard from '../components/AdminGuard';
import ArticleForm from '../components/ArticleForm';

export default function AdminNewArticlePage() {
    return (
        <AdminGuard>
            <NewArticle />
        </AdminGuard>
    );
}

function NewArticle() {
    const router = useRouter();

    async function handleSave(data: {
        lang: string;
        slug: string;
        frontmatter: import('@/lib/blog/posts').PostFrontmatter;
        content: string;
    }) {
        const res = await fetch('/api/admin/blog', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const body = await res.json();
            throw new Error(body.error || 'Failed to create article');
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
                    <h1 className="text-lg font-bold text-slate-900">Nouvel article</h1>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-8">
                <ArticleForm mode="create" onSave={handleSave} />
            </div>
        </div>
    );
}
