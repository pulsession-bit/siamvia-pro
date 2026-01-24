'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../../config/navigation';

interface NavLinksProps {
    pathname: string;
    langPath: (path: string) => string;
    t: (key: string) => string;
}

export const NavLinks: React.FC<NavLinksProps> = ({ pathname, langPath, t }) => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (key: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveDropdown(key);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150); // 150ms delay for better UX
    };

    return (
        <div className="hidden md:flex items-center space-x-6 h-full">
            <Link
                href={langPath('')}
                className={`text-sm font-bold transition-all duration-200 ${pathname === langPath('') ? 'text-amber-400' : 'text-white hover:text-amber-400 drop-shadow-md'}`}
            >
                {t('nav.home')}
            </Link>

            {NAV_ITEMS.map((item) => {
                if (item.items.length === 0) {
                    return (
                        <Link
                            key={item.key}
                            href={langPath(item.path || '')}
                            className={`text-sm font-bold transition-all duration-200 ${pathname?.includes('/' + item.path) ? 'text-amber-400' : 'text-white hover:text-amber-400 drop-shadow-md'}`}
                        >
                            {t(item.labelKey)}
                        </Link>
                    );
                }

                return (
                    <div
                        key={item.key}
                        className="relative h-full flex items-center"
                        onMouseEnter={() => handleMouseEnter(item.key)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className={`flex items-center space-x-1 text-sm font-bold focus:outline-none transition-colors duration-200 ${activeDropdown === item.key ? 'text-amber-400' : 'text-white hover:text-amber-400 drop-shadow-md'} h-full px-1`}>
                            <span>{t(item.labelKey)}</span>
                            <ChevronDown className={`h-4 w-4 opacity-70 transition-transform ${activeDropdown === item.key ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Invisible bridge to prevent closing when moving between button and dropdown */}
                        <div className={`absolute top-full left-0 w-full h-4 z-10 ${activeDropdown === item.key ? 'block' : 'hidden'}`}></div>

                        <div
                            className={`absolute left-0 top-[calc(100%-8px)] mt-4 w-60 bg-white rounded-xl shadow-2xl py-3 border border-slate-100 transition-all duration-200 transform origin-top-left z-50 ${activeDropdown === item.key ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                        >
                            {item.items.map((subItem) => (
                                <Link
                                    key={subItem.key}
                                    href={langPath(subItem.path)}
                                    className="block px-5 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 font-medium transition-colors"
                                >
                                    {t(subItem.labelKey)}
                                </Link>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
