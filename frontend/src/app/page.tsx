'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeroCarousel } from '@/components/HeroCarousel';
import { InteractiveTimeline } from '@/components/InteractiveTimeline';
import { TreatmentCard, TreatmentDetailModal } from '@/components/TreatmentCard';
import { AppointmentForm } from '@/components/AppointmentModal';
import { TREATMENTS, Treatment } from '@/data/treatments';
import { DOCTORS, Doctor } from '@/data/team';
import { Award, ArrowRight, Calendar, MapPin, Phone, CheckCircle2, ShieldCheck, Sparkles, Users, Stethoscope, ChevronRight, X, GraduationCap, Radio, Play, Headphones, Mic, ExternalLink, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { language, t } = useLanguage();
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const featuredIds = [
    'fertilizacion-in-vitro',
    'icsi',
    'transferencia-de-embriones',
    'diagnostico-genetico-embrionario',
    'congelacion-de-ovulos',
    'donacion-de-ovulos-y-esperma'
  ];
  const featuredTreatments = featuredIds
    .map((id) => TREATMENTS.find((t) => t.id === id))
    .filter((t): t is Treatment => Boolean(t));

  return (
    <div className="space-y-20 pb-20 bg-white">
      {/* 1. Hero Carousel Full-Screen */}
      <section className="w-full">
        <HeroCarousel />
      </section>

      {/* 2. Sección Destacada: Video VIDA • Excelencia en Reproducción Asistida */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-[#69B3E7]/40 space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#69B3E7]/20 text-[#004C97] text-xs font-bold uppercase tracking-wider font-title">
              <Sparkles className="w-4 h-4 text-[#004C97]" />
              <span>{language === 'es' ? 'Centro de Excelencia' : 'Center of Excellence'}</span>
            </div>
            <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2559] leading-tight">
              {language === 'es' ? 'Excelencia en Reproducción Asistida' : 'Excellence in Assisted Reproduction'}
            </h2>
          </div>

          {/* Full Screen / Large Widescreen Video Player */}
          <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-[#071A40] border-2 border-[#69B3E7]/50 shadow-2xl group">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/imagenes/vida_thumb.jpg"
            >
              <source src="/videos/vida.mp4" type="video/mp4" />
              <source src="/videos/vida.mov" type="video/quicktime" />
              {language === 'es'
                ? 'Tu navegador no soporta la reproducción directa de este video.'
                : 'Your browser does not support HTML5 video playback.'}
            </video>
          </div>

          {/* Small and Subtle Text Below Video */}
          <div className="text-center max-w-3xl mx-auto pt-1 space-y-2">
            <p className="text-xs sm:text-sm text-[#0B2559]/75 leading-relaxed font-sans">
              {t.home.headlineText}
            </p>
            <div className="flex items-center justify-center gap-2 text-[11px] font-semibold text-[#004C97] font-title uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#004C97]" />
              <span>{language === 'es' ? 'Centro Médico ABC Campus Santa Fe • Consultorio 332' : 'ABC Medical Center Santa Fe Campus • Suite 332'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sección Destacada: Podcast Oficial en YouTube & Comunidad Digital */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#004C97] via-[#0B2559] to-[#071A40] text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-[#69B3E7]/30">
          
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#69B3E7]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#004C97]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Enlarged Video / Podcast Showcase in Transparent Soap Bubble Frame */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <a
                href="https://www.youtube.com/watch?v=GCagLjVF8U4"
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative"
              >
                {/* Iridescent Soap Bubble Glass Container */}
                <div className="relative rounded-[2.5rem] p-2.5 sm:p-3.5 bg-white/10 backdrop-blur-2xl border-2 border-white/50 shadow-[0_15px_50px_rgba(11,37,89,0.3),inset_0_2px_6px_rgba(255,255,255,0.5)] ring-1 ring-[#69B3E7]/40 hover:border-[#69B3E7]/90 hover:shadow-[0_20px_60px_rgba(105,179,231,0.45)] transition-all duration-500 overflow-hidden">
                  
                  {/* Soap Bubble Top Glare / Specular Highlight */}
                  <div className="absolute top-0 inset-x-6 h-28 bg-gradient-to-b from-white/40 via-white/10 to-transparent rounded-t-[2.5rem] pointer-events-none z-20" />

                  {/* Inner Video Surface with Real Original YouTube Thumbnail */}
                  <div className="relative w-full h-80 sm:h-96 lg:h-[420px] rounded-[2rem] overflow-hidden bg-[#071A40] backdrop-blur-sm">
                    <Image
                      src="/imagenes/youtube_podcast_thumb.jpg"
                      alt="Podcast Oficial CFA - Dr. Carlos Navarro Martínez"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A40]/90 via-[#071A40]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Top Bar with YouTube Transparent Logo */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <div className="px-3.5 py-1.5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-md flex items-center gap-2">
                        <Image
                          src="/imagenes/logos/youtube_full.png"
                          alt="YouTube"
                          width={85}
                          height={20}
                          className="object-contain h-4 sm:h-5 w-auto drop-shadow"
                        />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-red-600/90 text-[10px] font-black text-white uppercase font-title tracking-wider shadow-md backdrop-blur-xs">
                        4K Ultra HD
                      </span>
                    </div>

                    {/* Central Luminous Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-20 h-20 rounded-full bg-red-500/30 animate-ping pointer-events-none" />
                        <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-tr from-red-600 to-red-500 text-white flex items-center justify-center shadow-2xl border border-white/40 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-7 sm:w-8 h-7 sm:h-8 fill-white translate-x-0.5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Card Bottom Meta */}
                    <div className="absolute bottom-4 left-4 right-4 space-y-1 text-white z-10">
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#69B3E7] uppercase tracking-wider font-title">
                        <Mic className="w-3.5 h-3.5 text-red-400" />
                        <span>Dr. Carlos Navarro Martínez • Conducción Médica</span>
                      </div>
                      <h4 className="font-title font-bold text-base sm:text-lg text-white group-hover:text-[#69B3E7] transition-colors leading-snug">
                        {language === 'es' ? 'Podcast CFA: Preguntas Frecuentes y Casos de Éxito' : 'CFA Podcast: FAQ & Patient Success Stories'}
                      </h4>
                      <p className="text-xs text-[#69B3E7]/90 font-sans">
                        {language === 'es' ? 'Haz clic para reproducir episodios en YouTube' : 'Click to watch full episodes on YouTube'}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Right Column: Summarized & Concise Podcast Info & CTAs */}
            <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-wider font-title">
                  <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                  <span>{language === 'es' ? 'Podcast Oficial CFA' : 'Official CFA Podcast'}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#69B3E7] text-xs font-medium font-sans">
                  <Headphones className="w-3.5 h-3.5 text-[#69B3E7]" />
                  <span>{language === 'es' ? 'Episodios Semanales' : 'Weekly Episodes'}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="font-title text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {language === 'es'
                    ? 'Historias de Fertilidad, Ciencia & Esperanza'
                    : 'Fertility Stories, Science & Hope'}
                </h2>
                <p className="text-xs sm:text-sm text-blue-50 leading-relaxed font-sans">
                  {language === 'es'
                    ? 'Diálogos médicos claros con el Dr. Carlos Navarro Martínez y especialistas del Centro Médico ABC Santa Fe sobre los últimos avances científicos.'
                    : 'Clear medical dialogues with Dr. Carlos Navarro Martínez and ABC Medical Center specialists regarding the latest scientific advances.'}
                </p>
              </div>

              {/* Dynamic Equalizer Visual Indicator */}
              <div className="flex items-center gap-3.5 p-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15">
                <div className="flex items-end gap-1 h-5 px-1">
                  <span className="w-1 bg-red-500 rounded-full h-3 animate-pulse" />
                  <span className="w-1 bg-[#69B3E7] rounded-full h-5 animate-pulse" style={{ animationDelay: '150ms' }} />
                  <span className="w-1 bg-red-400 rounded-full h-2 animate-pulse" style={{ animationDelay: '300ms' }} />
                  <span className="w-1 bg-[#69B3E7] rounded-full h-5 animate-pulse" style={{ animationDelay: '450ms' }} />
                  <span className="w-1 bg-red-500 rounded-full h-3.5 animate-pulse" style={{ animationDelay: '200ms' }} />
                </div>
                <div className="text-xs text-blue-50 font-sans">
                  <strong className="text-white font-title block">
                    {language === 'es' ? 'Canal Oficial:' : 'Official Channel:'} @infertilidadabc
                  </strong>
                  <span className="text-[#69B3E7] text-[11px]">
                    {language === 'es' ? 'Video y audio en alta definición' : 'High-definition video & audio'}
                  </span>
                </div>
              </div>

              {/* CTAs with Transparent PNG Logos */}
              <div className="space-y-3 pt-1">
                {/* Main YouTube CTA Button */}
                <a
                  href="https://www.youtube.com/watch?v=GCagLjVF8U4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-red-600/60 hover:bg-red-600/80 border border-red-400/40 backdrop-blur-md text-white font-extrabold text-sm shadow-lg shadow-red-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all font-title group"
                >
                  <div className="w-5 h-5 relative flex-shrink-0">
                    <Image
                      src="/imagenes/logos/youtube_icon.png"
                      alt="YouTube Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>{language === 'es' ? 'Ver en YouTube' : 'Watch on YouTube'}</span>
                  <ExternalLink className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Social Media Channels Grid */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <span className="text-xs text-[#69B3E7] font-title font-semibold">
                    {language === 'es' ? 'Síguenos:' : 'Follow us:'}
                  </span>

                  {/* Instagram Button */}
                  <a
                    href="https://www.instagram.com/clinicafertilizacionasistida/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold shadow-sm hover:scale-105 transition-all font-title"
                    title="Instagram @clinicafertilizacionasistida"
                  >
                    <div className="w-4 h-4 relative flex-shrink-0">
                      <Image
                        src="/imagenes/logos/instagram.png"
                        alt="Instagram"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span>Instagram</span>
                  </a>

                  {/* Facebook Button */}
                  <a
                    href="https://www.facebook.com/ClinicadeFertilizacionAsistida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold shadow-sm hover:scale-105 transition-all font-title"
                    title="Facebook CFA"
                  >
                    <div className="w-4 h-4 relative flex-shrink-0">
                      <Image
                        src="/imagenes/logos/facebook.png"
                        alt="Facebook"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span>Facebook</span>
                  </a>

                  {/* LinkedIn Button */}
                  <a
                    href="https://www.linkedin.com/company/cl%C3%ADnica-de-fertilizaci%C3%B3n-asistida/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#004C97] border border-white/20 text-white text-xs font-bold shadow-sm hover:scale-105 transition-all font-title"
                    title="LinkedIn Clínica de Fertilización Asistida ABC"
                  >
                    <Linkedin className="w-4 h-4 text-white flex-shrink-0" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Línea de Tiempo Interactiva */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveTimeline />
      </section>

      {/* 5. Tratamientos Destacados */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#69B3E7]/20 text-[#004C97] text-xs font-semibold uppercase tracking-wider font-title">
            <Sparkles className="w-3.5 h-3.5 text-[#004C97]" />
            <span>{t.home.treatmentsBadge}</span>
          </div>
          <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2559]">
            {t.home.treatmentsTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#0B2559]/80 font-sans">
            {t.home.treatmentsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTreatments.map((treatment) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              onOpenModal={(tItem) => setSelectedTreatment(tItem)}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/tratamientos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border-2 border-[#004C97] text-[#004C97] font-bold text-sm hover:bg-[#004C97] hover:text-white shadow-soft transition-all font-title"
          >
            <span>{t.home.exploreBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. El Equipo Médico - Doctores con Fotos y Ver Más (Pantalla Completa Uniforme) */}
      <section className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#69B3E7]/20 text-[#004C97] text-xs font-semibold uppercase tracking-wider font-title">
            <Users className="w-3.5 h-3.5 text-[#004C97]" />
            <span>{language === 'es' ? 'Cuerpo Médico de Excelencia' : 'Medical Faculty of Excellence'}</span>
          </div>
          <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2559]">
            {language === 'es' ? 'Dr. Carlos Navarro Martínez & Especialistas' : 'Dr. Carlos Navarro Martínez & Specialists'}
          </h2>
          <p className="text-sm sm:text-base text-[#0B2559]/80 font-sans max-w-4xl mx-auto text-balance leading-relaxed">
            {language === 'es'
              ? 'Equipo pionero de reproducción asistida con más de 35\u00A0años de experiencia en el Centro Médico ABC Santa\u00A0Fe.'
              : 'Pioneering assisted reproduction faculty with over 35\u00A0years of medical leadership at ABC Medical Center Santa\u00A0Fe.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
          {DOCTORS.map((doc) => {
            const data = doc[language] || doc.es;
            return (
              <div
                key={doc.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#69B3E7]/40 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group h-full"
              >
                <div className="flex flex-col flex-1">
                  {/* Doctor Photo with Uniform Aspect Ratio */}
                  <div className="relative w-full aspect-[4/5] bg-[#F0F7FD] overflow-hidden">
                    <Image
                      src={doc.imageSrc}
                      alt={doc.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2559]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#004C97] shadow-xs font-title inline-block line-clamp-1">
                        {data.role}
                      </span>
                    </div>
                  </div>

                  {/* Doctor Info with Consistent Spacing */}
                  <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <h4 className="font-title text-sm sm:text-base font-bold text-[#0B2559] group-hover:text-[#004C97] transition-colors leading-snug min-h-[44px] flex items-center">
                        {doc.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs font-semibold text-[#004C97] font-title min-h-[34px] flex items-center mt-1 leading-snug">
                        {data.specialty}
                      </p>
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#0B2559]/75 line-clamp-3 font-sans leading-relaxed min-h-[48px]">
                      {data.brief}
                    </p>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-4 sm:p-4.5 pt-0 mt-auto">
                  <div className="pt-2.5 border-t border-[#69B3E7]/40 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedDoctor(doc)}
                      className="text-xs font-bold text-[#004C97] group-hover:text-[#0B2559] inline-flex items-center gap-1 transition-colors cursor-pointer font-title"
                    >
                      <span>{language === 'es' ? 'Ver más' : 'View more'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
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
                      <span className="text-[10px] text-[#0B2559]/70 font-sans">Centro Médico ABC</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/equipo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border-2 border-[#004C97] text-[#004C97] font-bold text-sm hover:bg-[#004C97] hover:text-white shadow-soft transition-all font-title"
          >
            <span>{language === 'es' ? 'Ver Directorio Médico Completo' : 'View Full Medical Directory'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. Agenda una cita - Direct Booking Form */}
      <section id="agendar-cita" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#004C97] via-[#0B2559] to-[#0B2559] rounded-3xl p-6 sm:p-12 text-white shadow-xl border border-[#69B3E7]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Columna Izquierda: Información de Contacto Directo */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-[#69B3E7] text-xs font-semibold uppercase tracking-wider font-title">
                <Calendar className="w-3.5 h-3.5" />
                <span>{t.home.appointmentBadge}</span>
              </div>

              <h2 className="font-title text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                {t.home.appointmentTitle}
              </h2>

              <p className="text-sm sm:text-base text-blue-50 leading-relaxed font-sans">
                {t.home.appointmentText}
              </p>

              <div className="space-y-3 pt-2 font-sans">
                <div className="flex items-center gap-3 text-sm text-blue-50">
                  <MapPin className="w-5 h-5 text-[#69B3E7] flex-shrink-0" />
                  <span>Av. Carlos Graef Fernández #154, edificio CEGOP, Piso 3, consultorio 332</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-blue-50">
                  <Phone className="w-5 h-5 text-[#69B3E7] flex-shrink-0" />
                  <span>(55) 5273 5194 / (55) 5276 54 63</span>
                </div>
              </div>

              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-xs text-blue-50 font-sans space-y-1">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#69B3E7]" />
                  <span>{language === 'es' ? 'Atención Médica Directa' : 'Direct Medical Attention'}</span>
                </p>
                <p>
                  {language === 'es' ? 'Tu solicitud llega de inmediato a nuestro equipo en' : 'Your request is forwarded instantly to'} <strong>recepcion@infertilidadabc.com</strong>
                </p>
              </div>
            </div>

            {/* Columna Derecha: Formulario Completo de Cita */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-[#0B2559]">
              <h3 className="font-title text-xl font-bold text-[#004C97] mb-4">
                {t.home.formTitle}
              </h3>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Detalle de Doctor ("Ver más") */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B2559]/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#69B3E7]/50 ring-1 ring-black/5 overflow-hidden max-h-[90vh] flex flex-col animate-scaleUp">
            <div className="relative bg-gradient-to-r from-[#004C97] via-[#0B2559] to-[#0B2559] text-white p-6 rounded-t-3xl overflow-hidden flex-shrink-0">
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/40 flex-shrink-0 shadow-md bg-white">
                    <Image
                      src={selectedDoctor.curriculumImageSrc || selectedDoctor.imageSrc}
                      alt={selectedDoctor.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-title text-xl sm:text-2xl font-bold text-white drop-shadow-sm">
                      {selectedDoctor.name}
                    </h3>
                    <p className="text-xs text-[#69B3E7] drop-shadow-sm font-sans font-medium">
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

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#0B2559] leading-relaxed">
              {/* Cuadro de Fotografía Grande del Doctor antes del texto */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-5 sm:p-6 bg-gradient-to-br from-[#EBF5FC] via-white to-[#EBF5FC]/50 rounded-3xl border border-[#69B3E7] shadow-soft">
                <div className="relative w-44 h-56 sm:w-52 sm:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-4 ring-[#69B3E7]/50 flex-shrink-0 bg-white">
                  <Image
                    src={selectedDoctor.curriculumImageSrc || selectedDoctor.imageSrc}
                    alt={selectedDoctor.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="space-y-3 text-center sm:text-left flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004C97] text-white text-xs font-bold uppercase tracking-wider font-title">
                    <GraduationCap className="w-3.5 h-3.5 text-white" />
                    <span>{(selectedDoctor[language] || selectedDoctor.es).role}</span>
                  </div>
                  <h3 className="font-title text-xl sm:text-2xl font-extrabold text-[#0B2559]">
                    {selectedDoctor.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#004C97] font-title">
                    {(selectedDoctor[language] || selectedDoctor.es).specialty}
                  </p>
                  <p className="text-xs sm:text-sm text-[#0B2559]/80 font-sans leading-relaxed">
                    {(selectedDoctor[language] || selectedDoctor.es).brief}
                  </p>
                  <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-[#0B2559] font-semibold">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#004C97]" />
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

              <div className="space-y-3">
                <h4 className="font-title text-sm font-bold text-[#004C97] uppercase tracking-wider flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#004C97]" />
                  <span>{language === 'es' ? 'Trayectoria Médica & Experiencia' : 'Medical Background & Experience'}</span>
                </h4>
                <div className="space-y-2.5 font-sans">
                  {(selectedDoctor[language] || selectedDoctor.es).fullBio.map((para, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-[#0B2559]/80 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {(selectedDoctor[language] || selectedDoctor.es).education && (
                <div className="space-y-3 pt-2 border-t border-[#69B3E7]/40">
                  <h4 className="font-title text-sm font-bold text-[#004C97] uppercase tracking-wider flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#004C97]" />
                    <span>{language === 'es' ? 'Formación Académica & Fellowships' : 'Academic Credentials & Fellowships'}</span>
                  </h4>
                  <ul className="space-y-2">
                    {(selectedDoctor[language] || selectedDoctor.es).education?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#0B2559]/80 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-[#004C97] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="p-4 bg-[#F0F7FD] border-t border-[#69B3E7]/40 rounded-b-3xl flex-shrink-0 flex items-center justify-between">
              <span className="text-xs text-[#0B2559]/70 font-medium font-sans">
                Centro Médico ABC Campus Santa Fe
              </span>
              <button
                onClick={() => setSelectedDoctor(null)}
                className="px-4 py-2 rounded-xl bg-white border border-[#69B3E7] text-[#004C97] text-xs font-semibold hover:bg-[#69B3E7]/20 transition-colors font-title cursor-pointer"
              >
                {language === 'es' ? 'Cerrar' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Tratamiento si está abierto */}
      <TreatmentDetailModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
      />
    </div>
  );
}
