'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ValuesSection } from '@/components/ValuesSection';
import { Award, Compass, Eye, Users, Building2, ShieldCheck, Sparkles } from 'lucide-react';
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

            <div className="p-4 bg-cfa-iceBlue rounded-2xl border border-cfa-softBlue flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-cfa-cyan flex-shrink-0 mt-0.5" />
              <p className="text-xs text-cfa-navy leading-relaxed font-sans">
                {language === 'es'
                  ? 'Asimismo, contamos con el respaldo del despacho global Salles Sainz Grant Thornton, encargado de todos los procesos administrativos y laborales desde hace más de 15 años para garantizar absoluta solidez institucional.'
                  : 'We are backed administratively by global audit and consulting firm Salles Sainz Grant Thornton for over 15 years, ensuring institutional transparency and operational excellence.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-cfa-softBlue bg-white p-4">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/imagenes/baby1.jpg"
                  alt="Atención médica cálida en CFA"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cfa-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-bold text-cfa-light drop-shadow-sm font-title">
                    Centro Médico ABC Campus Santa Fe
                  </p>
                  <p className="text-sm font-semibold text-white drop-shadow-sm font-sans">
                    {language === 'es' ? 'Cuidado integral desde el primer día' : 'Comprehensive care from day one'}
                  </p>
                </div>
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
                  El <strong>Dr. Carlos Navarro Martínez</strong>, Fundador y Director de nuestra Clínica de Fertilización Asistida (CFA), nace profesionalmente de la mano del <strong>Dr. Alfonso Gutiérrez Najar</strong>, su mentor y pionero de la infertilidad en México, trabajando a su lado entre 1980 y 1987.
                </p>
                <p>
                  En los años 1988 y 1989, el Dr. Navarro realiza sus estudios de postgrado en el <strong>Women's Hospital of Texas</strong>, avalado por la prestigiosa <em>Universidad Baylor College of Medicine</em>, teniendo como jefe directo al <strong>Dr. Robert Franklin</strong>.
                </p>
                <p>
                  En el año 1990 – 1991, en el <strong>Hospital Greater Baltimore Medical Center</strong> realiza su entrenamiento en Reproducción Asistida bajo la tutela del <strong>Dr. Jairo García</strong>, miembro del equipo en donde nació el primer bebé de Fertilización in Vitro en Norteamérica.
                </p>
                <p className="font-semibold text-cfa-navy bg-cfa-iceBlue p-4 rounded-xl border border-cfa-softBlue">
                  🌟 En 1991, de regreso en México, formó parte del equipo médico histórico que logró el primer nacimiento de FIV en México.
                </p>
                <p>
                  En 1999 inicia la construcción de la CFA original en un edificio anexo al <strong>Hospital ABC Observatorio</strong>. En 2008 inicia la construcción en el <strong>Centro Médico ABC Campus Santa Fe</strong>, inaugurado formalmente junto al Dr. Zev Rosenwaks de Cornell University.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>Dr. Carlos Navarro Martínez</strong>, Founder and Medical Director of our Assisted Fertilization Clinic (CFA), trained alongside <strong>Dr. Alfonso Gutiérrez Najar</strong>, a pioneering figure in reproductive medicine in Mexico, from 1980 to 1987.
                </p>
                <p>
                  In 1988 and 1989, Dr. Navarro completed fellowship training at the <strong>Women's Hospital of Texas</strong> affiliated with <em>Baylor College of Medicine</em>, working directly under <strong>Dr. Robert Franklin</strong>.
                </p>
                <p>
                  Between 1990 and 1991, at <strong>Greater Baltimore Medical Center</strong>, he completed his specialized training in Assisted Reproduction under <strong>Dr. Jairo García</strong>, part of the landmark team where the first North American IVF baby was conceived.
                </p>
                <p className="font-semibold text-cfa-navy bg-cfa-iceBlue p-4 rounded-xl border border-cfa-softBlue">
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
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cfa-softBlue shadow-soft space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cfa-softBlue text-cfa-cyan text-xs font-bold uppercase tracking-wider mb-2 font-title">
              <Building2 className="w-3.5 h-3.5" />
              <span>Campus Santa Fe</span>
            </div>
            <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-bold text-cfa-navy">
              {language === 'es' ? 'Nuestra Práctica Médica' : 'Our Medical Practice'}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-cfa-grayDark leading-relaxed font-sans">
            {language === 'es'
              ? 'Somos un grupo médico compuesto por Ginecólogos, Urólogos, Genetista, Anestesiólogos, Biólogos, Coordinadoras, Enfermeras y Personal Administrativo. Llevamos a cabo nuestros tratamientos en el Centro Médico ABC en Santa Fe, en la zona nor-poniente de la Ciudad de México.'
              : 'Our medical faculty includes Gynecologists, Urologists, Clinical Geneticists, Anesthesiologists, Reproductive Biologists, and specialized Coordinators practicing at ABC Medical Center Santa Fe.'}
          </p>

          <p className="text-sm sm:text-base text-cfa-grayDark leading-relaxed font-sans">
            {language === 'es'
              ? 'Recibimos pacientes de nuestra ciudad y de todo el país, así como pacientes de Centro América, Caribe y Estados Unidos.'
              : 'We receive patients from all Mexican states as well as international patients from Central America, the Caribbean, the United States, and Canada.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-cfa-grayLight border border-cfa-grayBorder text-center">
              <span className="block text-2xl font-bold text-cfa-cyan mb-1 font-title">
                {language === 'es' ? 'Nacional' : 'National'}
              </span>
              <span className="text-xs text-cfa-grayText font-sans">
                {language === 'es' ? 'Pacientes de los 32 estados de México' : 'Patients from all 32 Mexican states'}
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-cfa-grayLight border border-cfa-grayBorder text-center">
              <span className="block text-2xl font-bold text-cfa-cyan mb-1 font-title">
                {language === 'es' ? 'Internacional' : 'International'}
              </span>
              <span className="text-xs text-cfa-grayText font-sans">
                {language === 'es' ? 'Centro América, Caribe y EE. UU.' : 'Central America, Caribbean & USA'}
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-cfa-grayLight border border-cfa-grayBorder text-center">
              <span className="block text-2xl font-bold text-cfa-cyan mb-1 font-title">
                {language === 'es' ? 'Acreditación' : 'Accreditation'}
              </span>
              <span className="text-xs text-cfa-grayText font-sans">
                {language === 'es' ? 'Estándares del Centro Médico ABC' : 'ABC Medical Center Standards'}
              </span>
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
        <div className="bg-gradient-to-r from-cfa-softBlue/60 via-white to-cfa-iceBlue/80 rounded-3xl p-8 sm:p-12 border border-cfa-softBlue shadow-soft flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cfa-cyan to-cfa-navy text-white flex items-center justify-center flex-shrink-0 shadow-md">
            <Users className="w-8 h-8" />
          </div>
          <div className="space-y-3 flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-cfa-softBlue text-cfa-cyan text-xs font-bold uppercase tracking-wider font-title">
              <span>{language === 'es' ? 'Atención Individualizada' : 'Individualized Care'}</span>
            </div>
            <h2 className="font-title text-2xl sm:text-3xl font-bold text-cfa-navy">
              {language === 'es' ? 'Nuestras Pacientes' : 'Our Patients'}
            </h2>
            <p className="text-sm sm:text-base text-cfa-grayDark leading-relaxed font-sans">
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
