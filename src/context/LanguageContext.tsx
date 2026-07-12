import { createContext, useContext, useState, ReactNode } from 'react';
import { Lang, translations, T } from '../i18n/translations';

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: T;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Setting default language to Danish ('da') as requested in your original state
  const [lang, setLang] = useState<Lang>('da');

  return (
    <LanguageContext.Provider 
      value={{ 
        lang, 
        setLang, 
        // Casting here bypasses the literal string strictness of `as const`
        t: translations[lang] as unknown as T 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used inside a LanguageProvider');
  }
  return ctx;
}