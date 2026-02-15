'use client';

import React from 'react';
import {
    Check, Briefcase, Calendar,
    Plane, Heart, HelpCircle, Laptop, DollarSign
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath, useCurrentLang } from '@/hooks/useLang';
import { HighsLows, FAQAccordion, HighValueBlock } from '@/components/ui/PageComponents';
import { RelatedPages } from '@/components/RelatedPages';
import { VisaHero } from '@/components/visa/VisaHero';
import { VisaFeatureSummary } from '@/components/visa/VisaFeatureSummary';
import { AuthorEEAT } from '@/components/AuthorEEAT';
import ExpertAppointmentForm from '@/components/ExpertAppointmentForm';

const DTVClientPage: React.FC = () => {
    const { t } = useLanguage();
    const langPath = useLangPath();
    const lang = useCurrentLang();

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* 1. Hero Section */}
            <VisaHero
                badge={t('dtv_page.badge')}
                title={t('dtv_page.hero_h1')}
                subtitle={t('dtv_page.hero_title')}
                description={t('dtv_page.hero_subtitle')}
                tagline={t('dtv_page.hero_tagline')}
                backgroundImage="https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1920&q=80"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                {/* 2. Feature Summary Section */}
                <VisaFeatureSummary
                    whyTitle={t('dtv_page.why_title')}
                    features={[
                        { icon: Calendar, title: t('dtv_page.duration_title'), description: t('dtv_page.duration_desc') },
                        { icon: Briefcase, title: t('dtv_page.work_title'), description: t('dtv_page.work_desc') }
                    ]}
                    financeTitle={t('dtv_page.finance_title')}
                    financeDesc={t('dtv_page.finance_desc')}
                    whoTitle={t('dtv_page.who_title')}
                    whoItems={[
                        { icon: Check, title: t('dtv_page.who_remote'), description: t('dtv_page.who_remote_desc') },
                        { icon: Check, title: t('dtv_page.who_freelance'), description: t('dtv_page.who_freelance_desc') },
                        { icon: Check, title: t('dtv_page.who_softpower'), description: t('dtv_page.who_softpower_desc') }
                    ]}
                    ctaTitle={t('dtv_page.portfolio_title')}
                    ctaDesc={t('dtv_page.portfolio_desc')}
                    ctaBtnText={t('dtv_page.portfolio_btn')}
                    ctaHref="#appointment-section"
                    scoringUrl="#appointment-section"
                />

                {/* 3. High Value Feature Block */}
                <HighValueBlock
                    title={t('dtv_page.high_value.title') || "Liberté Numérique"}
                    highlight={t('dtv_page.high_value.highlight') || "& Workcation"}
                    description={t('dtv_page.high_value.description') || "Travaillez depuis la Thaïlande sans tracas visa ni impôts sur vos revenus étrangers (si <180j/an). Le DTV est la clé pour 5 ans de sérénité."}
                    listItems={[
                        { icon: Laptop, text: t('dtv_page.high_value.item1') || "Work From Anywhere" },
                        { icon: Calendar, text: t('dtv_page.high_value.item2') || "5 Ans de Validité (180j/entrée)" },
                        { icon: DollarSign, text: t('dtv_page.high_value.item3') || "Fiscalité Avantageuse" }
                    ]}
                    cardTitle={t('dtv_page.high_value.card_title') || "Profils Idéaux"}
                    cardItems={[
                        t('dtv_page.high_value.card_item1') || "Remote Workers / Employés",
                        t('dtv_page.high_value.card_item2') || "Digital Nomads & Freelances",
                        t('dtv_page.high_value.card_item3') || "Créateurs de Contenu / Soft Power",
                        t('dtv_page.high_value.card_item4') || "Participants Muay Thai / Cuisine"
                    ]}
                />

                {/* 4. Highs & Lows Section */}
                <HighsLows
                    highsTitle={t('dtv_page.highs_title')}
                    highs={[
                        t('dtv_page.highs.0'),
                        t('dtv_page.highs.1'),
                        t('dtv_page.highs.2'),
                        t('dtv_page.highs.3'),
                    ]}
                    lowsTitle={t('dtv_page.lows_title')}
                    lows={[
                        t('dtv_page.lows.0'),
                        t('dtv_page.lows.1'),
                        t('dtv_page.lows.2'),
                        t('dtv_page.lows.3'),
                    ]}
                />

                {/* 5. FAQ Section */}
                <FAQAccordion
                    title={t('dtv_page.faq_title')}
                    faqs={[
                        { q: t('dtv_page.faqs.0.q'), a: t('dtv_page.faqs.0.a') },
                        { q: t('dtv_page.faqs.1.q'), a: t('dtv_page.faqs.1.a') },
                        { q: t('dtv_page.faqs.2.q'), a: t('dtv_page.faqs.2.a') },
                        { q: t('dtv_page.faqs.3.q'), a: t('dtv_page.faqs.3.a') },
                    ]}
                />

                {/* EEAT Signals */}
                <AuthorEEAT date="2026-01-24" />

                {/* 6. Related Pages */}

                <RelatedPages
                    title={t('footer.col_visas')}
                    pages={[
                        {
                            title: t('visas.tr_title'),
                            description: t('visas.tr_desc'),
                            href: langPath('tourist-visa'),
                            icon: Plane
                        },
                        {
                            title: t('visas.ltr_title'),
                            description: t('visas.ltr_desc'),
                            href: langPath('ltr'),
                            icon: Heart
                        },
                        {
                            title: t('nav.faq'),
                            description: t('faq_page.subtitle'),
                            href: langPath('faq'),
                            icon: HelpCircle
                        }
                    ]}
                />
            </div>

            {/* 7. Appointment Section */}
            <section id="appointment-section" className="py-24 bg-slate-50 border-t">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden lg:grid lg:grid-cols-2">
                        <div className="p-12 lg:p-20 text-white flex flex-col justify-center">
                            <h2 className="text-4xl font-black mb-6 leading-tight">{t('dtv_page.hero_title')} <span className="text-amber-500">DTV</span></h2>
                            <p className="text-slate-400 mb-8 text-lg">{t('dtv_page.portfolio_desc')}</p>
                            <ul className="space-y-4">
                                {[
                                    t('dtv_page.who_remote'),
                                    t('dtv_page.who_freelance'),
                                    t('dtv_page.who_softpower'),
                                    t('dtv_page.duration_title')
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

export default DTVClientPage;
