'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { URLS, CONTACT, IMAGES } from '@/constants';

/**
 * WhatsApp SVG Icon Component
 */
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

/**
 * Contact Page Component
 * 
 * Features:
 * - Contact information display (offices, phone, email, WhatsApp)
 * - Contact form with validation
 * - Success state with animation
 * - Form submission simulation (replace with API call in production)
 */
const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  /**
   * Handle form field changes
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  /**
   * Handle form submission
   * TODO: Replace with actual API call to /api/contact
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation - Replace with actual API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <img
            src={IMAGES.COMMUNICATION}
            alt="Communication"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/50"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact_page.title')}</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            {t('contact_page.subtitle')}
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-16 relative z-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <div className="bg-slate-900 text-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-amber-400 mb-8">
              {t('contact_page.info_title')}
            </h2>

            <div className="space-y-8">
              {/* Office Locations */}
              <div className="flex items-start">
                <div className="bg-slate-800 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('contact_page.address_title')}</h3>
                  <p className="text-slate-300">
                    Paris, France
                    <br />
                    Bangkok, Thailand
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-slate-800 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('contact_page.phone_title')}</h3>
                  <p className="text-slate-300">{CONTACT.PHONE}</p>
                  <p className="text-xs text-slate-500 mt-1">Lun-Ven, 9h-18h</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-slate-800 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('contact_page.email_title')}</h3>
                  <p className="text-slate-300">{CONTACT.EMAIL}</p>
                  <p className="text-xs text-slate-500 mt-1">Réponse sous 24h</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start">
                <div className="bg-slate-800 p-3 rounded-lg mr-4">
                  <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('contact_page.whatsapp_title')}</h3>
                  <a
                    href={URLS.WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 underline transition"
                  >
                    Chatter avec un expert
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
            {isSuccess ? (
              // Success State
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {t('contact_page.success_title')}
                </h3>
                <p className="text-slate-600 mb-8">{t('contact_page.success_desc')}</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-amber-600 font-bold hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              // Contact Form
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {t('contact_page.form_title')}
                </h2>

                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      {t('contact_page.name_label')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 outline-none transition"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      {t('contact_page.email_label')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 outline-none transition"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      {t('contact_page.subject_label')}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 outline-none transition"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      {t('contact_page.message_label')}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 outline-none transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-500 text-slate-900 py-3 rounded-lg font-bold shadow-lg hover:bg-amber-400 transition flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        {t('contact_page.btn_sending')}
                      </>
                    ) : (
                      <>
                        {t('contact_page.btn_send')}
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
