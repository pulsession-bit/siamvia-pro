'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLangPath } from '@/hooks/useLang';
import ExpertAppointmentForm from '@/components/ExpertAppointmentForm';
import { HomeHero } from './home/components/HomeHero';
import { HomeSpotlight } from './home/components/HomeSpotlight';
import { HomeVisas } from './home/components/HomeVisas';
import { HomeCTA } from './home/components/HomeCTA';

const HomeClientPage: React.FC = () => {
    const { t } = useLanguage();
    const SCORING_ENGINE_URL = 'https://desk.siamvisapro.com';
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

            {/* 4. Appointment Form Section */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Parlons de votre projet</h2>
                        <p className="text-slate-600 text-lg">Réservez un appel gratuit avec un expert visa Thaïlande.</p>
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
