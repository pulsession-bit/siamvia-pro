import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

interface ServiceTier {
    id: string;
    name: string;
    price?: string;
    description: string;
    recommended?: boolean;
    features: string[];
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
    return (
        <div
            className={`
                relative bg-white rounded-3xl shadow-xl flex flex-col p-8 transition-all duration-300 hover:shadow-2xl
                ${tier.recommended
                    ? 'border-2 border-amber-500 transform md:-translate-y-4 z-10'
                    : 'border border-slate-100 hover:-translate-y-1'}
            `}
        >
            {/* Badge Recommandé */}
            {tier.recommended && (
                <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
                    <span className="bg-amber-500 text-slate-900 px-6 py-1.5 rounded-full text-xs font-black shadow-lg flex items-center uppercase tracking-widest">
                        <Star className="w-3 h-3 mr-2 fill-current" />
                        {recommendedLabel}
                    </span>
                </div>
            )}

            {/* Contenu */}
            <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-2">{tier.name}</h3>
                {tier.price && (
                    <p className="text-4xl font-black text-amber-600 mb-2">{tier.price}</p>
                )}
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{tier.description}</p>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                    {tier.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                            <div className="bg-amber-100 rounded-full p-1 mr-3 mt-0.5">
                                <Check className="h-3 w-3 text-amber-600" />
                            </div>
                            <span className="text-slate-600 text-sm leading-snug">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
                <a
                    href={ctaHref}
                    className={`
                        w-full py-4 px-6 rounded-2xl font-black transition-all flex items-center justify-center transform active:scale-95
                        ${tier.recommended
                            ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20'
                            : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                        }
                    `}
                >
                    <span className="mr-2 uppercase tracking-wider text-xs">{ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" />
                </a>
            </div>
        </div>
    );
};
