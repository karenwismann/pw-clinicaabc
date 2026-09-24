'use client';

import React, { useState } from 'react';
import { ShieldCheck, Dna, Brain, Heart, ScanFace, CheckCircle2, ChevronRight, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const DonorFlowchart: React.FC = () => {
  const { language } = useLanguage();
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages = [
    {
      step: 1,
      title: language === 'es' ? "Evaluación Psicométrica" : "Psychometric Evaluation",
      subtitle: language === 'es' ? "Estado mental, cognitivo y madurez" : "Cognitive state and psychological maturity",
      icon: Brain,
      color: "from-blue-700 to-blue-500",
      description: language === 'es'
        ? "La psicoterapeuta Nerea Iruretagoyena y la Lic. Mónica Hevia evalúan a fondo la estabilidad emocional, coherencia cognitiva y motivación de la donadora mediante pruebas psicométricas estandarizadas."
        : "Psychotherapist Nerea Iruretagoyena and Lic. Mónica Hevia conduct standardized psychometric testing assessing emotional stability, cognitive readiness, and genuine motivation.",
      criteria: language === 'es'
        ? [
            "Evaluación de personalidad y estabilidad emocional",
            "Entrevista clínica profunda con psicóloga especialista",
            "Consentimiento informado y comprensión del marco ético",
            "Historial de antecedentes conductuales limpios"
          ]
        : [
            "Personality evaluation and emotional stability testing",
            "In-depth clinical interview with specialized reproductive psychologist",
            "Informed consent and deep ethical understanding",
            "Clean behavioral and family history verification"
          ]
    },
    {
      step: 2,
      title: language === 'es' ? "Panel Médico y Genético" : "Medical & Genetic Panel",
      subtitle: language === 'es' ? "Cariotipo y Síndrome de X Frágil" : "Karyotype and Fragile X Screening",
      icon: Dna,
      color: "from-blue-600 to-sky-600",
      description: language === 'es'
        ? "Screening genético y molecular riguroso. Se descartan anomalías cromosómicas y enfermedades hereditarias recesivas prioritarias como el Síndrome de X Frágil."
        : "Rigorous molecular screening discarding chromosomal anomalies and high-priority recessive conditions such as Fragile X Syndrome.",
      criteria: language === 'es'
        ? [
            "Cariotipo completo en sangre periférica (46,XX)",
            "Screening molecular del gen FMR1 (X Frágil)",
            "Perfil infeccioso serológico completo (VIH, Hepatitis B/C, VDRL)",
            "Historial genético de 3 generaciones sin patologías"
          ]
        : [
            "Complete blood karyotype (46,XX)",
            "Molecular screening for FMR1 gene (Fragile X)",
            "Comprehensive infectious serology (HIV, Hepatitis B/C, Syphilis)",
            "3-generation medical family pedigree free of genetic diseases"
          ]
    },
    {
      step: 3,
      title: language === 'es' ? "Potencial Reproductivo" : "Reproductive Potential",
      subtitle: language === 'es' ? "Reserva ovárica y respuesta biológica" : "Ovarian reserve and biological response",
      icon: Heart,
      color: "from-[#004C97] to-[#69B3E7]",
      description: language === 'es'
        ? "Examen ginecológico y ecográfico completo para evaluar el conteo de folículos antrales y hormona antimülleriana (AMH), garantizando seguridad y alta respuesta folicular."
        : "Complete gynecological and ultrasound assessment verifying antral follicle count (AFC) and Anti-Müllerian Hormone (AMH), ensuring donor safety and high-quality yield.",
      criteria: language === 'es'
        ? [
            "Determinación de Hormona Antimülleriana (AMH > 2.0 ng/ml)",
            "Conteo ecográfico folicular antral (AFC)",
            "Salud uterina y pélvica óptima comprobada",
            "Índice de masa corporal (IMC) en rangos saludables"
          ]
        : [
            "Anti-Müllerian Hormone assay (AMH > 2.0 ng/ml)",
            "Antral Follicle Count (AFC) via high-res ultrasound",
            "Optimal uterine and pelvic biological status",
            "Healthy Body Mass Index (BMI) verification"
          ]
    },
    {
      step: 4,
      title: language === 'es' ? "Fenomatch Facial" : "Fenomatch Facial Biometrics",
      subtitle: language === 'es' ? "Biometría y parecido fenotípico" : "Facial recognition and phenotypic matching",
      icon: ScanFace,
      color: "from-[#004C97] to-[#69B3E7]",
      description: language === 'es'
        ? "Tecnología biométrica digital de reconocimiento facial Fenomatch para comparar más de 12,000 puntos anatómicos faciales y seleccionar a la donadora con la máxima afinidad fenotípica con la receptora."
        : "Fenomatch digital facial biometrics comparing over 12,000 anatomical reference points to find the donor with maximum phenotypic similarity to the recipient mother.",
      criteria: language === 'es'
        ? [
            "Mapeo computarizado de 12,000+ puntos faciales",
            "Afinidad en grupo sanguíneo y factor Rh",
            "Correspondencia fenotípica (tono de piel, ojos, complexión)",
            "Asignación exclusiva y 100% personalizada"
          ]
        : [
            "Computerized 12,000+ facial node mapping algorithm",
            "Blood group and Rh factor compatibility",
            "Phenotypic correspondence (skin tone, eye color, height)",
            "Exclusive, 100% personalized assignment"
          ]
    }
  ];

  const currentStage = stages.find(s => s.step === activeStage) || stages[0];
  const IconComponent = currentStage.icon;

  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-8 border border-cfa-softBlue shadow-soft space-y-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cfa-softBlue text-cfa-cyan text-xs font-semibold uppercase tracking-wider font-title">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{language === 'es' ? 'Flujograma de Donación' : 'Donation Flowchart'}</span>
        </div>
        <h3 className="font-title text-xl sm:text-2xl font-light text-cfa-navy">
          {language === 'es' ? 'Protocolo de Selección de Donadoras en 4 Fases' : '4-Stage Donor Screening Protocol'}
        </h3>
        <p className="text-xs sm:text-sm text-cfa-grayText font-sans">
          {language === 'es'
            ? 'Más de 26 años de experiencia con el Dr. Richard Marrs yCalifornia Fertility Partners.'
            : 'Over 26 years of partnership with Dr. Richard Marrs and California Fertility Partners.'}
        </p>
      </div>

      {/* Stepper Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stages.map((stage) => {
          const isActive = stage.step === activeStage;
          const StageIcon = stage.icon;

          return (
            <button
              key={stage.step}
              onClick={() => setActiveStage(stage.step)}
              className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden group cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-br from-cfa-navy to-cfa-deepBlue text-white border-cfa-cyan shadow-md scale-102'
                  : 'bg-cfa-grayLight hover:bg-cfa-iceBlue text-cfa-navy border-cfa-grayBorder'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold font-title ${
                  isActive ? 'bg-cfa-cyan text-white' : 'bg-white text-cfa-navy border border-cfa-grayBorder'
                }`}>
                  0{stage.step}
                </span>
                <StageIcon className={`w-5 h-5 ${isActive ? 'text-cfa-light' : 'text-cfa-grayText group-hover:text-cfa-cyan'}`} />
              </div>
              <h4 className="font-title font-normal text-xs sm:text-sm leading-tight">
                {stage.title}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detail */}
      <div className="p-6 rounded-2xl bg-cfa-grayLight border border-cfa-grayBorder space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cfa-softBlue text-cfa-cyan flex items-center justify-center">
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-cfa-cyan uppercase tracking-wider font-title">
              {language === 'es' ? `Fase 0${currentStage.step} de 04` : `Stage 0${currentStage.step} of 04`}
            </span>
            <h4 className="font-title text-base sm:text-lg font-normal text-cfa-navy">
              {currentStage.title}
            </h4>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-cfa-grayDark leading-relaxed font-sans">
          {currentStage.description}
        </p>

        <div className="pt-2 border-t border-cfa-grayBorder">
          <h5 className="font-title text-xs font-semibold text-cfa-navy uppercase tracking-wider mb-2">
            {language === 'es' ? 'Criterios de Acreditación Médica:' : 'Medical Screening Criteria:'}
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {currentStage.criteria.map((crit, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-cfa-grayDark font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-cfa-cyan flex-shrink-0" />
                <span>{crit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STRICT NO EGG SPLITTING POLICY NOTICE */}
      <div className="p-4 bg-[#EBF5FC] border-2 border-[#69B3E7]/50 rounded-2xl flex items-start gap-3">
        <AlertTriangle className="w-6 h-6 text-[#004C97] flex-shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs text-[#0B2559] font-sans leading-relaxed">
          <h5 className="font-title font-semibold text-[#0B2559] text-xs sm:text-sm">
            {language === 'es' ? 'Política Ética Estricta: Prohibición de Egg Splitting' : 'Strict Ethical Policy: Zero Egg Splitting'}
          </h5>
          <p>
            {language === 'es'
              ? 'En la Clínica de Fertilización Asistida en el Centro Médico ABC NO realizamos y está estrictamente prohibido el EGG SPLITTING (dividir los óvulos de una donadora entre varias parejas receptoras). Todos los óvulos obtenidos en el ciclo son 100% exclusivos de la paciente receptora asignada, garantizando las máximas tasas de blastocistos y embriones para el futuro de la familia.'
              : 'At the Assisted Fertilization Clinic in ABC Medical Center, EGG SPLITTING (dividing donor eggs among multiple recipients) IS STRICTLY PROHIBITED. All retrieved eggs from a donor cycle belong 100% exclusively to the designated recipient, maximizing blastocyst yields and future sibling embryos.'}
          </p>
        </div>
      </div>
    </div>
  );
};
