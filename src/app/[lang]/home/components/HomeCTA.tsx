import React from 'react';

interface HomeCTAProps {
    t: (key: string) => string;
    SCORING_ENGINE_URL: string;
}

export const HomeCTA: React.FC<HomeCTAProps> = ({ t, SCORING_ENGINE_URL }) => {
    return (
        <section className="bg-slate-900 py-16 border-t border-slate-800 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6">{t('cta_footer.title')}</h2>
                <p className="text-slate-300 mb-10 text-lg">{t('cta_footer.text')}</p>
                <a
                    href={SCORING_ENGINE_URL}
                    className="inline-block bg-amber-500 text-slate-900 font-bold px-10 py-4 rounded-lg shadow-lg hover:bg-amber-400 transition transform hover:scale-105"
                >
                    {t('cta_footer.btn')}
                </a>
            </div>
        </section>
    );
};
