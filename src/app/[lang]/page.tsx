'use client';

import React from 'react';
import Link from 'next/link';
import {
  CheckCircle,
  FileText,
  Globe,
  Clock,
  ArrowRight,
  Shield,
  Zap,
  Briefcase,
  AlertTriangle,
  XCircle,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCurrentLang } from '@/hooks/useLang';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const currentLang = useCurrentLang();
  const SCORING_ENGINE_URL = 'https://desk.siamvisapro.com';

  const langPath = (path: string) => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${currentLang}/${cleanPath}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <img
            src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1920&q=80"
            alt="Thailand Background - Phi Phi Islands"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-slate-900/30"></div>

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
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full justify-center">
            <a
              href={SCORING_ENGINE_URL}
              className="bg-amber-50 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition shadow-lg shadow-amber-500/20 flex items-center justify-center"
            >
              {t('hero.cta_eligibility')}
            </a>
            <Link
              href={langPath('services')}
              className="bg-transparent border-2 border-slate-400 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition flex items-center justify-center backdrop-blur-sm"
            >
              {t('hero.cta_services')}
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <div className="flex items-center justify-center bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-full py-2 px-6">
              <Shield className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-slate-200 text-sm font-medium">{t('hero.badge_evisa')}</span>
            </div>
            <div className="flex items-center justify-center bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-full py-2 px-6">
              <FileText className="h-5 w-5 text-amber-400 mr-2" />
              <span className="text-slate-200 text-sm font-medium">{t('hero.badge_dtv')}</span>
            </div>
            <div className="flex items-center justify-center bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-full py-2 px-6">
              <Clock className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-slate-200 text-sm font-medium">{t('hero.badge_time')}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0 order-2 lg:order-1">
              <span className="inline-block py-1 px-3 rounded bg-blue-100 text-blue-800 text-xs font-bold tracking-wider uppercase mb-4">
                {t('spotlight.badge')}
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                {t('spotlight.title')}
              </h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed bg-blue-50/50 p-4 rounded-lg">
                {t('spotlight.desc')}
              </p>
              <div className="space-y-8 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-50 text-amber-600 border border-amber-100">
                      <Globe className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900 bg-blue-100 inline-block px-2">
                      {t('spotlight.feat1_title')}
                    </h4>
                    <p className="mt-2 text-slate-600 bg-blue-50 p-2 rounded block text-sm leading-relaxed">
                      {t('spotlight.feat1_desc')}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-50 text-amber-600 border border-amber-100">
                      <Briefcase className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900 bg-blue-100 inline-block px-2">
                      {t('spotlight.feat2_title')}
                    </h4>
                    <p className="mt-2 text-slate-600 bg-blue-50 p-2 rounded block text-sm leading-relaxed">
                      {t('spotlight.feat2_desc')}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-50 text-amber-600 border border-amber-100">
                      <Zap className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900 bg-blue-100 inline-block px-2">
                      {t('spotlight.feat3_title')}
                    </h4>
                    <p className="mt-2 text-slate-600 bg-blue-50 p-2 rounded block text-sm leading-relaxed">
                      {t('spotlight.feat3_desc')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-8 overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
                  <XCircle className="h-32 w-32 text-red-500" />
                </div>
                <div className="relative z-10">
                  <h4 className="flex items-center text-lg font-bold text-slate-800 mb-3 bg-amber-200 inline-flex px-2 rounded-md">
                    <AlertTriangle className="h-5 w-5 text-amber-700 mr-2" />
                    {t('spotlight.warning_title')}
                  </h4>
                  <p className="text-sm text-slate-700 font-medium bg-blue-200/50 inline-block px-1 mb-3 rounded">
                    {t('spotlight.warning_intro')}
                  </p>
                  <ul className="list-disc pl-5 space-y-3 text-sm text-slate-700 mb-4">
                    <li>
                      <span className="font-bold text-slate-900">
                        {t('spotlight.warning_point1_label')}
                      </span>{' '}
                      <span className="bg-blue-100 px-1 rounded">
                        {t('spotlight.warning_point1_text')}
                      </span>
                    </li>
                    <li>
                      <span className="font-bold text-slate-900">
                        {t('spotlight.warning_point2_label')}
                      </span>{' '}
                      <span className="bg-blue-100 px-1 rounded">
                        {t('spotlight.warning_point2_text')}
                      </span>
                    </li>
                  </ul>
                  <div className="text-sm font-semibold text-slate-800 bg-amber-200/50 p-3 rounded border border-amber-300 flex items-start">
                    <span className="mr-2">👉</span>
                    <span>{t('spotlight.solution')}</span>
                  </div>
                </div>
              </div>
              <a
                href={SCORING_ENGINE_URL}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-slate-900 bg-amber-500 hover:bg-amber-400 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 w-full sm:w-auto"
              >
                {t('spotlight.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="relative order-1 lg:order-2 h-[500px] lg:h-[800px] mb-12 lg:mb-0 hidden md:block">
              <div className="relative w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="Coworking"
                  className="absolute top-10 left-0 w-3/4 h-3/5 object-cover rounded-2xl shadow-2xl z-10 border-4 border-white transform -rotate-2"
                />
                <img
                  src="https://images.unsplash.com/photo-1559628233-100c798642d4?auto=format&fit=crop&w=800&q=80"
                  alt="Bangkok"
                  className="absolute bottom-10 right-0 w-3/4 h-3/5 object-cover rounded-2xl shadow-2xl z-20 border-4 border-white transform rotate-3"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1920&q=80"
            alt="Beach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{t('visas.title')}</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">{t('visas.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-2xl shadow-xl border-2 border-amber-400 overflow-hidden hover:-translate-y-2 transition duration-300">
              <div className="absolute top-0 right-0 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                {t('visas.popular')}
              </div>
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="DTV Chiang Mai"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t('visas.dtv_title')}</h3>
                <p className="text-slate-600 mb-4 text-sm">{t('visas.dtv_desc')}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-slate-500">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />{' '}
                    {t('spotlight.feat1_title')}
                  </li>
                  <li className="flex items-center text-sm text-slate-500">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />{' '}
                    {t('spotlight.feat3_title')}
                  </li>
                  <li className="flex items-center text-sm text-slate-500">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />{' '}
                    {t('spotlight.feat2_title')}
                  </li>
                </ul>
                <Link
                  href={langPath('dtv')}
                  className="block w-full text-center bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition font-medium"
                >
                  {t('visas.btn_more')}
                </Link>
              </div>
            </div>
            <div className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:-translate-y-2 transition duration-300">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80"
                  alt="Tourist"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t('visas.tr_title')}</h3>
                <p className="text-slate-600 mb-4 text-sm">{t('visas.tr_desc')}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-slate-500">
                    <CheckCircle className="h-4 w-4 text-slate-400 mr-2" /> {t('visas.tr_feat1')}
                  </li>
                  <li className="flex items-center text-sm text-slate-500">
                    <CheckCircle className="h-4 w-4 text-slate-400 mr-2" /> {t('visas.tr_feat2')}
                  </li>
                  <li className="flex items-center text-sm text-slate-500">
                    <CheckCircle className="h-4 w-4 text-slate-400 mr-2" /> {t('visas.tr_feat3')}
                  </li>
                </ul>
                <Link
                  href={langPath('services')}
                  className="block w-full text-center bg-white border border-slate-200 text-slate-700 py-3 rounded-lg hover:bg-slate-50 transition font-medium"
                >
                  {t('visas.btn_rates')}
                </Link>
              </div>
            </div>
            <div className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:-translate-y-2 transition duration-300">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80"
                  alt="LTR"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t('visas.ltr_title')}</h3>
                <p className="text-slate-600 mb-4 text-sm">{t('visas.ltr_desc')}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-slate-500">
                    <CheckCircle className="h-4 w-4 text-slate-400 mr-2" /> {t('visas.ltr_feat1')}
                  </li>
                  <li className="flex items-center text-sm text-slate-500">
                    <CheckCircle className="h-4 w-4 text-slate-400 mr-2" /> {t('visas.ltr_feat2')}
                  </li>
                  <li className="flex items-center text-sm text-slate-500">
                    <CheckCircle className="h-4 w-4 text-slate-400 mr-2" /> {t('visas.ltr_feat3')}
                  </li>
                </ul>
                <Link
                  href={langPath('services')}
                  className="block w-full text-center bg-white border border-slate-200 text-slate-700 py-3 rounded-lg hover:bg-slate-50 transition font-medium"
                >
                  {t('visas.btn_rates')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">{t('cta_footer.title')}</h2>
          <p className="text-slate-300 mb-10 text-lg">{t('cta_footer.text')}</p>
          <a
            href={SCORING_ENGINE_URL}
            className="inline-block bg-amber-500 text-slate-900 font-bold px-10 py-4 rounded-lg shadow-lg hover:bg-amber-400 transition transform hover:scale-105"
          >
            {t('cta_footer.btn')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
