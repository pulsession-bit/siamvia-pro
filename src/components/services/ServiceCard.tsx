import React from 'react';
import { Check, Star, ArrowRight, Package } from 'lucide-react';

interface ServiceTier {
    id: string;
    name: string;
    price?: string;
    description: string;
    recommended?: boolean;
    features: string[];
    idealFor?: string;
    includesLabel?: string;
}

interface ServiceCardProps {
    tier: ServiceTier;
    recommendedLabel: string;
    ctaLabel: string;
    ctaHref: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    tier,
    recommendedLabel,
    ctaLabel,
    ctaHref
}) => {
    const isPremium = tier.id === 'premium';
    const isExpress = tier.recommended;

    return (
        <div
            className={`
                relative flex flex-col rounded-3xl transition-all duration-500 overflow-visible
                ${isExpress
                    ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white md:-translate-y-3 z-10 shadow-2xl shadow-amber-500/15 ring-2 ring-amber-500/60'
                    : isPremium
                        ? 'bg-gradient-to-br from-amber-50 via-white to-amber-50/30 shadow-xl hover:shadow-2xl hover:-translate-y-1 border border-amber-200/60'
                        : 'bg-white shadow-xl hover:shadow-2xl hover:-translate-y-1 border border-slate-100'
                }
            `}
        >
            {/* Badge Recommandé */}
            {tier.recommended && (
                <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center z-20">
                    <span className="bg-amber-500 text-slate-900 px-6 py-1.5 rounded-full text-[10px] font-black shadow-lg shadow-amber-500/30 flex items-center uppercase tracking-widest whitespace-nowrap">
                        <Star className="w-3 h-3 mr-2 fill-current" />
                        {recommendedLabel}
                    </span>
                </div>
            )}

            {/* Header */}
            <div className={`px-8 pt-8 ${tier.recommended ? 'pt-10' : ''}`}>
                <h3 className={`text-lg font-black tracking-wide uppercase ${isExpress ? 'text-amber-400' : isPremium ? 'text-amber-700' : 'text-slate-400'}`}>
                    {tier.name}
                </h3>
                {tier.price && (
                    <p className={`text-5xl font-black mt-1 mb-3 ${isExpress ? 'text-white' : 'text-slate-900'}`}>
                        {tier.price}
                    </p>
                )}
                <p className={`text-sm leading-relaxed min-h-[3rem] ${isExpress
                    ? 'text-slate-300'
                    : isPremium
                        ? 'text-slate-600'
                        : 'text-slate-500'
                    }`}>
                    {tier.description}
                </p>
            </div>

            {/* Separator */}
            <div className={`mx-8 my-4 border-t ${isExpress ? 'border-slate-700' : isPremium ? 'border-amber-100' : 'border-slate-100'}`} />

            {/* Features List */}
            <div className="flex-1 px-8">
                {/* Includes label (for Express & Premium) */}
                {tier.includesLabel && (
                    <div className={`flex items-center mb-4 pb-4 border-b ${isExpress ? 'border-slate-700' : 'border-amber-100'}`}>
                        <div className={`rounded-lg p-1.5 mr-3 ${isExpress ? 'bg-amber-500/20' : 'bg-amber-100'}`}>
                            <Package className={`h-4 w-4 ${isExpress ? 'text-amber-400' : 'text-amber-600'}`} />
                        </div>
                        <span className={`text-sm font-bold ${isExpress ? 'text-amber-400' : 'text-amber-700'}`}>
                            {tier.includesLabel}
                        </span>
                    </div>
                )}

                <ul className="space-y-3">
                    {tier.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                            <div className={`rounded-full p-1 mr-3 mt-0.5 shrink-0 ${isExpress
                                ? 'bg-amber-500/20'
                                : isPremium
                                    ? 'bg-amber-100'
                                    : 'bg-slate-100'
                                }`}>
                                <Check className={`h-3 w-3 ${isExpress
                                    ? 'text-amber-400'
                                    : isPremium
                                        ? 'text-amber-600'
                                        : 'text-slate-500'
                                    }`} />
                            </div>
                            <span className={`text-sm leading-snug ${isExpress ? 'text-slate-200' : 'text-slate-600'}`}>
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Bottom section: Ideal for + CTA (always at the bottom) */}
            <div className="mt-auto px-8 pb-8">
                {/* Ideal for */}
                {tier.idealFor && (
                    <div className={`mt-6 mb-5 px-4 py-3 rounded-xl text-xs font-medium leading-snug ${isExpress
                        ? 'bg-slate-700/60 text-slate-300'
                        : isPremium
                            ? 'bg-amber-50 text-amber-800 border border-amber-100'
                            : 'bg-slate-50 text-slate-500'
                        }`}>
                        {tier.idealFor}
                    </div>
                )}

                {/* CTA Button */}
                <a
                    href={ctaHref}
                    className={`
                        w-full py-4 px-6 rounded-2xl font-black transition-all flex items-center justify-center transform active:scale-95 group
                        ${isExpress
                            ? 'bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-xl shadow-amber-500/20'
                            : isPremium
                                ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20'
                                : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                        }
                    `}
                >
                    <span className="mr-2 uppercase tracking-wider text-xs">{ctaLabel}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </div>
    );
};
