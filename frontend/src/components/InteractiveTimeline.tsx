'use client';

import React, { useState, useEffect } from 'react';
import { TIMELINE_EVENTS, TimelineEvent } from '@/data/timeline';
import { Calendar, Award, Sparkles, ChevronRight, ChevronLeft, Building2, CheckCircle2, Play, Pause } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const InteractiveTimeline: React.FC = () => {
  const { language } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number>(2); // Default to 1991 (1st FIV Mexico)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const currentEvent: TimelineEvent = TIMELINE_EVENTS[selectedIndex];
  const eventData = currentEvent[language] || currentEvent.es;

  // Optional auto-tour
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % TIMELINE_EVENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handlePrev = () => {
    setIsPlaying(false);
    setSelectedIndex((prev) => (prev === 0 ? TIMELINE_EVENTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsPlaying(false);
    setSelectedIndex((prev) => (prev + 1) % TIMELINE_EVENTS.length);
  };

  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-cfa-softBlue">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-light text-cfa-navy">
          {language === 'es' ? 'Más de 35 años transformando familias en México' : 'Over 35 Years Transforming Families in Mexico'}
        </h2>
        <p className="text-sm text-cfa-grayText mt-2 font-sans">
          {language === 'es'
            ? 'Recorre cronológicamente los avances y logros científicos de la Clínica de Fertilización Asistida.'
            : 'Explore chronologically the scientific achievements and milestones of our clinic.'}
        </p>
      </div>

      {/* Dynamic Progress Indicator */}
      <div className="max-w-3xl mx-auto mb-8 flex items-center justify-between gap-4 text-xs font-semibold text-cfa-navy font-title">
        <span className="text-cfa-grayText">
          {language === 'es' ? `Hito ${selectedIndex + 1} de ${TIMELINE_EVENTS.length}` : `Milestone ${selectedIndex + 1} of ${TIMELINE_EVENTS.length}`}
        </span>
        
        {/* Visual Progress Bar */}
        <div className="flex-1 h-2 bg-cfa-graySlate rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cfa-cyan to-cfa-deepBlue transition-all duration-500 rounded-full"
            style={{ width: `${((selectedIndex + 1) / TIMELINE_EVENTS.length) * 100}%` }}
          />
        </div>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-3 py-1 rounded-full bg-cfa-iceBlue hover:bg-cfa-softBlue text-cfa-cyan text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span>{isPlaying ? (language === 'es' ? 'Pausar' : 'Pause') : (language === 'es' ? 'Recorrido Auto' : 'Auto Tour')}</span>
        </button>
      </div>

      {/* Horizontal timeline selector bar */}
      <div className="relative mb-12 overflow-x-auto pb-4 scrollbar-thin">
        <div className="flex items-center justify-between min-w-[760px] relative px-8 py-3">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-10 right-10 -translate-y-1/2 h-1.5 bg-gradient-to-r from-cfa-softBlue via-cfa-light to-cfa-softBlue rounded-full z-0" />

          {TIMELINE_EVENTS.map((item, idx) => {
            const isSelected = idx === selectedIndex;
            const itemData = item[language] || item.es;
            return (
              <button
                key={item.year}
                onClick={() => {
                  setIsPlaying(false);
                  setSelectedIndex(idx);
                }}
                className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                {/* Perfect Well-Defined Circular Badge */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 font-title font-extrabold text-xs sm:text-sm tracking-tight shadow-md border-2 ${
                    isSelected
                      ? 'bg-gradient-to-br from-cfa-cyan via-cfa-deepBlue to-cfa-navy text-white border-white scale-110 ring-4 ring-cfa-softBlue shadow-xl'
                      : 'bg-white text-cfa-navy border-cfa-softBlue hover:border-cfa-cyan hover:bg-cfa-iceBlue hover:text-cfa-cyan hover:scale-105'
                  }`}
                >
                  <span>{item.year}</span>
                </div>

                {/* Milestone Badge in Brand Blue/White */}
                {itemData.badge && (
                  <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-full bg-[#004C97] text-white border border-white absolute -top-3.5 whitespace-nowrap shadow-sm font-title flex items-center gap-0.5">
                    <Sparkles className="w-2.5 h-2.5" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Event Card Showcase */}
      <div className="bg-gradient-to-br from-cfa-iceBlue/90 via-white to-cfa-grayLight p-6 sm:p-8 rounded-3xl border border-cfa-softBlue shadow-inner transition-all duration-500 relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-title text-4xl sm:text-5xl font-extrabold text-cfa-cyan">
                {currentEvent.year}
              </span>
              {eventData.badge && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#69B3E7]/20 text-[#004C97] border border-[#69B3E7]/40 flex items-center gap-1 font-title">
                  <Sparkles className="w-3.5 h-3.5 text-[#004C97]" />
                  {eventData.badge}
                </span>
              )}
            </div>

            <h3 className="font-title text-xl sm:text-2xl font-light text-cfa-navy">
              {eventData.title}
            </h3>

            <p className="text-sm sm:text-base text-cfa-grayDark leading-relaxed font-sans">
              {eventData.description}
            </p>
          </div>

          {/* Milestone Image if available */}
          {currentEvent.imageSrc && (
            <div className="w-full sm:w-72 sm:max-w-xs h-52 sm:h-56 rounded-2xl overflow-hidden shadow-md border-2 border-white relative flex-shrink-0 bg-cfa-softBlue">
              <img
                src={currentEvent.imageSrc}
                alt={eventData.title}
                className={`w-full h-full object-cover ${
                  currentEvent.year === '1994' ? 'object-top' : 'object-center'
                }`}
              />
            </div>
          )}

          <div className="flex items-center gap-3 self-end lg:self-center flex-shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Año anterior"
              className="w-12 h-12 rounded-2xl bg-white border border-cfa-grayBorder hover:bg-cfa-cyan hover:text-white text-cfa-navy flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Año siguiente"
              className="w-12 h-12 rounded-2xl bg-cfa-navy hover:bg-cfa-cyan text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
