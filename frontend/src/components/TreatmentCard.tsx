'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Treatment } from '@/data/treatments';
import { Sparkles, Target, Zap, HeartHandshake, Dna, Snowflake, Layers, ShieldCheck, Users, Ribbon, Activity, ChevronRight, X, Calendar, CheckCircle2 } from 'lucide-react';
import { AppointmentModal } from './AppointmentModal';
import { DonorFlowchart } from './DonorFlowchart';
import { useLanguage } from '@/context/LanguageContext';

const ICON_MAP: Record<string, any> = {
  Sparkles,
  Target,
  Zap,
  HeartHandshake,
  Dna,
  Snowflake,
  Layers,
  ShieldCheck,
  Users,
  Ribbon,
  Activity
};

interface TreatmentCardProps {
  treatment: Treatment;
  onOpenModal?: (t: Treatment) => void;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment, onOpenModal }) => {
  const { language } = useLanguage();
  const Icon = ICON_MAP[treatment.iconName] || Sparkles;
  const data = treatment[language] || treatment.es;

  return (
    <div
      id={treatment.id}
      className="bg-white rounded-3xl overflow-hidden border border-cfa-softBlue shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group scroll-mt-28"
    >
      <div>
        {/* Treatment Image Header */}
        <div className="relative w-full h-48 sm:h-52 bg-cfa-iceBlue overflow-hidden">
          <Image
            src={treatment.imageSrc}
            alt={data.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cfa-navy/80 via-transparent to-transparent" />
          
          <div className="absolute top-3 right-3">
            {treatment.isFeatured && (
              <span className="px-2.5 py-1 rounded-full bg-cfa-cyan text-white text-[10px] font-bold shadow-sm font-title">
                {language === 'es' ? 'Alta Especialidad' : 'High Specialty'}
              </span>
            )}
          </div>

          <div className="absolute bottom-3 left-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-white/90 backdrop-blur-md text-cfa-navy flex items-center justify-center shadow-sm">
              <Icon className="w-4 h-4 text-cfa-cyan" />
            </div>
            <span className="text-xs font-bold text-white drop-shadow-sm font-title">
              {data.shortTitle}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-3">
          <h3 className="font-title text-lg sm:text-xl font-bold text-cfa-navy group-hover:text-cfa-cyan transition-colors leading-snug">
            {data.title}
          </h3>

          <p className="text-xs sm:text-sm text-cfa-grayDark leading-relaxed font-sans">
            {data.summary}
          </p>

          {/* Highlights */}
          {data.highlights && (
            <ul className="space-y-1.5 pt-2">
              {data.highlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-cfa-grayDark font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cfa-cyan flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="pt-4 border-t border-cfa-grayBorder flex items-center justify-between">
          <button
            onClick={() => onOpenModal && onOpenModal(treatment)}
            className="text-xs font-bold text-cfa-cyan group-hover:text-cfa-deepBlue inline-flex items-center gap-1.5 transition-colors cursor-pointer font-title"
          >
            <span>{language === 'es' ? 'Ver protocolo y detalles' : 'View full protocol'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <span className="text-[10px] text-cfa-grayText font-medium font-sans">Centro Médico ABC</span>
        </div>
      </div>
    </div>
  );
};

export const TreatmentDetailModal: React.FC<{
  treatment: Treatment | null;
  onClose: () => void;
}> = ({ treatment, onClose }) => {
  const { language } = useLanguage();
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  if (!treatment) return null;

  const Icon = ICON_MAP[treatment.iconName] || Sparkles;
  const data = treatment[language] || treatment.es;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cfa-navy/70 backdrop-blur-sm animate-fadeIn">
        <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#69B3E7]/50 ring-1 ring-black/5 overflow-hidden max-h-[90vh] flex flex-col animate-scaleUp">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white p-6 rounded-t-3xl overflow-hidden flex-shrink-0">
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-cfa-light">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-title text-xl sm:text-2xl font-bold text-white drop-shadow-sm">{data.title}</h3>
                  <p className="text-xs text-cfa-light drop-shadow-sm font-sans">
                    {language === 'es' ? 'Clínica de Fertilización Asistida en el Centro Médico ABC' : 'Assisted Fertilization Clinic at ABC Medical Center'}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-cfa-grayDark leading-relaxed">
            {/* Treatment Image Display */}
            <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden shadow-sm border border-cfa-softBlue">
              <Image
                src={treatment.imageSrc}
                alt={data.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Paragraphs */}
            <div className="space-y-3 font-sans">
              {data.fullDescription.map((para, pIdx) => (
                <p key={pIdx} className="text-xs sm:text-sm text-cfa-grayDark leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Steps Breakdown if FIV */}
            {data.steps && treatment.id !== "donacion-de-ovulos-y-esperma" && (
              <div className="space-y-4 pt-2">
                <h4 className="font-title text-sm font-bold text-cfa-navy uppercase tracking-wider">
                  {language === 'es' ? 'Etapas y Ciclo del Procedimiento' : 'Procedure Stages & Cycle'}
                </h4>
                <div className="space-y-3">
                  {data.steps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-2xl bg-cfa-grayLight border border-cfa-grayBorder/80 space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-cfa-cyan text-white text-xs font-bold flex items-center justify-center uppercase font-title">
                          {step.letter || step.number}
                        </span>
                        <h5 className="font-title font-bold text-cfa-navy text-xs sm:text-sm">
                          {step.title}
                        </h5>
                      </div>
                      <p className="text-xs text-cfa-grayDark leading-relaxed pl-8 font-sans">
                        {step.description}
                      </p>
                      {step.details && (
                        <ul className="space-y-1 pl-8 pt-1">
                          {step.details.map((det, dIdx) => (
                            <li key={dIdx} className="text-xs text-cfa-grayText flex items-start gap-1.5 font-sans">
                              <span className="text-cfa-cyan font-bold">•</span>
                              <span>{det}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Flujograma de Donación DENTRO del apartado de Donación */}
            {treatment.id === "donacion-de-ovulos-y-esperma" && (
              <div className="pt-2">
                <DonorFlowchart />
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-cfa-grayLight border-t border-cfa-grayBorder rounded-b-3xl flex-shrink-0 flex items-center justify-between">
            <span className="text-xs text-cfa-grayText font-medium font-sans">
              {language === 'es' ? '¿Deseas una valoración médica personalizada?' : 'Would you like a personalized medical consultation?'}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAppointmentOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cfa-cyan to-cfa-deepBlue text-white text-xs font-bold shadow-sm hover:brightness-105 transition-all flex items-center gap-1.5 font-title cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{language === 'es' ? 'Agendar Consulta' : 'Book Consultation'}</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-white border border-cfa-grayBorder text-cfa-navy text-xs font-semibold hover:bg-cfa-graySlate transition-colors font-title cursor-pointer"
              >
                {language === 'es' ? 'Cerrar' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </>
  );
};
