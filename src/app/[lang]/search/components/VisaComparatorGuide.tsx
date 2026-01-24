
'use client';

import React from 'react';
import { HelpCircle, AlertCircle, CheckCircle2 } from 'lucide-react';
import { FAQSchema } from '@/components/FAQSchema';
import { AuthorEEAT } from '@/components/AuthorEEAT';

interface VisaComparatorGuideProps {

    i18n: any;
}

export const VisaComparatorGuide: React.FC<VisaComparatorGuideProps> = ({ i18n }) => {
    if (!i18n) return null;

    // Prepare schema if there are questions
    const schemaFaqs = i18n.how_to_choose?.questions?.map((q: string) => ({
        q,
        a: i18n.how_to_choose.upsell || "Consultez notre comparateur pour trouver la réponse adaptée à votre profil."
    })) || [];

    return (
        <section id="visa-guide" className="bg-white py-24 border-t border-slate-100 mt-20">
            <FAQSchema faqs={schemaFaqs} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* ... rest of the component */}


                <div className="text-center mb-20">
                    <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Plus de Détails & Conseils</h2>
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
                        <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
                    </div>
                </div>

                {/* Detailed Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {i18n.sections.map((section: any, i: number) => (
                        <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col group">
                            <h3 className="text-xl font-black text-slate-900 mb-6 flex flex-col gap-4">
                                <span className="text-amber-500 text-xs font-black tracking-[0.3em] uppercase">Option {i + 1}</span>
                                {section.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-sm font-medium">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>


                {/* Tips and How to Choose */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-100">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-amber-100 p-3 rounded-2xl">
                                    <HelpCircle className="text-amber-600 h-7 w-7" />
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 leading-tight">{i18n.how_to_choose.title}</h3>
                            </div>
                            <p className="text-lg font-bold text-slate-800 mb-8">{i18n.how_to_choose.questions_title}</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                {i18n.how_to_choose.questions.map((q: string, i: number) => (
                                    <li key={i} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-slate-700 font-bold text-sm">
                                        <div className="h-6 w-6 rounded-full bg-amber-500 text-white flex items-center justify-center flex-shrink-0 text-[10px]">
                                            {i + 1}
                                        </div>
                                        <span>{q}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 text-amber-900 font-black text-sm text-center">
                                {i18n.how_to_choose.upsell}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-[#0a1128] rounded-[2.5rem] p-8 md:p-12 text-white h-full relative overflow-hidden group">
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-700"></div>

                            <div className="flex items-center gap-4 mb-8 relative z-10">
                                <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md">
                                    <AlertCircle className="text-amber-400 h-7 w-7" />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight">{i18n.to_remember.title}</h3>
                            </div>
                            <ul className="space-y-8 relative z-10">
                                {i18n.to_remember.points.map((p: string, i: number) => (
                                    <li key={i} className="flex items-start gap-5">
                                        <div className="p-1 bg-green-500/20 rounded-full mt-1">
                                            <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                                        </div>
                                        <span className="text-slate-300 font-bold text-sm leading-snug">{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <AuthorEEAT date="2026-01-24" />
            </div>
        </section>
    );
};
