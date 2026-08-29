import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, TranslationKey, Language } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
  languages: Array<{ code: Language; label: string; flag: string; short: string }>;
}

const LANGUAGES: Array<{ code: Language; label: string; flag: string; short: string }> = [
  { code: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩', short: 'ID' },
  { code: 'en', label: 'English', flag: '🇬🇧', short: 'EN' },
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('balinikitour_lang');
      if (saved && (saved === 'id' || saved === 'en')) {
        return saved as Language;
      }
    } catch {
      // ignore
    }
    return 'en'; // default to English or Indonesian
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('balinikitour_lang', lang);
    } catch {
      // ignore
    }
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Helper translation resolver with dotted notation support (e.g. 'nav.home' or 'hero.title')
  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.');
    let current: any = translations[language];

    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        // Fallback to English, then Indonesian, then key
        let fallbackVal: any = (translations['en'] as any);
        for (const fbKey of keys) {
          if (fallbackVal && typeof fallbackVal === 'object' && fbKey in fallbackVal) {
            fallbackVal = fallbackVal[fbKey];
          } else {
            fallbackVal = null;
            break;
          }
        }
        if (typeof fallbackVal === 'string') return fallbackVal;
        return fallback || key;
      }
    }

    if (typeof current === 'string') return current;
    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
