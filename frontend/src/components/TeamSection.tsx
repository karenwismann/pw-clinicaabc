'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { DOCTORS, SPECIALIST_GROUPS, Doctor } from '@/data/team';
import { Award, GraduationCap, X, ChevronRight, ExternalLink, HeartHandshake, Shield, Sparkles, Building2, Stethoscope, CheckCircle2, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { AppointmentModal } from './AppointmentModal';

export const TeamSection: React.FC = () => {
  const { language } = useLanguage();
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DOCTORS.map((doc) => {
          const data = doc[language] || doc.es;
          return (
            <div
              key={doc.id}
              className="bg-white rounded-3xl overflow-hidden border border-cfa-softBlue shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full h-56 bg-cfa-iceBlue overflow-hidden">
                  <Image
                    src={doc.imageSrc}
                    alt={doc.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cfa-navy/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-cfa-navy shadow-xs font-title inline-block">
                      {data.role}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h4 className="font-title text-base font-bold text-cfa-navy group-hover:text-cfa-cyan transition-colors leading-snug">
                    {doc.name}
                  </h4>
                  <p className="text-xs font-semibold text-cfa-cyan font-title">
                    {data.specialty}
                  </p>
                  <p className="text-xs text-cfa-grayDark line-clamp-2 font-sans">
                    {data.brief}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-cfa-grayBorder flex items-center justify-between">
                  <button
                    onClick={() => setSelectedDoctor(doc)}
                    className="text-xs font-bold text-cfa-cyan group-hover:text-cfa-deepBlue inline-flex items-center gap-1.5 transition-colors cursor-pointer font-title"
                  >
                    <span>{language === 'es' ? 'Ver más' : 'View more'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] text-cfa-grayText font-sans">Centro Médico ABC</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cfa-navy/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-cfa-softBlue/60 ring-1 ring-black/5 overflow-hidden max-h-[90vh] flex flex-col animate-scaleUp">
            <div className="relative bg-gradient-to-r from-cfa-navy to-cfa-deepBlue text-white p-6 rounded-t-3xl overflow-hidden flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/40 shadow-md flex-shrink-0">
                    <Image
                      src={selectedDoctor.imageSrc}
                      alt={selectedDoctor.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-title text-xl font-bold text-white">{selectedDoctor.name}</h3>
                    <p className="text-xs text-cfa-light font-sans">{(selectedDoctor[language] || selectedDoctor.es).role}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-cfa-grayDark leading-relaxed">
              <div className="p-4 bg-cfa-iceBlue rounded-2xl border border-cfa-softBlue space-y-1">
                <h4 className="font-title text-base font-bold text-cfa-navy">{(selectedDoctor[language] || selectedDoctor.es).specialty}</h4>
                <p className="text-xs text-cfa-grayDark font-sans">{(selectedDoctor[language] || selectedDoctor.es).brief}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-title text-sm font-bold text-cfa-navy uppercase tracking-wider">Trayectoria Médica</h4>
                <div className="space-y-2 font-sans">
                  {(selectedDoctor[language] || selectedDoctor.es).fullBio.map((p, idx) => (
                    <p key={idx} className="text-xs leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-cfa-grayLight border-t border-cfa-grayBorder rounded-b-3xl flex-shrink-0 flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedDoctor(null);
                  setIsAppointmentOpen(true);
                }}
                className="px-5 py-2.5 rounded-xl bg-cfa-cyan text-white text-xs font-bold shadow-sm hover:bg-cfa-deepBlue flex items-center gap-1.5 font-title cursor-pointer transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{language === 'es' ? 'Agendar Consulta' : 'Book Appointment'}</span>
              </button>
              <button
                onClick={() => setSelectedDoctor(null)}
                className="px-4 py-2 rounded-xl bg-white border border-cfa-grayBorder text-xs font-semibold cursor-pointer hover:bg-cfa-graySlate transition-colors"
              >
                {language === 'es' ? 'Cerrar' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </div>
  );
};
