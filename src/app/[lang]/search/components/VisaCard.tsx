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

// Color styles map
const CARD_STYLES: Record<string, { iconBg: string, iconColor: string, titleHover: string, borderHover: string, buttonHover: string }> = {
    work: {
        iconBg: 'bg-indigo-50 group-hover:bg-indigo-600',
        iconColor: 'text-indigo-600 group-hover:text-white',
        titleHover: 'group-hover:text-indigo-600',
        borderHover: 'hover:border-indigo-200 hover:shadow-indigo-500/10',
        buttonHover: 'group-hover:bg-indigo-600'
    },
    tourism: {
        iconBg: 'bg-sky-50 group-hover:bg-sky-500',
        iconColor: 'text-sky-600 group-hover:text-white',
        titleHover: 'group-hover:text-sky-600',
        borderHover: 'hover:border-sky-200 hover:shadow-sky-500/10',
        buttonHover: 'group-hover:bg-sky-500'
    },
    longterm: {
        iconBg: 'bg-emerald-50 group-hover:bg-emerald-600',
        iconColor: 'text-emerald-600 group-hover:text-white',
        titleHover: 'group-hover:text-emerald-600',
        borderHover: 'hover:border-emerald-200 hover:shadow-emerald-500/10',
        buttonHover: 'group-hover:bg-emerald-600'
    },
    family: {
        iconBg: 'bg-rose-50 group-hover:bg-rose-500',
        iconColor: 'text-rose-600 group-hover:text-white',
        titleHover: 'group-hover:text-rose-600',
        borderHover: 'hover:border-rose-200 hover:shadow-rose-500/10',
        buttonHover: 'group-hover:bg-rose-500'
    },
    education: {
        iconBg: 'bg-violet-50 group-hover:bg-violet-600',
        iconColor: 'text-violet-600 group-hover:text-white',
        titleHover: 'group-hover:text-violet-600',
        borderHover: 'hover:border-violet-200 hover:shadow-violet-500/10',
        buttonHover: 'group-hover:bg-violet-600'
    },
    privilege: {
        iconBg: 'bg-amber-50 group-hover:bg-amber-500',
        iconColor: 'text-amber-600 group-hover:text-white',
        titleHover: 'group-hover:text-amber-600',
        borderHover: 'hover:border-amber-200 hover:shadow-amber-500/10',
        buttonHover: 'group-hover:bg-amber-500'
    }
};

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
    const styles = CARD_STYLES[visa.category] || {
        iconBg: 'bg-slate-50 group-hover:bg-slate-900',
        iconColor: 'text-slate-400 group-hover:text-white',
        titleHover: 'group-hover:text-slate-900',
        borderHover: 'hover:border-slate-200 hover:shadow-slate-200/60',
        buttonHover: 'group-hover:bg-slate-900'
    };

    return (
        <div
            onClick={onClick}
            className={`visa-card relative bg-white p-8 rounded-[2.5rem] border transition-all duration-500 cursor-pointer group flex flex-col justify-between hover:-translate-y-2 ${isRecommended
                ? 'border-amber-200 shadow-[0_20px_60px_-15px_rgba(245,158,11,0.2)] ring-1 ring-amber-500/10'
                : `border-slate-100 shadow-sm hover:shadow-2xl ${styles.borderHover}`
                }`}
        >
            {isRecommended && (
                <div className="absolute -top-3 left-8 z-10 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 text-[10px] font-black px-4 py-2 rounded-full shadow-lg shadow-amber-500/20 flex items-center gap-1.5 uppercase tracking-[0.15em]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{expertPickLabel}</span>
                </div>
            )}
            {isAlternative && !isRecommended && (
                <div className="absolute -top-3 left-8 z-10 bg-slate-900 text-white text-[10px] font-black px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-[0.15em]">
                    <Info className="w-3.5 h-3.5 text-amber-500" />
                    <span>{alternativeLabel}</span>
                </div>
            )}
            <div>
                <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-8 transition-all duration-500 shadow-inner ${isRecommended
                    ? 'bg-gradient-to-br from-amber-50 to-orange-50 text-amber-600 shadow-amber-100'
                    : `${styles.iconBg} ${styles.iconColor} group-hover:rotate-6`
                    }`}>
                    {Icon ? <Icon size={30} /> : <Info size={30} />}
                </div>
                <h3 className={`text-xl font-black mb-3 text-slate-900 transition-colors leading-[1.2] ${isRecommended ? 'group-hover:text-amber-600' : styles.titleHover}`}>
                    {visa.name[lang]}
                </h3>
                <div className="flex flex-wrap gap-2 items-center text-[10px] font-black text-slate-400 mb-8 tracking-widest uppercase">
                    <span className="px-3.5 py-1.5 bg-slate-50 rounded-lg border border-slate-100 group-hover:border-slate-200 transition-colors">{durations[visa.duration] || visa.duration}</span>
                    <span className="px-3.5 py-1.5 bg-slate-50 rounded-lg border border-slate-100 group-hover:border-slate-200 transition-colors">{prices[visa.price] || visa.price} {costLabel}</span>
                </div>
            </div>
            <div className={`flex items-center justify-between mt-4 pt-6 border-t border-slate-50 group-hover:border-slate-100 transition-colors`}>
                <span className={`text-slate-900 font-black text-[11px] uppercase tracking-[0.2em] transition-colors ${isRecommended ? 'group-hover:text-amber-600' : styles.titleHover}`}>{detailsLabel}</span>
                <div className={`w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center transition-all transform group-hover:translate-x-1 shadow-sm ${isRecommended ? 'group-hover:bg-amber-500' : styles.buttonHover} group-hover:text-white`}>
                    <ChevronRight size={20} />
                </div>
            </div>
        </div>

    );
};
