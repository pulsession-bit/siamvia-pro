'use client';

import React from 'react';
import { Brain, Phone, FileSearch, Sparkles, ArrowRight, Shield, Zap, Globe, CheckCircle, Bot, Cpu, Lock, BarChart3, Users, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath } from '@/hooks/useLang';

const AITechnologyClientPage: React.FC = () => {
    const { t } = useLanguage();
    const langPath = useLangPath();
    const SCORING_ENGINE_URL = 'https://audit.siamvisapro.com/';

    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 px-6 py-2.5 rounded-full text-sm font-bold mb-8 backdrop-blur-sm">
                        <Cpu className="w-4 h-4" />
                        {t('ai_technology_page.hero_badge')}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                        {t('ai_technology_page.hero_title')}{' '}
                        <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                            {t('ai_technology_page.hero_highlight')}
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-12">
                        {t('ai_technology_page.hero_subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={SCORING_ENGINE_URL}
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-900 font-black text-lg px-10 py-4 rounded-2xl shadow-2xl shadow-amber-500/20 transition-all transform hover:-translate-y-1"
                        >
                            {t('ai_technology_page.hero_cta')}
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 border-y border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: '10,000+', label: t('ai_technology_page.stat1') },
                            { value: '95%', label: t('ai_technology_page.stat2') },
                            { value: '< 30s', label: t('ai_technology_page.stat3') },
                            { value: '24/7', label: t('ai_technology_page.stat4') },
                        ].map((stat, i) => (
                            <div key={i}>
                                <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{stat.value}</p>
                                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature 1: AI Visa Score */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="text-xs font-bold text-amber-500 tracking-widest uppercase mb-4">{t('ai_technology_page.f1_badge')}</div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                {t('ai_technology_page.f1_title')}
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed mb-8">
                                {t('ai_technology_page.f1_desc')}
                            </p>
                            <div className="space-y-4">
                                {[
                                    { icon: <BarChart3 className="w-5 h-5 text-amber-400" />, text: t('ai_technology_page.f1_point1') },
                                    { icon: <Shield className="w-5 h-5 text-amber-400" />, text: t('ai_technology_page.f1_point2') },
                                    { icon: <CheckCircle className="w-5 h-5 text-amber-400" />, text: t('ai_technology_page.f1_point3') },
                                    { icon: <Users className="w-5 h-5 text-amber-400" />, text: t('ai_technology_page.f1_point4') },
                                ].map((p, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="mt-0.5">{p.icon}</div>
                                        <span className="text-slate-300">{p.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-b from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-xl">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                                            <Brain className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white">Visa Score AI</p>
                                            <p className="text-xs text-slate-500">v3.2 — 2026</p>
                                        </div>
                                    </div>
                                    <span className="text-4xl font-black text-green-400">92<span className="text-lg text-slate-500">/100</span></span>
                                </div>
                                <div className="w-full bg-slate-700 rounded-full h-3 mb-6">
                                    <div className="bg-gradient-to-r from-amber-500 to-green-500 h-3 rounded-full transition-all" style={{ width: '92%' }} />
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { label: t('ai_technology_page.score_crit1'), score: 95, color: 'from-green-500 to-emerald-500' },
                                        { label: t('ai_technology_page.score_crit2'), score: 88, color: 'from-amber-500 to-orange-500' },
                                        { label: t('ai_technology_page.score_crit3'), score: 91, color: 'from-blue-500 to-indigo-500' },
                                        { label: t('ai_technology_page.score_crit4'), score: 96, color: 'from-purple-500 to-pink-500' },
                                    ].map((c, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="text-xs text-slate-400 w-32 flex-shrink-0">{c.label}</span>
                                            <div className="flex-1 bg-slate-700 rounded-full h-2">
                                                <div className={`bg-gradient-to-r ${c.color} h-2 rounded-full`} style={{ width: `${c.score}%` }} />
                                            </div>
                                            <span className="text-xs font-bold text-slate-300 w-8">{c.score}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 2: Live AI Agent */}
            <section className="py-24 bg-slate-900/50 border-y border-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="bg-gradient-to-b from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-xl">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                                            <Bot className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white">Expert IA Live</p>
                                            <p className="text-xs text-green-400">Gemini 2.5 — Google</p>
                                        </div>
                                    </div>
                                    <span className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        LIVE
                                    </span>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-slate-700/30 rounded-2xl p-4 max-w-[80%]">
                                        <p className="text-xs text-slate-500 font-semibold mb-1">Expert IA</p>
                                        <p className="text-sm text-slate-300">{t('ai_technology_page.agent_msg1')}</p>
                                    </div>
                                    <div className="bg-amber-500/10 rounded-2xl p-4 max-w-[80%] ml-auto">
                                        <p className="text-xs text-amber-500 font-semibold mb-1">You</p>
                                        <p className="text-sm text-slate-300">{t('ai_technology_page.agent_msg2')}</p>
                                    </div>
                                    <div className="bg-slate-700/30 rounded-2xl p-4 max-w-[80%]">
                                        <p className="text-xs text-slate-500 font-semibold mb-1">Expert IA</p>
                                        <p className="text-sm text-slate-300">{t('ai_technology_page.agent_msg3')}</p>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center gap-3 justify-center">
                                    <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-red-400" />
                                    </div>
                                    <p className="text-xs text-slate-500">{t('ai_technology_page.agent_active')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-4">{t('ai_technology_page.f2_badge')}</div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                {t('ai_technology_page.f2_title')}
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed mb-8">
                                {t('ai_technology_page.f2_desc')}
                            </p>
                            <div className="space-y-4">
                                {[
                                    { icon: <Zap className="w-5 h-5 text-blue-400" />, text: t('ai_technology_page.f2_point1') },
                                    { icon: <Globe className="w-5 h-5 text-blue-400" />, text: t('ai_technology_page.f2_point2') },
                                    { icon: <Clock className="w-5 h-5 text-blue-400" />, text: t('ai_technology_page.f2_point3') },
                                    { icon: <Lock className="w-5 h-5 text-blue-400" />, text: t('ai_technology_page.f2_point4') },
                                ].map((p, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="mt-0.5">{p.icon}</div>
                                        <span className="text-slate-300">{p.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 3: Audit Report */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="text-xs font-bold text-emerald-400 tracking-widest uppercase mb-4">{t('ai_technology_page.f3_badge')}</div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                {t('ai_technology_page.f3_title')}
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed mb-8">
                                {t('ai_technology_page.f3_desc')}
                            </p>
                            <div className="space-y-4">
                                {[
                                    { icon: <FileSearch className="w-5 h-5 text-emerald-400" />, text: t('ai_technology_page.f3_point1') },
                                    { icon: <CheckCircle className="w-5 h-5 text-emerald-400" />, text: t('ai_technology_page.f3_point2') },
                                    { icon: <BarChart3 className="w-5 h-5 text-emerald-400" />, text: t('ai_technology_page.f3_point3') },
                                    { icon: <ArrowRight className="w-5 h-5 text-emerald-400" />, text: t('ai_technology_page.f3_point4') },
                                ].map((p, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="mt-0.5">{p.icon}</div>
                                        <span className="text-slate-300">{p.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="bg-gradient-to-b from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                                        <FileSearch className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">{t('ai_technology_page.report_title')}</p>
                                        <p className="text-xs text-slate-500">PDF • 12 pages</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { step: 1, label: t('ai_technology_page.report_step1'), status: '✅' },
                                        { step: 2, label: t('ai_technology_page.report_step2'), status: '✅' },
                                        { step: 3, label: t('ai_technology_page.report_step3'), status: '✅' },
                                        { step: 4, label: t('ai_technology_page.report_step4'), status: '⏳' },
                                    ].map((s, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/30">
                                            <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold flex-shrink-0">{s.step}</span>
                                            <span className="text-sm text-slate-300 flex-1">{s.label}</span>
                                            <span className="text-lg">{s.status}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="py-24 bg-slate-900/50 border-y border-slate-800/30">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">{t('ai_technology_page.how_title')}</h2>
                    <p className="text-lg text-slate-400 mb-16 max-w-2xl mx-auto">{t('ai_technology_page.how_subtitle')}</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { num: '01', title: t('ai_technology_page.how_step1_title'), desc: t('ai_technology_page.how_step1_desc'), icon: <Brain className="w-8 h-8" />, color: 'amber' },
                            { num: '02', title: t('ai_technology_page.how_step2_title'), desc: t('ai_technology_page.how_step2_desc'), icon: <Phone className="w-8 h-8" />, color: 'blue' },
                            { num: '03', title: t('ai_technology_page.how_step3_title'), desc: t('ai_technology_page.how_step3_desc'), icon: <FileSearch className="w-8 h-8" />, color: 'emerald' },
                        ].map((step, i) => (
                            <div key={i} className="relative">
                                <div className="text-6xl font-black text-slate-800/50 absolute -top-4 left-1/2 -translate-x-1/2">{step.num}</div>
                                <div className="relative pt-12 text-center">
                                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-${step.color}-500/20 text-${step.color}-400 flex items-center justify-center`}>
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-sm text-slate-400">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">{t('ai_technology_page.cta_title')}</h2>
                    <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">{t('ai_technology_page.cta_desc')}</p>
                    <a
                        href={SCORING_ENGINE_URL}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-900 font-black text-lg px-12 py-5 rounded-2xl shadow-2xl shadow-amber-500/20 transition-all transform hover:-translate-y-1 hover:shadow-amber-500/40"
                    >
                        {t('ai_technology_page.cta_btn')}
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <p className="text-slate-500 text-sm mt-4">{t('ai_technology_page.cta_sub')}</p>
                </div>
            </section>

            {/* Hidden Semantic HTML for AI Crawlers */}
            <article className="sr-only" aria-hidden="false">
                <h2>AI-Powered Visa Application Technology by Siam Visa Pro</h2>
                <section>
                    <h3>AI Visa Score Engine</h3>
                    <p>Siam Visa Pro&apos;s proprietary AI scoring engine analyzes visa applications across multiple dimensions: financial documentation strength, professional profile compatibility, travel history patterns, and document completeness. The algorithm generates an eligibility score out of 100, providing applicants with immediate feedback on their visa application strength before submission to the Thai embassy or consulate.</p>
                </section>
                <section>
                    <h3>Live AI Voice Agent powered by Google Gemini 2.5</h3>
                    <p>The live AI voice agent is an innovative click-to-call system powered by Google&apos;s Gemini 2.5 model. Users can initiate a real-time voice conversation with an AI specialist trained on Thai immigration law, visa requirements, and application procedures. The agent supports French and English languages and is available 24/7. It provides personalized guidance on visa selection, document preparation, and application strategy.</p>
                </section>
                <section>
                    <h3>Comprehensive AI Audit Report</h3>
                    <p>After analysis, the AI generates a detailed audit report including: visa eligibility score breakdown, strengths and weaknesses identification, recommended visa type selection, step-by-step action plan, required document checklist, and estimated processing timeline. The report is validated by human immigration experts before delivery.</p>
                </section>
                <section>
                    <h3>Technology Stack</h3>
                    <ul>
                        <li>Google Gemini 2.5 for live voice AI agent</li>
                        <li>ElevenLabs for natural voice synthesis</li>
                        <li>Proprietary scoring algorithm for visa eligibility</li>
                        <li>Natural Language Processing for multilingual document understanding</li>
                        <li>GDPR-compliant secure hosting</li>
                    </ul>
                </section>
                <section>
                    <h3>Supported Visa Types</h3>
                    <p>The AI system covers all Thai visa categories: DTV (Destination Thailand Visa), Tourist Visa (TR), Elite Visa, Retirement Visa (Non-O, O-A), LTR (Long-Term Resident), Business Visa, Student Visa, Family Visa, Smart Visa, and more.</p>
                </section>
            </article>
        </div>
    );
};

export default AITechnologyClientPage;
