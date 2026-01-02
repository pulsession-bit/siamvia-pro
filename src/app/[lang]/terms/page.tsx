'use client';

import React from 'react';
import { Shield, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT } from '@/constants';
import { HeroSection, PageContainer } from '@/components/ui/PageComponents';

/**
 * Terms Page - Conditions Générales
 * 
 * Affiche les informations légales :
 * - Mentions légales
 * - Responsabilité
 * - Politique de confidentialité
 * - Contact légal
 */
const TermsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen">
      {/* Section Hero */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('terms_page.title')}</h1>
          <p className="text-slate-400">{t('terms_page.subtitle')}</p>
        </div>
      </div>

      {/* Contenu */}
      <PageContainer maxWidth="max-w-3xl" bgColor="bg-white">
        <div className="prose prose-slate max-w-none">
          {/* Section Mentions Légales */}
          <LegalSection
            icon={<Shield className="h-5 w-5 text-amber-500" />}
            title={t('terms_page.legal_title')}
          >
            <p className="text-slate-600 text-sm mb-4">{t('terms_page.legal_text')}</p>
          </LegalSection>

          {/* Section Responsabilité */}
          <LegalSection title={t('terms_page.responsibility_title')}>
            <p className="text-slate-600 text-sm mb-4">{t('terms_page.responsibility_text')}</p>
          </LegalSection>

          {/* Section Confidentialité */}
          <LegalSection
            icon={<Lock className="h-5 w-5 text-amber-500" />}
            title={t('terms_page.privacy_title')}
          >
            <p className="text-slate-600 text-sm mb-4">{t('terms_page.privacy_intro')}</p>
            <ul className="list-disc pl-5 text-slate-600 text-sm space-y-2">
              <li>{t('terms_page.privacy_list1')}</li>
              <li>{t('terms_page.privacy_list2')}</li>
              <li>{t('terms_page.privacy_list3')}</li>
            </ul>
          </LegalSection>

          {/* Section Contact */}
          <LegalSection title={t('terms_page.contact_title')}>
            <p className="text-slate-600 text-sm">
              {t('terms_page.contact_text')}
              <br />
              <a
                href={`mailto:${CONTACT.LEGAL_EMAIL}`}
                className="text-amber-600 hover:text-amber-700 underline"
              >
                {CONTACT.LEGAL_EMAIL}
              </a>
            </p>
          </LegalSection>
        </div>
      </PageContainer>
    </div>
  );
};

/**
 * Legal Section Component
 * Composant réutilisable pour les sections légales
 */
const LegalSection: React.FC<{
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) => (
  <section className="mb-8">
    <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </h2>
    {children}
  </section>
);

export default TermsPage;
