'use client';

import React, { useState } from 'react';
import { Plane, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrentLang, useLangPath } from '../hooks/useLang';
import { REVERSE_MAP, PageKey, getTranslatedPath } from '../utils/slugs';
import { LanguageSelector } from './navbar/LanguageSelector';
import { NavLinks } from './navbar/NavLinks';
import { MobileMenu } from './navbar/MobileMenu';

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
    <nav className="fixed top-0 w-full z-50 bg-slate-900 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
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

          {/* Desktop Menu Links */}
          <NavLinks pathname={pathname || ''} langPath={langPath} t={t} />

          {/* Desktop Utilities (Lang & CTA) */}
          <div className="hidden md:flex items-center space-x-5">
            <LanguageSelector currentLang={currentLang} onSwitch={switchLanguage} />
            <a
              href={SCORING_ENGINE_URL}
              className="bg-amber-400 hover:bg-amber-300 text-slate-900 px-5 py-2.5 rounded-lg shadow-lg shadow-amber-400/20 text-sm font-bold border border-amber-300 transition-all transform hover:-translate-y-0.5"
            >
              {t('nav.eligibility')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-colors text-white"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Component */}
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
