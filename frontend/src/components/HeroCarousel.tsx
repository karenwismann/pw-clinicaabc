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
      badgeText: t.hero.badge1,
      title: t.hero.slide1,
      buttonText: t.hero.btn1,
      buttonLink: '/sobre-nosotros',
      legend: t.hero.legend,
      floatingTag: language === 'es' ? '1er Bebé FIV México (1991)' : '1st IVF Baby in Mexico (1991)',
      floatingSub: language === 'es' ? 'Centro Médico ABC Santa Fe' : 'ABC Medical Center Santa Fe'
    },
    {
      id: 2,
      imageSrc: '/imagenes/carrusel2.jpg',
      badgeText: t.hero.badge2,
      title: t.hero.slide2,
      buttonText: t.hero.btn2,
      buttonLink: '/innovacion',
      legend: t.hero.legend,
      floatingTag: language === 'es' ? 'Timelapse & Machine Learning' : 'Timelapse & Machine Learning',
      floatingSub: language === 'es' ? 'Monitoreo 24/7 y Selección IA' : '24/7 Monitoring & AI Selection'
    },
    {
      id: 3,
      imageSrc: '/imagenes/RIWITNESSCARRUSEL3.jpeg',
      badgeText: t.hero.badge3,
      title: t.hero.slide3,
      buttonText: t.hero.btn3,
      buttonLink: '/instalaciones#videos',
      legend: t.hero.legend,
      floatingTag: language === 'es' ? 'Seguridad RFID RI Witness' : 'RI Witness RFID Electronic Safety',
      floatingSub: language === 'es' ? 'Trazabilidad y Cero Errores' : 'Total Traceability & Zero Errors'
    },
    {
      id: 4,
      imageSrc: '/imagenes/carrusel4.jpg',
      badgeText: t.hero.badge4,
      title: t.hero.slide4,
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
    <div className="relative w-full h-[620px] sm:h-[680px] lg:h-[720px] overflow-hidden bg-cfa-navy">
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
            {/* Background High-Definition Image with subtle Ken-Burns motion */}
            <div className="relative w-full h-full">
              <Image
                src={slide.imageSrc}
                alt={slide.title}
                fill
                priority={index === 0}
                className={`object-cover object-center transition-transform duration-[9000ms] ease-out ${
                  isActive ? 'scale-108' : 'scale-100'
                }`}
              />

            </div>

            {/* Content Container */}
            <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Text Card: Solid corporate navy card */}
                <div className="lg:col-span-8 max-w-2xl text-white space-y-5 bg-[#0B2559] p-6 sm:p-10 rounded-3xl border-2 border-[#69B3E7]/60 shadow-2xl animate-fadeIn">
                  
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004C97] border border-[#69B3E7]/60 text-xs font-bold text-white shadow-sm font-title">
                    <Sparkles className="w-3.5 h-3.5 text-[#69B3E7]" />
                    <span>{slide.badgeText}</span>
                  </div>

                  {/* Main Title */}
                  <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
                    {slide.title}
                  </h1>

                  {/* CTA Buttons - Both Solid Blue (#004C97) */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Link
                      href={slide.buttonLink}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#004C97] hover:bg-[#003B75] text-white font-bold text-sm sm:text-base border border-[#69B3E7]/50 shadow-md hover:scale-102 active:scale-98 transition-all font-title"
                    >
                      <span>{slide.buttonText}</span>
                      <ArrowRight className="w-5 h-5 text-white" />
                    </Link>

                    <Link
                      href="/#agendar-cita"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#004C97] hover:bg-[#003B75] text-white font-bold text-sm sm:text-base border border-[#69B3E7]/50 shadow-md hover:scale-102 active:scale-98 transition-all font-title"
                    >
                      <Clock className="w-4 h-4 text-[#69B3E7]" />
                      <span>{language === 'es' ? 'Agendar Consulta' : 'Book Consultation'}</span>
                    </Link>
                  </div>

                  {/* Official Legend */}
                  <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-blue-100 font-medium tracking-wide drop-shadow-sm font-sans">
                    <ShieldCheck className="w-4 h-4 text-[#69B3E7] flex-shrink-0" />
                    <span>{slide.legend}</span>
                  </div>
                </div>

                {/* Right Floating Highlight Card over image (Desktop) */}
                <div className="hidden lg:flex lg:col-span-4 justify-end">
                  <div className="bg-white p-5 rounded-2xl border-2 border-[#69B3E7] shadow-2xl max-w-xs space-y-2 text-[#0B2559] animate-fadeIn">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-[#004C97] text-white flex items-center justify-center font-bold">
                        <Award className="w-4 h-4 text-[#69B3E7]" />
                      </span>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#004C97] block font-title">
                          Centro de Excelencia
                        </span>
                        <h4 className="font-title font-bold text-xs leading-tight text-[#0B2559]">
                          {slide.floatingTag}
                        </h4>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#0B2559]/80 font-sans border-t border-[#69B3E7]/30 pt-2 font-medium">
                      {slide.floatingSub}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white hover:bg-[#004C97] text-[#0B2559] hover:text-white flex items-center justify-center transition-all border-2 border-[#69B3E7] cursor-pointer shadow-xl"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white hover:bg-[#004C97] text-[#0B2559] hover:text-white flex items-center justify-center transition-all border-2 border-[#69B3E7] cursor-pointer shadow-xl"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Thumbnail Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-[#0B2559] p-2 rounded-2xl border-2 border-[#69B3E7] shadow-xl">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => {
              setIsAutoPlay(false);
              setCurrentSlide(idx);
            }}
            className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
              idx === currentSlide
                ? 'bg-white text-[#0B2559] shadow-md font-bold'
                : 'text-white/90 hover:text-white hover:bg-[#004C97] text-xs'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${idx === currentSlide ? 'bg-[#004C97]' : 'bg-white/60'}`} />
            <span className="text-xs font-title hidden sm:inline">0{idx + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
