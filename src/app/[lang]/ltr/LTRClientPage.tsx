'use client';

import React from 'react';
import { Shield, TrendingUp, Award, DollarSign, Briefcase, Globe, Check } from 'lucide-react';
import ExpertAppointmentForm from '@/components/ExpertAppointmentForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { HighsLows, FAQAccordion, HighValueBlock } from '@/components/ui/PageComponents';
import { VisaHero } from '@/components/visa/VisaHero';
import { VisaFeatureSummary } from '@/components/visa/VisaFeatureSummary';
import { AuthorEEAT } from '@/components/AuthorEEAT';

const LTRClientPage: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-white min-h-screen">
            {/* 1. Hero Section */}
            <VisaHero
                badge={t('ltr_page.badge') || "Residency 10 Years"}
                title={t('ltr_page.hero_title') || "Le VISA LTR Thaïlande"}
                subtitle={t('ltr_page.title') || "La Résidence Longue Durée"}
                description={t('ltr_page.subtitle') || "Le statut fiscal et résidentiel le plus avantageux pour les citoyens fortunés."}
                tagline="Optimisation fiscale et mobilité totale."
                backgroundImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                {/* 2. Feature Summary Section */}
                <VisaFeatureSummary
                    whyTitle={t('ltr_page.why_title') || "Pourquoi choisir le LTR ?"}
                    features={[
                        { icon: Shield, title: t('ltr_page.benefit1_title') || "10 Ans de Visa", description: t('ltr_page.benefit1_desc') || "Renouvelable, avec permis de travail numérique inclus." },
                        { icon: TrendingUp, title: t('ltr_page.benefit2_title') || "17% d'Impôt", description: t('ltr_page.benefit2_desc') || "Taux forfaitaire sur les revenus locaux pour les professionnels." },
                        { icon: Award, title: t('ltr_page.benefit3_title') || "Service VIP", description: t('ltr_page.benefit3_desc') || "Accès prioritaire aéroport et rapports de 90 jours supprimés." }
                    ]}
                    whoTitle="Profils Éligibles"
                    whoItems={[
                        { icon: Globe, title: t('ltr_page.cat1') || "Wealthy Global Citizens", description: "> 1M$ actifs" },
                        { icon: Briefcase, title: t('ltr_page.cat2') || "Wealthy Pensioners", description: "> 80k$ revenus/an" },
                        { icon: TrendingUp, title: t('ltr_page.cat4') || "Highly Skilled Pros", description: "Secteurs cibles" }
                    ]}
                />

                {/* 3. High Value Feature Block */}
                <HighValueBlock
                    title={t('ltr_page.high_value.title') || "Optimisation Fiscale"}
                    highlight={t('ltr_page.high_value.highlight') || "& Liberté"}
                    description={t('ltr_page.high_value.description') || "Le LTR est un statut de résident privilégié qui vous permet de travailler légalement et d'optimiser votre fiscalité."}
                    listItems={[
                        { icon: DollarSign, text: t('ltr_page.high_value.item1') || "17% Flat Tax (Professionnels)" },
                        { icon: Briefcase, text: t('ltr_page.high_value.item2') || "Permis de Travail Inclus" },
                        { icon: Globe, text: t('ltr_page.high_value.item3') || "Exonération Revenus Étrangers" }
                    ]}
                    cardTitle={t('ltr_page.high_value.card_title') || "Avantages Exclusifs"}
                    cardItems={[
                        t('ltr_page.high_value.card_item1') || "Fast Track Aéroport VIP",
                        t('ltr_page.high_value.card_item2') || "Pas de Rapport 90 Jours",
                        t('ltr_page.high_value.card_item3') || "4 Dépendants Inclus",
                        t('ltr_page.high_value.card_item4') || "Résidence Fiscale Privilégiée"
                    ]}
                />

                {/* 4. Highs & Lows Section */}
                <HighsLows
                    highsTitle={t('ltr_page.pros_title') || "Points Forts"}
                    highs={Array.isArray(t('ltr_page.pros')) ? (t('ltr_page.pros') as any) : []}
                    lowsTitle={t('ltr_page.cons_title') || "Points Faibles"}
                    lows={Array.isArray(t('ltr_page.cons')) ? (t('ltr_page.cons') as any) : []}
                />

                {/* 5. FAQ Section */}
                <FAQAccordion
                    title={t('ltr_page.faq_title') || "Questions Fréquentes (FAQ)"}
                    faqs={Array.isArray(t('ltr_page.faq')) ? (t('ltr_page.faq') as any) : []}
                />

                {/* EEAT Signals */}
                <AuthorEEAT date="2026-01-24" />
            </div>


            {/* 6. Appointment Section */}
            <section id="appointment-section" className="py-24 bg-slate-50 border-t">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden lg:grid lg:grid-cols-2">
                        <div className="p-12 lg:p-20 text-white flex flex-col justify-center">
                            <h2 className="text-4xl font-black mb-6 leading-tight">Expertise <span className="text-amber-500">LTR 10 Ans</span></h2>
                            <p className="text-slate-400 mb-8 text-lg">Le processus LTR nécessite un audit financier approfondi par le BOI. Nous gérons tout.</p>
                            <ul className="space-y-4">
                                {[
                                    t('ltr_page.audit1') || "Audit Revenus > 80k USD",
                                    t('ltr_page.audit2') || "Analyse Investissement",
                                    t('ltr_page.audit3') || "Liaison Board of Investment",
                                    t('ltr_page.audit4') || "Inclusion Famille (4 pers.)"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center space-x-3 text-base font-bold">
                                        <Check className="text-amber-500 w-6 h-6 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-12 lg:p-20 bg-white">
                            <ExpertAppointmentForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LTRClientPage;
