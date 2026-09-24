'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Check,
  BookOpen,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  UserCheck,
  Phone,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  Award,
  Stethoscope,
  Microscope,
  Play
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getBlogPostById, getAllBlogPosts, BlogPost } from '@/data/blog';
import { AppointmentModal } from '@/components/AppointmentModal';

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const { language } = useLanguage();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const post = typeof id === 'string' ? getBlogPostById(id) || null : null;
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Scroll Progress and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      if (post?.content) {
        const currentLangContent = post.content[language] || post.content.es;
        const sections = currentLangContent.sections;
        for (const section of sections) {
          const el = document.getElementById(section.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 160 && rect.bottom >= 100) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post, language]);

  const handleShare = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-cfa-navy flex items-center justify-center mb-4">
          <BookOpen className="w-8 h-8 text-cfa-navy" />
        </div>
        <h1 className="font-title text-2xl sm:text-3xl font-light text-cfa-navy mb-2">
          {language === 'es' ? 'Artículo no encontrado' : 'Article Not Found'}
        </h1>
        <p className="text-cfa-grayText max-w-md text-sm mb-6 font-sans">
          {language === 'es'
            ? 'El artículo solicitado no existe o aún se encuentra en proceso de revisión por nuestro comité médico.'
            : 'The requested article does not exist or is currently being reviewed by our medical board.'}
        </p>
        <Link
          href="/divulgacion-cientifica"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-cfa-navy text-white text-sm font-semibold hover:bg-cfa-midnight transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'es' ? 'Volver a Divulgación Científica' : 'Back to Scientific Outreach'}</span>
        </Link>
      </div>
    );
  }

  const content = post.content ? post.content[language] || post.content.es : null;
  const relatedPosts = getAllBlogPosts().filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#F2F8FD]">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-[#69B3E7]/30">
        <div
          className="h-full bg-gradient-to-r from-[#004C97] to-[#69B3E7] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Draft Notification Banner */}
      {post.isDraftSample && (
        <div className="bg-[#004C97] text-white text-xs font-semibold py-2 px-4 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider font-title">
                {language === 'es' ? 'Borrador de Prueba' : 'Draft Preview'}
              </span>
              <span>
                {language === 'es'
                  ? 'Estás visualizando la maqueta interactiva del lector de artículos médicos de CFA.'
                  : 'You are previewing the interactive CFA medical article reader prototype.'}
              </span>
            </div>
            <Link
              href="/divulgacion-cientifica"
              className="underline text-[11px] hover:text-white/80 transition-colors whitespace-nowrap"
            >
              {language === 'es' ? 'Ver catálogo general' : 'View all articles'}
            </Link>
          </div>
        </div>
      )}

      {/* Header & Breadcrumb */}
      <section className="bg-white border-b border-[#69B3E7]/30 pt-5 pb-8 sm:pt-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Back */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-6 text-xs text-cfa-grayText font-sans">
            <Link
              href="/divulgacion-cientifica"
              className="inline-flex items-center gap-1.5 font-semibold text-cfa-navy hover:text-cfa-cyan transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{language === 'es' ? 'Volver a Divulgación' : 'Back to Outreach'}</span>
            </Link>

            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
              <span>{language === 'es' ? 'Divulgación' : 'Outreach'}</span>
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#004C97]/60" />
              <span className="text-cfa-navy font-semibold truncate max-w-[140px] sm:max-w-none">{post.category[language] || post.category.es}</span>
            </div>
          </div>

          {/* Article Header Content */}
          <div className="max-w-4xl space-y-3 sm:space-y-5">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
              <span className="px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#EBF5FC] text-cfa-navy font-bold font-title border border-[#69B3E7]/30">
                {post.category[language] || post.category.es}
              </span>
              <div className="flex items-center gap-1 text-[#004C97]/70 font-sans">
                <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cfa-cyan" />
                <span>{post.date[language] || post.date.es}</span>
              </div>
              <span className="text-[#69B3E7]/60">•</span>
              <div className="flex items-center gap-1 text-[#004C97]/70 font-sans">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cfa-cyan" />
                <span>{post.readTime[language] || post.readTime.es}</span>
              </div>
              <span className="text-[#69B3E7]/60 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1 font-semibold text-[#004C97] bg-[#EBF5FC] border border-[#69B3E7]/40 px-2 py-0.5 rounded-md">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#004C97]" />
                {language === 'es' ? 'Revisión Médica Verificada' : 'Medically Reviewed'}
              </span>
            </div>

            <h1 className="font-title text-xl sm:text-3xl lg:text-5xl font-light text-cfa-navy tracking-tight leading-tight">
              {post.title[language] || post.title.es}
            </h1>

            <p className="text-xs sm:text-base lg:text-lg text-[#004C97]/80 leading-relaxed font-sans font-normal">
              {post.subtitle[language] || post.subtitle.es}
            </p>

            {/* Author & Share Bar */}
            <div className="pt-3 sm:pt-4 border-t border-[#69B3E7]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-2.5 sm:gap-3.5">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-cfa-cyan shadow-xs bg-[#EBF5FC] flex-shrink-0">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="font-title text-xs sm:text-base font-bold text-cfa-navy">
                      {post.author.name}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-cfa-cyan bg-[#EBF5FC] px-2 py-0.5 rounded-full">
                      {post.author.cedula || 'Especialista CFA'}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-cfa-grayText font-sans line-clamp-1">
                    {post.author.role[language] || post.author.role.es}
                  </p>
                </div>
              </div>

              {/* Share & Actions */}
              <div className="flex items-center gap-2 self-start sm:self-auto w-full sm:w-auto">
                <button
                  onClick={handleShare}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#EBF5FC] hover:bg-[#D8EDFA] text-[#004C97] text-xs font-semibold transition-colors cursor-pointer border border-[#69B3E7]/30"
                  title="Copiar enlace"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#004C97]" />
                      <span className="text-[#004C97] font-bold">{language === 'es' ? '¡Copiado!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-[#004C97]" />
                      <span>{language === 'es' ? 'Compartir' : 'Share'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setIsAppointmentOpen(true)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-cfa-navy hover:bg-cfa-cyan text-white text-xs font-bold transition-all shadow-xs font-title cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Agendar Cita' : 'Book Appointment'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout: Article + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          
          {/* Main Article Body (8 cols) */}
          <article className="lg:col-span-8 space-y-6 sm:space-y-10">
            
            {/* Box: "En 30 Segundos / Puntos Clave" */}
            <div className="bg-gradient-to-br from-[#EBF5FC] to-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-[#69B3E7]/40 shadow-soft">
              <div className="flex items-center gap-2 text-cfa-navy font-title font-bold text-sm sm:text-lg mb-3 sm:mb-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-cfa-navy text-white flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cfa-light" />
                </div>
                <span>{language === 'es' ? 'Puntos Clave en 30 Segundos' : 'Key Takeaways in 30 Seconds'}</span>
              </div>
              <ul className="space-y-2 sm:space-y-3 font-sans text-xs sm:text-sm text-[#004C97]/90">
                {(post.keyTakeaways[language] || post.keyTakeaways.es).map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#004C97]/15 text-[#004C97] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                    </div>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured Image with Medical Caption */}
            <div className="space-y-2 sm:space-y-3">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#69B3E7]/30 shadow-md bg-[#0B2559] aspect-[16/9]">
                <img
                  src={post.imageSrc}
                  alt={post.title[language] || post.title.es}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[11px] sm:text-xs text-[#004C97]/70 italic text-center font-sans">
                {post.imageCaption[language] || post.imageCaption.es}
              </p>
            </div>

            {/* Article Content Render */}
            {content ? (
              <div className="prose prose-blue max-w-none space-y-6 sm:space-y-8 font-sans">
                {/* Introduction */}
                <div className="text-xs sm:text-base lg:text-lg text-[#004C97]/90 leading-relaxed font-normal bg-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#69B3E7]/30 shadow-xs">
                  <p>{content.introduction}</p>
                </div>

                {/* Structured Sections */}
                {content.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-20 sm:scroll-mt-24 space-y-3 sm:space-y-4 pt-2 sm:pt-4"
                  >
                    <h2 className="font-title text-base sm:text-2xl font-light text-cfa-navy border-b border-[#69B3E7]/30 pb-2.5 sm:pb-3">
                      {section.title}
                    </h2>

                    <div className="space-y-3 sm:space-y-4 text-[#004C97]/90 text-xs sm:text-base leading-relaxed">
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {/* Optional Callout */}
                    {section.callout && (
                      <div className="my-4 sm:my-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#EBF5FC] border-l-4 border-cfa-cyan text-cfa-navy space-y-1 sm:space-y-1.5">
                        <div className="flex items-center gap-1.5 sm:gap-2 font-title font-bold text-xs sm:text-sm text-cfa-navy">
                          <Microscope className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cfa-cyan" />
                          <span>{section.callout.title}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#004C97]/90 leading-relaxed font-sans">
                          {section.callout.text}
                        </p>
                      </div>
                    )}

                    {/* Optional Quote */}
                    {section.quote && (
                      <blockquote className="my-4 sm:my-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#69B3E7]/20 to-transparent border-l-4 border-cfa-navy font-title italic text-xs sm:text-lg text-cfa-navy leading-relaxed">
                        &ldquo;{section.quote}&rdquo;
                      </blockquote>
                    )}
                  </section>
                ))}

                {/* Conclusion */}
                <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#EBF5FC] border border-[#69B3E7]/40 text-[#004C97] space-y-2 sm:space-y-3">
                  <h3 className="font-title text-base sm:text-lg font-normal text-cfa-navy flex items-center gap-2">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-cfa-cyan" />
                    <span>{language === 'es' ? 'Conclusión y Perspectiva Médica' : 'Conclusion & Clinical Perspective'}</span>
                  </h3>
                  <p className="text-xs sm:text-base text-[#004C97]/90 leading-relaxed">
                    {content.conclusion}
                  </p>
                </div>

                {/* Frequently Asked Questions */}
                {content.faqs && content.faqs.length > 0 && (
                  <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-[#69B3E7]/30">
                    <div className="flex items-center gap-2 text-cfa-navy font-title font-bold text-base sm:text-xl">
                      <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cfa-cyan" />
                      <span>{language === 'es' ? 'Preguntas Frecuentes de Pacientes' : 'Frequently Asked Patient Questions'}</span>
                    </div>

                    <div className="space-y-2.5 sm:space-y-3">
                      {content.faqs.map((faq, fIdx) => (
                        <div
                          key={fIdx}
                          className="rounded-xl sm:rounded-2xl border border-[#69B3E7]/30 bg-white overflow-hidden transition-colors"
                        >
                          <button
                            onClick={() => toggleFaq(fIdx)}
                            className="w-full p-3.5 sm:p-5 text-left flex items-center justify-between gap-3 font-title text-xs sm:text-base font-bold text-cfa-navy hover:text-cfa-cyan transition-colors"
                          >
                            <span>{faq.question}</span>
                            <ChevronDown
                              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 transition-transform duration-200 text-cfa-cyan ${
                                openFaqIndex === fIdx ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {openFaqIndex === fIdx && (
                            <div className="px-3.5 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-[#004C97]/80 font-sans leading-relaxed border-t border-[#69B3E7]/20 pt-2.5 sm:pt-3 animate-fadeIn">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-4 sm:p-8 bg-white rounded-2xl sm:rounded-3xl border border-[#69B3E7]/30 text-center text-[#004C97]/80">
                <p className="text-xs sm:text-sm">{post.snippet[language] || post.snippet.es}</p>
              </div>
            )}

            {/* Author Detailed Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-[#69B3E7]/30 shadow-soft flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-cfa-cyan flex-shrink-0 shadow-xs bg-[#EBF5FC]">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1.5 sm:space-y-2 text-center sm:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h4 className="font-title text-base sm:text-xl font-normal text-cfa-navy">
                    {post.author.name}
                  </h4>
                  {post.author.cedula && (
                    <span className="text-[10px] sm:text-[11px] font-semibold text-cfa-navy bg-[#EBF5FC] px-2 py-0.5 rounded-md">
                      {post.author.cedula}
                    </span>
                  )}
                </div>
                <p className="text-xs font-semibold text-cfa-cyan font-title">
                  {post.author.role[language] || post.author.role.es}
                </p>
                <p className="text-xs sm:text-sm text-[#004C97]/80 font-sans leading-relaxed">
                  {post.author.bio[language] || post.author.bio.es}
                </p>
                <div className="pt-1 sm:pt-2">
                  <Link
                    href="/equipo"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cfa-navy hover:text-cfa-cyan transition-colors font-title underline"
                  >
                    <span>{language === 'es' ? 'Ver trayectoria médica en Equipo CFA' : 'View full medical profile in CFA Team'}</span>
                    <ArrowLeft className="w-3 h-3 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="pt-6 flex items-center justify-between border-t border-[#69B3E7]/30">
              <Link
                href="/divulgacion-cientifica"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#69B3E7]/40 hover:bg-white text-cfa-navy text-xs font-bold transition-colors font-title"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{language === 'es' ? 'Volver a Divulgación Científica' : 'Back to Scientific Outreach'}</span>
              </Link>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xs font-semibold text-cfa-grayText hover:text-cfa-navy transition-colors cursor-pointer"
              >
                {language === 'es' ? '↑ Volver arriba' : '↑ Back to top'}
              </button>
            </div>
          </article>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="lg:sticky lg:top-28 space-y-6">
              
              {/* Table of Contents (Índice) */}
              {content && content.sections.length > 0 && (
                <div className="bg-white rounded-3xl p-6 border border-[#69B3E7]/30 shadow-soft space-y-3">
                  <div className="flex items-center gap-2 text-cfa-navy font-title font-bold text-sm uppercase tracking-wider">
                    <BookOpen className="w-4 h-4 text-cfa-cyan" />
                    <span>{language === 'es' ? 'Índice del Artículo' : 'Table of Contents'}</span>
                  </div>
                  <nav className="space-y-1 text-xs font-sans">
                    {content.sections.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(sec.id);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`block py-1.5 px-2.5 rounded-lg transition-colors leading-relaxed ${
                          activeSection === sec.id
                            ? 'bg-[#69B3E7]/30 text-cfa-navy font-bold'
                            : 'text-[#004C97]/70 hover:bg-[#EBF5FC] hover:text-cfa-navy'
                        }`}
                      >
                        {sec.title}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* High-Converting Medical CTA Card */}
              <div className="bg-gradient-to-br from-cfa-navy via-[#071A40] to-cfa-midnight text-white rounded-3xl p-6 shadow-xl border border-white/15 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#69B3E7] text-[11px] font-bold uppercase tracking-wider font-title">
                  <Stethoscope className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Atención Especializada' : 'Expert Consultation'}</span>
                </div>

                <div>
                  <h4 className="font-title text-lg font-normal text-white leading-snug">
                    {language === 'es'
                      ? '¿Tienes dudas sobre tu caso de fertilidad?'
                      : 'Do you have questions regarding your fertility?'}
                  </h4>
                  <p className="text-xs text-blue-100/80 font-sans mt-1 leading-relaxed">
                    {language === 'es'
                      ? 'Agenda una valoración personalizada con el Dr. Carlos Navarro Martínez en el Centro Médico ABC Santa Fe.'
                      : 'Schedule a comprehensive consultation with Dr. Carlos Navarro Martínez at ABC Medical Center Santa Fe.'}
                  </p>
                </div>

                <div className="pt-2 space-y-2.5">
                  <button
                    onClick={() => setIsAppointmentOpen(true)}
                    className="w-full py-3 px-4 rounded-xl bg-[#69B3E7] hover:bg-white text-cfa-navy font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 font-title cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{language === 'es' ? 'Agendar Consulta de Valoración' : 'Book Comprehensive Consultation'}</span>
                  </button>

                  <a
                    href="https://wa.me/525555555555?text=Hola,%20leí%20el%20artículo%20sobre%20IA%20y%20me%20gustaría%20agendar%20una%20cita%20en%20CFA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 font-title"
                  >
                    <Phone className="w-3.5 h-3.5 text-white" />
                    <span>{language === 'es' ? 'Enviar WhatsApp al Concierge' : 'WhatsApp Patient Concierge'}</span>
                  </a>
                </div>
              </div>

              {/* Related Treatments Box */}
              {post.relatedTreatments && post.relatedTreatments.length > 0 && (
                <div className="bg-white rounded-3xl p-6 border border-[#69B3E7]/30 shadow-soft space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-cfa-navy font-title">
                    {language === 'es' ? 'Tratamientos Relacionados' : 'Related Procedures'}
                  </div>
                  <div className="flex flex-col gap-2">
                    {post.relatedTreatments.map((tr) => (
                      <Link
                        key={tr.id}
                        href={tr.href}
                        className="p-2.5 rounded-xl border border-[#69B3E7]/20 hover:border-[#69B3E7] hover:bg-[#EBF5FC] transition-colors flex items-center justify-between text-xs font-bold text-cfa-navy group"
                      >
                        <span>{tr.name[language] || tr.name.es}</span>
                        <ChevronRight className="w-4 h-4 text-[#004C97]/60 group-hover:text-cfa-cyan group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Official Podcast Mini Teaser */}
              <div className="bg-[#EBF5FC] rounded-3xl p-6 border border-[#69B3E7]/40 space-y-3">
                <div className="flex items-center gap-2 text-[#004C97] text-xs font-black uppercase tracking-wider font-title">
                  <Play className="w-3.5 h-3.5 fill-[#004C97]" />
                  <span>{language === 'es' ? 'Podcast CFA Oficial' : 'Official CFA Podcast'}</span>
                </div>
                <h5 className="font-title text-sm font-normal text-cfa-navy">
                  {language === 'es'
                    ? '¿Prefieres escuchar al especialista en video?'
                    : 'Prefer to watch the specialist discussion?'}
                </h5>
                <p className="text-xs text-[#004C97]/80 font-sans leading-relaxed">
                  {language === 'es'
                    ? 'Conoce el episodio completo en YouTube sobre avances tecnológicos en fertilización in vitro.'
                    : 'Watch our full YouTube episode exploring technological breakthroughs in IVF.'}
                </p>
                <a
                  href="https://www.youtube.com/watch?v=GCagLjVF8U4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004C97] hover:text-[#69B3E7] transition-colors underline font-title pt-1"
                >
                  <span>{language === 'es' ? 'Ver episodio en YouTube' : 'Watch on YouTube'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </aside>

        </div>

        {/* Section: Other Available Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#69B3E7]/30 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-title text-xl sm:text-2xl font-light text-cfa-navy">
                {language === 'es' ? 'Otros Artículos de Divulgación Médica' : 'Other Scientific Articles'}
              </h3>
              <Link
                href="/divulgacion-cientifica"
                className="text-xs font-bold text-cfa-cyan hover:underline font-title"
              >
                {language === 'es' ? 'Ver catálogo completo →' : 'View full catalog →'}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-3xl p-6 border border-[#69B3E7]/30 shadow-soft hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-cfa-cyan bg-[#EBF5FC] px-2.5 py-0.5 rounded-full font-title border border-[#69B3E7]/30">
                        {rel.category[language] || rel.category.es}
                      </span>
                      <span className="text-[#004C97]/60 font-sans">{rel.readTime[language] || rel.readTime.es}</span>
                    </div>

                    <h4 className="font-title text-base font-normal text-cfa-navy hover:text-cfa-cyan transition-colors">
                      {rel.title[language] || rel.title.es}
                    </h4>

                    <p className="text-xs text-[#004C97]/80 line-clamp-2 font-sans">
                      {rel.snippet[language] || rel.snippet.es}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#69B3E7]/20 flex items-center justify-between">
                    <span className="text-xs text-[#004C97]/70 font-sans">{rel.author.name}</span>
                    {rel.content ? (
                      <Link
                        href={`/divulgacion-cientifica/${rel.id}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-cfa-navy hover:text-cfa-cyan font-title"
                      >
                        <span>{language === 'es' ? 'Leer artículo' : 'Read article'}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <span className="text-[11px] font-bold text-[#004C97] bg-[#EBF5FC] border border-[#69B3E7]/40 px-2 py-0.5 rounded-md">
                        {language === 'es' ? 'Próximamente' : 'Coming soon'}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        initialMessage={
          language === 'es'
            ? `Hola, leí el artículo sobre ${post.title.es} y me gustaría recibir información para una cita de valoración.`
            : `Hello, I read the article on ${post.title.en} and would like information to book a consultation.`
        }
      />
    </div>
  );
}
