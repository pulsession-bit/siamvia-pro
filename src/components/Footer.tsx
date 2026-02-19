'use client';

import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Landmark, Facebook } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { useRouter, usePathname } from 'next/navigation';
import { useCurrentLang, useLangPath } from '../hooks/useLang';
import { languages } from './navbar/LanguageSelector';
import { REVERSE_MAP, PageKey, getTranslatedPath } from '../utils/slugs';

// YouTube Logo Component for Footer
const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// WhatsApp Logo Component for Footer
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.61-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const lang = useCurrentLang();
  const router = useRouter();
  const pathname = usePathname();
  const langPath = useLangPath();

  const switchLanguage = async (newLang: string) => {
    // 1. Persist choice in cookie via API
    try {
      await fetch('/api/locale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locale: newLang }),
      });
    } catch (error) {
      console.error('Failed to set locale cookie:', error);
    }

    // 2. Redirect to translated path
    const pathWithoutLang = pathname?.replace(/^\/([a-z]{2})/, '') || '';
    const cleanPath = pathWithoutLang.startsWith('/') ? pathWithoutLang.slice(1) : pathWithoutLang;
    const currentLangSlugs = REVERSE_MAP[lang] || {};
    const decodedPath = decodeURIComponent(cleanPath);
    const pageKey = (decodedPath === '' ? 'home' : currentLangSlugs[decodedPath]) as PageKey;

    if (pageKey) {
      router.push(getTranslatedPath(pageKey, newLang));
    } else {
      router.push(`/${newLang}/${cleanPath}`);
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href={langPath('')} className="text-2xl font-bold mb-6 flex items-center space-x-2">
              <ShieldCheck className="text-amber-500 h-8 w-8" />
              <span>Siam Visa <span className="text-amber-500">Pro</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t('footer.desc')}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              <a
                href="https://www.facebook.com/siamvisapro/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-2 rounded-lg text-slate-400 hover:text-blue-500 hover:bg-white/10 transition-all border border-white/5"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/33773726887"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-2 rounded-lg text-slate-400 hover:text-green-500 hover:bg-white/10 transition-all border border-white/5"
                title="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@SiamVisaPro"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-white/10 transition-all border border-white/5"
                title="YouTube"
              >
                <YouTubeIcon className="h-5 w-5" />
              </a>
            </div>

            {/* Payment Methods */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <p className="text-xs text-slate-500 mb-2">{t('footer.secure_payment')}</p>
              <div className="flex space-x-3 items-center">
                <div className="bg-white/10 p-1.5 rounded flex items-center" title="Bank Transfer (Mercury)">
                  <Landmark className="h-4 w-4 text-slate-300" />
                </div>
                <span className="text-[10px] text-slate-400 font-medium">Mercury • Wise</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-50 border-b border-slate-800 pb-2 inline-block">{t('footer.col_visas')}</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link href={langPath('dtv')} className="hover:text-amber-400 transition-colors flex items-center"><span className="text-amber-500 mr-2">›</span> {t('nav.dtv')}</Link></li>
              <li><Link href={langPath('elite-visa')} className="hover:text-amber-400 transition-colors flex items-center"><span className="text-amber-500 mr-2">›</span> {t('nav.elite')}</Link></li>
              <li><Link href={langPath('business-visa')} className="hover:text-amber-400 transition-colors flex items-center"><span className="text-amber-500 mr-2">›</span> {t('nav.business')}</Link></li>
              <li><Link href={langPath('tourist-visa')} className="hover:text-amber-400 transition-colors flex items-center"><span className="text-amber-500 mr-2">›</span> {t('nav.tourist')}</Link></li>
              <li><Link href={langPath('retirement-visa')} className="hover:text-amber-400 transition-colors flex items-center"><span className="text-amber-500 mr-2">›</span> {t('nav.retirement')}</Link></li>
              <li><Link href={langPath('visa-run')} className="hover:text-amber-400 transition-colors flex items-center"><span className="text-amber-500 mr-2">›</span> {t('nav.visa_run')}</Link></li>
              <li><Link href={langPath('services')} className="hover:text-amber-400 transition-colors flex items-center"><span className="text-amber-500 mr-2">›</span> {t('nav.services')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-50 border-b border-slate-800 pb-2 inline-block">{t('footer.col_support')}</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link href={langPath('about')} className="hover:text-amber-400 transition-colors font-bold text-amber-500/80 tracking-wide uppercase text-xs">★ {t('about_page.hero_title')}</Link></li>
              <li><a href="https://audit.siamvisapro.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors font-bold text-amber-500">★ {t('nav.eligibility')}</a></li>
              <li><Link href={langPath('blog')} className="hover:text-amber-400 transition-colors">{t('nav.blog')}</Link></li>
              <li><Link href={langPath('company-setup')} className="hover:text-amber-400 transition-colors">{t('nav.company_setup')}</Link></li>
              <li><Link href={langPath('buy-property')} className="hover:text-amber-400 transition-colors">{t('nav.buy_property')}</Link></li>
              <li><Link href={langPath('ai-technology')} className="hover:text-amber-400 transition-colors">{t('footer.ai_technology')}</Link></li>
              <li><Link href={langPath('faq')} className="hover:text-amber-400 transition-colors">{t('nav.faq')}</Link></li>
              <li><Link href={langPath('terms')} className="hover:text-amber-400 transition-colors">{t('footer.legal')}</Link></li>
              <li><Link href={langPath('sitemap')} className="hover:text-amber-400 transition-colors">{t('footer.sitemap')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-50 border-b border-slate-800 pb-2 inline-block">{t('footer.col_contact')}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-amber-500 mt-0.5" />
                <span>contact@siamvisapro.com<br /><span className="text-xs text-slate-500">24h response</span></span>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5" />
                <div className="flex flex-col space-y-2">
                  <span className="group-hover:text-slate-200 transition-colors font-bold text-slate-300">{t('footer.office_usa')}</span>
                  <span className="group-hover:text-slate-200 transition-colors">{t('footer.office_bkk')}</span>
                  <span className="text-[10px] text-slate-600 font-mono tracking-tighter uppercase">{t('footer.tax_id')}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Language Links — hidden on mobile (navbar already has language selector) */}
        <div className="hidden md:block border-t border-slate-800 pt-8 pb-8 mb-8">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">{t('nav.languages')}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {languages.map((l) => {
              // Calculate link for this language
              const pathWithoutLang = pathname?.replace(/^\/([a-z]{2})/, '') || '';
              const cleanPath = pathWithoutLang.startsWith('/') ? pathWithoutLang.slice(1) : pathWithoutLang;
              const currentLangSlugs = REVERSE_MAP[lang] || {};
              const decodedPath = decodeURIComponent(cleanPath);
              const pageKey = (decodedPath === '' ? 'home' : currentLangSlugs[decodedPath]) as PageKey;

              const href = pageKey ? getTranslatedPath(pageKey, l.code) : `/${l.code}/${cleanPath}`;

              return (
                <Link
                  key={l.code}
                  href={href}
                  hrefLang={l.code}
                  className={`text-sm hover:text-amber-400 transition-colors ${lang === l.code ? 'text-amber-500 font-bold' : 'text-slate-400'}`}
                >
                  <span className="mr-1.5">{l.flag}</span>
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Siam Visa Pro. {t('footer.copyright')}</p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-slate-600">{t('footer.written_by')}</span>
              <a
                href="https://www.linkedin.com/in/raphael-buresi-4a9562a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 font-bold hover:text-amber-400 transition-colors cursor-pointer border-b border-slate-700 border-dotted"
                title={t('footer.author_role')}
              >
                {t('footer.author')}
              </a>
            </div>
            <div className="flex items-center space-x-2 border-l border-slate-800 pl-6">
              <span className="text-slate-600">Owner:</span>
              <a
                href="https://digitgpt.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors font-medium"
              >
                DigitGpt LLC
              </a>
            </div>
          </div>
          <p className="hidden lg:block text-[10px] text-slate-600">{t('footer.disclaimer')}</p>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
