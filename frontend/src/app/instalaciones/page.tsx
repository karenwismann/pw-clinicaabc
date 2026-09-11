'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Building2, Cpu, Sparkles, CheckCircle2, Lock, Play, Video, Eye, X, ArrowRight, Activity, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function InstalacionesPage() {
  const { language } = useLanguage();
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  const galleryImages = [
    {
      src: '/imagenes/carrusel2.jpg',
      title: language === 'es' ? 'Incubadora Timelapse con Monitoreo Morfocinético 24/7' : 'Timelapse Incubator with 24/7 Morphokinetic Monitoring',
      tag: language === 'es' ? 'Incubadora Timelapse' : 'Timelapse Incubator'
    },
    {
      src: '/imagenes/micromanipulador.jpg',
      title: language === 'es' ? 'Plataforma de Micromanipulación RI INTEGRA para ICSI y Biopsia' : 'RI INTEGRA Micromanipulation Platform for ICSI & Biopsy',
      tag: 'RI INTEGRA'
    },
    {
      src: '/imagenes/ri_witness.jpg',
      title: language === 'es' ? 'Estación de Trazabilidad y Seguridad RFID RI Witness' : 'RI Witness RFID Electronic Traceability & Security Station',
      tag: 'RI Witness RFID'
    },
    {
      src: '/imagenes/carrusel4.jpg',
      title: language === 'es' ? 'Quirófano de Procedimientos Reproductivos' : 'Assisted Reproduction Surgical Suite',
      tag: 'Quirófano Quirúrgico'
    },
    {
      src: '/imagenes/capturadeovulos.jpg',
      title: language === 'es' ? 'Procedimiento Especializado de Captura Ovocitaria' : 'Specialized Oocyte Retrieval Procedure',
      tag: 'Captura Ovocitaria'
    },
    {
      src: '/imagenes/embriologa.jpg',
      title: language === 'es' ? 'Equipo de Embriólogas Clínicas en Laboratorio Sala Limpia' : 'Clinical Embryologists in Cleanroom Laboratory',
      tag: 'Embriología'
    },
    {
      src: '/imagenes/trabajosperm.jpg',
      title: language === 'es' ? 'Laboratorio de Andrología & Preparación Espermática' : 'Andrology & Sperm Processing Laboratory',
      tag: 'Andrología'
    },
    {
      src: '/imagenes/maquinadehormonas.jpg',
      title: language === 'es' ? 'Analizador Bioquímico y Perfil Hormonal Rápido' : 'Automated Biochemical & Rapid Hormone Analyzer',
      tag: 'Hormonas & Diagnóstico'
    },
    {
      src: '/imagenes/incubadoraembriones.jpg',
      title: language === 'es' ? 'Batería de Incubadoras Embrionarias Tri-Gas' : 'Tri-Gas Embryo Incubator Complex',
      tag: 'Incubadoras Tri-Gas'
    },
    {
      src: '/imagenes/quirofanotrabajo.jpg',
      title: language === 'es' ? 'Monitoreo Transoperatorio y Transferencia Embrionaria' : 'Trans-operative Ultrasound & Embryo Transfer',
      tag: 'Transferencia Embrionaria'
    },
    {
      src: '/imagenes/postcaptura.jpg',
      title: language === 'es' ? 'Área de Recuperación Post-Procedimiento' : 'Post-Procedure Patient Recovery Suite',
      tag: 'Recuperación'
    },
    {
      src: '/imagenes/tratamientos/congelacion.jpeg',
      title: language === 'es' ? 'Área de Criopreservación y Vitrificación de Gametos' : 'Cryopreservation & Gamete Vitrification Suite',
      tag: 'Vitrificación'
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-cfa-light text-xs font-semibold uppercase tracking-wider font-title">
            <Building2 className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Infraestructura de Clase Mundial' : 'World-Class Infrastructure'}</span>
          </div>
          <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            {language === 'es' ? 'Instalaciones & Laboratorio' : 'Facilities & Laboratory'}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-sans">
            {language === 'es'
              ? 'Espacios de alta tecnología dentro del Centro Médico ABC Santa Fe diseñados para garantizar la máxima seguridad y éxito biológico en cada embrión.'
              : 'High-tech cleanrooms within ABC Medical Center Santa Fe engineered for maximum biological security and embryo viability.'}
          </p>
        </div>
      </section>

      {/* 1. TOP VIDEO INSTITUCIONAL (TASK 3.1 & 6.1) */}
      <section id="videos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 text-red-300 border border-red-500/40 text-xs font-bold uppercase tracking-wider mb-1 font-title">
                <Video className="w-3.5 h-3.5 text-red-400" />
                <span>{language === 'es' ? 'Video Institucional Oficial' : 'Official Institutional Video'}</span>
              </div>
              <h2 className="font-title text-2xl sm:text-3xl font-bold text-white">
                {language === 'es' ? 'Recorrido por Nuestras Instalaciones & Laboratorio' : 'Tour of Our Facilities & Laboratory'}
              </h2>
            </div>
            <Link
              href="/media"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs sm:text-sm transition-all font-title self-start md:self-auto"
            >
              <span>{language === 'es' ? 'Ver todos los videos en MEDIA' : 'View all videos in MEDIA'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Video Player Container */}
            <div className="lg:col-span-8">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-cfa-midnight border-2 border-white/30 shadow-2xl group">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="/imagenes/carrusel3.jpg"
                  playsInline
                >
                  <source src="/videos/video_clinica.mp4" type="video/mp4" />
                  <source src="/videos/video_clinica.mov" type="video/quicktime" />
                  {language === 'es'
                    ? 'Tu navegador no soporta la reproducción directa de este video.'
                    : 'Your browser does not support HTML5 video playback.'}
                </video>
              </div>
            </div>

            {/* Video Description & Highlights */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 space-y-2">
                <span className="text-xs font-bold text-cfa-light uppercase tracking-wider block font-title">
                  {language === 'es' ? 'Tecnología de Vanguardia' : 'Cutting-Edge Technology'}
                </span>
                <p className="text-xs sm:text-sm text-blue-100 font-sans leading-relaxed">
                  {language === 'es'
                    ? 'Conoce nuestras salas limpias con filtración HEPA, el sistema de vigilancia electrónica RI Witness, la incubadora Timelapse y nuestros quirófanos integrados en el Centro Médico ABC Santa Fe.'
                    : 'Explore our HEPA-filtered cleanrooms, the RI Witness electronic RFID surveillance system, Timelapse incubator, and surgical suites at ABC Medical Center Santa Fe.'}
                </p>
              </div>

              <div className="space-y-2 font-sans text-xs text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cfa-light flex-shrink-0" />
                  <span>{language === 'es' ? 'Dr. Carlos Navarro Martínez & Cuerpo Médico' : 'Dr. Carlos Navarro Martínez & Clinical Faculty'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cfa-light flex-shrink-0" />
                  <span>{language === 'es' ? 'Laboratorio de Embriología y Andrología' : 'Embryology & Andrology Laboratory'}</span>
                </div>
              </div>

              <a
                href="https://www.youtube.com/@infertilidadabc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 font-title"
              >
                <span>{language === 'es' ? 'Suscribirse al Canal @infertilidadabc' : 'Subscribe to @infertilidadabc'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TEXTO OFICIAL DEL LABORATORIO DE FERTILIZACIÓN IN VITRO (BRIEF 6.2 COPY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cfa-softBlue shadow-soft space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-cfa-softBlue text-cfa-cyan flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cfa-cyan uppercase tracking-wider font-title">
                {language === 'es' ? 'Infraestructura Tecnológica' : 'Technological Infrastructure'}
              </span>
              <h2 className="font-title text-2xl sm:text-3xl font-bold text-cfa-navy">
                {language === 'es' ? 'Laboratorio de Fertilización in Vitro' : 'In Vitro Fertilization Laboratory'}
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-cfa-grayDark leading-relaxed font-sans">
            <p>
              {language === 'es'
                ? 'Nuestras instalaciones cuentan con tecnología de punta, importada en su mayoría de Australia, Reino Unido y Estados Unidos. Nuestro sistema de filtrado de aire garantiza una calidad de pureza, certificada por la Casa De Vechi especializada en ambientes estériles. Los espacios amplios nos permiten llevar a cabo los procesos en diferentes áreas, como por ejemplo el área de preparación de medios de cultivo, área para identificación de ovocitos, área para ICSI y Hatch Asistido, un área para cultivo de embriones, otra área para análisis genético de embriones y una más para criopreservación de tejidos.'
                : 'Our facilities feature cutting-edge technology imported primarily from Australia, the United Kingdom, and the United States. Our air filtration system guarantees certified cleanroom purity by Casa De Vechi, specialized in sterile medical environments. Our spacious layout accommodates dedicated zones for media preparation, oocyte identification, ICSI, Assisted Hatching, embryo culture, genetic testing, and tissue cryopreservation.'}
            </p>

            <p>
              {language === 'es'
                ? 'Nuestra plataforma de micromanipulación (RI Witness) es uno de los sistemas de inyección más avanzados del mundo, garantiza el poder llevar a cabo la elección de espermas de una manera más eficaz, lograr el menor tiempo de exposición de los óvulos al medio ambiente y llevar a cabo la inyección de los óvulos mediante una técnica que permite evitar el daño a las células involucradas.'
                : 'Our micromanipulation platform integrated with RI Witness is among the world’s most advanced injection systems, ensuring optimal sperm selection, minimal gamete exposure time to ambient air, and atraumatic cell microinjection.'}
            </p>

            <p>
              {language === 'es'
                ? 'La plataforma de Micromanipulación esta complementada por un generador de rayo láser CO2, el cual nos permite realizar las biopsias embrionarias bajo el microscopio con la mayor precisión que se debe lograr. Esto nos permite tener mejores resultados en nuestros Key Performance Indicators (KPI) ó control de calidad internacional de Clínicas de Fertilización Asistida en rangos que se comparan con las mejores Clínicas del mundo.'
                : 'The micromanipulation workstation is augmented by a CO2 laser generator, enabling high-precision embryonic biopsies under inverted microscopy. This directly drives our superior Key Performance Indicators (KPIs) and quality standards matching top international fertility clinics.'}
            </p>
          </div>

          {/* 3 Pillars Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-5 bg-cfa-iceBlue rounded-2xl border border-cfa-softBlue space-y-2 font-sans">
              <span className="font-title font-bold text-cfa-navy text-sm block flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cfa-cyan" />
                <span>{language === 'es' ? 'Certificación Casa De Vechi' : 'Casa De Vechi Certification'}</span>
              </span>
              <p className="text-xs text-cfa-grayDark">
                {language === 'es' ? 'Filtrado de aire de grado médico estéril con presión positiva y control de COVs.' : 'Sterile medical-grade air filtration with positive pressure and VOC elimination.'}
              </p>
            </div>

            <div className="p-5 bg-cfa-iceBlue rounded-2xl border border-cfa-softBlue space-y-2 font-sans">
              <span className="font-title font-bold text-cfa-navy text-sm block flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-cfa-cyan" />
                <span>{language === 'es' ? 'Plataforma RI Witness' : 'RI Witness RFID Platform'}</span>
              </span>
              <p className="text-xs text-cfa-grayDark">
                {language === 'es' ? 'Seguridad por radiofrecuencia británica para trazabilidad del 100% sin margen de error.' : 'British RFID radiofrequency security for 100% error-free sample tracking.'}
              </p>
            </div>

            <div className="p-5 bg-cfa-iceBlue rounded-2xl border border-cfa-softBlue space-y-2 font-sans">
              <span className="font-title font-bold text-cfa-navy text-sm block flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-cfa-cyan" />
                <span>{language === 'es' ? 'Generador Láser CO2' : 'CO2 Laser Generator'}</span>
              </span>
              <p className="text-xs text-cfa-grayDark">
                {language === 'es' ? 'Biopsias embrionarias para PGT y eclosión asistida de máxima precisión celular.' : 'Precision cellular biopsy for PGT and assisted hatching with zero collateral damage.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GALERÍA DE FOTOS (CON TIMELAPSE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-cfa-cyan uppercase tracking-wider font-title">
              {language === 'es' ? 'Recorrido Fotográfico' : 'Photo Gallery'}
            </span>
            <h3 className="font-title text-2xl sm:text-3xl font-bold text-cfa-navy">
              {language === 'es' ? 'Galería de Instalaciones & Equipamiento' : 'Facilities & Equipment Gallery'}
            </h3>
          </div>
          <span className="text-xs text-cfa-grayText font-sans">
            Centro Médico ABC Santa Fe • Consultorio 332
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedGalleryImg(img.src)}
              className="bg-white rounded-3xl overflow-hidden border border-cfa-softBlue shadow-soft hover:shadow-elevated transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative w-full h-56 bg-cfa-iceBlue overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cfa-navy/70 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-cfa-navy shadow-xs font-title">
                    {img.tag}
                  </span>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between text-xs text-cfa-navy font-bold font-title">
                <span className="line-clamp-1">{img.title}</span>
                <Eye className="w-4 h-4 text-cfa-cyan flex-shrink-0 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Image Preview Modal */}
      {selectedGalleryImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cfa-navy/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-cfa-softBlue/60 ring-1 ring-black/5 overflow-hidden max-h-[90vh] flex flex-col animate-scaleUp">
            <div className="p-4 bg-cfa-navy text-white rounded-t-3xl flex-shrink-0 flex items-center justify-between">
              <span className="text-sm font-bold font-title">Instalaciones CFA • Centro Médico ABC</span>
              <button
                onClick={() => setSelectedGalleryImg(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 overflow-auto flex items-center justify-center bg-cfa-midnight rounded-b-3xl">
              <img
                src={selectedGalleryImg}
                alt="Instalación CFA"
                className="max-w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

