import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '@/constants';
import { Shield, FileText, Clock, ArrowRight } from 'lucide-react';

interface HomeHeroProps {
    t: (key: string) => string;
    langPath: (path: string) => string;
    SCORING_ENGINE_URL: string;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ t, langPath, SCORING_ENGINE_URL }) => {
    return (
        <div className="relative bg-slate-900 overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={IMAGES.HERO_THAILAND}
                    alt="Thailand Background - Phi Phi Islands"
                    fill
                    loading="lazy"
                    quality={75}
                    className="object-cover"
                    sizes="100vw"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 flex flex-col items-center text-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-600 text-amber-400 text-xs font-bold tracking-wider mb-8 shadow-lg backdrop-blur-sm">
                    ● {t('hero.new_badge')}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    {t('hero.title_line1')}
                    <br />
                    <span className="text-amber-400">{t('hero.title_line2')}</span>{' '}
                    {t('hero.title_line2_suffix')}
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl leading-relaxed font-light">
                    {t('hero.subtitle')} <br className="hidden md:block" />
                    <span className="text-white font-medium">{t('hero.subtitle_suffix')}</span>
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full justify-center mt-10">
                    <a
                        href={SCORING_ENGINE_URL}
                        className="bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition shadow-lg shadow-amber-500/20 flex items-center justify-center group"
                    >
                        {t('hero.cta_eligibility')}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                    <div className="flex items-center justify-center bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-full py-2 px-6">
                        <Shield className="h-5 w-5 text-green-400 mr-2" />
                        <span className="text-slate-200 text-sm font-medium">{t('hero.badge_evisa')}</span>
                    </div>
                    <div className="flex items-center justify-center bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-full py-2 px-6">
                        <FileText className="h-5 w-5 text-amber-400 mr-2" />
                        <span className="text-slate-200 text-sm font-medium">{t('hero.badge_dtv')}</span>
                    </div>
                    <div className="flex items-center justify-center bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-full py-2 px-6">
                        <Clock className="h-5 w-5 text-blue-400 mr-2" />
                        <span className="text-slate-200 text-sm font-medium">{t('hero.badge_time')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
