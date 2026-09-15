'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Calendar, Phone, MapPin, Sparkles, Video, BookOpen, ImageIcon } from 'lucide-react';
import { AppointmentModal } from './AppointmentModal';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';
import { TREATMENTS } from '@/data/treatments';

export const Navbar: React.FC = () => {
  const { language, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [treatmentsDropdownOpen, setTreatmentsDropdownOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const pathname = usePathname();

  const aboutTimer = useRef<NodeJS.Timeout | null>(null);
  const treatmentsTimer = useRef<NodeJS.Timeout | null>(null);
  const mediaTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setTreatmentsDropdownOpen(false);
    setMediaDropdownOpen(false);
  }, [pathname]);

  // Smooth Hover Handlers with Tolerance Delay
  const handleMouseEnterAbout = () => {
    if (aboutTimer.current) clearTimeout(aboutTimer.current);
    setAboutDropdownOpen(true);
  };
  const handleMouseLeaveAbout = () => {
    aboutTimer.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 180);
  };

  const handleMouseEnterTreatments = () => {
    if (treatmentsTimer.current) clearTimeout(treatmentsTimer.current);
    setTreatmentsDropdownOpen(true);
  };
  const handleMouseLeaveTreatments = () => {
    treatmentsTimer.current = setTimeout(() => {
      setTreatmentsDropdownOpen(false);
    }, 180);
  };

  const handleMouseEnterMedia = () => {
    if (mediaTimer.current) clearTimeout(mediaTimer.current);
    setMediaDropdownOpen(true);
  };
  const handleMouseLeaveMedia = () => {
    mediaTimer.current = setTimeout(() => {
      setMediaDropdownOpen(false);
    }, 180);
  };

  return (
    <>
      {/* Top emergency & contact bar */}
      <div className="bg-cfa-navy text-white text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-cfa-light">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.nav.emergencyBanner}</span>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <a
                href="https://www.youtube.com/watch?v=GCagLjVF8U4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-md bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-colors"
                title="YouTube Podcast @infertilidadabc"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a
                href="https://www.facebook.com/ClinicadeFertilizacionAsistida"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-md bg-white/10 hover:bg-cfa-cyan flex items-center justify-center text-white transition-colors"
                title="Facebook CFA"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/clinicafertilizacionasistida/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-md bg-white/10 hover:bg-cfa-cyan flex items-center justify-center text-white transition-colors"
                title="Instagram @clinicafertilizacionasistida"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/cl%C3%ADnica-de-fertilizaci%C3%B3n-asistida/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-md bg-white/10 hover:bg-[#0A66C2] flex items-center justify-center text-white transition-colors"
                title="LinkedIn Clínica de Fertilización Asistida ABC"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
            <span className="text-white/40">|</span>
            <a href="tel:5552735194" className="hover:text-cfa-light flex items-center gap-1.5 transition-colors text-blue-100">
              <Phone className="w-3 h-3 text-cfa-light" />
              <span>(55) 5273 5194</span>
            </a>
            <a href="tel:5552765463" className="hover:text-cfa-light flex items-center gap-1.5 transition-colors text-blue-100">
              <Phone className="w-3 h-3 text-cfa-light" />
              <span>(55) 5276 54 63</span>
            </a>
            <span className="text-white/40">|</span>
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-cfa-grayBorder'
            : 'bg-white py-3 border-b border-cfa-grayBorder/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <img
              src="/LOGOCFABC.png"
              alt="Clínica de Fertilización Asistida ABC"
              className="h-11 sm:h-12 w-auto max-w-[210px] object-contain transition-transform group-hover:scale-102"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-title">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === '/'
                  ? 'text-cfa-cyan font-bold bg-cfa-softBlue/60'
                  : 'text-cfa-navy hover:text-cfa-cyan hover:bg-cfa-grayLight'
              }`}
            >
              {t.nav.home}
            </Link>

            {/* Dropdown: Sobre la Clínica */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterAbout}
              onMouseLeave={handleMouseLeaveAbout}
            >
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                  pathname.startsWith('/sobre-nosotros') ||
                  pathname.startsWith('/pasos-a-seguir') ||
                  pathname.startsWith('/instalaciones') ||
                  pathname.startsWith('/equipo')
                    ? 'text-cfa-cyan font-bold bg-cfa-softBlue/60'
                    : 'text-cfa-navy hover:text-cfa-cyan hover:bg-cfa-grayLight'
                }`}
              >
                <span>{t.nav.about}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-cfa-cyan' : ''}`} />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-cfa-softBlue py-2 mt-1 animate-fadeIn z-50">
                  <Link
                    href="/sobre-nosotros"
                    className="block px-4 py-2.5 text-sm text-cfa-navy hover:bg-cfa-softBlue/60 hover:text-cfa-cyan transition-colors"
                  >
                    <div className="font-bold">{t.nav.aboutUs}</div>
                    <div className="text-xs text-cfa-grayText font-sans">{t.nav.aboutUsDesc}</div>
                  </Link>
                  <Link
                    href="/pasos-a-seguir"
                    className="block px-4 py-2.5 text-sm text-cfa-navy hover:bg-cfa-softBlue/60 hover:text-cfa-cyan transition-colors"
                  >
                    <div className="font-bold">{t.nav.steps}</div>
                    <div className="text-xs text-cfa-grayText font-sans">{t.nav.stepsDesc}</div>
                  </Link>
                  <Link
                    href="/instalaciones"
                    className="block px-4 py-2.5 text-sm text-cfa-navy hover:bg-cfa-softBlue/60 hover:text-cfa-cyan transition-colors"
                  >
                    <div className="font-bold">{t.nav.facilities}</div>
                    <div className="text-xs text-cfa-grayText font-sans">{t.nav.facilitiesDesc}</div>
                  </Link>
                  <Link
                    href="/equipo"
                    className="block px-4 py-2.5 text-sm text-cfa-navy hover:bg-cfa-softBlue/60 hover:text-cfa-cyan transition-colors"
                  >
                    <div className="font-bold">{t.nav.team}</div>
                    <div className="text-xs text-cfa-grayText font-sans">{t.nav.teamDesc}</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Dropdown: Tratamientos */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterTreatments}
              onMouseLeave={handleMouseLeaveTreatments}
            >
              <Link
                href="/tratamientos"
                onClick={() => setTreatmentsDropdownOpen(!treatmentsDropdownOpen)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition-colors ${
                  pathname.startsWith('/tratamientos')
                    ? 'text-cfa-cyan font-bold bg-cfa-softBlue/60'
                    : 'text-cfa-navy hover:text-cfa-cyan hover:bg-cfa-grayLight'
                }`}
              >
                <span>{t.nav.treatments}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${treatmentsDropdownOpen ? 'rotate-180 text-cfa-cyan' : ''}`} />
              </Link>

              {treatmentsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-white rounded-2xl shadow-xl border border-cfa-softBlue p-4 mt-1 grid grid-cols-2 gap-2 animate-fadeIn z-50">
                  {TREATMENTS.map((tItem) => {
                    const itemData = tItem[language] || tItem.es;
                    return (
                      <Link
                        key={tItem.id}
                        href={`/tratamientos#${tItem.id}`}
                        className="p-2.5 rounded-xl hover:bg-cfa-softBlue/60 transition-colors flex items-start gap-2.5 group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-cfa-softBlue text-cfa-cyan group-hover:bg-cfa-cyan group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors text-xs font-bold font-title">
                          {itemData.shortTitle.slice(0, 3)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-cfa-navy group-hover:text-cfa-cyan transition-colors">
                            {itemData.title}
                          </div>
                          <div className="text-[11px] text-cfa-grayText line-clamp-1 font-sans">
                            {itemData.summary}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="col-span-2 pt-2 border-t border-cfa-grayBorder flex justify-between items-center text-xs">
                    <Link
                      href="/tratamientos"
                      className="font-bold text-cfa-cyan hover:underline"
                    >
                      {t.nav.allTreatments}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/innovacion"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === '/innovacion'
                  ? 'text-cfa-cyan font-bold bg-cfa-softBlue/60'
                  : 'text-cfa-navy hover:text-cfa-cyan hover:bg-cfa-grayLight'
              }`}
            >
              {t.nav.innovation}
            </Link>

            <Link
              href="/resultados"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === '/resultados'
                  ? 'text-cfa-cyan font-bold bg-cfa-softBlue/60'
                  : 'text-cfa-navy hover:text-cfa-cyan hover:bg-cfa-grayLight'
              }`}
            >
              {t.nav.results}
            </Link>

            <Link
              href="/instalaciones"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === '/instalaciones'
                  ? 'text-cfa-cyan font-bold bg-cfa-softBlue/60'
                  : 'text-cfa-navy hover:text-cfa-cyan hover:bg-cfa-grayLight'
              }`}
            >
              {t.nav.facilities}
            </Link>

            {/* Dropdown: MEDIA (Galería + Divulgación Científica) */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterMedia}
              onMouseLeave={handleMouseLeaveMedia}
            >
              <button
                onClick={() => setMediaDropdownOpen(!mediaDropdownOpen)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  pathname.startsWith('/media') || pathname.startsWith('/divulgacion-cientifica')
                    ? 'text-cfa-cyan font-bold bg-cfa-softBlue/60'
                    : 'text-cfa-navy hover:text-cfa-cyan hover:bg-cfa-grayLight'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span>{t.nav.media}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mediaDropdownOpen ? 'rotate-180 text-cfa-cyan' : ''}`} />
              </button>

              {mediaDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-cfa-softBlue py-2 mt-1 animate-fadeIn z-50">
                  <Link
                    href="/media"
                    className="block px-4 py-3 text-sm text-cfa-navy hover:bg-cfa-softBlue/60 hover:text-cfa-cyan transition-colors"
                  >
                    <div className="font-bold flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-cfa-cyan" />
                      <span>{t.nav.mediaGallery}</span>
                    </div>
                    <div className="text-xs text-cfa-grayText font-sans mt-0.5">{t.nav.mediaGalleryDesc}</div>
                  </Link>
                  <Link
                    href="/divulgacion-cientifica"
                    className="block px-4 py-3 text-sm text-cfa-navy hover:bg-cfa-softBlue/60 hover:text-cfa-cyan transition-colors border-t border-cfa-grayBorder/50"
                  >
                    <div className="font-bold flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-red-600" />
                      <span>{t.nav.scientificOutreach}</span>
                    </div>
                    <div className="text-xs text-cfa-grayText font-sans mt-0.5">{t.nav.scientificOutreachDesc}</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/concierge"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === '/concierge'
                  ? 'text-cfa-cyan font-bold bg-cfa-softBlue/60'
                  : 'text-cfa-navy hover:text-cfa-cyan hover:bg-cfa-grayLight'
              }`}
            >
              {t.nav.concierge}
            </Link>
          </nav>

          {/* Right CTA Button (Única llamada a la acción de Citas) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setIsAppointmentOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cfa-cyan to-cfa-deepBlue text-white text-sm font-bold shadow-sm hover:shadow-md hover:brightness-105 active:scale-98 transition-all flex items-center gap-2 font-title cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.bookAppointment}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSelector />

            <button
              onClick={() => setIsAppointmentOpen(true)}
              className="px-3 py-2 rounded-lg bg-cfa-cyan text-white text-xs font-bold flex items-center gap-1 font-title cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Cita' : 'Book'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-cfa-graySlate text-cfa-navy hover:text-cfa-cyan transition-colors cursor-pointer"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-cfa-grayBorder px-4 pt-3 pb-6 space-y-2 animate-fadeIn font-title">
            <Link
              href="/"
              className="block px-3 py-2 rounded-lg text-sm font-bold text-cfa-navy hover:bg-cfa-softBlue"
            >
              {t.nav.home}
            </Link>

            <div className="pt-2 pb-1 text-xs font-bold text-cfa-grayText uppercase tracking-wider px-3">
              {t.nav.about}
            </div>
            <div className="pl-3 space-y-1">
              <Link href="/sobre-nosotros" className="block px-3 py-1.5 text-sm text-cfa-navy hover:text-cfa-cyan">
                • {t.nav.aboutUs}
              </Link>
              <Link href="/pasos-a-seguir" className="block px-3 py-1.5 text-sm text-cfa-navy hover:text-cfa-cyan">
                • {t.nav.steps}
              </Link>
              <Link href="/instalaciones" className="block px-3 py-1.5 text-sm text-cfa-navy hover:text-cfa-cyan">
                • {t.nav.facilities}
              </Link>
              <Link href="/equipo" className="block px-3 py-1.5 text-sm text-cfa-navy hover:text-cfa-cyan">
                • {t.nav.team}
              </Link>
            </div>

            <div className="pt-2 pb-1 text-xs font-bold text-cfa-grayText uppercase tracking-wider px-3">
              {t.nav.treatments}
            </div>
            <div className="pl-3 space-y-1">
              <Link href="/tratamientos" className="block px-3 py-1.5 text-sm font-bold text-cfa-cyan">
                • {t.nav.allTreatments}
              </Link>
            </div>

            <Link
              href="/innovacion"
              className="block px-3 py-2 rounded-lg text-sm font-bold text-cfa-navy hover:bg-cfa-softBlue"
            >
              {t.nav.innovation}
            </Link>

            <Link
              href="/resultados"
              className="block px-3 py-2 rounded-lg text-sm font-bold text-cfa-navy hover:bg-cfa-softBlue"
            >
              {t.nav.results}
            </Link>

            <Link
              href="/instalaciones"
              className="block px-3 py-2 rounded-lg text-sm font-bold text-cfa-navy hover:bg-cfa-softBlue"
            >
              {t.nav.facilities}
            </Link>

            <div className="pt-2 pb-1 text-xs font-bold text-cfa-grayText uppercase tracking-wider px-3 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>{t.nav.media}</span>
            </div>
            <div className="pl-3 space-y-1">
              <Link href="/media" className="block px-3 py-1.5 text-sm text-cfa-navy hover:text-cfa-cyan">
                • {t.nav.mediaGallery}
              </Link>
              <Link href="/divulgacion-cientifica" className="block px-3 py-1.5 text-sm text-cfa-navy hover:text-cfa-cyan font-bold text-red-600">
                • {t.nav.scientificOutreach}
              </Link>
            </div>

            <Link
              href="/concierge"
              className="block px-3 py-2 rounded-lg text-sm font-bold text-cfa-navy hover:bg-cfa-softBlue"
            >
              {t.nav.concierge}
            </Link>

            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAppointmentOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-cfa-cyan text-white text-sm font-bold shadow-md text-center flex items-center justify-center gap-2 font-title cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.nav.bookAppointment}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Appointment Modal Global */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </>
  );
};
