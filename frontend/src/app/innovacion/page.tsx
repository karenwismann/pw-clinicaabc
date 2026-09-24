'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Brain, Cpu, Dna, Activity, ChevronRight, X, Calendar, CheckCircle2, ShieldCheck, Play, Film } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

import CyberneticIntegrationDiagram from '@/components/CyberneticIntegrationDiagram';

export default function InnovacionPage() {
  const { language } = useLanguage();
  const [activeModal, setActiveModal] = useState<'ml' | 'ia' | null>(null);

  const roadmapItems = [
    {
      title: "MACHINE LEARNING",
      desc: language === 'es'
        ? "Optimización de protocolos de estimulación ovárica y predicción de respuesta hormonal con modelos entrenados en 15 años de datos estadísticos junto a CercleAI."
        : "Ovarian stimulation protocol optimization and hormonal response prediction with models trained on 15 years of clinical data alongside CercleAI.",
      icon: Cpu,
      status: language === 'es' ? "Implementado" : "Implemented"
    },
    {
      title: "MORFO CINÉTICA",
      desc: language === 'es'
        ? "Seguimiento en tiempo real del desarrollo celular embrionario desde la fertilización hasta el estadio de blastocisto en día 5 o 6."
        : "Real-time tracking of embryonic cellular division from fertilization to blastocyst stage on day 5 or 6.",
      icon: Activity,
      status: language === 'es' ? "Activo" : "Active"
    },
    {
      title: "INTELIGENCIA ARTIFICIAL",
      desc: language === 'es'
        ? "Algoritmos de visión computacional y redes neuronales para la selección del embrión con mayor potencial biológico de implantación."
        : "Computer vision algorithms and neural networks to select the embryo with highest implantation and live birth potential.",
      icon: Brain,
      status: language === 'es' ? "Vanguardia" : "State-of-the-Art"
    },
    {
      title: "GENÉTICA MOLECULAR",
      desc: language === 'es'
        ? "Integración cibernética de técnicas de secuenciación moleculares en correlación morfocinética."
        : "Cybernetic integration of molecular sequencing techniques with morphokinetic correlation.",
      icon: Dna,
      status: language === 'es' ? "Avanzado" : "Advanced"
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Header - High Contrast Light Text */}
      <section className="bg-gradient-to-r from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-cfa-light text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Vanguardia Científica' : 'Scientific Vanguard'}</span>
          </div>
          <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-light text-white">
            {language === 'es' ? 'Innovación Médica & Inteligencia Artificial' : 'Medical Innovation & Artificial Intelligence'}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-sans">
            {language === 'es'
              ? 'Invertimos en la mejor tecnología en la certeza de brindar las mejores posibilidades de formar una familia.'
              : 'We invest in the best technology to provide the highest probability of building a family.'}
          </p>
        </div>
      </section>

      {/* Apartado Integrado de Innovación Tecnológica */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* 1. NOTICIA DESTACADA: PIONEROS EN MÉXICO (TIMELAPSE) */}
        <div id="timelapse" className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-md space-y-8 relative">
          
          {/* Encabezado */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#0B2559] text-white flex items-center justify-center font-bold shadow-sm">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B2559] text-white text-xs font-medium uppercase tracking-wider font-title">
                  <Sparkles className="w-3 h-3 text-white" />
                  {language === 'es' ? 'Noticia Destacada • Pioneros en México' : 'Featured News • Pioneers in Mexico'}
                </span>
                <h2 className="font-title text-2xl sm:text-3xl font-light text-[#0B2559] mt-1">
                  {language === 'es' ? 'Incubadora Timelapse en el Laboratorio FIV' : 'Timelapse Incubator in IVF Laboratory'}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-[#0B2559]">
              <ShieldCheck className="w-4 h-4 text-[#0B2559]" />
              <span className="text-xs font-bold text-[#0B2559] font-title">
                {language === 'es' ? 'Exclusividad Clínica ABC' : 'ABC Exclusive Technology'}
              </span>
            </div>
          </div>

          {/* Cita Destacada - Fondo azul sólido y texto blanco */}
          <div className="p-6 rounded-2xl bg-[#0B2559] text-white shadow-md">
            <p className="text-base sm:text-lg text-white font-medium leading-relaxed font-title">
              {language === 'es'
                ? 'Estamos emocionados por compartirles que somos la primera y única clínica en México que cuenta con una incubadora de timelapse. Es una tecnología de vanguardia que permite monitorear el desarrollo embrionario de manera continua y detallada en los laboratorios de fertilización in vitro (FIV).'
                : 'We are thrilled to share that we are the first and only clinic in Mexico equipped with a timelapse incubator. This cutting-edge technology allows continuous and detailed monitoring of embryonic development in in vitro fertilization (IVF) laboratories.'}
            </p>
          </div>

          {/* DEMOSTRACIÓN VISUAL: VIDEO DE VIDA & FOTOGRAFÍA TIMELAPSE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Columna Izquierda / Video: Demostración en Video del Desarrollo Celular (VIDA) */}
            <div className="lg:col-span-7 bg-[#0B2559] rounded-2xl p-5 sm:p-6 text-white flex flex-col justify-between shadow-lg border border-[#004C97]">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#0B2559] text-xs font-bold font-title">
                  <Film className="w-3.5 h-3.5 text-[#0B2559]" />
                  {language === 'es' ? 'Demostración en Video' : 'Video Demonstration'}
                </span>
                <span className="text-[11px] font-mono text-white bg-white/20 px-2.5 py-0.5 rounded-full">
                  HD
                </span>
              </div>

              {/* Video Player */}
              <div className="relative rounded-xl overflow-hidden bg-black border border-white/10 shadow-inner aspect-video">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/imagenes/instalaciones/timelapse_morphokinetics.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/vida.mp4" type="video/mp4" />
                  <source src="/videos/vida.mov" type="video/quicktime" />
                  {language === 'es'
                    ? 'Tu navegador no soporta reproducción de video HTML5.'
                    : 'Your browser does not support HTML5 video playback.'}
                </video>
              </div>

              <div className="mt-3.5 pt-2.5 border-t border-white/15 flex items-center justify-between text-[11px] text-white/90 font-sans">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-white" />
                  {language === 'es' ? 'Monitoreo de desarrollo embrionario' : 'Embryonic development monitoring'}
                </span>
                <span className="font-semibold text-white">CFA • Centro Médico ABC</span>
              </div>
            </div>

            {/* Columna Derecha / Foto: Incubadora Timelapse MIRI TL12 en Laboratorio */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#0B2559] flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B2559] text-white text-xs font-bold font-title">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  {language === 'es' ? 'Incubadora Timelapse' : 'Timelapse Incubator'}
                </span>
                <span className="text-[11px] font-bold text-white bg-[#0B2559] px-2.5 py-0.5 rounded-full font-title">
                  MIRI® TL12
                </span>
              </div>

              {/* Imagen en Alta Definición */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm aspect-video group">
                <Image
                  src="/imagenes/instalaciones/timelapse_miri_tl12.jpg"
                  alt="Incubadora Timelapse en Laboratorio FIV CFA Centro Médico ABC"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-3.5 pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-[#0B2559] font-title">
                <span className="flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0B2559]" />
                  {language === 'es' ? 'Laboratorio de Reproducción Asistida' : 'Assisted Reproduction Laboratory'}
                </span>
              </div>
            </div>

          </div>

          {/* Texto Exacto de la Sección Timelapse según Word */}
          <div className="space-y-4 text-sm sm:text-base text-[#1A2E40] leading-relaxed font-sans pt-4 border-t border-slate-200">
            <p>
              {language === 'es'
                ? 'Una incubadora timelapse es una tecnología de vanguardia utilizada en los laboratorios de fertilización in vitro (FIV) para monitorear el desarrollo embrionario con precisión y detalle. A diferencia de las incubadoras tradicionales, que requieren la extracción intermitente de embriones para su observación, una incubadora de Timelapse captura imágenes continuas de los embriones a medida que crecen y se desarrollan.'
                : 'A timelapse incubator is a cutting-edge technology used in in vitro fertilization (IVF) laboratories to monitor embryonic development with precision and detail. Unlike traditional incubators, which require intermittent removal of embryos for observation, a Timelapse incubator captures continuous images of embryos as they grow and develop.'}
            </p>
            <p>
              {language === 'es'
                ? 'Al registrar este proceso de desarrollo, los embriólogos pueden analizar varios parámetros, como las tasas de división celular, la morfología del embrión y los tiempos de las etapas cruciales del desarrollo. Esta gran cantidad de datos les permite seleccionar los mejores embriones para la transferencia, lo que potencialmente aumenta las posibilidades de un embarazo exitoso y minimiza el riesgo de embarazos múltiples.'
                : 'By recording this developmental process, embryologists can analyze various parameters, such as cell division rates, embryo morphology, and timings of crucial developmental stages. This wealth of data allows them to select the best embryos for transfer, potentially increasing the chances of a successful pregnancy and minimizing the risk of multiple pregnancies.'}
            </p>
            <p>
              {language === 'es'
                ? 'En esencia, una incubadora timelapse revoluciona el proceso de selección de embriones en la FIV, ofreciendo mayor conocimiento y control a los especialistas en fertilidad y, en última instancia, mejorando la eficiencia y los resultados de los procedimientos de reproducción asistida.'
                : 'In essence, a timelapse incubator revolutionizes the embryo selection process in IVF, offering greater knowledge and control to fertility specialists and, ultimately, improving the efficiency and outcomes of assisted reproduction procedures.'}
            </p>
          </div>
        </div>

        {/* 2. DIAGRAMA DINÁMICO DE INTEGRACIÓN CIBERNÉTICA & BIOLÓGICA */}
        <div>
          <CyberneticIntegrationDiagram />
        </div>

        {/* 3. CRONOGRAMA TECNOLÓGICO CFA (DIRECTAMENTE DESPUÉS DEL DIAGRAMA) */}
        <div className="bg-gradient-to-br from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl border border-cfa-softBlue/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-cfa-light text-xs font-medium uppercase tracking-wider font-title mb-2">
                <Sparkles className="w-3.5 h-3.5 text-cfa-light" />
                <span>{language === 'es' ? 'Trayectoria & Futuro' : 'Roadmap & Future'}</span>
              </div>
              <h2 className="font-title text-2xl sm:text-3xl font-light text-white">
                {language === 'es' ? 'Cronograma Tecnológico CFA' : 'CFA Technological Roadmap'}
              </h2>
            </div>
            <span className="text-xs text-blue-100 font-sans italic max-w-sm text-left sm:text-right">
              {language === 'es'
                ? 'Invertimos en la mejor tecnología en la certeza de brindar las mejores posibilidades de formar una familia.'
                : 'We invest in the best technology to provide the best possibilities of building a family.'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 hover:border-cfa-light/40 transition-all flex flex-col justify-between space-y-4 hover:scale-[1.02] duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-cfa-cyan/30 flex items-center justify-center text-cfa-light shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-cfa-light/20 text-white border border-cfa-light/30 font-title">
                        {item.status}
                      </span>
                    </div>

                    <h3 className="font-title text-base font-normal text-white tracking-wide">
                      {item.title}
                    </h3>

                    <p className="text-xs text-blue-100 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. MACHINE LEARNING & INTELIGENCIA ARTIFICIAL EN CFA (ABAJO) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cfa-softBlue shadow-soft space-y-10">
          <div>
            <span className="text-xs font-medium text-cfa-cyan uppercase tracking-wider bg-cfa-softBlue px-3 py-1 rounded-full font-title">
              {language === 'es' ? 'Pilar Tecnológico' : 'Technological Pillar'}
            </span>
            <h2 className="font-title text-2xl sm:text-3xl font-light text-cfa-navy mt-3">
              {language === 'es' ? 'Machine Learning e Inteligencia Artificial en CFA' : 'Machine Learning & Artificial Intelligence at CFA'}
            </h2>
            <p className="text-sm text-cfa-grayDark mt-2 leading-relaxed font-sans">
              {language === 'es'
                ? 'En marzo de 2021 iniciamos un proyecto conjunto con CercleAI para optimizar protocolos médicos mediante algoritmos que aprenden de la experiencia y los datos clínicos acumulados en más de 15 años de trayectoria médica.'
                : 'In March 2021, we launched a joint initiative with CercleAI to optimize medical protocols through algorithms learning from over 15 years of clinical data.'}
            </p>
          </div>

          {/* Cards de ML e IA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Machine Learning Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-cfa-grayLight border border-cfa-grayBorder space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-cfa-softBlue text-cfa-cyan flex items-center justify-center font-bold">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-title text-xl font-normal text-cfa-navy">
                  Machine Learning (ML)
                </h3>
                <p className="text-xs sm:text-sm text-cfa-grayDark leading-relaxed font-sans">
                  {language === 'es'
                    ? 'Plataforma desarrollada con CercleAI que procesa la historia reproductiva y determinaciones hormonales para generar gráficas avanzadas que guían la toma de decisiones clínicas con privacidad matemática absoluta.'
                    : 'Platform developed with CercleAI processing reproductive histories and hormone profiles to generate predictive analytics guiding clinical decisions with full privacy.'}
                </p>
              </div>

              <button
                onClick={() => setActiveModal('ml')}
                className="w-full py-2.5 px-4 rounded-xl bg-cfa-navy text-white hover:bg-cfa-cyan text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer font-title"
              >
                <span>{language === 'es' ? 'Ver más: Machine Learning' : 'Learn More: Machine Learning'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Inteligencia Artificial Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-cfa-grayLight border border-cfa-grayBorder space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-cfa-softBlue text-cfa-cyan flex items-center justify-center font-bold">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="font-title text-xl font-normal text-cfa-navy">
                  {language === 'es' ? 'Inteligencia Artificial (IA) & Morfocinética' : 'Artificial Intelligence (AI) & Morphokinetics'}
                </h3>
                <p className="text-xs sm:text-sm text-cfa-grayDark leading-relaxed font-sans">
                  {language === 'es'
                    ? 'Visión computacional y procesamiento de imágenes microscópicas del embrión desde la fertilización hasta el estadio de blastocisto en día 5 o 6 para elegir el embrión con mayor potencial de embarazo.'
                    : 'Computer vision analyzing microscopic time-lapse images of embryos from fertilization to day 5/6 blastocyst stage to select the embryo with highest live birth potential.'}
                </p>
              </div>

              <button
                onClick={() => setActiveModal('ia')}
                className="w-full py-2.5 px-4 rounded-xl bg-cfa-navy text-white hover:bg-cfa-cyan text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer font-title"
              >
                <span>{language === 'es' ? 'Ver más: Inteligencia Artificial' : 'Learn More: Artificial Intelligence'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modales de Ver Más: ML e IA */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cfa-navy/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-cfa-softBlue/60 ring-1 ring-black/5 overflow-hidden max-h-[85vh] flex flex-col animate-scaleUp">
            <div className="px-6 py-5 bg-gradient-to-r from-cfa-navy to-cfa-deepBlue text-white rounded-t-3xl flex-shrink-0 flex items-center justify-between">
              <h3 className="font-title text-xl font-light text-white">
                {activeModal === 'ml'
                  ? (language === 'es' ? 'Machine Learning en Reproducción Asistida' : 'Machine Learning in Assisted Reproduction')
                  : (language === 'es' ? 'Inteligencia Artificial & Morfocinética' : 'Artificial Intelligence & Morphokinetics')}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-cfa-grayDark leading-relaxed font-sans">
              {activeModal === 'ml' ? (
                <>
                  <p>
                    {language === 'es'
                      ? 'El machine learning (ML), o aprendizaje automático, es un campo de estudio y una rama de la inteligencia artificial que se centra en el desarrollo de algoritmos y modelos que permiten a las máquinas aprender y mejorar su rendimiento a través de la experiencia y los datos.'
                      : 'Machine learning (ML) is a branch of artificial intelligence focused on developing algorithms and models that allow systems to learn and improve performance through experience and data.'}
                  </p>
                  <p>
                    {language === 'es'
                      ? 'En marzo del año 2021 iniciamos un proyecto conjunto con CercleAI con el fin de optimizar su plataforma de ML. Después de 14 meses de trabajo la plataforma ya es funcional y ahora estamos en el proceso de alimentarla con la información matemática y estadística de nuestra experiencia en los últimos 15 años.'
                      : 'In March 2021, we initiated a joint project with CercleAI to optimize their ML platform. After 14 months of development, the platform is active and continuously updated with clinical statistics from 15+ years of practice.'}
                  </p>
                  <h4 className="font-title font-normal text-cfa-navy text-sm pt-2">
                    {language === 'es' ? '¿Cómo funciona?' : 'How does it work?'}
                  </h4>
                  <ul className="space-y-2 pl-2">
                    <li className="flex items-start gap-2">
                      <span className="text-cfa-cyan font-bold">•</span>
                      <span><strong>{language === 'es' ? 'Fase 1:' : 'Phase 1:'}</strong> {language === 'es' ? 'Alimentar la plataforma con la historia reproductiva de cientos de casos clínicos.' : 'Feed reproductive history from hundreds of clinical cases.'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cfa-cyan font-bold">•</span>
                      <span><strong>{language === 'es' ? 'Fase 2:' : 'Phase 2:'}</strong> {language === 'es' ? 'Introducir datos acerca de la estimulación ovárica en los tratamientos de reproducción asistida y determinaciones hormonales seriadas.' : 'Input ovarian stimulation data and serial hormonal assays.'}</span>
                    </li>
                  </ul>
                  <p>
                    {language === 'es'
                      ? 'Una vez terminados los procesos, los algoritmos nos proveen de gráficas en cada uno de los pasos con información avanzada que nos guía a tomar las mejores decisiones terapéuticas para cada paciente, preservando la privacidad total.'
                      : 'Upon processing, algorithms generate comprehensive charts guiding optimal therapeutic decisions for every patient with absolute privacy.'}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    {language === 'es'
                      ? 'La inteligencia artificial (IA) es un campo multidisciplinario centrado en la creación de programas capaces de realizar tareas complejas emulando el razonamiento lógico, reconocimiento de patrones y visión por computadora.'
                      : 'Artificial Intelligence (AI) enables systems to perform complex tasks emulating logical reasoning, pattern recognition, and computer vision.'}
                  </p>
                  <p>
                    {language === 'es'
                      ? 'Agregamos la información recabada de las imágenes microscópicas más significativas de cada embrión durante su desarrollo desde la fertilización hasta el estadio de blastocisto en los días 5 o 6.'
                      : 'We incorporate data collected from time-lapse microscopic images of each embryo during development from fertilization to blastocyst stage on day 5 or 6.'}
                  </p>
                  <p>
                    {language === 'es'
                      ? 'Con la ayuda de los algoritmos generados por el machine learning y las características del desarrollo embrionario obtenemos resultados que nos permiten elegir el embrión con más posibilidades de brindarnos un embarazo.'
                      : 'With the help of machine learning algorithms and embryonic morphokinetics, we identify the embryo with highest implantation potential.'}
                  </p>
                </>
              )}
            </div>

            <div className="p-4 bg-cfa-grayLight border-t border-cfa-grayBorder rounded-b-3xl flex-shrink-0 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-xl bg-cfa-navy text-white text-xs font-semibold hover:bg-cfa-cyan transition-colors cursor-pointer font-title"
              >
                {language === 'es' ? 'Cerrar' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
