import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Search, Globe, ChevronDown } from 'lucide-react';
import { languages } from './LanguageSelector';
import { NAV_ITEMS } from '../../config/navigation';

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    langPath: (path: string) => string;
    t: (key: string) => string;
    currentLang: string;
    switchLanguage: (lang: string) => Promise<void> | void;
    SCORING_ENGINE_URL: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
    isOpen,
    setIsOpen,
    langPath,
    t,
    currentLang,
    switchLanguage,
    SCORING_ENGINE_URL
}) => {
    const [showMobileLangs, setShowMobileLangs] = useState(false);

    useEffect(() => {
        if (showMobileLangs) {
            const timer = setTimeout(() => {
                setShowMobileLangs(false);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [showMobileLangs]);

    return (
        <div className={`md:hidden fixed inset-y-0 right-0 w-full bg-white z-[60] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-5 border-b border-slate-100">
                    <span className="text-xl font-bold text-slate-900">Siam Visa <span className="text-amber-500">Pro</span></span>
                    <button onClick={() => setIsOpen(false)} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full">
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto py-4">
                    <Link href={langPath('')} onClick={() => setIsOpen(false)} className="block px-6 py-4 text-lg font-medium text-slate-800 hover:bg-amber-50 border-l-4 border-transparent hover:border-amber-500 transition">{t('nav.home')}</Link>

                    {NAV_ITEMS.map((item) => (
                        <div key={item.key}>
                            {item.items.length === 0 ? (
                                <Link
                                    href={langPath(item.path || '')}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-6 py-4 text-lg font-medium text-slate-800 hover:bg-amber-50 border-l-4 border-transparent hover:border-amber-500 transition"
                                >
                                    {t(item.labelKey)}
                                </Link>
                            ) : (
                                <div className="bg-slate-50 py-2 my-2">
                                    <span className="block px-6 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">{t(item.labelKey)}</span>
                                    {item.items.map((subItem) => (
                                        <Link
                                            key={subItem.key}
                                            href={langPath(subItem.path)}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-6 py-3 text-slate-600 hover:text-amber-600 pl-10 font-medium"
                                        >
                                            {t(subItem.labelKey)}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="p-6 border-t border-slate-100 bg-slate-50">
                    <a href={SCORING_ENGINE_URL} className="block w-full text-center bg-amber-500 text-slate-900 py-4 rounded-xl font-bold text-lg shadow-lg mb-6">
                        {t('nav.eligibility')}
                    </a>

                    <div className="relative">
                        <button
                            onClick={() => setShowMobileLangs(!showMobileLangs)}
                            className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg border border-slate-200 bg-white text-slate-700 font-bold mb-4 active:bg-slate-50 transition-colors"
                        >
                            <Globe className="h-5 w-5 text-amber-500" />
                            <span>{t('nav.languages')}</span>
                            <ChevronDown className={`h-4 w-4 transition-transform ${showMobileLangs ? 'rotate-180' : ''}`} />
                        </button>

                        <div className={`grid grid-cols-3 gap-2 transition-all duration-300 overflow-hidden ${showMobileLangs ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        switchLanguage(lang.code);
                                        setIsOpen(false);
                                        setShowMobileLangs(false);
                                    }}
                                    className={`flex flex-col items-center justify-center p-2 rounded-lg border transition ${currentLang === lang.code ? 'bg-white border-amber-400 shadow-sm' : 'bg-white border-slate-200'}`}
                                >
                                    <span className="text-2xl mb-1">{lang.flag}</span>
                                    <span className="text-[10px] font-bold text-slate-700">{lang.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
