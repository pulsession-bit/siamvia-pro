'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';
import { URLS, IMAGES } from '@/constants';
import { HeroSection, PageContainer, Card, CTAButton } from '@/components/ui/PageComponents';

/**
 * FAQ Page - Questions Fréquentes
 * 
 * Affiche les questions fréquentes dans un format accordéon.
 * Les questions sont chargées depuis le fichier de traductions.
 */
const FAQPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Récupérer les questions pour la langue actuelle
  const faqs = translations[language]?.faq_page?.questions || [];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Section Hero */}
      <HeroSection
        backgroundImage={IMAGES.CITY}
        imageAlt="City"
        title={t('faq_page.title')}
        subtitle={t('faq_page.subtitle')}
        icon={
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-amber-500 text-slate-900">
            <HelpCircle className="h-6 w-6" />
          </div>
        }
      />

      {/* Contenu Principal */}
      <PageContainer maxWidth="max-w-3xl" negativeMargin>
        {/* Liste des Questions */}
        <div className="space-y-4">
          {faqs.map((faq: any, index: number) => (
            <Card
              key={index}
              variant="white"
              shadow="sm"
              className="hover:shadow-md transition overflow-hidden p-0"
            >
              {/* Bouton Question */}
              <button
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span
                  className={`font-bold ${openIndex === index ? 'text-amber-600' : 'text-slate-800'
                    }`}
                >
                  {faq.q}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-amber-500 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0 ml-4" />
                )}
              </button>

              {/* Réponse */}
              {openIndex === index && (
                <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-50 mt-2 pt-4">
                  {faq.a}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* CTA - Pas de réponse trouvée */}
        <Card variant="dark" className="mt-12 text-center">
          <h3 className="text-lg font-bold mb-2 text-amber-400">
            {t('faq_page.not_found_title')}
          </h3>
          <p className="text-slate-300 text-sm mb-6">{t('faq_page.not_found_desc')}</p>
          <CTAButton href={URLS.SCORING_ENGINE} variant="primary">
            {t('faq_page.not_found_btn')}
          </CTAButton>
        </Card>
      </PageContainer>
    </div>
  );
};

export default FAQPage;
