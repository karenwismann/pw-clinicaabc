'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Globe, MapPin, Sparkles } from 'lucide-react';

interface RegionInfo {
  id: string;
  nameEs: string;
  nameEn: string;
  tagEs: string;
  tagEn: string;
  xPct: number; // percentage on map width (0 to 100)
  yPct: number; // percentage on map height (0 to 100)
  color: string;
  isHub?: boolean;
}

const REGIONS: RegionInfo[] = [
  {
    id: 'usa',
    nameEs: 'Estados Unidos',
    nameEn: 'United States',
    tagEs: 'Atención binacional y transfronteriza especializada',
    tagEn: 'Cross-border specialized care and US patients',
    xPct: 48,
    yPct: 32,
    color: '#004C97'
  },
  {
    id: 'cdmx',
    nameEs: 'Centro Médico ABC Santa Fe',
    nameEn: 'ABC Medical Center Santa Fe',
    tagEs: 'Sede Principal (CDMX) · Clínica de Alta Especialidad',
    tagEn: 'Main Medical Hub (CDMX) · High Specialty Clinic',
    xPct: 43.5,
    yPct: 49,
    color: '#0B2559',
    isHub: true
  },
  {
    id: 'centroamerica',
    nameEs: 'Centroamérica',
    nameEn: 'Central America',
    tagEs: 'Guatemala, Costa Rica, Panamá, Honduras y El Salvador',
    tagEn: 'Guatemala, Costa Rica, Panama, Honduras & El Salvador',
    xPct: 50.5,
    yPct: 55.5,
    color: '#004C97'
  },
  {
    id: 'caribe',
    nameEs: 'El Caribe',
    nameEn: 'The Caribbean',
    tagEs: 'República Dominicana, Puerto Rico e islas del Caribe',
    tagEn: 'Dominican Republic, Puerto Rico & Caribbean Islands',
    xPct: 64.5,
    yPct: 49,
    color: '#004C97'
  },
  {
    id: 'global',
    nameEs: 'Otros Países',
    nameEn: 'International',
    tagEs: 'Sudamérica, Europa, Canadá y resto del mundo',
    tagEn: 'South America, Europe, Canada & worldwide',
    xPct: 64,
    yPct: 72,
    color: '#69B3E7'
  }
];

export const InternationalMap: React.FC = () => {
  const { language } = useLanguage();
  const [activeRegion, setActiveRegion] = useState<string>('cdmx');

  const currentRegion = REGIONS.find((r) => r.id === activeRegion) || REGIONS[1];

  // Map dimensions for SVG overlay (viewBox 0 0 743 1024 matching the map ratio)
  const hubX = (43.5 * 743) / 100; // ~323.2
  const hubY = (49.0 * 1024) / 100; // ~501.7

  return (
    <div className="relative w-full bg-gradient-to-b from-[#F2F8FD] via-[#F8FBFE] to-white rounded-3xl border border-cfa-softBlue p-4 sm:p-6 shadow-soft overflow-hidden flex flex-col justify-between group">
      {/* Top Header inside Map */}
      <div className="flex items-center justify-between gap-2 mb-2 z-10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-cfa-softBlue text-cfa-cyan flex items-center justify-center shadow-xs">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-bold text-cfa-navy font-title block leading-tight">
              {language === 'es' ? 'Procedencia de Pacientes' : 'International Patient Origin'}
            </span>
            <span className="text-[10px] text-cfa-grayText font-sans">
              {language === 'es' ? 'Centro Médico ABC Santa Fe (CDMX)' : 'ABC Medical Center Santa Fe (CDMX)'}
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-cfa-softBlue text-[11px] font-semibold text-cfa-cyan shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{language === 'es' ? 'Atención Activa' : 'Active Care'}</span>
        </div>
      </div>

      {/* Map Graphic Container with Overlays */}
      <div className="relative w-full aspect-[743/880] max-h-[340px] flex items-center justify-center my-1 select-none overflow-hidden rounded-2xl bg-[#EBF7FE]/50 border border-cfa-softBlue/40">
        {/* Base Clean Silhouette Graphic */}
        <div className="relative w-full h-full">
          <Image
            src="/imagenes/mapa-america.png"
            alt="Mapa de América - Clínica de Fertilización Asistida ABC"
            fill
            className="object-contain object-center p-2 opacity-95 transition-transform duration-700 group-hover:scale-101"
            priority
          />
        </div>

        {/* SVG Interactive Overlay with Connections and Beacons */}
        <svg
          viewBox="0 0 743 1024"
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <defs>
            <linearGradient id="routeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#004C97" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#69B3E7" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Connection Arc: USA (356, 327) -> CDMX (323, 501) */}
          <path
            d="M 356 327 Q 375 415 323 501"
            fill="none"
            stroke="#004C97"
            strokeWidth={activeRegion === 'usa' ? 3.5 : 2}
            strokeDasharray="6 4"
            opacity={activeRegion === 'usa' ? 1 : 0.45}
            className="transition-all duration-300"
          />

          {/* Connection Arc: Central America (375, 568) -> CDMX (323, 501) */}
          <path
            d="M 375 568 Q 360 540 323 501"
            fill="none"
            stroke="#004C97"
            strokeWidth={activeRegion === 'centroamerica' ? 3.5 : 2}
            strokeDasharray="6 4"
            opacity={activeRegion === 'centroamerica' ? 1 : 0.45}
            className="transition-all duration-300"
          />

          {/* Connection Arc: Caribbean (479, 501) -> CDMX (323, 501) */}
          <path
            d="M 479 501 Q 400 470 323 501"
            fill="none"
            stroke="#004C97"
            strokeWidth={activeRegion === 'caribe' ? 3.5 : 2}
            strokeDasharray="6 4"
            opacity={activeRegion === 'caribe' ? 1 : 0.45}
            className="transition-all duration-300"
          />

          {/* Connection Arc: Global / South America (475, 737) -> CDMX (323, 501) */}
          <path
            d="M 475 737 Q 440 600 323 501"
            fill="none"
            stroke="#69B3E7"
            strokeWidth={activeRegion === 'global' ? 3 : 1.8}
            strokeDasharray="5 4"
            opacity={activeRegion === 'global' ? 1 : 0.4}
            className="transition-all duration-300"
          />
        </svg>

        {/* HTML Interactive Pins Positioned Precisely */}
        {REGIONS.map((reg) => {
          const isSelected = reg.id === activeRegion;
          if (reg.isHub) {
            return (
              <div
                key={reg.id}
                style={{ left: `${reg.xPct}%`, top: `${reg.yPct}%` }}
                onClick={() => setActiveRegion(reg.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 group/pin"
              >
                {/* Radar Ripple Effect */}
                <div className="absolute inset-0 -m-3 rounded-full bg-cfa-cyan/30 animate-ping" />
                <div className="relative w-7 h-7 rounded-full bg-cfa-navy border-2 border-white shadow-lg flex items-center justify-center text-white">
                  <MapPin className="w-4 h-4 text-cfa-light" />
                </div>

                {/* Main Hub Label Badge */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 whitespace-nowrap px-2.5 py-1 rounded-full bg-cfa-navy text-white text-[10px] font-bold shadow-md border border-white/40 flex items-center gap-1 font-title">
                  <span className="w-1.5 h-1.5 rounded-full bg-cfa-light animate-pulse" />
                  <span>CDMX · Santa Fe</span>
                </div>
              </div>
            );
          }

          return (
            <button
              key={reg.id}
              style={{ left: `${reg.xPct}%`, top: `${reg.yPct}%` }}
              onClick={() => setActiveRegion(reg.id)}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group/node focus:outline-none"
            >
              <div
                className={`relative rounded-full transition-all duration-300 flex items-center justify-center shadow-md ${
                  isSelected
                    ? 'w-6 h-6 bg-cfa-cyan ring-4 ring-cfa-softBlue scale-110'
                    : 'w-4 h-4 bg-cfa-navy hover:scale-125 ring-2 ring-white'
                }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              {/* Tooltip Tag on Pin */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-1 whitespace-nowrap px-2 py-0.5 rounded-md text-[9px] font-bold shadow-sm transition-all pointer-events-none font-title ${
                  isSelected
                    ? 'bg-cfa-navy text-white opacity-100 scale-100'
                    : 'bg-white/95 text-cfa-navy border border-cfa-softBlue opacity-90 group-hover/node:opacity-100'
                }`}
              >
                {language === 'es' ? reg.nameEs : reg.nameEn}
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Region Selector Tabs (Small & Non-intrusive) */}
      <div className="mt-3 pt-3 border-t border-cfa-softBlue/60 z-10">
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {REGIONS.map((reg) => {
            const isSelected = reg.id === activeRegion;
            return (
              <button
                key={reg.id}
                onClick={() => setActiveRegion(reg.id)}
                className={`px-3 py-1 rounded-xl text-[11px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 font-title ${
                  isSelected
                    ? 'bg-cfa-navy text-white shadow-xs scale-102 ring-1 ring-cfa-cyan'
                    : 'bg-white text-cfa-navy hover:bg-cfa-softBlue border border-cfa-softBlue/70'
                }`}
              >
                {reg.isHub ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-cfa-light" />
                ) : (
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-cfa-cyan' : 'bg-cfa-navy/40'}`} />
                )}
                <span>{language === 'es' ? reg.nameEs : reg.nameEn}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Region Highlight Subtext */}
        <div className="mt-2 text-center">
          <p className="text-xs text-cfa-cyan font-semibold font-sans">
            {language === 'es' ? currentRegion.tagEs : currentRegion.tagEn}
          </p>
        </div>
      </div>
    </div>
  );
};
