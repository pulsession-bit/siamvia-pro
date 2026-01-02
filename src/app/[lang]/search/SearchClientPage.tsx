'use client';

import React, { useState, useMemo } from 'react';
import {
    Search,
    Globe,
    Briefcase,
    Palmtree,
    UserCheck,
    GraduationCap,
    Heart,
    Crown,
    Info,
    ChevronRight,
    X,
    Phone,
    Mail,
    MapPin
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext'; // To verify if we sync language or keep internal

// --- I KEEP YOUR INTERNAL TRANSLATIONS & DATA AS IS FOR NOW ---
// We can sync them with the global context later if requested.

type Language = 'fr' | 'en' | 'th' | 'zh' | 'ja' | 'de' | 'es' | 'it' | 'ru' | 'ko' | 'ar';

const I18N: Record<string, any> = {
    fr: {
        title: "Expertise Visa Thaïlande",
        subtitle: "Solutions simplifiées pour votre séjour au Pays du Sourire",
        searchPlaceholder: "Rechercher un visa (ex: Retraite, DTV, LTR...)",
        allVisas: "Tous les Visas",
        categories: {
            work: "Travail & Business",
            tourism: "Tourisme",
            longterm: "Long Terme (LTR)",
            family: "Famille & Mariage",
            education: "Éducation",
            privilege: "Privilège Elite"
        },
        details: "Voir les détails",
        eligibility: "Éligibilité",
        duration: "Durée",
        requirements: "Documents requis",
        contactUs: "Nous contacter",
        footerText: "SiamVisaPro - Votre partenaire de confiance pour l'expatriation en Thaïlande."
    },
    en: {
        title: "Thai Visa Expertise",
        subtitle: "Simplified solutions for your stay in the Land of Smiles",
        searchPlaceholder: "Search for a visa (e.g., Retirement, DTV, LTR...)",
        allVisas: "All Visas",
        categories: {
            work: "Work & Business",
            tourism: "Tourism",
            longterm: "Long Term (LTR)",
            family: "Family & Marriage",
            education: "Education",
            privilege: "Privilege Elite"
        },
        details: "View Details",
        eligibility: "Eligibility",
        duration: "Duration",
        requirements: "Requirements",
        contactUs: "Contact Us",
        footerText: "SiamVisaPro - Your trusted partner for Thailand expatriation."
    },
    de: {
        title: "Thailand Visum Expertise",
        subtitle: "Vereinfachte Lösungen für Ihren Aufenthalt im Land des Lächelns",
        searchPlaceholder: "Visum suchen (z.B. Ruhestand, DTV, LTR...)",
        allVisas: "Alle Visa",
        categories: {
            work: "Arbeit & Geschäft",
            tourism: "Tourismus",
            longterm: "Langzeit (LTR)",
            family: "Familie & Ehe",
            education: "Bildung",
            privilege: "Privilege Elite"
        },
        details: "Details ansehen",
        eligibility: "Teilnahmeberechtigung",
        duration: "Dauer",
        requirements: "Anforderungen",
        contactUs: "Kontaktieren Sie uns",
        footerText: "SiamVisaPro - Ihr vertrauenswürdiger Partner für die Auswanderung nach Thailand."
    },
    es: {
        title: "Expertos en Visados para Tailandia",
        subtitle: "Soluciones simplificadas para su estancia en el País de las Sonrisas",
        searchPlaceholder: "Buscar un visado (ej: Jubilación, DTV, LTR...)",
        allVisas: "Todos los Visados",
        categories: {
            work: "Trabajo y Negocios",
            tourism: "Turismo",
            longterm: "Largo Plazo (LTR)",
            family: "Familia y Matrimonio",
            education: "Educación",
            privilege: "Privilegio Elite"
        },
        details: "Ver Detalles",
        eligibility: "Elegibilidad",
        duration: "Duración",
        requirements: "Requisitos",
        contactUs: "Contáctenos",
        footerText: "SiamVisaPro - Su socio de confianza para la expatriación a Tailandia."
    },
    it: {
        title: "Esperti in Visti per la Thailandia",
        subtitle: "Soluzioni semplificate per il tuo soggiorno nel Paese del Sorriso",
        searchPlaceholder: "Cerca un visto (es: Pensionati, DTV, LTR...)",
        allVisas: "Tutti i Visti",
        categories: {
            work: "Lavoro & Affari",
            tourism: "Turismo",
            longterm: "Lungo Termine (LTR)",
            family: "Famiglia & Matrimonio",
            education: "Istruzione",
            privilege: "Privilege Elite"
        },
        details: "Vedi Dettagli",
        eligibility: "Idoneità",
        duration: "Durata",
        requirements: "Requisiti",
        contactUs: "Contattaci",
        footerText: "SiamVisaPro - Il tuo partner di fiducia per l'espatrio in Thailandia."
    },
    th: {
        title: "ผู้เชี่ยวชาญด้านวีซ่าไทย",
        subtitle: "โซลูชันที่ง่ายขึ้นสำหรับการพำนักของคุณในดินแดนแห่งรอยยิ้ม",
        searchPlaceholder: "ค้นหาวีซ่า (เช่น เกษียณอายุ, DTV, LTR...)",
        allVisas: "วีซ่าทั้งหมด",
        categories: {
            work: "ทำงานและธุรกิจ",
            tourism: "การท่องเที่ยว",
            longterm: "พำนักระยะยาว (LTR)",
            family: "ครอบครัวและการแต่งงาน",
            education: "การศึกษา",
            privilege: "สิทธิพิเศษอีลิท"
        },
        details: "ดูรายละเอียด",
        eligibility: "คุณสมบัติ",
        duration: "ระยะเวลา",
        requirements: "เอกสารที่ต้องใช้",
        contactUs: "ติดต่อเรา",
        footerText: "SiamVisaPro - พันธมิตรที่คุณไว้วางใจในการย้ายถิ่นฐานสู่ประเทศไทย"
    },
    zh: {
        title: "泰国签证专家",
        subtitle: "为您在微笑之国的居留提供简化方案",
        searchPlaceholder: "搜索签证（如：退休、DTV、LTR...）",
        allVisas: "所有签证",
        categories: {
            work: "工作与商务",
            tourism: "旅游",
            longterm: "长期居留 (LTR)",
            family: "家庭与婚姻",
            education: "教育",
            privilege: "精英特权"
        },
        details: "查看详情",
        eligibility: "申请条件",
        duration: "有效期",
        requirements: "所需材料",
        contactUs: "联系我们",
        footerText: "SiamVisaPro - 您在泰国定居的得力伙伴。"
    },
    ja: {
        title: "タイビザ専門サービス",
        subtitle: "「微笑みの国」での滞在をサポートする最適なソリューション",
        searchPlaceholder: "ビザを検索 (例: リタイアメント, DTV, LTR...)",
        allVisas: "すべてのビザ",
        categories: {
            work: "就労・ビジネス",
            tourism: "観光",
            longterm: "長期滞在 (LTR)",
            family: "家族・結婚",
            education: "教育",
            privilege: "エリート特典"
        },
        details: "詳細を見る",
        eligibility: "対象者",
        duration: "期間",
        requirements: "必要書類",
        contactUs: "お問い合わせ",
        footerText: "SiamVisaPro - タイ移住の信頼できるパートナー。"
    },
    ru: {
        title: "Экспертиза по визам в Таиланд",
        subtitle: "Упрощенные решения для вашего пребывания в Стране Улыбок",
        searchPlaceholder: "Поиск визы (например: Пенсионная, DTV, LTR...)",
        allVisas: "Все визы",
        categories: {
            work: "Работа и Бизнес",
            tourism: "Туризм",
            longterm: "Долгосрочные (LTR)",
            family: "Семья и Брак",
            education: "Образование",
            privilege: "Привилегия Elite"
        },
        details: "Подробнее",
        eligibility: "Критерии",
        duration: "Срок действия",
        requirements: "Требования",
        contactUs: "Связаться с нами",
        footerText: "SiamVisaPro - Ваш надежный партнер для переезда в Таиланд."
    },
    ko: {
        title: "태국 비자 전문가",
        subtitle: "미소의 나라에서의 체류를 위한 간편한 솔루션",
        searchPlaceholder: "비자 검색 (예: 은퇴, DTV, LTR...)",
        allVisas: "모든 비자",
        categories: {
            work: "취업 및 비즈니스",
            tourism: "관광",
            longterm: "장기 체류 (LTR)",
            family: "가족 및 결혼",
            education: "교육",
            privilege: "엘리트 프리빌리지"
        },
        details: "상세 보기",
        eligibility: "자격 요건",
        duration: "체류 기간",
        requirements: "필요 서류",
        contactUs: "문의하기",
        footerText: "SiamVisaPro - 태국 이주를 위한 신뢰할 수 있는 파트너."
    },
    ar: {
        title: "خبرة تأشيرة تايلاند",
        subtitle: "حلول مبسطة لإقامتك في بلد الابتسامات",
        searchPlaceholder: "ابحث عن تأشيرة (مثال: التقاعد، DTV، LTR...)",
        allVisas: "جميع التأشيرات",
        categories: {
            work: "العمل والأعمال",
            tourism: "السياحة",
            longterm: "طويلة الأجل (LTR)",
            family: "الأسرة والزواج",
            education: "التعليم",
            privilege: "امتياز النخبة"
        },
        details: "عرض التفاصيل",
        eligibility: "الأهلية",
        duration: "المدة",
        requirements: "المتطلبات",
        contactUs: "اتصل بنا",
        footerText: "SiamVisaPro - شريكك الموثوق للإقامة في تايلاند."
    }
};

const CATEGORY_ICONS: Record<string, any> = {
    work: Briefcase,
    tourism: Palmtree,
    longterm: UserCheck,
    family: Heart,
    education: GraduationCap,
    privilege: Crown
};

// --- Visa Data (30 Items) ---
const VISAS_DATA: any[] = [
    // LTR Category
    { id: 'ltr-wgc', category: 'longterm', name: { fr: 'LTR - Citoyen Mondial Riche', en: 'LTR - Wealthy Global Citizen', th: 'LTR - ผู้มีความมั่งคั่งสูง', zh: 'LTR - 全球富裕公民', ja: 'LTR - 裕福なグローバル市民', de: 'LTR - Wohlhabender Weltbürger', es: 'LTR - Ciudadano Global Acaudalado', it: 'LTR - Cittadino Globale Facoltoso', ru: 'LTR - Состоятельный гражданин мира', ko: 'LTR - 부유한 글로벌 시민', ar: 'LTR - مواطن عالمي ثري' }, duration: '10 Years', price: 'High' },
    { id: 'ltr-wp', category: 'longterm', name: { fr: 'LTR - Retraité Riche', en: 'LTR - Wealthy Pensioner', th: 'LTR - ผู้เกษียณอายุที่มีความมั่งคั่ง', zh: 'LTR - 富裕退休者', ja: 'LTR - 裕福な年金受給者', de: 'LTR - Wohlhabender Rentner', es: 'LTR - Pensionista Acaudalado', it: 'LTR - Pensionato Facoltoso', ru: 'LTR - Состоятельный пенсионер', ko: 'LTR - 부유한 은퇴자', ar: 'LTR - متقاعد ثري' }, duration: '10 Years', price: 'High' },
    { id: 'ltr-wft', category: 'longterm', name: { fr: 'LTR - Travail à distance', en: 'LTR - Work-from-Thailand', th: 'LTR - ผู้ทำงานจากประเทศไทย', zh: 'LTR - 在泰远程办公人士', ja: 'LTR - タイでのリモートワーク者', de: 'LTR - Arbeit aus Thailand', es: 'LTR - Trabajo desde Tailandia', it: 'LTR - Lavoro dalla Thailandia', ru: 'LTR - Работа из Таиланда', ko: 'LTR - 태국 내 원격 근무', ar: 'LTR - العمل من تايلاند' }, duration: '10 Years', price: 'High' },
    { id: 'ltr-hsp', category: 'longterm', name: { fr: 'LTR - Professionnel Hautement Qualifié', en: 'LTR - Highly Skilled Professional', th: 'LTR - ผู้เชี่ยวชาญทักษะสูง', zh: 'LTR - 高技能专业人士', ja: 'LTR - 高度専門職', de: 'LTR - Hochqualifizierte Fachkraft', es: 'LTR - Profesional Altamente Cualificado', it: 'LTR - Professionista Altamente Qualificato', ru: 'LTR - Высококвалифицированный специалист', ko: 'LTR - 고숙련 전문가', ar: 'LTR - محترف ذو مهارات عالية' }, duration: '10 Years', price: 'High' },

    // Tourism
    { id: 'dtv', category: 'tourism', name: { fr: 'Destination Thailand Visa (DTV)', en: 'Destination Thailand Visa (DTV)', th: 'วีซ่า DTV (Destination Thailand)', zh: '目的地泰国签证 (DTV)', ja: 'デスティネーション・タイ・ビザ (DTV)', de: 'Destination Thailand Visum (DTV)', es: 'Visado Destino Tailandia (DTV)', it: 'Visto Destinazione Thailandia (DTV)', ru: 'Виза Destination Thailand (DTV)', ko: '데스티네이션 타일랜드 비자 (DTV)', ar: 'تأشيرة وجهة تايلاند (DTV)' }, duration: '5 Years', price: 'Medium' },
    { id: 'setv', category: 'tourism', name: { fr: 'Visa Touristique (SETV)', en: 'Tourist Visa (SETV)', th: 'วีซ่าท่องเที่ยว (SETV)', zh: '旅游签证 (SETV)', ja: '観光ビザ (SETV)', de: 'Touristenvisum (SETV)', es: 'Visado de Turista (SETV)', it: 'Visto Turistico (SETV)', ru: 'Туристическая виза (SETV)', ko: '관광 비자 (SETV)', ar: 'تأشيرة سياحية (SETV)' }, duration: '60 Days', price: 'Low' },
    { id: 'metv', category: 'tourism', name: { fr: 'Visa Touristique Entrées Multiples', en: 'Multiple Entry Tourist Visa', th: 'วีซ่าท่องเที่ยวแบบเข้าได้หลายครั้ง', zh: '多次往返旅游签证', ja: 'マルチプル観光ビザ', de: 'Touristenvisum für mehrfache Einreise', es: 'Visado de Turista de Entrada Múltiple', it: 'Visto Turistico Ingresso Multiplo', ru: 'Многократная туристическая виза', ko: '복수 입국 관광 비자', ar: 'تأشيرة سياحية متعددة الدخول' }, duration: '6 Months', price: 'Medium' },
    { id: 'voa', category: 'tourism', name: { fr: 'Visa à l\'arrivée (VoA)', en: 'Visa on Arrival (VoA)', th: 'วีซ่าหน้าด่าน (VoA)', zh: '落地签证 (VoA)', ja: 'アライバルビザ (VoA)', de: 'Visum bei Ankunft (VoA)', es: 'Visado a la Llegada (VoA)', it: 'Visto all\'Arrivo (VoA)', ru: 'Виза по прибытии (VoA)', ko: '도착 비자 (VoA)', ar: 'تأشيرة عند الوصول (VoA)' }, duration: '15 Days', price: 'Low' },

    // Work & Business
    { id: 'non-b', category: 'work', name: { fr: 'Visa Business Non-B', en: 'Business Visa (Non-B)', th: 'วีซ่าธุรกิจ (Non-B)', zh: '商务签证 (Non-B)', ja: 'ビジネスビザ (Non-B)', de: 'Geschäftsvisum (Non-B)', es: 'Visado de Negocios (Non-B)', it: 'Visto d\'Affari (Non-B)', ru: 'Бизнес-виза (Non-B)', ko: '비즈니스 비자 (Non-B)', ar: 'تأشيرة عمل (Non-B)' }, duration: '1 Year', price: 'Medium' },
    { id: 'smart-t', category: 'work', name: { fr: 'Smart Visa T (Talent)', en: 'Smart Visa T (Talent)', th: 'สมาร์ทวีซ่า T (ทักษะสูง)', zh: '智能签证 T (人才)', ja: 'スマートビザ T (タレント)', de: 'Smart Visa T (Talent)', es: 'Smart Visa T (Talento)', it: 'Smart Visa T (Talento)', ru: 'Smart Visa T (Талант)', ko: '스마트 비자 T (인재)', ar: 'التأشيرة الذكية T (موهبة)' }, duration: '4 Years', price: 'Medium' },
    { id: 'smart-e', category: 'work', name: { fr: 'Smart Visa E (Exécutif)', en: 'Smart Visa E (Executive)', th: 'สมาร์ทวีซ่า E (ผู้บริหาร)', zh: '智能签证 E (高管)', ja: 'スマートビザ E (エグゼクティブ)', de: 'Smart Visa E (Führungskraft)', es: 'Smart Visa E (Ejecutivo)', it: 'Smart Visa E (Esecutivo)', ru: 'Smart Visa E (Руководитель)', ko: '스마트 비자 E (임원)', ar: 'التأشيرة الذكية E (تنفيذي)' }, duration: '4 Years', price: 'Medium' },
    { id: 'smart-i', category: 'work', name: { fr: 'Smart Visa I (Investisseur)', en: 'Smart Visa I (Investor)', th: 'สมาร์ทวีซ่า I (นักลงทุน)', zh: '智能签证 I (投资者)', ja: 'スマートビザ I (投資家)', de: 'Smart Visa I (Investor)', es: 'Smart Visa I (Inversor)', it: 'Smart Visa I (Investitore)', ru: 'Smart Visa I (Инвестор)', ko: '스마트 비자 I (투자자)', ar: 'التأشيرة الذكية I (مستثمر)' }, duration: '4 Years', price: 'High' },

    // Retirement
    { id: 'non-o-ret', category: 'longterm', name: { fr: 'Retraite Non-O', en: 'Retirement (Non-O)', th: 'วีซ่าเกษียณอายุ (Non-O)', zh: '退休签证 (Non-O)', ja: 'リタイアメント (Non-O)', de: 'Ruhestand (Non-O)', es: 'Jubilación (Non-O)', it: 'Pensionati (Non-O)', ru: 'Пенсионная (Non-O)', ko: '은퇴 (Non-O)', ar: 'تقاعد (Non-O)' }, duration: '1 Year', price: 'Low' },
    { id: 'non-oa-ret', category: 'longterm', name: { fr: 'Retraite Long Séjour Non-OA', en: 'Retirement (Non-OA)', th: 'วีซ่าเกษียณอายุ (Non-OA)', zh: '长期退休签证 (Non-OA)', ja: 'ロングステイ (Non-OA)', de: 'Langzeit-Ruhestand (Non-OA)', es: 'Jubilación Larga Estancia (Non-OA)', it: 'Pensionati Lungo Soggiorno (Non-OA)', ru: 'Длительная пенсионная (Non-OA)', ko: '장기 은퇴 (Non-OA)', ar: 'تقاعد طويل الأمد (Non-OA)' }, duration: '1 Year', price: 'Medium' },
    { id: 'non-ox-ret', category: 'longterm', name: { fr: 'Retraite 10 Ans Non-OX', en: 'Retirement 10 Years (Non-OX)', th: 'วีซ่าเกษียณอายุ 10 ปี (Non-OX)', zh: '10年退休签证 (Non-OX)', ja: '10年リタイアメント (Non-OX)', de: 'Ruhestand 10 Jahre (Non-OX)', es: 'Jubilación 10 Años (Non-OX)', it: 'Pensionati 10 Anni (Non-OX)', ru: 'Пенсионная 10 лет (Non-OX)', ko: '10년 은퇴 (Non-OX)', ar: 'تقاعد 10 سنوات (Non-OX)' }, duration: '10 Years', price: 'High' },

    // Family
    { id: 'non-o-mar', category: 'family', name: { fr: 'Mariage (Non-O)', en: 'Marriage Visa (Non-O)', th: 'วีซ่าแต่งงาน (Non-O)', zh: '婚姻签证 (Non-O)', ja: '結婚ビザ (Non-O)', de: 'Heiratsvisum (Non-O)', es: 'Visado de Matrimonio (Non-O)', it: 'Visto Matrimoniale (Non-O)', ru: 'Виза по браку (Non-O)', ko: '결혼 비자 (Non-O)', ar: 'تأشيرة الزواج (Non-O)' }, duration: '1 Year', price: 'Low' },
    { id: 'non-o-dep', category: 'family', name: { fr: 'Dépendant (Non-O)', en: 'Dependent Visa (Non-O)', th: 'วีซ่าผู้ติดตาม (Non-O)', zh: '随行家属签证 (Non-O)', ja: '家族帯同ビザ (Non-O)', de: 'Angehörigenvisum (Non-O)', es: 'Visado de Dependiente (Non-O)', it: 'Visto per Familiari (Non-O)', ru: 'Виза иждивенца (Non-O)', ko: '동반 비자 (Non-O)', ar: 'تأشيرة التابعين (Non-O)' }, duration: '1 Year', price: 'Low' },

    // Education
    { id: 'non-ed-uni', category: 'education', name: { fr: 'Étudiant Université (Non-ED)', en: 'University Student (Non-ED)', th: 'วีซ่านักศึกษา (Non-ED)', zh: '留学签证 (Non-ED)', ja: '大学留学ビザ (Non-ED)', de: 'Universitätsstudent (Non-ED)', es: 'Estudiante Universitario (Non-ED)', it: 'Studente Universitario (Non-ED)', ru: 'Студенческая виза (Non-ED)', ko: '대학생 (Non-ED)', ar: 'طالب جامعي (Non-ED)' }, duration: '1 Year', price: 'Medium' },
    { id: 'non-ed-lang', category: 'education', name: { fr: 'École de Langue (Non-ED)', en: 'Language School (Non-ED)', th: 'วีซ่าเรียนภาษา (Non-ED)', zh: '语言学校签证 (Non-ED)', ja: '語学学校ビザ (Non-ED)', de: 'Sprachschule (Non-ED)', es: 'Escuela de Idiomas (Non-ED)', it: 'Scuola di Lingua (Non-ED)', ru: 'Языковая школа (Non-ED)', ko: '어학원 (Non-ED)', ar: 'مدرسة لغات (Non-ED)' }, duration: '6-12 Months', price: 'Low' },
    { id: 'non-ed-muay', category: 'education', name: { fr: 'Muay Thai / Stage (Non-ED)', en: 'Muay Thai / Training (Non-ED)', th: 'วีซ่าฝึกมวยไทย (Non-ED)', zh: '泰拳培训签证 (Non-ED)', ja: 'ムエタイ修業ビザ (Non-ED)', de: 'Muay Thai / Training (Non-ED)', es: 'Muay Thai / Entrenamiento (Non-ED)', it: 'Muay Thai / Allenamento (Non-ED)', ru: 'Муай Тай / Тренировка (Non-ED)', ko: '무에타이 / 훈련 (Non-ED)', ar: 'مواى تاي / تدريب (Non-ED)' }, duration: '6-12 Months', price: 'Low' },

    // Privilege / Elite
    { id: 'elite-gold', category: 'privilege', name: { fr: 'Thailand Privilege - Gold', en: 'Thailand Privilege - Gold', th: 'ไทยแลนด์ พริวิเลจ - โกลด์', zh: '泰国精英签 - 金卡', ja: 'タイ・プリビレッジ - ゴールド', de: 'Thailand Privilege - Gold', es: 'Thailand Privilege - Oro', it: 'Thailand Privilege - Oro', ru: 'Thailand Privilege - Золото', ko: '타일랜드 프리빌리지 - 골드', ar: 'امتياز تايلاند - ذهبي' }, duration: '5 Years', price: 'Premium' },
    { id: 'elite-plat', category: 'privilege', name: { fr: 'Thailand Privilege - Platinum', en: 'Thailand Privilege - Platinum', th: 'ไทยแลนด์ พริวิเลจ - แพลทินัม', zh: '泰国精英签 - 白金卡', ja: 'タイ・プリビレッジ - プラチナ', de: 'Thailand Privilege - Platin', es: 'Thailand Privilege - Platino', it: 'Thailand Privilege - Platino', ru: 'Thailand Privilege - Платина', ko: '타일랜드 프리빌리지 - 플래티넘', ar: 'امتياز تايلاند - بلاتيني' }, duration: '10 Years', price: 'Premium' },
    { id: 'elite-diam', category: 'privilege', name: { fr: 'Thailand Privilege - Diamond', en: 'Thailand Privilege - Diamond', th: 'ไทยแลนด์ พริวิเลจ - ไดมอนด์', zh: '泰国精英签 - 钻石卡', ja: 'タイ・プリビレッジ - ダイヤモンド', de: 'Thailand Privilege - Diamant', es: 'Thailand Privilege - Diamante', it: 'Thailand Privilege - Diamante', ru: 'Thailand Privilege - Алмаз', ko: '타일랜드 프리빌리지 - 다이아몬드', ar: 'امتياز تايلاند - ماسي' }, duration: '15 Years', price: 'Premium' },
    { id: 'elite-res', category: 'privilege', name: { fr: 'Thailand Privilege - Reserve', en: 'Thailand Privilege - Reserve', th: 'ไทยแลนด์ พริวิเลจ - รีเซิร์ฟ', zh: '泰国精英签 - 至尊卡', ja: 'タイ・プリビレッジ - リザーブ', de: 'Thailand Privilege - Reserve', es: 'Thailand Privilege - Reserva', it: 'Thailand Privilege - Riserva', ru: 'Thailand Privilege - Резерв', ko: '타일랜드 프리빌리지 - 리저브', ar: 'امتياز تايلاند - حجز' }, duration: '20+ Years', price: 'Premium' },

    // Specialized
    { id: 'non-m', category: 'work', name: { fr: 'Visa Média / Journaliste', en: 'Media / Journalist Visa', th: 'วีซ่าสื่อมวลชน', zh: '媒体/记者签证', ja: 'メディア・記者ビザ', de: 'Medien / Journalisten Visum', es: 'Visado de Medios / Periodista', it: 'Visto Media / Giornalista', ru: 'Виза для СМИ / Журналистов', ko: '미디어 / 기자 비자', ar: 'تأشيرة الإعلام / الصحفي' }, duration: '1 Year', price: 'Medium' },
    { id: 'non-f', category: 'work', name: { fr: 'Visa Officiel (Non-F)', en: 'Official Visa (Non-F)', th: 'วีซ่าข้าราชการ', zh: '官方签证 (Non-F)', ja: '公用ビザ (Non-F)', de: 'Offizielles Visum (Non-F)', es: 'Visado Oficial (Non-F)', it: 'Visto Ufficiale (Non-F)', ru: 'Официальная виза (Non-F)', ko: '공무 비자 (Non-F)', ar: 'تأشيرة رسمية (Non-F)' }, duration: 'Variable', price: 'Low' },
    { id: 'non-r', category: 'education', name: { fr: 'Visa Religieux (Non-R)', en: 'Religious Visa (Non-R)', th: 'วีซ่าทางศาสนา', zh: '宗教签证 (Non-R)', ja: '宗教ビザ (Non-R)', de: 'Religiöses Visum (Non-R)', es: 'Visado Religioso (Non-R)', it: 'Visto Religioso (Non-R)', ru: 'Религиозная виза (Non-R)', ko: '종교 비자 (Non-R)', ar: 'تأشيرة دينية (Non-R)' }, duration: '1 Year', price: 'Low' },
    { id: 'non-rs', category: 'work', name: { fr: 'Recherche Scientifique', en: 'Scientific Research', th: 'วีซ่าวิจัยวิทยาศาสตร์', zh: '科学研究签证', ja: '科学研究ビザ', de: 'Wissenschaftliche Forschung', es: 'Investigación Científica', it: 'Ricerca Scientifica', ru: 'Научные исследования', ko: '과학 연구', ar: 'البحث العلمي' }, duration: '1 Year', price: 'Medium' },
    { id: 'non-o-vol', category: 'work', name: { fr: 'Visa Volontaire', en: 'Volunteer Visa', th: 'วีซ่าอาสาสมัคร', zh: '志愿者签证', ja: 'ボランティアビザ', de: 'Freiwilligenvisum', es: 'Visado de Voluntariado', it: 'Visto Volontariato', ru: 'Волонтерская виза', ko: '자원봉사 비자', ar: 'تأشيرة التطوع' }, duration: '1 Year', price: 'Low' },
    { id: 'non-mt', category: 'tourism', name: { fr: 'Traitement Médical', en: 'Medical Treatment', th: 'วีซ่ารักษาพยาบาล', zh: '医疗签证', ja: '医療ビザ', de: 'Medizinische Behandlung', es: 'Tratamiento Médico', it: 'Trattamento Medico', ru: 'Медицинское лечение', ko: '의료 치료', ar: 'علاج طبي' }, duration: '90 Days', price: 'Medium' }
];

const SearchClientPage: React.FC = () => {
    // We try to sync with global lang, but fallback to FR if not supported by this widget
    const { language: globalLang } = useLanguage();
    const [lang, setLang] = useState<Language>(
        ['fr', 'en', 'th', 'zh', 'ja', 'de', 'es', 'it', 'ru', 'ko', 'ar'].includes(globalLang) ? (globalLang as Language) : 'fr'
    );

    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [selectedVisa, setSelectedVisa] = useState<any | null>(null);

    const t = I18N[lang];

    const filteredVisas = useMemo(() => {
        return VISAS_DATA.filter(visa => {
            const matchesSearch = visa.name[lang].toLowerCase().includes(search.toLowerCase());
            const matchesCategory = activeCategory ? visa.category === activeCategory : true;
            return matchesSearch && matchesCategory;
        });
    }, [lang, search, activeCategory]);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">

            {/* NO HEADER - Handled by Landing Layout */}

            {/* Hero Widget Area */}
            <section className="bg-gradient-to-r from-blue-900 to-red-900 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 opacity-10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">{t.title}</h2>
                    <p className="text-xl opacity-90 mb-10 font-light max-w-2xl mx-auto">{t.subtitle}</p>

                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder={t.searchPlaceholder}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-gray-900 shadow-2xl focus:ring-4 focus:ring-amber-500/20 focus:outline-none text-lg"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="bg-white border-b overflow-x-auto whitespace-nowrap scrollbar-hide">
                <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-start md:justify-center gap-4">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === null ? 'bg-amber-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        {t.allVisas}
                    </button>
                    {Object.entries(t.categories).map(([key, label]) => {
                        const Icon = CATEGORY_ICONS[key];
                        return (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(key)}
                                className={`px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${activeCategory === key ? 'bg-amber-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >
                                {Icon && <Icon size={16} />}
                                {label as string}
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* Visa Grid */}
            <main className="flex-1 max-w-7xl mx-auto px-4 py-16 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredVisas.map((visa) => {
                        const Icon = CATEGORY_ICONS[visa.category];
                        return (
                            <div
                                key={visa.id}
                                onClick={() => setSelectedVisa(visa)}
                                className="visa-card bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
                            >
                                <div>
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${activeCategory === visa.category ? 'bg-amber-500 text-white' : 'bg-blue-50 text-blue-900 group-hover:bg-amber-500 group-hover:text-white transition-colors'}`}>
                                        {Icon ? <Icon size={24} /> : <Info size={24} />}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-amber-600 transition-colors">{visa.name[lang]}</h3>
                                    <div className="flex gap-2 items-center text-xs font-semibold text-gray-400 mb-4">
                                        <span className="px-2 py-0.5 bg-gray-100 rounded">{visa.duration}</span>
                                        <span className="px-2 py-0.5 bg-gray-100 rounded uppercase">{visa.price} Cost</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-blue-900 font-bold text-sm">{t.details}</span>
                                    <ChevronRight size={18} className="text-gray-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filteredVisas.length === 0 && (
                    <div className="text-center py-20">
                        <Search size={48} className="mx-auto text-gray-200 mb-4" />
                        <p className="text-gray-400 font-medium">No visas found for your criteria.</p>
                    </div>
                )}
            </main>

            {/* Visa Detail Modal */}
            {selectedVisa && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" style={{ zIndex: 9999 }}>
                    <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-slate-200">
                        <div className="bg-slate-900 p-8 text-white relative">
                            <button
                                onClick={() => setSelectedVisa(null)}
                                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                                style={{ cursor: 'pointer', zIndex: 10 }}
                            >
                                <X size={24} />
                            </button>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-amber-500 p-3 rounded-2xl">
                                    {React.createElement(CATEGORY_ICONS[selectedVisa.category] || Info, { size: 32 })}
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest opacity-70">Visa Category: {selectedVisa.category}</p>
                                    <h3 className="text-2xl font-bold">{selectedVisa.name[lang]}</h3>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">{t.duration}</p>
                                    <p className="text-lg font-bold text-blue-900">{selectedVisa.duration}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Estimated Cost</p>
                                    <p className="text-lg font-bold text-blue-900">{selectedVisa.price}</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-3">
                                    <UserCheck size={18} className="text-amber-500" />
                                    {t.eligibility}
                                </h4>
                                <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside ml-2">
                                    <li>Valid passport (min. 6 months remaining)</li>
                                    <li>Clean criminal record certificate</li>
                                    <li>Proof of sufficient funds (depends on sub-type)</li>
                                    <li>Proof of local address / booking</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-3">
                                    <Briefcase size={18} className="text-amber-500" />
                                    {t.requirements}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Application process typically takes 5-15 business days depending on the embassy or immigration office.
                                    SiamVisaPro provides full support for document preparation, translation, and notarization.
                                </p>
                            </div>

                            <div className="pt-4">
                                <button className="w-full bg-amber-500 text-slate-900 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all">
                                    {t.contactUs}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* NO FOOTER - Handled by Landing Layout */}
        </div>
    );
};

export default SearchClientPage;
