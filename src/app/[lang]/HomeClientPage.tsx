'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath } from '@/hooks/useLang';
import { HomeHero } from './home/components/HomeHero';

const LoadingSection = ({ className = "h-96" }: { className?: string }) => (
    <div className={`${className} bg-slate-50 animate-pulse flex items-center justify-center`}>
        <div className="w-8 h-8 border-4 border-slate-200 border-t-amber-500 rounded-full animate-spin opacity-50" />
    </div>
);

const LoadingState = () => (
    <div className="h-64 flex items-center justify-center bg-slate-50 rounded-2xl">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-amber-500 rounded-full animate-spin" />
    </div>
);

// Dynamic Components for Code Splitting
const HomeSpotlight = dynamic(() => import('./home/components/HomeSpotlight').then(m => m.HomeSpotlight), {
    loading: () => <LoadingSection className="h-[800px]" />,
});

const HomeVisas = dynamic(() => import('./home/components/HomeVisas').then(m => m.HomeVisas), {
    loading: () => <LoadingSection className="h-[600px]" />,
});

const HomeAIBlock = dynamic(() => import('./home/components/HomeAIBlock').then(m => m.HomeAIBlock), {
    loading: () => <LoadingSection className="h-[700px] bg-slate-950" />,
});

const HomeCTA = dynamic(() => import('./home/components/HomeCTA').then(m => m.HomeCTA), {
    loading: () => <LoadingSection className="h-[400px] bg-slate-900" />,
});

const ExpertAppointmentForm = dynamic(() => import('@/components/ExpertAppointmentForm'), {
    ssr: false,
    loading: LoadingState
});

const HomeClientPage: React.FC = () => {
    const { t } = useLanguage();
    const SCORING_ENGINE_URL = 'https://audit.siamvisapro.com/';
    const langPath = useLangPath();

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* 1. Hero Section */}
            <HomeHero
                t={t}
                langPath={langPath}
                SCORING_ENGINE_URL={SCORING_ENGINE_URL}
            />

            {/* 2. Spotlight / RE-Assurance Section */}
            <HomeSpotlight
                t={t}
                SCORING_ENGINE_URL={SCORING_ENGINE_URL}
            />

            {/* 3. Popular Visas Showcase */}
            <HomeVisas
                t={t}
                langPath={langPath}
            />

            {/* 3.5. AI Technology Block */}
            <HomeAIBlock
                t={t}
                langPath={langPath}
                SCORING_ENGINE_URL={SCORING_ENGINE_URL}
            />


            {/* 4. Appointment Form Section */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('home_page.appointment_title')}</h2>
                        <p className="text-slate-600 text-lg">{t('home_page.appointment_subtitle')}</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 border border-slate-100">
                        <ExpertAppointmentForm />
                    </div>
                </div>
            </section>

            {/* 5. Final Footer CTA */}
            <HomeCTA
                t={t}
                SCORING_ENGINE_URL={SCORING_ENGINE_URL}
            />
        </div>
    );
};

export default HomeClientPage;
