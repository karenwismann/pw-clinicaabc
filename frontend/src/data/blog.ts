export interface BlogAuthor {
  name: string;
  role: { es: string; en: string };
  avatar: string;
  specialty: { es: string; en: string };
  bio: { es: string; en: string };
  cedula?: string;
}

export interface BlogSection {
  id: string;
  title: string;
  paragraphs: string[];
  quote?: string;
  callout?: {
    type?: 'info' | 'highlight' | 'scientific';
    title: string;
    text: string;
  };
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string; // slug
  categoryKey: 'ia-tech' | 'femenina' | 'seguridad' | 'genetica';
  category: { es: string; en: string };
  title: { es: string; en: string };
  subtitle: { es: string; en: string };
  date: { es: string; en: string };
  readTime: { es: string; en: string };
  author: BlogAuthor;
  imageSrc: string;
  imageCaption: { es: string; en: string };
  snippet: { es: string; en: string };
  isFeatured?: boolean;
  isDraftSample?: boolean;
  keyTakeaways: { es: string[]; en: string[] };
  content?: {
    es: {
      introduction: string;
      sections: BlogSection[];
      conclusion: string;
      faqs?: BlogFAQ[];
    };
    en: {
      introduction: string;
      sections: BlogSection[];
      conclusion: string;
      faqs?: BlogFAQ[];
    };
  };
  tags: string[];
  relatedTreatments?: {
    id: string;
    name: { es: string; en: string };
    href: string;
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ia-seleccion-embriones',
    categoryKey: 'ia-tech',
    isFeatured: true,
    isDraftSample: true,
    category: {
      es: 'Tecnología Médica & IA',
      en: 'Medical Tech & AI'
    },
    title: {
      es: 'Cómo la Inteligencia Artificial y la Morfocinética están revolucionando la selección de embriones',
      en: 'How Artificial Intelligence and Morphokinetics are Revolutionizing Embryo Selection'
    },
    subtitle: {
      es: 'De la observación tradicional al análisis continuo mediante incubadoras Timelapse y visión computacional: cómo aumentamos las tasas de implantación en el Centro Médico ABC.',
      en: 'From conventional microscopy to continuous Timelapse imaging and computer vision: how we improve live birth rates at ABC Medical Center.'
    },
    date: {
      es: 'Agosto 2026',
      en: 'August 2026'
    },
    readTime: {
      es: '5 min de lectura',
      en: '5 min read'
    },
    author: {
      name: 'Dr. Carlos Navarro Martínez',
      role: {
        es: 'Director Médico y Pionero en Reproducción Asistida',
        en: 'Medical Director & Pioneer in Assisted Reproduction'
      },
      avatar: '/imagenes/doctores/doctorcarlos1.jpg',
      specialty: {
        es: 'Ginecología, Obstetricia y Biología de la Reproducción Humana',
        en: 'Obstetrics, Gynecology & Human Reproductive Biology'
      },
      bio: {
        es: 'Especialista certificado por el Consejo Mexicano de Ginecología y Obstetricia con más de 35 años liderando avances en FIV en México y el Centro Médico ABC Santa Fe.',
        en: 'Board-certified reproductive biologist with over 35 years pioneering IVF breakthroughs in Mexico and ABC Medical Center Santa Fe.'
      },
      cedula: 'Céd. Prof. 1294820'
    },
    imageSrc: '/imagenes/incubadoratimelapse.jpg',
    imageCaption: {
      es: 'Incubadora Timelapse con cámara microscópica de alta resolución en el laboratorio de CFA.',
      en: 'Timelapse incubator featuring high-resolution microscopic imaging at the CFA laboratory.'
    },
    snippet: {
      es: 'El análisis morfocinético computarizado mediante incubadoras Timelapse y algoritmos de Machine Learning permite evaluar con precisión matemática la velocidad y simetría de división celular sin perturbar el ambiente estéril del cultivo.',
      en: 'Computerized morphokinetic analysis via Timelapse incubators and Machine Learning algorithms accurately evaluates cellular division speed and symmetry without disrupting the sterile culture environment.'
    },
    tags: ['Inteligencia Artificial', 'Timelapse', 'Morfocinética', 'FIV', 'Selección Embrionaria'],
    relatedTreatments: [
      {
        id: 'fiv',
        name: { es: 'Fertilización In Vitro (FIV)', en: 'In Vitro Fertilization (IVF)' },
        href: '/tratamientos#fiv'
      },
      {
        id: 'pgt',
        name: { es: 'Diagnóstico Genético (PGT-A)', en: 'Genetic Testing (PGT-A)' },
        href: '/tratamientos#pgt-a'
      },
      {
        id: 'laboratorio',
        name: { es: 'Tecnología e Instalaciones', en: 'Technology & Facilities' },
        href: '/instalaciones'
      }
    ],
    keyTakeaways: {
      es: [
        'Cero perturbación: El embrión se fotografía automáticamente cada 5-10 minutos dentro de la incubadora sin exponerse a variaciones de temperatura, luz o pH.',
        'Algoritmos predictivos: La IA evalúa miles de puntos de datos sobre la velocidad exacta de división celular (morfocinética) para calcular el potencial de implantación.',
        'Complemento ético: La IA no reemplaza el criterio del embriólogo, sino que le brinda una herramienta objetiva de apoyo diagnóstico con evidencia cuantificable.',
        'Reducción de tiempo al embarazo: Permite transferir el embrión con mayor probabilidad biológica en el primer intento, evitando transferencias fallidas.'
      ],
      en: [
        'Zero disturbance: The embryo is automatically photographed every 5-10 minutes inside the incubator without exposure to shifts in temperature, light, or pH.',
        'Predictive algorithms: AI computes thousands of micro-parameters regarding exact division speed (morphokinetics) to calculate implantation potential.',
        'Ethical synergy: AI does not replace embryologist judgment; it equips them with objective, quantifiable diagnostic data.',
        'Faster time to pregnancy: Transfers the embryo with the highest biological probability first, avoiding futile cycles.'
      ]
    },
    content: {
      es: {
        introduction: 'Durante décadas, la selección del "mejor embrión" en un ciclo de Fertilización In Vitro (FIV) dependió de una instantánea estática: el embriólogo retiraba momentáneamente la placa de cultivo de la incubadora una vez al día para observarla al microscopio óptico durante breves segundos. Si bien este método permitió miles de nacimientos exitosos, representaba un desafío: extraer el embrión altera su microambiente térmico y de gases, y evaluar un proceso biológico tan dinámico mediante una sola fotografía diaria dejaba ocultos eventos críticos del desarrollo embrionario.',
        sections: [
          {
            id: 'incubadoras-timelapse',
            title: '1. El Salto a la Tecnología Timelapse (Monitoreo Continuo 24/7)',
            paragraphs: [
              'La introducción de incubadoras con tecnología Timelapse representó el primer gran hito evolutivo. Estas cámaras de cultivo cerradas incorporan microscopios y ópticas de contraste de fase que capturan imágenes de cada embrión en intervalos regulares (por lo general, cada 5 a 10 minutos) a lo largo de sus 5 a 6 días de desarrollo hasta la etapa de blastocisto.',
              'Al reproducir estas secuencias en video acelerado, los embriólogos de CFA pueden observar exactamente en qué minuto ocurrió la primera división celular (de una a dos células), la simetría con la que se fragmentaron y el tiempo transcurrido hasta la compactación de la mórula y la cavitación del blastocisto.'
            ],
            callout: {
              type: 'scientific',
              title: 'Dato Clínico Clave',
              text: 'Las variaciones de apenas 0.5 °C o fluctuaciones en la concentración de CO2/O2 pueden inducir estrés celular. El monitoreo Timelapse mantiene un ambiente biomimético 100% ininterrumpido.'
            }
          },
          {
            id: 'algoritmos-ia',
            title: '2. Inteligencia Artificial y Machine Learning: Del Ojo Humano a la Precisión Matemática',
            paragraphs: [
              'Aunque el video continuo aporta abundante información visual, analizar cientos de horas de grabación de múltiples pacientes supera la capacidad de procesamiento manual de cualquier laboratorio. Aquí es donde los modelos de Inteligencia Artificial entrenados con redes neuronales convolucionales (CNN) marcan una diferencia determinante.',
              'Los algoritmos de IA en reproducción asistida han sido entrenados con millones de imágenes de embriones con desenlace clínico conocido (es decir, sabiendo con certeza cuáles embriones lograron embarazo a término y cuáles no). La IA detecta patrones micrométricos imperceptibles al ojo humano, como irregularidades en la membrana pelúcida, multinucleación transitoria y asimetrías de clivaje.',
              'El sistema genera una puntuación objetiva (Score de Viabilidad) que clasifica los embriones según su probabilidad estadística de implantación exitosa.'
            ],
            quote: 'La Inteligencia Artificial no sustituye al embriólogo ni al médico especialista; convierte la intuición y la experiencia visual en un estándar cuantitativo con respaldo científico verificable.'
          },
          {
            id: 'beneficios-paciente',
            title: '3. ¿Qué Significa Esto Concretamente para los Pacientes?',
            paragraphs: [
              'Para una pareja o una mujer que inicia su tratamiento de fertilidad, cada detalle tecnológico tiene un impacto humano directo:',
              '• Reducción del Tiempo al Embarazo (Time to Pregnancy): Al identificar el embrión con mayor potencial biológico desde el inicio, se optimiza la primera transferencia embrionaria, disminuyendo la necesidad de ciclos acumulados.',
              '• Transferencia de Embrión Único (SET) con Máxima Confianza: Gracias a la precisión combinada de la IA y el estudio cromosómico (PGT-A), podemos transferir con seguridad un solo embrión, erradicando los riesgos obstétricos y perinatales asociados a embarazos múltiples.',
              '• Mayor Tranquilidad Emocional: Los pacientes reciben un reporte transparente donde comprenden de forma visual y con datos claros el desarrollo de sus embriones.'
            ]
          },
          {
            id: 'estandar-cfabc',
            title: '4. El Estándar CFA en el Centro Médico ABC Santa Fe',
            paragraphs: [
              'En la Clínica de Fertilización Asistida integramos estas herramientas de vanguardia bajo una estricta filosofía bioética. Cada cálculo morfocinético es supervisado por nuestro equipo de embriología y médicos tratantes, asegurando que la tecnología siempre sirva al bienestar integral de la futura familia.',
              'Combinamos la vigilancia Timelapse con el sistema de trazabilidad por radiofrecuencia RI Witness (para seguridad biológica absoluta) y pruebas genéticas de Secuenciación Masiva (NGS), garantizando que tu proyecto familiar esté respaldado por los protocolos más rigurosos de América Latina.'
            ]
          }
        ],
        conclusion: 'La medicina reproductiva vive su era más prometedora. La unión entre la biología molecular, la microscopía de última generación y la Inteligencia Artificial nos permite acompañarte con certeza, honestidad y la máxima tasa de éxito posible. Si deseas evaluar tu caso de forma personalizada con nuestros especialistas, estamos listos para escucharte.',
        faqs: [
          {
            question: '¿El uso de IA o Timelapse daña de alguna forma el embrión?',
            answer: 'Al contrario: protege al embrión. La luz utilizada para las fotografías es de longitud de onda suave y se activa únicamente por fracciones de segundo. El embrión permanece en una atmósfera hermética sin ser manipulado ni expuesto al ambiente exterior.'
          },
          {
            question: '¿La IA reemplaza la necesidad de realizar un estudio genético (PGT-A)?',
            answer: 'No. Son herramientas complementarias. La IA evalúa la morfología y cinética de división (cómo se comporta el embrión), mientras que el PGT-A analiza la dotación cromosómica (si tiene 46 cromosomas normales). Cuando se combinan ambas, se alcanza la máxima tasa de éxito reproductivo.'
          },
          {
            question: '¿Todos los pacientes de CFA tienen acceso a esta tecnología?',
            answer: 'Sí. Todos los procedimientos de laboratorio en CFA se realizan en nuestras instalaciones de alta complejidad en el Centro Médico ABC Santa Fe con acceso a tecnología de incubación de vanguardia.'
          }
        ]
      },
      en: {
        introduction: 'For decades, selecting the "top embryo" in an IVF cycle relied on a single daily snapshot: embryologists briefly took culture dishes out of the incubator to inspect them under an optical microscope for a few seconds. While this produced thousands of healthy births, it held intrinsic limitations: removing embryos disrupts their thermal and gaseous microenvironment, and a single daily photo missed critical developmental milestones.',
        sections: [
          {
            id: 'incubadoras-timelapse',
            title: '1. The Leap to Timelapse Technology (24/7 Continuous Monitoring)',
            paragraphs: [
              'Timelapse incubator systems represented the first major evolutionary leap. These sealed culture chambers house high-resolution phase-contrast optics capturing automatic images every 5 to 10 minutes over the full 5-to-6-day blastocyst culture period.',
              'By reviewing this continuous video playback, CFA embryologists monitor the exact minute when first cleavage occurred, cellular fragmentation symmetry, and the exact kinetics toward morula compaction and blastocyst cavitation.'
            ],
            callout: {
              type: 'scientific',
              title: 'Clinical Insight',
              text: 'Fluctuations as small as 0.5 °C or minor CO2/O2 drifts induce cellular stress. Continuous Timelapse imaging provides a 100% stable, biomimetic incubator environment.'
            }
          },
          {
            id: 'algoritmos-ia',
            title: '2. Artificial Intelligence & Machine Learning: From Human Eye to Mathematical Certainty',
            paragraphs: [
              'While continuous video yields rich data, manually analyzing hundreds of hours of video per patient exceeds human bandwidth. This is where Convolutional Neural Network (CNN) algorithms step in.',
              'AI algorithms in reproductive medicine are trained on vast datasets of embryo videos with known clinical outcomes (live birth vs. non-implantation). The software detects micrometric patterns invisible to the naked eye, such as subtle zona pellucida shifts, transient multinucleation, and cleavage asymmetry.',
              'The system outputs an objective Viability Score ranking embryos based on their statistical probability of implantation.'
            ],
            quote: 'Artificial Intelligence does not replace the embryologist or the physician; it transforms visual intuition into a quantifiable, evidence-based standard.'
          },
          {
            id: 'beneficios-paciente',
            title: '3. What Does This Mean for Patients?',
            paragraphs: [
              'For couples and women embarking on fertility treatment, every technological advantage has immediate personal value:',
              '• Faster Time to Pregnancy: Identifying the most viable embryo right away optimizes the very first embryo transfer, reducing redundant treatment cycles.',
              '• Single Embryo Transfer (SET) with Maximum Confidence: With AI morphokinetics and PGT-A genetic screening, we safely transfer one embryo at a time, eliminating twin and high-risk multiple gestation complications.',
              '• Emotional Reassurance: Patients receive clear, visual documentation explaining their embryo development with total transparency.'
            ]
          },
          {
            id: 'estandar-cfabc',
            title: '4. The CFA Standard at ABC Medical Center Santa Fe',
            paragraphs: [
              'At CFA, we implement advanced diagnostic tools under strict bioethical guidelines. Every morphokinetic score is verified by our embryology faculty and lead fertility physicians.',
              'We integrate Timelapse surveillance with British RFID electronic witness tracking (RI Witness) and Next-Generation Sequencing (NGS) genetics, ensuring your family journey is safeguarded by the most rigorous clinical standards in Latin America.'
            ]
          }
        ],
        conclusion: 'Reproductive medicine has entered its most promising era. Combining molecular biology, cutting-edge microscopy, and AI empowers us to guide you with transparency and the highest possible success rate. If you would like a personalized evaluation, our medical team is here for you.',
        faqs: [
          {
            question: 'Does Timelapse photography or AI harm the embryo in any way?',
            answer: 'No, it actively protects it. The light used is low-intensity, non-phototoxic, and triggered for only milliseconds. The embryo remains completely undisturbed in a controlled microclimate.'
          },
          {
            question: 'Does AI replace Genetic Testing (PGT-A)?',
            answer: 'No, they are synergistic. AI assesses developmental behavior and morphology, while PGT-A examines chromosomal number (euploidy). Combining both delivers the highest clinical live-birth rate.'
          },
          {
            question: 'Do all CFA patients have access to this technology?',
            answer: 'Yes. All laboratory procedures are conducted at our advanced laboratory within ABC Medical Center Santa Fe with cutting-edge incubation capabilities.'
          }
        ]
      }
    }
  },
  {
    id: 'preservacion-vs-embriones',
    categoryKey: 'femenina',
    category: {
      es: 'Fertilidad Femenina & Planificación',
      en: 'Female Fertility & Planning'
    },
    title: {
      es: 'Preservación de Óvulos vs. Vitrificación de Embriones: ¿Cuál es la mejor opción para ti?',
      en: 'Egg Freezing vs. Embryo Vitrification: What is the Best Choice for You?'
    },
    subtitle: {
      es: 'Factores clave como edad reproductiva, estado civil, metas personales y estabilidad biológica para tomar una decisión médica informada.',
      en: 'Key factors including biological age, relationship status, personal goals, and cellular resilience to make an informed medical choice.'
    },
    date: {
      es: 'Julio 2026',
      en: 'July 2026'
    },
    readTime: {
      es: '5 min de lectura',
      en: '5 min read'
    },
    author: {
      name: 'Dra. Stephanie Lizmi Romano',
      role: {
        es: 'Especialista en Biología de la Reproducción Humana',
        en: 'Reproductive Endocrinology & Infertility Specialist'
      },
      avatar: '/imagenes/doctores/doctorasteph.jpg',
      specialty: {
        es: 'Ginecología, Obstetricia y Preservación de Fertilidad',
        en: 'Obstetrics, Gynecology & Fertility Preservation'
      },
      bio: {
        es: 'Especialista en medicina reproductiva y preservación de la fertilidad en mujeres en edad reproductiva y pacientes oncológicas.',
        en: 'Specialist in reproductive endocrinology, cryopreservation, and oncofertility.'
      }
    },
    imageSrc: '/imagenes/congelacion_ovulos.jpg',
    imageCaption: {
      es: 'Tanques criogénicos de nitrógeno líquido a -196 °C para vitrificación celular ultra-rápida.',
      en: 'Liquid nitrogen cryogenic tanks at -196 °C for ultra-rapid vitrification.'
    },
    snippet: {
      es: 'Factores clave como edad materna, reserva ovárica y metas de vida para tomar una decisión informada. La técnica de vitrificación ultra-rápida garantiza sobrevidas celulares superiores al 95%.',
      en: 'Key factors including maternal age, ovarian reserve, and life plans to make an informed decision. Ultra-rapid vitrification guarantees cellular survival rates exceeding 95%.'
    },
    tags: ['Preservación de Óvulos', 'Vitrificación', 'Planificación Familiar', 'Fertilidad'],
    keyTakeaways: {
      es: [
        'La vitrificación congela las células a -196 °C evitando la formación de cristales de hielo lesivos.',
        'Los óvulos congelados brindan autonomía reproductiva total a la mujer sin depender de una pareja o donante.',
        'Los embriones tienen tasas de descongelación ligeramente superiores pero requieren de una decisión reproductiva compartida.'
      ],
      en: [
        'Vitrification cools cells to -196 °C avoiding damaging ice crystals.',
        'Egg freezing offers complete reproductive independence to women without relying on partner sperm.',
        'Embryos show marginally higher thaw survival but require a shared joint reproductive commitment.'
      ]
    }
  },
  {
    id: 'seguridad-ri-witness',
    categoryKey: 'seguridad',
    category: {
      es: 'Seguridad & Laboratorio',
      en: 'Laboratory & Patient Safety'
    },
    title: {
      es: 'Seguridad RI Witness: Por qué la radiofrecuencia británica es crucial en laboratorios de FIV',
      en: 'RI Witness Safety: Why British RFID is Crucial in IVF Laboratories'
    },
    subtitle: {
      es: 'El sistema RFID pionero en México que realiza trazabilidad electrónica en cada placa y tubo de cultivo, erradicando cualquier margen de error humano.',
      en: 'Mexico’s premier RFID electronic witness tracking every culture dish and cryovial, eliminating human error.'
    },
    date: {
      es: 'Junio 2026',
      en: 'June 2026'
    },
    readTime: {
      es: '4 min de lectura',
      en: '4 min read'
    },
    author: {
      name: 'Equipo de Embriología CFA',
      role: {
        es: 'Laboratorio de Alta Complejidad CFA',
        en: 'CFA High-Complexity Embryology Laboratory'
      },
      avatar: '/imagenes/embriologa.jpg',
      specialty: {
        es: 'Embriología Clínica y Control de Calidad',
        en: 'Clinical Embryology & Quality Control'
      },
      bio: {
        es: 'Equipo multidisciplinario de embriólogos clínicos certificados bajo normas internacionales de trazabilidad y bioseguridad.',
        en: 'Multidisciplinary team of certified clinical embryologists adhering to international traceability standards.'
      }
    },
    imageSrc: '/imagenes/RIWITNESSCARRUSEL3.jpeg',
    imageCaption: {
      es: 'Lector RFID RI Witness en estación de trabajo de micromanipulación FIV.',
      en: 'RI Witness RFID workstation reader in IVF micromanipulation hood.'
    },
    snippet: {
      es: 'Descubre cómo funciona el sistema RFID pionero en México que realiza trazabilidad electrónica de cada tubo y placa de cultivo, eliminando cualquier margen de error o confusión humana.',
      en: 'Discover how the British RFID tracking system pioneers sample traceability across every tube and culture dish in Mexico, eliminating human error.'
    },
    tags: ['RI Witness', 'Seguridad Clínica', 'RFID', 'Laboratorio FIV'],
    keyTakeaways: {
      es: [
        'Cada paciente recibe una tarjeta RFID vinculada a sus gametos.',
        'Los lectores RFID en cada estación de trabajo del laboratorio bloquean el procedimiento si detectan muestras no correspondientes.',
        'Auditoría digital registrada al segundo en servidores seguros.'
      ],
      en: [
        'Every patient is assigned an encrypted RFID identity card linked to their samples.',
        'RFID readers at each workstation lock the workflow if incompatible samples are placed together.',
        'Second-by-second digital audit trail logged on secure servers.'
      ]
    }
  },
  {
    id: 'genetica-pgd-ngs',
    categoryKey: 'genetica',
    category: {
      es: 'Genética Reproductiva',
      en: 'Reproductive Genetics'
    },
    title: {
      es: 'Diagnóstico Genético Preimplantacional (PGT/NGS): Maximizando el éxito por transferencia',
      en: 'Preimplantation Genetic Testing (PGT/NGS): Maximizing Live Birth per Transfer'
    },
    subtitle: {
      es: 'Cómo la Secuenciación Masiva de Nueva Generación identifica embriones cromosómicamente sanos y reduce drásticamente las pérdidas gestacionales.',
      en: 'How Next-Generation Sequencing identifies chromosomally normal embryos, drastically reducing miscarriage risk.'
    },
    date: {
      es: 'Mayo 2026',
      en: 'May 2026'
    },
    readTime: {
      es: '6 min de lectura',
      en: '6 min read'
    },
    author: {
      name: 'Dra. Luisa Fernanda Mariscal Mendizabal',
      role: {
        es: 'Especialista en Medicina Reproductiva y Genética',
        en: 'Reproductive Medicine & Genetics Specialist'
      },
      avatar: '/imagenes/doctores/drnavarro.jpg',
      specialty: {
        es: 'Biología de la Reproducción y Genética Embrionaria',
        en: 'Reproductive Biology & Embryo Genetics'
      },
      bio: {
        es: 'Especialista en diagnóstico genético embrionario y tratamientos de alta complejidad en el Centro Médico ABC.',
        en: 'Specialist in embryo genetics and high-complexity IVF at ABC Medical Center.'
      }
    },
    imageSrc: '/imagenes/diagnostico_genetico.jpg',
    imageCaption: {
      es: 'Biopsia de trofoectodermo realizada con micro-láser en estadio de blastocisto día 5.',
      en: 'Day 5 blastocyst trophectoderm biopsy performed using precision micro-laser.'
    },
    snippet: {
      es: 'La biopsia de trofoectodermo analizada mediante Secuenciación de Nueva Generación identifica embriones cromosómicamente euploides, reduciendo drásticamente el riesgo de pérdida gestacional.',
      en: 'Trophectoderm biopsy analyzed via Next-Generation Sequencing identifies euploid embryos, dramatically reducing pregnancy loss risks.'
    },
    tags: ['PGT-A', 'Genética', 'NGS', 'Aneuploidías', 'FIV'],
    keyTakeaways: {
      es: [
        'Se biopsian células del trofoectodermo (futura placenta), protegiendo intacta la masa celular interna (futuro bebé).',
        'Detecta alteraciones como el Síndrome de Down (Trisomía 21) antes de la transferencia.',
        'Maximiza la tasa de implantación por transferencia por encima del 65-70%.'
      ],
      en: [
        'Trophectoderm cells (future placenta) are biopsied, leaving the inner cell mass (future fetus) untouched.',
        'Screens for conditions such as Trisomy 21 prior to transfer.',
        'Elevates clinical live-birth rates per transfer beyond 65-70%.'
      ]
    }
  }
];

export function getBlogPostById(id: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.id === id);
}

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}
