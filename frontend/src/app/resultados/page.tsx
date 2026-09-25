'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, TrendingUp, CheckCircle2, ShieldCheck, Heart, Sparkles, Table as TableIcon, Eye, X, ChevronRight, FileText, Info } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ResultadosPage() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Table 1: FET CON PGT-A (POR EDAD)
  const fetConPgta = [
    { edad: '< 35', transferencias: 195, edadMedia: 31.0, embrionesTotal: 237, embrionesProm: 1.22, bioq: '65.6%', clin: '59.0%', imp: '56.5%', unico: '84.3%', mult: '15.7%' },
    { edad: '35 - 37', transferencias: 125, edadMedia: 36.2, embrionesTotal: 140, embrionesProm: 1.12, bioq: '68.8%', clin: '64.0%', imp: '64.3%', unico: '87.5%', mult: '12.5%' },
    { edad: '38 - 40', transferencias: 102, edadMedia: 38.8, embrionesTotal: 116, embrionesProm: 1.14, bioq: '60.8%', clin: '57.8%', imp: '52.6%', unico: '96.6%', mult: '3.4%' },
    { edad: '41 - 42', transferencias: 46, edadMedia: 41.4, embrionesTotal: 53, embrionesProm: 1.15, bioq: '71.7%', clin: '60.9%', imp: '60.4%', unico: '85.7%', mult: '14.3%' },
    { edad: '> 42', transferencias: 46, edadMedia: 44.7, embrionesTotal: 55, embrionesProm: 1.20, bioq: '63.0%', clin: '60.9%', imp: '60.0%', unico: '82.1%', mult: '17.9%' },
  ];

  // Table 2: FET SIN PGT-A (POR EDAD)
  const fetSinPgta = [
    { edad: '< 35', transferencias: 141, edadMedia: 31.2, embrionesTotal: 228, embrionesProm: 1.62, bioq: '63.1%', clin: '57.4%', imp: '43.9%', unico: '77.8%', mult: '21.0%' },
    { edad: '35 - 37', transferencias: 101, edadMedia: 35.9, embrionesTotal: 156, embrionesProm: 1.54, bioq: '52.5%', clin: '46.5%', imp: '36.5%', unico: '78.7%', mult: '21.3%' },
    { edad: '38 - 40', transferencias: 79, edadMedia: 38.9, embrionesTotal: 136, embrionesProm: 1.72, bioq: '51.9%', clin: '46.8%', imp: '34.6%', unico: '73.0%', mult: '27.0%' },
    { edad: '41 - 42', transferencias: 24, edadMedia: 41.4, embrionesTotal: 43, embrionesProm: 1.79, bioq: '41.7%', clin: '37.5%', imp: '20.9%', unico: '100.0%', mult: '0.0%' },
    { edad: '> 42', transferencias: 53, edadMedia: 44.6, embrionesTotal: 85, embrionesProm: 1.60, bioq: '54.7%', clin: '49.1%', imp: '32.9%', unico: '92.3%', mult: '7.7%' },
  ];

  // Table 3: COMPARATIVA (Acumulado 2021-2025)
  const comparativaAcumulada = [
    { grupo: 'FET Sin PGT-A', transferencias: 398, edadMedia: 36.3, embrionesTotal: 648, embrionesProm: 1.63, bioq: '55.8%', clin: '50.3%', imp: '37.2%', unico: '80.0%', mult: '19.5%' },
    { grupo: 'FET Con PGT-A', transferencias: 514, edadMedia: 35.9, embrionesTotal: 601, embrionesProm: 1.17, bioq: '65.8%', clin: '60.3%', imp: '58.2%', unico: '87.4%', mult: '12.6%' },
  ];

  // Table 4: DONACIÓN
  const donacion = [
    { parametro: language === 'es' ? 'Edad promedio' : 'Average Age', valor: '26.3', highlight: false, isCyan: false, isNavy: false, isDeepBlue: false },
    { parametro: language === 'es' ? 'Promedio por transferencia' : 'Average per Transfer', valor: '1.9', highlight: false, isCyan: false, isNavy: false, isDeepBlue: false },
    { parametro: language === 'es' ? 'Embarazo bioquímico' : 'Biochemical Pregnancy', valor: '70.8%', highlight: true, isCyan: true, isNavy: false, isDeepBlue: false },
    { parametro: language === 'es' ? 'Embarazo clínico' : 'Clinical Pregnancy', valor: '62.0%', highlight: true, isCyan: false, isNavy: true, isDeepBlue: false },
    { parametro: language === 'es' ? 'Tasa de implantación' : 'Implantation Rate', valor: '41.5%', highlight: false, isCyan: false, isNavy: false, isDeepBlue: true },
    { parametro: language === 'es' ? 'Embarazo único' : 'Single Pregnancy', valor: '55.1%', highlight: false, isCyan: false, isNavy: false, isDeepBlue: false },
    { parametro: language === 'es' ? 'Embarazo múltiple' : 'Multiple Pregnancy', valor: '44.9%', highlight: false, isCyan: false, isNavy: false, isDeepBlue: false },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-cfa-light text-xs font-semibold uppercase tracking-wider font-title">
            <Award className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Indicadores de Calidad (KPI)' : 'Key Performance Indicators (KPI)'}</span>
          </div>
          <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-light text-white">
            {language === 'es' ? 'Resultados Clínicos & KPIs' : 'Clinical Results & KPIs'}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-sans">
            {language === 'es'
              ? 'Resultados de transferencias hasta el 31 de diciembre del 2025 basados en los estándares internacionales del Consenso de Viena (ESHRE).'
              : 'Transfer outcomes through December 31, 2025 benchmarked under the international Vienna Consensus standards (ESHRE).'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Intro COPY */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cfa-softBlue shadow-soft space-y-4 text-cfa-grayDark text-sm sm:text-base leading-relaxed font-sans">
          <p>
            {language === 'es'
              ? 'En este inicio del siglo XXI, los tratamientos en medicina de la reproducción deben estar sustentados en la calidad de la infraestructura con que se cuenta, los protocolos para el diagnóstico certero, procesos de estimulación, captura de óvulos, desarrollo embrionario, procesos de criopreservación de tejidos, es decir, cada una de las cosas que ahí llevamos a cabo.'
              : 'In the 21st century, reproductive medicine treatments must be grounded in the quality of infrastructure, accurate diagnostics, stimulation protocols, egg retrieval, embryonic development, and cryopreservation.'}
          </p>
          <p>
            {language === 'es'
              ? 'En el año de 2018 en Viena, Austria se llevó a cabo una reunión para establecer un Consenso sobre los parámetros que se deben cuantificar en un laboratorio de Fertilización in Vitro para conocer si cumple con los estándares mínimos de calidad, parámetros que se verifican mes con mes y año con año para eficiencia, seguridad y clarificación.'
              : 'In 2018 in Vienna, Austria, an international consensus was established defining the standard parameters to quantify in an IVF laboratory to ensure international quality compliance, parameters that are verified month by month and year by year for efficiency, safety, and clarification.'}
          </p>
          <p>
            {language === 'es'
              ? 'Estos parámetros se denominan KPI, ó Key Performance Indicators (indicadores claves de rendimiento) por primera vez publicamos nuestros KPI del año 2019.'
              : 'These metrics are called KPIs (Key Performance Indicators). We published our first audited KPIs in 2019.'}
          </p>
          <div className="p-4 bg-cfa-iceBlue rounded-2xl border border-cfa-softBlue font-semibold text-cfa-navy">
            {language === 'es'
              ? 'Resultados de transferencias hasta el 31 de diciembre del 2025. La decisión de cuándo transferir se basa en optimizar el máximo beneficio para la pareja. Nuestras transferencias de embriones en previamente congelados se presentan en las siguientes tablas:'
              : 'Transfer results through December 31, 2025. The decision of when to transfer is tailored to maximize success. Our frozen embryo transfers (FET) are presented in the following tables:'}
          </div>
        </div>

        {/* TABLA 1: FET CON PGT-A (POR EDAD) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cfa-softBlue shadow-soft space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-cfa-cyan uppercase tracking-wider font-title">
                {language === 'es' ? 'Transferencia de Embriones Vitrificados' : 'Frozen Embryo Transfer'}
              </span>
              <h3 className="font-title text-xl sm:text-2xl font-light text-cfa-navy">
                FET CON PGT-A (POR EDAD)
              </h3>
            </div>
            <button
              onClick={() => setSelectedImage('/imagenes/kpi/tabla-fet-con-pgta-por-edad.png')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cfa-iceBlue hover:bg-cfa-softBlue text-cfa-cyan font-bold text-xs transition-colors cursor-pointer font-title self-start sm:self-auto"
            >
              <Eye className="w-4 h-4" />
              <span>{language === 'es' ? 'Ver Tabla Fuente' : 'View Source Graphic'}</span>
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-cfa-grayBorder">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-cfa-navy text-white font-title text-[11px] sm:text-xs">
                <tr>
                  <th className="p-3">Edad (Años)</th>
                  <th className="p-3 text-center">No. Transf.</th>
                  <th className="p-3 text-center">Edad Media</th>
                  <th className="p-3 text-center">Total Emb.</th>
                  <th className="p-3 text-center">Prom. Emb.</th>
                  <th className="p-3 text-center bg-cfa-cyan/20">Emb. Bioquímico</th>
                  <th className="p-3 text-center bg-cfa-cyan/30">Emb. Clínico</th>
                  <th className="p-3 text-center">Tasa Implantación</th>
                  <th className="p-3 text-center">Gest. Única</th>
                  <th className="p-3 text-center">Gest. Múltiple</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cfa-grayBorder font-sans text-cfa-navy">
                {fetConPgta.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-cfa-grayLight/60'}>
                    <td className="p-3 font-bold text-cfa-navy font-title">{row.edad}</td>
                    <td className="p-3 text-center font-semibold">{row.transferencias}</td>
                    <td className="p-3 text-center">{row.edadMedia.toFixed(1)}</td>
                    <td className="p-3 text-center">{row.embrionesTotal}</td>
                    <td className="p-3 text-center">{row.embrionesProm.toFixed(2)}</td>
                    <td className="p-3 text-center font-bold text-cfa-cyan bg-cfa-softBlue/30">{row.bioq}</td>
                    <td className="p-3 text-center font-bold text-cfa-navy bg-cfa-softBlue/50">{row.clin}</td>
                    <td className="p-3 text-center font-semibold text-cfa-deepBlue">{row.imp}</td>
                    <td className="p-3 text-center">{row.unico}</td>
                    <td className="p-3 text-center text-cfa-grayDark">{row.mult}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* TABLA 2: FET SIN PGT-A (POR EDAD) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cfa-softBlue shadow-soft space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-cfa-cyan uppercase tracking-wider font-title">
                {language === 'es' ? 'Transferencia de Embriones Vitrificados' : 'Frozen Embryo Transfer'}
              </span>
              <h3 className="font-title text-xl sm:text-2xl font-light text-cfa-navy">
                FET SIN PGT-A (POR EDAD)
              </h3>
            </div>
            <button
              onClick={() => setSelectedImage('/imagenes/kpi/tabla-fet-sin-pgta-por-edad.png')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cfa-iceBlue hover:bg-cfa-softBlue text-cfa-cyan font-bold text-xs transition-colors cursor-pointer font-title self-start sm:self-auto"
            >
              <Eye className="w-4 h-4" />
              <span>{language === 'es' ? 'Ver Tabla Fuente' : 'View Source Graphic'}</span>
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-cfa-grayBorder">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-cfa-navy text-white font-title text-[11px] sm:text-xs">
                <tr>
                  <th className="p-3">Edad (Años)</th>
                  <th className="p-3 text-center">No. Transf.</th>
                  <th className="p-3 text-center">Edad Media</th>
                  <th className="p-3 text-center">Total Emb.</th>
                  <th className="p-3 text-center">Prom. Emb.</th>
                  <th className="p-3 text-center bg-cfa-cyan/20">Emb. Bioquímico</th>
                  <th className="p-3 text-center bg-cfa-cyan/30">Emb. Clínico</th>
                  <th className="p-3 text-center">Tasa Implantación</th>
                  <th className="p-3 text-center">Gest. Única</th>
                  <th className="p-3 text-center">Gest. Múltiple</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cfa-grayBorder font-sans text-cfa-navy">
                {fetSinPgta.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-cfa-grayLight/60'}>
                    <td className="p-3 font-bold text-cfa-navy font-title">{row.edad}</td>
                    <td className="p-3 text-center font-semibold">{row.transferencias}</td>
                    <td className="p-3 text-center">{row.edadMedia.toFixed(1)}</td>
                    <td className="p-3 text-center">{row.embrionesTotal}</td>
                    <td className="p-3 text-center">{row.embrionesProm.toFixed(2)}</td>
                    <td className="p-3 text-center font-bold text-cfa-cyan bg-cfa-softBlue/30">{row.bioq}</td>
                    <td className="p-3 text-center font-bold text-cfa-navy bg-cfa-softBlue/50">{row.clin}</td>
                    <td className="p-3 text-center font-semibold text-cfa-deepBlue">{row.imp}</td>
                    <td className="p-3 text-center">{row.unico}</td>
                    <td className="p-3 text-center text-cfa-grayDark">{row.mult}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* TABLA 3: COMPARATIVA (Acumulado 2021-2025) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cfa-softBlue shadow-soft space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-cfa-cyan uppercase tracking-wider font-title">
                {language === 'es' ? 'Comparativa General' : 'Overall Comparison'}
              </span>
              <h3 className="font-title text-xl sm:text-2xl font-light text-cfa-navy">
                COMPARATIVA ACUMULADO 2021-2025 (FET SIN PGT-A vs. FET CON PGT-A)
              </h3>
            </div>
            <button
              onClick={() => setSelectedImage('/imagenes/kpi/tabla-acumulado-2021-2025.png')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cfa-iceBlue hover:bg-cfa-softBlue text-cfa-cyan font-bold text-xs transition-colors cursor-pointer font-title self-start sm:self-auto"
            >
              <Eye className="w-4 h-4" />
              <span>{language === 'es' ? 'Ver Tabla Fuente' : 'View Source Graphic'}</span>
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-cfa-grayBorder">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-cfa-navy text-white font-title text-[11px] sm:text-xs">
                <tr>
                  <th className="p-3">Protocolo</th>
                  <th className="p-3 text-center">No. Transf.</th>
                  <th className="p-3 text-center">Edad Media</th>
                  <th className="p-3 text-center">Total Emb.</th>
                  <th className="p-3 text-center">Prom. Emb.</th>
                  <th className="p-3 text-center bg-cfa-cyan/20">Emb. Bioquímico</th>
                  <th className="p-3 text-center bg-cfa-cyan/30">Emb. Clínico</th>
                  <th className="p-3 text-center">Tasa Implantación</th>
                  <th className="p-3 text-center">Gest. Única</th>
                  <th className="p-3 text-center">Gest. Múltiple</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cfa-grayBorder font-sans text-cfa-navy">
                {comparativaAcumulada.map((row, idx) => (
                  <tr key={idx} className={idx === 1 ? 'bg-cfa-iceBlue/80 font-semibold' : 'bg-white'}>
                    <td className="p-3 font-bold text-cfa-navy font-title flex items-center gap-1.5">
                      {idx === 1 && <Sparkles className="w-3.5 h-3.5 text-cfa-cyan flex-shrink-0" />}
                      <span>{row.grupo}</span>
                    </td>
                    <td className="p-3 text-center font-semibold">{row.transferencias}</td>
                    <td className="p-3 text-center">{row.edadMedia.toFixed(1)}</td>
                    <td className="p-3 text-center">{row.embrionesTotal}</td>
                    <td className="p-3 text-center">{row.embrionesProm.toFixed(2)}</td>
                    <td className="p-3 text-center font-bold text-cfa-cyan bg-cfa-softBlue/40">{row.bioq}</td>
                    <td className="p-3 text-center font-bold text-cfa-navy bg-cfa-softBlue/60">{row.clin}</td>
                    <td className="p-3 text-center font-bold text-cfa-deepBlue">{row.imp}</td>
                    <td className="p-3 text-center">{row.unico}</td>
                    <td className="p-3 text-center text-cfa-grayDark">{row.mult}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* TABLA 4: DONACIÓN */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cfa-softBlue shadow-soft space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-cfa-cyan uppercase tracking-wider font-title">
                {language === 'es' ? 'Programa de Alta Eficacia' : 'High Efficiency Program'}
              </span>
              <h3 className="font-title text-xl sm:text-2xl font-light text-cfa-navy">
                {language === 'es' ? 'DONACIÓN' : 'DONATION'}
              </h3>
            </div>
            <button
              onClick={() => setSelectedImage('/imagenes/kpi/tabla-donacion.png')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cfa-iceBlue hover:bg-cfa-softBlue text-cfa-cyan font-bold text-xs transition-colors cursor-pointer font-title self-start sm:self-auto"
            >
              <Eye className="w-4 h-4" />
              <span>{language === 'es' ? 'Ver Tabla Fuente' : 'View Source Graphic'}</span>
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-cfa-grayBorder">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-cfa-navy text-white font-title text-[11px] sm:text-xs">
                <tr>
                  <th className="p-3.5">Parámetro / Indicador</th>
                  <th className="p-3.5 text-right sm:text-center">Resultado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cfa-grayBorder font-sans text-cfa-navy">
                {donacion.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-cfa-grayLight/60'}>
                    <td className="p-3.5 font-bold text-cfa-navy font-title">
                      {row.parametro}
                    </td>
                    <td className={`p-3.5 text-right sm:text-center ${
                      row.isCyan 
                        ? 'font-bold text-cfa-cyan bg-cfa-softBlue/30 text-sm sm:text-base' 
                        : row.isNavy 
                        ? 'font-bold text-cfa-navy bg-cfa-softBlue/50 text-sm sm:text-base' 
                        : row.isDeepBlue 
                        ? 'font-bold text-cfa-deepBlue text-sm sm:text-base' 
                        : 'font-semibold text-cfa-navy'
                    }`}>
                      {row.valor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Control de Calidad */}
        <div className="bg-gradient-to-br from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-cfa-light text-xs font-semibold uppercase tracking-wider font-title">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Auditoría & Rigor Científico' : 'Scientific Rigor'}</span>
          </div>
          <h3 className="font-title text-2xl sm:text-3xl font-light text-white">
            {language === 'es' ? 'Control de Calidad' : 'Quality Control'}
          </h3>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-sans">
            {language === 'es'
              ? 'Nuestro control de calidad interno se basa en el Consenso de Viena, Austria del año 2018. (ESHRE; 2017; The Vienna Consensus: Report of an expert meeting on the development of Art laboratory performance indicators; Human Reproduction Open; Pp 1-17).'
              : 'Our internal quality control is strictly based on the 2018 Vienna Consensus (ESHRE; 2017; The Vienna Consensus: Report of an expert meeting on the development of ART laboratory performance indicators; Human Reproduction Open; Pp 1-17).'}
          </p>
          <div className="pt-2 text-xs sm:text-sm text-cfa-light font-sans font-medium">
            {language === 'es'
              ? 'Los interesados en conocer más acerca de los KPI\'s (Key Performance Indicators) favor de acercarse a su médico.'
              : 'Patients interested in learning more about our KPIs are warmly invited to discuss them with their attending physician.'}
          </div>
        </div>
      </section>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cfa-navy/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-cfa-softBlue/60 ring-1 ring-black/5 overflow-hidden max-h-[90vh] flex flex-col animate-scaleUp">
            <div className="p-4 bg-cfa-navy text-white rounded-t-3xl flex-shrink-0 flex items-center justify-between">
              <span className="text-sm font-bold font-title">Tabla Fuente de Datos Clínicos CFA</span>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 overflow-auto flex items-center justify-center bg-cfa-midnight rounded-b-3xl">
              <img
                src={selectedImage}
                alt="Tabla de Resultados Fuente"
                className="max-w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

