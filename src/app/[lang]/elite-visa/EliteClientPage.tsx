'use client';

import React from 'react';
import Image from 'next/image';
import { Check, Crown, Shield, Star } from 'lucide-react';
import ExpertAppointmentForm from '@/components/ExpertAppointmentForm';
import { HighsLows, FAQAccordion, HighValueBlock } from '@/components/ui/PageComponents';
import { QuickSummaryModal } from '@/components/ui/QuickSummaryModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Plane, CheckCircle2, Phone } from 'lucide-react';

const EliteClientPage: React.FC = () => {
    const { t } = useLanguage();
    // Helper to safely access nested elite keys
    const eliteT = (key: string) => t(`elite_page.${key}` as any);
    const [isQuickViewOpen, setIsQuickViewOpen] = React.useState(false);

    return (
        <div className="bg-white">
            <QuickSummaryModal
                isOpen={isQuickViewOpen}
                onClose={() => setIsQuickViewOpen(false)}
                title={eliteT('quick_view.title')}
                data={{
                    durationLabel: eliteT('quick_view.duration'),
                    durationValue: eliteT('quick_view.duration_val'),
                    costLabel: eliteT('quick_view.cost'),
                    costValue: eliteT('quick_view.cost_val'),
                    perYearLabel: eliteT('quick_view.per_year'),
                    perYearValue: eliteT('quick_view.per_year_val'),
                    runsLabel: eliteT('quick_view.runs'),
                    runsValue: eliteT('quick_view.runs_val'),
                    entriesLabel: eliteT('quick_view.entries'),
                    entriesValue: eliteT('quick_view.entries_val'),
                }}
                verdict={eliteT('quick_view.verdict')}
            />
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="https://images.unsplash.com/photo-1549416878-b9ca95e26903?auto=format&fit=crop&w=1920&q=80"
                        alt="Luxury Thailand"
                        fill
                        className="object-cover"
                        priority
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

            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { icon: Crown, title: eliteT('duration_title'), desc: eliteT('duration_desc') },
                            { icon: Star, title: eliteT('benefits_title'), desc: eliteT('benefits_desc') },
                            { icon: Shield, title: eliteT('finance_title'), desc: eliteT('finance_desc') }
                        ].map((f, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-100 transition duration-300">
                                    <f.icon className="w-8 h-8 text-slate-900" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-3">{f.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>

                    <HighValueBlock
                        title={t('elite_page.high_value.title') || "Prestige & Sérénité"}
                        highlight={t('elite_page.high_value.highlight') || "Absolue"}
                        description={t('elite_page.high_value.description') || "Pas de files d'attente, pas de rapports de 90 jours compliqués, pas de tracas. Juste le plaisir de vivre en Thaïlande avec un statut VIP garanti par l'État."}
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

                    <HighsLows
                        highsTitle={eliteT('highs_title')}
                        highs={[
                            eliteT('highs.0'),
                            eliteT('highs.1'),
                            eliteT('highs.2'),
                            eliteT('highs.3'),
                        ]}
                        lowsTitle={eliteT('lows_title')}
                        lows={[
                            eliteT('lows.0'),
                            eliteT('lows.1'),
                            eliteT('lows.2'),
                            eliteT('lows.3'),
                        ]}
                    />

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

            <section id="appointment-section" className="py-24 bg-slate-50 border-t">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden lg:grid lg:grid-cols-2">
                        <div className="p-12 lg:p-20 bg-slate-900 text-white flex flex-col justify-center">
                            <h2 className="text-4xl font-black mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: eliteT('prestige_title') }}></h2>
                            <p className="text-slate-400 mb-8">{eliteT('prestige_desc')}</p>
                            <ul className="space-y-4">
                                {(eliteT('prestige_list') as unknown as string[])?.map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-center space-x-3 text-sm font-bold">
                                        <Check className="text-amber-500 w-5 h-5" />
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
