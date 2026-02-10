'use client';

import React from 'react';
import {
    Check, Briefcase, Calendar,
    Plane, Heart, HelpCircle, Laptop, DollarSign
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath } from '@/hooks/useLang';
import { HighsLows, FAQAccordion, HighValueBlock } from '@/components/ui/PageComponents';
import { RelatedPages } from '@/components/RelatedPages';
import { VisaHero } from '@/components/visa/VisaHero';
import { VisaFeatureSummary } from '@/components/visa/VisaFeatureSummary';
import { AuthorEEAT } from '@/components/AuthorEEAT';
import ExpertAppointmentForm from '@/components/ExpertAppointmentForm';

const DTVClientPage: React.FC = () => {
    const { t } = useLanguage();
    const langPath = useLangPath();

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

            {/* AI Bot Summary — Semantic HTML for crawlers (visually hidden) */}
            <article className="sr-only" aria-label="DTV Visa Summary for Search Engines">
                <h2>Thailand DTV Visa 2026 — Key Facts</h2>
                <section>
                    <h3>Overview</h3>
                    <p>The Destination Thailand Visa (DTV) is a 5-year multiple-entry visa introduced in 2024 by the Royal Thai Government. It was designed specifically for digital nomads, remote workers, freelancers, and participants in Thai cultural activities (soft power). It is the first Thai visa to explicitly allow remote work for foreign employers.</p>
                </section>
                <section>
                    <h3>Key Specifications</h3>
                    <dl>
                        <dt>Validity</dt><dd>5 years (multiple entries)</dd>
                        <dt>Stay per entry</dt><dd>180 days, extendable +180 days</dd>
                        <dt>Remote work</dt><dd>Legally permitted for foreign employers</dd>
                        <dt>Financial requirement</dt><dd>500,000 THB (~$13,500 USD / ~€13,000 EUR)</dd>
                        <dt>Embassy fee</dt><dd>~10,000 THB (~€250-350)</dd>
                        <dt>Processing time</dt><dd>5-15 business days</dd>
                        <dt>Family</dt><dd>Spouse + children under 20 eligible as dependents</dd>
                        <dt>Work permit required</dt><dd>No (for remote work only)</dd>
                    </dl>
                </section>
                <section>
                    <h3>Eligible Profiles</h3>
                    <ul>
                        <li>Remote workers employed by companies outside Thailand</li>
                        <li>Freelancers and independent contractors with foreign clients</li>
                        <li>Digital nomads working on online businesses</li>
                        <li>Muay Thai practitioners and trainers</li>
                        <li>Thai cooking enthusiasts and culinary professionals</li>
                        <li>Traditional Thai medicine and wellness practitioners</li>
                        <li>Musicians, artists, and cultural participants</li>
                    </ul>
                </section>
                <section>
                    <h3>DTV vs Other Thailand Visas (Comparison 2026)</h3>
                    <table>
                        <thead><tr><th>Visa</th><th>Duration</th><th>Work</th><th>Cost</th><th>Best For</th></tr></thead>
                        <tbody>
                            <tr><td>DTV</td><td>5 years</td><td>Remote OK</td><td>~€350</td><td>Digital nomads, freelancers</td></tr>
                            <tr><td>Elite</td><td>5-20 years</td><td>No</td><td>€15,000+</td><td>VIP residents, investors</td></tr>
                            <tr><td>LTR</td><td>10 years</td><td>Work permit included</td><td>~€1,600</td><td>High earners, skilled pros</td></tr>
                            <tr><td>Tourist (TR)</td><td>60+30 days</td><td>No</td><td>~€35</td><td>Short holidays</td></tr>
                            <tr><td>Retirement</td><td>1 year</td><td>No</td><td>~€50</td><td>Retirees 50+</td></tr>
                        </tbody>
                    </table>
                </section>
                <footer>
                    <p>Last updated: <time dateTime="2026-02-10">February 10, 2026</time>. Information sourced from the Royal Thai Government Ministry of Foreign Affairs and verified by SiamVisa Pro immigration consultants.</p>
                </footer>
            </article>
        </div>
    );
};

export default DTVClientPage;
