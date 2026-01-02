'use client';

import React, { useState } from 'react';
import { Plane, Menu, X, ChevronDown, Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrentLang, useLangPath } from '../hooks/useLang';
import { REVERSE_MAP, PageKey, getTranslatedPath } from '../utils/slugs';

const languages = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'th', label: 'ไทย', flag: '🇹🇭' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
];

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const currentLang = useCurrentLang();

  const SCORING_ENGINE_URL = 'https://desk.siamvisapro.com';

  const langPath = useLangPath();

  // Helper to switch language while staying on same page
  const switchLanguage = (newLang: string) => {
    // Get current path without language prefix
    const pathWithoutLang = pathname?.replace(/^\/([a-z]{2})/, '') || '';
    const cleanPath = pathWithoutLang.startsWith('/') ? pathWithoutLang.slice(1) : pathWithoutLang;

    // Check if current slug is a translated version of a page
    const currentLangSlugs = REVERSE_MAP[currentLang] || {};
    const decodedPath = decodeURIComponent(cleanPath);
    const pageKey = (decodedPath === '' ? 'home' : currentLangSlugs[decodedPath]) as PageKey;

    if (pageKey) {
      // We found the page key, now get the slug in the new language
      router.push(getTranslatedPath(pageKey, newLang));
    } else {
      // Fallback: stay on same path but with new language prefix
      router.push(`/${newLang}/${cleanPath}`);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href={langPath('')} className="flex items-center space-x-2 group">
              <div className="bg-amber-500 p-2 rounded-lg shadow-lg group-hover:bg-amber-400 transition">
                <Plane className="h-6 w-6 text-slate-900 transform -rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white transition-colors">
                SiamVisa<span className="text-amber-500">Pro</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={langPath('')}
              className={`text-sm font-medium transition-colors ${pathname === langPath('') ? 'text-white font-semibold' : 'text-slate-200 hover:text-white'}`}
            >
              {t('nav.home')}
            </Link>
            <Link
              href={langPath('dtv')}
              className={`text-sm font-medium transition-colors ${pathname?.includes('/dtv') ? 'text-white font-semibold' : 'text-slate-200 hover:text-white'}`}
            >
              {t('nav.dtv')}
            </Link>
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium focus:outline-none text-slate-200 hover:text-white">
                <span>{t('nav.other_visas')}</span>
                <ChevronDown className="h-4 w-4 opacity-70" />
              </button>
              <div
                className={`absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl py-2 border border-slate-100 transition-all duration-200 transform origin-top-left ${showDropdown ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
              >
                <Link
                  href={langPath('tourist-visa')}
                  className="block px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 font-medium"
                >
                  {t('nav.tourist')}
                </Link>
                <Link
                  href={langPath('retirement-visa')}
                  className="block px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 font-medium"
                >
                  {t('nav.retirement')}
                </Link>
              </div>
            </div>
            <Link
              href={langPath('services')}
              className={`text-sm font-medium transition-colors ${pathname?.includes('/services') ? 'text-white font-semibold' : 'text-slate-200 hover:text-white'}`}
            >
              {t('nav.services')}
            </Link>
            <Link
              href={langPath('faq')}
              className={`text-sm font-medium transition-colors ${pathname?.includes('/faq') ? 'text-white font-semibold' : 'text-slate-200 hover:text-white'}`}
            >
              {t('nav.faq')}
            </Link>
            <Link
              href={langPath('contact')}
              className={`text-sm font-medium transition-colors ${pathname?.includes('/contact') ? 'text-white font-semibold' : 'text-slate-200 hover:text-white'}`}
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-5">
            <div className="relative group">
              <button className="flex items-center space-x-1 p-2 rounded-lg text-xs font-bold transition text-white/80 hover:bg-white/10">
                <Globe className="h-4 w-4" />
                <span>{currentLang.toUpperCase()}</span>
              </button>

              <div className="absolute right-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
                <div className="bg-white rounded-xl shadow-xl py-2 border border-slate-100">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => switchLanguage(lang.code)}
                      className={`flex w-full items-center px-4 py-2 text-sm text-left hover:bg-amber-50 hover:text-amber-600 transition ${currentLang === lang.code ? 'bg-amber-50 text-amber-600 font-bold' : 'text-slate-700'}`}
                    >
                      <span className="mr-3 text-lg">{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <a
              href={SCORING_ENGINE_URL}
              className="bg-amber-400 hover:bg-amber-300 text-slate-900 px-5 py-2.5 rounded-lg shadow-lg shadow-amber-400/20 text-sm font-bold border border-amber-300 transition-all transform hover:-translate-y-0.5"
            >
              {t('nav.eligibility')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-colors text-white"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-y-0 right-0 w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b border-slate-100">
            <span className="text-xl font-bold text-slate-900">SiamVisa<span className="text-amber-500">Pro</span></span>
            <button onClick={() => setIsOpen(false)} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full"><X className="h-6 w-6" /></button>
          </div>
          <div className="flex-1 overflow-y-auto py-4">
            <Link href={langPath('')} onClick={() => setIsOpen(false)} className="block px-6 py-4 text-lg font-medium text-slate-800 hover:bg-amber-50 border-l-4 border-transparent hover:border-amber-500 transition">{t('nav.home')}</Link>
            <Link href={langPath('dtv')} onClick={() => setIsOpen(false)} className="block px-6 py-4 text-lg font-medium text-slate-800 hover:bg-amber-50 border-l-4 border-transparent hover:border-amber-500 transition">{t('nav.dtv')}</Link>
            <div className="bg-slate-50 py-2 my-2">
              <span className="block px-6 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">{t('nav.other_visas')}</span>
              <Link href={langPath('tourist-visa')} onClick={() => setIsOpen(false)} className="block px-6 py-3 text-slate-600 hover:text-amber-600 pl-10 font-medium">{t('nav.tourist')}</Link>
              <Link href={langPath('retirement-visa')} onClick={() => setIsOpen(false)} className="block px-6 py-3 text-slate-600 hover:text-amber-600 pl-10 font-medium">{t('nav.retirement')}</Link>
            </div>
            <Link href={langPath('services')} onClick={() => setIsOpen(false)} className="block px-6 py-4 text-lg font-medium text-slate-800 hover:bg-amber-50 border-l-4 border-transparent hover:border-amber-500 transition">{t('nav.services')}</Link>
            <Link href={langPath('faq')} onClick={() => setIsOpen(false)} className="block px-6 py-4 text-lg font-medium text-slate-800 hover:bg-amber-50 border-l-4 border-transparent hover:border-amber-500 transition">{t('nav.faq')}</Link>
            <Link href={langPath('contact')} onClick={() => setIsOpen(false)} className="block px-6 py-4 text-lg font-medium text-slate-800 hover:bg-amber-50 border-l-4 border-transparent hover:border-amber-500 transition">{t('nav.contact')}</Link>
          </div>
          <div className="p-6 border-t border-slate-100 bg-slate-50">
            <a href={SCORING_ENGINE_URL} className="block w-full text-center bg-amber-500 text-slate-900 py-4 rounded-xl font-bold text-lg shadow-lg mb-6">
              {t('nav.eligibility')}
            </a>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((lang) => (
                <button key={lang.code} onClick={() => { switchLanguage(lang.code); setIsOpen(false); }} className={`flex flex-col items-center justify-center p-2 rounded-lg border transition ${currentLang === lang.code ? 'bg-white border-amber-400 shadow-sm' : 'bg-transparent border-slate-200'}`}>
                  <span className="text-2xl mb-1">{lang.flag}</span>
                  <span className="text-xs font-bold text-slate-700">{lang.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
