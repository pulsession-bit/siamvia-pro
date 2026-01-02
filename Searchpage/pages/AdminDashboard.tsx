import React, { useState } from 'react';
import { CONTENT } from '../constants';
import { analyzePage, generateSocialPost } from '../services/seoService';
import { SeoAuditResult } from '../types';
import { BarChart, Search, Share2, AlertTriangle, Check, RefreshCw } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState('fr');
  const [selectedVisa, setSelectedVisa] = useState(CONTENT['fr'].visas[0].slug);
  const [auditResult, setAuditResult] = useState<SeoAuditResult | null>(null);
  const [socialPost, setSocialPost] = useState<any>(null);

  const currentVisa = CONTENT[selectedLang].visas.find(v => v.slug === selectedVisa);

  const handleAudit = () => {
    if (!currentVisa) return;
    // Simulate analyzing the "rendered" content
    const simulatedContent = `${currentVisa.name} ${currentVisa.shortDesc} ${currentVisa.features.map(f => f.description).join(' ')}`;
    const result = analyzePage(simulatedContent, currentVisa.keywords);
    setAuditResult(result);
  };

  const handleGenerateSocial = (platform: string) => {
    if (!currentVisa) return;
    setSocialPost(generateSocialPost(platform, currentVisa.name, selectedLang));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex-shrink-0">
        <div className="p-6 border-b border-slate-800">
          <h1 className="font-bold text-xl">SiamVisa<span className="text-amber-500">Admin</span></h1>
        </div>
        <nav className="p-4 space-y-2">
          <div className="flex items-center gap-3 bg-slate-800 p-3 rounded-lg text-amber-500 font-medium cursor-pointer">
            <BarChart size={18} /> Dashboard SEO
          </div>
          <div className="flex items-center gap-3 text-slate-400 p-3 rounded-lg hover:bg-slate-800 transition cursor-pointer">
            <Share2 size={18} /> Social Campaigns
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Page Auditor & Generator</h2>
          <div className="flex gap-4">
            <select 
              value={selectedLang} 
              onChange={(e) => setSelectedLang(e.target.value)}
              className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500"
            >
              {Object.keys(CONTENT).map(l => <option key={l} value={l}>{l.toUpperCase()}</option>)}
            </select>
            <select 
              value={selectedVisa} 
              onChange={(e) => setSelectedVisa(e.target.value)}
              className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500"
            >
               {CONTENT['fr'].visas.map(v => <option key={v.slug} value={v.slug}>{v.slug}</option>)}
            </select>
          </div>
        </div>

        {/* Audit Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg flex items-center gap-2"><Search className="text-amber-500"/> SEO Simulator (Bot View)</h3>
              <button 
                onClick={handleAudit}
                className="bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-slate-800 transition"
              >
                Run Audit
              </button>
            </div>
            
            {auditResult ? (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-4">
                  <div className={`text-4xl font-bold ${auditResult.score > 80 ? 'text-green-500' : 'text-orange-500'}`}>
                    {auditResult.score}/100
                  </div>
                  <div className="text-sm text-slate-500">
                    Keyword Density: <strong>{auditResult.keywordDensity}%</strong><br/>
                    Target: {currentVisa?.keywords.join(', ')}
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-bold text-xs uppercase text-slate-400 mb-2">Suggestions</h4>
                  <ul className="space-y-2">
                    {auditResult.suggestions.map((s, i) => (
                       <li key={i} className="flex items-start gap-2 text-sm">
                         <AlertTriangle size={14} className="text-amber-500 mt-0.5 shrink-0"/> {s}
                       </li>
                    ))}
                    {auditResult.missingMeta.map((m, i) => (
                       <li key={`m-${i}`} className="flex items-start gap-2 text-sm text-red-500">
                         <AlertTriangle size={14} className="mt-0.5 shrink-0"/> Missing Tag: &lt;meta property="{m}" /&gt;
                       </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-400 text-sm">Click "Run Audit" to simulate Google Bot crawl.</div>
            )}
          </div>

          {/* Social Media Generator */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg flex items-center gap-2"><Share2 className="text-amber-500"/> Social Media AI</h3>
            </div>
            
            <div className="flex gap-2 mb-6">
              {['TikTok', 'LinkedIn', 'Instagram', 'Facebook'].map(p => (
                <button 
                  key={p} 
                  onClick={() => handleGenerateSocial(p)}
                  className="flex-1 py-2 text-xs font-bold border border-slate-200 rounded hover:border-amber-500 hover:text-amber-600 transition"
                >
                  {p}
                </button>
              ))}
            </div>

            {socialPost ? (
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <div className="flex justify-between mb-2">
                   <span className="text-xs font-bold uppercase text-slate-400">{socialPost.platform} Draft</span>
                   <RefreshCw size={14} className="text-slate-400 cursor-pointer hover:text-amber-500" onClick={() => handleGenerateSocial(socialPost.platform)}/>
                </div>
                <p className="text-sm text-slate-800 mb-4 whitespace-pre-wrap">{socialPost.content}</p>
                <div className="flex flex-wrap gap-2">
                  {socialPost.hashtags.map((h: string) => (
                    <span key={h} className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">{h}</span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-400 text-sm">Select a platform to generate campaign copy.</div>
            )}
          </div>
        </div>

        {/* Page Structure Preview */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
           <h3 className="font-bold text-lg mb-4">Internal Linking Structure (Hreflang)</h3>
           <div className="overflow-x-auto">
             <table className="w-full text-sm text-left">
               <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                 <tr>
                   <th className="px-6 py-3">Visa Type</th>
                   {Object.keys(CONTENT).map(l => <th key={l} className="px-6 py-3 text-center">{l.toUpperCase()}</th>)}
                 </tr>
               </thead>
               <tbody>
                  {CONTENT['fr'].visas.map((v, idx) => (
                    <tr key={v.slug} className="border-b hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium">{v.slug}</td>
                      {Object.keys(CONTENT).map(l => (
                        <td key={l} className="px-6 py-4 text-center">
                          <Check size={16} className="inline text-green-500"/>
                        </td>
                      ))}
                    </tr>
                  ))}
               </tbody>
             </table>
           </div>
        </div>

      </main>
    </div>
  );
};

export default AdminDashboard;