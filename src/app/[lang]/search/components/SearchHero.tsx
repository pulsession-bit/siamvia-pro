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
        <section className="bg-gradient-to-r from-blue-900 to-red-900 text-white py-20 px-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 opacity-10 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">{title}</h1>
                <p className="text-xl opacity-90 font-light max-w-2xl mx-auto">{subtitle}</p>
            </div>
        </section>
    );
};
