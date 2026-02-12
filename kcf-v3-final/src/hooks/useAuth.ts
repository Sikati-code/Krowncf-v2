import { useState, useCallback, useEffect } from 'react';
import type { User } from '@/types';

const USER_STORAGE_KEY = 'kcf_user_v2';

export function useAuth() {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(USER_STORAGE_KEY);
        return saved ? JSON.parse(saved) : null;
      } catch {
        return null;
      }
    }
    return null;
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(USER_STORAGE_KEY);
      }
    } catch (error) {
      console.error('Failed to save user:', error);
    }
  }, [user]);

  const login = useCallback((email: string, _password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser: User = {
          id: '1',
          name: email.split('@')[0],
          email,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(email)}`,
          isLoggedIn: true
        };
        setUser(mockUser);
        resolve(true);
      }, 800);
    });
  }, []);

  const register = useCallback((name: string, email: string, _password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser: User = {
          id: '1',
          name,
          email,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(email)}`,
          isLoggedIn: true
        };
        setUser(mockUser);
        resolve(true);
      }, 800);
    });
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(USER_STORAGE_KEY);
  }, []);

  const openLoginModal = useCallback(() => {
    setIsLoginModalOpen(true);
  }, []);

  const closeLoginModal = useCallback(() => {
    setIsLoginModalOpen(false);
  }, []);

  return {
    user,
    isLoggedIn: !!user,
    isLoginModalOpen,
    login,
    register,
    logout,
    openLoginModal,
    closeLoginModal
  };
}
