import { useState, useCallback, useEffect } from 'react';
import { translations } from '@/data/translations';
import type { Language } from '@/types';

const LANGUAGE_STORAGE_KEY = 'kcf_language';

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      return (saved as Language) || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    // Update HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState(prev => prev === 'en' ? 'fr' : 'en');
  }, []);

  const t = useCallback((key: string): string => {
    const translation = (translations as Record<string, { en: string; fr: string }>)[key];
    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translation[language];
  }, [language]);

  return {
    language,
    setLanguage,
    toggleLanguage,
    t,
    isEnglish: language === 'en',
    isFrench: language === 'fr'
  };
}
