import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Sparkles } from 'lucide-react';
import { getTranslatedPath } from '../../utils/slugs';
import { useLanguage } from '../../contexts/LanguageContext';

export const NavbarSearch: React.FC = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();
    const { t, language: currentLang } = useLanguage();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        const searchPath = getTranslatedPath('search', currentLang);
        router.push(`${searchPath}?q=${encodeURIComponent(query)}`);
    };

    return (
        <form onSubmit={handleSearch} className="relative hidden md:block w-64 lg:w-80">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('nav.search_placeholder') || 'Ask AI...'}
                className="w-full bg-slate-100 text-slate-900 border border-slate-200 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder-slate-400 text-sm transition-all"
            />
            <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-amber-400 transition-colors"
                title="Search with AI"
            >
                {query ? <Sparkles size={16} /> : <Search size={16} />}
            </button>
        </form>
    );
};
