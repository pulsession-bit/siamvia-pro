'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath } from '@/hooks/useLang';
import { IMAGES } from '@/constants';
import { PageContainer, HighsLows, FAQAccordion, HighValueBlock } from '@/components/ui/PageComponents';
import ExpertAppointmentForm from '@/components/ExpertAppointmentForm';
import { RelatedPages } from '@/components/RelatedPages';
import { VisaHero } from '@/components/visa/VisaHero';
import { VisaFeatureSummary } from '@/components/visa/VisaFeatureSummary';
import { VisaPitfalls } from '@/components/visa/VisaPitfalls';
import {
    Briefcase, Plane, HelpCircle, Check,
    Heart, Stethoscope, Wallet, Infinity
} from 'lucide-react';

const RetirementVisaClientPage: React.FC = () => {
    const { t } = useLanguage();
    const langPath = useLangPath();
    const SCORING_ENGINE_URL = 'https://desk.siamvisapro.com';

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* 1. Hero Section */}
            <VisaHero
                badge="● VISA RETRAITE"
                title={t('retirement_visa_page.hero_title')}
                subtitle={t('retirement_visa_page.hero_subtitle')}
                description="Le visa de long séjour pour les retraités de 50 ans et plus."
                tagline="Renouvelable chaque année sans quitter le pays."
                backgroundImage={IMAGES.LTR}
            />

            <PageContainer maxWidth="max-w-5xl" negativeMargin>
                {/* 2. Eligibility Section using FeatureSummary logic */}
                <VisaFeatureSummary
                    whyTitle={t('retirement_visa_page.eligibility_title')}
                    features={[
                        { icon: Check, title: t('retirement_visa_page.criteria1'), description: "" },
                        { icon: Check, title: t('retirement_visa_page.criteria2'), description: "" },
                        { icon: Check, title: t('retirement_visa_page.criteria3'), description: "" },
                        { icon: Check, title: t('retirement_visa_page.criteria4'), description: "" }
                    ]}
                    whoTitle="Profil Retraité Idéal"
                    whoItems={[
                        { icon: Heart, title: "Sérénité Médicale", description: "Accès à des hôpitaux de rang mondial" },
                        { icon: Wallet, title: "Budget Optimisé", description: "Coût de vie 50% moins cher qu'en Europe" }
                    ]}
                />

                {/* 3. Pitfalls & Warnings */}
                <VisaPitfalls
                    title={t('retirement_visa_page.pitfalls_title')}
                    items={[
                        { title: t('retirement_visa_page.pitfall1_title'), description: t('retirement_visa_page.pitfall1_desc') },
                        { title: t('retirement_visa_page.pitfall2_title'), description: t('retirement_visa_page.pitfall2_desc') },
                        { title: t('retirement_visa_page.pitfall3_title'), description: t('retirement_visa_page.pitfall3_desc') }
                    ]}
                    warningTitle={t('retirement_visa_page.warning_title')}
                    warningDesc={t('retirement_visa_page.warning_desc')}
                />

                {/* 4. High Value Block */}
                <HighValueBlock
                    title={t('retirement_visa_page.high_value.title') || "Douceur de Vivre"}
                    highlight={t('retirement_visa_page.high_value.highlight') || "& Sécurité"}
                    description={t('retirement_visa_page.high_value.description') || "Profitez d'une retraite dorée au pays du sourire avec un coût de la vie avantageux."}
                    listItems={[
                        { icon: Wallet, text: t('retirement_visa_page.high_value.item1') || "Coût de la vie avantageux" },
                        { icon: Infinity, text: t('retirement_visa_page.high_value.item2') || "Renouvelable à l'infini" },
                        { icon: Stethoscope, text: t('retirement_visa_page.high_value.item3') || "Médecine de Classe Mondiale" }
                    ]}
                    cardTitle={t('retirement_visa_page.high_value.card_title') || "Tranquillité d'Esprit"}
                    cardItems={[
                        t('retirement_visa_page.high_value.card_item1') || "Ouverture Compte Bancaire",
                        t('retirement_visa_page.high_value.card_item2') || "Assurance Santé (Facilitée)",
                        t('retirement_visa_page.high_value.card_item3') || "Assistance TM30/90 Jours",
                        t('retirement_visa_page.high_value.card_item4') || "Importation Effets Personnels"
                    ]}
                />

                {/* 5. Highs & Lows */}
                <HighsLows
                    highsTitle={t('retirement_visa_page.highs_title')}
                    highs={[
                        t('retirement_visa_page.highs.0'),
                        t('retirement_visa_page.highs.1'),
                        t('retirement_visa_page.highs.2'),
                        t('retirement_visa_page.highs.3'),
                    ]}
                    lowsTitle={t('retirement_visa_page.lows_title')}
                    lows={[
                        t('retirement_visa_page.lows.0'),
                        t('retirement_visa_page.lows.1'),
                        t('retirement_visa_page.lows.2'),
                        t('retirement_visa_page.lows.3'),
                    ]}
                />

                {/* 6. FAQ */}
                <FAQAccordion
                    title={t('retirement_visa_page.faq_title')}
                    faqs={[
                        { q: t('retirement_visa_page.faqs.0.q'), a: t('retirement_visa_page.faqs.0.a') },
                        {
                            q: t('retirement_visa_page.faqs.1.q'),
                            a: (
                                <>
                                    {t('retirement_visa_page.faqs.1.a')}{' '}
                                    <a href={langPath('dtv')} className="text-amber-600 underline font-bold hover:text-amber-700">
                                        {t('visas.dtv_title')} &rarr;
                                    </a>
                                </>
                            )
                        },
                        { q: t('retirement_visa_page.faqs.2.q'), a: t('retirement_visa_page.faqs.2.a') },
                        { q: t('retirement_visa_page.faqs.3.q'), a: t('retirement_visa_page.faqs.3.a') },
                    ]}
                />

                {/* 7. Appointment Integrated Form */}
                <section id="appointment-section" className="py-24 bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden mb-12">
                    <div className="max-w-5xl mx-auto px-4 lg:grid lg:grid-cols-2">
                        <div className="p-10 bg-slate-900 text-white rounded-[2rem] lg:rounded-r-none">
                            <h2 className="text-3xl font-black mb-6 leading-tight">Expertise <span className="text-amber-500">Retraite</span></h2>
                            <p className="text-slate-400 mb-8">La retraite en Thaïlande demande une préparation minutieuse. Évitez les refus avec notre audit gratuit.</p>
                            <ul className="space-y-4">
                                {["Audit financier (800k THB)", "Vérification Assurance Santé", "Liaison Ambassade E-Visa"].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-sm font-bold">
                                        <Check className="text-amber-500 w-5 h-5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-10">
                            <ExpertAppointmentForm />
                        </div>
                    </div>
                </section>

                {/* 8. Related Pages */}
                <RelatedPages
                    title={t('footer.col_visas')}
                    pages={[
                        {
                            title: t('visas.dtv_title'),
                            description: t('visas.dtv_desc'),
                            href: langPath('dtv'),
                            icon: Briefcase
                        },
                        {
                            title: t('visas.tr_title'),
                            description: t('visas.tr_desc'),
                            href: langPath('tourist-visa'),
                            icon: Plane
                        },
                        {
                            title: t('nav.faq'),
                            description: t('faq_page.subtitle'),
                            href: langPath('faq'),
                            icon: HelpCircle
                        }
                    ]}
                />
            </PageContainer>

            {/* AI Bot Summary — Semantic HTML for crawlers (visually hidden) */}
            <article className="sr-only" aria-label="Thailand Retirement Visa Summary for Search Engines">
                <h2>Thailand Retirement Visa (Non-O / Non-OA) 2026 — Key Facts</h2>
                <section>
                    <h3>Overview</h3>
                    <p>The Thailand Retirement Visa (Non-Immigrant O or Non-OA) is a 1-year renewable visa for foreigners aged 50 and above. It requires a deposit of 800,000 THB in a Thai bank or monthly income of 65,000 THB. Employment is not allowed. It is the most popular long-stay visa for retirees in Thailand.</p>
                </section>
                <section>
                    <h3>Key Specifications</h3>
                    <dl>
                        <dt>Validity</dt><dd>1 year (renewable indefinitely)</dd>
                        <dt>Age requirement</dt><dd>50 years old or above</dd>
                        <dt>Financial requirement</dt><dd>800,000 THB deposit OR 65,000 THB/month income</dd>
                        <dt>Work allowed</dt><dd>No</dd>
                        <dt>Extension fee</dt><dd>1,900 THB (~€50/year)</dd>
                        <dt>90-day reporting</dt><dd>Required</dd>
                        <dt>Health insurance</dt><dd>Mandatory for Non-OA; recommended for Non-O</dd>
                    </dl>
                </section>
                <section>
                    <h3>Retirement vs Other Thailand Visas (Comparison 2026)</h3>
                    <table>
                        <thead><tr><th>Visa</th><th>Duration</th><th>Work</th><th>Cost</th><th>Best For</th></tr></thead>
                        <tbody>
                            <tr><td>Retirement (Non-O)</td><td>1 year</td><td>No</td><td>~€50/year</td><td>Retirees 50+</td></tr>
                            <tr><td>Elite</td><td>5-20 years</td><td>No</td><td>€15,000+</td><td>VIP residents</td></tr>
                            <tr><td>LTR (Pensioner)</td><td>10 years</td><td>Work permit</td><td>~€1,300</td><td>Wealthy retirees</td></tr>
                            <tr><td>Family (Marriage)</td><td>1 year</td><td>Work permit possible</td><td>~€50/year</td><td>Married to Thai national</td></tr>
                        </tbody>
                    </table>
                </section>
                <footer>
                    <p>Last updated: <time dateTime="2026-02-10">February 10, 2026</time>. Information sourced from the Thai Immigration Bureau and verified by SiamVisa Pro immigration consultants.</p>
                </footer>
            </article>
        </div>
    );
};

export default RetirementVisaClientPage;
