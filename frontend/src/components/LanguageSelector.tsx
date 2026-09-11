'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSelector: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`inline-flex items-center rounded-xl bg-cfa-graySlate p-1 border border-cfa-grayBorder ${className}`}>
      <button
        onClick={() => setLanguage('es')}
        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
          language === 'es'
            ? 'bg-white text-cfa-navy shadow-xs scale-102'
            : 'text-cfa-grayText hover:text-cfa-navy'
        }`}
        title="Español"
      >
        <span>🇲🇽</span>
        <span>ES</span>
      </button>

      <button
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
          language === 'en'
            ? 'bg-white text-cfa-navy shadow-xs scale-102'
            : 'text-cfa-grayText hover:text-cfa-navy'
        }`}
        title="English"
      >
        <span>🇺🇸</span>
        <span>EN</span>
      </button>
    </div>
  );
};
