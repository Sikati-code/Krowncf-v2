import { useState, useCallback, useEffect } from 'react';
import type { CartItem, Design } from '@/types';

const CART_STORAGE_KEY = 'kcf_cart_v2';

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(CART_STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error('Failed to save cart:', error);
    }
  }, [cartItems]);

  const addToCart = useCallback((design: Design) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.design.id === design.id);
      if (existingItem) {
        return prev.map(item =>
          item.design.id === design.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { design, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((designId: string) => {
    setCartItems(prev => prev.filter(item => item.design.id !== designId));
  }, []);

  const updateQuantity = useCallback((designId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(designId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.design.id === designId ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.design.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const toggleCart = useCallback(() => {
    setIsCartOpen(prev => !prev);
  }, []);

  const openCart = useCallback(() => {
    setIsCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsCartOpen(false);
  }, []);

  return {
    cartItems,
    cartTotal,
    cartCount,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart
  };
}
