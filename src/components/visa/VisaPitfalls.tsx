import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

interface PitfallItem {
    title: string;
    description: string;
}

interface VisaPitfallsProps {
    title: string;
    items: PitfallItem[];
    warningTitle?: string;
    warningDesc?: string;
}

export const VisaPitfalls: React.FC<VisaPitfallsProps> = ({
    title,
    items,
    warningTitle,
    warningDesc
}) => {
    return (
        <>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100 mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <Shield className="h-6 w-6 text-red-500 mr-3" />
                    {title}
                </h2>
                <div className="space-y-6">
                    {items.map((item, i) => (
                        <div key={i} className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                            <h3 className="font-bold text-red-900 mb-2">{item.title}</h3>
                            <p className="text-red-800 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {warningTitle && (
                <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200 mb-12">
                    <div className="flex items-start">
                        <AlertTriangle className="h-6 w-6 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-amber-900 mb-2">{warningTitle}</h3>
                            <p className="text-amber-800 text-sm">{warningDesc}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
