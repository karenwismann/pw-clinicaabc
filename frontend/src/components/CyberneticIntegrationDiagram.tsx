'use client';

import React, { useState } from 'react';
import { 
  Brain, 
  Cpu, 
  Dna, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  Target, 
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowDown
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CyberneticIntegrationDiagram() {
  const { language } = useLanguage();
  const [activeNode, setActiveNode] = useState<'ml' | 'timelapse' | 'genetics' | 'ai' | 'outcome'>('ai');

  const nodes = {
    ml: {
      id: 'ml',
      title: language === 'es' ? 'Machine Learning' : 'Machine Learning',
      subtitle: language === 'es' ? 'Datos Clínicos & Hormonales' : 'Clinical & Hormonal Data',
      tag: language === 'es' ? '15+ Años de Datos' : '15+ Years Data',
      icon: Cpu,
      theme: 'cyan',
      ringColor: 'border-cyan-400',
      activeRing: 'ring-4 ring-cyan-400/50 shadow-cyan-500/40',
      activeBg: 'bg-cyan-500/20',
      accentColor: 'text-cyan-300',
      description: language === 'es'
        ? 'Modelos matemáticos predictivos desarrollados junto a CercleAI, entrenados con más de 15 años de historiales clínicos y determinaciones hormonales seriadas. Optimizan la dosis de estimulación ovárica para cada paciente de manera individualizada.'
        : 'Predictive mathematical models developed with CercleAI, trained on 15+ years of clinical history and serial hormone levels. Personalizes ovarian stimulation protocols for every individual patient.',
      metrics: [
        { label: language === 'es' ? 'Precisión predictiva' : 'Predictive accuracy', value: '94.8%' },
        { label: language === 'es' ? 'Variables analizadas' : 'Analyzed variables', value: '>40 por ciclo' },
        { label: language === 'es' ? 'Alianza científica' : 'Scientific partnership', value: 'CercleAI (Silicon Valley)' }
      ]
    },
    timelapse: {
      id: 'timelapse',
      title: language === 'es' ? 'Morfocinética Timelapse' : 'Timelapse Morphokinetics',
      subtitle: language === 'es' ? 'Monitoreo 24/7' : '24/7 Monitoring',
      tag: language === 'es' ? 'Pioneros en México' : 'Pioneers in Mexico',
      icon: Activity,
      theme: 'sky',
      ringColor: 'border-sky-400',
      activeRing: 'ring-4 ring-sky-400/50 shadow-sky-500/40',
      activeBg: 'bg-sky-500/20',
      accentColor: 'text-sky-300',
      description: language === 'es'
        ? 'Monitoreo celular continuo sin perturbar el microambiente embrionario. Captura imágenes microscópicas continuas evaluando la velocidad y simetría de división celular (t2, t3, t4, t8) y la formación de blastocisto en día 5 o 6.'
        : 'Continuous cellular tracking without disturbing embryo microenvironment. Captures continuous microscopic imagery evaluating cleavage timing (t2, t3, t4, t8), symmetry, and blastocyst formation on day 5 or 6.',
      metrics: [
        { label: language === 'es' ? 'Frecuencia de captura' : 'Capture interval', value: 'Cada 5-10 min' },
        { label: language === 'es' ? 'Estabilidad térmica' : 'Thermal stability', value: '37.0°C continua' },
        { label: language === 'es' ? 'Parámetros cinéticos' : 'Kinetic parameters', value: '18 marcadores' }
      ]
    },
    genetics: {
      id: 'genetics',
      title: language === 'es' ? 'Genética Molecular' : 'Molecular Genetics',
      subtitle: language === 'es' ? 'Secuenciación NGS' : 'NGS Sequencing',
      tag: language === 'es' ? 'PGT-A / 23 Pares' : 'PGT-A / 23 Pairs',
      icon: Dna,
      theme: 'sky',
      ringColor: 'border-sky-400',
      activeRing: 'ring-4 ring-sky-400/50 shadow-sky-500/40',
      activeBg: 'bg-sky-500/20',
      accentColor: 'text-sky-300',
      description: language === 'es'
        ? 'Biopsia láser de trofoectodermo en estadio de blastocisto y Secuenciación de Nueva Generación (NGS). Permite identificar embriones euploides (con 23 pares cromosómicos completos) antes de la transferencia, descartando aneuploidías.'
        : 'Laser trophectoderm biopsy at blastocyst stage and Next-Generation Sequencing (NGS). Identifies euploid embryos (with 23 normal chromosome pairs) prior to transfer, ruling out aneuploidies.',
      metrics: [
        { label: language === 'es' ? 'Cromosomas analizados' : 'Chromosomes screened', value: '23 pares completos' },
        { label: language === 'es' ? 'Resolución diagnóstica' : 'Diagnostic resolution', value: '>99.2%' },
        { label: language === 'es' ? 'Seguridad celular' : 'Cellular safety', value: 'Biopsia no invasiva al MCI' }
      ]
    },
    ai: {
      id: 'ai',
      title: language === 'es' ? 'Inteligencia Artificial' : 'Artificial Intelligence',
      subtitle: language === 'es' ? 'Núcleo Central de Decisión' : 'Central Decision Core',
      tag: language === 'es' ? 'Algoritmo Multimodal' : 'Multimodal Algorithm',
      icon: Brain,
      theme: 'cyan',
      ringColor: 'border-cyan-300',
      activeRing: 'ring-4 ring-cyan-300 shadow-2xl shadow-cyan-400/50',
      activeBg: 'bg-gradient-to-br from-cfa-cyan/30 via-blue-600/30 to-cfa-cyan/30',
      accentColor: 'text-cyan-200',
      description: language === 'es'
        ? 'El algoritmo de IA procesa e integra simultáneamente las 3 capas: la historia hormonal (ML), la película biológica de desarrollo (Timelapse) y el perfil genómico (NGS). Calcula un índice de viabilidad objetivo para seleccionar el embrión con mayor probabilidad de embarazo.'
        : 'The AI core simultaneously correlates all 3 layers: hormonal clinical profile (ML), real-time cell development video (Timelapse), and genomic sequencing (NGS). Generates an objective viability score to select the highest-potential embryo.',
      metrics: [
        { label: language === 'es' ? 'Integración de datos' : 'Data integration', value: '3 capas simultáneas' },
        { label: language === 'es' ? 'Modelo algorítmico' : 'Algorithmic model', value: 'Red Neuronal Convolucional' },
        { label: language === 'es' ? 'Objetivo de selección' : 'Selection target', value: 'Single Embryo Transfer' }
      ]
    },
    outcome: {
      id: 'outcome',
      title: language === 'es' ? 'Resultado Clínico Optimizado' : 'Optimized Clinical Outcome',
      subtitle: language === 'es' ? 'Máxima Tasa de Embarazo' : 'Highest Pregnancy Rate',
      tag: language === 'es' ? 'Bebé Sano en Casa' : 'Healthy Baby at Home',
      icon: Target,
      theme: 'cyan',
      ringColor: 'border-cyan-400',
      activeRing: 'ring-4 ring-cyan-400/50 shadow-cyan-500/40',
      activeBg: 'bg-cyan-500/20',
      accentColor: 'text-cyan-300',
      description: language === 'es'
        ? 'La integración cibernética permite realizar transferencias de embrión único (SET) con tasas acumuladas de éxito superiores al 70%, minimizando riesgos de aborto espontáneo y evitando embarazos múltiples.'
        : 'Cybernetic integration enables single embryo transfer (SET) with cumulative success rates over 70%, minimizing miscarriage rates and preventing multiple pregnancies.',
      metrics: [
        { label: language === 'es' ? 'Tasa de éxito con PGT' : 'Success rate with PGT', value: '>70% por transferencia' },
        { label: language === 'es' ? 'Riesgo embarazo múltiple' : 'Multiple pregnancy risk', value: '<1% (SET electivo)' },
        { label: language === 'es' ? 'Seguridad para la paciente' : 'Patient safety', value: 'Protocolo de Alta Eficacia' }
      ]
    }
  };

  const selectedData = nodes[activeNode];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-cfa-navy via-[#051129] to-cfa-midnight border border-cfa-cyan/30 shadow-2xl p-4 sm:p-6 lg:p-7 text-white relative overflow-hidden">
      {/* Luces cibernéticas de fondo */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-cfa-cyan/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cfa-cyan/5 via-transparent to-transparent pointer-events-none" />

      {/* Encabezado del Diagrama Compacto */}
      <div className="relative z-10 text-center max-w-2xl mx-auto space-y-1.5 mb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cfa-cyan/15 border border-cfa-cyan/30 text-cfa-light text-[11px] font-bold tracking-wider uppercase">
          <Sparkles className="w-3 h-3 text-cfa-cyan animate-pulse" />
          <span>{language === 'es' ? 'Arquitectura Cibernética & Biológica' : 'Cybernetic & Biological Architecture'}</span>
        </div>
        <h3 className="font-title text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          {language === 'es' ? 'Diagrama de Integración Cibernética' : 'Cybernetic Integration Diagram'}
        </h3>
        <p className="text-[11px] sm:text-xs text-blue-100 font-sans leading-relaxed">
          {language === 'es'
            ? 'Haz clic en cualquier círculo para explorar cómo convergen el Machine Learning, la Morfocinética y la Genética en la IA.'
            : 'Click on any circle to explore how Machine Learning, Morphokinetics, and Genetics converge into the AI Core.'}
        </p>
      </div>

      {/* ========================================================================= */}
      {/* CUADRO EXPLICATIVO COMPACTO Y ESTILIZADO */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-3xl mx-auto mb-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl p-3.5 sm:p-4 space-y-2.5 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-cfa-cyan/20 text-cfa-cyan flex items-center justify-center border border-cfa-cyan/40 shrink-0">
              {React.createElement(selectedData.icon, { className: 'w-4 h-4' })}
            </div>
            <div>
              <span className="text-[9px] font-bold text-cfa-cyan uppercase tracking-wider font-title block">
                {selectedData.tag}
              </span>
              <h4 className="font-title text-sm sm:text-base font-bold text-white leading-tight">
                {selectedData.title}
              </h4>
            </div>
          </div>
          <span className="text-[9px] text-blue-100 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10 self-start sm:self-auto font-sans">
            {language === 'es' ? 'Fase Integrada de Precisión' : 'Integrated Precision Phase'}
          </span>
        </div>

        <p className="text-xs text-blue-100 leading-normal font-sans">
          {selectedData.description}
        </p>

        {/* Métricas e Indicadores Clave Compactos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-0.5">
          {selectedData.metrics.map((metric, idx) => (
            <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-black/30 border border-white/10 space-y-0.5">
              <span className="text-[9px] text-blue-200 font-sans block truncate">
                {metric.label}
              </span>
              <span className="font-title text-xs sm:text-sm font-bold text-cfa-light block">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TOPOLOGÍA DE CÍRCULOS ESTILIZADOS (DESKTOP & TABLETS) */}
      {/* ========================================================================= */}
      <div className="relative z-10 my-2 hidden md:block">
        <div className="relative max-w-4xl mx-auto py-2">
          
          {/* LÍNEAS SVG CONECTORAS CON GRADIENTES Y ANIMACIÓN */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 900 580" fill="none">
            <defs>
              <linearGradient id="circGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#004C97" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#69B3E7" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="circGradMid" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#69B3E7" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#004C97" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="circGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#004C97" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#69B3E7" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="circGradDown" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#69B3E7" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#004C97" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Curvas conectando los círculos superiores con el círculo central IA */}
            <path d="M 185 185 C 230 220, 330 260, 450 275" stroke="url(#circGradLeft)" strokeWidth="3" strokeDasharray="6 6" />
            <path d="M 450 185 L 450 230" stroke="url(#circGradMid)" strokeWidth="3" strokeDasharray="6 6" />
            <path d="M 715 185 C 670 220, 570 260, 450 275" stroke="url(#circGradRight)" strokeWidth="3" strokeDasharray="6 6" />
            
            {/* Curva conectando el círculo central IA con el círculo de Resultado Óptimo */}
            <path d="M 450 455 L 450 485" stroke="url(#circGradDown)" strokeWidth="3.5" />
          </svg>

          {/* FILA 1: TRES CÍRCULOS DE ENTRADA */}
          <div className="grid grid-cols-3 gap-6 relative z-10 mb-6">
            
            {/* CÍRCULO 1: Machine Learning */}
            <div className="flex justify-center">
              <div
                onClick={() => setActiveNode('ml')}
                className={`w-44 h-44 lg:w-48 lg:h-48 rounded-full border-2 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-4 text-center relative group backdrop-blur-xl ${
                  activeNode === 'ml'
                    ? `${nodes.ml.ringColor} ${nodes.ml.activeRing} ${nodes.ml.activeBg} scale-105 shadow-2xl`
                    : 'border-cyan-400/30 bg-white/5 hover:border-cyan-300 hover:bg-white/10 hover:scale-105'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-400/40 mb-1.5 group-hover:scale-110 transition-transform">
                  <Cpu className="w-4.5 h-4.5" />
                </div>
                <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 font-title mb-1">
                  {nodes.ml.tag}
                </span>
                <h4 className="font-title text-xs lg:text-sm font-extrabold text-white leading-tight">
                  {nodes.ml.title}
                </h4>
                <p className="text-[10px] text-blue-200 font-sans mt-0.5 line-clamp-1">
                  {nodes.ml.subtitle}
                </p>
              </div>
            </div>

            {/* CÍRCULO 2: Morfocinética Timelapse */}
            <div className="flex justify-center">
              <div
                onClick={() => setActiveNode('timelapse')}
                className={`w-44 h-44 lg:w-48 lg:h-48 rounded-full border-2 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-4 text-center relative group backdrop-blur-xl ${
                  activeNode === 'timelapse'
                    ? `${nodes.timelapse.ringColor} ${nodes.timelapse.activeRing} ${nodes.timelapse.activeBg} scale-105 shadow-2xl`
                    : 'border-sky-400/30 bg-white/5 hover:border-sky-300 hover:bg-white/10 hover:scale-105'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-300 flex items-center justify-center border border-sky-400/40 mb-1.5 group-hover:scale-110 transition-transform">
                  <Activity className="w-4.5 h-4.5" />
                </div>
                <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-200 border border-sky-400/30 font-title mb-1">
                  {nodes.timelapse.tag}
                </span>
                <h4 className="font-title text-xs lg:text-sm font-extrabold text-white leading-tight">
                  {nodes.timelapse.title}
                </h4>
                <p className="text-[10px] text-blue-200 font-sans mt-0.5 line-clamp-1">
                  {nodes.timelapse.subtitle}
                </p>
              </div>
            </div>

            {/* CÍRCULO 3: Genética Molecular */}
            <div className="flex justify-center">
              <div
                onClick={() => setActiveNode('genetics')}
                className={`w-44 h-44 lg:w-48 lg:h-48 rounded-full border-2 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-4 text-center relative group backdrop-blur-xl ${
                  activeNode === 'genetics'
                    ? `${nodes.genetics.ringColor} ${nodes.genetics.activeRing} ${nodes.genetics.activeBg} scale-105 shadow-2xl`
                    : 'border-sky-400/30 bg-white/5 hover:border-sky-300 hover:bg-white/10 hover:scale-105'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-300 flex items-center justify-center border border-sky-400/40 mb-1.5 group-hover:scale-110 transition-transform">
                  <Dna className="w-4.5 h-4.5" />
                </div>
                <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-200 border border-sky-400/30 font-title mb-1">
                  {nodes.genetics.tag}
                </span>
                <h4 className="font-title text-xs lg:text-sm font-extrabold text-white leading-tight">
                  {nodes.genetics.title}
                </h4>
                <p className="text-[10px] text-blue-200 font-sans mt-0.5 line-clamp-1">
                  {nodes.genetics.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* FILA 2: CÍRCULO CENTRAL IA (GRANDE & PULSANTE) */}
          <div className="flex justify-center relative z-10 mb-6">
            <div className="relative">
              {/* Anillo de aura exterior */}
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl animate-pulse pointer-events-none" />
              
              <div
                onClick={() => setActiveNode('ai')}
                className={`w-52 h-52 lg:w-56 lg:h-56 rounded-full border-2 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-5 text-center relative group backdrop-blur-2xl ${
                  activeNode === 'ai'
                    ? 'border-cyan-300 bg-gradient-to-br from-cyan-500/30 via-blue-600/35 to-cyan-500/30 ring-4 ring-cyan-400/60 shadow-2xl shadow-cyan-400/50 scale-105'
                    : 'border-cyan-400/40 bg-white/10 hover:border-cyan-300 hover:bg-white/15 hover:scale-105'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-cyan-400/20 text-cyan-200 flex items-center justify-center border border-cyan-300/50 mb-1.5 group-hover:scale-110 transition-transform shadow-inner">
                  <Brain className="w-6 h-6 text-cyan-300 animate-pulse" />
                </div>
                <span className="text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-100 border border-cyan-300/40 font-title mb-1">
                  {nodes.ai.tag}
                </span>
                <h4 className="font-title text-sm lg:text-base font-extrabold text-white leading-tight">
                  {nodes.ai.title}
                </h4>
                <p className="text-[11px] text-cyan-100 font-sans mt-0.5">
                  {nodes.ai.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* FILA 3: CÍRCULO RESULTADO CLÍNICO OPTIMIZADO */}
          <div className="flex justify-center relative z-10">
            <div
              onClick={() => setActiveNode('outcome')}
              className={`w-44 h-44 lg:w-48 lg:h-48 rounded-full border-2 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-4 text-center relative group backdrop-blur-xl ${
                activeNode === 'outcome'
                  ? `${nodes.outcome.ringColor} ${nodes.outcome.activeRing} ${nodes.outcome.activeBg} scale-105 shadow-2xl`
                  : 'border-cyan-400/40 bg-white/5 hover:border-cyan-300 hover:bg-white/10 hover:scale-105'
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-400/40 mb-1.5 group-hover:scale-110 transition-transform">
                <Target className="w-4.5 h-4.5 text-cyan-300" />
              </div>
              <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 font-title mb-1">
                {nodes.outcome.tag}
              </span>
              <h4 className="font-title text-xs lg:text-sm font-extrabold text-white leading-tight">
                {nodes.outcome.title}
              </h4>
              <p className="text-[10px] text-cyan-200 font-sans mt-0.5">
                {nodes.outcome.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TOPOLOGÍA DE CÍRCULOS (MÓVILES) */}
      {/* ========================================================================= */}
      <div className="md:hidden space-y-3 relative z-10 my-4">
        {(['ml', 'timelapse', 'genetics', 'ai', 'outcome'] as const).map((key, idx) => {
          const item = nodes[key];
          const Icon = item.icon;
          const isActive = activeNode === key;
          return (
            <div key={key} className="flex flex-col items-center">
              {idx > 0 && (
                <div className="flex flex-col items-center my-1 text-cfa-cyan">
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                </div>
              )}

              <div
                onClick={() => setActiveNode(key)}
                className={`w-36 h-36 rounded-full border-2 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-3 text-center relative backdrop-blur-xl ${
                  isActive
                    ? `${item.ringColor} ${item.activeRing} ${item.activeBg} scale-105 shadow-xl`
                    : 'border-white/20 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center mb-1 border border-white/20">
                  <Icon className="w-4 h-4 text-cfa-light" />
                </div>
                <span className="text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-blue-100 font-title mb-0.5">
                  {item.tag}
                </span>
                <h4 className="font-title text-[11px] font-bold text-white leading-tight">
                  {item.title}
                </h4>
                <p className="text-[9px] text-blue-200 font-sans mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lema Oficial Institucional al Pie */}
      <div className="relative z-10 text-center pt-4 border-t border-white/10 mt-4">
        <p className="text-[11px] sm:text-xs font-extrabold text-cfa-light tracking-wider uppercase font-title leading-relaxed">
          {language === 'es'
            ? 'INVERTIMOS EN LA MEJOR TECNOLOGÍA EN LA CERTEZA DE BRINDAR LAS MEJORES POSIBILIDADES DE FORMAR UNA FAMILIA'
            : 'WE INVEST IN THE BEST TECHNOLOGY TO PROVIDE THE BEST POSSIBILITIES OF BUILDING A FAMILY'}
        </p>
      </div>
    </div>
  );
}
