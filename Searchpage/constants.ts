import { ContentStore, Language, VisaType } from './types';

export const SUPPORTED_LANGUAGES: Language[] = ['fr', 'en', 'de', 'cn', 'ru'];

// Helper to simulate specific visa data across languages
const getVisaData = (lang: Language): VisaType[] => {
  const isFr = lang === 'fr';
  
  return [
    {
      slug: 'visa-ltr',
      name: isFr ? 'Visa LTR (10 Ans)' : 'LTR Visa (10 Years)',
      shortDesc: isFr 
        ? "La résidence ultime pour les hauts revenus et investisseurs." 
        : "The ultimate residency for high-income earners and investors.",
      heroImage: "https://picsum.photos/id/1031/1920/1080",
      metaTitle: isFr ? "Visa LTR Thaïlande - Résidence Longue Durée" : "LTR Visa Thailand - Long Term Residency",
      metaDesc: "Official Guide for Thailand LTR Visa.",
      keywords: ["LTR Visa", "Thailand Residency", "Tax Incentive"],
      features: [
        { icon: 'shield', title: isFr ? '10 Ans de Validité' : '10 Years Validity', description: isFr ? 'Une sérénité totale avec une résidence renouvelable.' : 'Total peace of mind with renewable residency.' },
        { icon: 'trending', title: isFr ? 'Fiscalité Optimisée' : 'Tax Optimization', description: isFr ? "Taux fixe d'impôt sur le revenu de 17%." : "Fixed 17% personal income tax rate." },
        { icon: 'rocket', title: 'Fast-Track Services', description: isFr ? 'Accès au guichet unique (One Stop Service).' : 'Access to One Stop Service center.' }
      ],
      profiles: [
        { title: isFr ? 'Wealthy Global Citizens' : 'Wealthy Global Citizens' },
        { title: isFr ? 'Wealthy Pensioners' : 'Wealthy Pensioners' },
        { title: isFr ? 'Work-from-Thailand' : 'Work-from-Thailand' },
        { title: isFr ? 'Highly Skilled Professionals' : 'Highly Skilled Professionals' }
      ]
    },
    {
      slug: 'smart-visa',
      name: 'Smart Visa',
      shortDesc: isFr 
        ? "Accélérez votre carrière dans les secteurs stratégiques." 
        : "Accelerate your career in strategic sectors.",
      heroImage: "https://picsum.photos/id/3/1920/1080",
      metaTitle: "Smart Visa Thailand - Tech & Startup",
      metaDesc: "Visa for experts and investors in S-Curve industries.",
      keywords: ["Smart Visa", "Tech Visa", "BOI Thailand"],
      features: [
        { icon: 'document', title: 'No Work Permit', description: isFr ? 'Travaillez légalement sans permis séparé.' : 'Work legally without a separate permit.' },
        { icon: 'clock', title: isFr ? 'Rapport Annuel' : 'Annual Reporting', description: isFr ? 'Remplacez le rapport de 90 jours.' : 'Replace the 90-day reporting requirement.' },
        { icon: 'rocket', title: 'Accompagnement BOI', description: isFr ? 'Soutenu par le Board of Investment.' : 'Supported by the Board of Investment.' }
      ],
      profiles: [
        { title: 'Talents' },
        { title: 'Investors' },
        { title: 'Executives' },
        { title: 'Startups' }
      ]
    },
    {
      slug: 'retirement-visa',
      name: isFr ? 'Visa Retraité (OA/OX)' : 'Retirement Visa (OA/OX)',
      shortDesc: isFr 
        ? "Profitez de votre retraite au pays du sourire." 
        : "Enjoy your retirement in the land of smiles.",
      heroImage: "https://picsum.photos/id/106/1920/1080",
      metaTitle: "Retirement Visa Thailand",
      metaDesc: "Complete guide for OA and OX visas.",
      keywords: ["Retirement Visa", "OA Visa", "Pension"],
      features: [
        { icon: 'shield', title: isFr ? 'Assurance Santé' : 'Health Insurance', description: isFr ? 'Options complètes pour seniors.' : 'Comprehensive options for seniors.' },
        { icon: 'trending', title: isFr ? 'Renouvellement Facile' : 'Easy Renewal', description: isFr ? 'Processus annuel simplifié.' : 'Simplified annual process.' },
        { icon: 'rocket', title: 'Lifestyle', description: isFr ? 'Coût de la vie avantageux.' : 'Advantageous cost of living.' }
      ],
      profiles: [
        { title: '50+ Years Old' },
        { title: 'Pensioners' },
        { title: 'Medical Tourism' }
      ]
    }
  ];
};

export const CONTENT: ContentStore = {
  fr: {
    common: {
      nav: { home: 'Accueil', catalog: 'Catalogue Visas', contact: 'Contact', auditBtn: 'Audit Expert Gratuit' },
      hero: { auditBtn: "Audit d'éligibilité" },
      features: { title: 'Le statut de résident le plus avantageux au monde.' },
      profiles: { title: 'Les Profils Éligibles' },
      form: { title: 'Audit de Dossier Expert', subtitle: 'Réservez votre appel stratégique pour sécuriser votre demande.', date: 'DATE SOUHAITÉE', slot1: 'CRÉNEAU 1 (HEURE)', slot2: 'CRÉNEAU 2 (HEURE)', contactMethod: 'COMMENT VOUS CONTACTER ?', submit: 'Valider ma demande d\'audit' },
      footer: { navigation: 'Navigation', legal: 'Légal', contact: 'Contact' }
    },
    visas: getVisaData('fr')
  },
  en: {
    common: {
      nav: { home: 'Home', catalog: 'Visa Catalog', contact: 'Contact', auditBtn: 'Free Expert Audit' },
      hero: { auditBtn: "Eligibility Audit" },
      features: { title: 'The most advantageous residency status in the world.' },
      profiles: { title: 'Eligible Profiles' },
      form: { title: 'Expert Case Audit', subtitle: 'Book your strategic call to secure your application.', date: 'PREFERRED DATE', slot1: 'SLOT 1 (TIME)', slot2: 'SLOT 2 (TIME)', contactMethod: 'HOW TO CONTACT YOU?', submit: 'Submit Audit Request' },
      footer: { navigation: 'Navigation', legal: 'Legal', contact: 'Contact' }
    },
    visas: getVisaData('en')
  },
  de: {
    common: {
      nav: { home: 'Startseite', catalog: 'Visumkatalog', contact: 'Kontakt', auditBtn: 'Kostenloses Experten-Audit' },
      hero: { auditBtn: "Eignungsprüfung" },
      features: { title: 'Der vorteilhafteste Aufenthaltsstatus der Welt.' },
      profiles: { title: 'Geeignete Profile' },
      form: { title: 'Experten-Fallprüfung', subtitle: 'Buchen Sie Ihren strategischen Anruf.', date: 'WUNSCHDATUM', slot1: 'ZEITFENSTER 1', slot2: 'ZEITFENSTER 2', contactMethod: 'KONTAKTWEG?', submit: 'Anfrage Senden' },
      footer: { navigation: 'Navigation', legal: 'Rechtliches', contact: 'Kontakt' }
    },
    visas: getVisaData('de')
  },
  // Simplified for demo
  cn: {
    common: {
      nav: { home: '首页', catalog: '签证目录', contact: '联系我们', auditBtn: '免费专家审核' },
      hero: { auditBtn: "资格审核" },
      features: { title: '世界上最优惠的居住身份。' },
      profiles: { title: '符合资格的人群' },
      form: { title: '专家案例审核', subtitle: '预约您的战略电话以确保您的申请。', date: '首选日期', slot1: '时间段 1', slot2: '时间段 2', contactMethod: '如何联系您？', submit: '提交审核请求' },
      footer: { navigation: '导航', legal: '法律', contact: '联系' }
    },
    visas: getVisaData('cn')
  },
  ru: {
    common: {
      nav: { home: 'Главная', catalog: 'Каталог Виз', contact: 'Контакты', auditBtn: 'Бесплатный Аудит' },
      hero: { auditBtn: "Проверка права" },
      features: { title: 'Самый выгодный статус резидента в мире.' },
      profiles: { title: 'Подходящие профили' },
      form: { title: 'Экспертный аудит', subtitle: 'Забронируйте стратегический звонок.', date: 'ЖЕЛАЕМАЯ ДАТА', slot1: 'СЛОТ 1', slot2: 'СЛОТ 2', contactMethod: 'КАК СВЯЗАТЬСЯ?', submit: 'Отправить запрос' },
      footer: { navigation: 'Навигация', legal: 'Юридический', contact: 'Контакты' }
    },
    visas: getVisaData('ru')
  }
};