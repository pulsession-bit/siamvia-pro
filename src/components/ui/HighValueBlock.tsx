import React from 'react';
import { Check } from 'lucide-react';

interface HighValueBlockProps {
    title: string;
    highlight: string;
    description: string;
    listItems: { icon: React.ElementType; text: string }[];
    cardTitle: string;
    cardItems: string[];
}

export const HighValueBlock: React.FC<HighValueBlockProps> = ({
    title,
    highlight,
    description,
    listItems,
    cardTitle,
    cardItems
}) => {
    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden my-16 rounded-3xl mx-4 lg:mx-0 shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        {title} <span className="text-amber-500">{highlight}</span>
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                        {description}
                    </p>
                    <ul className="space-y-4">
                        {listItems.map((item, i) => (
                            <li key={i} className="flex items-center gap-4">
                                <div className="bg-amber-500/20 p-2 rounded-lg text-amber-500">
                                    <item.icon size={20} />
                                </div>
                                <span className="font-bold">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl">
                    <h4 className="text-xl font-bold mb-6 text-center border-b border-white/10 pb-4">
                        {cardTitle}
                    </h4>
                    <div className="grid gap-4">
                        {cardItems.map((item, i) => (
                            <div key={i} className="bg-white/10 p-4 rounded-xl flex items-center justify-between hover:bg-amber-500/20 transition cursor-default group">
                                <span className="font-medium group-hover:text-amber-400 transition">{item}</span>
                                <Check className="text-amber-500 w-5 h-5" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
