import React, { useState, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
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

// --- Types & Translations ---

type Language = 'fr' | 'en' | 'th' | 'zh' | 'ja';

const I18N = {
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

const VISAS_DATA = [
  // LTR Category
  { id: 'ltr-wgc', category: 'longterm', name: { fr: 'LTR - Citoyen Mondial Riche', en: 'LTR - Wealthy Global Citizen', th: 'LTR - ผู้มีความมั่งคั่งสูง', zh: 'LTR - 全球富裕公民', ja: 'LTR - 裕福なグローバル市民' }, duration: '10 Years', price: 'High' },
  { id: 'ltr-wp', category: 'longterm', name: { fr: 'LTR - Retraité Riche', en: 'LTR - Wealthy Pensioner', th: 'LTR - ผู้เกษียณอายุที่มีความมั่งคั่ง', zh: 'LTR - 富裕退休者', ja: 'LTR - 裕福な年金受給者' }, duration: '10 Years', price: 'High' },
  { id: 'ltr-wft', category: 'longterm', name: { fr: 'LTR - Travail à distance', en: 'LTR - Work-from-Thailand', th: 'LTR - ผู้ทำงานจากประเทศไทย', zh: 'LTR - 在泰远程办公人士', ja: 'LTR - タイでのリモートワーク者' }, duration: '10 Years', price: 'High' },
  { id: 'ltr-hsp', category: 'longterm', name: { fr: 'LTR - Professionnel Hautement Qualifié', en: 'LTR - Highly Skilled Professional', th: 'LTR - ผู้เชี่ยวชาญทักษะสูง', zh: 'LTR - 高技能专业人士', ja: 'LTR - 高度専門職' }, duration: '10 Years', price: 'High' },
  
  // Tourism
  { id: 'dtv', category: 'tourism', name: { fr: 'Destination Thailand Visa (DTV)', en: 'Destination Thailand Visa (DTV)', th: 'วีซ่า DTV (Destination Thailand)', zh: '目的地泰国签证 (DTV)', ja: 'デスティネーション・タイ・ビザ (DTV)' }, duration: '5 Years', price: 'Medium' },
  { id: 'setv', category: 'tourism', name: { fr: 'Visa Touristique (SETV)', en: 'Tourist Visa (SETV)', th: 'วีซ่าท่องเที่ยว (SETV)', zh: '旅游签证 (SETV)', ja: '観光ビザ (SETV)' }, duration: '60 Days', price: 'Low' },
  { id: 'metv', category: 'tourism', name: { fr: 'Visa Touristique Entrées Multiples', en: 'Multiple Entry Tourist Visa', th: 'วีซ่าท่องเที่ยวแบบเข้าได้หลายครั้ง', zh: '多次往返旅游签证', ja: 'マルチプル観光ビザ' }, duration: '6 Months', price: 'Medium' },
  { id: 'voa', category: 'tourism', name: { fr: 'Visa à l\'arrivée (VoA)', en: 'Visa on Arrival (VoA)', th: 'วีซ่าหน้าด่าน (VoA)', zh: '落地签证 (VoA)', ja: 'アライバルビザ (VoA)' }, duration: '15 Days', price: 'Low' },
  
  // Work & Business
  { id: 'non-b', category: 'work', name: { fr: 'Visa Business Non-B', en: 'Business Visa (Non-B)', th: 'วีซ่าธุรกิจ (Non-B)', zh: '商务签证 (Non-B)', ja: 'ビジネスビザ (Non-B)' }, duration: '1 Year', price: 'Medium' },
  { id: 'smart-t', category: 'work', name: { fr: 'Smart Visa T (Talent)', en: 'Smart Visa T (Talent)', th: 'สมาร์ทวีซ่า T (ทักษะสูง)', zh: '智能签证 T (人才)', ja: 'スマートビザ T (タレント)' }, duration: '4 Years', price: 'Medium' },
  { id: 'smart-e', category: 'work', name: { fr: 'Smart Visa E (Exécutif)', en: 'Smart Visa E (Executive)', th: 'สมาร์ทวีซ่า E (ผู้บริหาร)', zh: '智能签证 E (高管)', ja: 'スマートビザ E (エグゼクティブ)' }, duration: '4 Years', price: 'Medium' },
  { id: 'smart-i', category: 'work', name: { fr: 'Smart Visa I (Investisseur)', en: 'Smart Visa I (Investor)', th: 'สมาร์ทวีซ่า I (นักลงทุน)', zh: '智能签证 I (投资者)', ja: 'スマートビザ I (投資家)' }, duration: '4 Years', price: 'High' },
  
  // Retirement
  { id: 'non-o-ret', category: 'longterm', name: { fr: 'Retraite Non-O', en: 'Retirement (Non-O)', th: 'วีซ่าเกษียณอายุ (Non-O)', zh: '退休签证 (Non-O)', ja: 'リタイアメント (Non-O)' }, duration: '1 Year', price: 'Low' },
  { id: 'non-oa-ret', category: 'longterm', name: { fr: 'Retraite Long Séjour Non-OA', en: 'Retirement (Non-OA)', th: 'วีซ่าเกษียณอายุ (Non-OA)', zh: '长期退休签证 (Non-OA)', ja: 'ロングステイ (Non-OA)' }, duration: '1 Year', price: 'Medium' },
  { id: 'non-ox-ret', category: 'longterm', name: { fr: 'Retraite 10 Ans Non-OX', en: 'Retirement 10 Years (Non-OX)', th: 'วีซ่าเกษียณอายุ 10 ปี (Non-OX)', zh: '10年退休签证 (Non-OX)', ja: '10年リタイアメント (Non-OX)' }, duration: '10 Years', price: 'High' },

  // Family
  { id: 'non-o-mar', category: 'family', name: { fr: 'Mariage (Non-O)', en: 'Marriage Visa (Non-O)', th: 'วีซ่าแต่งงาน (Non-O)', zh: '婚姻签证 (Non-O)', ja: '結婚ビザ (Non-O)' }, duration: '1 Year', price: 'Low' },
  { id: 'non-o-dep', category: 'family', name: { fr: 'Dépendant (Non-O)', en: 'Dependent Visa (Non-O)', th: 'วีซ่าผู้ติดตาม (Non-O)', zh: '随行家属签证 (Non-O)', ja: '家族帯同ビザ (Non-O)' }, duration: '1 Year', price: 'Low' },
  
  // Education
  { id: 'non-ed-uni', category: 'education', name: { fr: 'Étudiant Université (Non-ED)', en: 'University Student (Non-ED)', th: 'วีซ่านักศึกษา (Non-ED)', zh: '留学签证 (Non-ED)', ja: '大学留学ビザ (Non-ED)' }, duration: '1 Year', price: 'Medium' },
  { id: 'non-ed-lang', category: 'education', name: { fr: 'École de Langue (Non-ED)', en: 'Language School (Non-ED)', th: 'วีซ่าเรียนภาษา (Non-ED)', zh: '语言学校签证 (Non-ED)', ja: '語学学校ビザ (Non-ED)' }, duration: '6-12 Months', price: 'Low' },
  { id: 'non-ed-muay', category: 'education', name: { fr: 'Muay Thai / Stage (Non-ED)', en: 'Muay Thai / Training (Non-ED)', th: 'วีซ่าฝึกมวยไทย (Non-ED)', zh: '泰拳培训签证 (Non-ED)', ja: 'ムエタイ修業ビザ (Non-ED)' }, duration: '6-12 Months', price: 'Low' },

  // Privilege / Elite
  { id: 'elite-gold', category: 'privilege', name: { fr: 'Thailand Privilege - Gold', en: 'Thailand Privilege - Gold', th: 'ไทยแลนด์ พริวิเลจ - โกลด์', zh: '泰国精英签 - 金卡', ja: 'タイ・プリビレッジ - ゴールド' }, duration: '5 Years', price: 'Premium' },
  { id: 'elite-plat', category: 'privilege', name: { fr: 'Thailand Privilege - Platinum', en: 'Thailand Privilege - Platinum', th: 'ไทยแลนด์ พริวิเลจ - แพลทินัม', zh: '泰国精英签 - 白金卡', ja: 'タイ・プリビレッジ - プラチナ' }, duration: '10 Years', price: 'Premium' },
  { id: 'elite-diam', category: 'privilege', name: { fr: 'Thailand Privilege - Diamond', en: 'Thailand Privilege - Diamond', th: 'ไทยแลนด์ พริวิเลจ - ไดมอนด์', zh: '泰国精英签 - 钻石卡', ja: 'タイ・プリビレッジ - ダイヤモンド' }, duration: '15 Years', price: 'Premium' },
  { id: 'elite-res', category: 'privilege', name: { fr: 'Thailand Privilege - Reserve', en: 'Thailand Privilege - Reserve', th: 'ไทยแลนด์ พริวิเลจ - รีเซิร์ฟ', zh: '泰国精英签 - 至尊卡', ja: 'タイ・プリビレッジ - リザーブ' }, duration: '20+ Years', price: 'Premium' },

  // Specialized
  { id: 'non-m', category: 'work', name: { fr: 'Visa Média / Journaliste', en: 'Media / Journalist Visa', th: 'วีซ่าสื่อมวลชน', zh: '媒体/记者签证', ja: 'メディア・記者ビザ' }, duration: '1 Year', price: 'Medium' },
  { id: 'non-f', category: 'work', name: { fr: 'Visa Officiel (Non-F)', en: 'Official Visa (Non-F)', th: 'วีซ่าข้าราชการ', zh: '官方签证 (Non-F)', ja: '公用ビザ (Non-F)' }, duration: 'Variable', price: 'Low' },
  { id: 'non-r', category: 'education', name: { fr: 'Visa Religieux (Non-R)', en: 'Religious Visa (Non-R)', th: 'วีซ่าทางศาสนา', zh: '宗教签证 (Non-R)', ja: '宗教ビザ (Non-R)' }, duration: '1 Year', price: 'Low' },
  { id: 'non-rs', category: 'work', name: { fr: 'Recherche Scientifique', en: 'Scientific Research', th: 'วีซ่าวิจัยวิทยาศาสตร์', zh: '科学研究签证', ja: '科学研究ビザ' }, duration: '1 Year', price: 'Medium' },
  { id: 'non-o-vol', category: 'work', name: { fr: 'Visa Volontaire', en: 'Volunteer Visa', th: 'วีซ่าอาสาสมัคร', zh: '志愿者签证', ja: 'ボランティアビザ' }, duration: '1 Year', price: 'Low' },
  { id: 'non-mt', category: 'tourism', name: { fr: 'Traitement Médical', en: 'Medical Treatment', th: 'วีซ่ารักษาพยาบาล', zh: '医疗签证', ja: '医療ビザ' }, duration: '90 Days', price: 'Medium' }
];

const App = () => {
  const [lang, setLang] = useState<Language>('fr');
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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-blue rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">S</div>
            <div>
              <h1 className="text-xl font-bold leading-none tracking-tight">SiamVisa<span className="gold-text">Pro</span></h1>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Thai Immigration Experts</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full border border-gray-200">
                <Globe size={16} className="text-gray-500" />
                <select 
                  value={lang} 
                  onChange={(e) => setLang(e.target.value as Language)}
                  className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="th">ไทย</option>
                  <option value="zh">简体中文</option>
                  <option value="ja">日本語</option>
                </select>
             </div>
             <button className="gold-bg text-white px-5 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
               {t.contactUs}
             </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="gradient-blue text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 gold-bg opacity-10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">{t.title}</h2>
          <p className="text-xl opacity-90 mb-10 font-light max-w-2xl mx-auto">{t.subtitle}</p>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder={t.searchPlaceholder}
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 shadow-2xl focus:ring-4 focus:ring-yellow-500/20 focus:outline-none text-lg"
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
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === null ? 'gold-bg text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {t.allVisas}
          </button>
          {Object.entries(t.categories).map(([key, label]) => {
            const Icon = CATEGORY_ICONS[key];
            return (
              <button 
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${activeCategory === key ? 'gold-bg text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {Icon && <Icon size={16} />}
                {label}
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
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${activeCategory === visa.category ? 'gold-bg text-white' : 'bg-blue-50 text-blue-900 group-hover:gold-bg group-hover:text-white transition-colors'}`}>
                    {Icon ? <Icon size={24} /> : <Info size={24} />}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:gold-text transition-colors">{visa.name[lang]}</h3>
                  <div className="flex gap-2 items-center text-xs font-semibold text-gray-400 mb-4">
                    <span className="px-2 py-0.5 bg-gray-100 rounded">{visa.duration}</span>
                    <span className="px-2 py-0.5 bg-gray-100 rounded uppercase">{visa.price} Cost</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-900 font-bold text-sm">{t.details}</span>
                  <ChevronRight size={18} className="text-gray-300 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all" />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="gradient-blue p-8 text-white relative">
              <button 
                onClick={() => setSelectedVisa(null)}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div className="gold-bg p-3 rounded-2xl">
                  {React.createElement(CATEGORY_ICONS[selectedVisa.category] || Info, { size: 32 })}
                </div>
                <div>
                   <p className="text-xs font-bold uppercase tracking-widest opacity-70">Visa Category: {selectedVisa.category}</p>
                   <h3 className="text-2xl font-bold">{selectedVisa.name[lang]}</h3>
                </div>
              </div>
            </div>
            
            <div className="p-8 space-y-6">
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
                  <UserCheck size={18} className="gold-text" />
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
                  <Briefcase size={18} className="gold-text" />
                  {t.requirements}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Application process typically takes 5-15 business days depending on the embassy or immigration office. 
                  SiamVisaPro provides full support for document preparation, translation, and notarization.
                </p>
              </div>

              <div className="pt-4">
                 <button className="w-full gold-bg text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-yellow-500/20 hover:scale-[1.02] active:scale-95 transition-all">
                   {t.contactUs}
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 gold-bg rounded flex items-center justify-center text-white font-bold text-lg">S</div>
                <h2 className="text-2xl font-bold leading-none tracking-tight">SiamVisa<span className="gold-text">Pro</span></h2>
              </div>
              <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
                {t.footerText} Providing professional immigration and relocation assistance since 2012.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"><Mail size={20} /></a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"><Phone size={20} /></a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"><MapPin size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Visa Consultation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business Setup</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Real Estate Assistance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} SiamVisaPro Co., Ltd. Bangkok, Thailand. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}