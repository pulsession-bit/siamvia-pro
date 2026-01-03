'use client';

import React, { useState } from 'react';
import { Crown, Shield, Star, Zap, Plane, Check, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ExpertAppointmentForm from '@/components/ExpertAppointmentForm';
import { HighsLows, FAQAccordion, HighValueBlock } from '@/components/ui/PageComponents';
import { QuickSummaryModal } from '@/components/ui/QuickSummaryModal';
import { VisaHero } from '@/components/visa/VisaHero';

const EliteClientPage: React.FC = () => {
    const { t } = useLanguage();
    const eliteT = (key: string) => t(`elite_page.${key}` as any);
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

    return (
        <div className="bg-white min-h-screen">
            <QuickSummaryModal
                isOpen={isQuickViewOpen}
                onClose={() => setIsQuickViewOpen(false)}
                title={eliteT('quick_view.title')}
                data={{
                    durationLabel: eliteT('quick_view.duration'),
                    durationValue: eliteT('quick_view.duration_val'),
                    costLabel: eliteT('quick_view.cost'),
                    costValue: eliteT('quick_view.cost_val'),
                    get perYearLabel() { return eliteT('quick_view.per_year'); },
                    get perYearValue() { return eliteT('quick_view.per_year_val'); },
                    get runsLabel() { return eliteT('quick_view.runs'); },
                    get runsValue() { return eliteT('quick_view.runs_val'); },
                    get entriesLabel() { return eliteT('quick_view.entries'); },
                    get entriesValue() { return eliteT('quick_view.entries_val'); },
                }}
                verdict={eliteT('quick_view.verdict')}
            />

            {/* 1. Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1549416878-b9ca95e26903?auto=format&fit=crop&w=1920&q=80"
                        alt="Luxury Thailand"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-block px-4 py-1 bg-amber-500/20 border border-amber-500 text-amber-500 rounded-full text-xs font-black mb-6 uppercase tracking-widest">
                        {eliteT('badge')}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                        {eliteT('hero_title')}
                    </h1>
                    <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
                        {eliteT('hero_subtitle')}
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => document.getElementById('appointment-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-amber-500 text-slate-900 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:bg-amber-400 transition transform hover:-translate-y-1"
                        >
                            {eliteT('cta_button')}
                        </button>
                        <button
                            onClick={() => setIsQuickViewOpen(true)}
                            className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-8 py-5 rounded-2xl font-bold text-lg backdrop-blur-sm border border-white/20 transition transform hover:-translate-y-1"
                        >
                            <Zap className="w-5 h-5 text-amber-400" />
                            <span>{eliteT('quick_view.btn')}</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. Top Features */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12 mb-16">
                        {[
                            { icon: Crown, title: eliteT('duration_title'), desc: eliteT('duration_desc') },
                            { icon: Star, title: eliteT('benefits_title'), desc: eliteT('benefits_desc') },
                            { icon: Shield, title: eliteT('finance_title'), desc: eliteT('finance_desc') }
                        ].map((f, i) => (
                            <div key={i} className="text-center group p-8 rounded-[2rem] hover:bg-slate-50 transition duration-300">
                                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 transition duration-300">
                                    <f.icon className="w-8 h-8 text-amber-500 group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-3">{f.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* 3. High Value Feature Block */}
                    <HighValueBlock
                        title={t('elite_page.high_value.title') || "Prestige & Sérénité"}
                        highlight={t('elite_page.high_value.highlight') || "Absolue"}
                        description={t('elite_page.high_value.description') || "Pas de files d'attente, pas de rapports de 90 jours compliqués."}
                        listItems={[
                            { icon: Plane, text: t('elite_page.high_value.item1') || "Fast Track Aéroport VIP" },
                            { icon: Crown, text: t('elite_page.high_value.item2') || "Adhésion 5 à 20 Ans" },
                            { icon: Phone, text: t('elite_page.high_value.item3') || "Conciergerie 24/7" }
                        ]}
                        cardTitle={t('elite_page.high_value.card_title') || "Services Inclus"}
                        cardItems={[
                            t('elite_page.high_value.card_item1') || "Service Limousine",
                            t('elite_page.high_value.card_item2') || "Privilèges Golf & Spa",
                            t('elite_page.high_value.card_item3') || "Ouverture Compte Bancaire",
                            t('elite_page.high_value.card_item4') || "Check-up Santé Annuel"
                        ]}
                    />

                    {/* 4. Highs & Lows */}
                    <HighsLows
                        highsTitle={eliteT('highs_title')}
                        highs={[
                            eliteT('highs.0'), eliteT('highs.1'), eliteT('highs.2'), eliteT('highs.3'),
                        ]}
                        lowsTitle={eliteT('lows_title')}
                        lows={[
                            eliteT('lows.0'), eliteT('lows.1'), eliteT('lows.2'), eliteT('lows.3'),
                        ]}
                    />

                    {/* 5. FAQ */}
                    <FAQAccordion
                        title={eliteT('faq_title')}
                        faqs={[
                            { q: eliteT('faqs.0.q'), a: eliteT('faqs.0.a') },
                            { q: eliteT('faqs.1.q'), a: eliteT('faqs.1.a') },
                            { q: eliteT('faqs.2.q'), a: eliteT('faqs.2.a') },
                            { q: eliteT('faqs.3.q'), a: eliteT('faqs.3.a') },
                        ]}
                    />
                </div>
            </section>

            {/* 6. Appointment Section */}
            <section id="appointment-section" className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden lg:grid lg:grid-cols-2">
                        <div className="p-12 lg:p-20 bg-slate-900 text-white flex flex-col justify-center border-r border-white/5">
                            <h2 className="text-4xl font-black mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: eliteT('prestige_title') }}></h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">{eliteT('prestige_desc')}</p>
                            <ul className="space-y-4">
                                {(eliteT('prestige_list') as any)?.map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-center space-x-3 text-sm font-bold">
                                        <div className="bg-amber-500/10 p-1 rounded-full">
                                            <Check className="text-amber-500 w-5 h-5" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-12 lg:p-20">
                            <ExpertAppointmentForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EliteClientPage;
