import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../../config/navigation';

interface DesktopMenuProps {
    langPath: (path: string) => string;
    t: (key: string) => string;
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ langPath, t }) => {
    // Filter out 'search' from menu items as we have a dedicated search bar
    const menuItems = NAV_ITEMS.filter(item => item.key !== 'search');

    return (
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-4 ml-4">
            {menuItems.map((item) => {
                const hasSubItems = item.items && item.items.length > 0;

                if (!hasSubItems) {
                    return (
                        <Link
                            key={item.key}
                            href={langPath(item.path || '')}
                            className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            {t(item.labelKey)}
                        </Link>
                    );
                }

                return (
                    <div key={item.key} className="relative group">
                        <button className="flex items-center text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors group-hover:text-amber-400">
                            <span>{t(item.labelKey)}</span>
                            <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
                        </button>

                        <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 pt-2">
                            <div className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden bg-white">
                                <div className="py-2">
                                    {item.items.map((subItem) => (
                                        <Link
                                            key={subItem.key}
                                            href={langPath(subItem.path)}
                                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                                        >
                                            {t(subItem.labelKey)}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
