import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQAccordionProps {
    title: string;
    faqs: { q: string; a: React.ReactNode }[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ title, faqs }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="my-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{title}</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
                        <button
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <span className={`font-bold transition-colors ${openIndex === index ? 'text-amber-600' : 'text-slate-800'}`}>
                                {faq.q}
                            </span>
                            {openIndex === index ? (
                                <ChevronUp className="h-5 w-5 text-amber-500" />
                            ) : (
                                <ChevronDown className="h-5 w-5 text-slate-400" />
                            )}
                        </button>
                        {openIndex === index && (
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
