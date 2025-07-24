import React, { useState, ReactNode } from 'react';
import { Language, translations, DEFAULT_LANGUAGE } from './translations';
import { LanguageContext } from './context';

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Get language from localStorage or use default
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('tourxperience-language');
      return (saved as Language) || DEFAULT_LANGUAGE;
    } catch {
      return DEFAULT_LANGUAGE;
    }
  });

  // Update localStorage when language changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('tourxperience-language', lang);
    } catch {
      // Ignore localStorage errors
    }
  };

  // Get translations for current language with fallback
  const t = translations[language] || translations[DEFAULT_LANGUAGE];

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};