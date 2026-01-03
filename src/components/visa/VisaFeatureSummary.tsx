import React, { ReactNode } from 'react';
import { LucideIcon, AlertTriangle } from 'lucide-react';

interface FeatureItem {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface WhoItem {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface VisaFeatureSummaryProps {
    whyTitle: string;
    features: FeatureItem[];
    financeTitle?: string;
    financeDesc?: string;
    whoTitle: string;
    whoItems: WhoItem[];
    ctaTitle?: string;
    ctaDesc?: string;
    ctaBtnText?: string;
    ctaHref?: string;
    scoringUrl?: string;
}

export const VisaFeatureSummary: React.FC<VisaFeatureSummaryProps> = ({
    whyTitle,
    features,
    financeTitle,
    financeDesc,
    whoTitle,
    whoItems,
    ctaTitle,
    ctaDesc,
    ctaBtnText,
    ctaHref,
    scoringUrl
}) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100 mb-16">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">{whyTitle}</h2>
                    <div className="space-y-6">
                        {features.map((feat, i) => (
                            <div key={i} className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600">
                                        <feat.icon className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-slate-900">{feat.title}</h3>
                                    <p className="mt-2 text-slate-600">{feat.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {financeTitle && (
                        <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-amber-200">
                            <div className="flex items-start">
                                <AlertTriangle className="h-6 w-6 text-amber-500 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800">{financeTitle}</h4>
                                    <p className="text-slate-600 mt-2 text-sm">{financeDesc}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">{whoTitle}</h2>
                    <ul className="space-y-4">
                        {whoItems.map((item, i) => (
                            <li key={i} className="flex items-start p-4 bg-slate-50 rounded-lg">
                                <item.icon className="h-5 w-5 text-amber-500 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <span className="font-bold block text-slate-800">{item.title}</span>
                                    <span className="text-sm text-slate-600">{item.description}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {ctaTitle && (
                        <div className="mt-8 bg-slate-900 rounded-xl p-6 text-white text-center shadow-lg relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold mb-2 text-amber-400">{ctaTitle}</h3>
                                <p className="text-slate-300 text-sm mb-6">
                                    {ctaDesc}{' '}
                                    {ctaHref && (
                                        <a href={ctaHref} className="text-amber-400 underline hover:text-amber-300 font-medium">
                                            Voir nos services
                                        </a>
                                    )}
                                </p>
                                {scoringUrl && (
                                    <a
                                        href={scoringUrl}
                                        className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-lg transition"
                                    >
                                        {ctaBtnText}
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
