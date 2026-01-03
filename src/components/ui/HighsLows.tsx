import React from 'react';
import { Check } from 'lucide-react';

interface HighsLowsProps {
    highsTitle: string;
    highs: string[];
    lowsTitle: string;
    lows: string[];
}

export const HighsLows: React.FC<HighsLowsProps> = ({
    highsTitle,
    highs,
    lowsTitle,
    lows
}) => {
    return (
        <div className="grid md:grid-cols-2 gap-8 my-16 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-green-500 transition hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-slate-900">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                        <Check className="text-green-600 h-6 w-6" />
                    </div>
                    {highsTitle}
                </h3>
                <ul className="space-y-4">
                    {highs.map((item, idx) => (
                        <li key={idx} className="flex items-start text-slate-600">
                            <Check className="text-green-500 mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                            <span className="leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-red-400 transition hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-slate-900">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                        <span className="text-red-500 font-bold text-xl px-2">!</span>
                    </div>
                    {lowsTitle}
                </h3>
                <ul className="space-y-4">
                    {lows.map((item, idx) => (
                        <li key={idx} className="flex items-start text-slate-600">
                            <span className="text-red-400 mr-2 mt-1 flex-shrink-0 font-bold">-</span>
                            <span className="leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
