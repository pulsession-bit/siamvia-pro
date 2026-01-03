import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search } from 'lucide-react';

interface NavLinksProps {
    pathname: string;
    langPath: (path: string) => string;
    t: (key: string) => string;
}

export const NavLinks: React.FC<NavLinksProps> = ({ pathname, langPath, t }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
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
                        href={langPath('ltr')}
                        className="block px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 font-medium"
                    >
                        {t('nav.ltr')}
                    </Link>
                    <Link
                        href={langPath('tourist-visa')}
                        className="block px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 font-medium"
                    >
                        {t('nav.tourist')}
                    </Link>
                    <Link
                        href={langPath('elite-visa')}
                        className="block px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 font-medium"
                    >
                        {t('nav.elite')}
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
                href={langPath('search')}
                className={`text-sm font-medium transition-colors flex items-center space-x-1 ${pathname?.includes('/search') ? 'text-white font-semibold' : 'text-slate-200 hover:text-white'}`}
            >
                <Search className="w-4 h-4" />
                <span>{t('nav.search')}</span>
            </Link>
            <Link
                href={langPath('contact')}
                className={`text-sm font-medium transition-colors ${pathname?.includes('/contact') ? 'text-white font-semibold' : 'text-slate-200 hover:text-white'}`}
            >
                {t('nav.contact')}
            </Link>
        </div>
    );
};
