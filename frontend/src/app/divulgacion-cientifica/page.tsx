'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  Youtube,
  Sparkles,
  ExternalLink,
  Play,
  Clock,
  Tag,
  ArrowRight,
  Share2,
  Search,
  Filter,
  Linkedin,
  Globe,
  ShieldCheck,
  Calendar,
  ChevronRight,
  Stethoscope,
  Microscope,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getAllBlogPosts, BlogPost } from '@/data/blog';

export default function DivulgacionCientificaPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'ultimo' | 'todos'>('ultimo');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const blogPosts = getAllBlogPosts();
  const featuredPost = blogPosts.find((p) => p.isFeatured) || blogPosts[0];

  const filteredPosts = blogPosts.filter((post) => {
    const postTitle = post.title[language] || post.title.es;
    const postSnippet = post.snippet[language] || post.snippet.es;
    const matchesSearch =
      searchQuery.trim() === '' ||
      postTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      postSnippet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-cfa-light text-xs font-semibold uppercase tracking-wider font-title">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Educación & Divulgación Médica' : 'Medical Education & Science'}</span>
          </div>
          <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            {language === 'es' ? 'Divulgación Científica & Blog' : 'Scientific Outreach & Medical Blog'}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-sans">
            {language === 'es'
              ? 'Artículos médicos especializados, avances en reproducción asistida y el podcast oficial con el Dr. Carlos Navarro Martínez.'
              : 'Specialized medical articles, assisted reproduction breakthroughs, and our official video podcast with Dr. Carlos Navarro Martínez.'}
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
                  ? 'Explicaciones médicas claras y casos clínicos presentados por el equipo médico del Centro Médico ABC Santa Fe.'
                  : 'Clear medical explanations and clinical insights from ABC Medical Center specialists.'}
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

                <a
                  href="https://www.linkedin.com/company/cl%C3%ADnica-de-fertilizaci%C3%B3n-asistida/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-2xl bg-[#004C97]/80 hover:bg-[#004C97] border border-[#69B3E7]/40 text-white font-semibold text-xs transition-all font-title shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                  <span>{language === 'es' ? 'Seguir en LinkedIn CFA' : 'Follow on LinkedIn CFA'}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE ARTÍCULOS MÉDICOS Y BLOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#69B3E7]/40 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004C97]/15 border border-[#69B3E7]/40 text-[#004C97] text-xs font-bold uppercase tracking-wider font-title mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Artículos & Publicaciones' : 'Articles & Publications'}</span>
            </div>
            <h2 className="font-title text-2xl sm:text-3xl font-bold text-[#0B2559]">
              {language === 'es' ? 'Biblioteca Médica & Divulgación' : 'Medical Library & Scientific Updates'}
            </h2>
          </div>
          <span className="text-xs font-semibold text-[#004C97] font-sans">
            {language === 'es' ? 'Escrito y revisado por especialistas certificados' : 'Authored & reviewed by certified specialists'}
          </span>
        </div>

        {/* Filter Bar: Only "Último blog" and "Todos los blogs" */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('ultimo')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all font-title cursor-pointer ${
                activeTab === 'ultimo'
                  ? 'bg-cfa-navy text-white shadow-md'
                  : 'bg-white text-cfa-navy hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {language === 'es' ? 'Último blog' : 'Latest blog'}
            </button>
            <button
              onClick={() => setActiveTab('todos')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all font-title cursor-pointer ${
                activeTab === 'todos'
                  ? 'bg-cfa-navy text-white shadow-md'
                  : 'bg-white text-cfa-navy hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {language === 'es' ? 'Todos los blogs' : 'All blogs'}
            </button>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value.trim() !== '' && activeTab !== 'todos') {
                  setActiveTab('todos');
                }
              }}
              placeholder={language === 'es' ? 'Buscar en los blogs...' : 'Search blogs...'}
              className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-sans text-cfa-navy placeholder-slate-400 focus:outline-none focus:border-cfa-cyan transition-colors"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* VISTA: ÚLTIMO BLOG */}
        {activeTab === 'ultimo' && featuredPost && (
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl bg-white border-2 border-cfa-cyan/40 shadow-xl hover:shadow-2xl transition-all group">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Image side */}
                <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-900">
                  <img
                    src={featuredPost.imageSrc}
                    alt={featuredPost.title[language] || featuredPost.title.es}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-[11px] font-black uppercase tracking-wider font-title shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      <span>{language === 'es' ? 'Borrador Interactivo' : 'Interactive Draft'}</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-cfa-navy/85 backdrop-blur-md text-white text-[11px] font-bold font-title">
                      {featuredPost.category[language] || featuredPost.category.es}
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-sans">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cfa-cyan" />
                        <span>{featuredPost.date[language] || featuredPost.date.es}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-cfa-cyan" />
                        <span>{featuredPost.readTime[language] || featuredPost.readTime.es}</span>
                      </div>
                    </div>

                    <Link href={`/divulgacion-cientifica/${featuredPost.id}`}>
                      <h3 className="font-title text-xl sm:text-2xl lg:text-3xl font-extrabold text-cfa-navy group-hover:text-cfa-cyan transition-colors leading-snug">
                        {featuredPost.title[language] || featuredPost.title.es}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                      {featuredPost.subtitle[language] || featuredPost.subtitle.es}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cfa-navy font-title">
                        {language === 'es' ? 'Aspectos destacados del artículo:' : 'Article Highlights:'}
                      </span>
                      <ul className="text-xs text-slate-600 space-y-1.5 font-sans">
                        {(featuredPost.keyTakeaways[language] || featuredPost.keyTakeaways.es).slice(0, 2).map((takeaway, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Author & Button */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-cfa-cyan"
                      />
                      <div>
                        <div className="font-title text-xs font-bold text-cfa-navy">
                          {featuredPost.author.name}
                        </div>
                        <div className="text-[11px] text-slate-500 font-sans">
                          {featuredPost.author.role[language] || featuredPost.author.role.es}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/divulgacion-cientifica/${featuredPost.id}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-cfa-navy hover:bg-cfa-cyan text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all font-title group/btn cursor-pointer"
                    >
                      <span>{language === 'es' ? 'Leer Artículo Completo' : 'Read Full Article'}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick switcher to all blogs */}
            <div className="text-center pt-2">
              <button
                onClick={() => setActiveTab('todos')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cfa-navy hover:text-cfa-cyan transition-colors font-title underline cursor-pointer"
              >
                <span>{language === 'es' ? '¿Deseas ver más publicaciones? Ver todos los blogs →' : 'Looking for more publications? View all blogs →'}</span>
              </button>
            </div>
          </div>
        )}

        {/* VISTA: TODOS LOS BLOGS */}
        {activeTab === 'todos' && (
          <div className="space-y-6">
            {filteredPosts.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 text-slate-500">
                <p className="text-sm font-sans">
                  {language === 'es' ? 'No se encontraron artículos con ese término de búsqueda.' : 'No articles found matching that search.'}
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-3 text-xs font-bold text-cfa-cyan hover:underline font-title cursor-pointer"
                >
                  {language === 'es' ? 'Limpiar búsqueda' : 'Clear search'}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => {
                  const hasFullContent = Boolean(post.content);
                  return (
                    <div
                      key={post.id}
                      className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft hover:shadow-lg hover:border-cfa-cyan/50 transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-4">
                        {/* Thumbnail Image */}
                        <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-100 border border-slate-100">
                          <img
                            src={post.imageSrc}
                            alt={post.title[language] || post.title.es}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-cfa-navy/85 backdrop-blur-sm text-white text-[10px] font-bold font-title">
                            {post.category[language] || post.category.es}
                          </span>
                        </div>

                        {/* Metadata */}
                        <div className="flex items-center gap-2 text-[11px] text-slate-500 font-sans">
                          <span>{post.date[language] || post.date.es}</span>
                          <span>•</span>
                          <span>{post.readTime[language] || post.readTime.es}</span>
                        </div>

                        {/* Title */}
                        <h4 className="font-title text-base sm:text-lg font-bold text-cfa-navy group-hover:text-cfa-cyan transition-colors line-clamp-2 leading-snug">
                          {post.title[language] || post.title.es}
                        </h4>

                        {/* Snippet */}
                        <p className="text-xs text-slate-600 font-sans line-clamp-3 leading-relaxed">
                          {post.snippet[language] || post.snippet.es}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-slate-500 font-sans truncate max-w-[130px]">
                          {post.author.name}
                        </span>

                        {hasFullContent ? (
                          <Link
                            href={`/divulgacion-cientifica/${post.id}`}
                            className="inline-flex items-center gap-1 text-xs font-bold text-cfa-navy hover:text-cfa-cyan font-title"
                          >
                            <span>{language === 'es' ? 'Leer' : 'Read'}</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-md font-sans">
                            <span>{language === 'es' ? 'En revisión médica' : 'In review'}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

      </section>

      {/* SECCIÓN DE LINKS ÚTILES & SOCIEDADES CIENTÍFICAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#69B3E7]/40 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004C97]/15 border border-[#69B3E7]/40 text-[#004C97] text-xs font-bold uppercase tracking-wider font-title mb-2">
              <Globe className="w-3.5 h-3.5 text-[#004C97]" />
              <span>{language === 'es' ? 'Recursos & Referencias Globales' : 'Global Resources & Standards'}</span>
            </div>
            <h3 className="font-title text-2xl sm:text-3xl font-bold text-[#0B2559]">
              {language === 'es' ? 'Links Útiles & Sociedades Científicas Internacionales' : 'Useful Links & International Scientific Societies'}
            </h3>
          </div>
          <span className="text-xs font-semibold text-[#004C97] font-sans">
            {language === 'es' ? 'Organismos Rectores en Medicina Reproductiva' : 'Governing Bodies in Reproductive Medicine'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. ASRM */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#69B3E7]/40 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#004C97] text-white text-xs font-black font-title tracking-wider">
                  ASRM
                </span>
                <span className="text-[11px] font-semibold text-[#004C97] bg-[#F0F7FD] px-2.5 py-1 rounded-lg">
                  EE. UU. / Global
                </span>
              </div>

              <div>
                <h4 className="font-title text-lg font-bold text-[#0B2559] group-hover:text-[#004C97] transition-colors leading-snug">
                  American Society for Reproductive Medicine
                </h4>
                <p className="text-xs font-semibold text-[#004C97] font-title mt-1">
                  {language === 'es' ? 'Sociedad Americana de Medicina Reproductiva' : 'American Society for Reproductive Medicine'}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#0B2559]/75 font-sans leading-relaxed">
                {language === 'es'
                  ? 'Organización multidisciplinaria líder a nivel mundial dedicada al avance de la ciencia y la práctica de la medicina reproductiva, educación a pacientes y emisión de guías éticas y clínicas.'
                  : 'Leading global multidisciplinary organization dedicated to advancing the science and practice of reproductive medicine, patient education, and clinical practice guidelines.'}
              </p>
            </div>

            <div className="pt-6 mt-auto">
              <a
                href="https://www.asrm.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#004C97] hover:bg-[#0B2559] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 font-title shadow-md shadow-[#004C97]/20 cursor-pointer"
              >
                <span>{language === 'es' ? 'Visitar asrm.org' : 'Visit asrm.org'}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* 2. SART */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#69B3E7]/40 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#0B2559] text-white text-xs font-black font-title tracking-wider">
                  SART
                </span>
                <span className="text-[11px] font-semibold text-[#004C97] bg-[#F0F7FD] px-2.5 py-1 rounded-lg">
                  Calidad & Reportes FIV
                </span>
              </div>

              <div>
                <h4 className="font-title text-lg font-bold text-[#0B2559] group-hover:text-[#004C97] transition-colors leading-snug">
                  Society for Assisted Reproductive Technology
                </h4>
                <p className="text-xs font-semibold text-[#004C97] font-title mt-1">
                  {language === 'es' ? 'Sociedad de Tecnología de Reproducción Asistida' : 'Society for Assisted Reproductive Technology'}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#0B2559]/75 font-sans leading-relaxed">
                {language === 'es'
                  ? 'Organización principal que establece estándares de calidad, seguridad y auditoría transparente para los laboratorios de tecnología de reproducción asistida en Norteamérica.'
                  : 'The primary organization establishing quality standards, safety benchmarks, and transparent auditing for ART laboratories in North America.'}
              </p>
            </div>

            <div className="pt-6 mt-auto">
              <a
                href="https://www.sart.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#004C97] hover:bg-[#0B2559] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 font-title shadow-md shadow-[#004C97]/20 cursor-pointer"
              >
                <span>{language === 'es' ? 'Visitar sart.org' : 'Visit sart.org'}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* 3. ESHRE */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#69B3E7]/40 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#004C97] text-white text-xs font-black font-title tracking-wider">
                  ESHRE
                </span>
                <span className="text-[11px] font-semibold text-[#004C97] bg-[#F0F7FD] px-2.5 py-1 rounded-lg">
                  Europa / Global
                </span>
              </div>

              <div>
                <h4 className="font-title text-lg font-bold text-[#0B2559] group-hover:text-[#004C97] transition-colors leading-snug">
                  European Society of Human Reproduction and Embryology
                </h4>
                <p className="text-xs font-semibold text-[#004C97] font-title mt-1">
                  {language === 'es' ? 'Sociedad Europea de Reproducción Humana y Embriología' : 'European Society of Human Reproduction and Embryology'}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#0B2559]/75 font-sans leading-relaxed">
                {language === 'es'
                  ? 'Autoridad científica europea que promueve el estudio de la biología reproductiva y embriología, recopila datos clínicos y emite consensos médicos de referencia internacional.'
                  : 'European scientific authority advancing reproductive biology and embryology research, clinical registries, and international consensus.'}
              </p>
            </div>

            <div className="pt-6 mt-auto">
              <a
                href="https://www.eshre.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#004C97] hover:bg-[#0B2559] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 font-title shadow-md shadow-[#004C97]/20 cursor-pointer"
              >
                <span>{language === 'es' ? 'Visitar eshre.eu' : 'Visit eshre.eu'}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
