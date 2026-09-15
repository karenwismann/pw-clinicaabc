export interface TreatmentStep {
  letter?: string;
  number?: number;
  title: string;
  description: string;
  details?: string[];
}

export interface TreatmentData {
  title: string;
  shortTitle: string;
  summary: string;
  fullDescription: string[];
  highlights?: string[];
  steps?: TreatmentStep[];
}

export interface Treatment {
  id: string;
  iconName: string;
  imageSrc: string;
  isFeatured?: boolean;
  es: TreatmentData;
  en: TreatmentData;
}

export const TREATMENTS: Treatment[] = [
  {
    id: "fertilizacion-in-vitro",
    iconName: "Sparkles",
    imageSrc: "/imagenes/tratamientos/capturadeovulos.jpg",
    isFeatured: true,
    es: {
      title: "Fertilización in Vitro (FIV)",
      shortTitle: "FIV",
      summary: "Tratamiento de alta complejidad donde la unión del óvulo y el espermatozoide se realiza en nuestro laboratorio especializado bajo condiciones óptimas.",
      highlights: [
        "Monitoreo hormonal y ecográfico personalizado de 8 a 12 días",
        "Captura ovular ambulatoria con sedación de solo 5 a 10 minutos",
        "Incubadoras trigas de atmósfera controlada a 37°C idénticas a la trompa de Falopio",
        "Cultivo prolongado hasta blastocisto (día +5 / +6)"
      ],
      fullDescription: [
        "El ciclo de tratamiento inicia en el segundo día de la menstruación. Ese día usted debe acudir a la Clínica entre 8:00 y 10:00 am para realizar un ultrasonido endovaginal, cuantificación hormonal en muestra de sangre y ser informada detalladamente sobre su protocolo de tratamiento.",
        "La parte fundamental del tratamiento incluye 5 pasos integrales diseñados con los más estrictos estándares internacionales de medicina reproductiva."
      ],
      steps: [
        {
          letter: "a",
          title: "Estimulación Farmacológica de los Ovarios",
          description: "A través de medicamentos administrados por vía subcutánea se calcula la dosis exacta para que el grupo de óvulos del mes en curso crezca y alcance la madurez.",
          details: [
            "Seguimiento folicular mediante ultrasonidos endovaginales seriados a lo largo de 8 a 12 días.",
            "Determinaciones hormonales en sangre en el transcurso de la mañana para calcular la mejor calidad de óvulos con la menor dosis de medicamento posible.",
            "Determinación precisa del momento óptimo de madurez ovocitaria para programar la aspiración."
          ]
        },
        {
          letter: "b",
          title: "Captura de los Óvulos (Ovocitos)",
          description: "Programada con 36 horas de anticipación tras la maduración final. Procedimiento ambulatorio en quirófano estéril.",
          details: [
            "Presentación en clínica en ayuno con colocación de venoclisis en sala de recuperación.",
            "Sedación endovenosa administrada por anestesiólogo calificado (duración promedio entre 5 y 10 minutos).",
            "Aspiración folicular guiada por ultrasonido endovaginal con aguja fina.",
            "Análisis inmediato del líquido folicular en microscopio por nuestras embriólogas para identificar, limpiar y cultivar los ovocitos en medio fresco."
          ]
        },
        {
          letter: "c",
          title: "Fertilización y Desarrollo Embrionario",
          description: "Incubación de óvulos durante 4 a 6 horas en incubadoras trigas que emulan las trompas de Falopio humanas (CO2, O2, N2, humedad relativa y 37°C).",
          details: [
            "Fertilización mediante FIV convencional (50,000 a 100,000 espermatozoides por óvulo) o ICSI (microinyección de un solo esperma).",
            "Día +1: Inspección bajo microscopio para evaluar fertilización normal.",
            "Día +3 (72 hrs): Evaluación de división celular (embriones óptimos en 8 células) y cambio a medio de cultivo enriquecido.",
            "Día +4: Ensamble del código genético del embrión en incubadora.",
            "Día +5 ó +6: Llegada a estadio de blastocisto (cerca de 120 células). Selección de los mejores embriones para transferencia o vitrificación."
          ]
        },
        {
          letter: "d",
          title: "Transferencia de Embriones",
          description: "Colocación de los embriones seleccionados en el endometrio materno mediante una fina guía intrauterina guiada por ultrasonido abdominal.",
          details: [
            "Procedimiento rápido y cómodo de 10 minutos en quirófano estéril.",
            "Habitualmente sin necesidad de anestesia ni sedación.",
            "Reposo de 2 horas en el área de recuperación de la clínica."
          ]
        },
        {
          letter: "e",
          title: "Soporte Hormonal post Transferencia",
          description: "Administración de progesterona y soporte lúteo personalizado para favorecer la implantación y el desarrollo temprano del embarazo.",
          details: [
            "Monitoreo continuo por parte de la enfermera y médico asignados.",
            "Resolución de dudas en todo momento a través de nuestro equipo."
          ]
        }
      ]
    },
    en: {
      title: "In Vitro Fertilization (IVF)",
      shortTitle: "IVF",
      summary: "High-complexity treatment where fertilization of the egg and sperm takes place in our specialized cleanroom laboratory under optimal physiological conditions.",
      highlights: [
        "Personalized hormonal and ultrasound monitoring over 8 to 12 days",
        "Outpatient egg retrieval under gentle intravenous sedation of only 5 to 10 minutes",
        "Tri-gas controlled incubators at 37°C replicating human fallopian tubes",
        "Extended culture to blastocyst stage (Day +5 / +6)"
      ],
      fullDescription: [
        "The treatment cycle begins on the second day of menstruation. That morning, you visit the clinic between 8:00 and 10:00 AM for baseline ultrasound, blood hormone assays, and a detailed protocol review.",
        "The core IVF cycle is structured across 5 comprehensive phases designed to the highest international reproductive medicine standards."
      ],
      steps: [
        {
          letter: "a",
          title: "Ovarian Stimulation",
          description: "Tailored subcutaneous medications to encourage the healthy maturation of multiple follicles during the cycle.",
          details: [
            "Serial endovaginal ultrasounds over 8 to 12 days.",
            "Daily hormonal assays to calculate the highest egg quality with minimal medication dosage.",
            "Precise trigger timing for final egg maturation."
          ]
        },
        {
          letter: "b",
          title: "Egg Retrieval (Oocyte Aspiration)",
          description: "Scheduled 36 hours after trigger shot. Outpatient procedure in a sterile operating room.",
          details: [
            "Gentle intravenous sedation administered by a certified anesthesiologist (5-10 minutes).",
            "Fine-needle ultrasound-guided aspiration.",
            "Immediate microscopic examination and cultivation by our senior embryologists."
          ]
        },
        {
          letter: "c",
          title: "Fertilization & Embryo Culture",
          description: "Incubation in tri-gas incubators (CO2, O2, N2, 37°C) mimicking the natural maternal environment.",
          details: [
            "Fertilization via conventional IVF or ICSI (single sperm injection).",
            "Day +1: Fertilization check.",
            "Day +3: Cellular division assessment (optimal 8-cell stage).",
            "Day +5 / +6: Blastocyst stage reached (~120 cells) for transfer or vitrification."
          ]
        },
        {
          letter: "d",
          title: "Embryo Transfer",
          description: "Placement of selected embryos into the uterine cavity using a soft catheter guided by ultrasound.",
          details: [
            "Painless 10-minute procedure without anesthesia.",
            "2 hours of post-procedure rest in our recovery suite."
          ]
        },
        {
          letter: "e",
          title: "Post-Transfer Luteal Support",
          description: "Progesterone and hormonal support tailored to promote implantation and early pregnancy.",
          details: [
            "Continuous medical supervision by your dedicated coordinator."
          ]
        }
      ]
    }
  },
  {
    id: "icsi",
    iconName: "Target",
    imageSrc: "/imagenes/tratamientos/micromanipulador_icsi.jpg",
    isFeatured: true,
    es: {
      title: "ICSI (Inyección Intracitoplasmática del Esperma)",
      shortTitle: "ICSI",
      summary: "Técnica de micromanipulación de máxima precisión donde se inyecta un único espermatozoide seleccionado directamente en el citoplasma del óvulo.",
      highlights: [
        "Tasa de éxito en fertilización superior al 80% en óvulos inyectados",
        "Evaluación seminal previa por nuestro equipo especializado de Andrología",
        "Indicado en factor masculino severo o fallas previas de fecundación"
      ],
      fullDescription: [
        "En el inicio de los años 90 se hizo evidente que, en muchos casos de FIV, a pesar de incubar los óvulos con espermas no se lograba la fertilización. De ahí nacieron las técnicas de micromanipulación.",
        "En Bruselas, Bélgica, el Dr. Giampiero Palermo fue el primero en reportar casos exitosos de ICSI. Su técnica hizo posible que miles de varones con alteraciones espermáticas severas pudieran lograr el sueño de ser padres.",
        "Hoy en día en nuestra clínica se realiza en los casos necesarios con una tasa de éxito en fertilización superior al 80%."
      ]
    },
    en: {
      title: "ICSI (Intracytoplasmic Sperm Injection)",
      shortTitle: "ICSI",
      summary: "Precision micromanipulation technique where a single selected sperm is injected directly into the cytoplasm of a mature egg.",
      highlights: [
        "Fertilization success rate exceeding 80% in injected oocytes",
        "Prior seminal assessment by our specialized Andrology team",
        "Indicated for severe male factor infertility or previous fertilization failures"
      ],
      fullDescription: [
        "In the early 1990s, micromanipulation techniques emerged to solve fertilization blockages in conventional IVF.",
        "In Brussels, Belgium, Dr. Giampiero Palermo pioneered successful ICSI cases, allowing thousands of men with severe semen anomalies to achieve fatherhood.",
        "At our clinic, ICSI is routinely performed with fertilization rates exceeding 80% under high-resolution micromanipulation."
      ]
    }
  },
  {
    id: "hatch-asistido",
    iconName: "Zap",
    imageSrc: "/imagenes/tratamientos/hatch_nuevo.jpg",
    es: {
      title: "Hatch Asistido (Eclosión Asistida)",
      shortTitle: "Hatch Asistido",
      summary: "Microcirugía láser de alta precisión sobre la zona pelúcida del embrión para facilitar su salida e implantación en el endometrio.",
      highlights: [
        "Uso de tecnología de micro-láser adaptado a microscopios invertidos",
        "Más de 17 años de experiencia aplicando esta técnica en nuestra clínica",
        "Aplicación sistemática y segura en embriones descongelados"
      ],
      fullDescription: [
        "Con los avances tecnológicos de la micromanipulación, se desarrolló un rayo láser diminuto adaptado a microscopios invertidos.",
        "En nuestra clínica desde hace más de 17 años se realiza este procedimiento en todos los casos de embriones descongelados.",
        "Los embriones descongelados poseen una zona pelúcida endurecida; el Hatch Asistido restaura su capacidad de eclosión aumentando significativamente la tasa de implantación y embarazo."
      ]
    },
    en: {
      title: "Assisted Hatching (Laser Hatching)",
      shortTitle: "Assisted Hatching",
      summary: "High-precision infrared laser micro-surgery on the embryo's outer shell (zona pellucida) to facilitate hatching and endometrial implantation.",
      highlights: [
        "Micro-laser technology integrated with inverted research microscopes",
        "Over 17 years of experience applying this technique at our clinic",
        "Systematic, safe application for frozen-thawed embryos"
      ],
      fullDescription: [
        "Advanced micromanipulation utilizes an ultra-precise diode laser adapted to inverted microscopes.",
        "Our clinic has performed assisted hatching for over 17 years for frozen-thawed embryos and cases with thick zona pellucida.",
        "Cryopreservation can harden the zona pellucida; laser assisted hatching restores natural hatching capability, substantially boosting clinical pregnancy rates."
      ]
    }
  },
  {
    id: "transferencia-de-embriones",
    iconName: "HeartHandshake",
    imageSrc: "/imagenes/tratamientos/transferencia_nueva.jpg",
    isFeatured: true,
    es: {
      title: "Transferencia de Embriones",
      shortTitle: "Transferencia Embrionaria",
      summary: "Hace años la trasferencia de embriones se llevaba a cabo en el tercer día de desarrollo, en nuestra Clínica desde hace años la tecnología de nuestros laboratorios, así como la alta calidad de los medios de cultivo nos permiten realizar las transferencias de embriones en el quinto día de desarrollo con las ventajas que esto conlleva para mejorar las posibilidades de éxito en el tratamiento.",
      highlights: [
        "Transferencias en día +5 / +6 en estadio óptimo de blastocisto",
        "Protocolo i) Transferencia durante el Ciclo en Fresco",
        "Protocolo ii) Ciclo con Embriones Congelados (Preparación Endometrial)",
        "Protocolo iii) Transferencia Embrionaria en Ciclo Natural",
        "Procedimiento ambulatorio de 10 min guiado por ultrasonido abdominal"
      ],
      fullDescription: [
        "Existen tres Protocolos para realizar la transferencia de embriones:",
        "i) La Transferencia durante el Ciclo en Fresco: Es cuando durante el ciclo en que se lleva a cabo la estimulación de los ovarios también se realiza la transferencia en los días +5 o +6. Por lo tanto, los embriones transferidos no pasan por un proceso de congelación. La decisión depende de parámetros hormonales cuantificados el día del disparo y el siguiente.",
        "ii) Ciclo con Embriones Congelados: Cuando los niveles hormonales son muy elevados, es preferible congelar los embriones en día +5 ó +6 (vitrificación) y transferirlos en un ciclo posterior con preparación endometrial con dosis pequeñas de estrógenos y progesterona para imitar el desarrollo de un ciclo natural.",
        "iii) Transferencia en Ciclo Natural: La preparación endometrial para la transferencia embrionaria en ciclo natural es un proceso en el que se optimiza el revestimiento del útero (endometrio) de forma natural, sin el uso de medicamentos para suprimir la ovulación o estimular el crecimiento del endometrio. Se monitorea cuidadosamente el ciclo menstrual de la paciente mediante ecografías y mediciones de niveles hormonales para identificar el momento óptimo en que el endometrio está receptivo.",
        "El día de la transferencia se le solicitará que llegue con la vejiga llena. Usted pasará de nuevo a quirófano, en donde se realiza la transferencia embrionaria, bajo un ambiente estéril. Es un procedimiento que dura aproximadamente 10 min y se realiza, en la mayoría de los casos, sin sedación ni anestesia. Al término de este, la paciente se mantendrá en reposo absoluto en nuestra área de recuperación durante dos horas."
      ]
    },
    en: {
      title: "Embryo Transfer",
      shortTitle: "Embryo Transfer",
      summary: "At our clinic, advanced laboratory technology and premium culture media enable Day 5/6 blastocyst transfers, maximizing implantation success.",
      highlights: [
        "Day +5 / +6 blastocyst stage transfers",
        "Protocol i) Fresh Cycle Transfer",
        "Protocol ii) Frozen Embryo Transfer (Hormone Replacement)",
        "Protocol iii) Natural Cycle Embryo Transfer",
        "10-minute outpatient procedure under abdominal ultrasound guidance"
      ],
      fullDescription: [
        "We offer three tailored protocols for embryo transfer:",
        "i) Fresh Cycle Transfer: Performed on Day 5 or 6 of the stimulation cycle when hormone levels are ideal.",
        "ii) Frozen Embryo Transfer (FET): Blastocysts are vitrified and transferred in a subsequent cycle with gentle estrogen and progesterone endometrial preparation.",
        "iii) Natural Cycle Transfer: Endometrial lining is monitored and optimized naturally without suppressive medications, following the patient's own menstrual cycle to identify the optimal receptive window.",
        "The transfer is performed in a sterile surgical suite under abdominal ultrasound guidance, taking about 10 minutes without anesthesia, followed by 2 hours of quiet recovery."
      ]
    }
  },
  {
    id: "diagnostico-genetico-embrionario",
    iconName: "Dna",
    imageSrc: "/imagenes/tratamientos/diagnostico_genetico.jpg",
    isFeatured: true,
    es: {
      title: "Diagnóstico Genético Embrionario (PGD / NGS)",
      shortTitle: "Genética Embrionaria (PGD)",
      summary: "Secuenciación de Nueva Generación (NGS) para analizar los 23 pares de cromosomas del embrión antes de la transferencia, identificando embriones sanos (Euploides).",
      highlights: [
        "Biopsia de 4 células del trofoectodermo en estadio de blastocisto (día 5/6)",
        "Tecnología NGS (Next Generation Sequencing) desde 2014 en nuestra clínica",
        "Diferenciación exacta entre embriones Euploides (normales) y Aneuploides",
        "Máxima seguridad y reducción drástica de abortos espontáneos"
      ],
      fullDescription: [
        "El ADN humano se organiza en 23 pares de cromosomas. Con la edad materna y paterna, aumenta el riesgo de alteraciones cromosómicas.",
        "Desde 2014 ofrecemos en nuestra clínica el Diagnóstico Genético Preimplantacional (PGD) mediante Secuenciación de Nueva Generación (NGS).",
        "En estadio de blastocisto se toman 4 células de la capa exterior (trofoectodermo) sin tocar la masa que formará al bebé, vitrificando el embrión mientras se analiza su estado cromosómico euploide."
      ]
    },
    en: {
      title: "Preimplantation Genetic Testing (PGT / NGS)",
      shortTitle: "Embryo Genetics (PGT)",
      summary: "Next-Generation Sequencing (NGS) analyzing all 23 chromosome pairs prior to transfer to identify genetically balanced, euploid embryos.",
      highlights: [
        "4-cell trophectoderm biopsy at day 5/6 blastocyst stage",
        "NGS technology implemented at our clinic since 2014",
        "Accurate identification of Euploid (normal) vs. Aneuploid embryos",
        "Significant reduction in miscarriage rates and increased live births"
      ],
      fullDescription: [
        "Human genetic code is organized into 23 chromosome pairs. Age-related factors increase the probability of chromosomal aneuploidies.",
        "Since 2014, our clinic provides Preimplantation Genetic Testing with Next-Generation Sequencing (NGS).",
        "At the blastocyst stage, a safe 4-cell biopsy of the outer trophectoderm is collected without touching the inner cell mass, identifying euploid embryos for transfer."
      ]
    }
  },
  {
    id: "congelacion-de-ovulos",
    iconName: "Snowflake",
    imageSrc: "/imagenes/tratamientos/congelacion_ovulos.jpg",
    es: {
      title: "Congelación de Óvulos (Preservación de Fertilidad)",
      shortTitle: "Congelación de Óvulos",
      summary: "Vitrificación ultra-rápida de ovocitos para mujeres que desean posponer la maternidad por metas personales, profesionales o razones médicas.",
      highlights: [
        "Vitrificación rápida que previene la formación de cristales dañinos",
        "Preservación de la calidad biológica del óvulo por tiempo indefinido",
        "Opción de criopreservación de corteza ovárica por laparoscopia en casos selectos"
      ],
      fullDescription: [
        "Hoy en día las mujeres posponen la maternidad por desarrollo profesional y metas de vida. La reserva ovárica óptima ocurre entre los 15 y 30 años.",
        "En nuestra clínica disponemos de la Vitrificación de Óvulos y la criopreservación de corteza ovárica para preservar el potencial reproductivo con la edad biológica del momento de la congelación."
      ]
    },
    en: {
      title: "Egg Freezing (Fertility Preservation)",
      shortTitle: "Egg Freezing",
      summary: "Ultra-rapid oocyte vitrification for women wishing to safeguard their reproductive potential for personal, professional, or medical reasons.",
      highlights: [
        "Ultra-rapid vitrification preventing cellular ice crystal formation",
        "Biological egg quality preserved indefinitely",
        "Ovarian cortex cryopreservation available for select medical cases"
      ],
      fullDescription: [
        "Ovarian biological peak occurs between ages 18 and 30. Preserving oocytes locks in the biological age and quality of the eggs at that exact moment.",
        "Our laboratory utilizes ultra-fast vitrification protocols achieving post-thaw survival rates comparable to fresh cycles."
      ]
    }
  },
  {
    id: "congelacion-de-embriones",
    iconName: "Layers",
    imageSrc: "/imagenes/tratamientos/congelaciondeembriones.jpg",
    es: {
      title: "Congelación de Embriones (Vitrificación)",
      shortTitle: "Congelación de Embriones",
      summary: "Método de congelación ultra-rápida desarrollado por el Dr. Kuwayama en Japón, con tasas de supervivencia y embarazo superiores al 95%.",
      highlights: [
        "Pioneros en vitrificación exclusiva desde el año 2005",
        "Resultados comparables o superiores a los tratamientos en fresco",
        "Permite planificar transferencias diferidas en endometrios óptimos"
      ],
      fullDescription: [
        "El Dr. Kuwayama en Japón revolucionó la medicina reproductiva con la Vitrificación.",
        "Desde 2005 en nuestra clínica solo realizamos vitrificación de óvulos y embriones, alcanzando tasas de sobrevida y éxito clínico de estándar internacional."
      ]
    },
    en: {
      title: "Embryo Freezing (Vitrification)",
      shortTitle: "Embryo Vitrification",
      summary: "Ultra-rapid vitrification method developed by Dr. Kuwayama in Japan, achieving embryo survival rates exceeding 95%.",
      highlights: [
        "Pioneered exclusive vitrification since 2005",
        "Results equivalent or superior to fresh embryo cycles",
        "Enables deferred transfer in perfectly synchronized endometrium"
      ],
      fullDescription: [
        "The Kuwayama ultra-rapid vitrification method revolutionized reproductive medicine by eliminating ice crystal formation.",
        "Since 2005, our clinic exclusively performs blastocyst vitrification, delivering world-class survival and pregnancy outcomes."
      ]
    }
  },
  {
    id: "congelacion-de-esperma",
    iconName: "ShieldCheck",
    imageSrc: "/imagenes/tratamientos/trabajosperm.jpg",
    es: {
      title: "Congelación de Esperma",
      shortTitle: "Congelación de Esperma",
      summary: "Criopreservación de muestras seminales en viales o perlas de alta seguridad, manteniendo su viabilidad y motilidad durante más de 15 años.",
      highlights: [
        "Técnicas en viales y congelación en microperlas para conteos muy bajos",
        "Muestras criopreservadas en perfectas condiciones por más de 15 años",
        "Preservación prioritaria ante patologías testiculares o tratamientos médicos"
      ],
      fullDescription: [
        "La criopreservación seminal es una técnica segura para preservar gametos masculinos antes de cirugías, tratamientos médicos o por prevención reproductiva. Las muestras pueden conservarse por más de 15 años con viabilidad garantizada."
      ]
    },
    en: {
      title: "Sperm Cryopreservation",
      shortTitle: "Sperm Freezing",
      summary: "Cryopreservation of semen samples in secure vials or micro-beads, retaining biological motility and viability for over 15 years.",
      highlights: [
        "Standard vial and micro-bead cryopreservation for ultra-low sperm counts",
        "Biological integrity preserved for more than 15 years",
        "Priority fertility preservation before oncological or testicular surgeries"
      ],
      fullDescription: [
        "Semen cryopreservation provides a reliable solution for men facing gonadotoxic treatments, surgeries, or planning future family building.",
        "Our specialized andrology lab ensures sample viability for decades without genetic or functional degradation."
      ]
    }
  },
  {
    id: "donacion-de-ovulos-y-esperma",
    iconName: "Users",
    imageSrc: "/imagenes/tratamientos/donacion.jpg",
    isFeatured: true,
    es: {
      title: "Donación de Óvulos y Esperma",
      shortTitle: "Ovodonación y Banco Seminal",
      summary: "Programa ético y transparente con más de 26 años de trayectoria, evaluación genética rigurosa, reconocimiento facial Fenomatch y prohibición absoluta de Egg Splitting.",
      highlights: [
        "Flujograma de 4 etapas: Psicométrica, Salud y Genética (X-Frágil), Reserva ovárica y Fenomatch",
        "Reconocimiento biométrico facial Fenomatch para máxima similitud fenotípica",
        "PROHIBICIÓN ESTRICTA DE EGG SPLITTING: Todos los óvulos son 100% exclusivos para una sola receptora",
        "Dirección coordinada por especialistas en psicología y trabajo social clínico"
      ],
      fullDescription: [
        "Más de 26 años de experiencia en donación de gametos desde 1994 en asociación con el Dr. Richard Marrs (California Fertility Partners).",
        "El programa está estructurado por la Psicoterapeuta Nerea Iruretagoyena Olalde y la Lic. Mónica Hevia Romano.",
        "En nuestra clínica está estrictamente prohibido el EGG SPLITTING: Todos los óvulos obtenidos se destinan exclusivamente a una sola receptora."
      ],
      steps: [
        {
          number: 1,
          title: "Evaluación Psicométrica",
          description: "Valoración exhaustiva del estado mental, cognitivo y estabilidad emocional de la candidata."
        },
        {
          number: 2,
          title: "Estudios de Salud General e Historia Familiar Genética",
          description: "Cariotipo completo y screening molecular de enfermedades hereditarias (X Frágil)."
        },
        {
          number: 3,
          title: "Evaluación del Potencial Reproductivo",
          description: "Estudio ginecológico y ecográfico de reserva ovárica y respuesta biológica."
        },
        {
          number: 4,
          title: "Fenotipos y Parecido Físico (Fenomatch)",
          description: "Reconocimiento biométrico facial digital para emparejar con la máxima afinidad fenotípica."
        }
      ]
    },
    en: {
      title: "Egg & Sperm Donation",
      shortTitle: "Egg & Sperm Donation",
      summary: "Ethical program with 26+ years of experience, rigorous genetic screening, Fenomatch facial recognition, and strict prohibition of Egg Splitting.",
      highlights: [
        "4-Stage Protocol: Psychometric, General & Genetic Health (Fragile X), Ovarian Reserve, and Fenomatch",
        "Fenomatch biometric facial matching for phenotypic resemblance",
        "STRICT NO EGG-SPLITTING POLICY: 100% of retrieved eggs belong exclusively to one recipient",
        "Coordinated by clinical psychologists and specialized social workers"
      ],
      fullDescription: [
        "Over 26 years of donor program excellence established in 1994 in collaboration with Dr. Richard Marrs (California Fertility Partners).",
        "Supervised by Psychotherapist Nerea Iruretagoyena Olalde and Lic. Mónica Hevia Romano.",
        "At CFA ABC, EGG SPLITTING IS STRICTLY PROHIBITED: All retrieved eggs from a donor cycle are dedicated solely to one recipient."
      ],
      steps: [
        {
          number: 1,
          title: "Psychometric Evaluation",
          description: "Comprehensive assessment of cognitive stability, emotional readiness, and psychological health."
        },
        {
          number: 2,
          title: "Genetic & Health Screening",
          description: "Karyotype and molecular screening for hereditary conditions including Fragile X syndrome."
        },
        {
          number: 3,
          title: "Reproductive Potential Assessment",
          description: "Gynecological examination and ovarian reserve ultrasound evaluation."
        },
        {
          number: 4,
          title: "Fenomatch Facial Recognition",
          description: "Digital biometrics algorithm to ensure maximum phenotypic similarity between donor and recipient."
        }
      ]
    }
  },
  {
    id: "cancer-y-reproduccion",
    iconName: "Ribbon",
    imageSrc: "/imagenes/tratamientos/oncofertilidad.png",
    es: {
      title: "Cáncer y Reproducción (Oncofertilidad)",
      shortTitle: "Oncofertilidad",
      summary: "Atención prioritaria y multidisciplinaria para preservar la fertilidad en hombres y mujeres diagnosticados con cáncer antes de iniciar quimioterapia o radioterapia.",
      highlights: [
        "Protocolos de urgencia oncológica con inicio inmediato",
        "Preservación de corteza ovárica, óvulos, embriones y esperma en viales/perlas",
        "Coordinación estrecha con oncólogos médicos y cirujanos oncólogos"
      ],
      fullDescription: [
        "Los avances en oncología han aumentado la supervivencia. Preservar la fertilidad antes de quimioterapia o radioterapia es prioritario.",
        "Ofrecemos vitrificación de óvulos, embriones, corteza ovárica o esperma con protocolos urgentes coordinados con los médicos oncólogos tratantes."
      ]
    },
    en: {
      title: "Cancer & Fertility (Oncofertility)",
      shortTitle: "Oncofertility",
      summary: "Priority, multidisciplinary fertility preservation for women and men facing cancer diagnoses prior to initiating chemotherapy, radiation, or pelvic surgery.",
      highlights: [
        "Urgent oncofertility fast-track with immediate treatment initiation",
        "Cryopreservation of ovarian tissue, oocytes, embryos, and sperm",
        "Direct collaboration with medical oncologists and surgical teams"
      ],
      fullDescription: [
        "Modern oncological treatments achieve remarkable survival rates. Safeguarding reproductive capability before gonadotoxic therapies is a priority.",
        "We offer rapid-response vitrification protocols for eggs, embryos, sperm, or ovarian tissue tailored to the oncologist's treatment window."
      ]
    }
  },
  {
    id: "cirugia-reproductiva",
    iconName: "Activity",
    imageSrc: "/imagenes/tratamientos/quirofano.jpg",
    es: {
      title: "Cirugía Reproductiva de Alta Especialidad",
      shortTitle: "Cirugía Reproductiva",
      summary: "Procedimientos quirúrgicos mínimamente invasivos y robóticos en el quirófano del Centro Médico ABC para restaurar la anatomía y función de los órganos reproductores.",
      highlights: [
        "Laparoscopia e Histeroscopía diagnóstica y operatoria en quirófano de alta tecnología",
        "Tratamiento avanzado de endometriosis, miomas uterinos y adherencias pélvicas",
        "Microcirugía y Cirugía Robótica de vanguardia en el Centro Médico ABC",
        "Procedimientos ambulatorios con recuperación rápida de 48 horas"
      ],
      fullDescription: [
        "Laparoscopia e Histeroscopía Diagnóstica y Operatoria en quirófanos del Centro Médico ABC Santa Fe para corregir endometriosis, miomas, pólipos o sinequias con microcirugía robótica y recuperación de 48 horas."
      ]
    },
    en: {
      title: "High-Specialty Reproductive Surgery",
      shortTitle: "Reproductive Surgery",
      summary: "Minimally invasive laparoscopic, hysteroscopic, and robotic surgeries performed at ABC Medical Center to restore reproductive anatomy.",
      highlights: [
        "Diagnostic and operative laparoscopy/hysteroscopy in state-of-the-art suites",
        "Advanced surgical treatment for endometriosis, uterine fibroids, and pelvic adhesions",
        "Cutting-edge microsurgery and robotic surgical infrastructure at ABC Medical Center",
        "Outpatient procedures with rapid 48-hour recovery"
      ],
      fullDescription: [
        "Laparoscopy and Hysteroscopy at ABC Medical Center Santa Fe suites addressing endometriosis, fibroids, polyps, and tubal obstructions with robotic precision and fast 48-hour recovery."
      ]
    }
  },
  {
    id: "timelapse-inovacion",
    iconName: "Cpu",
    imageSrc: "/imagenes/tratamientos/timelapsepantalla.jpg",
    isFeatured: true,
    es: {
      title: "Timelapse (Inovación)",
      shortTitle: "Timelapse",
      summary: "Estamos emocionados por compartirles que somos la primera y única clínica en México que cuenta con una incubadora de timelapse. Es una tecnología de vanguardia que permite monitorear el desarrollo embrionario de manera continua y detallada en los laboratorios de fertilización in vitro (FIV).",
      highlights: [
        "Primera y única clínica en México con incubadora Timelapse de monitoreo continuo",
        "Captura constante de imágenes sin perturbar el microambiente embrionario",
        "Análisis morfocinético avanzado de tasas de división y tiempos celulares",
        "Selección embrionaria optimizada para máxima tasa de embarazo y menor riesgo múltiple"
      ],
      fullDescription: [
        "Una incubadora timelapse es una tecnología de vanguardia utilizada en los laboratorios de fertilización in vitro (FIV) para monitorear el desarrollo embrionario con precisión y detalle. A diferencia de las incubadoras tradicionales, que requieren la extracción intermitente de embriones para su observación, una incubadora de Timelapse captura imágenes continuas de los embriones a medida que crecen y se desarrollan.",
        "Al registrar este proceso de desarrollo, los embriólogos pueden analizar varios parámetros, como las tasas de división celular, la morfología del embrión y los tiempos de las etapas cruciales del desarrollo. Esta gran cantidad de datos les permite seleccionar los mejores embriones para la transferencia, lo que potencialmente aumenta las posibilidades de un embarazo exitoso y minimiza el riesgo de embarazos múltiples.",
        "En esencia, una incubadora timelapse revoluciona el proceso de selección de embriones en la FIV, ofreciendo mayor conocimiento y control a los especialistas en fertilidad y, en última instancia, mejorando la eficiencia y los resultados de los procedimientos de reproducción asistida."
      ]
    },
    en: {
      title: "Timelapse (Innovation)",
      shortTitle: "Timelapse",
      summary: "We are proud to be the first and only clinic in Mexico equipped with a timelapse incubator, monitoring embryonic development continuously and non-invasively.",
      highlights: [
        "First and only clinic in Mexico with continuous Timelapse incubator monitoring",
        "Continuous photographic capture without disturbing embryonic culture conditions",
        "Advanced morphokinetic analysis of cell division rates and developmental kinetics",
        "Optimized embryo selection for higher pregnancy success and single-embryo safety"
      ],
      fullDescription: [
        "A timelapse incubator is a cutting-edge technology used in IVF laboratories to monitor embryonic development with unprecedented precision. Unlike traditional incubators requiring manual removal of culture dishes, timelapse incubators capture continuous images as embryos divide.",
        "By recording this entire trajectory, embryologists assess key morphokinetic parameters, selecting the most viable blastocysts for transfer.",
        "This substantially optimizes clinical pregnancy rates while minimizing multiple pregnancies, representing the forefront of reproductive science."
      ]
    }
  }
];
