import React from 'react';
import Image from 'next/image';
import { Globe, Briefcase, Zap, AlertTriangle, ArrowRight, XCircle } from 'lucide-react';

interface HomeSpotlightProps {
    t: (key: string) => string;
    SCORING_ENGINE_URL: string;
}

export const HomeSpotlight: React.FC<HomeSpotlightProps> = ({ t, SCORING_ENGINE_URL }) => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="mb-12 lg:mb-0 order-2 lg:order-1">
                        <span className="inline-block py-1 px-3 rounded bg-blue-100 text-blue-800 text-xs font-bold tracking-wider uppercase mb-4">
                            {t('spotlight.badge')}
                        </span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            {t('spotlight.title')}
                        </h2>
                        <p className="text-slate-600 mb-8 text-lg leading-relaxed bg-blue-50/50 p-4 rounded-lg">
                            {t('spotlight.desc')}
                        </p>
                        <div className="space-y-8 mb-8">
                            {[1, 2, 3].map((i) => {
                                const icons = [null, <Globe />, <Briefcase />, <Zap />];
                                return (
                                    <div key={i} className="flex">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-50 text-amber-600 border border-amber-100">
                                                {React.isValidElement(icons[i]) ? React.cloneElement(icons[i] as React.ReactElement, { className: "h-6 w-6" }) : null}
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-bold text-slate-900 bg-blue-100 inline-block px-2">
                                                {t(`spotlight.feat${i}_title`)}
                                            </h4>
                                            <p className="mt-2 text-slate-600 bg-blue-50 p-2 rounded block text-sm leading-relaxed">
                                                {t(`spotlight.feat${i}_desc`)}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="relative bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-8 overflow-hidden">
                            <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
                                <XCircle className="h-32 w-32 text-red-500" />
                            </div>
                            <div className="relative z-10">
                                <h4 className="flex items-center text-lg font-bold text-slate-800 mb-3 bg-amber-200 inline-flex px-2 rounded-md">
                                    <AlertTriangle className="h-5 w-5 text-amber-700 mr-2" />
                                    {t('spotlight.warning_title')}
                                </h4>
                                <p className="text-sm text-slate-700 font-medium bg-blue-200/50 inline-block px-1 mb-3 rounded">
                                    {t('spotlight.warning_intro')}
                                </p>
                                <ul className="list-disc pl-5 space-y-3 text-sm text-slate-700 mb-4">
                                    <li>
                                        <span className="font-bold text-slate-900">{t('spotlight.warning_point1_label')}</span>{' '}
                                        <span>{t('spotlight.warning_point1_text')}</span>
                                    </li>
                                    <li>
                                        <span className="font-bold text-slate-900">{t('spotlight.warning_point2_label')}</span>{' '}
                                        <span>{t('spotlight.warning_point2_text')}</span>
                                    </li>
                                </ul>
                                <div className="text-sm font-semibold text-slate-800 bg-amber-200/50 p-3 rounded border border-amber-300 flex items-start">
                                    <span className="mr-2">👉</span>
                                    <span>{t('spotlight.solution')}</span>
                                </div>
                            </div>
                        </div>
                        <a
                            href={SCORING_ENGINE_URL}
                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-slate-900 bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 w-full sm:w-auto"
                        >
                            {t('spotlight.cta')}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                    <div className="relative order-1 lg:order-2 h-[500px] lg:h-[800px] mb-12 lg:mb-0 hidden md:block">
                        <div className="relative w-full h-full">
                            <div className="absolute top-10 left-0 w-3/4 h-3/5 rounded-2xl shadow-2xl z-10 border-4 border-white transform -rotate-2 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                                    alt="Coworking"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="absolute bottom-10 right-0 w-3/4 h-3/5 rounded-2xl shadow-2xl z-20 border-4 border-white transform rotate-3 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1559628233-100c798642d4?auto=format&fit=crop&w=800&q=80"
                                    alt="Bangkok"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
