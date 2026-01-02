'use client';

import React from 'react';
import { X, Calendar, CreditCard, Repeat, Plane } from 'lucide-react';

interface QuickSummaryModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    data: {
        durationLabel: string;
        durationValue: string;
        costLabel: string;
        costValue: string;
        perYearLabel: string;
        perYearValue: string;
        runsLabel: string;
        runsValue: string;
        entriesLabel: string;
        entriesValue: string;
    };
    verdict: string;
}

export const QuickSummaryModal: React.FC<QuickSummaryModalProps> = ({ isOpen, onClose, title, data, verdict }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Card */}
            <div className="relative bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 border-b border-slate-700 flex justify-between items-center">
                    <h3 className="text-xl font-black text-amber-500 tracking-wide uppercase">{title}</h3>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-white transition rounded-full p-1 hover:bg-slate-700"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content Grid */}
                <div className="p-8 grid grid-cols-2 gap-8">
                    {/* Duration */}
                    <div className="space-y-2">
                        <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                            <Calendar className="w-4 h-4 mr-2 text-amber-500" />
                            {data.durationLabel}
                        </div>
                        <div className="text-white text-lg font-bold">{data.durationValue}</div>
                    </div>

                    {/* Cost */}
                    <div className="space-y-2">
                        <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                            <CreditCard className="w-4 h-4 mr-2 text-amber-500" />
                            {data.costLabel}
                        </div>
                        <div className="text-white text-lg font-bold">{data.costValue}</div>
                    </div>

                    {/* Cost Per Year */}
                    <div className="space-y-2">
                        <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                            <CreditCard className="w-4 h-4 mr-2 text-amber-500/70" />
                            {data.perYearLabel}
                        </div>
                        <div className="text-amber-200 text-lg font-bold">{data.perYearValue}</div>
                    </div>

                    {/* Visa Runs */}
                    <div className="col-span-2 bg-slate-800/100 p-4 rounded-xl flex items-center justify-between border border-slate-700/50">
                        <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider">
                            <Repeat className="w-4 h-4 mr-2 text-amber-500" />
                            {data.runsLabel}
                        </div>
                        <div className="text-emerald-400 text-xl font-black tracking-wider">{data.runsValue}</div>
                    </div>

                    {/* Entries */}
                    <div className="space-y-2">
                        <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                            <Plane className="w-4 h-4 mr-2 text-amber-500" />
                            {data.entriesLabel}
                        </div>
                        <div className="text-white text-lg font-bold">{data.entriesValue}</div>
                    </div>
                </div>

                {/* Verdict Footer */}
                <div className="bg-amber-500/10 p-6 border-t border-amber-500/20">
                    <p className="text-amber-200 text-sm font-medium italic text-center">
                        "{verdict}"
                    </p>
                </div>

            </div>
        </div>
    );
};
