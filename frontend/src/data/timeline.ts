export interface TimelineEventData {
  title: string;
  description: string;
  badge?: string;
}

export interface TimelineEvent {
  year: string;
  badge?: string;
  imageSrc?: string;
  es: TimelineEventData;
  en: TimelineEventData;
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "1985",
    imageSrc: "/imagenes/1985.jpg",
    es: {
      title: "Abre la 1ª Clínica de Fertilidad en México",
      description: "Abre la 1ª Clínica de Fertilidad en México, iniciando un camino pionero en la reproducción asistida con los más altos estándares científicos y éticos.",
    },
    en: {
      title: "First Fertility Clinic in Mexico Opens",
      description: "Opening of the 1st Fertility Clinic in Mexico, pioneering modern assisted reproduction with highest scientific and ethical standards."
    }
  },
  {
    year: "1987",
    imageSrc: "/imagenes/1987.jpg",
    es: {
      title: "Primer embarazo de GIFT",
      description: "Primer embarazo de GIFT (Transferencia Intratubaria de Gametos) en México, marcando un avance clave en la medicina reproductiva nacional.",
    },
    en: {
      title: "First GIFT Pregnancy in Mexico",
      description: "First GIFT (Gamete Intrafallopian Transfer) pregnancy in Mexico, marking a major milestone in Mexican reproductive medicine."
    }
  },
  {
    year: "1991",
    badge: "Hito Histórico",
    imageSrc: "/imagenes/1991.jpg",
    es: {
      title: "Primer nacimiento de FIV en México",
      description: "Primer nacimiento de FIV en México. El Dr. Carlos Navarro formó parte fundamental del equipo médico que logró este histórico acontecimiento.",
      badge: "Hito Histórico"
    },
    en: {
      title: "First IVF Birth in Mexico",
      description: "First IVF birth achieved in Mexico. Dr. Carlos Navarro was a key member of the medical team accomplishing this historic milestone.",
      badge: "Historic Milestone"
    }
  },
  {
    year: "1994",
    imageSrc: "/imagenes/1994.jpg",
    es: {
      title: "Dr. Carlos Navarro sale de la Clínica AGN y Asoc.",
      description: "Dr. Carlos Navarro sale de la Clínica AGN y Asoc. para fundar el grupo multidisciplinario que hoy constituye la Clínica de Fertilización Asistida.",
    },
    en: {
      title: "Founding of CFA Multidisciplinary Group",
      description: "Dr. Carlos Navarro departs AGN & Assoc. to establish the dedicated multidisciplinary team comprising the CFA today."
    }
  },
  {
    year: "1999",
    imageSrc: "/imagenes/1999.jpg",
    es: {
      title: "Dr. Carlos Navarro inaugura la CFA a un costado ABC Obs",
      description: "Dr. Carlos Navarro inaugura la CFA a un costado ABC Obs (Av. Observatorio, Ciudad de México), logrando el primer embarazo FIV propio ese mismo año.",
    },
    en: {
      title: "Inauguration of CFA at ABC Observatorio Annex",
      description: "Dr. Carlos Navarro inaugurates the CFA adjacent to ABC Observatorio in Mexico City, achieving its first clinic IVF pregnancy."
    }
  },
  {
    year: "2000",
    badge: "Campus Observatorio",
    imageSrc: "/imagenes/2000.jpg",
    es: {
      title: "1er Nacido Vivo en nuestra Clínica, Campus Observatorio.",
      description: "1er Nacido Vivo en nuestra Clínica, Campus Observatorio. Celebración del nacimiento del primer bebé concebido íntegramente en las instalaciones propias de la CFA.",
      badge: "Campus Observatorio"
    },
    en: {
      title: "1st Live Birth at Our Clinic, Observatorio Campus.",
      description: "1st Live Birth at our Clinic, Observatorio Campus. Celebrating the first baby conceived entirely within CFA's own laboratory and clinical facilities.",
      badge: "Observatorio Campus"
    }
  },
  {
    year: "2005",
    imageSrc: "/imagenes/2005.jpg",
    es: {
      title: "CMABC y CNM inician proyecto en Santa Fe",
      description: "CMABC y CNM inician proyecto en Santa Fe para diseñar y construir un centro de reproducción asistida de vanguardia internacional.",
    },
    en: {
      title: "ABC & CNM Begin Santa Fe Campus Project",
      description: "ABC Medical Center and Dr. Carlos Navarro initiate the master project for the new state-of-the-art center in Santa Fe."
    }
  },
  {
    year: "2009",
    imageSrc: "/imagenes/2009.jpg",
    es: {
      title: "Inauguración CFA en el CMABC por el Dr. Zev Rosenwaks",
      description: "Inauguración CFA en el CMABC por el Dr. Zev Rosenwaks, Director del Ronald O. Perelman and Claudia Cohen Center for Reproductive Medicine de Weill Cornell Medical College.",
    },
    en: {
      title: "Inauguration at ABC Santa Fe by Dr. Zev Rosenwaks",
      description: "Official opening of the CFA at ABC Santa Fe by Dr. Zev Rosenwaks, Director of the Perelman & Cohen Center at Cornell Medicine."
    }
  },
  {
    year: "2010",
    badge: "Sede Santa Fe",
    imageSrc: "/imagenes/2010.jpg",
    es: {
      title: "1er Nacimiento en la Clínica en el ABC - Santa Fe",
      description: "1er Nacimiento en la Clínica en el ABC - Santa Fe. Gran hito con el primer recién nacido en las instalaciones de alta especialidad de Santa Fe.",
      badge: "Sede Santa Fe"
    },
    en: {
      title: "1st Baby Born at ABC Santa Fe Campus",
      description: "1st Birth at the Clinic in ABC - Santa Fe. Major milestone with the first live birth achieved at our Santa Fe high-complexity campus.",
      badge: "Santa Fe Campus"
    }
  },
  {
    year: "2014",
    imageSrc: "/imagenes/tratamientos/diagnosticogenetico.jpg",
    es: {
      title: "Iniciamos nuestro programa de Diagnóstico genético de preimplantación.",
      description: "Iniciamos nuestro programa de Diagnóstico genético de preimplantación (PGT-A / PGT-M), permitiendo seleccionar embriones cromosómicamente sanos y prevenir enfermedades genéticas hereditarias.",
    },
    en: {
      title: "Launch of Preimplantation Genetic Testing (PGT)",
      description: "We launched our Preimplantation Genetic Testing program (PGT-A / PGT-M), enabling precise genetic screening and high implantation rates."
    }
  },
  {
    year: "2019",
    badge: "RI INTEGRA",
    imageSrc: "/imagenes/micromanipulador.jpg",
    es: {
      title: "Adquirimos la mejor plataforma de micro manipulación RI INTEGRA",
      description: "Adquirimos la mejor plataforma de micro manipulación RI INTEGRA, asegurando máxima precisión celular en ICSI y procedimientos de biopsia embrionaria.",
      badge: "RI INTEGRA"
    },
    en: {
      title: "Acquisition of RI INTEGRA Micromanipulation Platform",
      description: "We acquired the state-of-the-art RI INTEGRA micromanipulation platform for maximum precision in ICSI and embryo biopsy procedures.",
      badge: "RI INTEGRA"
    }
  },
  {
    year: "2020",
    badge: "Seguridad RI Witness",
    imageSrc: "/imagenes/2020TL.jpeg",
    es: {
      title: "Comenzamos a utilizar la plataforma RI WITNESS seguridad y vigilancia de los gametos.",
      description: "Comenzamos a utilizar la plataforma RI WITNESS seguridad y vigilancia de los gametos con tecnología RFID para trazabilidad total de muestras biológicas.",
      badge: "Seguridad RI Witness"
    },
    en: {
      title: "Implementation of RI WITNESS Electronic Security & Gamete Surveillance",
      description: "We began using the RI WITNESS platform for RFID electronic security, continuous surveillance, and absolute traceability of all gametes and embryos.",
      badge: "RI Witness Security"
    }
  },
  {
    year: "2022",
    badge: "Inteligencia Artificial",
    imageSrc: "/imagenes/kpi/diagrama-ia-ml-genetica.png",
    es: {
      title: "Comenzamos a implementar tecnología avanzadas como machine learning e inteligencia artificial a nuestro trabajo diario.",
      description: "Comenzamos a implementar tecnologías avanzadas como machine learning e inteligencia artificial a nuestro trabajo diario. Integración de algoritmos predictivos para optimizar la selección embrionaria.",
      badge: "Inteligencia Artificial"
    },
    en: {
      title: "Integration of Machine Learning & AI in Clinical Practice",
      description: "We began implementing advanced technologies such as machine learning and artificial intelligence in our daily workflow to optimize embryo selection.",
      badge: "Artificial Intelligence"
    }
  },
  {
    year: "2024",
    badge: "Timelapse 24/7",
    imageSrc: "/imagenes/incubadoratimelapse.jpg",
    es: {
      title: "Avanzamos con el uso de time lapse en nuestro laboratorio para un mejor control de desarrollo embrionario.",
      description: "Avanzamos con el uso de time lapse en nuestro laboratorio para un mejor control de desarrollo embrionario. Monitoreo morfocinético continuo 24/7 sin perturbar el microambiente embrionario.",
      badge: "Timelapse 24/7"
    },
    en: {
      title: "Continuous Timelapse Embryo Monitoring Incubator",
      description: "We advanced with the use of timelapse in our laboratory for continuous morphokinetic monitoring and optimal embryo development.",
      badge: "Timelapse 24/7"
    }
  }
];

