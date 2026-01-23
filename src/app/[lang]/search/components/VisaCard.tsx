import React from 'react';
import { Sparkles, Info, ChevronRight } from 'lucide-react';
import { CATEGORY_ICONS } from '../data/visas';
import { Visa, Language } from '@/types/index';

interface VisaCardProps {
    visa: Visa;
    lang: Language;
    detailsLabel: string;
    expertPickLabel: string;
    alternativeLabel: string;
    costLabel: string;
    durations: Record<string, string>;
    prices: Record<string, string>;
    isRecommended: boolean;
    isAlternative: boolean;
    onClick: () => void;
}

export const VisaCard: React.FC<VisaCardProps> = ({
    visa,
    lang,
    detailsLabel,
    expertPickLabel,
    alternativeLabel,
    costLabel,
    durations,
    prices,
    isRecommended,
    isAlternative,
    onClick
}) => {
    const Icon = CATEGORY_ICONS[visa.category];

    return (
        <div
            onClick={onClick}
            className={`visa-card relative bg-white p-6 rounded-3xl border transition-all cursor-pointer group flex flex-col justify-between ${isRecommended ? 'border-amber-500 ring-2 ring-amber-500/10 shadow-xl' : 'border-gray-100 shadow-sm hover:shadow-xl'}`}
        >
            {isRecommended && (
                <div className="absolute -top-3 left-6 z-10 bg-amber-500 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full shadow-lg flex items-center gap-1 animate-bounce">
                    <Sparkles className="w-3 h-3" />
                    <span>{expertPickLabel}</span>
                </div>
            )}
            {isAlternative && !isRecommended && (
                <div className="absolute -top-3 left-6 z-10 bg-slate-800 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Info className="w-3 h-3 text-amber-500" />
                    <span>{alternativeLabel}</span>
                </div>
            )}
            <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-blue-50 text-blue-900 group-hover:bg-amber-500 group-hover:text-white transition-colors`}>
                    {Icon ? <Icon size={24} /> : <Info size={24} />}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-amber-600 transition-colors">
                    {visa.name[lang]}
                </h3>
                <div className="flex gap-2 items-center text-xs font-semibold text-gray-400 mb-4">
                    <span className="px-2 py-0.5 bg-gray-100 rounded">{durations[visa.duration] || visa.duration}</span>
                    <span className="px-2 py-0.5 bg-gray-100 rounded uppercase">{prices[visa.price] || visa.price} {costLabel}</span>
                </div>
            </div>
            <div className="flex items-center justify-between mt-4">
                <span className="text-blue-900 font-bold text-sm">{detailsLabel}</span>
                <ChevronRight size={18} className="text-gray-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
            </div>
        </div>
    );
};
