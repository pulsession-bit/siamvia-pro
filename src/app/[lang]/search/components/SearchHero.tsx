
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface SearchHeroProps {
    title: string;
    subtitle: string;
    subtext?: string;
    ctaLabel?: string;
    onCtaClick?: () => void;
    extraMobileContent?: React.ReactNode;
    children?: React.ReactNode;
}

export const SearchHero: React.FC<SearchHeroProps> = ({
    title,
    subtitle,
    subtext,
    ctaLabel,
    onCtaClick,
    extraMobileContent,
    children
}) => {
    return (
        <section className="bg-slate-50 pt-32 pb-20 px-4 relative overflow-hidden flex items-center min-h-[60vh] md:min-h-[65vh]">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/50 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                                {title}
                            </h1>
                            <p className="text-xl text-slate-600 font-medium max-w-xl mx-auto lg:mx-0">
                                {subtitle}
                            </p>
                        </div>

                        {/* Mobile Extra Content (e.g. AI Search) */}
                        {extraMobileContent && (
                            <div className="lg:hidden w-full mt-8">
                                {extraMobileContent}
                            </div>
                        )}

                        <div className="flex flex-col items-center lg:items-start gap-8">
                            {subtext && (
                                <div className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] border-y border-slate-200 py-4 w-fit">
                                    {subtext}
                                </div>
                            )}

                            {ctaLabel && (
                                <button
                                    onClick={onCtaClick}
                                    className="group flex items-center gap-4 text-sm font-black text-slate-900 hover:text-indigo-600 transition-all uppercase tracking-widest bg-white pr-6 pl-2 py-2 rounded-full shadow-sm hover:shadow-md border border-slate-100"
                                >
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                        <Sparkles size={16} className="text-amber-500 group-hover:text-white" />
                                    </span>
                                    {ctaLabel}
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform ml-auto" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Table / Tool */}
                    <div className="lg:col-span-7 w-full overflow-hidden">
                        <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
                            {children}
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};
