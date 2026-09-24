'use client';

import React, { useState } from 'react';
import { TREATMENTS, Treatment } from '@/data/treatments';
import { TreatmentCard, TreatmentDetailModal } from '@/components/TreatmentCard';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TratamientosPage() {
  const { language } = useLanguage();
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [filter, setFilter] = useState<'all' | 'alta-complejidad' | 'preservacion' | 'cirugia'>('all');

  const filteredTreatments = TREATMENTS.filter((t) => {
    if (filter === 'alta-complejidad') {
      return ['fertilizacion-in-vitro', 'icsi', 'hatch-asistido', 'transferencia-de-embriones', 'diagnostico-genetico-embrionario', 'donacion-de-ovulos-y-esperma'].includes(t.id);
    }
    if (filter === 'preservacion') {
      return ['congelacion-de-ovulos', 'congelacion-de-embriones', 'congelacion-de-esperma', 'cancer-y-reproduccion'].includes(t.id);
    }
    if (filter === 'cirugia') {
      return ['cirugia-reproductiva'].includes(t.id);
    }
    return true;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-cfa-light text-xs font-semibold uppercase tracking-wider font-title">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Medicina Reproductiva Avanzada' : 'Advanced Reproductive Medicine'}</span>
          </div>
          <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-light text-white">
            {language === 'es' ? 'Tratamientos Especializados' : 'Specialized Treatments'}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-sans">
            {language === 'es'
              ? 'Ofrecemos los 11 tratamientos más avanzados en reproducción asistida, apoyados en tecnología de vanguardia, diagnóstico genético y trazabilidad electrónica RI Witness en el Centro Médico ABC Santa Fe.'
              : 'Offering all 11 state-of-the-art assisted reproduction treatments, backed by genetic testing, cutting-edge cleanrooms, and RI Witness electronic verification at ABC Medical Center Santa Fe.'}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-title">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-cfa-navy text-white shadow-md scale-105'
                : 'bg-white text-cfa-navy border border-cfa-grayBorder hover:bg-cfa-softBlue'
            }`}
          >
            {language === 'es' ? 'Todos los Tratamientos (11)' : 'All Treatments (11)'}
          </button>
          <button
            onClick={() => setFilter('alta-complejidad')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              filter === 'alta-complejidad'
                ? 'bg-cfa-cyan text-white shadow-md scale-105'
                : 'bg-white text-cfa-navy border border-cfa-grayBorder hover:bg-cfa-softBlue'
            }`}
          >
            {language === 'es' ? 'Alta Complejidad (FIV, ICSI, PGD, Donación)' : 'High Complexity (IVF, ICSI, PGT, Donor)'}
          </button>
          <button
            onClick={() => setFilter('preservacion')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              filter === 'preservacion'
                ? 'bg-cfa-cyan text-white shadow-md scale-105'
                : 'bg-white text-cfa-navy border border-cfa-grayBorder hover:bg-cfa-softBlue'
            }`}
          >
            {language === 'es' ? 'Preservación & Oncofertilidad' : 'Preservation & Oncofertility'}
          </button>
          <button
            onClick={() => setFilter('cirugia')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              filter === 'cirugia'
                ? 'bg-cfa-cyan text-white shadow-md scale-105'
                : 'bg-white text-cfa-navy border border-cfa-grayBorder hover:bg-cfa-softBlue'
            }`}
          >
            {language === 'es' ? 'Cirugía Reproductiva & Robótica' : 'Reproductive & Robotic Surgery'}
          </button>
        </div>

        {/* Treatments Grid with Real Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              onOpenModal={(t) => setSelectedTreatment(t)}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      <TreatmentDetailModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
      />
    </div>
  );
}
