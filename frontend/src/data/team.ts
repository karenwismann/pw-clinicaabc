export interface DoctorData {
  role: string;
  specialty: string;
  brief: string;
  fullBio: string[];
  education?: string[];
  achievements?: string[];
}

export interface Doctor {
  id: string;
  name: string;
  imageSrc: string;
  curriculumImageSrc?: string;
  isLeadership?: boolean;
  es: DoctorData;
  en: DoctorData;
}

export interface SpecialistGroup {
  id: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  linkUrl?: string;
  linkText?: { es: string; en: string };
  members: { name: string; title?: { es: string; en: string } }[];
}

export const DOCTORS: Doctor[] = [
  {
    id: "dr-carlos-navarro",
    name: "Dr. Carlos Navarro Martínez",
    imageSrc: "/imagenes/doctores/doctorcarlos1.jpg",
    curriculumImageSrc: "/imagenes/doctores/doctorcarlos-desglosecurriculum.jpg",
    isLeadership: true,
    es: {
      role: "Director",
      specialty: "Ginecología, Obstetricia y Biología de la Reproducción Humana",
      brief: "Con más de 35 años de experiencia en reproducción humana, nuestro director formó parte del equipo que logro el nacimiento del 1er bebe de Fertilización in Vitro en México en el año 1991. Dirige la Clínica de Fertilización Asistida desde 1999.",
      fullBio: [
        "Con más de 35 años de experiencia en reproducción humana, nuestro director formó parte del equipo que logro el nacimiento del 1er bebe de Fertilización in Vitro en México en el año 1991. Dirige la Clínica de Fertilización Asistida desde 1999.",
        "Egresado de la Universidad La Salle de la Ciudad de México con internado rotatorio de pregrado en el prestigioso Hospital ABC (Hospital Inglés) en 1979-1980.",
        "Nace profesionalmente de la mano del Dr. Alfonso Gutiérrez Najar, su mentor y pionero de la infertilidad en México, trabajando a su lado entre 1980 y 1987.",
        "En los años 1988 y 1989 el Dr. Navarro realiza sus estudios de postgrado en el Women's Hospital of Texas, avalado por la Universidad Baylor College of Medicine, teniendo como jefe directo al Dr. Robert Franklin, ícono de la infertilidad en aquella época.",
        "En el año 1990 - 91 en el Hospital Greater Baltimore Medical Center realiza su entrenamiento en Reproducción Asistida bajo la tutela del Dr. Jairo García, miembro del equipo en donde nace el primer bebé de Fertilización in Vitro (FIV) en Norteamérica.",
        "En 1991 forma parte del equipo que logra el primer nacimiento de FIV en México.",
        "En 1999 inicia la construcción de la CFA original en un edificio anexo al Hospital ABC en Av. Observatorio en la Ciudad de México. Por motivos de la expansión del Centro Médico ABC (CMABC) en el año 2008 se inicia la construcción de la CFA en el sitio que hoy ocupamos en el CMABC, Campus Santa Fe."
      ],
      education: [
        "Médico Cirujano - Universidad La Salle (CDMX)",
        "Internado Rotatorio de Pregrado - Hospital ABC (1979-1980)",
        "Especialidad en Ginecología y Obstetricia",
        "Subespecialidad en Infertilidad y Microcirugía - Texas Women's Hospital / Baylor College of Medicine",
        "Fellowship en Reproducción Asistida - Greater Baltimore Medical Center"
      ],
      achievements: [
        "Co-artífice del 1er Nacimiento de FIV en México (1991)",
        "Pionero del sistema británico RI Witness en México",
        "Director Fundador de CFA en Centro Médico ABC"
      ]
    },
    en: {
      role: "Director",
      specialty: "Gynecology, Obstetrics & Human Reproductive Biology",
      brief: "With over 35 years of experience in human reproduction, our director was part of the medical team that achieved the 1st IVF live birth in Mexico in 1991. He has directed the Assisted Fertilization Clinic since 1999.",
      fullBio: [
        "With over 35 years of experience in human reproduction, our director was part of the medical team that achieved the 1st IVF live birth in Mexico in 1991. He has directed the Assisted Fertilization Clinic since 1999.",
        "Graduate of La Salle University School of Medicine with residency at ABC Hospital (1979-1980).",
        "Mentored by Dr. Alfonso Gutiérrez Najar, pioneer of infertility medicine in Mexico (1980-1987).",
        "Completed fellowship training at the Women's Hospital of Texas affiliated with Baylor College of Medicine under Dr. Robert Franklin (1988-1989).",
        "Assisted Reproduction fellowship at Greater Baltimore Medical Center under Dr. Jairo García (1990-1991), member of the landmark first North American IVF team.",
        "In 1991, part of the team achieving the 1st IVF birth in Mexico.",
        "Inaugurated CFA at ABC Hospital Observatorio (1999) and the high-tech center at ABC Medical Center Santa Fe Campus (2008-2010)."
      ],
      education: [
        "M.D. - La Salle University School of Medicine",
        "Residency - ABC Hospital (1979-1980)",
        "Obstetrics & Gynecology Specialty",
        "Infertility & Micro-surgery Fellowship - Texas Women's Hospital / Baylor College of Medicine",
        "Assisted Reproduction Fellowship - Greater Baltimore Medical Center"
      ],
      achievements: [
        "Co-pioneer of 1st IVF Birth in Mexico (1991)",
        "Pioneered British RI Witness RFID Electronic Security in Mexico",
        "Founder & Medical Director of CFA at ABC Medical Center"
      ]
    }
  },
  {
    id: "dra-stephanie-lizmi",
    name: "Dra. Stephanie Lizmi Romano",
    imageSrc: "/imagenes/doctores/doctorasteph.jpg",
    es: {
      role: "Coordinadora del Área Médica & Coach de la Fertilidad",
      specialty: "Ginecología, Reproducción Humana Asistida y Coaching de Fertilidad",
      brief: "Médico Cirujano (Universidad Anáhuac). Coordinadora del Área Médica de la CFA en el Centro Médico ABC y Coach de la Fertilidad, acompañando a las pacientes durante todo su proceso.",
      fullBio: [
        "Médico Cirujano egresada de la Facultad de Ciencias de la Salud de la Universidad Anáhuac México Norte.",
        "Maestría en Ciencias Médicas en la Universidad Anáhuac México Norte en proceso de titulación.",
        "Maestría en Reproducción Humana Asistida en la Universidad Europea del Atlántico, España, en proceso de titulación.",
        "Actualmente se desempeña como Coordinadora del Área Médica de la Clínica de Fertilización Asistida en el Centro Médico ABC y Coach de la Fertilidad, acompañando a las pacientes durante todo su proceso.",
        "Certified Fertility Coach by The Brilliant Birth Academy."
      ],
      education: [
        "Médico Cirujano - Facultad de Ciencias de la Salud, Universidad Anáhuac México Norte",
        "Maestría en Ciencias Médicas - Universidad Anáhuac México Norte (en proceso de titulación)",
        "Maestría en Reproducción Humana Asistida - Universidad Europea del Atlántico, España (en proceso de titulación)",
        "Certified Fertility Coach - The Brilliant Birth Academy"
      ],
      achievements: [
        "Coordinadora del Área Médica en CFA Centro Médico ABC",
        "Certified Fertility Coach Internacional",
        "Acompañamiento médico y emocional integral en tratamientos FIV"
      ]
    },
    en: {
      role: "Medical Area Coordinator & Fertility Coach",
      specialty: "Gynecology, Assisted Human Reproduction & Fertility Coaching",
      brief: "Medical Surgeon (Anáhuac University). Medical Area Coordinator at CFA ABC Medical Center and Certified Fertility Coach guiding patients throughout their entire journey.",
      fullBio: [
        "Medical Surgeon graduate from the Faculty of Health Sciences at Universidad Anáhuac México Norte.",
        "Master's Degree in Medical Sciences at Universidad Anáhuac México Norte (in degree completion).",
        "Master's Degree in Assisted Human Reproduction at Universidad Europea del Atlántico, Spain (in degree completion).",
        "Currently serves as Medical Area Coordinator of the Assisted Fertilization Clinic at ABC Medical Center and Fertility Coach, guiding patients throughout their treatment.",
        "Certified Fertility Coach by The Brilliant Birth Academy."
      ],
      education: [
        "Medical Surgeon - School of Health Sciences, Universidad Anáhuac México Norte",
        "Master in Medical Sciences - Universidad Anáhuac México Norte",
        "Master in Assisted Human Reproduction - Universidad Europea del Atlántico, Spain",
        "Certified Fertility Coach - The Brilliant Birth Academy"
      ],
      achievements: [
        "Medical Area Coordinator at CFA ABC Medical Center",
        "International Certified Fertility Coach",
        "Comprehensive clinical and emotional patient advocacy in IVF"
      ]
    }
  },
  {
    id: "dr-jorge-rodriguez-purata",
    name: "Dr. Jorge Rodríguez Purata",
    imageSrc: "/imagenes/doctores/dr_jorge.jpg",
    es: {
      role: "Director Científico",
      specialty: "Ginecología, Endocrinología Ginecológica e Infertilidad",
      brief: "Director Científico de la CFA. Ex-médico adjunto y jefe de Endocrinología Ginecológica en Instituto Universitario Dexeus (Barcelona) y fellowship en Mount Sinai (Nueva York).",
      fullBio: [
        "Completó su residencia en Ginecología y Obstetricia en el Hospital Ángeles de las Lomas y realizó un fellowship en Endocrinología Ginecológica e Infertilidad en el Hospital de Mount Sinai, en la ciudad de Nueva York, en Estados Unidos.",
        "Durante 7 años, fue médico adjunto del Servicio de Medicina de la Reproducción, así como 3 años jefe de la división de Endocrinología Ginecológica del Servicio de Medicina de la Reproducción del Instituto Universitario Dexeus, en Barcelona, España.",
        "Ex-diputado senior del grupo de interés especial sobre Implantación y Embarazo Temprano de la Sociedad Europea de Reproducción Humana y Embriología (ESHRE).",
        "Profesor adjunto de la residencia en Ginecología y Obstetricia del Centro Médico ABC, en CDMX.",
        "Actualmente se desempeña como Director Científico de la Clínica de Fertilización Asistida en el Centro Médico ABC."
      ],
      education: [
        "Residencia en Ginecología y Obstetricia - Hospital Ángeles de las Lomas",
        "Fellowship en Endocrinología Ginecológica e Infertilidad - The Mount Sinai Hospital, Nueva York (EE. UU.)",
        "Médico Adjunto y Jefe de Endocrinología Ginecológica - Instituto Universitario Dexeus, Barcelona (España)",
        "Profesor Adjunto de Residencia en Ginecología y Obstetricia - Centro Médico ABC"
      ],
      achievements: [
        "Director Científico de la Clínica de Fertilización Asistida ABC",
        "Ex-Diputado Senior ESHRE (Sociedad Europea de Reproducción Humana y Embriología)",
        "Autor de múltiples publicaciones científicas internacionales de alto impacto"
      ]
    },
    en: {
      role: "Scientific Director",
      specialty: "Gynecology, Reproductive Endocrinology & Infertility",
      brief: "Scientific Director of CFA. Former attending physician and Head of Gynecological Endocrinology at Dexeus University Institute (Barcelona) and fellowship at Mount Sinai (NYC).",
      fullBio: [
        "Completed his residency in Obstetrics & Gynecology at Hospital Ángeles de las Lomas and completed a clinical fellowship in Gynecological Endocrinology and Infertility at The Mount Sinai Hospital in New York City, USA.",
        "For 7 years, served as attending physician in the Department of Reproductive Medicine, and for 3 years as Head of the Gynecological Endocrinology Division at Instituto Universitario Dexeus in Barcelona, Spain.",
        "Former Senior Deputy of the Special Interest Group on Implantation and Early Pregnancy of the European Society of Human Reproduction and Embryology (ESHRE).",
        "Adjunct Professor for the Obstetrics & Gynecology Residency Program at ABC Medical Center in Mexico City.",
        "Currently serves as Scientific Director of the Assisted Fertilization Clinic at ABC Medical Center."
      ],
      education: [
        "Obstetrics & Gynecology Residency - Hospital Ángeles de las Lomas",
        "Gynecological Endocrinology & Infertility Fellowship - Mount Sinai Hospital, New York",
        "Attending & Head of Gynecological Endocrinology - Instituto Universitario Dexeus, Barcelona",
        "Adjunct Professor - ABC Medical Center OB/GYN Residency"
      ],
      achievements: [
        "Scientific Director at CFA ABC Medical Center",
        "Former Senior Deputy at ESHRE",
        "Author of numerous high-impact international scientific publications"
      ]
    }
  },
  {
    id: "dr-fernando-galvan",
    name: "Dr. Fernando Galván Duque Rivero",
    imageSrc: "/imagenes/doctores/doctorfernando.webp",
    es: {
      role: "Especialista en Cirugía Reproductiva",
      specialty: "Ginecología, Laparoscopia y Cirugía Reproductiva",
      brief: "Experto en microcirugía endoscópica, histeroscopía de alta resolución y optimización de cavidad uterina y lecho endometrial en el Centro Médico ABC.",
      fullBio: [
        "Especialista con amplia trayectoria en cirugía laparoscópica e histeroscópica diagnóstica y operatoria en quirófanos de alta tecnología del Centro Médico ABC.",
        "Enfocado en la resolución de miomas uterinos, endometriosis profunda, pólipos endometriales y adherencias pélvicas para optimizar el lecho de implantación embrionaria.",
        "Miembro distinguido del cuerpo médico de la Clínica de Fertilización Asistida en Santa Fe."
      ],
      education: [
        "Médico Cirujano Especialista en Ginecología y Obstetricia",
        "Entrenamiento Quirúrgico Avanzado en Laparoscopia e Histeroscopía Pélvica",
        "Certificación vigente por el Consejo Mexicano de Ginecología y Obstetricia"
      ],
      achievements: [
        "Especialista en cirugía reproductiva mínimamente invasiva",
        "Cirujano acreditado en suites quirúrgicas del Centro Médico ABC"
      ]
    },
    en: {
      role: "Reproductive Surgery Specialist",
      specialty: "Gynecology, Laparoscopy & Reproductive Surgery",
      brief: "Expert in endoscopic microsurgery, high-definition hysteroscopy, and uterine cavity optimization at ABC Medical Center.",
      fullBio: [
        "Specialist with extensive surgical mastery in diagnostic and operative hysteroscopy and laparoscopy at ABC Medical Center.",
        "Dedicated to the surgical treatment of uterine fibroids, severe endometriosis, polyps, and pelvic adhesions to maximize implantation rates.",
        "Key member of the surgical and clinical reproductive faculty at ABC Santa Fe.",
      ],
      education: [
        "Medical Doctor with Specialty in Obstetrics & Gynecology",
        "Advanced Fellowship in Pelvic Endoscopy & Minimally Invasive Surgery",
        "Board Certified Reproductive Surgeon"
      ],
      achievements: [
        "Specialist in minimally invasive reproductive surgery",
        "Accredited surgeon at ABC Medical Center surgical suites"
      ]
    }
  },
  {
    id: "dra-tanya-montanez",
    name: "Dra. Tanya I. Montañez Díaz de León",
    imageSrc: "/imagenes/doctores/doctoratanya.webp",
    es: {
      role: "Especialista en Reproducción Asistida",
      specialty: "Ginecología y Biología de la Reproducción",
      brief: "Especialista en estimulación ovárica personalizada, fertilización in vitro de alta complejidad y preservación de la fertilidad en el Centro Médico ABC.",
      fullBio: [
        "Médica especialista con destacada trayectoria clínica en biología de la reproducción humana y endocrinología ginecológica.",
        "Experta en protocolos individualizados para pacientes con baja reserva ovárica, fallos de implantación previos y preservación ovocitaria por vitrificación.",
        "Lidera consultas de alta especialidad y seguimiento integral de ciclos FIV en el Centro Médico ABC Campus Santa Fe con un enfoque profundamente humano y empático."
      ],
      education: [
        "Médica Cirujana con Especialidad en Ginecología y Obstetricia",
        "Alta Especialidad en Biología de la Reproducción Humana",
        "Certificada por el Consejo Mexicano de Ginecología y Obstetricia"
      ],
      achievements: [
        "Especialista en protocolos de estimulación ovárica personalizada",
        "Miembro activo del cuerpo médico de la CFA en Centro Médico ABC"
      ]
    },
    en: {
      role: "Assisted Reproduction Specialist",
      specialty: "Gynecology & Reproductive Biology",
      brief: "Specialist in personalized ovarian stimulation, high-complexity IVF, and fertility preservation at ABC Medical Center.",
      fullBio: [
        "Specialist with distinguished clinical expertise in human reproductive endocrinology and assisted reproduction.",
        "Expert in individualized protocols for patients with diminished ovarian reserve, recurrent implantation failure, and egg freezing.",
        "Provides comprehensive high-specialty care and empathetic monitoring of IVF cycles at ABC Medical Center Santa Fe."
      ],
      education: [
        "Medical Doctor with Specialty in Obstetrics & Gynecology",
        "Subspecialty in Human Reproductive Biology",
        "Board Certified by the Mexican Council of Gynecology & Obstetrics"
      ],
      achievements: [
        "Specialist in personalized ovarian stimulation protocols",
        "Active faculty member at CFA ABC Medical Center Santa Fe"
      ]
    }
  },
  {
    id: "dr-gonzalo-eugui",
    name: "Dr. Gonzalo Eugui Velázquez",
    imageSrc: "/imagenes/doctores/dr_gonzalo.jpg",
    es: {
      role: "Especialista en Reproducción Humana",
      specialty: "Ginecología, Obstetricia y Biología de la Reproducción",
      brief: "Especialista en medicina reproductiva, transferencias embrionarias de alta precisión y diagnóstico integral de fertilidad en el Centro Médico ABC Santa Fe.",
      fullBio: [
        "Médico especialista en ginecología, obstetricia y biología de la reproducción humana.",
        "Experto en monitorización folicular precisa, transferencias embrionarias ecoguiadas y control ginecológico de alta especialidad.",
        "Miembro adscrito al cuerpo médico de la Clínica de Fertilización Asistida en el Centro Médico ABC Campus Santa Fe."
      ],
      education: [
        "Médico Cirujano y Partero",
        "Especialidad en Ginecología y Obstetricia",
        "Subespecialidad en Biología de la Reproducción Humana",
        "Certificado por el Consejo Mexicano de Ginecología y Obstetricia"
      ],
      achievements: [
        "Especialista en medicina reproductiva avanzada",
        "Especialista adscrito en el Centro Médico ABC Campus Santa Fe"
      ]
    },
    en: {
      role: "Human Reproduction Specialist",
      specialty: "Gynecology, Obstetrics & Human Reproductive Biology",
      brief: "Specialist in reproductive medicine, ultrasound-guided embryo transfers, and comprehensive fertility diagnostics at ABC Medical Center Santa Fe.",
      fullBio: [
        "Specialist in gynecology, obstetrics, and human reproductive biology.",
        "Expert in ultrasound-guided embryo transfers, follicular monitoring, and advanced fertility management.",
        "Clinical faculty member at the Assisted Fertilization Clinic at ABC Medical Center Santa Fe."
      ],
      education: [
        "Medical Doctor - Surgery & Obstetrics",
        "Specialty in Obstetrics & Gynecology",
        "Subspecialty in Human Reproductive Medicine",
        "Board Certified by Mexican Council of Gynecology & Obstetrics"
      ],
      achievements: [
        "Specialist in advanced assisted reproduction",
        "Attending specialist at ABC Medical Center Santa Fe"
      ]
    }
  }
];

export const SPECIALIST_GROUPS: SpecialistGroup[] = [
  {
    id: "ginecologos-asociados",
    title: { es: "Ginecólogos Asociados", en: "Associated Gynecologists" },
    description: {
      es: "Nuestros asociados son un grupo de ginecólogos con gran experiencia en el campo de la reproducción y que suman su brillante trayectoria profesional en el manejo de diferentes casos, con un aporte científico que brinda mejores prácticas para la Clínica e incrementa las posibilidades de éxito para las pacientes que acuden.",
      en: "Our associates are experienced gynecologists who bring outstanding professional trajectories to provide best clinical practices and maximize patient success."
    },
    members: [
      { name: "Dr. Gustavo Aguirre Ramos" },
      { name: "Dr. Rolando Álvarez Valero" },
      { name: "Dr. Eduardo Flores Villalón" },
      { name: "Dra. María de los Ángeles Flores Manzur" },
      { name: "Dr. Ricardo Frade Flores" },
      { name: "Dr. Julio González Cofrades" },
      { name: "Dr. Alejandro Kava Braverman" },
      { name: "Dr. Carlos Linder Efter" },
      { name: "Dra. Martha Luna Rojas" },
      { name: "Dr. José Manuel Muñoz de Cote Frade" },
      { name: "Dr. Humberto Reyes Cuervo" },
      { name: "Dra. Karla Patricia Soriano" },
      { name: "Dr. Jaroslav Stern Colin y Nunes" },
      { name: "Dr. Emilio Valerio Castro" },
      { name: "Dr. Erick Vázquez Camacho" },
      { name: "Dr. Antonio Zaldívar Neal" }
    ]
  },
  {
    id: "urologia",
    title: { es: "Urología", en: "Urology" },
    description: {
      es: "Evaluación integral del factor masculino y procedimientos urológicos especializados.",
      en: "Comprehensive male factor assessment and specialized urological care."
    },
    members: [
      { name: "Dr. Bernardo Cisneros Madrid", title: { es: "Médico Urólogo", en: "Urologist" } }
    ]
  },
  {
    id: "genetica",
    title: { es: "Genética", en: "Genetics" },
    description: {
      es: "Asesoramiento genético preimplantacional, cariotipos moleculares y diagnóstico NGS.",
      en: "Preimplantation genetic counseling, molecular karyotyping, and NGS analysis."
    },
    members: [
      { name: "Dra. Luisa Fernanda Mariscal Mendizabal", title: { es: "Médica Genetista", en: "Clinical Geneticist" } }
    ]
  },
  {
    id: "embriologia",
    title: { es: "Embriología", en: "Embryology" },
    description: {
      es: "Laboratorio de cultivo embrionario en sala limpia, micromanipulación ICSI, biopsia trofoectodérmica y vitrificación.",
      en: "Cleanroom embryo culture laboratory, ICSI micromanipulation, trophectoderm biopsy, and vitrification."
    },
    members: [
      { name: "Biol. Paola Guerrero Jiménez", title: { es: "Embrióloga Clínica", en: "Clinical Embryologist" } },
      { name: "Biol. Claudia Cipactli Ortega Rodríguez", title: { es: "Embrióloga Clínica", en: "Clinical Embryologist" } },
      { name: "Biol. María Fernanda Nieto Martínez", title: { es: "Embrióloga Clínica", en: "Clinical Embryologist" } }
    ]
  },
  {
    id: "andrologia-endocrinologia",
    title: { es: "Andrología y Endocrinología", en: "Andrology & Endocrinology" },
    description: {
      es: "Procesamiento seminal, capacitación espermática con gradientes y análisis cuantitativo hormonal.",
      en: "Semen processing, gradient sperm capacitation, and quantitative hormonal analysis."
    },
    members: [
      { name: "Biol. Gabriela Colín Osorio", title: { es: "Especialista en Andrología", en: "Andrology Specialist" } },
      { name: "Biol. Safiro Citlali Rodríguez Ruiz", title: { es: "Especialista en Andrología", en: "Andrology Specialist" } }
    ]
  },
  {
    id: "coordinacion-general",
    title: { es: "Coordinación General", en: "General Coordination" },
    description: {
      es: "Supervisión operativa, coordinación de protocolos y atención integral a pacientes.",
      en: "Operational supervision, protocol coordination, and comprehensive patient liaison."
    },
    members: [
      { name: "Profa. María Eugenia del Villar Orozco", title: { es: "Coordinadora General", en: "General Coordinator" } }
    ]
  },
  {
    id: "coordinacion-donacion",
    title: { es: "Coordinación del Programa de Donación de Óvulos y Esperma", en: "Egg & Sperm Donation Program Coordination" },
    description: {
      es: "Supervisión bioética, evaluación psicológica y selección de donantes.",
      en: "Bioethical screening, psychological evaluation, and donor selection."
    },
    members: [
      { name: "Psic. Nerea Iruretagoyena Olalde", title: { es: "Psicóloga y Coordinadora de Donación", en: "Psychologist & Donor Coordinator" } },
      { name: "Lic. Mónica Hevia Romano", title: { es: "Coordinadora de Donación", en: "Donor Coordinator" } }
    ]
  },
  {
    id: "enfermeria",
    title: { es: "Enfermería", en: "Nursing" },
    description: {
      es: "Cuerpo de enfermería con licenciatura y amplia experiencia en medicina reproductiva y acompañamiento personalizado.",
      en: "Licensed nursing faculty with extensive specialized experience in reproductive medicine and individualized care."
    },
    members: [
      { name: "Enf. Pilar Ofelia Toribio Rosas", title: { es: "Enfermera Especialista", en: "Specialist Nurse" } },
      { name: "Enf. Marisol Salazar Torres", title: { es: "Enfermera Especialista", en: "Specialist Nurse" } },
      { name: "Enf. Judith Reyes Reyes", title: { es: "Enfermera Especialista", en: "Specialist Nurse" } },
      { name: "Enf. Brenda García Hernández", title: { es: "Enfermera Especialista", en: "Specialist Nurse" } },
      { name: "Enf. Julia Alessandra Enríquez Izquierdo", title: { es: "Enfermera Especialista", en: "Specialist Nurse" } },
      { name: "Enf. Miriam Margarita Montenegro Colín", title: { es: "Enfermera Especialista", en: "Specialist Nurse" } }
    ]
  },
  {
    id: "administracion-recepcion",
    title: { es: "Administración y Recepción", en: "Administration & Reception" },
    description: {
      es: "Gestión administrativa, atención presencial y coordinación de citas médicas.",
      en: "Administrative management, patient reception, and appointment coordination."
    },
    members: [
      { name: "Sylvia Osorno", title: { es: "Administración y Recepción", en: "Administration & Reception" } }
    ]
  }
];
