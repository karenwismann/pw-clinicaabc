'use client';

import React from 'react';
import { Calendar, Stethoscope, Dna, HeartHandshake, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function PasosASeguirPage() {
  const { language } = useLanguage();

  const steps = [
    {
      step: 1,
      title: language === 'es' ? "Primera Consulta de Diagnóstico Integral" : "Initial Comprehensive Consultation",
      desc: language === 'es'
        ? "Revisión completa de antecedentes médicos, ultrasonido de alta resolución y determinación del perfil hormonal basal."
        : "Complete medical history review, high-resolution pelvic ultrasound, and baseline hormonal evaluation.",
      icon: Stethoscope
    },
    {
      step: 2,
      title: language === 'es' ? "Diseño del Protocolo Personalizado" : "Personalized Protocol Design",
      desc: language === 'es'
        ? "Selección del protocolo farmacológico óptimo según reserva ovárica y factor andrológico."
        : "Selection of optimal pharmacological stimulation protocol tailored to ovarian reserve and male factor.",
      icon: Dna
    },
    {
      step: 3,
      title: language === 'es' ? "Monitoreo y Captura Folicular" : "Follicular Monitoring & Retrieval",
      desc: language === 'es'
        ? "Seguimiento ecográfico seriado durante 8 a 12 días y aspiración ambulatoria en quirófano con sedación breve (5-10 min)."
        : "Serial ultrasound tracking over 8-12 days and outpatient egg retrieval under brief 5-10 minute sedation.",
      icon: Calendar
    },
    {
      step: 4,
      title: language === 'es' ? "Laboratorio y Cultivo a Blastocisto" : "Laboratory & Blastocyst Culture",
      desc: language === 'es'
        ? "Fertilización por FIV o ICSI en incubadoras trigas y trazabilidad 100% segura con sistema RI Witness."
        : "Fertilization via IVF/ICSI in tri-gas incubators with 100% verified RI Witness RFID electronic tracking.",
      icon: ShieldCheck
    },
    {
      step: 5,
      title: language === 'es' ? "Transferencia Embrionaria y Prueba" : "Embryo Transfer & Pregnancy Test",
      desc: language === 'es'
        ? "Transferencia guiada por ultrasonido en endometrio sincronizado y prueba confirmatoria a los 14 días."
        : "Ultrasound-guided embryo transfer in synchronized endometrium followed by beta-hCG confirmation at 14 days.",
      icon: HeartHandshake
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      <section className="bg-gradient-to-r from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-cfa-light text-xs font-semibold uppercase tracking-wider font-title">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Guía para Pacientes' : 'Patient Journey Guide'}</span>
          </div>
          <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-light text-white">
            {language === 'es' ? 'Pasos a Seguir en tu Tratamiento' : 'Steps in Your Treatment Journey'}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-sans">
            {language === 'es'
              ? 'Conoce con total claridad y transparencia el camino médico desde tu primera consulta hasta la prueba de embarazo.'
              : 'Understand with complete clarity the medical pathway from your initial diagnostic appointment to your pregnancy test.'}
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {steps.map((s) => {
          const StepIcon = s.icon;
          return (
            <div
              key={s.step}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-cfa-softBlue shadow-soft flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cfa-cyan to-cfa-deepBlue text-white flex items-center justify-center font-title font-extrabold text-xl flex-shrink-0 shadow-md">
                0{s.step}
              </div>

              <div className="flex-1 space-y-1.5">
                <h3 className="font-title text-lg sm:text-xl font-normal text-cfa-navy">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-cfa-grayDark leading-relaxed font-sans">
                  {s.desc}
                </p>
              </div>
            </div>
          );
        })}

        <div className="text-center pt-6">
          <Link
            href="/#agendar-cita"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-cfa-cyan text-white font-bold text-sm shadow-md hover:bg-cfa-deepBlue transition-all font-title"
          >
            <span>{language === 'es' ? 'Comienza tu Paso 1: Agenda tu Consulta' : 'Start Step 1: Book Your Consultation'}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
