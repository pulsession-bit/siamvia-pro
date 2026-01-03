import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

interface HomeVisasProps {
    t: (key: string) => string;
    langPath: (path: string) => string;
}

export const HomeVisas: React.FC<HomeVisasProps> = ({ t, langPath }) => {
    return (
        <section className="py-20 relative overflow-hidden bg-slate-900">
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1920&q=80"
                    alt="Beach"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">{t('visas.title')}</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto">{t('visas.subtitle')}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* DTV Visa */}
                    <div className="group relative bg-white rounded-2xl shadow-xl border-2 border-amber-400 overflow-hidden hover:-translate-y-2 transition duration-300">
                        <div className="absolute top-0 right-0 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                            {t('visas.popular')}
                        </div>
                        <div className="h-48 overflow-hidden relative">
                            <Image
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                                alt="DTV Chiang Mai"
                                fill
                                className="object-cover group-hover:scale-110 transition duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{t('visas.dtv_title')}</h3>
                            <p className="text-slate-600 mb-4 text-sm">{t('visas.dtv_desc')}</p>
                            <ul className="space-y-2 mb-6">
                                {[1, 3, 2].map(i => (
                                    <li key={i} className="flex items-center text-sm text-slate-500">
                                        <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                                        {t(`spotlight.feat${i}_title`)}
                                    </li>
                                ))}
                            </ul>
                            <Link href={langPath('dtv')} className="block w-full text-center bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition font-medium">
                                {t('visas.btn_more')}
                            </Link>
                        </div>
                    </div>

                    {/* Tourist Visa */}
                    <div className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:-translate-y-2 transition duration-300">
                        <div className="h-48 overflow-hidden relative">
                            <Image
                                src="https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80"
                                alt="Tourist"
                                fill
                                className="object-cover group-hover:scale-110 transition duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{t('visas.tr_title')}</h3>
                            <p className="text-slate-600 mb-4 text-sm">{t('visas.tr_desc')}</p>
                            <ul className="space-y-2 mb-6">
                                {[1, 2, 3].map(i => (
                                    <li key={i} className="flex items-center text-sm text-slate-500">
                                        <CheckCircle className="h-4 w-4 text-slate-400 mr-2" />
                                        {t(`visas.tr_feat${i}`)}
                                    </li>
                                ))}
                            </ul>
                            <Link href={langPath('services')} className="block w-full text-center bg-white border border-slate-200 text-slate-700 py-3 rounded-lg hover:bg-slate-50 transition font-medium">
                                {t('visas.btn_rates')}
                            </Link>
                        </div>
                    </div>

                    {/* LTR Visa */}
                    <div className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:-translate-y-2 transition duration-300">
                        <div className="h-48 overflow-hidden relative">
                            <Image
                                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80"
                                alt="LTR"
                                fill
                                className="object-cover group-hover:scale-110 transition duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{t('visas.ltr_title')}</h3>
                            <p className="text-slate-600 mb-4 text-sm">{t('visas.ltr_desc')}</p>
                            <ul className="space-y-2 mb-6">
                                {[1, 2, 3].map(i => (
                                    <li key={i} className="flex items-center text-sm text-slate-500">
                                        <CheckCircle className="h-4 w-4 text-slate-400 mr-2" />
                                        {t(`visas.ltr_feat${i}`)}
                                    </li>
                                ))}
                            </ul>
                            <Link href={langPath('services')} className="block w-full text-center bg-white border border-slate-200 text-slate-700 py-3 rounded-lg hover:bg-slate-50 transition font-medium">
                                {t('visas.btn_rates')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
