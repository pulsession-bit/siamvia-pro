import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

/**
 * Related Pages Component
 * 
 * Affiche des liens vers des pages connexes pour améliorer le maillage interne
 */

interface RelatedPage {
    title: string;
    description: string;
    href: string;
    icon?: LucideIcon;
}

interface RelatedPagesProps {
    pages: RelatedPage[];
    title?: string;
}

export const RelatedPages: React.FC<RelatedPagesProps> = ({
    pages,
    title = 'Pages Connexes',
}) => {
    return (
        <div className="bg-slate-50 rounded-xl p-8 mt-12 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">{title}</h3>
            <div className="grid md:grid-cols-3 gap-4">
                {pages.map((page, idx) => {
                    const Icon = page.icon;
                    return (
                        <Link
                            key={idx}
                            href={page.href}
                            className="block p-4 bg-white rounded-lg border border-slate-200 hover:border-amber-500 hover:shadow-md transition group"
                        >
                            {Icon && (
                                <div className="mb-2">
                                    <Icon className="h-5 w-5 text-amber-500 group-hover:text-amber-600 transition" />
                                </div>
                            )}
                            <h4 className="font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition">
                                {page.title}
                            </h4>
                            <p className="text-sm text-slate-600">{page.description}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

/**
 * Inline Link Component
 * 
 * Lien contextuel dans le texte avec style cohérent
 */
interface InlineLinkProps {
    href: string;
    children: React.ReactNode;
}

export const InlineLink: React.FC<InlineLinkProps> = ({ href, children }) => {
    return (
        <Link
            href={href}
            className="text-amber-600 hover:text-amber-700 underline font-medium transition"
        >
            {children}
        </Link>
    );
};
