'use client';

import React, { useState } from 'react';
import { CLINIC_VALUES, ClinicValue } from '@/data/values';
import {
  HeartHandshake,
  ClipboardCheck,
  UserCheck,
  ShieldCheck,
  Microscope,
  HandHeart,
  Award,
  Leaf,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ICON_MAP: Record<string, any> = {
  HeartHandshake,
  ClipboardCheck,
  UserCheck,
  ShieldCheck,
  Microscope,
  HandHeart,
  Award,
  Leaf
};

export const ValuesSection: React.FC = () => {
  const { language } = useLanguage();
  const [activeValueId, setActiveValueId] = useState<string>(CLINIC_VALUES[0].id);

  const activeValue = CLINIC_VALUES.find((v) => v.id === activeValueId) || CLINIC_VALUES[0];
  const Icon = ICON_MAP[activeValue.iconName] || HeartHandshake;
  const activeData = activeValue[language] || activeValue.es;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-12 border border-cfa-softBlue shadow-soft space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cfa-softBlue text-cfa-cyan text-xs font-semibold uppercase tracking-wider mb-2 font-title">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'es' ? 'Principios Fundamentales' : 'Fundamental Principles'}</span>
        </div>
        <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-cfa-navy">
          {language === 'es' ? 'Los Valores que nos Mueven' : 'The Values that Guide Us'}
        </h2>
        <p className="text-xs sm:text-sm text-cfa-grayText mt-1 font-sans">
          {language === 'es'
            ? 'Los 8 pilares éticos y científicos que respaldan nuestra práctica médica en el Centro Médico ABC.'
            : 'The 8 ethical and scientific pillars underpinning our medical practice at ABC Medical Center.'}
        </p>
      </div>

      {/* Grid of Values Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {CLINIC_VALUES.map((val) => {
          const ValIcon = ICON_MAP[val.iconName] || HeartHandshake;
          const isSelected = val.id === activeValueId;
          const valData = val[language] || val.es;

          return (
            <button
              key={val.id}
              onClick={() => setActiveValueId(val.id)}
              className={`p-3 rounded-2xl flex flex-col items-center text-center gap-2 transition-all cursor-pointer ${
                isSelected
                  ? 'bg-cfa-navy text-white shadow-md scale-102 ring-2 ring-cfa-cyan'
                  : 'bg-cfa-grayLight text-cfa-navy hover:bg-cfa-softBlue border border-cfa-grayBorder'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                  isSelected ? 'bg-cfa-cyan text-white' : 'bg-white text-cfa-cyan shadow-xs'
                }`}
              >
                <ValIcon className="w-5 h-5" />
              </div>
              <span className="font-title font-bold text-[11px] leading-tight line-clamp-2">
                {valData.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Value Detailed Showcase */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#0B2559] shadow-md transition-all duration-300">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0B2559] text-white flex items-center justify-center shadow-md flex-shrink-0">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#0B2559] uppercase tracking-wider font-title">
                {language === 'es' ? 'Valor Institucional' : 'Institutional Value'}
              </span>
              <h3 className="font-title text-xl sm:text-2xl font-extrabold text-[#0B2559]">
                {activeData.title}
              </h3>
            </div>
          </div>

          <p className="text-sm sm:text-base text-cfa-grayDark leading-relaxed font-sans">
            {activeData.description}
          </p>

          {activeData.environmentalPoints && (
            <div className="space-y-2.5 pt-2">
              {activeData.environmentalPoints.map((point, pIdx) => (
                <div key={pIdx} className="p-3 bg-white/90 rounded-xl border border-cfa-softBlue text-xs sm:text-sm text-cfa-navy font-sans flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-cfa-cyan text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {pIdx + 1}
                  </span>
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          )}

          <div className="p-3 bg-white/80 rounded-xl border border-cfa-softBlue text-xs text-cfa-navy font-sans flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cfa-cyan flex-shrink-0" />
            <span className="font-semibold">{activeData.subtitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
