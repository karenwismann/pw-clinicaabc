'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, ShieldCheck, Heart, Award, CheckCircle2, Clock, Youtube, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const HeroCarousel: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      imageSrc: '/imagenes/carrusel.jpg',
      imagePosition: 'object-[75%_center]',
      badgeText: '',
      title: t.hero.slide1Title || t.hero.slide1,
      subtitle: t.hero.slide1Sub,
      buttonText: t.hero.btn1,
      buttonLink: '/sobre-nosotros',
      legend: t.hero.legend,
      floatingTag: language === 'es' ? '1er Bebé FIV México (1991)' : '1st IVF Baby in Mexico (1991)',
      floatingSub: language === 'es' ? 'Centro Médico ABC Santa Fe' : 'ABC Medical Center Santa Fe'
    },
    {
      id: 2,
      imageSrc: '/imagenes/carrusel2.jpg',
      imagePosition: 'object-center',
      badgeText: t.hero.badge2,
      title: t.hero.slide2Title || t.hero.slide2,
      subtitle: t.hero.slide2Sub,
      buttonText: t.hero.btn2,
      buttonLink: '/innovacion',
      legend: t.hero.legend,
      floatingTag: language === 'es' ? 'Timelapse & Machine Learning' : 'Timelapse & Machine Learning',
      floatingSub: language === 'es' ? 'Monitoreo 24/7 y Selección IA' : '24/7 Monitoring & AI Selection'
    },
    {
      id: 3,
      imageSrc: '/imagenes/RIWITNESSCARRUSEL3.jpeg',
      imagePosition: 'object-center',
      badgeText: t.hero.badge3,
      title: t.hero.slide3Title || t.hero.slide3,
      subtitle: t.hero.slide3Sub,
      buttonText: t.hero.btn3,
      buttonLink: '/instalaciones#videos',
      legend: t.hero.legend,
      floatingTag: language === 'es' ? 'Seguridad RFID RI Witness' : 'RI Witness RFID Electronic Safety',
      floatingSub: language === 'es' ? 'Trazabilidad y Cero Errores' : 'Total Traceability & Zero Errors'
    },
    {
      id: 4,
      imageSrc: '/imagenes/carrusel4.jpg',
      imagePosition: 'object-[70%_center]',
      badgeText: t.hero.badge4,
      title: t.hero.slide4Title || t.hero.slide4,
      subtitle: t.hero.slide4Sub,
      buttonText: t.hero.btn4,
      buttonLink: '/tratamientos',
      legend: t.hero.legend,
      floatingTag: language === 'es' ? 'Más de 35 Años de Experiencia' : '35+ Years of Clinical Leadership',
      floatingSub: language === 'es' ? 'Cuerpo Médico Acreditado' : 'Accredited Medical Faculty'
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[560px] sm:h-[680px] lg:h-[720px] overflow-hidden bg-cfa-navy">
      {/* Slides View */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background High-Definition Image with Ken-Burns and Contrast Gradients */}
            <div className="relative w-full h-full">
              <Image
                src={slide.imageSrc}
                alt={slide.title}
                fill
                priority={index === 0}
                className={`object-cover ${slide.imagePosition || 'object-center'} transition-transform duration-[9000ms] ease-out ${
                  isActive ? 'scale-108' : 'scale-100'
                }`}
              />
              {/* Progressive contrast overlays: 
                  On mobile: Vertical gradient from the bottom so the top 60% of the image remains bright and clearly visible.
                  On desktop: Horizontal gradient from left to right as originally styled. */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent sm:bg-gradient-to-r sm:from-black/85 sm:via-black/40 sm:to-transparent pointer-events-none" />
              <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
            </div>

            {/* Content Container: On mobile positioned at the bottom so the photo subject is visible */}
            <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-14 sm:justify-center sm:pb-0">
              <div className="max-w-2xl lg:max-w-3xl text-white space-y-2.5 sm:space-y-6 animate-fadeIn z-10">
                
                {/* Main Title - Proportional on mobile so it doesn't take over the screen */}
                <div className="space-y-1 sm:space-y-2">
                  <h1 className="font-light text-xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-snug sm:leading-[1.15] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="font-light text-xs sm:text-lg md:text-2xl text-white/95 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] max-w-xl line-clamp-2 sm:line-clamp-none">
                      {slide.subtitle}
                    </p>
                  )}
                </div>

                {/* CTA Buttons - Compact and sleek on mobile */}
                <div className="pt-1 sm:pt-4 flex flex-wrap items-center gap-2 sm:gap-4">
                  <Link
                    href={slide.buttonLink}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl bg-[#004C97] hover:bg-[#003B75] text-white font-bold text-xs sm:text-base border border-[#69B3E7]/60 shadow-xl hover:scale-105 active:scale-95 transition-all font-title"
                  >
                    <span>{slide.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
                  </Link>

                  <Link
                    href="/#agendar-cita"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-7 sm:py-4 rounded-xl sm:rounded-2xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-base border border-white/40 backdrop-blur-md shadow-xl hover:scale-105 active:scale-95 transition-all font-title"
                  >
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#69B3E7]" />
                    <span>{language === 'es' ? 'Agendar Consulta' : 'Book Consultation'}</span>
                  </Link>
                </div>

                {/* Official Legend */}
                <div className="pt-1 sm:pt-2 flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-white/90 font-medium tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#69B3E7] flex-shrink-0" />
                  <span className="line-clamp-1 sm:line-clamp-none">{slide.legend}</span>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows - Transparent Minimalist Design, compact on mobile */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black/25 hover:bg-black/45 text-white/90 hover:text-white flex items-center justify-center transition-all backdrop-blur-sm border border-white/25 hover:border-white/50 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-7 sm:h-7" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black/25 hover:bg-black/45 text-white/90 hover:text-white flex items-center justify-center transition-all backdrop-blur-sm border border-white/25 hover:border-white/50 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-7 sm:h-7" />
      </button>

      {/* Bottom Indicators - Transparent & Minimalist Dots (No numbers) */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3 p-1.5">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => {
              setIsAutoPlay(false);
              setCurrentSlide(idx);
            }}
            aria-label={`Ir al slide ${idx + 1}`}
            className={`transition-all duration-300 cursor-pointer rounded-full ${
              idx === currentSlide
                ? 'w-7 sm:w-9 h-2 sm:h-2.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]'
                : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/80 hover:scale-125'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
