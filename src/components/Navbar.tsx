'use client';

import React, { useState } from 'react';
import { Plane, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrentLang, useLangPath } from '../hooks/useLang';
import { MobileMenu } from './navbar/MobileMenu';
import { NavbarSearch } from './navbar/NavbarSearch';
import { LanguageSelector } from './navbar/LanguageSelector';
import { REVERSE_MAP, PageKey, getTranslatedPath } from '../utils/slugs';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const currentLang = useCurrentLang();
  const langPath = useLangPath();
  const SCORING_ENGINE_URL = 'https://desk.siamvisapro.com';

  const switchLanguage = async (newLang: string) => {
    // 1. Persist choice in cookie via API
    try {
      await fetch('/api/locale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locale: newLang }),
      });
    } catch (error) {
      console.error('Failed to set locale cookie:', error);
    }

    // 2. Redirect to translated path
    const pathWithoutLang = pathname?.replace(/^\/([a-z]{2})/, '') || '';
    const cleanPath = pathWithoutLang.startsWith('/') ? pathWithoutLang.slice(1) : pathWithoutLang;
    const currentLangSlugs = REVERSE_MAP[currentLang] || {};
    const decodedPath = decodeURIComponent(cleanPath);
    const pageKey = (decodedPath === '' ? 'home' : currentLangSlugs[decodedPath]) as PageKey;

    if (pageKey) {
      router.push(getTranslatedPath(pageKey, newLang));
    } else {
      router.push(`/${newLang}/${cleanPath}`);
    }
  };


  // State for appointment modal
  const [showAppointment, setShowAppointment] = useState(false);

  // Dynamic import for the form
  const ExpertAppointmentForm = React.useMemo(() => import('next/dynamic').then(mod => mod.default(() => import('@/components/ExpertAppointmentForm'), {
    ssr: false,
    loading: () => <div className="p-8 text-center text-white">Loading...</div>
  })), []);

  // Actually, let's use the simpler dynamic import syntax familiar to Next.js
  const DynamicExpertForm = React.useMemo(() => {
    return require('next/dynamic').default(() => import('@/components/ExpertAppointmentForm'), {
      ssr: false,
      loading: () => <div className="p-8 text-center">Loading...</div>
    })
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Left Side: Logo + Desktop Menu */}
            <div className="flex items-center">
              {/* Mobile Burger Menu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:text-amber-500 transition-colors focus:outline-none mr-2"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>

              {/* Logo */}
              <Link href={langPath('')} className="flex items-center space-x-2 group mr-6">
                <div className="bg-amber-500 p-2 rounded-lg shadow-lg group-hover:bg-amber-400 transition text-slate-900">
                  <Plane className="h-6 w-6 transform -rotate-45" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white transition-colors hidden sm:inline-block">
                  Siam Visa <span className="text-amber-500">Pro</span>
                </span>
              </Link>
            </div>

            {/* Right Side: Search + Actions */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              <NavbarSearch />

              <div className="hidden md:block">
                <LanguageSelector currentLang={currentLang} onSwitch={switchLanguage} />
              </div>

              <button
                onClick={() => setShowAppointment(true)}
                className="hidden md:block bg-amber-400 hover:bg-amber-300 text-slate-900 px-3 md:px-5 py-2 rounded-lg shadow-lg shadow-amber-400/20 text-sm font-bold border border-amber-300 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                {t('nav.eligibility')}
              </button>
            </div>
          </div>
        </div>

        {/* Unified Fullscreen Menu (Mobile Only) */}
        <MobileMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          langPath={langPath}
          t={t}
          currentLang={currentLang}
          switchLanguage={switchLanguage}
          SCORING_ENGINE_URL={SCORING_ENGINE_URL}
        />
      </nav>

      {/* Appointment Modal Overlay */}
      {showAppointment && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-[9999]" style={{ zIndex: 9999 }}>
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setShowAppointment(false)}></div>
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-xl relative animate-in zoom-in-95 fade-in duration-200 z-[10000] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowAppointment(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 transition-colors z-[110]"
            >
              <X size={24} />
            </button>
            <DynamicExpertForm
              visaContext="navbar"
              onSuccess={() => { }}
              onCancel={() => setShowAppointment(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
