import React from 'react';
import { CheckCircle } from 'lucide-react';

interface AppointmentSuccessProps {
    title: string;
    description: string;
    buttonText: string;
    onClose: () => void;
}

export const AppointmentSuccess: React.FC<AppointmentSuccessProps> = ({
    title,
    description,
    buttonText,
    onClose
}) => {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in-95 duration-500 min-h-[400px]">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8 border border-green-100 shadow-inner">
                <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">{title}</h3>
            <p className="text-slate-500 mb-10 max-w-xs text-lg">{description}</p>
            <button
                type="button"
                onClick={onClose}
                className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-xl active:scale-95"
            >
                {buttonText}
            </button>
        </div>
    );
};
