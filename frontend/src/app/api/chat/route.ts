import { NextResponse } from 'next/server';

interface ReplyData {
  keywords: string[];
  reply: { es: string; en: string };
  suggested_actions: { es: string[]; en: string[] };
}

const CLINIC_KNOWLEDGE: ReplyData[] = [
  {
    keywords: ['hola', 'buen dia', 'buenas tardes', 'buenas noches', 'saludos', 'inicio', 'hello', 'hi', 'good morning', 'hey', 'start'],
    reply: {
      es: '¡Hola! Soy **Baby.IA**, tu asistente médica virtual de la **Clínica de Fertilización Asistida en el Centro Médico ABC**.\n\n¿En qué puedo orientarte hoy?\n- 🌸 Tratamientos (FIV, ICSI, Ovodonación, Congelación)\n- 📅 Cómo agendar tu primera consulta\n- 🧬 Tecnología, Genética (PGD/NGS) y Seguridad RI Witness\n- 👨‍⚕️ Nuestro equipo médico liderado por el Dr. Carlos Navarro\n- 📍 Ubicación en Centro Médico ABC Santa Fe',
      en: 'Hello! I am **Baby.IA**, your virtual medical assistant from the **Assisted Fertilization Clinic at ABC Medical Center Santa Fe**.\n\nHow can I help you today?\n- 🌸 Specialized Treatments (IVF, ICSI, Egg Donation, Vitrification)\n- 📅 How to schedule your first consultation\n- 🧬 Cutting-edge technology, Genetics (PGD/NGS) & RI Witness safety\n- 👨‍⚕️ Our medical faculty led by Dr. Carlos Navarro Martínez\n- 📍 Location at ABC Medical Center Santa Fe'
    },
    suggested_actions: {
      es: ['¿Qué tratamientos ofrecen?', '¿Cómo es la primera cita?', 'Agendar una consulta', '¿Dónde están ubicados?'],
      en: ['What treatments do you offer?', 'How does the first visit work?', 'Schedule a consultation', 'Where are you located?']
    }
  },
  {
    keywords: ['fiv', 'in vitro', 'fertilizacion in vitro', 'ivf', 'in vitro fertilization'],
    reply: {
      es: 'La **Fertilización in Vitro (FIV)** en nuestra clínica se realiza con tecnología de vanguardia y consta de **5 fases fundamentales**:\n\n1. **Estimulación ovárica:** Dosis individualizada calculada con seguimiento folicular y ultrasonidos seriados (8 a 12 días).\n2. **Captura de óvulos:** Aspiración folicular en quirófano estéril bajo sedación suave de 5-10 minutos.\n3. **Fertilización y cultivo:** En incubadoras trigas que emulan la trompa de Falopio (37°C, CO2, O2, N2) hasta llegar a blastocisto (día +5/+6).\n4. **Transferencia embrionaria:** Procedimiento indoloro de 10 min guiado por ultrasonido abdominal.\n5. **Soporte hormonal post transferencia:** Acompañamiento continuo hasta la prueba de embarazo.',
      en: 'At our clinic, **In Vitro Fertilization (IVF)** is performed with state-of-the-art technology across **5 core phases**:\n\n1. **Ovarian Stimulation:** Personalized protocol monitored with serial ultrasound and hormonal evaluations (8 to 12 days).\n2. **Egg Retrieval:** Ultrasound-guided aspiration in sterile surgical suite under gentle 5-10 min sedation.\n3. **Fertilization & Culture:** Inside tri-gas incubators replicating the human fallopian tubes (37°C, CO2, O2, N2) to day 5/6 blastocyst stage.\n4. **Embryo Transfer:** Painless 10-min procedure guided by abdominal ultrasound.\n5. **Post-transfer Support:** Continuous medical coaching until pregnancy test.'
    },
    suggested_actions: {
      es: ['¿Qué es el ICSI?', 'Diagnóstico genético (PGD/NGS)', 'Agendar cita de valoración'],
      en: ['What is ICSI?', 'Genetic testing (PGD/NGS)', 'Book diagnostic appointment']
    }
  },
  {
    keywords: ['icsi', 'microinyeccion', 'espermatozoide', 'sperm', 'microinjection'],
    reply: {
      es: 'El **ICSI (Inyección Intracitoplasmática del Esperma)** es una técnica de micromanipulación de alta precisión donde un solo espermatozoide seleccionado por nuestro equipo de andrología se inyecta directamente dentro del óvulo.\n\nEn nuestra clínica logramos una **tasa de fertilización superior al 80%** en óvulos inyectados, siendo el estándar de oro en factor masculino severo o fallos previos de fertilización.',
      en: '**ICSI (Intracytoplasmic Sperm Injection)** is a high-precision micromanipulation technique where a single selected sperm is injected directly into each mature egg.\n\nAt our clinic, we achieve a **fertilization rate exceeding 80%** on injected oocytes, representing the global gold standard for severe male factor or previous fertilization challenges.'
    },
    suggested_actions: {
      es: ['¿Qué es el Hatch asistido?', 'Diagnóstico genético PGD', 'Agendar cita'],
      en: ['What is assisted hatching?', 'Genetic testing (PGD)', 'Book an appointment']
    }
  },
  {
    keywords: ['hatch', 'eclosion', 'laser', 'assisted hatching'],
    reply: {
      es: 'El **Hatch Asistido (Eclosión Asistida)** utiliza un micro-láser diminuto de alta precisión para abrir una brecha en la *zona pelúcida* (cubierta protectora del embrión).\n\nEs especialmente recomendado en **embriones descongelados** (cuya zona pelúcida se endurece con la criopreservación) y en pacientes con intentos previos fallidos, facilitando enormemente la salida del embrión y su implantación endometrial.',
      en: '**Assisted Hatching** utilizes a precision cellular micro-laser to create a microscopic opening in the embryo\'s protective shell (*zona pellucida*).\n\nIt is strongly recommended for **frozen-thawed embryos** and patients with recurrent implantation challenges, significantly facilitating hatching and endometrial implantation.'
    },
    suggested_actions: {
      es: ['Ver transferencia embrionaria', 'Agendar cita'],
      en: ['View embryo transfer', 'Book an appointment']
    }
  },
  {
    keywords: ['genet', 'pgd', 'ngs', 'cromosom', 'adn', 'dna', 'genetic', 'pgt'],
    reply: {
      es: 'El **Diagnóstico Genético Embrionario (PGD / NGS / PGT-A)** nos permite evaluar la salud cromosómica antes de la transferencia:\n\n- En día 5 o 6 (blastocisto), se realiza una biopsia tomando 4 células de la capa exterior (*trofoectodermo*).\n- Se realiza **Secuenciación de Nueva Generación (NGS)** para identificar embriones **Euploides** (con los 23 pares de cromosomas normales).\n- Esto maximiza la probabilidad de embarazo por intento y reduce drásticamente el riesgo de aborto o anomalías congénitas.',
      en: '**Preimplantation Genetic Testing (PGT / NGS)** assesses embryo chromosomal integrity prior to transfer:\n\n- On day 5 or 6 (blastocyst), a precision cellular biopsy is taken from the outer trophectoderm layer.\n- **Next-Generation Sequencing (NGS)** identifies **Euploid embryos** (with normal 23 chromosome pairs).\n- This maximizes live birth rates per transfer and drastically minimizes the risk of miscarriage or chromosomal anomalies.'
    },
    suggested_actions: {
      es: ['¿Cuánto tiempo tarda?', 'Agendar una cita'],
      en: ['How long does it take?', 'Book a consultation']
    }
  },
  {
    keywords: ['donac', 'donante', 'donadora', 'fenomatch', 'egg splitting', 'donor', 'egg donation', 'sperm donation'],
    reply: {
      es: 'Nuestro programa de **Donación de Óvulos y Esperma** cuenta con más de 26 años de experiencia y un protocolo de 4 etapas de máxima rigurosidad:\n\n1. **Evaluación psicométrica integral.**\n2. **Estudios de salud y panel genético** (cariotipos y screening de Síndrome de X Frágil).\n3. **Evaluación de reserva ovárica.**\n4. **Fenomatch:** Algoritmo de reconocimiento facial biométrico para máxima similitud con la pareja receptora.\n\n🛡️ **Garantía Ética ABC:** En nuestra clínica **está estrictamente prohibido el Egg Splitting** (no compartimos óvulos de una donante entre varias pacientes; el 100% de los óvulos obtenidos son de uso exclusivo para tu tratamiento).',
      en: 'Our **Egg and Sperm Donation Program** features over 26 years of specialized clinical experience with a 4-phase bioethical protocol:\n\n1. **Comprehensive psychometric screening.**\n2. **Complete medical and genetic panel** (karyotypes & Fragile X syndrome screening).\n3. **Reproductive health & ovarian reserve testing.**\n4. **Fenomatch:** Biometric facial recognition matching for maximum resemblance.\n\n🛡️ **Ethical Commitment:** In our clinic, **EGG SPLITTING IS STRICTLY PROHIBITED** (all retrieved oocytes are dedicated 100% exclusively to your treatment).'
    },
    suggested_actions: {
      es: ['Agendar cita de orientación', 'Conocer más sobre donación'],
      en: ['Schedule donor consultation', 'Learn more about donation']
    }
  },
  {
    keywords: ['congel', 'preserv', 'vitrif', 'ovulos', 'freeze', 'freezing', 'vitrification', 'preservation'],
    reply: {
      es: 'En **Preservación de la Fertilidad** disponemos de las tecnologías más avanzadas:\n\n- **Congelación de Óvulos:** Vitrificación ultra-rápida (método japonés Dr. Kuwayama) con tasas de sobrevida idénticas a tratamientos en fresco (>95%).\n- **Congelación de Embriones:** Vitrificación en día +5/+6 con preparación endometrial posterior.\n- **Congelación de Esperma:** En viales o perlas, con viabilidad funcional preservada por más de 15 años.\n- **Oncofertilidad:** Protocolos inmediatos y prioritarios para pacientes diagnosticados con cáncer antes de recibir quimio o radioterapia.',
      en: 'In **Fertility Preservation**, we provide world-class vitrification protocols:\n\n- **Egg Freezing:** Ultra-rapid vitrification (Dr. Kuwayama method) with over 95% survival rates.\n- **Embryo Freezing:** Day 5/6 blastocyst vitrification for optimal subsequent natural or programmed transfers.\n- **Sperm Freezing:** Vials and micro-pellets with long-term biological viability exceeding 15 years.\n- **Oncofertility:** Rapid-response protocols for patients facing cancer therapies prior to chemo or radiation.'
    },
    suggested_actions: {
      es: ['Oncofertilidad', 'Agendar valoración'],
      en: ['Oncofertility', 'Schedule evaluation']
    }
  },
  {
    keywords: ['cita', 'agendar', 'costo', 'precio', 'primera consulta', 'pasos', 'como empezar', 'appointment', 'book', 'cost', 'price', 'consultation', 'steps'],
    reply: {
      es: 'Para iniciar tu camino con nosotros seguimos **5 pasos estructurados**:\n\n1. **Paso 1 - Introducción:** Primer contacto y resolución de inquietudes.\n2. **Paso 2 - Primera Consulta:** Entrevista médica a profundidad y revisión de estudios previos que poseas.\n3. **Paso 3 - Calendarización de exámenes:** Plan individualizado de análisis que se realizan cómodamente en la clínica.\n4. **Paso 4 - Cita de entrega de resultados:** Explicación detallada del diagnóstico y diseño de tu plan terapéutico personalizado.\n5. **Paso 5 - Inicio de tratamiento:** FIV, ICSI, Inseminación o cirugía según sea el caso.\n\n📞 Puedes agendar mediante el botón **\"Agendar Cita\"** en la web o llamando al **(55) 5273 5194**.',
      en: 'To start your fertility journey with us, we follow **5 structured steps**:\n\n1. **Step 1 - Introduction:** Initial contact and personalized guidance.\n2. **Step 2 - First Consultation:** In-depth medical interview and review of prior tests/history.\n3. **Step 3 - Diagnostic Workup:** Tailored diagnostic testing performed conveniently at our hospital facilities.\n4. **Step 4 - Results & Treatment Plan:** Detailed medical diagnosis and customized therapeutic roadmap.\n5. **Step 5 - Treatment Initiation:** IVF, ICSI, Donor program, or reproductive surgery.\n\n📞 You can book online using the **\"Book Appointment\"** button or calling **+52 (55) 5273 5194**.'
    },
    suggested_actions: {
      es: ['Abrir formulario de cita', 'Ver ubicación de la clínica'],
      en: ['Open booking form', 'View clinic directions']
    }
  },
  {
    keywords: ['doctor', 'navarro', 'director', 'carlos navarro', 'fundador', 'founder', 'team', 'doctors', 'faculty'],
    reply: {
      es: 'El director de la clínica es el **Dr. Carlos Navarro Martínez**, pionero de la fertilidad en México con más de 35 años de experiencia. Se formó en el *Texas Women\'s Hospital* con el Dr. Robert Franklin y en el *Greater Baltimore Medical Center* con el Dr. Jairo García, y formó parte del equipo que logró el **1er bebé de FIV en México en 1991**.\n\nEl equipo integra Ginecólogos, Urólogos, Genetistas, Embriólogas, Psicólogas y Enfermeras especialistas en Centro Médico ABC Santa Fe.',
      en: 'Our medical director is **Dr. Carlos Navarro Martínez**, pioneer of assisted reproduction in Mexico with over 35 years of medical leadership. Trained at *The Women\'s Hospital of Texas* under Dr. Robert Franklin and *Greater Baltimore Medical Center* under Dr. Jairo García, he was part of the landmark team that achieved the **1st IVF live birth in Mexico in 1991**.\n\nOur multidisciplinary faculty includes Reproductive Endocrinologists, Urologists, Geneticists, Senior Embryologists, Psychologists, and Specialized Nurses at ABC Medical Center Santa Fe.'
    },
    suggested_actions: {
      es: ['Ver equipo completo', 'Agendar consulta con Dr. Navarro'],
      en: ['View full medical faculty', 'Book appointment with Dr. Navarro']
    }
  },
  {
    keywords: ['ubicacion', 'donde', 'direccion', 'llegar', 'telefono', 'contacto', 'santa fe', 'location', 'where', 'address', 'phone', 'contact', 'directions'],
    reply: {
      es: 'Nuestra clínica se localiza en el **Centro Médico ABC Campus Santa Fe**:\n\n📍 **Dirección:** Av. Carlos Graef Fernández #154, Consultorio 332 (Entrada por Av. Vasco de Quiroga), Col. Tlaxala Santa Fe, Cuajimalpa 05300, CDMX.\n\n📞 **Teléfonos:** (55) 5273 5194 / (55) 5276 5463\n✉️ **Correo:** recepcion@infertilidadabc.com\n🚗 Estacionamiento y valet parking disponibles en el hospital.',
      en: 'Our clinic is located inside the prestigious **ABC Medical Center Santa Fe Campus**:\n\n📍 **Address:** 154 Carlos Graef Fernández Ave, Suite 332 (Main entrance & parking via Vasco de Quiroga Ave), Col. Tlaxala Santa Fe, Mexico City 05300.\n\n📞 **Phone:** +52 (55) 5273 5194 / +52 (55) 5276 5463\n✉️ **Email:** recepcion@infertilidadabc.com\n🚗 On-site hospital parking and valet service available.'
    },
    suggested_actions: {
      es: ['Cómo llegar (Concierge)', 'Agendar una cita'],
      en: ['Directions (Concierge)', 'Book an appointment']
    }
  },
  {
    keywords: ['seguridad', 'ri witness', 'testigo', 'error', 'confusion', 'safety', 'security', 'rfid', 'tracking'],
    reply: {
      es: 'En CFA la seguridad de tus muestras es máxima:\n\n🔒 Fuimos los **primeros en México** en incorporar **RI Witness**, un sistema británico de vigilancia electrónica por radiofrecuencia (RFID) que realiza una supervisión continua de óvulos, espermatozoides y embriones, eliminando cualquier posibilidad de error o confusión humana.',
      en: 'At CFA, sample safety and traceability are paramount:\n\n🔒 We were the **first in Mexico** to implement **RI Witness**, a British RFID electronic radiofrequency tracking platform providing continuous electronic verification of oocytes, sperm, and embryos, eliminating human error.'
    },
    suggested_actions: {
      es: ['Conocer el laboratorio', 'Agendar cita'],
      en: ['Explore our laboratory', 'Book consultation']
    }
  },
  {
    keywords: ['ia', 'inteligencia artificial', 'machine learning', 'innovacion', 'cercle', 'ai', 'artificial intelligence', 'timelapse'],
    reply: {
      es: 'En **Innovación y Tecnología**, somos pioneros con **Incubadora Timelapse** y soluciones de IA desarrolladas junto a **CercleAI**:\n\n- Modelos de Machine Learning entrenados con más de 15 años de datos estadísticos para optimizar protocolos de estimulación ovárica.\n- Monitoreo morfocinético continuo en incubadoras Timelapse que analizan imágenes segundo a segundo para elegir el embrión con mayor potencial de embarazo.',
      en: 'In **Medical Innovation**, we are pioneers in Mexico with our **Timelapse Incubator** and AI platforms developed with **CercleAI**:\n\n- Machine Learning models trained on 15+ years of clinical data to optimize individualized ovarian stimulation protocols.\n- Continuous Timelapse morphokinetic monitoring evaluating embryo cell division kinetics to identify the blastocyst with highest live birth potential.'
    },
    suggested_actions: {
      es: ['Ver página de Innovación', 'Agendar cita'],
      en: ['View Innovation page', 'Book consultation']
    }
  }
];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body.message || '';
    const lang: 'es' | 'en' = (body.language === 'en' || /^[a-zA-Z\s\?\,\.\!]+$/.test(message) && ['what', 'how', 'who', 'where', 'when', 'book', 'cost', 'hello', 'hi', 'ivf', 'doctor'].some(w => message.toLowerCase().includes(w))) ? 'en' : 'es';
    const msgLower = message.toLowerCase().trim();

    // Intentar conectar con el backend de FastAPI si está disponible
    try {
      const fastApiResponse = await fetch('http://localhost:8000/api/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...body, language: lang }),
        signal: AbortSignal.timeout(1500)
      });
      if (fastApiResponse.ok) {
        const data = await fastApiResponse.json();
        return NextResponse.json(data);
      }
    } catch {
      // Usar motor bilingüe integrado de Baby.IA
    }

    // Match de conocimiento interno especializado en CFA ABC
    const matched = CLINIC_KNOWLEDGE.find((item) =>
      item.keywords.some((k) => msgLower.includes(k))
    );

    if (matched) {
      return NextResponse.json({
        reply: matched.reply[lang] || matched.reply.es,
        session_id: body.session_id || 'web-session',
        suggested_actions: matched.suggested_actions[lang] || matched.suggested_actions.es
      });
    }

    if (lang === 'en') {
      return NextResponse.json({
        reply: `Thank you for your question regarding "${message}". At the **Assisted Fertilization Clinic at ABC Medical Center Santa Fe**, we have over 35 years of medical leadership, cutting-edge technology, and a dedicated clinical faculty ready to support your family goals.\n\nWould you like our patient care coordination team to assist you or help schedule your initial consultation?`,
        session_id: body.session_id || 'web-session',
        suggested_actions: ['What treatments do you offer?', 'Book an appointment', 'Directions in Santa Fe', 'Contact reception']
      });
    }

    return NextResponse.json({
      reply: `Con gusto atiendo tu consulta sobre "${message}". En la **Clínica de Fertilización Asistida ABC** contamos con más de 35 años de experiencia, alta tecnología de primer mundo y un equipo médico altamente calificado para acompañarte.\n\n¿Te gustaría que nuestro equipo de coordinación médica se comunique contigo para resolver dudas específicas o agendar tu primera consulta?`,
      session_id: body.session_id || 'web-session',
      suggested_actions: ['¿Qué tratamientos ofrecen?', 'Agendar una cita', 'Ubicación en Santa Fe', 'Hablar con recepción']
    });
  } catch (error) {
    return NextResponse.json(
      {
        reply: 'Hello! I am Baby.IA. You can reach our medical reception directly at +52 (55) 5273 5194 or recepcion@infertilidadabc.com.',
        session_id: 'default',
        suggested_actions: ['Book appointment', 'View treatments']
      },
      { status: 200 }
    );
  }
}
