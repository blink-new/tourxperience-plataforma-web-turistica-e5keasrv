import { useContext } from 'react';
import { LanguageContext } from './context';
import { translations, DEFAULT_LANGUAGE } from './translations';

// Hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Hook to get translations directly
export const useTranslations = () => {
  const context = useContext(LanguageContext);
  
  // If context is not available, return default translations
  if (context === undefined) {
    return translations[DEFAULT_LANGUAGE];
  }
  
  // Ensure t is never undefined by providing fallback
  return context.t || translations[DEFAULT_LANGUAGE];
};