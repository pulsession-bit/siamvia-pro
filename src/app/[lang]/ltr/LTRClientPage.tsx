'use client';

import React from 'react';
import Image from 'next/image';
import { Check, Shield, TrendingUp, Award, DollarSign, Briefcase, Users, Globe } from 'lucide-react';
import { ExpertAppointmentForm } from '@/components/ExpertAppointmentForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { HighsLows, FAQAccordion, HighValueBlock } from '@/components/ui/PageComponents';

const LTRClientPage: React.FC = () => {
    const { t } = useLanguage();

    // Fallback content if translation keys are missing momentarily or for dev
    const content = {
        badge: t('ltr_page.badge') || "Residency 10 Years",
        hero_title: t('ltr_page.hero_title') || "Le VISA LTR Thaïlande", // Added back
        title: t('ltr_page.title') || "Visa LTR: La Résidence Longue Durée",
        subtitle: t('ltr_page.subtitle') || "Le statut fiscal et résidentiel le plus avantageux pour les citoyens fortunés.",
        cta: t('ltr_page.cta') || "Vérifier mon éligibilité LTR", // Added back
        why_title: t('ltr_page.why_title') || "Pourquoi choisir le LTR ?", // Added back
        benefits: [
            { icon: Shield, title: t('ltr_page.benefit1_title') || "10 Ans de Visa", desc: t('ltr_page.benefit1_desc') || "Renouvelable, avec permis de travail numérique inclus." },
            { icon: TrendingUp, title: t('ltr_page.benefit2_title') || "17% d'Impôt", desc: t('ltr_page.benefit2_desc') || "Taux forfaitaire sur les revenus locaux pour les professionnels." },
            { icon: Award, title: t('ltr_page.benefit3_title') || "Service VIP", desc: t('ltr_page.benefit3_desc') || "Accès prioritaire aéroport et rapports de 90 jours supprimés." }
        ],
        categories: [
            t('ltr_page.cat1') || "Wealthy Global Citizens",
            t('ltr_page.cat2') || "Wealthy Pensioners",
            t('ltr_page.cat3') || "Work-from-Thailand",
            t('ltr_page.cat4') || "Highly Skilled Pros"
        ],
        audit_list: [
            t('ltr_page.audit1') || "Audit Revenus > 80k USD",
            t('ltr_page.audit2') || "Analyse Investissement",
            t('ltr_page.audit3') || "Liaison Board of Investment",
            t('ltr_page.audit4') || "Inclusion Famille (4 pers.)"
        ],
        pros_title: t('ltr_page.pros_title') || "Points Forts",
        cons_title: t('ltr_page.cons_title') || "Points Faibles",
        pros: Array.isArray(t('ltr_page.pros')) ? (t('ltr_page.pros') as unknown as string[]) : [
            "Validité 10 ans (5+5) renouvelable",
            "Permis de travail numérique inclus",
            "Fast Track Aéroport International",
            "Exonération fiscale sur revenus étrangers",
            "Taux 17% pour les professionnels",
            "4 Dépendants inclus (Conjoint/Enfants)"
        ],
        cons: Array.isArray(t('ltr_page.cons')) ? (t('ltr_page.cons') as unknown as string[]) : [
            "Critères financiers très stricts (>80k$ richesse)",
            "Processus de validation long (BOI)",
            "Paperasse administrative lourde au début",
            "Assurance maladie obligatoire (>50k$)",
            "Investissement requis pour certaines catégories"
        ],
        faq_title: t('ltr_page.faq_title') || "Questions Fréquentes (FAQ)",
        faq: Array.isArray(t('ltr_page.faq')) ? (t('ltr_page.faq') as unknown as { q: string, a: string }[]) : [
            { q: "Quelle est la différence avec le Visa Elite ?", a: "Le Visa Elite est payant (coûteux) et ne permet pas de travailler. Le LTR est 'gratuit' (frais de dossier faibles) si vous êtes éligible, et inlut un permis de travail." },
            { q: "Puis-je travailler avec un visa LTR ?", a: "Oui, c'est l'un des rares visas long terme qui inclut un permis de travail numérique (Digital Work Permit) sans avoir besoin d'employer 4 Thaïlandais par étranger." },
            { q: "Quels sont les revenus minimums ?", a: "Généralement 80,000 USD par an sur les 2 dernières années, ou un mix d'investissements et de revenus. Les retraités peuvent être éligibles avec moins s'ils investissent." },
            { q: "Combien de temps prend la procédure ?", a: "Il faut compter entre 1 et 3 mois pour l'approbation du BOI (Board of Investment), puis quelques semaines pour l'émission du visa." }
        ]
    };

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
                        alt="Luxury Bangkok Residence LTR"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <div className="inline-block px-4 py-1.5 bg-amber-500/20 border border-amber-500 text-amber-500 rounded-full text-xs font-black mb-8 uppercase tracking-widest shadow-lg backdrop-blur-md">
                        {content.badge}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
                        {content.hero_title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-200 mb-12 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                        {content.subtitle}
                    </p>
                    <button
                        onClick={() => document.getElementById('appointment-section')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-amber-500 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:bg-amber-400 transition-all transform hover:-translate-y-1 hover:shadow-amber-500/30"
                    >
                        {content.cta}
                    </button>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                            {content.why_title}
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                            Conçu pour attirer les talents et les investisseurs, ce visa offre des privilèges inédits.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {content.benefits.map((f, i) => (
                            <div key={i} className="text-center group p-8 rounded-3xl hover:bg-slate-50 transition duration-500">
                                <div className="w-20 h-20 bg-slate-100 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-amber-500 group-hover:text-white transition duration-300 shadow-sm">
                                    <f.icon className="w-10 h-10 text-slate-900 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{f.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* High Value Feature Block */}
            <HighValueBlock
                title={t('ltr_page.high_value.title') || "Optimisation Fiscale"}
                highlight={t('ltr_page.high_value.highlight') || "& Liberté"}
                description={t('ltr_page.high_value.description') || "Le LTR n'est pas qu'un visa, c'est un statut de résident privilégié qui vous permet de travailler légalement et d'optimiser votre fiscalité avec un taux forfaitaire de 17% pour les professionnels qualifiés."}
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

            {/* Pros & Cons / Comparison */}
            <HighsLows
                highsTitle={content.pros_title}
                highs={content.pros as string[]}
                lowsTitle={content.cons_title}
                lows={content.cons as string[]}
            />

            {/* FAQ Section */}
            <FAQAccordion
                title={content.faq_title}
                faqs={Array.isArray(content.faq) ? content.faq.map(f => ({ q: f.q, a: f.a })) : []}
            />

            {/* Appointment */}
            <section id="appointment-section" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden lg:grid lg:grid-cols-2">
                        <div className="p-12 lg:p-20 text-white flex flex-col justify-center">
                            <h2 className="text-4xl font-black mb-6 leading-tight">Expertise <span className="text-amber-500">LTR 10 Ans</span></h2>
                            <p className="text-slate-400 mb-8 text-lg">Le processus LTR est complexe et nécessite un audit financier approfondi par le BOI (Board of Investment). Nous gérons tout.</p>
                            <ul className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                                {content.audit_list.map((item, idx) => (
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
