'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ValuesSection } from '@/components/ValuesSection';
import { InternationalMap } from '@/components/InternationalMap';
import { Award, Compass, Eye, Users, Building2, ShieldCheck, Sparkles, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function SobreNosotrosPage() {
  const { language } = useLanguage();
  const [missionVisionTab, setMissionVisionTab] = useState<'mision' | 'vision'>('mision');

  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-cfa-light text-xs font-semibold uppercase tracking-wider font-title">
            <Award className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Nuestra Identidad Médica' : 'Our Medical Identity'}</span>
          </div>
          <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            {language === 'es' ? 'Sobre la Clínica' : 'About the Clinic'}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-sans">
            {language === 'es'
              ? 'Contamos con más de 35 años de experiencia en el diagnóstico y tratamiento de los problemas reproductivos más complejos. Nuestras instalaciones ofrecen lo último en tecnología de primer mundo para los tratamientos de Fertilización in Vitro y Reproducción Asistida.'
              : 'We possess over 35 years of experience diagnosing and treating the most complex reproductive challenges. Our facilities offer world-class technology for In Vitro Fertilization and Assisted Reproduction.'}
          </p>
        </div>
      </section>

      {/* 1. QUIÉNES SOMOS & NUESTRA HISTORIA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Quiénes somos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cfa-softBlue text-cfa-cyan text-xs font-bold uppercase tracking-wider font-title">
              <Users className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Equipo Multidisciplinario' : 'Multidisciplinary Team'}</span>
            </div>

            <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-cfa-navy">
              {language === 'es' ? 'Quiénes Somos' : 'Who We Are'}
            </h2>

            <p className="text-sm sm:text-base text-cfa-grayDark leading-relaxed font-sans">
              {language === 'es'
                ? 'Somos un grupo multidisciplinario que nace en el año 1994. Esto nos ha permitido brindar apoyo científico a parejas que han encontrado obstáculos para formar una familia.'
                : 'We are a multidisciplinary team established in 1994, dedicated to providing scientific excellence and compassionate support to couples facing reproductive obstacles.'}
            </p>

            <p className="text-sm sm:text-base text-cfa-grayDark leading-relaxed font-sans">
              {language === 'es'
                ? 'Nuestro ejercicio profesional abarca todas las subespecialidades: Ginecólogos, Urólogos, Biólogos de la Reproducción, Genetistas, Psicólogas, Biólogas / Embriólogas, y un cuerpo de enfermería con licenciatura y profunda experiencia en reproducción humana.'
                : 'Our practice integrates all reproductive subspecialties: Gynecologists, Urologists, Reproductive Biologists, Geneticists, Clinical Psychologists, Embryologists, and specialized fertility nurses.'}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#69B3E7]/40 bg-white p-4">
              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/imagenes/quienes_somos.jpeg"
                  alt="Clínica de Fertilización Asistida - Centro Médico ABC"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="pt-3 px-2 text-center sm:text-left">
                <p className="text-xs font-bold text-[#004C97] font-title uppercase tracking-wider">
                  {language === 'es' ? 'Clínica de Fertilización Asistida' : 'Assisted Fertilization Clinic'}
                </p>
                <p className="text-sm font-semibold text-[#0B2559] font-sans">
                  {language === 'es' ? 'Centro Médico ABC Campus Santa Fe' : 'ABC Medical Center Santa Fe Campus'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nuestra Historia */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-cfa-softBlue shadow-soft space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cfa-softBlue text-cfa-cyan text-xs font-bold uppercase tracking-wider mb-3 font-title">
              <Award className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Legado Científico' : 'Scientific Legacy'}</span>
            </div>
            <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-cfa-navy">
              {language === 'es' ? 'Nuestra Historia' : 'Our History'}
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-cfa-grayDark leading-relaxed font-sans">
            {language === 'es' ? (
              <>
                <p>
                  El <strong>Dr. Carlos Navarro Martínez</strong>, Fundador y Director de nuestra Clínica de Fertilización Asistida (CFA), nace profesionalmente de la mano del Dr. Alfonso Gutiérrez Najar, su mentor y pionero de la infertilidad en México, trabajando a su lado entre 1980 y 1987.
                </p>
                <p>
                  En los años 1988 y 1989, el Dr. Navarro realiza sus estudios de postgrado en el <strong>Women's Hospital of Texas</strong>, avalado por la prestigiosa <em>Universidad Baylor College of Medicine</em>, teniendo como jefe directo al <strong>Dr. Robert Franklin</strong>.
                </p>
                <p>
                  En el año 1990 – 1991, en el <strong>Hospital Greater Baltimore Medical Center</strong> realiza su entrenamiento en Reproducción Asistida bajo la tutela del <strong>Dr. Jairo García</strong>, miembro del equipo en donde nació el primer bebé de Fertilización in Vitro en Norteamérica.
                </p>
                <p className="font-semibold text-[#0B2559] bg-white p-4 rounded-xl border-2 border-[#0B2559]">
                  🌟 En 1991, de regreso en México, formó parte del equipo médico histórico que logró el primer nacimiento de FIV en México.
                </p>
                <p>
                  En 1999 inicia la construcción de la CFA original en un edificio anexo al <strong>Hospital ABC Observatorio</strong>. En 2008 inicia la construcción en el <strong>Centro Médico ABC Campus Santa Fe</strong>, inaugurado formalmente junto al Dr. Zev Rosenwaks de Cornell University.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>Dr. Carlos Navarro Martínez</strong>, Founder and Medical Director of our Assisted Fertilization Clinic (CFA), trained alongside Dr. Alfonso Gutiérrez Najar, a pioneering figure in reproductive medicine in Mexico, from 1980 to 1987.
                </p>
                <p>
                  In 1988 and 1989, Dr. Navarro completed fellowship training at the <strong>Women's Hospital of Texas</strong> affiliated with <em>Baylor College of Medicine</em>, working directly under <strong>Dr. Robert Franklin</strong>.
                </p>
                <p>
                  Between 1990 and 1991, at <strong>Greater Baltimore Medical Center</strong>, he completed his specialized training in Assisted Reproduction under <strong>Dr. Jairo García</strong>, part of the landmark team where the first North American IVF baby was conceived.
                </p>
                <p className="font-semibold text-[#0B2559] bg-white p-4 rounded-xl border-2 border-[#0B2559]">
                  🌟 In 1991, back in Mexico, Dr. Navarro was part of the medical team that achieved the first successful IVF birth in the country.
                </p>
                <p>
                  In 1999, the clinic opened at ABC Hospital Observatorio. In 2008, construction began on the current high-tech facility at <strong>ABC Medical Center Santa Fe Campus</strong>, officially inaugurated with Dr. Zev Rosenwaks of Cornell University.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 2. Misión y Visión */}
      <section id="mision-vision" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white rounded-3xl p-6 sm:p-12 shadow-xl border border-cfa-cyan/30">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-cfa-light text-xs font-semibold uppercase tracking-wider mb-2 font-title">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Propósito Institucional' : 'Institutional Purpose'}</span>
            </div>
            <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              {language === 'es' ? 'Misión y Visión' : 'Mission & Vision'}
            </h2>
          </div>

          {/* Toggle Tabs */}
          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => setMissionVisionTab('mision')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer font-title ${
                missionVisionTab === 'mision'
                  ? 'bg-cfa-cyan text-white shadow-md scale-105'
                  : 'bg-white/15 text-blue-100 hover:bg-white/25'
              }`}
            >
              {language === 'es' ? 'Nuestra Misión' : 'Our Mission'}
            </button>
            <button
              onClick={() => setMissionVisionTab('vision')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer font-title ${
                missionVisionTab === 'vision'
                  ? 'bg-cfa-cyan text-white shadow-md scale-105'
                  : 'bg-white/15 text-blue-100 hover:bg-white/25'
              }`}
            >
              {language === 'es' ? 'Nuestra Visión' : 'Our Vision'}
            </button>
          </div>

          {/* Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15">
            <div className="md:col-span-5">
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/20">
                <Image
                  src={missionVisionTab === 'mision' ? '/imagenes/mision.jpg' : '/imagenes/vision.jpg'}
                  alt={missionVisionTab === 'mision' ? 'Misión CFA' : 'Visión CFA'}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-cfa-light">
                {missionVisionTab === 'mision' ? <Compass className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                <span className="text-xs font-bold uppercase tracking-widest text-white font-title">
                  {missionVisionTab === 'mision'
                    ? (language === 'es' ? 'Declaración de Misión' : 'Mission Statement')
                    : (language === 'es' ? 'Declaración de Visión' : 'Vision Statement')}
                </span>
              </div>

              {missionVisionTab === 'mision' ? (
                <div className="space-y-3">
                  <h3 className="font-title text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                    {language === 'es'
                      ? 'Ayudar a nuestros pacientes a cumplir su anhelo de formar una familia'
                      : 'Helping our patients fulfill their dream of building a family'}
                  </h3>
                </div>
              ) : (
                <div className="space-y-3">
                  <h3 className="font-title text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                    {language === 'es'
                      ? 'Ofrecer a nuestras pacientes resultados comparables a las mejores clínicas de reproducción en el mundo'
                      : 'Offering our patients results comparable to the world’s leading reproductive clinics'}
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. NUESTRA PRÁCTICA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cfa-softBlue shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cfa-softBlue text-cfa-cyan text-xs font-bold uppercase tracking-wider font-title">
                <Globe className="w-3.5 h-3.5" />
                <span>{language === 'es' ? 'Atención Internacional' : 'International Care'}</span>
              </div>
              <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-cfa-navy">
                {language === 'es' ? 'Nuestra Práctica Médica' : 'Our Medical Practice'}
              </h2>
              <p className="text-sm sm:text-base text-cfa-grayDark leading-relaxed font-sans">
                {language === 'es'
                  ? 'Recibimos y atendemos con calidez a parejas y pacientes internacionales procedentes de Centro América, el Caribe, Estados Unidos y otros países, brindándoles acompañamiento integral, asesoría personalizada y los más altos estándares de excelencia médica en el Centro Médico ABC Santa Fe.'
                  : 'We warmly welcome and care for international couples and patients from Central America, the Caribbean, the United States, and across the globe, providing comprehensive coordination, personalized guidance, and the highest standards of reproductive excellence at ABC Medical Center Santa Fe.'}
              </p>
            </div>

            {/* Right Map Component */}
            <div className="lg:col-span-6">
              <InternationalMap />
            </div>
          </div>
        </div>
      </section>

      {/* 4. VALORES QUE NOS MUEVEN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ValuesSection />
      </section>

      {/* 5. NUESTRAS PACIENTES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2559] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#004C97] flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 rounded-2xl bg-white text-[#0B2559] flex items-center justify-center flex-shrink-0 shadow-md">
            <Users className="w-8 h-8 text-[#0B2559]" />
          </div>
          <div className="space-y-3 flex-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#0B2559] text-xs font-bold uppercase tracking-wider font-title">
              <span>{language === 'es' ? 'Atención Individualizada' : 'Individualized Care'}</span>
            </div>
            <h2 className="font-title text-2xl sm:text-3xl font-extrabold text-white">
              {language === 'es' ? 'Nuestras Pacientes' : 'Our Patients'}
            </h2>
            <p className="text-sm sm:text-base text-blue-50 leading-relaxed font-sans">
              {language === 'es'
                ? 'Trabajamos entendiendo y respetando la individualidad de cada persona. Cada pareja es diferente, sus principios, creencias, religión y preferencias son habladas durante las primeras consultas con el objetivo de diseñar un «traje a medida» que les permita caminar por los procesos terapéuticos de una manera más ligera, tranquila, es decir en paz, dentro de lo que cada problema genera naturalmente. También contamos con un servicio de apoyo psicológico para las personas que así lo desean.'
                : 'We work understanding and respecting the individuality of each person. Every couple is unique; their principles, beliefs, religion, and preferences are discussed from the initial consultations with the goal of designing a "tailor-made suit" that allows them to walk through therapeutic processes with peace and confidence. We also provide a dedicated psychological support service for those who wish it.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
