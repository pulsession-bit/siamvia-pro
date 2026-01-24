import React from 'react';
import { CATEGORY_ICONS } from '../data/visas';

interface CategoryFiltersProps {
    allVisasLabel: string;
    categories: Record<string, string>;
    activeCategory: string | null;
    setActiveCategory: (cat: string | null) => void;
}

export const CategoryFilters: React.FC<CategoryFiltersProps> = ({
    allVisasLabel,
    categories,
    activeCategory,
    setActiveCategory
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
                return (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(key)}
                        className={`px-6 py-2.5 rounded-full text-[11px] font-black tracking-[0.15em] uppercase flex items-center gap-2.5 transition-all duration-300 border ${activeCategory === key
                                ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/10 scale-105'
                                : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-900'
                            }`}
                    >
                        {Icon && <Icon size={14} className={activeCategory === key ? 'text-white' : 'text-slate-400'} />}
                        {label}
                    </button>
                );
            })}
        </div>
    );

};
