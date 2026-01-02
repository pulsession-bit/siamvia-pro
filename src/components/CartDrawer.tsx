'use client';

import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Lock, CheckCircle, Loader2, Landmark } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

const CartDrawer: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, cartTotal, clearCart } = useCart();
  const { t } = useLanguage();
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  const handleCheckout = async () => {
    setPaymentStatus('processing');

    // Simulate bank transfer confirmation
    setTimeout(() => {
      setPaymentStatus('success');
      clearCart();
    }, 1500);
  };

  const handleClose = () => {
    if (paymentStatus === 'success') {
      setPaymentStatus('idle');
    }
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => !paymentStatus.startsWith('process') && handleClose()}
      ></div>

      {/* Drawer */}
      <div className={`fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <h2 className="text-xl font-bold text-slate-900 flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2 text-amber-500" />
              {t('cart.title')}
            </h2>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5">
            {paymentStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('cart.success_title')}</h3>
                <p className="text-slate-600 mb-8">
                  {t('cart.transfer_success_desc')}
                </p>
                <button
                  onClick={handleClose}
                  className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition shadow-lg w-full"
                >
                  {t('cart.continue')}
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-slate-400">
                <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
                <p>{t('cart.empty')}</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex justify-between items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div>
                      <h4 className="font-bold text-slate-900">{item.name}</h4>
                      <p className="text-amber-600 font-semibold">{item.formattedPrice}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-400 hover:text-red-500 p-1"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer / Checkout */}
          {cartItems.length > 0 && paymentStatus !== 'success' && (
            <div className="p-6 border-t border-gray-100 bg-white">
              <div className="flex justify-between items-center mb-6">
                <span className="text-slate-500 font-medium">{t('cart.total')}</span>
                <span className="text-2xl font-bold text-slate-900">{cartTotal}€</span>
              </div>

              {/* Bank Transfer Details */}
              <div className="mb-6">
                <p className="text-sm text-slate-700 mb-3 font-medium">{t('cart.bank_details_intro')}</p>

                {/* Mercury / International */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-3 text-xs text-slate-600">
                  <p className="font-bold text-amber-700 mb-1">{t('cart.bank_mercury_title')}</p>
                  <p><span className="font-semibold">{t('cart.account_holder')}</span> SiamVisa Pro LLC</p>
                  <p><span className="font-semibold">{t('cart.account_number')}</span> 10200345678</p>
                  <p><span className="font-semibold">{t('cart.routing_number')}</span> 021000021 (Evolve Bank)</p>
                  <p><span className="font-semibold">{t('cart.swift')}</span> EVOLUS33</p>
                </div>

                {/* Wise / Europe */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-600">
                  <p className="font-bold text-indigo-700 mb-1">{t('cart.bank_wise_title')}</p>
                  <p><span className="font-semibold">{t('cart.account_holder')}</span> SiamVisa Pro Ltd</p>
                  <p><span className="font-semibold">{t('cart.iban')}</span> BE76 0012 3456 7890</p>
                  <p><span className="font-semibold">{t('cart.swift')}</span> TRFWBEBB</p>
                </div>

                <p className="text-xs text-amber-600 mt-2 font-medium bg-amber-50 p-2 rounded">
                  ⚠️ {t('cart.transfer_note')}
                </p>
              </div>

              <button
                onClick={handleCheckout}
                disabled={paymentStatus === 'processing'}
                className="w-full py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white shadow-slate-200"
              >
                {paymentStatus === 'processing' ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    {t('cart.processing')}
                  </>
                ) : (
                  <>
                    {t('cart.btn_confirm_transfer')} <CheckCircle className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center mt-3 text-xs text-slate-400">
                <Lock className="w-3 h-3 mr-1" /> {t('cart.secure')}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
