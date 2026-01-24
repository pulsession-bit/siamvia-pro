'use client';

import React, { useState } from 'react';
import { Plane, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrentLang, useLangPath } from '../hooks/useLang';
import { MobileMenu } from './navbar/MobileMenu';
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


  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={langPath('')} className="flex items-center space-x-2 group">
              <div className="bg-amber-500 p-2 rounded-lg shadow-lg group-hover:bg-amber-400 transition">
                <Plane className="h-6 w-6 text-slate-900 transform -rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white transition-colors">
                Siam Visa <span className="text-amber-500">Pro</span>
              </span>
            </Link>
          </div>

          {/* Unified Right Side: CTA Button + Menu Toggle */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <a
              href={SCORING_ENGINE_URL}
              className="bg-amber-400 hover:bg-amber-300 text-slate-900 px-4 md:px-6 py-2 md:py-2.5 rounded-lg shadow-lg shadow-amber-400/20 text-sm font-bold border border-amber-300 transition-all transform hover:-translate-y-0.5"
            >
              {t('nav.eligibility')}
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-amber-400 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Unified Fullscreen Menu (Desktop & Mobile) */}
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
  );
};

export default Navbar;
