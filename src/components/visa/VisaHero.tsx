import React from 'react';

interface VisaHeroProps {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    tagline: string;
    backgroundImage: string;
}

export const VisaHero: React.FC<VisaHeroProps> = ({
    badge,
    title,
    subtitle,
    description,
    tagline,
    backgroundImage
}) => {
    return (
        <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-40">
                <img
                    src={backgroundImage}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900/90 to-slate-900/50"></div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <span className="text-amber-400 font-bold tracking-wide uppercase text-sm border border-amber-400/50 px-3 py-1 rounded-full bg-slate-900/50 backdrop-blur-sm">
                    {badge}
                </span>
                <h1 className="text-5xl md:text-6xl font-extrabold mt-6 mb-2 text-white">{title}</h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-200">{subtitle}</h2>
                <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
                    {description}
                    <br />
                    <span className="text-slate-400 text-lg">{tagline}</span>
                </p>
            </div>
        </div>
    );
};
