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
        <h1 className="font-title text-2xl sm:text-3xl font-bold text-cfa-navy mb-2">
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
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-slate-200">
        <div
          className="h-full bg-gradient-to-r from-cfa-navy via-cfa-cyan to-blue-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Draft Notification Banner */}
      {post.isDraftSample && (
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-white text-xs font-semibold py-2 px-4 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-white/25 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider font-title">
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
      <section className="bg-white border-b border-slate-200 pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Back */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 text-xs text-cfa-grayText font-sans">
            <Link
              href="/divulgacion-cientifica"
              className="inline-flex items-center gap-2 font-semibold text-cfa-navy hover:text-cfa-cyan transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === 'es' ? 'Volver a Divulgación Científica' : 'Back to Scientific Outreach'}</span>
            </Link>

            <div className="flex items-center gap-2">
              <span>{language === 'es' ? 'Divulgación' : 'Outreach'}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-cfa-navy font-semibold">{post.category[language] || post.category.es}</span>
            </div>
          </div>

          {/* Article Header Content */}
          <div className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-cfa-softBlue text-cfa-navy text-xs font-bold font-title">
                {post.category[language] || post.category.es}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-sans">
                <Calendar className="w-3.5 h-3.5 text-cfa-cyan" />
                <span>{post.date[language] || post.date.es}</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-sans">
                <Clock className="w-3.5 h-3.5 text-cfa-cyan" />
                <span>{post.readTime[language] || post.readTime.es}</span>
              </div>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                {language === 'es' ? 'Revisión Médica Verificada' : 'Medically Reviewed'}
              </span>
            </div>

            <h1 className="font-title text-2xl sm:text-4xl lg:text-5xl font-extrabold text-cfa-navy tracking-tight leading-tight">
              {post.title[language] || post.title.es}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal">
              {post.subtitle[language] || post.subtitle.es}
            </p>

            {/* Author & Share Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cfa-cyan shadow-sm bg-slate-100 flex-shrink-0">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-title text-sm sm:text-base font-bold text-cfa-navy">
                      {post.author.name}
                    </span>
                    <span className="text-[11px] font-semibold text-cfa-cyan bg-blue-50 px-2 py-0.5 rounded-full">
                      {post.author.cedula || 'Especialista CFA'}
                    </span>
                  </div>
                  <p className="text-xs text-cfa-grayText font-sans">
                    {post.author.role[language] || post.author.role.es}
                  </p>
                </div>
              </div>

              {/* Share & Actions */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  title="Copiar enlace"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">{language === 'es' ? '¡Copiado!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-slate-600" />
                      <span>{language === 'es' ? 'Compartir' : 'Share'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setIsAppointmentOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cfa-navy hover:bg-cfa-cyan text-white text-xs font-bold transition-all shadow-sm font-title cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Agendar Consulta' : 'Book Consultation'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout: Article + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Body (8 cols) */}
          <article className="lg:col-span-8 space-y-10">
            
            {/* Box: "En 30 Segundos / Puntos Clave" */}
            <div className="bg-gradient-to-br from-[#F0F7FD] to-white rounded-3xl p-6 sm:p-8 border border-cfa-softBlue shadow-soft">
              <div className="flex items-center gap-2.5 text-cfa-navy font-title font-bold text-base sm:text-lg mb-4">
                <div className="w-8 h-8 rounded-xl bg-cfa-navy text-white flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-cfa-light" />
                </div>
                <span>{language === 'es' ? 'Puntos Clave en 30 Segundos' : 'Key Takeaways in 30 Seconds'}</span>
              </div>
              <ul className="space-y-3 font-sans text-sm text-slate-700">
                {(post.keyTakeaways[language] || post.keyTakeaways.es).map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured Image with Medical Caption */}
            <div className="space-y-3">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 aspect-[16/9]">
                <img
                  src={post.imageSrc}
                  alt={post.title[language] || post.title.es}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-slate-500 italic text-center font-sans">
                {post.imageCaption[language] || post.imageCaption.es}
              </p>
            </div>

            {/* Article Content Render */}
            {content ? (
              <div className="prose prose-slate max-w-none space-y-8 font-sans">
                {/* Introduction */}
                <div className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
                  <p>{content.introduction}</p>
                </div>

                {/* Structured Sections */}
                {content.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24 space-y-4 pt-4"
                  >
                    <h2 className="font-title text-xl sm:text-2xl font-bold text-cfa-navy border-b border-slate-200 pb-3">
                      {section.title}
                    </h2>

                    <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {/* Optional Callout */}
                    {section.callout && (
                      <div className="my-6 p-5 sm:p-6 rounded-2xl bg-blue-50/80 border-l-4 border-cfa-cyan text-cfa-navy space-y-1.5">
                        <div className="flex items-center gap-2 font-title font-bold text-sm text-cfa-navy">
                          <Microscope className="w-4 h-4 text-cfa-cyan" />
                          <span>{section.callout.title}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                          {section.callout.text}
                        </p>
                      </div>
                    )}

                    {/* Optional Quote */}
                    {section.quote && (
                      <blockquote className="my-6 p-6 rounded-2xl bg-gradient-to-r from-cfa-softBlue/60 to-transparent border-l-4 border-cfa-navy font-title italic text-base sm:text-lg text-cfa-navy">
                        &ldquo;{section.quote}&rdquo;
                      </blockquote>
                    )}
                  </section>
                ))}

                {/* Conclusion */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#004C97]/5 border border-[#004C97]/20 text-slate-800 space-y-3">
                  <h3 className="font-title text-lg font-bold text-cfa-navy flex items-center gap-2">
                    <Award className="w-5 h-5 text-cfa-cyan" />
                    <span>{language === 'es' ? 'Conclusión y Recomendación Médica' : 'Conclusion & Clinical Perspective'}</span>
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {content.conclusion}
                  </p>
                </div>

                {/* Frequently Asked Questions */}
                {content.faqs && content.faqs.length > 0 && (
                  <div className="space-y-4 pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-cfa-navy font-title font-bold text-xl">
                      <HelpCircle className="w-5 h-5 text-cfa-cyan" />
                      <span>{language === 'es' ? 'Preguntas Frecuentes de Pacientes' : 'Frequently Asked Patient Questions'}</span>
                    </div>

                    <div className="space-y-3">
                      {content.faqs.map((faq, fIdx) => (
                        <div
                          key={fIdx}
                          className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-colors"
                        >
                          <button
                            onClick={() => toggleFaq(fIdx)}
                            className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-title text-sm sm:text-base font-bold text-cfa-navy hover:text-cfa-cyan transition-colors"
                          >
                            <span>{faq.question}</span>
                            <ChevronDown
                              className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 text-cfa-cyan ${
                                openFaqIndex === fIdx ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {openFaqIndex === fIdx && (
                            <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed border-t border-slate-100 pt-3 animate-fadeIn">
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
              <div className="p-8 bg-white rounded-3xl border border-slate-200 text-center text-slate-600">
                <p className="text-sm">{post.snippet[language] || post.snippet.es}</p>
              </div>
            )}

            {/* Author Detailed Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-cfa-cyan flex-shrink-0 shadow-sm bg-slate-100">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2 text-center sm:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h4 className="font-title text-lg sm:text-xl font-bold text-cfa-navy">
                    {post.author.name}
                  </h4>
                  {post.author.cedula && (
                    <span className="text-[11px] font-semibold text-cfa-navy bg-slate-100 px-2 py-0.5 rounded-md">
                      {post.author.cedula}
                    </span>
                  )}
                </div>
                <p className="text-xs font-semibold text-cfa-cyan font-title">
                  {post.author.role[language] || post.author.role.es}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {post.author.bio[language] || post.author.bio.es}
                </p>
                <div className="pt-2">
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
            <div className="pt-6 flex items-center justify-between border-t border-slate-200">
              <Link
                href="/divulgacion-cientifica"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-white text-cfa-navy text-xs font-bold transition-colors font-title"
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
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft space-y-3">
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
                            ? 'bg-cfa-softBlue text-cfa-navy font-bold'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-cfa-navy'
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-cfa-light text-[11px] font-bold uppercase tracking-wider font-title">
                  <Stethoscope className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Atención Especializada' : 'Expert Consultation'}</span>
                </div>

                <div>
                  <h4 className="font-title text-lg font-bold text-white leading-snug">
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
                    className="w-full py-3 px-4 rounded-xl bg-cfa-cyan hover:bg-blue-400 text-cfa-navy font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 font-title cursor-pointer"
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
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{language === 'es' ? 'Enviar WhatsApp al Concierge' : 'WhatsApp Patient Concierge'}</span>
                  </a>
                </div>
              </div>

              {/* Related Treatments Box */}
              {post.relatedTreatments && post.relatedTreatments.length > 0 && (
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-cfa-navy font-title">
                    {language === 'es' ? 'Tratamientos Relacionados' : 'Related Procedures'}
                  </div>
                  <div className="flex flex-col gap-2">
                    {post.relatedTreatments.map((tr) => (
                      <Link
                        key={tr.id}
                        href={tr.href}
                        className="p-2.5 rounded-xl border border-slate-100 hover:border-cfa-softBlue hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-bold text-cfa-navy group"
                      >
                        <span>{tr.name[language] || tr.name.es}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cfa-cyan group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Official Podcast Mini Teaser */}
              <div className="bg-gradient-to-br from-red-600/10 to-red-600/5 rounded-3xl p-6 border border-red-200/70 space-y-3">
                <div className="flex items-center gap-2 text-red-600 text-xs font-black uppercase tracking-wider font-title">
                  <Play className="w-3.5 h-3.5 fill-red-600" />
                  <span>{language === 'es' ? 'Podcast CFA Oficial' : 'Official CFA Podcast'}</span>
                </div>
                <h5 className="font-title text-sm font-bold text-cfa-navy">
                  {language === 'es'
                    ? '¿Prefieres escuchar al especialista en video?'
                    : 'Prefer to watch the specialist discussion?'}
                </h5>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {language === 'es'
                    ? 'Conoce el episodio completo en YouTube sobre avances tecnológicos en fertilización in vitro.'
                    : 'Watch our full YouTube episode exploring technological breakthroughs in IVF.'}
                </p>
                <a
                  href="https://www.youtube.com/watch?v=GCagLjVF8U4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors underline font-title pt-1"
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
          <div className="mt-16 pt-12 border-t border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-title text-xl sm:text-2xl font-bold text-cfa-navy">
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
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-cfa-cyan bg-blue-50 px-2.5 py-0.5 rounded-full font-title">
                        {rel.category[language] || rel.category.es}
                      </span>
                      <span className="text-slate-400 font-sans">{rel.readTime[language] || rel.readTime.es}</span>
                    </div>

                    <h4 className="font-title text-base font-bold text-cfa-navy hover:text-cfa-cyan transition-colors">
                      {rel.title[language] || rel.title.es}
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-2 font-sans">
                      {rel.snippet[language] || rel.snippet.es}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-sans">{rel.author.name}</span>
                    {rel.content ? (
                      <Link
                        href={`/divulgacion-cientifica/${rel.id}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-cfa-navy hover:text-cfa-cyan font-title"
                      >
                        <span>{language === 'es' ? 'Leer artículo' : 'Read article'}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
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
