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
        <section className="bg-white border-b overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-start md:justify-center gap-4">
                <button
                    onClick={() => setActiveCategory(null)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === null ? 'bg-amber-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                    {allVisasLabel}
                </button>
                {Object.entries(categories).map(([key, label]) => {
                    const Icon = CATEGORY_ICONS[key];
                    return (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${activeCategory === key ? 'bg-amber-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                            {Icon && <Icon size={16} />}
                            {label}
                        </button>
                    );
                })}
            </div>
        </section>
    );
};
