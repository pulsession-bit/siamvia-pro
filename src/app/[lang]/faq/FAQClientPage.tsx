'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { URLS, IMAGES } from '@/constants';
import { HeroSection, PageContainer, Card, CTAButton } from '@/components/ui/PageComponents';

interface Question {
    q: string;
    a: string;
}

interface Section {
    title: string;
    questions: Question[];
}

interface FAQData {
    title: string;
    subtitle: string;
    sections: Section[];
    not_found_title: string;
    not_found_desc: string;
    not_found_btn: string;
}

interface FAQClientPageProps {
    data: FAQData;
}

const FAQClientPage: React.FC<FAQClientPageProps> = ({ data }) => {
    const { t, language } = useLanguage();

    // Determine the data source (support both structures during migration if needed, but we migrated everything)
    const sections = data?.sections || [];

    // State to track open question: "sectionIndex-questionIndex"
    const [openKey, setOpenKey] = useState<string | null>("0-0");

    const toggleAccordion = (sectionIdx: number, questionIdx: number) => {
        const key = `${sectionIdx}-${questionIdx}`;
        setOpenKey(openKey === key ? null : key);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Header offset
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Section Hero */}
            <HeroSection
                backgroundImage={IMAGES.CITY}
                imageAlt="Bangkok City"
                title={data?.title || t('faq_page.title')}
                subtitle={data?.subtitle || t('faq_page.subtitle')}
                icon={
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-amber-500 text-slate-900">
                        <HelpCircle className="h-6 w-6" />
                    </div>
                }
            />

            {/* Contenu Principal */}
            <PageContainer maxWidth="max-w-4xl" negativeMargin>

                {/* --- TABLE OF CONTENTS (INDEX) --- */}
                {sections.length > 0 && (
                    <Card variant="white" className="mb-12 p-6 md:p-8 border-l-4 border-amber-500 shadow-lg">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded uppercase tracking-wider mr-3">Index</span>
                            {language === 'fr' ? 'Sommaire des thèmes' : 'Topic Index'}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {sections.map((section, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => scrollToSection(`section-${idx}`)}
                                    className="flex items-center text-slate-600 hover:text-amber-600 transition-colors text-left group"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-3 group-hover:scale-125 transition-transform"></div>
                                    <span className="text-sm font-medium border-b border-transparent group-hover:border-amber-200 pb-0.5">
                                        {section.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </Card>
                )}

                {/* Loop through Sections */}
                <div className="space-y-12">
                    {sections.map((section, sIdx) => (
                        <div key={sIdx} id={`section-${sIdx}`} className="scroll-mt-24">
                            {/* Section Title (H2) for SEO */}
                            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                                <span className="text-amber-500 mr-2 text-3xl opacity-50">#</span>
                                {section.title}
                            </h2>

                            <div className="space-y-4">
                                {section.questions.map((faq, qIdx) => {
                                    const isOpen = openKey === `${sIdx}-${qIdx}`;
                                    return (
                                        <Card
                                            key={qIdx}
                                            variant="white"
                                            shadow="sm"
                                            className="hover:shadow-md transition overflow-hidden p-0 border border-slate-100"
                                        >
                                            {/* Bouton Question (H3 for semantic structure inside H2) */}
                                            <button
                                                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                                                onClick={() => toggleAccordion(sIdx, qIdx)}
                                                aria-expanded={isOpen}
                                            >
                                                <h3
                                                    className={`font-semibold text-lg pr-8 ${isOpen ? 'text-amber-600' : 'text-slate-800'}`}
                                                >
                                                    {faq.q}
                                                </h3>
                                                {isOpen ? (
                                                    <ChevronUp className="h-5 w-5 text-amber-500 flex-shrink-0" />
                                                ) : (
                                                    <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                                                )}
                                            </button>


                                            {/* Réponse */}
                                            {isOpen && (
                                                <div className="px-5 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2 pt-4 bg-slate-50/30">
                                                    {faq.a ? (
                                                        <div dangerouslySetInnerHTML={{ __html: faq.a }} />
                                                    ) : (
                                                        <p className="italic text-slate-400 text-sm">Réponse à venir...</p>
                                                    )}
                                                </div>
                                            )}

                                        </Card>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA - Pas de réponse trouvée */}
                <Card variant="dark" className="mt-16 text-center py-10">
                    <h3 className="text-xl font-bold mb-3 text-amber-400">
                        {data?.not_found_title || t('faq_page.not_found_title')}
                    </h3>
                    <p className="text-slate-300 mb-8 max-w-lg mx-auto leading-relaxed">
                        {data?.not_found_desc || t('faq_page.not_found_desc')}
                    </p>
                    <CTAButton href={URLS.SCORING_ENGINE} variant="primary">
                        {data?.not_found_btn || t('faq_page.not_found_btn')}
                    </CTAButton>
                </Card>
            </PageContainer>
        </div>
    );
};

export default FAQClientPage;
