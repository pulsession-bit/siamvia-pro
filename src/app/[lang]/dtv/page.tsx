'use client';

import React from 'react';
import { Check, AlertTriangle, Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Note: Metadata must be exported from a Server Component or page.tsx without 'use client'
// For now, metadata is defined in layout.tsx or will be added via generateMetadata in future refactor

const DTVPage: React.FC = () => {
  const { t } = useLanguage();
  const SCORING_ENGINE_URL = 'https://desk.siamvisapro.com';

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1920&q=80"
            alt="Bangkok Skyline"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900/90 to-slate-900/50"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="text-amber-400 font-bold tracking-wide uppercase text-sm border border-amber-400/50 px-3 py-1 rounded-full bg-slate-900/50 backdrop-blur-sm">
            {t('dtv_page.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6">{t('dtv_page.hero_title')}</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {t('dtv_page.hero_subtitle')}
            <br />
            <span className="text-slate-400 text-lg">{t('dtv_page.hero_tagline')}</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('dtv_page.why_title')}</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600">
                      <Calendar className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900">
                      {t('dtv_page.duration_title')}
                    </h3>
                    <p className="mt-2 text-slate-600">{t('dtv_page.duration_desc')}</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600">
                      <Briefcase className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900">
                      {t('dtv_page.work_title')}
                    </h3>
                    <p className="mt-2 text-slate-600">{t('dtv_page.work_desc')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-amber-200">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-slate-800">
                      {t('dtv_page.finance_title')}
                    </h4>
                    <p className="text-slate-600 mt-2 text-sm">{t('dtv_page.finance_desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('dtv_page.who_title')}</h2>
              <ul className="space-y-4">
                <li className="flex items-start p-4 bg-slate-50 rounded-lg">
                  <Check className="h-5 w-5 text-amber-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-slate-800">
                      {t('dtv_page.who_remote')}
                    </span>
                    <span className="text-sm text-slate-600">{t('dtv_page.who_remote_desc')}</span>
                  </div>
                </li>
                <li className="flex items-start p-4 bg-slate-50 rounded-lg">
                  <Check className="h-5 w-5 text-amber-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-slate-800">
                      {t('dtv_page.who_freelance')}
                    </span>
                    <span className="text-sm text-slate-600">
                      {t('dtv_page.who_freelance_desc')}
                    </span>
                  </div>
                </li>
                <li className="flex items-start p-4 bg-slate-50 rounded-lg">
                  <Check className="h-5 w-5 text-amber-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-slate-800">
                      {t('dtv_page.who_softpower')}
                    </span>
                    <span className="text-sm text-slate-600">
                      {t('dtv_page.who_softpower_desc')}
                    </span>
                  </div>
                </li>
              </ul>

              <div className="mt-8 bg-slate-900 rounded-xl p-6 text-white text-center shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-2 text-amber-400">
                    {t('dtv_page.portfolio_title')}
                  </h3>
                  <p className="text-slate-300 text-sm mb-6">{t('dtv_page.portfolio_desc')}</p>
                  <a
                    href={SCORING_ENGINE_URL}
                    className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-lg transition"
                  >
                    {t('dtv_page.portfolio_btn')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DTVPage;
