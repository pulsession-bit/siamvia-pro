import React from 'react';
import { Translation, VisaType } from '../types';
import { MessageSquare, Phone, Mail, Video } from 'lucide-react';

interface Props {
  t: Translation['form'];
  visa: VisaType;
}

const AuditForm: React.FC<Props> = ({ t, visa }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-w-5xl mx-auto min-h-[500px]">
      {/* Left Side - Dark */}
      <div className="bg-slate-900 text-white p-8 md:p-12 md:w-5/12 flex flex-col justify-center relative">
        <div className="z-10">
          <h3 className="text-3xl font-bold mb-2 leading-tight">
            Expertise <span className="text-amber-500">{visa.name}</span>
          </h3>
          <p className="text-slate-400 text-sm mb-8 mt-4 leading-relaxed">
            {visa.shortDesc}
            <br/><br/>
            Le processus est complexe et nécessite un audit financier approfondi. Nos experts sécurisent votre candidature.
          </p>
          
          <ul className="space-y-3 text-sm font-medium">
            <li className="flex items-center gap-3">
              <span className="text-amber-500">✓</span> Audit des revenus & Investissements
            </li>
            <li className="flex items-center gap-3">
              <span className="text-amber-500">✓</span> Analyse Portfolio
            </li>
            <li className="flex items-center gap-3">
              <span className="text-amber-500">✓</span> Interface avec BOI
            </li>
            <li className="flex items-center gap-3">
              <span className="text-amber-500">✓</span> Accompagnement dépendants
            </li>
          </ul>
        </div>
        {/* Abstract shapes decoration */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-slate-800 rounded-full opacity-50 blur-3xl"></div>
      </div>

      {/* Right Side - Form */}
      <div className="bg-white p-8 md:p-12 md:w-7/12 flex flex-col justify-center">
        <div className="text-center mb-8">
          <h4 className="text-xl font-bold text-slate-900">{t.title}</h4>
          <p className="text-slate-500 text-xs mt-1">{t.subtitle}</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-wider">{t.date}</label>
            <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none transition" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-wider">{t.slot1}</label>
              <input type="time" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none transition" placeholder="--:--" />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-wider">{t.slot2}</label>
              <input type="time" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none transition" placeholder="--:--" />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-wider">{t.contactMethod}</label>
            <div className="grid grid-cols-4 gap-2 mt-2">
               <button className="flex flex-col items-center justify-center p-3 border-2 border-amber-500 bg-amber-50 rounded-xl text-amber-600">
                  <MessageSquare size={18} />
                  <span className="text-[10px] mt-1 font-semibold">WhatsApp</span>
               </button>
               <button className="flex flex-col items-center justify-center p-3 border border-slate-200 rounded-xl text-slate-500 hover:border-amber-500 hover:text-amber-600 transition">
                  <Phone size={18} />
                  <span className="text-[10px] mt-1">Tel</span>
               </button>
               <button className="flex flex-col items-center justify-center p-3 border border-slate-200 rounded-xl text-slate-500 hover:border-amber-500 hover:text-amber-600 transition">
                  <Mail size={18} />
                  <span className="text-[10px] mt-1">Email</span>
               </button>
               <button className="flex flex-col items-center justify-center p-3 border border-slate-200 rounded-xl text-slate-500 hover:border-amber-500 hover:text-amber-600 transition">
                  <Video size={18} />
                  <span className="text-[10px] mt-1">Zoom</span>
               </button>
            </div>
          </div>
          
          <div className="pt-2">
            <input type="text" placeholder="+33 6..." className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none transition mb-4" />
            <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition shadow-lg transform hover:-translate-y-0.5">
              {t.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuditForm;