import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants';

interface ContactHeroProps {
    title: string;
    subtitle: string;
}

export const ContactHero: React.FC<ContactHeroProps> = ({ title, subtitle }) => {
    return (
        <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-50">
                <Image
                    src={IMAGES.COMMUNICATION}
                    alt="Communication"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/50"></div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                <p className="text-xl text-slate-200 max-w-2xl mx-auto">{subtitle}</p>
            </div>
        </div>
    );
};
