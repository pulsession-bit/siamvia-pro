'use client';

import React from 'react';
import { Brain, Phone, FileSearch, Sparkles, ArrowRight, Shield, Zap, Globe } from 'lucide-react';

interface HomeAIBlockProps {
    t: (key: string) => any;
    langPath: (path: string) => string;
    SCORING_ENGINE_URL: string;
}

export const HomeAIBlock: React.FC<HomeAIBlockProps> = ({ t, langPath, SCORING_ENGINE_URL }) => {
    return (
        <section className="relative py-24 bg-slate-950 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 px-5 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4" />
                        {t('ai_block.badge')}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                        {t('ai_block.title')} <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{t('ai_block.title_highlight')}</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        {t('ai_block.subtitle')}
                    </p>
                </div>

                {/* 3 AI Features Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Card 1: Visa Score AI */}
                    <div className="group relative bg-gradient-to-b from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-xl hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all" />
                        <div className="relative">
                            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                                <Brain className="w-7 h-7 text-white" />
                            </div>
                            <div className="text-xs font-bold text-amber-500 tracking-widest uppercase mb-3">{t('ai_block.score_badge')}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{t('ai_block.score_title')}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">{t('ai_block.score_desc')}</p>

                            {/* Mini Score Preview */}
                            <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50 mb-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Visa Score</span>
                                    <span className="text-2xl font-black text-green-400">95<span className="text-sm text-slate-500">/100</span></span>
                                </div>
                                <div className="w-full bg-slate-700 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-amber-500 to-green-500 h-2 rounded-full" style={{ width: '95%' }} />
                                </div>
                                <p className="text-xs text-slate-500 mt-2">{t('ai_block.score_label')}</p>
                            </div>

                            <ul className="space-y-2">
                                {[t('ai_block.score_feat1'), t('ai_block.score_feat2'), t('ai_block.score_feat3')].map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                        <Shield className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Card 2: Live AI Agent */}
                    <div className="group relative bg-gradient-to-b from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all" />
                        <div className="absolute top-6 right-6">
                            <span className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                LIVE
                            </span>
                        </div>
                        <div className="relative">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                                <Phone className="w-7 h-7 text-white" />
                            </div>
                            <div className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-3">{t('ai_block.agent_badge')}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{t('ai_block.agent_title')}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">{t('ai_block.agent_desc')}</p>

                            {/* Chat Preview */}
                            <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50 mb-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                                        <Sparkles className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-white">Expert IA</p>
                                        <p className="text-xs text-green-400">Gemini 2.5</p>
                                    </div>
                                </div>
                                <div className="bg-slate-700/50 rounded-xl p-3">
                                    <p className="text-xs text-slate-300 italic">{t('ai_block.agent_preview')}</p>
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {[t('ai_block.agent_feat1'), t('ai_block.agent_feat2'), t('ai_block.agent_feat3')].map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                        <Zap className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Card 3: AI Synthesis & Action Plan */}
                    <div className="group relative bg-gradient-to-b from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-xl hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all" />
                        <div className="relative">
                            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                                <FileSearch className="w-7 h-7 text-white" />
                            </div>
                            <div className="text-xs font-bold text-emerald-400 tracking-widest uppercase mb-3">{t('ai_block.synth_badge')}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{t('ai_block.synth_title')}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">{t('ai_block.synth_desc')}</p>

                            {/* Action Plan Preview */}
                            <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50 mb-6">
                                <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">{t('ai_block.synth_plan')}</p>
                                {[t('ai_block.synth_step1'), t('ai_block.synth_step2'), t('ai_block.synth_step3')].map((step, i) => (
                                    <div key={i} className="flex items-center gap-3 py-2 border-b border-slate-700/30 last:border-0">
                                        <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                                        <span className="text-xs text-slate-300">{step}</span>
                                    </div>
                                ))}
                            </div>

                            <ul className="space-y-2">
                                {[t('ai_block.synth_feat1'), t('ai_block.synth_feat2'), t('ai_block.synth_feat3')].map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                        <Globe className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <a
                        href={SCORING_ENGINE_URL}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-900 font-black text-lg px-10 py-4 rounded-2xl shadow-2xl shadow-amber-500/20 transition-all transform hover:-translate-y-1 hover:shadow-amber-500/40"
                    >
                        {t('ai_block.cta')}
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <p className="text-slate-500 text-sm mt-4">{t('ai_block.cta_sub')}</p>
                </div>
            </div>
        </section>
    );
};
