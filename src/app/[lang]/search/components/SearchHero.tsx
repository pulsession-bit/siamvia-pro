import React from 'react';

interface SearchHeroProps {
    title: string;
    subtitle: string;
}

export const SearchHero: React.FC<SearchHeroProps> = ({
    title,
    subtitle
}) => {
    return (
        <section className="bg-gradient-to-r from-blue-900 to-red-900 text-white pt-32 pb-96 px-4 relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 w-[80rem] h-[80rem] bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">{title}</h1>
                <p className="text-xl opacity-90 font-light max-w-2xl mx-auto">{subtitle}</p>
            </div>
        </section>
    );
};
