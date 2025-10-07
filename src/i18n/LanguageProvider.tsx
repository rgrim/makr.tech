'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { en, Translations } from './dictionaries/en';
import { fr } from './dictionaries/fr';
import { nl } from './dictionaries/nl';

type Locale = 'en' | 'fr' | 'nl';

const dictionaries: Record<Locale, Translations> = { en, fr, nl };

type LanguageContextValue = {
  locale: Locale;
  t: Translations;
  setLocale: (loc: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('locale') as Locale | null;
      if (stored) {
        setLocale(stored);
        return;
      }
    }
    if (typeof navigator !== 'undefined') {
      const navLang = navigator.language?.toLowerCase() || 'en';
      if (navLang.startsWith('fr')) setLocale('fr');
      else if (navLang.startsWith('nl')) setLocale('nl');
      else setLocale('en');
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('locale', locale);
    }
  }, [locale]);

  const value = useMemo<LanguageContextValue>(() => ({
    locale,
    t: dictionaries[locale],
    setLocale,
  }), [locale]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider');
  return ctx;
}

// Small client component to set the html lang attribute dynamically
export function LangHtml() {
  const { locale } = useI18n();
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', locale);
    }
  }, [locale]);
  return null;
}


