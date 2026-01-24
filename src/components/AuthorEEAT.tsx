
import React from 'react';
import { User, Calendar, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface AuthorEEATProps {
    date?: string;
}

export const AuthorEEAT: React.FC<AuthorEEATProps> = ({ date = "2026-01-24" }) => {
    const { t } = useLanguage();
    const linkedinUrl = "https://www.linkedin.com/in/raphael-buresi-4a9562a/";

    return (
        <div className="flex flex-wrap items-center gap-6 py-8 border-t border-slate-100 text-slate-500 text-sm mt-12 bg-slate-50/50 px-6 rounded-2xl">
            <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group cursor-pointer"
            >
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold border border-amber-200 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    RB
                </div>
                <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400">{t('footer.written_by')}</span>
                    <span className="text-slate-900 font-bold group-hover:text-amber-600 transition-colors">Raphaël Buresi — {t('footer.author_role')}</span>
                </div>
            </a>

            <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400">{t('footer.last_updated')}</span>
                    <span className="text-slate-700 font-medium">{date}</span>
                </div>
            </div>

            <div className="flex items-center gap-2 ml-auto">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">Expertise Vérifiée</span>
            </div>

            {/* SEO Person Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        'name': 'Raphaël Buresi',
                        'jobTitle': 'Thailand Visa Expert',
                        'url': linkedinUrl,
                        'sameAs': [
                            linkedinUrl
                        ],
                        'image': 'https://www.siamvisapro.com/favicon.ico',
                        'knowsAbout': ['Thailand Visas', 'DTV Visa', 'Retirement in Thailand', 'Expatriation'],
                        'worksFor': {
                            '@type': 'Organization',
                            'name': 'SiamVisa Pro'
                        }
                    })
                }}
            />

        </div>
    );
};
