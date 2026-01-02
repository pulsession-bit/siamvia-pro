import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language, Translation } from '../types';
import { Plane, Facebook, Instagram, Linkedin } from 'lucide-react';

interface Props {
  children: React.ReactNode;
  lang: Language;
  t: Translation;
}

const Layout: React.FC<Props> = ({ children, lang, t }) => {
  const location = useLocation();

  // Simple language switcher logic
  const switchLang = (newLang: string) => {
    const path = location.pathname.split('/').slice(2).join('/');
    return `/${newLang}/${path}`;
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={`/${lang}`} className="flex items-center gap-2">
              <div className="bg-amber-500 p-1.5 rounded-lg">
                <Plane className="text-slate-900 w-5 h-5 transform -rotate-45" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">SiamVisa<span className="text-amber-500">Pro</span></span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to={`/${lang}`} className="text-sm font-medium hover:text-amber-600 transition">{t.nav.home}</Link>
              <button className="text-sm font-medium hover:text-amber-600 transition flex items-center gap-1">
                {t.nav.catalog} 
                <span className="text-[10px]">▼</span>
              </button>
              <Link to={`/${lang}`} className="text-sm font-medium hover:text-amber-600 transition">{t.nav.contact}</Link>
            </div>

            {/* CTA & Lang */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-1 text-xs font-bold text-slate-500">
                {['fr', 'en', 'de'].map((l) => (
                  <Link 
                    key={l} 
                    to={switchLang(l)}
                    className={`uppercase px-2 py-1 rounded ${lang === l ? 'bg-slate-100 text-slate-900' : 'hover:bg-slate-50'}`}
                  >
                    {l}
                  </Link>
                ))}
              </div>
              <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-bold py-2.5 px-6 rounded-full transition shadow-md shadow-amber-500/20">
                {t.nav.auditBtn}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-amber-500 p-1.5 rounded-lg">
                <Plane className="text-slate-900 w-4 h-4 transform -rotate-45" />
              </div>
              <span className="font-bold text-lg text-white">SiamVisa<span className="text-amber-500">Pro</span></span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              footer.desc
            </p>
            <div className="flex gap-4 mt-6">
              <Facebook size={18} className="hover:text-amber-500 cursor-pointer transition"/>
              <Instagram size={18} className="hover:text-amber-500 cursor-pointer transition"/>
              <Linkedin size={18} className="hover:text-amber-500 cursor-pointer transition"/>
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">{t.footer.navigation}</h5>
            <ul className="space-y-3 text-sm">
              <li><Link to="#" className="hover:text-amber-500 transition">Visa DTV (Digital Nomad)</Link></li>
              <li><Link to="#" className="hover:text-amber-500 transition">Tous nos tarifs</Link></li>
              <li><Link to="#" className="hover:text-amber-500 transition">Test d'éligibilité IA</Link></li>
              <li><Link to="#" className="hover:text-amber-500 transition">Questions fréquentes</Link></li>
              <li><Link to="/admin" className="hover:text-amber-500 transition opacity-50">Diagnostic DB (Admin)</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">{t.footer.legal}</h5>
            <ul className="space-y-3 text-sm">
              <li><Link to="#" className="hover:text-amber-500 transition">Conditions Générales</Link></li>
              <li><Link to="#" className="hover:text-amber-500 transition">Protection des données</Link></li>
              <li><Link to="#" className="hover:text-amber-500 transition">Mentions légales</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">{t.footer.contact}</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-center">
                 <span className="text-amber-500">✉</span> contact@siamvisapro.com
              </li>
              <li className="flex gap-3 items-center">
                 <span className="text-amber-500">📞</span> +33 7 73 72 68 87
              </li>
              <li className="flex gap-3 items-center">
                 <span className="text-amber-500">📍</span> Bangkok & Paris
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs text-slate-600">
          © 2025 SiamVisa Pro. Expert en mobilité thaïlandaise.
        </div>
      </footer>
    </div>
  );
};

export default Layout;