'use client';

import React from 'react';
import {
    Shield, AlertTriangle, CreditCard, Clock, Heart, Users,
    Check, X, ChevronRight, Plane, HelpCircle, Star, ExternalLink
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath, useCurrentLang } from '@/hooks/useLang';
import { FAQAccordion } from '@/components/ui/PageComponents';
import { RelatedPages } from '@/components/RelatedPages';
import { VisaHero } from '@/components/visa/VisaHero';
import { AuthorEEAT } from '@/components/AuthorEEAT';
import ExpertAppointmentForm from '@/components/ExpertAppointmentForm';

// Localized URLs for insurance providers — fallback to EN when not available
const PROVIDER_URLS: Record<string, Record<string, string>> = {
    mondialcare: {
        en: 'https://www.mondialcare.eu/',
        fr: 'https://www.mondialcare.eu/?lang=fr',
        de: 'https://www.mondialcare.eu/?lang=de',
        es: 'https://www.mondialcare.eu/?lang=es',
        it: 'https://www.mondialcare.eu/?lang=it',
        ru: 'https://www.mondialcare.eu/?lang=ru',
        zh: 'https://www.mondialcare.eu/?lang=zh-hans',
        ja: 'https://www.mondialcare.eu/?lang=ja',
        ko: 'https://www.mondialcare.eu/?lang=ko',
        ar: 'https://www.mondialcare.eu/?lang=ar',
    },
    axa_schengen: {
        en: 'https://www.axa-schengen.com/en/products/axa-schengen-europe-travel',
        fr: 'https://www.axa-schengen.com/fr/produits/axa-schengen-europe-travel',
        de: 'https://www.axa-schengen.com/de/produkte/axa-schengen-europe-travel',
        es: 'https://www.axa-schengen.com/es/productos/axa-schengen-europe-travel',
        ru: 'https://www.axa-schengen.com/ru/produkty/axa-schengen-europe-travel',
        zh: 'https://www.axa-schengen.com/zh/products/axa-schengen-europe-travel',
    },
    heymondo: {
        en: 'https://heymondo.com/',
        fr: 'https://heymondo.fr/',
        es: 'https://heymondo.com/es/seguro-de-viaje-temporal/',
        it: 'https://heymondo.it/',
    },
    april: {
        en: 'https://www.april-international.com/en/travel-and-holiday-insurance',
        fr: 'https://www.april-international.com/fr/guides/voyage',
        es: 'https://www.april-international.com/es/guias/viajar',
        de: 'https://www.april-international.com/de/unbefristete-auslandskrankenversicherung/guide/unterschiede-reisekrankenversicherung-und-auslandskrankenversicherung',
    },
    acs: {
        en: 'https://www.acs-ami.com/en/travel-insurance/globe-traveller/',
        fr: 'https://www.acs-ami.com/fr/assurance-voyage/globe-traveller/',
    },
    safetywing: { en: 'https://safetywing.com' },
    ava: { en: 'https://www.ava.fr' },
    genki: { en: 'https://www.genki.world' },
    axa_voyage: { en: 'https://www.assurance-voyage.axa-assistance.fr/' },
    chapka: { en: 'https://www.chapkadirect.fr' },
};

const getProviderUrl = (provider: string, lang: string) =>
    PROVIDER_URLS[provider]?.[lang] || PROVIDER_URLS[provider]?.en || '#';

const InsuranceClientPage: React.FC = () => {
    const { t } = useLanguage();
    const langPath = useLangPath();
    const lang = useCurrentLang();

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* 1. Hero */}
            <VisaHero
                badge={t('insurance_page.badge')}
                title={t('insurance_page.hero_h1')}
                subtitle={t('insurance_page.hero_title')}
                description={t('insurance_page.hero_subtitle')}
                tagline={t('insurance_page.hero_tagline')}
                backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">

                {/* 2. Why Insurance? Key Stats */}
                <section className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12 mb-12">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">{t('insurance_page.why_title')}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-red-50 rounded-xl">
                            <AlertTriangle className="h-10 w-10 text-red-500 mx-auto mb-4" />
                            <p className="text-3xl font-black text-red-600 mb-2">{t('insurance_page.stat_hospital_cost')}</p>
                            <p className="text-sm text-slate-600">{t('insurance_page.stat_hospital_label')}</p>
                        </div>
                        <div className="text-center p-6 bg-amber-50 rounded-xl">
                            <Shield className="h-10 w-10 text-amber-500 mx-auto mb-4" />
                            <p className="text-3xl font-black text-amber-600 mb-2">{t('insurance_page.stat_recommended')}</p>
                            <p className="text-sm text-slate-600">{t('insurance_page.stat_recommended_label')}</p>
                        </div>
                        <div className="text-center p-6 bg-green-50 rounded-xl">
                            <Heart className="h-10 w-10 text-green-500 mx-auto mb-4" />
                            <p className="text-3xl font-black text-green-600 mb-2">{t('insurance_page.stat_repatriation')}</p>
                            <p className="text-sm text-slate-600">{t('insurance_page.stat_repatriation_label')}</p>
                        </div>
                    </div>
                </section>

                {/* 3. Visas with Mandatory Insurance */}
                <section className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12 mb-12">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">{t('insurance_page.mandatory_title')}</h2>
                    <p className="text-slate-600 mb-8">{t('insurance_page.mandatory_intro')}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* O-A Visa */}
                        <div className="border-2 border-red-200 rounded-xl p-6 bg-red-50/30">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">{t('insurance_page.mandatory_badge')}</span>
                                <h3 className="text-lg font-bold text-slate-900">{t('insurance_page.visa_oa_title')}</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />{t('insurance_page.visa_oa_coverage')}</li>
                                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />{t('insurance_page.visa_oa_duration')}</li>
                                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />{t('insurance_page.visa_oa_certificate')}</li>
                            </ul>
                        </div>

                        {/* O-W Visa */}
                        <div className="border-2 border-amber-200 rounded-xl p-6 bg-amber-50/30">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">{t('insurance_page.mandatory_badge')}</span>
                                <h3 className="text-lg font-bold text-slate-900">{t('insurance_page.visa_ow_title')}</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />{t('insurance_page.visa_ow_coverage')}</li>
                                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />{t('insurance_page.visa_ow_duration')}</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 4. Comparatif assurances - Digital Nomads */}
                <section className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12 mb-12">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">{t('insurance_page.nomad_title')}</h2>
                    <p className="text-slate-500 mb-8">{t('insurance_page.nomad_subtitle')}</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'SafetyWing', key: 'safetywing', star: true, provider: 'safetywing' },
                            { name: 'April International', key: 'april', star: true, provider: 'april' },
                            { name: 'Ava – Diginomad', key: 'ava', star: false, provider: 'ava' },
                            { name: 'Genki', key: 'genki', star: false, provider: 'genki' },
                            { name: 'AXA International', key: 'axa', star: false, provider: 'axa_voyage' },
                            { name: 'Chapka – Cap Aventure', key: 'chapka', star: true, provider: 'chapka' },
                        ].map(({ name, key, star, provider }) => (
                            <div key={key} className="border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-3">
                                    <a href={getProviderUrl(provider, lang)} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:text-amber-600 transition-colors inline-flex items-center gap-1.5">
                                        {name} <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                                    </a>
                                    {star && <Star className="h-4 w-4 text-amber-500 fill-amber-500" />}
                                </div>
                                <p className="text-sm text-slate-600">{t(`insurance_page.${key}_desc`)}</p>
                            </div>
                        ))}
                    </div>

                    {/* Other options */}
                    <div className="mt-8 bg-slate-50 rounded-xl p-6">
                        <h3 className="font-bold text-slate-900 mb-3">{t('insurance_page.other_options_title')}</h3>
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-start gap-2">
                                <ChevronRight className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                <div><a href={getProviderUrl('heymondo', lang)} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:text-amber-600 transition-colors">Heymondo <ExternalLink className="h-3 w-3 inline" /></a> — {t('insurance_page.heymondo_desc')}</div>
                            </div>
                            <div className="flex items-start gap-2">
                                <ChevronRight className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                <div><a href={getProviderUrl('acs', lang)} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:text-amber-600 transition-colors">ACS Globe Partner <ExternalLink className="h-3 w-3 inline" /></a> — {t('insurance_page.acs_desc')}</div>
                            </div>
                        </div>
                    </div>

                    {/* Criteria */}
                    <div className="mt-8">
                        <h3 className="font-bold text-slate-900 mb-4">{t('insurance_page.criteria_title')}</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { icon: Clock, key: 'flexibility' },
                                { icon: Plane, key: 'repatriation' },
                                { icon: Users, key: 'liability' },
                                { icon: Shield, key: 'ceiling' },
                            ].map(({ icon: Icon, key }) => (
                                <div key={key} className="bg-amber-50 rounded-lg p-4 text-center">
                                    <Icon className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                                    <p className="text-sm font-bold text-slate-900">{t(`insurance_page.criteria_${key}`)}</p>
                                    <p className="text-xs text-slate-500 mt-1">{t(`insurance_page.criteria_${key}_desc`)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Assurances Retraite */}
                <section className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12 mb-12">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">{t('insurance_page.retirement_title')}</h2>
                    <p className="text-slate-500 mb-8">{t('insurance_page.retirement_subtitle')}</p>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="text-left px-4 py-3 font-bold text-slate-700">{t('insurance_page.table_insurer')}</th>
                                    <th className="text-left px-4 py-3 font-bold text-slate-700">{t('insurance_page.table_age_limit')}</th>
                                    <th className="text-left px-4 py-3 font-bold text-slate-700">{t('insurance_page.table_highlight')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { name: 'Mondial Care', age: '85 ans', highlight: 'retirement_mondial', url: 'https://www.mondialcare.eu/?lang=fr' },
                                    { name: 'AXA', age: t('insurance_page.no_limit'), highlight: 'retirement_axa', url: 'https://www.axa-schengen.com/fr/visa/demarches/limite-age-assurance-visa-schengen' },
                                    { name: 'Heymondo', age: '74 ans', highlight: 'retirement_heymondo', url: 'https://heymondo.fr/' },
                                    { name: 'April International', age: '75 ans', highlight: 'retirement_april', url: 'https://www.april.fr/assurance-sante-internationale/assurance-voyage' },
                                    { name: 'ACS Globe Traveller', age: '66 ans', highlight: 'retirement_acs', url: 'https://www.acs-ami.com/fr/assurance-voyage/globe-traveller/' },
                                ].map(({ name, age, highlight, url }) => (
                                    <tr key={name} className="hover:bg-slate-50">
                                        <td className="px-4 py-3 font-medium text-slate-900">
                                            <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors inline-flex items-center gap-1.5">
                                                {name} <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                                            </a>
                                        </td>
                                        <td className="px-4 py-3 text-slate-600">{age}</td>
                                        <td className="px-4 py-3 text-slate-600">{t(`insurance_page.${highlight}`)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Age impact */}
                    <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
                        <h3 className="font-bold text-slate-900 mb-3">{t('insurance_page.age_impact_title')}</h3>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />{t('insurance_page.age_impact_1')}</li>
                            <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />{t('insurance_page.age_impact_2')}</li>
                            <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />{t('insurance_page.age_impact_3')}</li>
                        </ul>
                    </div>
                </section>

                {/* 6. Limites Carte Bancaire */}
                <section className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12 mb-12">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">{t('insurance_page.card_title')}</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Clock, key: 'card_duration' },
                            { icon: CreditCard, key: 'card_ceiling' },
                            { icon: AlertTriangle, key: 'card_advance' },
                            { icon: Shield, key: 'card_conditions' },
                            { icon: X, key: 'card_exclusions' },
                        ].map(({ icon: Icon, key }) => (
                            <div key={key} className="bg-red-50/50 border border-red-100 rounded-xl p-5">
                                <Icon className="h-6 w-6 text-red-500 mb-3" />
                                <h3 className="font-bold text-slate-900 mb-1">{t(`insurance_page.${key}_title`)}</h3>
                                <p className="text-sm text-slate-600">{t(`insurance_page.${key}_desc`)}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-5 text-center">
                        <p className="text-sm font-bold text-red-700">{t('insurance_page.card_conclusion')}</p>
                    </div>
                </section>

                {/* 7. FAQ */}
                <FAQAccordion
                    title={t('insurance_page.faq_title')}
                    faqs={[
                        { q: t('insurance_page.faqs.0.q'), a: t('insurance_page.faqs.0.a') },
                        { q: t('insurance_page.faqs.1.q'), a: t('insurance_page.faqs.1.a') },
                        { q: t('insurance_page.faqs.2.q'), a: t('insurance_page.faqs.2.a') },
                        { q: t('insurance_page.faqs.3.q'), a: t('insurance_page.faqs.3.a') },
                    ]}
                />

                {/* EEAT */}
                <AuthorEEAT date="2026-02-18" />

                {/* 8. Related Pages */}
                <RelatedPages
                    title={t('footer.col_visas')}
                    pages={[
                        {
                            title: t('visas.retirement_title') || t('nav.retirement'),
                            description: t('visas.retirement_desc') || '',
                            href: langPath('retirement-visa'),
                            icon: Heart
                        },
                        {
                            title: t('nav.dtv'),
                            description: t('visas.dtv_desc') || '',
                            href: langPath('dtv'),
                            icon: Plane
                        },
                        {
                            title: t('nav.faq'),
                            description: t('faq_page.subtitle') || '',
                            href: langPath('faq'),
                            icon: HelpCircle
                        }
                    ]}
                />
            </div>

            {/* 9. Appointment */}
            <section id="appointment-section" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden lg:grid lg:grid-cols-2">
                        <div className="p-12 lg:p-20 text-white flex flex-col justify-center">
                            <h2 className="text-4xl font-black mb-6 leading-tight">{t('insurance_page.cta_title')} <span className="text-amber-500">{t('insurance_page.cta_highlight')}</span></h2>
                            <p className="text-slate-400 mb-8 text-lg">{t('insurance_page.cta_desc')}</p>
                            <ul className="space-y-4">
                                {[
                                    t('insurance_page.cta_item1'),
                                    t('insurance_page.cta_item2'),
                                    t('insurance_page.cta_item3'),
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

export default InsuranceClientPage;
