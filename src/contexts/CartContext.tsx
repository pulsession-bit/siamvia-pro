'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
}


interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setCartTotal(total);
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    // Basic implementation: prevent duplicates of exact same service tier for simplicity
    // or allow multiples. Let's allow duplicates but typically user buys 1 visa service.
    // For better UX, check if exists:
    const exists = cartItems.some(i => i.id === item.id);
    if (!exists) {
      setCartItems(prev => [...prev, item]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};