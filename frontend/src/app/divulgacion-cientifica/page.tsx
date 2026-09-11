'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Youtube, Sparkles, ExternalLink, Play, Clock, Tag, ArrowRight, Share2, Search, Filter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function DivulgacionCientificaPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', es: 'Todos los Artículos', en: 'All Articles' },
    { id: 'ia-tech', es: 'Tecnología & IA', en: 'Tech & AI' },
    { id: 'femenina', es: 'Fertilidad Femenina', en: 'Female Fertility' },
    { id: 'seguridad', es: 'Seguridad & Laboratorio', en: 'Safety & Lab' },
    { id: 'genetica', es: 'Genética Reproductiva', en: 'Reproductive Genetics' }
  ];

  const blogPosts = [
    {
      id: 'ia-seleccion-embriones',
      categoryKey: 'ia-tech',
      title: language === 'es'
        ? "Cómo la Inteligencia Artificial y Morfocinética están revolucionando la selección de embriones"
        : "How Artificial Intelligence & Morphokinetics are Revolutionizing Embryo Selection",
      category: language === 'es' ? "Tecnología Médica" : "Medical Tech",
      date: language === 'es' ? "Agosto 2026" : "August 2026",
      readTime: language === 'es' ? "4 min lectura" : "4 min read",
      author: "Dr. Carlos Navarro Martínez",
      imageSrc: "/imagenes/baby1.jpg",
      snippet: language === 'es'
        ? "El análisis morfocinético computarizado mediante incubadoras Timelapse y algoritmos de Machine Learning permite evaluar con precisión matemática la velocidad y simetría de división celular sin perturbar el ambiente estéril del cultivo."
        : "Computerized morphokinetic analysis via Timelapse incubators and Machine Learning algorithms accurately evaluates cellular division speed and symmetry without disrupting the sterile culture environment."
    },
    {
      id: 'preservacion-vs-embriones',
      categoryKey: 'femenina',
      title: language === 'es'
        ? "Preservación de Óvulos vs. Vitrificación de Embriones: ¿Cuál es la mejor opción?"
        : "Egg Freezing vs. Embryo Vitrification: What is the Best Option?",
      category: language === 'es' ? "Fertilidad Femenina" : "Female Fertility",
      date: language === 'es' ? "Julio 2026" : "July 2026",
      readTime: language === 'es' ? "5 min lectura" : "5 min read",
      author: "Dra. Stephanie Lizmi Romano",
      imageSrc: "/imagenes/tratamientos/congelacion.jpeg",
      snippet: language === 'es'
        ? "Factores clave como edad materna, reserva ovárica y metas de vida para tomar una decisión informada. La técnica de vitrificación ultra-rápida garantiza sobrevidas celulares superiores al 95%."
        : "Key factors including maternal age, ovarian reserve, and life plans to make an informed decision. Ultra-rapid vitrification guarantees cellular survival rates exceeding 95%."
    },
    {
      id: 'seguridad-ri-witness',
      categoryKey: 'seguridad',
      title: language === 'es'
        ? "Seguridad RI Witness: Por qué es crucial la radiofrecuencia británica en laboratorios de FIV"
        : "RI Witness Security: Why British RFID is Crucial in IVF Laboratories",
      category: language === 'es' ? "Seguridad Clínica" : "Clinical Security",
      date: language === 'es' ? "Junio 2026" : "June 2026",
      readTime: language === 'es' ? "3 min lectura" : "3 min read",
      author: "Equipo de Embriología CFA",
      imageSrc: "/imagenes/doctores/doctorcarlos1.jpg",
      snippet: language === 'es'
        ? "Descubre cómo funciona el sistema RFID pionero en México que realiza trazabilidad electrónica de cada tubo y placa de cultivo, eliminando cualquier margen de error o confusión humana."
        : "Discover how the British RFID tracking system pioneers sample traceability across every tube and culture dish in Mexico, eliminating human error.",
    },
    {
      id: 'genetica-pgd-ngs',
      categoryKey: 'genetica',
      title: language === 'es'
        ? "Diagnóstico Genético Preimplantacional (PGT/NGS): Maximizando el éxito por transferencia"
        : "Preimplantation Genetic Testing (PGT/NGS): Maximizing Live Birth per Transfer",
      category: language === 'es' ? "Genética Reproductiva" : "Reproductive Genetics",
      date: language === 'es' ? "Mayo 2026" : "May 2026",
      readTime: language === 'es' ? "6 min lectura" : "6 min read",
      author: "Dra. Luisa Fernanda Mariscal Mendizabal",
      imageSrc: "/imagenes/tratamientos/diagnosticogenetico.jpg",
      snippet: language === 'es'
        ? "La biopsia de trofoectodermo analizada mediante Secuenciación de Nueva Generación identifica embriones cromosómicamente euploides, reduciendo drásticamente el riesgo de pérdida gestacional."
        : "Trophectoderm biopsy analyzed via Next-Generation Sequencing identifies euploid embryos, dramatically reducing pregnancy loss risks."
    },
    {
      id: 'donacion-sin-egg-splitting',
      categoryKey: 'femenina',
      title: language === 'es'
        ? "Ovodonación Ética: Por qué en CFA está estrictamente prohibido el Egg Splitting"
        : "Ethical Egg Donation: Why CFA Strictly Prohibits Egg Splitting",
      category: language === 'es' ? "Ética Médica" : "Medical Ethics",
      date: language === 'es' ? "Abril 2026" : "April 2026",
      readTime: language === 'es' ? "4 min lectura" : "4 min read",
      author: "Comité de Bioética CFA",
      imageSrc: "/imagenes/baby2.jpg",
      snippet: language === 'es'
        ? "En nuestra clínica todos los óvulos obtenidos de una donante son de prioridad exclusiva para una sola pareja receptora. Proteger el bienestar de donantes y pacientes es nuestro estándar bioético."
        : "At our clinic, all retrieved oocytes from a donor belong exclusively to a single recipient couple, honoring our strict bioethical standard."
    }
  ];

  const filteredPosts = selectedCategory === 'todos'
    ? blogPosts
    : blogPosts.filter(p => p.categoryKey === selectedCategory);

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-cfa-light text-xs font-semibold uppercase tracking-wider font-title">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Educación & Ciencia Médica' : 'Medical Education & Science'}</span>
          </div>
          <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            {language === 'es' ? 'Divulgación Científica & Blog' : 'Scientific Outreach & Medical Blog'}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-sans">
            {language === 'es'
              ? 'Artículos médicos, avances en reproducción asistida y el podcast oficial con el Dr. Carlos Navarro Martínez.'
              : 'Medical articles, assisted reproduction breakthroughs, and our official video podcast with Dr. Carlos Navarro Martínez.'}
          </p>
        </div>
      </section>

      {/* SECCIÓN PODCAST DESTACADO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#004C97] via-[#0B2559] to-[#071A40] text-white p-6 sm:p-10 shadow-2xl border border-[#69B3E7]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Video Player / Showcase */}
            <div className="lg:col-span-7">
              <a
                href="https://www.youtube.com/watch?v=GCagLjVF8U4"
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-2xl overflow-hidden border-2 border-white/40 shadow-2xl bg-[#071A40] aspect-video"
              >
                <img
                  src="/imagenes/youtube_podcast_thumb.jpg"
                  alt="Podcast CFA Dr. Carlos Navarro"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A40]/90 via-[#071A40]/30 to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl border border-white/50 group-hover:scale-110 group-hover:bg-red-600 transition-all">
                    <Play className="w-8 h-8 fill-white translate-x-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-600 text-white uppercase font-title">
                    Episodio Destacado
                  </span>
                  <h4 className="font-title text-base sm:text-lg font-bold text-white mt-1.5 drop-shadow">
                    Historias de Fertilidad, Ciencia & Esperanza • Dr. Carlos Navarro
                  </h4>
                </div>
              </a>
            </div>

            {/* Information & Channels */}
            <div className="lg:col-span-5 space-y-4 font-sans">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-bold font-title">
                <Youtube className="w-3.5 h-3.5" />
                <span>Podcast Oficial en YouTube</span>
              </div>

              <h2 className="font-title text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {language === 'es' ? 'Canal Oficial @infertilidadabc' : 'Official Channel @infertilidadabc'}
              </h2>

              <p className="text-xs sm:text-sm text-blue-50 leading-relaxed">
                {language === 'es'
                  ? 'Explicaciones médicas claras, casos clínicos de éxito y testimonios reales presentados por el equipo médico del Centro Médico ABC Santa Fe.'
                  : 'Clear medical explanations, clinical success stories, and patient testimonies from ABC Medical Center specialists.'}
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href="https://www.youtube.com/watch?v=GCagLjVF8U4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-red-600/50 hover:bg-red-600/75 border border-red-400/40 backdrop-blur-md text-white font-extrabold text-sm shadow-lg shadow-red-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all font-title"
                >
                  <Youtube className="w-5 h-5 text-white" />
                  <span>{language === 'es' ? 'Ver Video en YouTube' : 'Watch Video on YouTube'}</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>

                <a
                  href="https://www.youtube.com/@infertilidadabc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs transition-all font-title"
                >
                  <span>{language === 'es' ? 'Visitar Canal Completo @infertilidadabc' : 'Visit Full Channel @infertilidadabc'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE ARTÍCULOS MÉDICOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cfa-softBlue pb-4">
          <div>
            <span className="text-xs font-bold text-cfa-cyan uppercase tracking-wider font-title">
              {language === 'es' ? 'Biblioteca Médica' : 'Medical Library'}
            </span>
            <h3 className="font-title text-2xl sm:text-3xl font-bold text-cfa-navy mt-1">
              {language === 'es' ? 'Artículos y Novedades Científicas' : 'Articles & Scientific Updates'}
            </h3>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all font-title cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-cfa-cyan text-white shadow-sm'
                    : 'bg-white border border-cfa-softBlue text-cfa-navy hover:bg-cfa-iceBlue'
                }`}
              >
                {language === 'es' ? cat.es : cat.en}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-cfa-softBlue shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full h-48 bg-cfa-iceBlue overflow-hidden">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cfa-navy/70 via-transparent to-transparent opacity-50" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-cfa-navy shadow-xs font-title">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3 font-sans">
                  <div className="flex items-center gap-2 text-xs text-cfa-grayText">
                    <Clock className="w-3.5 h-3.5 text-cfa-cyan" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h4 className="font-title text-base font-bold text-cfa-navy leading-snug group-hover:text-cfa-cyan transition-colors">
                    {post.title}
                  </h4>

                  <p className="text-xs text-cfa-grayDark leading-relaxed line-clamp-3">
                    {post.snippet}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-cfa-grayBorder/60 mt-4 flex items-center justify-between text-xs font-title">
                <span className="text-cfa-grayText text-[11px] truncate max-w-[160px]">
                  {post.author}
                </span>
                <span className="text-cfa-cyan font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>{language === 'es' ? 'Leer más' : 'Read more'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
