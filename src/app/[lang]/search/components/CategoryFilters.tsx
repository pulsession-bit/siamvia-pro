import React from 'react';
import { CATEGORY_ICONS, CATEGORY_COLORS } from '../data/visas';

interface CategoryFiltersProps {
    allVisasLabel: string;
    categories: Record<string, string>;
    activeCategory: string | null;
    setActiveCategory: (cat: string | null) => void;
    activeDuration: string | null;
    setActiveDuration: (dur: string | null) => void;
}

// Maps for Tailwind classes to ensure they are generated
const ACTIVE_STYLES: Record<string, string> = {
    work: 'bg-indigo-600 border-indigo-600 shadow-indigo-500/30',
    tourism: 'bg-sky-500 border-sky-500 shadow-sky-500/30',
    longterm: 'bg-emerald-600 border-emerald-600 shadow-emerald-500/30',
    family: 'bg-rose-500 border-rose-500 shadow-rose-500/30',
    education: 'bg-violet-600 border-violet-600 shadow-violet-500/30',
    privilege: 'bg-amber-500 border-amber-500 shadow-amber-500/30'
};

const HOVER_STYLES: Record<string, string> = {
    work: 'hover:border-indigo-200 hover:text-indigo-700',
    tourism: 'hover:border-sky-200 hover:text-sky-600',
    longterm: 'hover:border-emerald-200 hover:text-emerald-700',
    family: 'hover:border-rose-200 hover:text-rose-600',
    education: 'hover:border-violet-200 hover:text-violet-700',
    privilege: 'hover:border-amber-200 hover:text-amber-600'
};

export const CategoryFilters: React.FC<CategoryFiltersProps> = ({
    allVisasLabel,
    categories,
    activeCategory,
    setActiveCategory,
    activeDuration,
    setActiveDuration
}) => {
    return (
        <div className="flex flex-wrap items-center gap-3">
            <button
                onClick={() => setActiveCategory(null)}
                className={`px-6 py-2.5 rounded-full text-[11px] font-black tracking-[0.15em] uppercase transition-all duration-300 border ${activeCategory === null
                    ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/10 scale-105'
                    : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-900'
                    }`}
            >
                {allVisasLabel}
            </button>
            {Object.entries(categories).map(([key, label]) => {
                const Icon = CATEGORY_ICONS[key];
                const activeClass = ACTIVE_STYLES[key] || 'bg-slate-900 border-slate-900 shadow-slate-900/10';
                const hoverClass = HOVER_STYLES[key] || 'hover:border-slate-300 hover:text-slate-900';

                return (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(key)}
                        className={`px-6 py-2.5 rounded-full text-[11px] font-black tracking-[0.15em] uppercase flex items-center gap-2.5 transition-all duration-300 border ${activeCategory === key
                            ? `${activeClass} text-white shadow-xl scale-105`
                            : `bg-white border-slate-200 text-slate-500 ${hoverClass}`
                            }`}
                    >
                        {Icon && <Icon size={14} className={activeCategory === key ? 'text-white' : 'text-slate-400'} />}
                        {label}
                    </button>
                );
            })}

            {/* Separator */}
            <div className="w-px h-8 bg-slate-200 mx-2 hidden md:block"></div>

            {/* Duration Filters */}
            <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200/60">
                <button
                    onClick={() => setActiveDuration(activeDuration === 'short' ? null : 'short')}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${activeDuration === 'short' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Short Term
                </button>
                <button
                    onClick={() => setActiveDuration(activeDuration === 'long' ? null : 'long')}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${activeDuration === 'long' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Long Term
                </button>
            </div>
        </div>
    );

};
