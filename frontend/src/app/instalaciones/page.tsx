'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Building2, Cpu, Sparkles, CheckCircle2, Lock, Play, Video, Eye, X, ArrowRight, Activity, Zap, ChevronLeft, ChevronRight, Microscope, Stethoscope } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface GalleryItem {
  id: string;
  src: string;
  category: 'embriologia' | 'quirofano' | 'hormonas' | 'clinica';
  tag: { es: string; en: string };
  title: { es: string; en: string };
  description: { es: string; en: string };
  equipmentBrand?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'quirofano-completo',
    src: '/imagenes/instalaciones/quirofano_hd.jpg',
    category: 'quirofano',
    tag: { es: 'Quirófano Especializado', en: 'Surgical Suite' },
    title: {
      es: 'Quirófano de Procedimientos Reproductivos en Centro Médico ABC',
      en: 'Specialized Reproductive Surgery Suite at ABC Medical Center'
    },
    description: {
      es: 'Sala quirúrgica estéril equipada con lámpara cialítica, mesa de posicionamiento, máquina de anestesia y ultrasonido de alta resolución.',
      en: 'Sterile surgical theater equipped with surgical lighting, patient positioning table, anesthesia delivery system, and high-resolution ultrasound.'
    },
    equipmentBrand: 'Centro Médico ABC Santa Fe'
  },
  {
    id: 'estacion-micromanipulacion',
    src: '/imagenes/instalaciones/micromanipulador_icsi_hd.jpg',
    category: 'embriologia',
    tag: { es: 'Micromanipulación & ICSI', en: 'Micromanipulation & ICSI' },
    title: {
      es: 'Plataforma RI Integra con Microinyectores y Microscopio Invertido',
      en: 'RI Integra Micromanipulator Platform with Inverted Microscope'
    },
    description: {
      es: 'Estación de precisión micrométrica para ICSI (inyección intracitoplasmática de espermatozoides) y biopsia embrionaria para PGT.',
      en: 'Sub-micron micromanipulation station for single-sperm ICSI injection and embryo trophectoderm biopsy for PGT.'
    },
    equipmentBrand: 'Research Instruments (RI) / Olympus'
  },
  {
    id: 'estereomicroscopio-nikon-ri-witness',
    src: '/imagenes/instalaciones/microscopio_nikon_ri_witness.jpg',
    category: 'embriologia',
    tag: { es: 'Microscopía & RI Witness', en: 'Microscopy & RI Witness' },
    title: {
      es: 'Estereomicroscopio Nikon y Estación de Trabajo con Seguridad RI Witness',
      en: 'Nikon Stereomicroscope & RI Witness RFID Integrated Workstation'
    },
    description: {
      es: 'Óptica de alta resolución Nikon Plan 1x acoplada a placa térmica con lector RFID integrado para búsqueda de ovocitos y validación de muestras en tiempo real.',
      en: 'High-resolution Nikon Plan 1x optics paired with a thermal stage and integrated RFID reader plate for real-time oocyte recovery and electronic sample verification.'
    },
    equipmentBrand: 'Nikon Instruments & CooperSurgical RI Witness'
  },
  {
    id: 'ri-witness-rfid',
    src: '/imagenes/instalaciones/ri_witness_rfid.jpg',
    category: 'embriologia',
    tag: { es: 'Seguridad RFID RI Witness', en: 'RI Witness RFID Security' },
    title: {
      es: 'Estación de Trazabilidad y Seguridad por Radiofrecuencia (RFID)',
      en: 'British RFID Electronic Traceability & Security Station'
    },
    description: {
      es: 'Sistema británico de identificación automática por radiofrecuencia que garantiza 0% margen de error en la custodia de óvulos, esperma y embriones.',
      en: 'Automated British RFID radiofrequency tracking system guaranteeing 100% error-free custody of eggs, sperm, and embryos.'
    },
    equipmentBrand: 'CooperSurgical (UK)'
  },
  {
    id: 'timelapse-miri-tl12',
    src: '/imagenes/instalaciones/timelapse_miri_tl12.jpg',
    category: 'embriologia',
    tag: { es: 'Incubadora Timelapse', en: 'Timelapse Incubator' },
    title: {
      es: 'Incubadora Timelapse MIRI® TL12 Multicámara',
      en: 'MIRI® TL12 Multi-Chamber Timelapse Incubator'
    },
    description: {
      es: 'Incubadora de vanguardia con 12 cámaras independientes y microscopía integrada para el cultivo embrionario continuo sin perturbar el medio.',
      en: 'State-of-the-art incubator with 12 independent chambers and integrated optics for continuous undisturbed embryo culture.'
    },
    equipmentBrand: 'Esco Medical'
  },
  {
    id: 'timelapse-morphokinetics',
    src: '/imagenes/instalaciones/timelapse_morphokinetics.jpg',
    category: 'embriologia',
    tag: { es: 'Monitoreo Morfocinético', en: 'Morphokinetics & AI' },
    title: {
      es: 'Pantalla de Monitoreo Continuo e Inteligencia Artificial en FIV',
      en: 'Continuous Morphokinetic Monitoring & AI Selection Display'
    },
    description: {
      es: 'Seguimiento fotográfico segundo a segundo de la cinética de división celular de cada embrión para seleccionar los de mayor potencial de implantación.',
      en: 'Second-by-second morphokinetic tracking of cellular division timings to select embryos with the highest implantation potential.'
    },
    equipmentBrand: 'MIRI® Software Platform'
  },
  {
    id: 'incubadoras-cook-trigas',
    src: '/imagenes/instalaciones/incubadoras_cook_trigas.jpg',
    category: 'embriologia',
    tag: { es: 'Incubadoras Tri-Gas', en: 'Tri-Gas Benchtop Incubators' },
    title: {
      es: 'Batería de Incubadoras Tri-Gas Benchtop COOK Medical',
      en: 'COOK Medical Tri-Gas Benchtop Embryo Incubator Complex'
    },
    description: {
      es: 'Ambiente fisiológico estricto a 36.7°C con control preciso de CO2 y bajo oxígeno que replica fielmente las trompas de Falopio maternas.',
      en: 'Physiological incubation at 36.7°C with precise CO2/low-O2 gas mixture replicating human fallopian tubes.'
    },
    equipmentBrand: 'COOK Medical (USA)'
  },
  {
    id: 'incubadora-thermo-midi40',
    src: '/imagenes/instalaciones/incubadora_thermo_midi40.jpg',
    category: 'embriologia',
    tag: { es: 'Cultivo Celular Controlado', en: 'Controlled Cell Culture' },
    title: {
      es: 'Incubadora de Dióxido de Carbono MIDI 40 Thermo Scientific',
      en: 'Thermo Scientific MIDI 40 CO2 Laboratory Incubator'
    },
    description: {
      es: 'Control térmico y gasométrico digital de alta estabilidad para medios de cultivo y preparación biológica.',
      en: 'High-stability thermal and gas regulation for culture media preparation and biological stabilization.'
    },
    equipmentBrand: 'Thermo Scientific'
  },
  {
    id: 'bomba-aspiracion-cook',
    src: '/imagenes/instalaciones/bomba_aspiracion_cook.jpg',
    category: 'quirofano',
    tag: { es: 'Aspiración Ovocitaria', en: 'Oocyte Aspiration System' },
    title: {
      es: 'Bomba de Vacío COOK y Bloque Térmico Thermo Scientific',
      en: 'COOK Precision Vacuum Pump & Heating Block Station'
    },
    description: {
      es: 'Equipo de succión controlada a presión constante y bloque calefactado a 37°C para recolectar ovocitos con máxima viabilidad.',
      en: 'Regulated vacuum aspiration pump with 37°C tube heating block preserving thermal stability during follicular aspiration.'
    },
    equipmentBrand: 'COOK Medical & Thermo Scientific'
  },
  {
    id: 'analizador-hormonas-cobas',
    src: '/imagenes/instalaciones/analizador_hormonas_cobas.jpg',
    category: 'hormonas',
    tag: { es: 'Hormonas', en: 'Hormones' },
    title: {
      es: 'Analizador Bioquímico Automatizado Cobas e 411 Roche',
      en: 'Roche Cobas e 411 Automated Chemiluminescence Analyzer'
    },
    description: {
      es: 'Determinación ultrarrápida de estradiol, progesterona, LH y beta-hCG en menos de 60 minutos para tomas de decisión en tiempo real.',
      en: 'Ultra-rapid determination of estradiol, progesterone, LH, and beta-hCG in under 60 minutes for real-time decision making.'
    },
    equipmentBrand: 'Roche / Hitachi'
  },
  {
    id: 'transferencia-embrionaria-lab',
    src: '/imagenes/instalaciones/transferencia_embrionaria_lab.jpg',
    category: 'embriologia',
    tag: { es: 'Transferencia Embrionaria', en: 'Embryo Transfer Prep' },
    title: {
      es: 'Área de Carga de Catéteres y Preparación Embrionaria',
      en: 'Catheter Loading & Embryo Transfer Preparation Area'
    },
    description: {
      es: 'Microscopía directa adyacente a quirófano para la carga atraumática del blastocisto en catéter suave guiado.',
      en: 'Direct cleanroom microscopy adjacent to the surgical theater for atraumatic catheter loading of blastocysts.'
    },
    equipmentBrand: 'Sala Limpia CFA'
  },
  {
    id: 'captura-ovulos-procedimiento',
    src: '/imagenes/instalaciones/captura_ovulos_procedimiento.jpg',
    category: 'quirofano',
    tag: { es: 'Captura Folicular', en: 'Follicular Aspiration' },
    title: {
      es: 'Aspiración Guiada por Ultrasonido Endovaginal en Quirófano',
      en: 'Ultrasound-Guided Endovaginal Follicular Retrieval'
    },
    description: {
      es: 'Procedimiento ambulatorio bajo sedación endovenosa breve en quirófano de alta esterilidad en el Centro Médico ABC.',
      en: 'Outpatient ultrasound aspiration under gentle sedation in ABC Medical Center specialized operating suites.'
    },
    equipmentBrand: 'GE Healthcare & Quirófano CMABC'
  },
  {
    id: 'consultorio-medico',
    src: '/imagenes/instalaciones/consultorio_medico.jpg',
    category: 'clinica',
    tag: { es: 'Consultorio Médico', en: 'Medical Consultation' },
    title: {
      es: 'Consultorios Médicos Privados de Diagnóstico y Seguimiento',
      en: 'Private Medical Consultation & Patient Diagnostic Offices'
    },
    description: {
      es: 'Ambiente privado, confidencial y cálido donde nuestros especialistas diseñan el plan personalizado de cada pareja.',
      en: 'Private, confidential, and comfortable setting where our specialists design tailored fertility protocols.'
    },
    equipmentBrand: 'Consultorio 332 • Torre Santa Fe'
  },
  {
    id: 'fachada-cmabc-santafe',
    src: '/imagenes/instalaciones/fachada_cmabc_santafe.jpg',
    category: 'clinica',
    tag: { es: 'Sede Hospitalaria', en: 'Hospital Campus' },
    title: {
      es: 'Centro Médico ABC Campus Santa Fe (Ciudad de México)',
      en: 'ABC Medical Center Santa Fe Campus (Mexico City)'
    },
    description: {
      es: 'Complejo médico hospitalario de máxima acreditación internacional (Joint Commission International) que alberga la CFA.',
      en: 'JCI-accredited world-class hospital complex housing the Assisted Fertilization Clinic in Santa Fe.'
    },
    equipmentBrand: 'Centro Médico ABC Campus Santa Fe'
  }
];

export default function InstalacionesPage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number | null>(null);

  const categories = [
    { id: 'todos', es: 'Todas las Instalaciones (14)', en: 'All Facilities (14)' },
    { id: 'embriologia', es: 'Laboratorio de Embriología & RI Witness', en: 'Embryology Lab & RI Witness' },
    { id: 'quirofano', es: 'Quirófano & Cirugía', en: 'Surgical Suite & O.R.' },
    { id: 'hormonas', es: 'Hormonas', en: 'Hormones' },
    { id: 'clinica', es: 'Consultorios & Sede Hospitalaria', en: 'Consultation & Campus' }
  ];

  const filteredItems = activeCategory === 'todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedGalleryIndex === null) return;
      if (e.key === 'Escape') setSelectedGalleryIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedGalleryIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedGalleryIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGalleryIndex, filteredItems.length]);

  const activeModalItem = selectedGalleryIndex !== null ? filteredItems[selectedGalleryIndex] : null;

  return (
    <div className="space-y-16 pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#0B2559] via-[#0B2559] to-[#004C97] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-[#69B3E7] text-xs font-semibold uppercase tracking-wider font-title">
            <Building2 className="w-3.5 h-3.5 text-[#69B3E7]" />
            <span>{language === 'es' ? 'Infraestructura de Clase Mundial' : 'World-Class Infrastructure'}</span>
          </div>
          <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-light text-white">
            {language === 'es' ? 'Instalaciones & Laboratorio' : 'Facilities & Laboratory'}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-sans">
            {language === 'es'
              ? 'Espacios de alta tecnología dentro del Centro Médico ABC Santa Fe diseñados para garantizar la máxima seguridad biológica, trazabilidad y éxito en cada embrión.'
              : 'High-tech cleanrooms within ABC Medical Center Santa Fe engineered for maximum biological security, traceability, and embryo viability.'}
          </p>
        </div>
      </section>

      {/* 1. TOP VIDEO INSTITUCIONAL: RECORRIDO DE INSTALACIONES (CABC.mov) */}
      <section id="videos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0B2559] to-[#004C97] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#69B3E7]/40 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/15 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#69B3E7]/20 text-[#69B3E7] border border-[#69B3E7]/40 text-xs font-medium uppercase tracking-wider mb-1 font-title">
                <Video className="w-3.5 h-3.5 text-[#69B3E7]" />
                <span>{language === 'es' ? 'Recorrido Virtual Oficial' : 'Official Virtual Tour'}</span>
              </div>
              <h2 className="font-title text-2xl sm:text-3xl font-light text-white">
                {language === 'es' ? 'Recorrido por Nuestras Instalaciones & Laboratorio' : 'Tour of Our Facilities & Laboratory'}
              </h2>
            </div>
            <Link
              href="/media"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs sm:text-sm transition-all font-title self-start md:self-auto"
            >
              <span>{language === 'es' ? 'Ver todos los videos en Centro de Recursos' : 'View all videos in Resource Center'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Video Player Container */}
            <div className="lg:col-span-8">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border-2 border-white/30 shadow-2xl group">
                <video
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                  poster="/imagenes/instalaciones/quirofano_hd.jpg"
                  playsInline
                >
                  <source src="/videos/recorrido_instalaciones.mp4" type="video/mp4" />
                  <source src="/videos/recorrido_instalaciones.mov" type="video/quicktime" />
                  <source src="/videos/video_clinica.mp4" type="video/mp4" />
                  {language === 'es'
                    ? 'Tu navegador no soporta la reproducción directa de este video.'
                    : 'Your browser does not support HTML5 video playback.'}
                </video>
              </div>
            </div>

            {/* Video Description & Highlights */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 space-y-2">
                <span className="text-xs font-bold text-[#69B3E7] uppercase tracking-wider block font-title">
                  {language === 'es' ? 'Equipamiento en el Video' : 'Equipment in Video'}
                </span>
                <p className="text-xs sm:text-sm text-blue-100 font-sans leading-relaxed">
                  {language === 'es'
                    ? 'Conoce nuestras salas limpias con filtración Casa De Vechi, plataforma RFID RI Witness, incubadora Timelapse MIRI TL12, incubadoras Tri-Gas COOK y quirófanos especializados en el Centro Médico ABC Santa Fe.'
                    : 'Explore our Casa De Vechi cleanrooms, British RI Witness RFID security, MIRI TL12 Timelapse incubator, COOK Tri-Gas units, and surgical suites at ABC Medical Center Santa Fe.'}
                </p>
              </div>

              <div className="space-y-2 font-sans text-xs text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#69B3E7] flex-shrink-0" />
                  <span>{language === 'es' ? 'Microscopios de investigación y micromanipulador RI Integra' : 'Research microscopes & RI Integra micromanipulation'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#69B3E7] flex-shrink-0" />
                  <span>{language === 'es' ? 'Analizador Bioquímico Automatizado Cobas e 411 Roche' : 'Roche Cobas e 411 Automated Biochemistry Analyzer'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#69B3E7] flex-shrink-0" />
                  <span>{language === 'es' ? 'Quirófano estéril exclusivo y consultorios médicos' : 'Exclusive sterile surgical suite & consultation offices'}</span>
                </div>
              </div>

              <a
                href="https://www.youtube.com/@infertilidadabc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#004C97] hover:bg-[#69B3E7] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 font-title"
              >
                <span>{language === 'es' ? 'Suscribirse al Canal @infertilidadabc' : 'Subscribe to @infertilidadabc'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TEXTO OFICIAL DEL LABORATORIO DE FERTILIZACIÓN IN VITRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#69B3E7]/40 shadow-soft space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#69B3E7]/20 text-[#004C97] flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-medium text-[#004C97] uppercase tracking-wider font-title">
                {language === 'es' ? 'Infraestructura Tecnológica' : 'Technological Infrastructure'}
              </span>
              <h2 className="font-title text-2xl sm:text-3xl font-light text-[#0B2559]">
                {language === 'es' ? 'Laboratorio de Fertilización in Vitro' : 'In Vitro Fertilization Laboratory'}
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#004C97]/90 leading-relaxed font-sans">
            <p>
              {language === 'es'
                ? 'Nuestras instalaciones cuentan con tecnología de punta, importada en su mayoría de Australia, Reino Unido y Estados Unidos. Nuestro sistema de filtrado de aire garantiza una calidad de pureza, certificada por la Casa De Vechi especializada en ambientes estériles. Los espacios amplios nos permiten llevar a cabo los procesos en diferentes áreas, como por ejemplo el área de preparación de medios de cultivo, área para identificación de ovocitos, área para ICSI y Hatch Asistido, un área para cultivo de embriones, otra área para análisis genético de embriones y una más para criopreservación de tejidos.'
                : 'Our facilities feature cutting-edge technology imported primarily from Australia, the United Kingdom, and the United States. Our air filtration system guarantees certified cleanroom purity by Casa De Vechi, specialized in sterile medical environments. Our spacious layout accommodates dedicated zones for media preparation, oocyte identification, ICSI, Assisted Hatching, embryo culture, genetic testing, and tissue cryopreservation.'}
            </p>

            <p>
              {language === 'es'
                ? 'Nuestra plataforma de micromanipulación (RI Witness) es uno de los sistemas de inyección más avanzados del mundo, garantiza el poder llevar a cabo la elección de espermas de una manera más eficaz, lograr el menor tiempo de exposición de los óvulos al medio ambiente y llevar a cabo la inyección de los óvulos mediante una técnica que permite evitar el daño a las células involucradas.'
                : 'Our micromanipulation platform integrated with RI Witness is among the world’s most advanced injection systems, ensuring optimal sperm selection, minimal gamete exposure time to ambient air, and atraumatic cell microinjection.'}
            </p>

            <p>
              {language === 'es'
                ? 'La plataforma de Micromanipulación esta complementada por un generador de rayo láser CO2, el cual nos permite realizar las biopsias embrionarias bajo el microscopio con la mayor precisión que se debe lograr. Esto nos permite tener mejores resultados en nuestros Key Performance Indicators (KPI) ó control de calidad internacional de Clínicas de Fertilización Asistida en rangos que se comparan con las mejores Clínicas del mundo.'
                : 'The micromanipulation workstation is augmented by a CO2 laser generator, enabling high-precision embryonic biopsies under inverted microscopy. This directly drives our superior Key Performance Indicators (KPIs) and quality standards matching top international fertility clinics.'}
            </p>
          </div>

          {/* 3 Pillars Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-5 bg-[#F0F7FD] rounded-2xl border border-[#69B3E7]/40 space-y-2 font-sans">
              <span className="font-title font-medium text-[#0B2559] text-sm block flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#004C97]" />
                <span>{language === 'es' ? 'Certificación Casa De Vechi' : 'Casa De Vechi Certification'}</span>
              </span>
              <p className="text-xs text-[#004C97]/80">
                {language === 'es' ? 'Filtrado de aire de grado médico estéril con presión positiva y control de COVs.' : 'Sterile medical-grade air filtration with positive pressure and VOC elimination.'}
              </p>
            </div>

            <div className="p-5 bg-[#F0F7FD] rounded-2xl border border-[#69B3E7]/40 space-y-2 font-sans">
              <span className="font-title font-medium text-[#0B2559] text-sm block flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#004C97]" />
                <span>{language === 'es' ? 'Plataforma RI Witness' : 'RI Witness RFID Platform'}</span>
              </span>
              <p className="text-xs text-[#004C97]/80">
                {language === 'es' ? 'Seguridad por radiofrecuencia británica para trazabilidad del 100% sin margen de error.' : 'British RFID radiofrequency security for 100% error-free sample tracking.'}
              </p>
            </div>

            <div className="p-5 bg-[#F0F7FD] rounded-2xl border border-[#69B3E7]/40 space-y-2 font-sans">
              <span className="font-title font-medium text-[#0B2559] text-sm block flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#004C97]" />
                <span>{language === 'es' ? 'Generador Láser CO2' : 'CO2 Laser Generator'}</span>
              </span>
              <p className="text-xs text-[#004C97]/80">
                {language === 'es' ? 'Biopsias embrionarias para PGT y eclosión asistida de máxima precisión celular.' : 'Precision cellular biopsy for PGT and assisted hatching with zero collateral damage.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GALERÍA DE INSTALACIONES & EQUIPAMIENTO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#69B3E7]/40 pb-4">
          <div>
            <span className="text-xs font-medium text-[#004C97] uppercase tracking-wider font-title">
              {language === 'es' ? 'Recorrido Fotográfico en Alta Definición' : 'High-Definition Photo Tour'}
            </span>
            <h3 className="font-title text-2xl sm:text-3xl font-light text-[#0B2559] mt-1">
              {language === 'es' ? 'Galería de Instalaciones & Equipamiento' : 'Facilities & Equipment Gallery'}
            </h3>
            <p className="text-xs sm:text-sm text-[#004C97]/80 font-sans mt-1">
              {language === 'es'
                ? 'Fotografías reales de nuestras salas de cultivo, quirófanos, analizadores y áreas clínicas en Centro Médico ABC Santa Fe.'
                : 'Authentic photography of our embryo culture rooms, surgical suites, analyzers, and clinical spaces at ABC Santa Fe.'}
            </p>
          </div>
          <span className="text-xs text-[#004C97] font-medium font-title px-3 py-1.5 rounded-xl bg-[#F0F7FD] border border-[#69B3E7]/40 self-start md:self-auto">
            Centro Médico ABC Santa Fe • Consultorio 332
          </span>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedGalleryIndex(null);
              }}
              className={`px-4 py-2 rounded-2xl text-xs font-medium transition-all font-title cursor-pointer flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-[#004C97] text-white shadow-md shadow-[#004C97]/20 scale-102'
                  : 'bg-white border border-[#69B3E7]/50 text-[#0B2559] hover:bg-[#F0F7FD]'
              }`}
            >
              <span>{language === 'es' ? cat.es : cat.en}</span>
            </button>
          ))}
        </div>

        {/* High-Impact Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedGalleryIndex(idx)}
              className="bg-white rounded-3xl overflow-hidden border border-[#69B3E7]/40 shadow-soft hover:shadow-elevated transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative w-full h-64 sm:h-72 bg-[#F0F7FD] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title[language]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2559]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  
                  {/* Category & Brand Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#004C97] shadow-sm font-title border border-[#69B3E7]/30">
                      {item.tag[language]}
                    </span>
                    {item.equipmentBrand && (
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#0B2559]/80 backdrop-blur-md text-white font-sans hidden sm:inline-block">
                        {item.equipmentBrand}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#004C97] shadow-md group-hover:scale-110 group-hover:bg-[#004C97] group-hover:text-white transition-all">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-5 space-y-2">
                  <h4 className="font-title text-base font-normal text-[#0B2559] group-hover:text-[#004C97] transition-colors leading-snug">
                    {item.title[language]}
                  </h4>
                  <p className="text-xs text-[#004C97]/80 font-sans leading-relaxed line-clamp-2">
                    {item.description[language]}
                  </p>
                </div>
              </div>

              {/* Bottom Action strip */}
              <div className="px-5 pb-5 pt-0">
                <div className="pt-3 border-t border-[#69B3E7]/30 flex items-center justify-between text-xs text-[#004C97] font-medium font-title">
                  <span>{language === 'es' ? 'Ver Fotografía en HD' : 'View HD Photo'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LIGHTBOX MODAL DE PANTALLA COMPLETA CON NAVEGACIÓN */}
      {activeModalItem && selectedGalleryIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B2559]/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-5xl bg-[#0B2559] rounded-3xl shadow-2xl border border-[#69B3E7]/50 ring-1 ring-white/10 overflow-hidden flex flex-col max-h-[92vh] animate-scaleUp">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-[#0B2559] text-white flex items-center justify-between border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-3 pr-4">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#004C97] text-white font-title border border-[#69B3E7]/40">
                  {activeModalItem.tag[language]}
                </span>
                <span className="text-xs text-blue-200 font-sans hidden sm:inline-block">
                  {selectedGalleryIndex + 1} de {filteredItems.length}
                </span>
              </div>
              <button
                onClick={() => setSelectedGalleryIndex(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Main Image & Navigation Arrows */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[450px]">
              <img
                src={activeModalItem.src}
                alt={activeModalItem.title[language]}
                className="max-h-[60vh] sm:max-h-[65vh] w-auto max-w-full object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedGalleryIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#004C97] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/20"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedGalleryIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#004C97] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/20"
                aria-label="Siguiente foto"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Caption & Technical Info */}
            <div className="p-4 sm:p-6 bg-[#0B2559] text-white border-t border-white/10 flex-shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-2xl">
                <h4 className="font-title text-base sm:text-lg font-light text-white">
                  {activeModalItem.title[language]}
                </h4>
                <p className="text-xs sm:text-sm text-blue-100 font-sans leading-relaxed">
                  {activeModalItem.description[language]}
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                {activeModalItem.equipmentBrand && (
                  <span className="text-xs text-[#69B3E7] font-semibold font-sans px-3 py-1.5 rounded-xl bg-white/10 border border-white/15">
                    {activeModalItem.equipmentBrand}
                  </span>
                )}
                <Link
                  href="/contacto"
                  onClick={() => setSelectedGalleryIndex(null)}
                  className="px-4 py-2 rounded-xl bg-[#004C97] hover:bg-[#69B3E7] hover:text-[#0B2559] text-white font-bold text-xs transition-all font-title shadow-sm"
                >
                  {language === 'es' ? 'Agendar Cita' : 'Book Visit'}
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
