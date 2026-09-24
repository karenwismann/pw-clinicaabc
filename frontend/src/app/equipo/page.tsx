'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { DOCTORS, SPECIALIST_GROUPS, Doctor } from '@/data/team';
import { Award, Users, GraduationCap, Sparkles, CheckCircle2, ChevronRight, Stethoscope, Heart, Calendar, X, ExternalLink, ShieldCheck, Linkedin } from 'lucide-react';
import { AppointmentModal } from '@/components/AppointmentModal';
import { useLanguage } from '@/context/LanguageContext';

export default function EquipoPage() {
  const { language } = useLanguage();
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const director = DOCTORS.find((d) => d.id === 'dr-carlos-navarro') || DOCTORS[0];
  const facultyDoctors = DOCTORS.filter((d) => d.id !== 'dr-carlos-navarro');

  const directorData = director[language] || director.es;

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-cfa-light text-xs font-semibold uppercase tracking-wider font-title">
            <Users className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Cuerpo Médico de Excelencia' : 'Medical Faculty of Excellence'}</span>
          </div>
          <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-light text-white">
            {language === 'es' ? 'El Equipo Médico' : 'Our Medical Team'}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-sans">
            {language === 'es'
              ? 'Liderados por el Dr. Carlos Navarro Martínez, nuestro grupo multidisciplinario cuenta con más de 35 años de experiencia transformando la medicina reproductiva en México.'
              : 'Led by Dr. Carlos Navarro Martínez, our multidisciplinary faculty brings over 35 years of experience advancing reproductive medicine in Mexico.'}
          </p>
        </div>
      </section>

      {/* 1. Dr. Carlos Navarro Martínez - Director Showcase Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-cfa-softBlue shadow-soft hover:shadow-elevated transition-all space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Real Doctor Photo */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-60 h-72 sm:w-64 sm:h-80 rounded-3xl overflow-hidden shadow-xl border-4 border-white ring-4 ring-cfa-softBlue bg-cfa-iceBlue group">
                <Image
                  src={director.imageSrc}
                  alt={director.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cfa-navy/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[11px] font-medium bg-[#004C97] text-white px-3 py-1 rounded-full shadow-md border border-white/60 font-title inline-flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-white flex-shrink-0" />
                    <span>{language === 'es' ? '1er Bebé FIV en México (1991)' : '1st IVF Baby in Mexico (1991)'}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Content & Bio */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cfa-softBlue text-cfa-cyan text-xs font-medium uppercase tracking-wider font-title">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{directorData.role}</span>
              </div>

              <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-light text-cfa-navy">
                {director.name}
              </h2>

              <p className="text-xs sm:text-sm font-light text-cfa-cyan font-title">
                {directorData.specialty}
              </p>

              <p className="text-sm sm:text-base text-cfa-grayDark leading-relaxed font-sans">
                {directorData.brief}
              </p>

              <div className="p-4 bg-cfa-iceBlue rounded-2xl border border-cfa-softBlue flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-cfa-cyan flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-cfa-navy font-sans leading-relaxed">
                  {language === 'es'
                    ? 'Subespecialidad en Texas Women’s Hospital (Baylor College of Medicine) y Greater Baltimore Medical Center (equipo del 1er bebé FIV en Norteamérica).'
                    : 'Fellowship training at Texas Women’s Hospital (Baylor College of Medicine) and Greater Baltimore Medical Center (North American 1st IVF baby team).'}
                </p>
              </div>

              {/* Action Buttons: Ver más & Agendar Cita */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedDoctor(director)}
                  className="px-6 py-3 rounded-xl bg-cfa-navy hover:bg-cfa-cyan text-white text-xs sm:text-sm font-medium shadow-md transition-all flex items-center gap-2 font-title cursor-pointer"
                >
                  <span>{language === 'es' ? 'Ver Trayectoria Completa' : 'View Full Medical Profile'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsAppointmentOpen(true)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cfa-cyan to-cfa-deepBlue text-white text-xs sm:text-sm font-medium shadow-md hover:brightness-105 transition-all flex items-center gap-2 font-title cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'es' ? 'Agendar Consulta con el Dr. Navarro' : 'Book Consultation with Dr. Navarro'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Especialistas Adscritos - Grid con Fotos Reales y Botón "Ver más" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cfa-softBlue text-cfa-cyan text-xs font-semibold uppercase tracking-wider font-title">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Especialistas Adscritos' : 'Faculty Specialists'}</span>
          </div>
          <h3 className="font-title text-2xl sm:text-3xl font-light text-cfa-navy">
            {language === 'es' ? 'Médicos Especialistas de la Clínica' : 'Specialized Clinical Faculty'}
          </h3>
          <p className="text-xs sm:text-sm text-cfa-grayText font-sans">
            {language === 'es'
              ? 'Conoce a los especialistas adscritos en reproducción asistida y cirugía endoscópica.'
              : 'Meet our attending specialists in assisted reproduction, andrology, and endoscopic surgery.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facultyDoctors.map((doc) => {
            const data = doc[language] || doc.es;
            return (
              <div
                key={doc.id}
                className="bg-white rounded-3xl overflow-hidden border border-cfa-softBlue shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Photo container */}
                  <div className="relative w-full h-64 sm:h-72 bg-cfa-iceBlue overflow-hidden">
                    <Image
                      src={doc.imageSrc}
                      alt={doc.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cfa-navy/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    <div className="absolute bottom-3 left-4 right-4 flex justify-center">
                      <span className="w-full text-center text-xs font-medium px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#004C97] shadow-sm font-title border border-white/60 truncate">
                        {data.role}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-2.5">
                    <h4 className="font-title text-lg font-normal text-cfa-navy group-hover:text-cfa-cyan transition-colors leading-snug">
                      {doc.name}
                    </h4>
                    <p className="text-xs font-light text-cfa-cyan font-title">
                      {data.specialty}
                    </p>
                    <p className="text-xs sm:text-sm text-cfa-grayDark leading-relaxed line-clamp-3 font-sans">
                      {data.brief}
                    </p>
                  </div>
                </div>

                {/* Footer with "Ver más" Button & LinkedIn */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-cfa-grayBorder flex items-center justify-between">
                    <button
                      onClick={() => setSelectedDoctor(doc)}
                      className="text-xs font-bold text-cfa-cyan group-hover:text-cfa-deepBlue inline-flex items-center gap-1.5 transition-colors cursor-pointer font-title"
                    >
                      <span>{language === 'es' ? 'Ver más sobre el especialista' : 'View full profile'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {doc.linkedinUrl ? (
                      <a
                        href={doc.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white transition-all flex items-center gap-1"
                        aria-label="LinkedIn"
                        title="Ver LinkedIn"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[10px] text-cfa-grayText font-medium font-sans">Centro Médico ABC</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Directorio Multidisciplinario Completo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cfa-softBlue text-cfa-cyan text-xs font-semibold uppercase tracking-wider font-title">
            <Users className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Directorio Multidisciplinario' : 'Multidisciplinary Directory'}</span>
          </div>
          <h3 className="font-title text-2xl sm:text-3xl font-light text-cfa-navy">
            {language === 'es' ? 'Todas las Subespecialidades en un Solo Lugar' : 'All Reproductive Subspecialties in One Place'}
          </h3>
          <p className="text-xs sm:text-sm text-cfa-grayText font-sans">
            {language === 'es'
              ? 'Ginecólogos asociados, urólogos, genetistas, embriólogos y coordinadoras del Centro Médico ABC.'
              : 'Associated gynecologists, urologists, geneticists, embryologists, and donor coordinators at ABC Medical Center.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALIST_GROUPS.map((group) => {
            const title = group.title[language] || group.title.es;
            const desc = group.description[language] || group.description.es;
            const linkText = group.linkText ? (group.linkText[language] || group.linkText.es) : undefined;

            return (
              <div
                key={group.id}
                className="bg-white p-6 rounded-3xl border border-cfa-softBlue shadow-soft space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cfa-softBlue text-cfa-cyan flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-title text-lg font-medium text-cfa-navy">
                    {title}
                  </h4>
                  <p className="text-xs text-cfa-grayDark leading-relaxed font-sans">
                    {desc}
                  </p>

                  {/* Members list */}
                  <ul className="space-y-1.5 pt-2 border-t border-cfa-grayBorder/80">
                    {group.members.map((m, idx) => {
                      const memberTitle = m.title ? (m.title[language] || m.title.es) : undefined;
                      return (
                        <li key={idx} className="text-xs text-cfa-navy flex items-start gap-2 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cfa-cyan flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold">{m.name}</span>
                            {memberTitle && (
                              <span className="text-cfa-grayText block text-[11px]">{memberTitle}</span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {group.linkUrl && (
                  <div className="pt-2">
                    <a
                      href={group.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-cfa-cyan hover:underline font-medium inline-flex items-center gap-1 font-title"
                    >
                      <span>{linkText || group.linkUrl}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* DOCTOR DETAIL MODAL ("VER MÁS") */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cfa-navy/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-cfa-softBlue/60 ring-1 ring-black/5 overflow-hidden max-h-[90vh] flex flex-col animate-scaleUp">
            
            {/* Modal Header */}
            <div className="relative bg-gradient-to-r from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white p-6 rounded-t-3xl overflow-hidden flex-shrink-0">
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/40 flex-shrink-0 shadow-md bg-cfa-iceBlue">
                    <Image
                      src={selectedDoctor.curriculumImageSrc || selectedDoctor.imageSrc}
                      alt={selectedDoctor.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-title text-xl sm:text-2xl font-light text-white drop-shadow-sm">
                      {selectedDoctor.name}
                    </h3>
                    <p className="text-xs text-cfa-light drop-shadow-sm font-sans font-light">
                      {(selectedDoctor[language] || selectedDoctor.es).role} • Centro Médico ABC
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-cfa-grayDark leading-relaxed">
              
              {/* Cuadro de Fotografía Grande del Doctor antes del texto */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-5 sm:p-6 bg-gradient-to-br from-cfa-iceBlue via-white to-cfa-iceBlue/50 rounded-3xl border border-cfa-softBlue shadow-soft">
                <div className="relative w-44 h-56 sm:w-52 sm:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-4 ring-cfa-softBlue/50 flex-shrink-0 bg-white">
                  <Image
                    src={selectedDoctor.curriculumImageSrc || selectedDoctor.imageSrc}
                    alt={selectedDoctor.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="space-y-3 text-center sm:text-left flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cfa-cyan text-white text-xs font-medium uppercase tracking-wider font-title">
                    <GraduationCap className="w-3.5 h-3.5 text-white" />
                    <span>{(selectedDoctor[language] || selectedDoctor.es).role}</span>
                  </div>
                  <h3 className="font-title text-xl sm:text-2xl font-light text-cfa-navy">
                    {selectedDoctor.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-cfa-cyan font-title">
                    {(selectedDoctor[language] || selectedDoctor.es).specialty}
                  </p>
                  <p className="text-xs sm:text-sm text-cfa-grayDark font-sans leading-relaxed">
                    {(selectedDoctor[language] || selectedDoctor.es).brief}
                  </p>
                  <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-cfa-navy font-semibold">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-cfa-cyan" />
                      <span>Centro Médico ABC Campus Santa Fe</span>
                    </div>
                    {selectedDoctor.linkedinUrl && (
                      <a
                        href={selectedDoctor.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A66C2] text-white text-xs font-bold hover:brightness-110 shadow-xs transition-all font-title"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>LinkedIn</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Full Bio Paragraphs */}
              <div className="space-y-3">
                <h4 className="font-title text-sm font-semibold text-cfa-navy uppercase tracking-wider flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-cfa-cyan" />
                  <span>{language === 'es' ? 'Trayectoria Médica & Experiencia' : 'Medical Background & Experience'}</span>
                </h4>
                <div className="space-y-2.5 font-sans">
                  {(selectedDoctor[language] || selectedDoctor.es).fullBio.map((para, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-cfa-grayDark leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Education & Fellowships */}
              {(selectedDoctor[language] || selectedDoctor.es).education && (
                <div className="space-y-3 pt-2 border-t border-cfa-grayBorder">
                  <h4 className="font-title text-sm font-semibold text-cfa-navy uppercase tracking-wider flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cfa-cyan" />
                    <span>{language === 'es' ? 'Formación Académica & Fellowships' : 'Academic Credentials & Fellowships'}</span>
                  </h4>
                  <ul className="space-y-2">
                    {(selectedDoctor[language] || selectedDoctor.es).education?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-cfa-grayDark font-sans">
                        <CheckCircle2 className="w-4 h-4 text-cfa-cyan flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Achievements */}
              {(selectedDoctor[language] || selectedDoctor.es).achievements && (
                <div className="space-y-3 pt-2 border-t border-cfa-grayBorder">
                  <h4 className="font-title text-sm font-semibold text-cfa-navy uppercase tracking-wider flex items-center gap-2">
                    <Award className="w-4 h-4 text-cfa-cyan" />
                    <span>{language === 'es' ? 'Reconocimientos y Acreditaciones' : 'Achievements & Accreditations'}</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(selectedDoctor[language] || selectedDoctor.es).achievements?.map((ach, idx) => (
                      <div key={idx} className="p-3 bg-cfa-grayLight rounded-xl border border-cfa-grayBorder text-xs text-cfa-navy font-sans flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-cfa-cyan flex-shrink-0" />
                        <span className="font-semibold">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-cfa-grayLight border-t border-cfa-grayBorder rounded-b-3xl flex-shrink-0 flex items-center justify-between">
              <span className="text-xs text-cfa-grayText font-medium font-sans">
                {language === 'es' ? 'Centro Médico ABC Campus Santa Fe' : 'ABC Medical Center Santa Fe Campus'}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setSelectedDoctor(null);
                    setIsAppointmentOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cfa-cyan to-cfa-deepBlue text-white text-xs font-bold shadow-sm hover:brightness-105 transition-all flex items-center gap-1.5 font-title cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Agendar con este Especialista' : 'Book with this Specialist'}</span>
                </button>
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="px-4 py-2.5 rounded-xl bg-white border border-cfa-grayBorder text-cfa-navy text-xs font-semibold hover:bg-cfa-graySlate transition-colors font-title cursor-pointer"
                >
                  {language === 'es' ? 'Cerrar' : 'Close'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Appointment Modal Global */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </div>
  );
}
