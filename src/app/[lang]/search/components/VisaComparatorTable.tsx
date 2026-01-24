
'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PageKey, getTranslatedPath } from '@/utils/slugs';
import { useCurrentLang } from '@/hooks/useLang';

interface VisaComparatorTableProps {
    tableI18n: {
        headers: string[];
        rows: string[][];
    };
    compact?: boolean;
}

const visaIndexToKey: Record<number, PageKey> = {
    0: 'exemption-visa',
    1: 'tourist-visa',
    2: 'dtv',
    3: 'ltr',
    4: 'elite-visa',
    5: 'business-visa',
    6: 'student-visa'
};

export const VisaComparatorTable: React.FC<VisaComparatorTableProps> = ({ tableI18n, compact = false }) => {
    const lang = useCurrentLang();

    if (!tableI18n) return null;

    return (
        <div className={`overflow-x-auto rounded-[2rem] shadow-2xl shadow-slate-200/40 border border-slate-100 bg-white ${compact ? 'max-h-[600px]' : ''}`}>
            <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                    <tr className="bg-slate-900 border-b border-slate-800">
                        {tableI18n.headers.map((header: string, i: number) => (
                            <th key={i} className={`px-8 ${compact ? 'py-5' : 'py-7'} text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 first:pl-10 last:pr-10`}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                    {tableI18n.rows.map((row: string[], i: number) => (
                        <tr key={i} className="hover:bg-slate-50/80 transition-all group/row">
                            {row.map((cell: string, j: number) => {
                                const isVisaName = j === 0;
                                const pageKey = visaIndexToKey[i];

                                return (
                                    <td key={j} className={`px-8 ${compact ? 'py-4' : 'py-6'} text-sm first:pl-10 last:pr-10 ${isVisaName ? 'font-black' : 'text-slate-500 font-bold'}`}>
                                        {isVisaName && pageKey ? (
                                            <Link
                                                href={getTranslatedPath(pageKey, lang)}
                                                className="text-slate-900 hover:text-amber-600 transition-all flex items-center gap-3 group/link whitespace-nowrap"
                                            >
                                                <span className="border-b-2 border-transparent group-hover/link:border-amber-600/30 pb-0.5">{cell}</span>
                                                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover/link:bg-amber-500 group-hover/link:text-white transition-all scale-90 group-hover/link:scale-100">
                                                    <ChevronRight className="w-3.5 h-3.5" />
                                                </div>
                                            </Link>
                                        ) : (
                                            <span className="whitespace-nowrap">{cell}</span>
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};
