import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    const slugMap: Record<string, Record<string, string>> = {
      fr: {
        dtv: 'visa-dtv-thailande',
        'tourist-visa': 'visa-touristique-thailande',
        'retirement-visa': 'visa-retraite-thailande',
        services: 'services-et-tarifs',
        terms: 'conditions-generales'
      },
      en: {
        dtv: 'thailand-dtv-visa',
        'tourist-visa': 'thailand-tourist-visa',
        'retirement-visa': 'thailand-retirement-visa',
        services: 'services-and-rates',
        terms: 'terms-and-conditions'
      },
      de: {
        dtv: 'thailand-dtv-visum',
        'tourist-visa': 'thailand-touristenvisum',
        'retirement-visa': 'thailand-ruhestandsvisum',
        services: 'leistungen-und-preise',
        contact: 'kontakt',
        terms: 'allgemeine-geschaeftsbedingungen'
      },
      es: {
        dtv: 'visa-dtv-tailandia',
        'tourist-visa': 'visa-turista-tailandia',
        'retirement-visa': 'visa-jubilacion-tailandia',
        services: 'servicios-y-tarifas',
        contact: 'contacto',
        faq: 'preguntas-frecuentes',
        terms: 'terminos-y-condiciones'
      },
      it: {
        dtv: 'visto-dtv-thailandia',
        'tourist-visa': 'visto-turistico-thailandia',
        'retirement-visa': 'visto-pensionati-thailandia',
        services: 'servizi-e-tariffe',
        contact: 'contatti',
        faq: 'domande-frequenti',
        terms: 'termini-e-condizioni'
      },
      th: {
        dtv: 'visa-dtv-thailand',
        'tourist-visa': 'วีซ่าท่องเที่ยว',
        'retirement-visa': 'วีซ่าเกษียณอายุ',
        services: 'บริการและราคา',
        contact: 'ติดต่อเรา',
        faq: 'คำถามที่พบบ่อย',
        terms: 'ข้อกำหนดและเงื่อนไข'
      },
      ru: {
        dtv: 'виза-dtv-таиланд',
        'tourist-visa': 'туристическая-виза',
        'retirement-visa': 'пенсионная-виза',
        services: 'услуги-и-цены',
        contact: 'контакты',
        faq: 'вопросы-и-ответы',
        terms: 'правила-и-условия'
      },
      zh: {
        dtv: 'dtv-签证',
        'tourist-visa': '旅游签证',
        'retirement-visa': '退休签证',
        services: '服务与价格',
        contact: '联系我们',
        faq: '常见问题',
        terms: '条款与条件'
      },
      ja: {
        dtv: 'dtvビザ',
        'tourist-visa': '観光ビザ',
        'retirement-visa': '退職者ビザ',
        services: 'サービスと料金',
        contact: 'お問い合わせ',
        faq: 'よくある質問',
        terms: '利用規約'
      },
      ko: {
        dtv: 'dtv-비자',
        'tourist-visa': '관광-비자',
        'retirement-visa': '은퇴-비자',
        services: '서비스-및-요금',
        contact: '문의하기',
        faq: '자주-묻는-질문',
        terms: '이용-약관'
      },
      ar: {
        dtv: 'تأشيرة-dtv',
        'tourist-visa': 'تأشيرة-سياحية',
        'retirement-visa': 'تأشيرة-تقاعد',
        services: 'الخدمات-والأسعار',
        contact: 'اتصل-بنا',
        faq: 'الأسئلة-الشائعة',
        terms: 'الشروط-والأحكام'
      }
    };

    const rewrites: any[] = [];

    Object.entries(slugMap).forEach(([lang, slugs]) => {
      Object.entries(slugs).forEach(([internal, translated]) => {
        rewrites.push({
          source: `/${lang}/${translated}`,
          destination: `/${lang}/${internal}`,
        });
      });
    });

    return rewrites;
  },
};

export default nextConfig;
