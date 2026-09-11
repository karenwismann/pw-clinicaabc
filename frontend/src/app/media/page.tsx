'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Video, Mic, Users, Youtube, ExternalLink, Calendar, Sparkles, Clock, AlertCircle, X } from 'lucide-react';
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
    category: { es: "Vida & Esperanza", en: "Life & Hope" }
  },
  {
    id: "video-institucional-2026",
    title: {
      es: "Video Institucional: Tecnología y Excelencia en Laboratorio de Reproducción Asistida",
      en: "Institutional Video: Technology & Excellence in Assisted Reproduction Laboratory"
    },
    description: {
      es: "Recorrido en alta definición por nuestras instalaciones en Centro Médico ABC Santa Fe, destacando el sistema RI Witness, incubadoras trigas y quirófano especializado.",
      en: "High-definition tour of our ABC Santa Fe facilities, showcasing the RI Witness RFID security system, tri-gas incubators, and specialized surgical suite."
    },
    doctors: ["Dr. Carlos Navarro Martínez", "Dra. Stephanie Lizmi Romano", "Biól. Paola Guerrero Jiménez"],
    thumbnail: "/imagenes/carrusel3.jpg",
    videoUrl: "https://www.youtube.com/@infertilidadabc",
    localVideoSrc: "/videos/video_clinica.mp4",
    duration: "4:35 min • HD",
    category: { es: "Institucional", en: "Institutional" }
  },
  {
    id: "podcast-cfa-historias",
    title: {
      es: "Podcast CFA: Preguntas Frecuentes, Ciencia y Casos de Éxito",
      en: "CFA Podcast: FAQ, Science & Patient Success Stories"
    },
    description: {
      es: "Diálogos médicos con testimonios reales y respuestas claras a las dudas más comunes sobre tratamientos de fertilización in vitro.",
      en: "Medical dialogues with real patient journeys and clear answers to common questions regarding IVF treatments."
    },
    doctors: ["Dr. Carlos Navarro Martínez", "Dra. Tanya I. Montañez Díaz de León"],
    thumbnail: "/imagenes/youtube_podcast_thumb.jpg",
    videoUrl: "https://www.youtube.com/watch?v=GCagLjVF8U4",
    duration: "Episodio Semanal • HD",
    category: { es: "Podcast Oficial", en: "Official Podcast" }
  },
  {
    id: "video-timelapse-ia",
    title: {
      es: "Innovación Tecnológica: Incubadora Timelapse e Inteligencia Artificial en FIV",
      en: "Technological Innovation: Timelapse Incubator & AI in IVF"
    },
    description: {
      es: "Monitoreo morfocinético continuo del desarrollo embrionario y aplicación de algoritmos de selección para optimizar tasas de implantación.",
      en: "Continuous morphokinetic monitoring of embryonic development and predictive selection algorithms to enhance implantation rates."
    },
    doctors: ["Dr. Jorge Manuel Rodríguez Purata (Director Científico)", "Dr. Carlos Navarro Martínez"],
    thumbnail: "/imagenes/baby3.jpg",
    videoUrl: "https://www.youtube.com/@infertilidadabc",
    duration: "3:40 min",
    category: { es: "Innovación & IA", en: "Innovation & AI" }
  },
  {
    id: "video-personal-drive",
    title: {
      es: "Cápsulas Testimoniales con Todo el Personal de la Clínica",
      en: "Staff Testimonial Series with Clinic Personnel"
    },
    description: {
      es: "Serie de videos grabados con médicos, embriólogas, andrólogas y enfermeras de la clínica compartiendo su vocación y experiencia en el Centro Médico ABC.",
      en: "Video series recorded with clinic doctors, embryologists, andrologists, and nurses sharing their dedication at ABC Medical Center."
    },
    doctors: ["Cuerpo Médico, Equipo de Embriología, Andrología y Enfermería CFA"],
    thumbnail: "/imagenes/doctores/doctorcarlos1.jpg",
    videoUrl: "#",
    duration: "Pendiente Drive",
    category: { es: "Equipo Humano", en: "Our Faculty" },
    isDrivePending: true
  }
];

export default function MediaPage() {
  const { language } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <div className="space-y-16 pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#0B2559] via-[#0B2559] to-[#004C97] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-[#69B3E7] text-xs font-semibold uppercase tracking-wider font-title">
            <Video className="w-3.5 h-3.5 text-[#69B3E7]" />
            <span>{language === 'es' ? 'Multimedia & Audiovisual' : 'Multimedia & Audiovisual'}</span>
          </div>
          <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            {language === 'es' ? 'MEDIA: Videos, Podcast & Testimonios' : 'MEDIA: Videos, Podcast & Testimonials'}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-sans">
            {language === 'es'
              ? 'Conoce a nuestro equipo médico, instalaciones de vanguardia y los avances científicos en reproducción asistida a través de contenido audiovisual de alta resolución.'
              : 'Discover our medical faculty, cutting-edge facilities, and reproductive breakthroughs through high-resolution video content.'}
          </p>
        </div>
      </section>

      {/* Main Grid of Videos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
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
                        className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 border border-white/40 cursor-pointer"
                        title={video.title[language]}
                      >
                        <Play className="w-7 h-7 fill-white translate-x-0.5 text-white" />
                      </button>
                    ) : (
                      <a
                        href={video.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300 border border-white/40 cursor-pointer"
                        title={video.title[language]}
                      >
                        <Play className="w-7 h-7 fill-white translate-x-0.5 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content & Metadata */}
                <div className="p-6 space-y-4">
                  <h3 className="font-title text-lg sm:text-xl font-bold text-[#0B2559] group-hover:text-[#004C97] transition-colors leading-snug">
                    {video.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0B2559]/80 leading-relaxed font-sans">
                    {video.description[language]}
                  </p>

                  {/* Doctors appearing in the video */}
                  <div className="pt-3 border-t border-[#69B3E7]/40 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#004C97] font-title uppercase tracking-wider">
                      <Users className="w-3.5 h-3.5" />
                      <span>{language === 'es' ? 'Médicos que aparecen en este video:' : 'Specialists featured:'}</span>
                    </div>
                    <ul className="space-y-1 pl-4">
                      {video.doctors.map((doc, idx) => (
                        <li key={idx} className="text-xs text-[#0B2559] font-sans list-disc font-medium">
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>

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
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 font-title shadow-md shadow-red-600/20 cursor-pointer"
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
              <h3 className="font-title text-2xl font-bold text-[#0B2559]">
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
        <div className="rounded-3xl bg-gradient-to-br from-[#004C97] to-[#0B2559] p-8 sm:p-12 text-white text-center space-y-4 shadow-xl border border-[#69B3E7]/40">
          <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mx-auto border border-white/30">
            <Youtube className="w-9 h-9 text-red-400" />
          </div>
          <h2 className="font-title text-2xl sm:text-3xl font-bold">
            {language === 'es' ? 'Canal Oficial en YouTube @infertilidadabc' : 'Official YouTube Channel @infertilidadabc'}
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto font-sans">
            {language === 'es'
              ? 'Suscríbete a nuestro canal para acceder a todas las entrevistas médicas, avances tecnológicos y testimonios de pacientes de la Clínica de Fertilización Asistida en el Centro Médico ABC.'
              : 'Subscribe to our channel to watch medical interviews, scientific breakthroughs, and patient testimonials from CFA at ABC Medical Center.'}
          </p>
          <div className="pt-2">
            <a
              href="https://www.youtube.com/@infertilidadabc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-xl shadow-red-600/30 transition-all font-title"
            >
              <span>{language === 'es' ? 'Ir al Canal de YouTube' : 'Visit YouTube Channel'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      {activeVideo && activeVideo.localVideoSrc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cfa-navy/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-cfa-midnight rounded-3xl shadow-2xl border border-cfa-softBlue/50 overflow-hidden flex flex-col animate-scaleUp">
            <div className="p-4 bg-cfa-navy text-white flex items-center justify-between border-b border-white/10">
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
            <div className="p-4 bg-cfa-midnight text-white flex items-center justify-between text-xs">
              <span className="text-blue-200 font-sans">
                Centro Médico ABC • Clínica de Fertilización Asistida
              </span>
              <a
                href={activeVideo.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 font-bold font-title"
              >
                <Youtube className="w-4 h-4" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
