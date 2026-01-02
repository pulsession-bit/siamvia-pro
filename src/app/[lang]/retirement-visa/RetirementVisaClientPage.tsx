'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath } from '@/hooks/useLang';
import { URLS, IMAGES } from '@/constants';
import { HeroSection, PageContainer, Card, CTAButton, HighsLows, FAQAccordion, HighValueBlock } from '@/components/ui/PageComponents';
import { ExpertAppointmentForm } from '@/components/ExpertAppointmentForm';
import { RelatedPages } from '@/components/RelatedPages';
import { Briefcase, Plane, HelpCircle, Check, AlertTriangle, Heart, Shield, Stethoscope, Wallet, Infinity, MessageSquare, Phone, Mail, Video, Clock, Calendar } from 'lucide-react';

const RetirementVisaClientPage: React.FC = () => {
    const { t } = useLanguage();
    const langPath = useLangPath();
    const SCORING_ENGINE_URL = 'https://desk.siamvisapro.com';

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                backgroundImage={IMAGES.LTR}
                imageAlt="Retirement in Thailand"
                title={t('retirement_visa_page.hero_title')}
                subtitle={t('retirement_visa_page.hero_subtitle')}
                badge="● VISA RETRAITE"
            />

            {/* Main Content */}
            <PageContainer maxWidth="max-w-5xl" negativeMargin>
                {/* Eligibility Section */}
                <Card variant="white" className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                        <Heart className="h-6 w-6 text-amber-500 mr-3" />
                        {t('retirement_visa_page.eligibility_title')}
                    </h2>
                    <ul className="space-y-4">
                        <EligibilityItem text={t('retirement_visa_page.criteria1')} />
                        <EligibilityItem text={t('retirement_visa_page.criteria2')} />
                        <EligibilityItem text={t('retirement_visa_page.criteria3')} />
                        <EligibilityItem text={t('retirement_visa_page.criteria4')} />
                    </ul>
                </Card>

                {/* Common Pitfalls Section */}
                <Card variant="white" className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                        <Shield className="h-6 w-6 text-red-500 mr-3" />
                        {t('retirement_visa_page.pitfalls_title')}
                    </h2>
                    <div className="space-y-6">
                        <PitfallItem
                            title={t('retirement_visa_page.pitfall1_title')}
                            description={t('retirement_visa_page.pitfall1_desc')}
                        />
                        <PitfallItem
                            title={t('retirement_visa_page.pitfall2_title')}
                            description={t('retirement_visa_page.pitfall2_desc')}
                        />
                        <PitfallItem
                            title={t('retirement_visa_page.pitfall3_title')}
                            description={t('retirement_visa_page.pitfall3_desc')}
                        />
                    </div>
                </Card>

                {/* Warning Section */}
                <Card variant="amber" className="mb-12">
                    <div className="flex items-start">
                        <AlertTriangle className="h-6 w-6 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-amber-900 mb-2">
                                {t('retirement_visa_page.warning_title')}
                            </h3>
                            <p className="text-amber-800 text-sm">{t('retirement_visa_page.warning_desc')}</p>
                        </div>
                    </div>
                </Card>

                {/* High Value Feature Block */}
                <HighValueBlock
                    title={t('retirement_visa_page.high_value.title') || "Douceur de Vivre"}
                    highlight={t('retirement_visa_page.high_value.highlight') || "& Sécurité"}
                    description={t('retirement_visa_page.high_value.description') || "Profitez d'une retraite dorée au pays du sourire avec un coût de la vie avantageux et des infrastructures médicales de classe mondiale. Une retraite paisible sans compromis."}
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

                {/* CTA Section */}
                <Card variant="dark" className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-amber-400 mb-4">
                        {t('retirement_visa_page.cta_title')}
                    </h3>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        {t('retirement_visa_page.cta_desc')}
                    </p>
                    <CTAButton href={SCORING_ENGINE_URL} variant="primary">
                        {t('retirement_visa_page.cta_btn')}
                    </CTAButton>
                </Card>

                {/* Appointment Section */}
                <section id="appointment-section" className="py-24 bg-slate-50 border-t rounded-[3rem] overflow-hidden mb-12">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden lg:grid lg:grid-cols-2">
                            <div className="p-10 lg:p-16 bg-slate-900 text-white flex flex-col justify-center">
                                <h2 className="text-3xl font-black mb-6 leading-tight">Expertise <span className="text-amber-500">Retraite</span></h2>
                                <p className="text-slate-400 mb-8">La retraite en Thaïlande demande une préparation minutieuse des preuves bancaires et de l'assurance santé. Évitez les refus avec notre audit gratuit.</p>
                                <ul className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                                    <li className="flex items-center space-x-3 text-sm font-bold">
                                        <Check className="text-amber-500 w-5 h-5 flex-shrink-0" />
                                        <span>Audit financier (800k THB)</span>
                                    </li>
                                    <li className="flex items-center space-x-3 text-sm font-bold">
                                        <Check className="text-amber-500 w-5 h-5 flex-shrink-0" />
                                        <span>Vérification Assurance Santé</span>
                                    </li>
                                    <li className="flex items-center space-x-3 text-sm font-bold">
                                        <Check className="text-amber-500 w-5 h-5 flex-shrink-0" />
                                        <span>Liaison Ambassade E-Visa</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-10 lg:p-16">
                                <ExpertAppointmentForm />
                            </div>
                        </div>
                    </div>
                </section>
            </PageContainer>
        </div>
    );
};

const EligibilityItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex items-start">
        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-0.5" />
        <span className="text-slate-700">{text}</span>
    </li>
);

const PitfallItem: React.FC<{
    title: string;
    description: string;
}> = ({ title, description }) => (
    <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
        <h3 className="font-bold text-red-900 mb-2">{title}</h3>
        <p className="text-red-800 text-sm">{description}</p>
    </div>
);

export default RetirementVisaClientPage;
