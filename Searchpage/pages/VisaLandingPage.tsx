import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CONTENT } from '../constants';
import Layout from '../components/Layout';
import AuditForm from '../components/AuditForm';
import { Language } from '../types';
import { Shield, TrendingUp, Rocket, FileText, Clock, CheckCircle } from 'lucide-react';

const iconMap: Record<string, any> = {
  shield: Shield,
  trending: TrendingUp,
  rocket: Rocket,
  document: FileText,
  clock: Clock
};

const VisaLandingPage: React.FC = () => {
  const { lang, slug } = useParams<{ lang: Language; slug: string }>();

  // Ensure valid language
  const currentLang = CONTENT[lang || 'fr'] ? lang as Language : 'fr';
  const content = CONTENT[currentLang];
  const visa = content.visas.find(v => v.slug === slug) || content.visas[0]; // Default to first if slug not found for demo

  // SEO Simulation (In Next.js this would be GenerateMetadata)
  useEffect(() => {
    document.title = `${visa.metaTitle} | SiamVisaPro`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', visa.metaDesc);
  }, [visa]);

  return (
    <Layout lang={currentLang} t={content.common}>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={visa.heroImage} 
            alt={visa.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="container relative z-10 px-4 text-center mt-[-50px]">
          <span className="inline-block py-1 px-3 rounded border border-amber-500/50 bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
            {visa.slug.replace('-', ' ')}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
            {visa.name}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light">
            {visa.shortDesc}
          </p>
          <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 px-10 rounded-full text-lg transition shadow-[0_0_20px_rgba(245,158,11,0.3)] transform hover:scale-105">
            {content.common.hero.auditBtn} {visa.name.split(' ')[0]}
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{content.common.features.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {visa.features.map((feature, idx) => {
              const Icon = iconMap[feature.icon] || Shield;
              return (
                <div key={idx} className="flex flex-col items-center text-center p-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-amber-50 transition duration-300">
                    <Icon className="w-8 h-8 text-slate-900 group-hover:text-amber-500 transition duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligible Profiles */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-slate-900 mb-12">{content.common.profiles.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visa.profiles.map((profile, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition flex items-center justify-center min-h-[100px] text-center">
                 <span className="font-semibold text-slate-800 text-sm">{profile.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 relative bg-slate-100">
        {/* Decorative background element simulating the "cut" in the design if needed, 
            but for this code we rely on the card's styling */}
        <div className="container mx-auto px-4 relative z-10">
          <AuditForm t={content.common.form} visa={visa} />
        </div>
      </section>
    </Layout>
  );
};

export default VisaLandingPage;