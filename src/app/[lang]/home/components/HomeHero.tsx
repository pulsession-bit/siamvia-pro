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
                <div className="w-full max-w-2xl mx-auto mb-10 relative z-20">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const form = e.target as HTMLFormElement;
                            const input = form.elements.namedItem('q') as HTMLInputElement;
                            if (input.value.trim()) {
                                window.location.href = `${langPath('search')}?q=${encodeURIComponent(input.value)}`;
                            }
                        }}
                        className="relative flex items-center"
                    >
                        <div className="absolute left-4 text-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </div>
                        <input
                            type="text"
                            name="q"
                            placeholder={t('nav.search') || "Rechercher un visa (ex: Retraite, DTV...)"}
                            className="w-full py-4 pl-12 pr-4 rounded-xl text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-amber-500/30 shadow-2xl bg-white/95 backdrop-blur-sm border border-slate-200/50"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-2 px-6 rounded-lg transition-all"
                        >
                            GO
                        </button>
                    </form>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full justify-center">
                    <Link
                        href={langPath('apply')}
                        className="bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition shadow-lg shadow-amber-500/20 flex items-center justify-center group"
                    >
                        {t('login.start_request') || 'Commencer une demande'}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                        href={SCORING_ENGINE_URL}
                        className="bg-transparent border-2 border-amber-400/50 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition flex items-center justify-center backdrop-blur-sm"
                    >
                        {t('hero.cta_eligibility')}
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
