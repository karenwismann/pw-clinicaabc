'use client';

import React, { useState } from 'react';
import { Calendar, ExternalLink, X, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl?: string;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({
  isOpen,
  onClose,
  calendlyUrl = "https://calendly.com/infertilidadabc/primera-consulta"
}) => {
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cfa-navy/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-cfa-softBlue overflow-hidden max-h-[92vh] flex flex-col animate-scaleUp">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cfa-cyan/20 border border-cfa-cyan/30 flex items-center justify-center text-cfa-light">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-title text-lg sm:text-xl font-light text-white">
                {language === 'es' ? 'Agendar Cita con Calendly' : 'Schedule with Calendly'}
              </h3>
              <p className="text-xs text-cfa-light font-sans">
                {language === 'es' ? 'Centro Médico ABC Santa Fe' : 'ABC Medical Center Santa Fe Campus'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
            >
              <span>{language === 'es' ? 'Abrir en pestaña nueva' : 'Open in new tab'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: Embedded Calendly / Scheduler */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto bg-cfa-grayLight flex flex-col items-center justify-center min-h-[480px]">
          {/* Iframe for Calendly */}
          <div className="w-full h-[520px] bg-white rounded-2xl border border-cfa-grayBorder overflow-hidden shadow-inner relative">
            <iframe
              src={`${calendlyUrl}?embed_domain=localhost&embed_type=Inline&primary_color=0284c7`}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Calendly Scheduling"
              className="w-full h-full"
            />
          </div>

          {/* Backup link if Calendly URL needs setup */}
          <div className="mt-4 text-center text-xs text-cfa-grayText space-y-1">
            <p>
              {language === 'es'
                ? '¿Prefieres coordinar telefónicamente? Llámanos al (55) 5273 5194 o (55) 5276 54 63'
                : 'Prefer to coordinate by phone? Call us at (55) 5273 5194 or (55) 5276 54 63'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
