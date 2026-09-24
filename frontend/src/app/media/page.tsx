'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Video, Mic, Users, Youtube, ExternalLink, Calendar, Sparkles, Clock, AlertCircle, X, Linkedin, FileText, Download, Pill, ShieldCheck, CheckCircle2, Info, Eye, Instagram, Facebook, Share2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface VideoItem {
  id: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  doctors: string[];
  thumbnail: string;
  videoUrl: string;
  localVideoSrc?: string;
  duration: string;
  category: { es: string; en: string };
  isDrivePending?: boolean;
}

interface MedicationInstruction {
  id: string;
  name: string;
  activeSubstance: string;
  category: { es: string; en: string };
  description: { es: string; en: string };
  pdfUrl: string;
  badge: { es: string; en: string };
  badgeColor: string;
}

const MEDICATION_INSTRUCTIONS: MedicationInstruction[] = [
  {
    id: "cetrotide",
    name: "Cetrotide® 0.25 mg",
    activeSubstance: "Cetrorelix acetato",
    category: {
      es: "Antagonista de GnRH",
      en: "GnRH Antagonist"
    },
    description: {
      es: "Prevención de la ovulación prematura y control del pico de LH durante la estimulación ovárica controlada para FIV.",
      en: "Prevention of premature ovulation and LH surge control during controlled ovarian stimulation for IVF."
    },
    pdfUrl: "/documentos/Cetrotide.pdf",
    badge: { es: "Guía de Reconstitución y Aplicación", en: "Preparation & Injection Guide" },
    badgeColor: "bg-[#004C97] text-white"
  },
  {
    id: "choriomon",
    name: "Choriomon® 5,000 UI",
    activeSubstance: "Gonadotrofina Coriónica Humana (hCG)",
    category: {
      es: "Maduración Folicular & Disparo",
      en: "Follicular Maturation & Trigger"
    },
    description: {
      es: "Inducción de la maduración ovocitaria final y disparo ovulatorio programado con hora exacta para la captura de óvulos.",
      en: "Induction of final oocyte maturation and precise scheduled trigger shot prior to follicular egg retrieval."
    },
    pdfUrl: "/documentos/choriomon.pdf",
    badge: { es: "Instrucciones de Disparo Programado", en: "Trigger Shot Guidelines" },
    badgeColor: "bg-[#0B2559] text-white"
  },
  {
    id: "gonal",
    name: "Gonal-f®",
    activeSubstance: "Folitropina alfa (r-hFSH recombinante)",
    category: {
      es: "Estimulación Folicular",
      en: "Follicular Stimulation"
    },
    description: {
      es: "Estimulación del desarrollo folicular múltiple en pacientes sometidas a técnicas de reproducción asistida.",
      en: "Stimulation of multiple follicular development in patients undergoing assisted reproduction techniques."
    },
    pdfUrl: "/documentos/gonal.pdf",
    badge: { es: "Guía de Pluma y Aplicación", en: "Pen Injector & Dosing Guide" },
    badgeColor: "bg-[#004C97] text-white"
  },
  {
    id: "merapur",
    name: "Merapur® 75 UI",
    activeSubstance: "Menotropina Altamente Purificada (HP-hMG)",
    category: {
      es: "Gonadotrofina Combinada (FSH + LH)",
      en: "Combined Gonadotropin (FSH + LH)"
    },
    description: {
      es: "Reclutamiento y crecimiento folicular mediante actividad balanceada de FSH y LH para protocolos de alta complejidad.",
      en: "Follicular recruitment and growth via balanced FSH and LH activity in high-complexity protocols."
    },
    pdfUrl: "/documentos/merapur.pdf",
    badge: { es: "Preparación y Aplicación Subcutánea", en: "Subcutaneous Preparation Guide" },
    badgeColor: "bg-[#0B2559] text-white"
  }
];

const MEDIA_VIDEOS: VideoItem[] = [
  {
    id: "video-vida-cfa",
    title: {
      es: "Video Institucional: VIDA • Excelencia en Reproducción Asistida",
      en: "Institutional Video: LIFE • Excellence in Assisted Reproduction"
    },
    description: {
      es: "Cápsula cinematográfica sobre el milagro de la vida, la tecnología de laboratorio y el acompañamiento médico integral en el Centro Médico ABC Santa Fe.",
      en: "Cinematic film showcasing the miracle of life, laboratory technology, and personalized medical care at ABC Medical Center Santa Fe."
    },
    doctors: ["Dr. Carlos Navarro Martínez", "Dr. Jorge Rodríguez Purata", "Cuerpo Médico CFA"],
    thumbnail: "/imagenes/carrusel.jpg",
    videoUrl: "https://www.youtube.com/@infertilidadabc",
    localVideoSrc: "/videos/vida.mp4",
    duration: "1:10 min • HD",
    category: { es: "Timelapse", en: "Timelapse" }
  },
  {
    id: "video-institucional-2026",
    title: {
      es: "Video Institucional: Recorrido por Instalaciones y Laboratorio de Alta Complejidad",
      en: "Institutional Video: Tour of High-Complexity Facilities and Laboratories"
    },
    description: {
      es: "Recorrido en alta definición por nuestras instalaciones en Centro Médico ABC Santa Fe, destacando el sistema RI Witness RFID, incubadoras Tri-Gas, Timelapse MIRI TL12 y quirófano especializado.",
      en: "High-definition tour of our ABC Santa Fe facilities, showcasing the RI Witness RFID security system, Tri-Gas incubators, MIRI TL12 Timelapse, and specialized surgical suite."
    },
    doctors: ["Dr. Carlos Navarro Martínez", "Dra. Stephanie Lizmi Romano", "Biól. Paola Guerrero Jiménez"],
    thumbnail: "/imagenes/instalaciones/quirofano_hd.jpg",
    videoUrl: "https://www.youtube.com/@infertilidadabc",
    localVideoSrc: "/videos/recorrido_instalaciones.mp4",
    duration: "1:26 min • Full HD",
    category: { es: "Instalaciones & Lab", en: "Facilities & Lab" }
  }
];

export default function MediaPage() {
  const { language } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [activePdf, setActivePdf] = useState<MedicationInstruction | null>(null);

  return (
    <div className="space-y-16 pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#0B2559] via-[#0B2559] to-[#004C97] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-[#69B3E7] text-xs font-semibold uppercase tracking-wider font-title">
            <Video className="w-3.5 h-3.5 text-[#69B3E7]" />
            <span>{language === 'es' ? 'Multimedia & Audiovisual' : 'Multimedia & Audiovisual'}</span>
          </div>
          <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-light text-white">
            {language === 'es' ? 'Centro de Recursos' : 'Resource Center'}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-sans">
            {language === 'es'
              ? 'Accede a instrucciones médicas, videos, y links de referencia.'
              : 'Access medical instructions, videos, and reference links.'}
          </p>
        </div>
      </section>

      {/* 1. SECCIÓN DESTACADA: INSTRUCCIONES MÉDICAS IMPORTANTES (PDFs DE MEDICAMENTOS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-gradient-to-br from-[#0B2559] via-[#004C97] to-[#0B2559] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-[#69B3E7]/40 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/20 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/30 text-[#69B3E7] text-xs font-bold uppercase tracking-wider font-title">
                <Pill className="w-3.5 h-3.5 text-[#69B3E7]" />
                <span>{language === 'es' ? 'Guías Clínicas para Pacientes' : 'Patient Clinical Guides'}</span>
              </div>
              <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight">
                {language === 'es'
                  ? 'Instrucciones Médicas Importantes'
                  : 'Important Medical Instructions'}
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 max-w-2xl font-sans leading-relaxed">
                {language === 'es'
                  ? 'Documentos oficiales en formato PDF con el paso a paso detallado para la correcta preparación, reconstitución y aplicación de los medicamentos recetados para su tratamiento.'
                  : 'Official step-by-step PDF documents detailing the preparation, reconstitution, and injection guidelines for your prescribed fertility medications.'}
              </p>
            </div>

            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 px-3.5 py-2 rounded-xl border border-white/20 text-[#69B3E7] font-sans">
                <FileText className="w-4 h-4 text-[#69B3E7]" />
                <span>4 {language === 'es' ? 'Guías Oficiales Disponibles' : 'Official Guides Available'}</span>
              </span>
            </div>
          </div>

          {/* Grid de 4 Medicamentos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEDICATION_INSTRUCTIONS.map((med) => (
              <div
                key={med.id}
                className="bg-white rounded-3xl p-6 text-[#0B2559] border-2 border-white/60 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="space-y-3">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-[#004C97]/10 text-[#004C97] text-[10px] font-extrabold uppercase tracking-wider font-title">
                      {med.category[language]}
                    </span>
                    <span className="text-[10px] font-bold text-[#004C97] bg-[#EBF5FC] border border-[#69B3E7]/40 px-2 py-0.5 rounded-md uppercase font-title">
                      PDF
                    </span>
                  </div>

                  {/* Medicine Name */}
                  <div>
                    <h3 className="font-title text-xl font-normal text-[#0B2559] group-hover:text-[#004C97] transition-colors leading-tight">
                      {med.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#004C97] font-title mt-0.5">
                      {med.activeSubstance}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#0B2559]/75 font-sans leading-relaxed line-clamp-3">
                    {med.description[language]}
                  </p>

                  <div className="pt-2">
                    <div className="p-2.5 rounded-xl bg-[#F0F7FD] border border-[#69B3E7]/40 text-[11px] text-[#004C97] font-semibold flex items-center gap-1.5 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#004C97] flex-shrink-0" />
                      <span className="line-clamp-1">{med.badge[language]}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-5 space-y-2 mt-auto">
                  <a
                    href={med.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#004C97] hover:bg-[#0B2559] text-white text-xs font-extrabold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 font-title cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-white" />
                    <span>{language === 'es' ? 'Ver Preparación e Instrucciones' : 'View Instructions (PDF)'}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setActivePdf(med)}
                      className="flex-1 py-2 px-3 rounded-lg bg-[#F0F7FD] hover:bg-[#E2EFFC] text-[#004C97] text-[11px] font-bold transition-colors flex items-center justify-center gap-1.5 font-title cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{language === 'es' ? 'Vista Rápida' : 'Quick View'}</span>
                    </button>
                    <a
                      href={med.pdfUrl}
                      download
                      className="p-2 rounded-lg bg-[#F0F7FD] hover:bg-[#E2EFFC] text-[#004C97] transition-colors flex items-center justify-center cursor-pointer"
                      title={language === 'es' ? 'Descargar archivo PDF' : 'Download PDF file'}
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Medical Advisory Note */}
          <div className="p-4 sm:p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-xs sm:text-sm text-blue-50 font-sans flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/15 text-[#69B3E7] flex items-center justify-center flex-shrink-0 border border-white/30">
              <ShieldCheck className="w-5 h-5 text-[#69B3E7]" />
            </div>
            <div className="space-y-1 flex-1">
              <strong className="text-white font-title block">
                {language === 'es' ? 'Aviso Médico Importante para Pacientes CFA:' : 'Important Medical Notice for CFA Patients:'}
              </strong>
              <p className="text-xs text-blue-100 leading-relaxed">
                {language === 'es'
                  ? 'Las dosis, horarios de aplicación y días exactos son estrictamente individualizados y determinados por su médico especialista. Ante cualquier duda sobre la administración, comuníquese de inmediato al Centro Médico ABC Santa Fe: (55) 5273 5194 / (55) 5276 5463.'
                  : 'Dosages, exact timing, and application dates are strictly individualized by your reproductive physician. If you have questions regarding administration, contact ABC Medical Center immediately: (55) 5273 5194 / (55) 5276 5463.'}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Main Grid of Videos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#69B3E7]/40 pb-4">
          <div>
            <span className="text-xs font-bold text-[#004C97] uppercase tracking-wider font-title">
              {language === 'es' ? 'Biblioteca Audiovisual' : 'Audiovisual Library'}
            </span>
            <h2 className="font-title text-2xl sm:text-3xl font-light text-[#0B2559] mt-1">
              {language === 'es' ? 'Videos Institucionales y Podcast' : 'Institutional Videos & Podcast'}
            </h2>
          </div>
          <span className="text-xs font-semibold text-[#004C97] font-sans">
            {language === 'es' ? 'Reproducción en Alta Definición' : 'High Definition Playback'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MEDIA_VIDEOS.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#69B3E7]/40 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail / Video Frame with Soap Bubble Style */}
                <div className="relative w-full h-64 sm:h-72 bg-[#0B2559] overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title[language]}
                    fill
                    className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-xl bg-[#004C97]/90 text-white text-[11px] font-bold font-title backdrop-blur-md">
                      {video.category[language]}
                    </span>
                    <span className="px-2.5 py-1 rounded-xl bg-black/60 text-white text-[10px] font-semibold backdrop-blur-md">
                      {video.duration}
                    </span>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    {video.isDrivePending ? (
                       <div className="w-16 h-16 rounded-full bg-[#004C97]/90 border-2 border-white/50 text-white flex items-center justify-center shadow-xl">
                        <Video className="w-7 h-7 text-white" />
                      </div>
                    ) : video.localVideoSrc ? (
                      <button
                        onClick={() => setActiveVideo(video)}
                        className="w-16 h-16 rounded-full bg-[#004C97] hover:bg-[#69B3E7] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 border border-white/40 cursor-pointer"
                        title={video.title[language]}
                      >
                        <Play className="w-7 h-7 fill-white translate-x-0.5 text-white" />
                      </button>
                    ) : (
                      <a
                        href={video.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-full bg-[#004C97] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#69B3E7] transition-all duration-300 border border-white/40 cursor-pointer"
                        title={video.title[language]}
                      >
                        <Play className="w-7 h-7 fill-white translate-x-0.5 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content & Metadata */}
                <div className="p-6 space-y-4">
                  <h3 className="font-title text-lg sm:text-xl font-normal text-[#0B2559] group-hover:text-[#004C97] transition-colors leading-snug">
                    {video.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0B2559]/80 leading-relaxed font-sans">
                    {video.description[language]}
                  </p>

                  {/* Notice for Google Drive upload pending */}
                  {video.isDrivePending && (
                    <div className="p-3 bg-[#F0F7FD] rounded-xl border border-[#69B3E7]/40 text-[#0B2559] text-xs font-sans flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#004C97]" />
                      <span>
                        <strong>TODO(cliente):</strong> Los videos filmados con el personal se encuentran en el Google Drive del Dr. Navarro (archivos pesados). Se integrarán automáticamente una vez proporcionada la vía de enlace o exportación.
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0">
                {!video.isDrivePending && (
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#004C97] hover:bg-[#69B3E7] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 font-title shadow-md shadow-[#004C97]/20 cursor-pointer"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>{language === 'es' ? 'Ver en Canal Oficial @infertilidadabc' : 'Watch on Official Channel @infertilidadabc'}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Galería Fotográfica del Laboratorio y Equipamiento */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#69B3E7]/40 shadow-soft space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#004C97] uppercase tracking-wider font-title">
                {language === 'es' ? 'Recorrido Visual' : 'Visual Tour'}
              </span>
              <h3 className="font-title text-2xl font-light text-[#0B2559]">
                {language === 'es' ? 'Laboratorio de FIV, Timelapse & Quirófano' : 'IVF Laboratory, Timelapse & Surgical Suites'}
              </h3>
            </div>
            <Link
              href="/instalaciones"
              className="text-xs font-bold text-[#004C97] hover:underline font-title"
            >
              {language === 'es' ? 'Ver todas las instalaciones →' : 'View all facilities →'}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-[#69B3E7]/40 bg-[#0B2559] group">
              <div className="relative w-full h-52">
                <Image
                  src="/imagenes/carrusel2.jpg"
                  alt="Incubadora Timelapse"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#0B2559] font-title">
                  Incubadora Timelapse
                </div>
              </div>
              <div className="p-3 bg-white text-xs font-bold text-[#0B2559] font-title">
                {language === 'es' ? 'Monitoreo Morfocinético Continuo' : 'Continuous Morphokinetic Tracking'}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#69B3E7]/40 bg-[#0B2559] group">
              <div className="relative w-full h-52">
                <Image
                  src="/imagenes/micromanipulador.jpg"
                  alt="Micromanipulador RI INTEGRA"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#0B2559] font-title">
                  RI INTEGRA
                </div>
              </div>
              <div className="p-3 bg-white text-xs font-bold text-[#0B2559] font-title">
                {language === 'es' ? 'Plataforma de Micromanipulación' : 'Micromanipulation Platform'}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#69B3E7]/40 bg-[#0B2559] group">
              <div className="relative w-full h-52">
                <Image
                  src="/imagenes/ri_witness.jpg"
                  alt="Sistema RI Witness"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#0B2559] font-title">
                  Plataforma RI Witness
                </div>
              </div>
              <div className="p-3 bg-white text-xs font-bold text-[#0B2559] font-title">
                {language === 'es' ? 'Trazabilidad por Radiofrecuencia (RFID)' : 'British RFID Sample Security'}
              </div>
            </div>
          </div>
        </div>

        {/* Banner CTA to YouTube Channel */}
        {/* Banner CTA: Redes Sociales y Canal Oficial en YouTube & Instagram */}
        <div className="rounded-3xl bg-gradient-to-br from-[#004C97] to-[#0B2559] p-8 sm:p-12 text-white text-center space-y-5 shadow-xl border border-[#69B3E7]/40">
          <div className="flex items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/30">
              <Youtube className="w-8 h-8 text-white" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/30">
              <Instagram className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="font-title text-2xl sm:text-3xl font-light text-white">
              {language === 'es' ? 'Redes Sociales' : 'Social Media'}
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto font-sans leading-relaxed">
              {language === 'es'
                ? 'Síguenos en nuestras redes oficiales para acceder a testimonios de pacientes, entrevistas con nuestros médicos especialistas, podcast y los últimos avances científicos del Centro Médico ABC.'
                : 'Follow us on our official channels to access patient stories, medical interviews, podcast episodes, and scientific advances at ABC Medical Center.'}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@infertilidadabc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-sm shadow-xl transition-all font-title hover:scale-105"
            >
              <Youtube className="w-5 h-5 text-white" />
              <span>{language === 'es' ? 'Canal de YouTube @infertilidadabc' : 'YouTube Channel @infertilidadabc'}</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/clinicafertilizacionasistida/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-sm shadow-xl transition-all font-title hover:scale-105"
            >
              <Instagram className="w-5 h-5 text-white" />
              <span>Instagram @clinicafertilizacionasistida</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/ClinicadeFertilizacionAsistida"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-sm shadow-xl transition-all font-title hover:scale-105"
            >
              <Facebook className="w-5 h-5 text-white" />
              <span>Facebook CFA</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/cl%C3%ADnica-de-fertilizaci%C3%B3n-asistida/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-sm shadow-xl transition-all font-title hover:scale-105"
            >
              <Linkedin className="w-5 h-5 text-white" />
              <span>LinkedIn Institucional</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
          </div>
        </div>

        {/* Links Útiles y Sociedades Médicas Internacionales */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#69B3E7]/40 shadow-soft space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#69B3E7]/30 pb-3">
            <div className="flex items-center gap-2 text-[#004C97] font-title font-bold text-xs uppercase tracking-wider">
              <ExternalLink className="w-4 h-4 text-[#004C97]" />
              <span>{language === 'es' ? 'Links Útiles & Sociedades Médicas Internacionales' : 'Useful Links & International Medical Societies'}</span>
            </div>
            <span className="text-[11px] text-[#0B2559]/70 font-sans">
              {language === 'es' ? 'Fuentes científicas y guías clínicas oficiales' : 'Official scientific sources & clinical guidelines'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="https://www.asrm.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#F0F7FD] hover:bg-[#004C97] hover:text-white transition-all text-[#0B2559] border border-[#69B3E7]/40 flex flex-col justify-between group shadow-xs cursor-pointer"
            >
              <div>
                <span className="font-title font-extrabold text-sm text-[#004C97] group-hover:text-white block">ASRM</span>
                <p className="text-xs font-semibold text-[#0B2559] group-hover:text-blue-100 mt-0.5">American Society for Reproductive Medicine</p>
                <p className="text-[11px] text-[#0B2559]/70 group-hover:text-blue-100/90 font-sans mt-1">
                  {language === 'es' ? 'Guías clínicas y educación médica continua' : 'Clinical guidelines & continuing education'}
                </p>
              </div>
              <div className="pt-3 flex items-center gap-1 text-[11px] font-bold text-[#004C97] group-hover:text-white font-title">
                <span>asrm.org</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>

            <a
              href="https://www.sart.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#F0F7FD] hover:bg-[#004C97] hover:text-white transition-all text-[#0B2559] border border-[#69B3E7]/40 flex flex-col justify-between group shadow-xs cursor-pointer"
            >
              <div>
                <span className="font-title font-extrabold text-sm text-[#004C97] group-hover:text-white block">SART</span>
                <p className="text-xs font-semibold text-[#0B2559] group-hover:text-blue-100 mt-0.5">Society for Assisted Reproductive Technology</p>
                <p className="text-[11px] text-[#0B2559]/70 group-hover:text-blue-100/90 font-sans mt-1">
                  {language === 'es' ? 'Estándares de calidad y reportes de éxito FIV' : 'Quality standards & IVF success rates'}
                </p>
              </div>
              <div className="pt-3 flex items-center gap-1 text-[11px] font-bold text-[#004C97] group-hover:text-white font-title">
                <span>sart.org</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>

            <a
              href="https://www.eshre.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#F0F7FD] hover:bg-[#004C97] hover:text-white transition-all text-[#0B2559] border border-[#69B3E7]/40 flex flex-col justify-between group shadow-xs cursor-pointer"
            >
              <div>
                <span className="font-title font-extrabold text-sm text-[#004C97] group-hover:text-white block">ESHRE</span>
                <p className="text-xs font-semibold text-[#0B2559] group-hover:text-blue-100 mt-0.5">European Society of Human Reproduction and Embryology</p>
                <p className="text-[11px] text-[#0B2559]/70 group-hover:text-blue-100/90 font-sans mt-1">
                  {language === 'es' ? 'Consensos europeos y embriología clínica' : 'European consensus & clinical embryology'}
                </p>
              </div>
              <div className="pt-3 flex items-center gap-1 text-[11px] font-bold text-[#004C97] group-hover:text-white font-title">
                <span>eshre.eu</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      {activeVideo && activeVideo.localVideoSrc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2559]/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#071A40] rounded-3xl shadow-2xl border border-[#69B3E7]/50 overflow-hidden flex flex-col animate-scaleUp">
            <div className="p-4 bg-[#0B2559] text-white flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-cyan-300" />
                <span className="text-sm font-bold font-title line-clamp-1">{activeVideo.title[language]}</span>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              <video
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
                poster={activeVideo.thumbnail}
              >
                <source src={activeVideo.localVideoSrc} type="video/mp4" />
                <source src="/videos/video_clinica.mov" type="video/quicktime" />
                {language === 'es'
                  ? 'Tu navegador no soporta la reproducción directa de este video.'
                  : 'Your browser does not support HTML5 video playback.'}
              </video>
            </div>
            <div className="p-4 bg-[#071A40] text-white flex items-center justify-between text-xs">
              <span className="text-blue-200 font-sans">
                Centro Médico ABC • Clínica de Fertilización Asistida
              </span>
              <a
                href={activeVideo.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#69B3E7] hover:text-white font-bold font-title transition-colors"
              >
                <Youtube className="w-4 h-4" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* PDF Quick View Modal */}
      {activePdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2559]/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl h-[85vh] bg-white rounded-3xl shadow-2xl border border-[#69B3E7]/50 overflow-hidden flex flex-col animate-scaleUp">
            <div className="p-4 bg-[#0B2559] text-white flex items-center justify-between border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-[#69B3E7]" />
                </div>
                <div>
                  <h3 className="text-sm font-normal font-title leading-tight">{activePdf.name}</h3>
                  <p className="text-[11px] text-[#69B3E7] font-sans">{activePdf.activeSubstance}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={activePdf.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-[#004C97] hover:bg-[#004C97]/80 text-white text-xs font-bold flex items-center gap-1.5 font-title transition-colors"
                >
                  <span>{language === 'es' ? 'Abrir en Pestaña Completa' : 'Open in New Tab'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={activePdf.pdfUrl}
                  download
                  className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Descargar"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setActivePdf(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 w-full h-full bg-[#EBF5FC] relative">
              <iframe
                src={`${activePdf.pdfUrl}#toolbar=1&navpanes=0`}
                className="w-full h-full border-0"
                title={activePdf.name}
              />
            </div>

            <div className="p-3 bg-[#F0F7FD] border-t border-[#69B3E7]/40 flex items-center justify-between text-xs text-[#0B2559] flex-shrink-0 font-sans">
              <span className="font-medium">
                Centro Médico ABC Campus Santa Fe • Guías de Medicamentos
              </span>
              <button
                onClick={() => setActivePdf(null)}
                className="px-4 py-1.5 rounded-lg bg-white border border-[#69B3E7] text-[#004C97] font-bold text-xs hover:bg-[#69B3E7]/20 transition-colors font-title cursor-pointer"
              >
                {language === 'es' ? 'Cerrar Visor' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
