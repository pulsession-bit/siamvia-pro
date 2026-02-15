'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath } from '@/hooks/useLang';
import { HomeHero } from './home/components/HomeHero';
import { HomeSpotlight } from './home/components/HomeSpotlight';
import { HomeVisas } from './home/components/HomeVisas';
import { HomeAIBlock } from './home/components/HomeAIBlock';
import { HomeCTA } from './home/components/HomeCTA';

const LoadingState = () => (
    <div className="h-64 flex items-center justify-center bg-slate-50 rounded-2xl">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-amber-500 rounded-full animate-spin" />
    </div>
);

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
