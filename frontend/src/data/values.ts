export interface ValueData {
  title: string;
  subtitle: string;
  description: string;
  environmentalPoints?: string[];
  badge?: string;
}

export interface ClinicValue {
  id: string;
  iconName: string;
  es: ValueData;
  en: ValueData;
}

export const CLINIC_VALUES: ClinicValue[] = [
  {
    id: "apoyo-holistico",
    iconName: "HeartHandshake",
    es: {
      title: "Apoyo Holístico",
      subtitle: "Atención integral médica, biológica y emocional",
      description: "Ofrecer una atención integral, que tome en cuenta el estado emocional que vive la pareja, entender su situación biológica, comprender sus problemas reproductivos y proveer las mejores prácticas medicas apoyadas en la ciencia y tecnología de punta para ayudarlos a vencer los obstáculos presentes y lograr un embarazo.",
      badge: "Integral"
    },
    en: {
      title: "Holistic Support",
      subtitle: "Integrated medical, biological, and emotional care",
      description: "Providing comprehensive care that accounts for the emotional state of the couple, understanding their biological situation, grasping their reproductive challenges, and delivering the best medical practices backed by science and cutting-edge technology.",
      badge: "Comprehensive"
    }
  },
  {
    id: "planeacion",
    iconName: "ClipboardCheck",
    es: {
      title: "Planeación",
      subtitle: "Educación médica continua y planes individualizados",
      description: "La planeación inicia con el perfil del personal que labora en la Clínica y la educación médica continua que se les brinda. Enfermeras, biólogas, embriólogas y doctores están en un proceso constante de educación médica continua. En cuanto a los tratamientos vale la pena decir que se individualizan de acuerdo con las necesidades de cada caso y en base a los diagnósticos individuales se genera un plan terapéutico de acuerdo con cada pareja.",
      badge: "Personalización"
    },
    en: {
      title: "Planning",
      subtitle: "Continuing medical education and customized therapeutic plans",
      description: "Planning begins with our staff's credentials and ongoing medical education. Treatments are strictly individualized according to diagnostic findings for each couple.",
      badge: "Tailored"
    }
  },
  {
    id: "calidad-humana",
    iconName: "UserCheck",
    es: {
      title: "Calidad Humana",
      subtitle: "Trato cálido y apoyo psicológico especializado",
      description: "El trato cálido, cuidadoso y personalizado es una característica que constantemente inculcamos en nuestro personal. El ser humano es perfectible y contamos con un esfuerzo permanente para lograr la excelencia en la calidez del trato a nuestros pacientes. Tomando en consideración la fragilidad emocional que viven algunas de las parejas que acuden a nuestra Clínica, existe un servicio de psicología que se encarga de brindar ese apoyo cuando se solicita o se recomienda por parte del cuerpo médico.",
      badge: "Calidez"
    },
    en: {
      title: "Human Quality",
      subtitle: "Warm care and dedicated psychological counseling",
      description: "Warm, attentive, and personalized care is permanently cultivated in our team. A dedicated psychological support service is available whenever needed.",
      badge: "Compassion"
    }
  },
  {
    id: "trato-personalizado",
    iconName: "ShieldCheck",
    es: {
      title: "Trato Personalizado",
      subtitle: "Enfermera dedicada, médico senior y sistema RI Witness",
      description: "Cada paciente tendrá una enfermera a su cargo, cada paciente cuenta con un médico con más de 6 años de laborar con nosotros para contactarla y resolver cualquier duda sobre su caso. En la Clínica contamos además con una vigilancia electrónica (los primeros en el país) de óvulos, esperma y embriones para brindar la tranquilidad y seguridad de proteger la integridad de este material valioso de cada persona. Es un sistema británico de seguridad en el laboratorio de Reproducción Asistida llamado \"RI Witness\".",
      badge: "RI Witness"
    },
    en: {
      title: "Personalized Care",
      subtitle: "Dedicated nurse, senior doctor, and RI Witness electronic security",
      description: "Every patient has an assigned nurse and an experienced physician. We were the first in Mexico to implement the British RI Witness electronic RFID surveillance system for maximum gamete and embryo safety.",
      badge: "RI Witness"
    }
  },
  {
    id: "innovacion",
    iconName: "Microscope",
    es: {
      title: "Innovación",
      subtitle: "Vínculos permanentes con líderes internacionales",
      description: "Desde sus inicios, la CFA se ha caracterizado por contar con el apoyo de médicos de prestigio mundial en el campo de la reproducción. Con ellos compartimos constantemente protocolos, decisiones y opiniones sobre casos específicos, la aplicación de nuevas tecnologías, y por supuesto, el esfuerzo permanente para brindar mejores resultados para nuestras pacientes. Los doctores Richard P. Marrs, Zev Rosenwaks, Issac Kligman y Bronte Stone son algunos de nuestros colegas cercanos con quienes estamos en frecuente comunicación.",
      badge: "Innovación"
    },
    en: {
      title: "Innovation",
      subtitle: "Continuous collaboration with world leaders in reproduction",
      description: "Since inception, CFA has collaborated with world-renowned leaders including Dr. Richard P. Marrs, Dr. Zev Rosenwaks, Dr. Isaac Kligman, and Dr. Bronte Stone to optimize protocols and clinical success.",
      badge: "Innovation"
    }
  },
  {
    id: "responsabilidad-social",
    iconName: "HandHeart",
    es: {
      title: "Responsabilidad Social",
      subtitle: "Apoyo a población vulnerable y educación médica en Oaxaca",
      description: "Tenemos un compromiso permanente con la población más desfavorecida de nuestra sociedad. En ese sentido se atiende a diferentes parejas que califican para recibir algunos apoyos. Es importante señalar que estos son únicamente para personas en situación económica precaria y NO para el público en general. Aportamos tiempo, ideas y proyectos para fomentar la educación médica continua sobre todo en el estado de Oaxaca desde el Patronato de la Fundación Asociación Médica para la Salud (AMSA) y con el apoyo de la Fundación Alfredo Harp Helú.",
      badge: "Impacto Social"
    },
    en: {
      title: "Social Responsibility",
      subtitle: "Support for vulnerable populations and medical education in Oaxaca",
      description: "We maintain an ongoing commitment to underserved communities through selective support programs and advance medical education in Oaxaca via AMSA Foundation and Alfredo Harp Helú Foundation.",
      badge: "Social Impact"
    }
  },
  {
    id: "equidad-talento",
    iconName: "Award",
    es: {
      title: "Porque el Talento no Entiende Géneros",
      subtitle: "90% de nuestro equipo profesional son mujeres",
      description: "Es evidente por la naturaleza de nuestro trabajo que estamos convencidos del papel relevante de la mujer en todos los ámbitos de la vida moderna. Es importante mencionar que en la Clínica laboramos cerca de 30 personas, de las cuales 90% pertenecen al género femenino.",
      badge: "90% Mujeres"
    },
    en: {
      title: "Talent Knows No Gender",
      subtitle: "90% of our clinical and laboratory team are women",
      description: "We firmly believe in the crucial role of women in modern medicine. Out of nearly 30 staff members at our clinic, 90% are women.",
      badge: "90% Women"
    }
  },
  {
    id: "medio-ambiente",
    iconName: "Leaf",
    es: {
      title: "Respeto al Medio Ambiente",
      subtitle: "Compromiso ecológico y sustentabilidad clínica",
      description: "Tenemos el compromiso nada fácil de sumarnos a la tarea de hacer los esfuerzos necesarios para lograr un mundo con un medio ambiente más limpio. Los cambios climáticos, el calentamiento global, el uso excesivo de plásticos de todo tipo son algunos de los problemas que enfrenta nuestro planeta. La Clínica, está trabajando en tres áreas para sumarnos a este esfuerzo por mejorar nuestro medio ambiente:",
      environmentalPoints: [
        "Para el año 2023 eliminar por completo el uso de papel y proteger así nuestros bosques. Convirtiendo todos los reportes, requisiciones y demás indicaciones y protocolos a la forma electrónica.",
        "Estamos en pláticas con el Hospital para cambiar el tipo de luminarias que hoy se utilizan por una iluminación moderna de bajo wataje y así cooperar a disminuir el calentamiento global.",
        "El material que ocupamos en los tratamientos de inseminación intrauterina y fertilización in vitro es de plástico, esta esterilizado y se importa cada pieza en envolturas también de plástico. Todo es desechable ya que el tipo de procedimiento es estéril. Estamos en contacto con dos empresas en Norteamérica las cuales están intentando innovar con otro tipo de instrumentos que puedan avanzar a ser reciclables con el fin de disminuir el consumo de plásticos."
      ],
      badge: "Sustentabilidad"
    },
    en: {
      title: "Respect for the Environment",
      subtitle: "Ecological responsibility and clinical sustainability",
      description: "We are actively committed to reducing our environmental footprint across three key fronts:",
      environmentalPoints: [
        "Transitioning all medical records, requisitions, and protocols to 100% paperless electronic format to protect forests.",
        "Coordinating with the Hospital to adopt low-wattage energy-efficient modern lighting.",
        "Partnering with North American medical suppliers to advance toward recyclable, sterile procedural instruments to decrease single-use plastics."
      ],
      badge: "Sustainability"
    }
  }
];

export const VALUES = CLINIC_VALUES;
