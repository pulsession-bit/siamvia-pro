'use client';

import React from 'react';
import { Search, X } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/contexts/LanguageContext';
import { useVisaSearch } from './hooks/useVisaSearch';
import { SearchHero } from './components/SearchHero';
import { SearchAI } from './components/SearchAI';
import { VisaComparatorTable } from './components/VisaComparatorTable';
import { CategoryFilters } from './components/CategoryFilters';
import { VisaCard } from './components/VisaCard';
import { VisaComparatorGuide } from './components/VisaComparatorGuide';

// Chargement dynamique des composants lourds
const ExpertAppointmentForm = dynamic(() => import('@/components/ExpertAppointmentForm'), {
    ssr: false,
    loading: () => <div className="h-64 flex items-center justify-center">Chargement du formulaire...</div>
});

const VisaDetailModal = dynamic(() => import('./components/VisaDetailModal').then(mod => mod.VisaDetailModal), {
    ssr: false
});

interface SearchClientPageProps {
    localI18n: any;
}

const SearchClientPage: React.FC<SearchClientPageProps> = ({ localI18n }) => {
    const { t: globalT, language: globalLang } = useLanguage();

    // Custom logic hook
    const {
        lang,
        search,
        setSearch,
        activeCategory,
        setActiveCategory,
        selectedVisa,
        setSelectedVisa,
        aiResponse,
        isAiLoading,
        recommendedVisaId,
        alternativeVisaIds,
        showAppointment,
        setShowAppointment,
        handleAiSearch,
        filteredVisas
    } = useVisaSearch(globalLang);

    // Use injected i18n
    const localT = localI18n;

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            {/* 1. Hero Area = Comparator */}
            <SearchHero
                title={localT.title}
                subtitle={localT.hero_subtitle}
                subtext={localT.hero_subtext}
                ctaLabel={localT.ai_cta}
                onCtaClick={() => document.getElementById('ai-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <VisaComparatorTable
                    tableI18n={localT.comparator_guide.table}
                    compact={true}
                />
            </SearchHero>

            {/* 2. Exploration Visuelle (Grid) */}
            <div className="bg-white py-20 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Exploration par catégorie</h2>
                        <CategoryFilters
                            allVisasLabel={localT.allVisas}
                            categories={localT.categories}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />
                    </div>

                    <main id="visa-grid" className="w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {filteredVisas.map((visa) => (
                                <VisaCard
                                    key={visa.id}
                                    visa={visa}
                                    lang={lang}
                                    detailsLabel={localT.details}
                                    expertPickLabel={localT.expertPick}
                                    alternativeLabel={localT.alternative}
                                    costLabel={localT.cost}
                                    durations={localT.durations}
                                    prices={localT.prices}
                                    isRecommended={recommendedVisaId === visa.id}
                                    isAlternative={alternativeVisaIds.includes(visa.id)}
                                    onClick={() => setSelectedVisa(visa)}
                                />
                            ))}
                        </div>

                        {filteredVisas.length === 0 && (
                            <div className="text-center py-20">
                                <Search size={48} className="mx-auto text-gray-200 mb-4" />
                                <p className="text-gray-400 font-medium">No visas found for your criteria.</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            {/* 3. Aide Contextuelle (IA) */}
            <section id="ai-section" className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 text-center mb-12">
                    <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Une question spécifique ?</h2>
                    <p className="text-slate-500 font-medium">Notre intelligence artificielle vous aide à affiner votre choix en quelques secondes.</p>
                </div>
                <SearchAI
                    onSearch={handleAiSearch}
                    placeholder={localT.searchPlaceholder}
                    buttonLabel={localT.aiHelper}
                    aiResponse={aiResponse}
                    isAiLoading={isAiLoading}
                    suggestions={localT.suggestions}
                    title={localT.aiTitle}
                />
            </section>

            {/* 4. FAQ & Conseils SEO */}
            <VisaComparatorGuide i18n={localT.comparator_guide} />

            {/* 4. Detail Modal */}
            {selectedVisa && (
                <VisaDetailModal
                    visa={selectedVisa}
                    lang={lang}
                    onClose={() => setSelectedVisa(null)}
                    onBookAppointment={() => setShowAppointment(true)}
                    i18n={{
                        duration: localT.duration,
                        eligibility: localT.eligibility,
                        requirements: localT.requirements,
                        contactUs: localT.contactUs,
                        visaCategory: localT.visaCategory,
                        estimatedCost: localT.estimatedCost,
                        commonRequirements: localT.commonRequirements,
                        processDescription: localT.processDescription,
                        categories: localT.categories,
                        durations: localT.durations,
                        prices: localT.prices
                    }}
                />
            )}

            {/* 5. Appointment Modal Overlay */}
            {showAppointment && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setShowAppointment(false)}></div>
                    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-xl relative animate-in zoom-in-95 fade-in duration-200">
                        <button
                            onClick={() => setShowAppointment(false)}
                            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors z-[110]"
                        >
                            <X size={20} />
                        </button>
                        <div className="max-h-[85vh] overflow-y-auto pr-2 custom-scrollbar">
                            <ExpertAppointmentForm
                                visaContext={selectedVisa?.id}
                                onSuccess={() => {
                                    setTimeout(() => setShowAppointment(false), 3000);
                                }}
                                onCancel={() => setShowAppointment(false)}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* 6. Mobile Sticky CTA */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-sm">
                <button
                    onClick={() => setShowAppointment(true)}
                    className="w-full bg-slate-900 text-white p-4 rounded-2xl font-bold shadow-2xl flex items-center justify-between border border-white/10 backdrop-blur-md bg-slate-900/90 animate-in slide-in-from-bottom-8 duration-500"
                >
                    <span className="flex items-center gap-3">
                        <div className="bg-amber-500 p-2 rounded-lg">
                            <Search className="text-slate-900" size={18} />
                        </div>
                        {localT.contactUsBtn}
                    </span>
                    <X className="rotate-45" size={20} />
                </button>
            </div>
        </div>
    );
};

export default SearchClientPage;
