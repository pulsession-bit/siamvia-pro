import React from 'react';
import { X, UserCheck, Briefcase, Info } from 'lucide-react';
import { CATEGORY_ICONS } from '../data/visas';
import { Visa, Language } from '@/types/index';

interface VisaDetailModalProps {
    visa: Visa;
    lang: Language;
    onClose: () => void;
    onBookAppointment: () => void;
    i18n: {
        duration: string;
        eligibility: string;
        requirements: string;
        contactUs: string;
        visaCategory: string;
        estimatedCost: string;
        commonRequirements: string[];
        processDescription: string;
        categories: Record<string, string>;
        durations: Record<string, string>;
        prices: Record<string, string>;
    };
}

export const VisaDetailModal: React.FC<VisaDetailModalProps> = ({
    visa,
    lang,
    onClose,
    onBookAppointment,
    i18n
}) => {
    const Icon = CATEGORY_ICONS[visa.category] || Info;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" style={{ zIndex: 9999 }}>
            <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-slate-200">
                <div className="bg-slate-900 p-8 text-white relative">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                        style={{ cursor: 'pointer', zIndex: 10 }}
                    >
                        <X size={24} />
                    </button>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-amber-500 p-3 rounded-2xl">
                            <Icon size={32} />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest opacity-70">{i18n.visaCategory}: {i18n.categories[visa.category] || visa.category}</p>
                            <h3 className="text-2xl font-bold">{visa.name[lang]}</h3>
                        </div>
                    </div>
                </div>

                <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                            <p className="text-xs font-bold text-gray-400 uppercase mb-1">{i18n.duration}</p>
                            <p className="text-lg font-bold text-blue-900">{i18n.durations[visa.duration] || visa.duration}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                            <p className="text-xs font-bold text-gray-400 uppercase mb-1">{i18n.estimatedCost}</p>
                            <p className="text-lg font-bold text-blue-900">{i18n.prices[visa.price] || visa.price}</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-3">
                            <UserCheck size={18} className="text-amber-500" />
                            {i18n.eligibility}
                        </h4>
                        <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside ml-2">
                            {i18n.commonRequirements && i18n.commonRequirements.map((req, idx) => (
                                <li key={idx}>{req}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-3">
                            <Briefcase size={18} className="text-amber-500" />
                            {i18n.requirements}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {i18n.processDescription}
                        </p>
                    </div>

                    <div className="pt-4">
                        <button
                            onClick={onBookAppointment}
                            className="block w-full text-center bg-amber-500 text-slate-900 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all"
                        >
                            {i18n.contactUs}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
