import os
import re
import json
import requests
from typing import List, Dict

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")

CLINIC_KNOWLEDGE_PROMPT = """
Eres Baby.IA, la asistente virtual inteligente, cálida, empática y profesional de la Clínica de Fertilización Asistida (CFA) en el Centro Médico ABC Santa Fe.

Información oficial y rigurosa de la Clínica:
- Nombre: Clínica de Fertilización Asistida en el Centro Médico ABC (Campus Santa Fe).
- Director y Fundador: Dr. Carlos Navarro Martínez (más de 35 años de experiencia, egresado de Univ. La Salle, internado en Hospital ABC, subespecialidad en Texas Women's Hospital con el Dr. Robert Franklin y entrenamiento en Greater Baltimore Medical Center con el Dr. Jairo García; formó parte del equipo que logró el 1er nacimiento de FIV en México en 1991).
- Ubicación: Centro Médico ABC Santa Fe, Av. Carlos Graef Fernández #154, Consultorio 332 (entrada por Av. Vasco de Quiroga), Col. Tlaxala Santa Fe, Cuajimalpa 05300, CDMX.
- Contacto: Teléfonos (55) 5273 5194 y (55) 5276 5463. Email: recepcion@infertilidadabc.com.
- Horarios de atención: Lunes a Viernes de 8:00 a 20:00 hrs, Sábados de 8:00 a 14:00 hrs.

Tratamientos especializados que ofrecemos:
1. Fertilización in Vitro (FIV): 5 pasos (Estimulación ovárica personalizada, Captura folicular con sedación de 5-10 min, Fertilización e incubación en atmósfera controlada a 37°C hasta día 5/6 blastocisto, Transferencia embrionaria y Soporte hormonal).
2. ICSI (Inyección Intracitoplasmática de Esperma): Técnica de micromanipulación con tasa de éxito >80% en fertilización.
3. Hatch Asistido (Eclosión Asistida): Uso de microrayos láser en microscopio invertido para adelgazar la zona pelúcida en embriones descongelados y mejorar la implantación.
4. Transferencia de Embriones: Ciclo en fresco vs. Ciclo con embriones congelados (preparación endometrial y desvitrificación en quirófano con 2 hrs de reposo).
5. Diagnóstico Genético Embrionario (PGD / NGS): Biopsia de 4 células del trofoectodermo en día 5/6 para Secuenciación de Nueva Generación (embriones Euploides vs Aneuploides).
6. Congelación de Óvulos: Vitrificación ultra-rápida y criopreservación de corteza ovárica para preservar fertilidad.
7. Congelación de Embriones: Protocolo Dr. Kuwayama con altas tasas de sobrevida.
8. Congelación de Esperma: Criopreservación en viales y perlas con viabilidad mayor a 15 años.
9. Donación de Óvulos y Esperma: Proceso riguroso de 4 fases (Evaluación psicométrica, Genética/X-Frágil, Reserva ovárica, Fenomatch de reconocimiento facial). IMPORTANTE: En CFA está estrictamente prohibido el EGG SPLITTING (todos los óvulos de la donadora son exclusivos para la paciente receptora).
10. Cáncer y Reproducción (Oncofertilidad): Preservación inmediata previa a tratamientos oncológicos.
11. Cirugía Reproductiva: Laparoscopia, histeroscopía, miomectomía y microcirugía robótica en el quirófano del Centro Médico ABC.

Puntos de Valor y Seguridad:
- Sistema RI Witness: Vigilancia electrónica por radiofrecuencia (pioneros en México) que garantiza la trazabilidad y seguridad 100% de óvulos, esperma y embriones.
- Innovación: Proyecto con CercleAI de Machine Learning e Inteligencia Artificial con más de 15 años de datos estadísticos para selección embrionaria morfocinética.
- Compromiso social: Alianza con Fundación AMSA y Fundación Alfredo Harp Helú.
- Equidad: El 90% de nuestro equipo profesional son mujeres.

Instrucciones de tu personalidad:
- Responde con calidez humana, empatía, claridad médica y optimismo fundamentado.
- Utiliza formato estructurado y amigable (listas, negritas para puntos clave).
- Si la persona desea agendar una cita o pedir informes, invítala cordialmente a usar el formulario de cita en el sitio o comunicarse al (55) 5273 5194 / recepcion@infertilidadabc.com.
- Recuerda que tus respuestas son informativas y de orientación, no sustituyen la consulta médica personalizada.
"""

def generate_local_response(message: str, language: str = "es") -> Dict:
    msg_lower = message.lower().strip()
    is_en = (language == "en") or any(w in msg_lower for w in ["hello", "hi ", "how are", "what is", "where is", "cost", "book"])

    if any(k in msg_lower for k in ["hola", "buen dia", "buenas tardes", "buenas noches", "saludos", "hello", "hi", "hey"]):
        if is_en:
            return {
                "reply": "Hello! I am **Baby.IA**, your virtual medical assistant from the **Assisted Fertilization Clinic at ABC Medical Center Santa Fe**.\n\nHow can I help you today?\n- 🌸 Specialized Treatments (IVF, ICSI, Egg Donation, Vitrification)\n- 📅 How to schedule your first consultation\n- 🧬 Technology, Genetics (PGD/NGS) & RI Witness safety\n- 👨‍⚕️ Our medical faculty led by Dr. Carlos Navarro\n- 📍 Location at ABC Medical Center Santa Fe",
                "suggested_actions": ["What treatments do you offer?", "How does the first visit work?", "Schedule a consultation", "Where are you located?"]
            }
        return {
            "reply": "¡Hola! Soy **Baby.IA**, la asistente virtual de la **Clínica de Fertilización Asistida en el Centro Médico ABC**.\n\n¿En qué puedo orientarte hoy? Puedo brindarte información sobre:\n- 🌸 Tratamientos (FIV, ICSI, Ovodonación, Congelación)\n- 📅 Cómo agendar tu primera consulta\n- 🧬 Tecnología, Genética (PGD) y Seguridad RI Witness\n- 👨‍⚕️ Nuestro equipo médico liderado por el Dr. Carlos Navarro\n- 📍 Ubicación en Centro Médico ABC Santa Fe",
            "suggested_actions": ["¿Qué tratamientos ofrecen?", "¿Cómo es la primera cita?", "Agendar una consulta", "¿Dónde están ubicados?"]
        }

    if any(k in msg_lower for k in ["fiv", "in vitro", "ivf"]):
        if is_en:
            return {
                "reply": "At our clinic, **In Vitro Fertilization (IVF)** is performed with state-of-the-art technology across **5 core phases**:\n\n1. **Ovarian Stimulation:** Personalized protocol monitored with serial ultrasound and hormone tests (8 to 12 days).\n2. **Egg Retrieval:** Ultrasound-guided aspiration in sterile surgical suite under gentle 5-10 min sedation.\n3. **Fertilization & Culture:** Inside tri-gas incubators replicating the human fallopian tubes (37°C, CO2, O2, N2) to day 5/6 blastocyst stage.\n4. **Embryo Transfer:** Painless 10-min procedure guided by abdominal ultrasound.\n5. **Post-transfer Support:** Continuous medical coaching until pregnancy test.",
                "suggested_actions": ["What is ICSI?", "Genetic testing (PGD/NGS)", "Book diagnostic appointment"]
            }
        return {
            "reply": "La **Fertilización in Vitro (FIV)** en nuestra clínica se realiza con tecnología de vanguardia y consta de **5 fases fundamentales**:\n\n1. **Estimulación ovárica:** Dosis individualizada calculada con seguimiento folicular y ultrasonidos seriados (8 a 12 días).\n2. **Captura de óvulos:** Aspiración folicular en quirófano estéril bajo sedación suave de 5-10 minutos.\n3. **Fertilización y cultivo:** En incubadoras trigas que emulan la trompa de Falopio (37°C, CO2, O2, N2) hasta llegar a blastocisto (día +5/+6).\n4. **Transferencia embrionaria:** Procedimiento indoloro de 10 min guiado por ultrasonido abdominal.\n5. **Soporte hormonal post transferencia:** Acompañamiento continuo hasta la prueba de embarazo.",
            "suggested_actions": ["¿Qué es el ICSI?", "¿Hacen diagnóstico genético (PGD)?", "Agendar cita de valoración"]
        }

    if any(k in msg_lower for k in ["tratamiento", "servicios", "procedimiento", "que hacen", "treatment", "service"]):
        if is_en:
            return {
                "reply": "At **ABC Fertility Clinic** we provide 11 comprehensive assisted reproduction treatments:\n\n1. **In Vitro Fertilization (IVF)**\n2. **ICSI (Intracytoplasmic Sperm Injection)**\n3. **Assisted Laser Hatching**\n4. **Embryo Transfer** (Fresh and Frozen-thawed)\n5. **Preimplantation Genetic Diagnosis (PGD/NGS)**\n6. **Egg Freezing (Vitrification)**\n7. **Embryo Freezing**\n8. **Sperm Freezing**\n9. **Egg and Sperm Donation** (with Fenomatch & strict no egg-splitting guarantee)\n10. **Oncofertility (Cancer & Fertility)**\n11. **Reproductive Surgery** (Laparoscopy, Hysteroscopy & Robotics at ABC Hospital)",
                "suggested_actions": ["View IVF details", "Egg donation program", "How to book consultation?"]
            }
        return {
            "reply": "En la **Clínica de Fertilización ABC** ofrecemos 11 tratamientos integrales de reproducción asistida:\n\n1. **Fertilización in Vitro (FIV)**\n2. **ICSI (Inyección Intracitoplasmática)**\n3. **Hatch Asistido (Láser)**\n4. **Transferencia de Embriones** (Fresco y Congelado)\n5. **Diagnóstico Genético Embrionario (PGD/NGS)**\n6. **Congelación de Óvulos (Vitrificación)**\n7. **Congelación de Embriones**\n8. **Congelación de Esperma**\n9. **Donación de Óvulos y Esperma** (con Fenomatch y sin egg-splitting)\n10. **Cáncer y Reproducción (Oncofertilidad)**\n11. **Cirugía Reproductiva** (Laparoscopia, Histeroscopía y Robótica en ABC)",
            "suggested_actions": ["Ver detalles de FIV", "Donación de óvulos", "¿Cómo agendar cita?"]
        }

    if any(k in msg_lower for k in ["icsi", "microinyeccion"]):
        if is_en:
            return {
                "reply": "**ICSI (Intracytoplasmic Sperm Injection)** is a high-precision micromanipulation technique where a single selected sperm is injected directly into each mature egg.\n\nAt our clinic, we achieve a **fertilization rate exceeding 80%** on injected oocytes, representing the global gold standard for severe male factor or previous fertilization challenges.",
                "suggested_actions": ["What is assisted hatching?", "Genetic testing (PGD)", "Book an appointment"]
            }
        return {
            "reply": "El **ICSI (Inyección Intracitoplasmática del Esperma)** es una técnica de micromanipulación de alta precisión donde un solo espermatozoide seleccionado por nuestro equipo de andrología se inyecta directamente dentro del óvulo.\n\nEn nuestra clínica logramos una **tasa de fertilización superior al 80%** en óvulos inyectados, siendo el estándar de oro en factor masculino severo o fallos previos de fertilización.",
            "suggested_actions": ["¿Qué es el Hatch asistido?", "Diagnóstico genético PGD", "Agendar cita"]
        }

    if any(k in msg_lower for k in ["hatch", "eclosion"]):
        if is_en:
            return {
                "reply": "**Assisted Hatching** utilizes a precision cellular micro-laser to create a microscopic opening in the embryo's protective shell (*zona pellucida*).\n\nIt is strongly recommended for **frozen-thawed embryos** and patients with recurrent implantation challenges, significantly facilitating hatching and endometrial implantation.",
                "suggested_actions": ["View embryo transfer", "Book an appointment"]
            }
        return {
            "reply": "El **Hatch Asistido (Eclosión Asistida)** utiliza un micro-láser diminuto de alta precisión para abrir una brecha en la *zona pelúcida* (cubierta protectora del embrión).\n\nEs especialmente recomendado en **embriones descongelados** (cuya zona pelúcida se endurece con la criopreservación) y en pacientes de más de 37 años, facilitando enormemente la salida del embrión y su implantación endometrial.",
            "suggested_actions": ["Ver transferencia embrionaria", "Agendar cita"]
        }

    if any(k in msg_lower for k in ["genet", "pgd", "ngs", "cromosom", "adn", "dna"]):
        if is_en:
            return {
                "reply": "**Preimplantation Genetic Testing (PGT / NGS)** assesses embryo chromosomal integrity prior to transfer:\n\n- On day 5 or 6 (blastocyst), a precision cellular biopsy is taken from the outer trophectoderm layer.\n- **Next-Generation Sequencing (NGS)** identifies **Euploid embryos** (with normal 23 chromosome pairs).\n- This maximizes live birth rates per transfer and drastically minimizes the risk of miscarriage or chromosomal anomalies.",
                "suggested_actions": ["How long does it take?", "Book a consultation"]
            }
        return {
            "reply": "El **Diagnóstico Genético Embrionario (PGD / NGS)** nos permite evaluar la salud cromosómica antes de la transferencia:\n\n- En día 5 o 6 (blastocisto), se realiza una biopsia tomando 4 células de la capa exterior (*trofoectodermo*).\n- Se realiza **Secuenciación de Nueva Generación (NGS)** para identificar embriones **Euploides** (con los 23 pares de cromosomas normales).\n- Esto maximiza la probabilidad de embarazo por intento y reduce drásticamente el riesgo de aborto o anomalías congénitas.",
            "suggested_actions": ["¿Cuánto tiempo tarda?", "Agendar una cita"]
        }

    if any(k in msg_lower for k in ["donac", "donante", "donadora", "fenomatch", "egg splitting", "donor"]):
        if is_en:
            return {
                "reply": "Our **Egg and Sperm Donation Program** features over 26 years of specialized clinical experience with a 4-phase bioethical protocol:\n\n1. **Comprehensive psychometric screening.**\n2. **Complete medical and genetic panel** (karyotypes & Fragile X syndrome screening).\n3. **Reproductive health & ovarian reserve testing.**\n4. **Fenomatch:** Biometric facial recognition matching for maximum resemblance.\n\n🛡️ **Ethical Commitment:** In our clinic, **EGG SPLITTING IS STRICTLY PROHIBITED** (all retrieved oocytes are dedicated 100% exclusively to your treatment).",
                "suggested_actions": ["Schedule donor consultation", "Learn more about donation"]
            }
        return {
            "reply": "Nuestro programa de **Donación de Óvulos y Esperma** cuenta con más de 26 años de experiencia y un protocolo de 4 etapas de máxima rigurosidad:\n\n1. **Evaluación psicométrica integral.**\n2. **Estudios de salud y panel genético** (cariotipos y screening de Síndrome de X Frágil).\n3. **Evaluación de reserva ovárica.**\n4. **Fenomatch:** Algoritmo de reconocimiento facial biométrico para máxima similitud con la pareja receptora.\n\n🛡️ **Garantía Ética ABC:** En nuestra clínica **está prohibido el Egg Splitting** (no compartimos óvulos de una donante entre varias pacientes; el 100% de los óvulos obtenidos son de uso exclusivo para tu tratamiento).",
            "suggested_actions": ["Agendar cita de orientación", "Conocer más sobre donación"]
        }

    if any(k in msg_lower for k in ["congel", "preserv", "vitrif", "freeze"]):
        if is_en:
            return {
                "reply": "In **Fertility Preservation**, we provide world-class vitrification protocols:\n\n- **Egg Freezing:** Ultra-rapid vitrification (Dr. Kuwayama method) with over 95% survival rates.\n- **Embryo Freezing:** Day 5/6 blastocyst vitrification for optimal subsequent natural or programmed transfers.\n- **Sperm Freezing:** Vials and micro-pellets with long-term biological viability exceeding 15 years.\n- **Oncofertility:** Rapid-response protocols for patients facing cancer therapies prior to chemo or radiation.",
                "suggested_actions": ["Oncofertility", "Schedule evaluation"]
            }
        return {
            "reply": "En **Preservación de la Fertilidad** disponemos de las tecnologías más avanzadas:\n\n- **Congelación de Óvulos:** Vitrificación ultra-rápida (método japonés Dr. Kuwayama) con tasas de sobrevida idénticas a tratamientos en fresco.\n- **Congelación de Embriones:** Vitrificación en día +5/+6 con preparación endometrial posterior.\n- **Congelación de Esperma:** En viales o perlas, con viabilidad funcional preservada por más de 15 años.\n- **Oncofertilidad:** Protocolos inmediatos y prioritarios para pacientes diagnosticados con cáncer antes de recibir quimio o radioterapia.",
            "suggested_actions": ["Oncofertilidad", "Agendar valoración"]
        }

    if any(k in msg_lower for k in ["cita", "agendar", "costo", "precio", "primera consulta", "pasos", "como empezar", "book", "appointment"]):
        if is_en:
            return {
                "reply": "To start your fertility journey with us, we follow **5 structured steps**:\n\n1. **Step 1 - Introduction:** Initial contact and personalized guidance.\n2. **Step 2 - First Consultation:** In-depth medical interview and review of prior tests/history.\n3. **Step 3 - Diagnostic Workup:** Tailored diagnostic testing performed conveniently at our hospital facilities.\n4. **Step 4 - Results & Treatment Plan:** Detailed medical diagnosis and customized therapeutic roadmap.\n5. **Step 5 - Treatment Initiation:** IVF, ICSI, Donor program, or reproductive surgery.\n\n📞 You can book online using the **\"Book Appointment\"** button or calling **+52 (55) 5273 5194**.",
                "suggested_actions": ["Open booking form", "View clinic directions"]
            }
        return {
            "reply": "Para iniciar tu camino con nosotros seguimos **5 pasos estructurados**:\n\n1. **Paso 1 - Introducción:** Primer contacto y resolución de inquietudes.\n2. **Paso 2 - Primera Consulta:** Entrevista médica a profundidad y revisión de estudios previos que poseas.\n3. **Paso 3 - Calendarización de exámenes:** Plan individualizado de análisis que se realizan cómodamente en la clínica.\n4. **Paso 4 - Cita de entrega de resultados:** Explicación detallada del diagnóstico y diseño de tu plan terapéutico personalizado.\n5. **Paso 5 - Inicio de tratamiento:** FIV, ICSI, Inseminación o cirugía según sea el caso.\n\n📞 Puedes agendar mediante el botón **\"Agendar Cita\"** en la web o llamando al **(55) 5273 5194**.",
            "suggested_actions": ["Abrir formulario de cita", "Ver ubicación de la clínica"]
        }

    if any(k in msg_lower for k in ["doctor", "navarro", "director", "equipo", "especialistas", "team"]):
        if is_en:
            return {
                "reply": "Our medical director is **Dr. Carlos Navarro Martínez**, pioneer of assisted reproduction in Mexico with over 35 years of medical leadership. Trained at *The Women's Hospital of Texas* under Dr. Robert Franklin and *Greater Baltimore Medical Center* under Dr. Jairo García, he was part of the landmark team that achieved the **1st IVF live birth in Mexico in 1991**.\n\nOur multidisciplinary faculty includes Reproductive Endocrinologists, Urologists, Geneticists, Senior Embryologists, Psychologists, and Specialized Nurses at ABC Medical Center Santa Fe.",
                "suggested_actions": ["View full medical faculty", "Book appointment with Dr. Navarro"]
            }
        return {
            "reply": "El director de la clínica es el **Dr. Carlos Navarro Martínez**, pionero de la fertilidad en México con más de 35 años de experiencia. Se formó en el *Texas Women's Hospital* con el Dr. Robert Franklin y en el *Greater Baltimore Medical Center* con el Dr. Jairo García, y formó parte del equipo que logró el **1er bebé de FIV en México en 1991**.\n\nEl equipo integra Ginecólogos, Urólogos, Genetistas, Embriólogas, Psicólogas y Enfermeras especialistas en Centro Médico ABC Santa Fe.",
            "suggested_actions": ["Ver equipo completo", "Agendar consulta con Dr. Navarro"]
        }

    if any(k in msg_lower for k in ["ubicacion", "donde", "direccion", "llegar", "telefono", "contacto", "santa fe", "location", "address"]):
        if is_en:
            return {
                "reply": "Our clinic is located inside the prestigious **ABC Medical Center Santa Fe Campus**:\n\n📍 **Address:** 154 Carlos Graef Fernández Ave, Suite 332 (Main entrance & parking via Vasco de Quiroga Ave), Col. Tlaxala Santa Fe, Mexico City 05300.\n\n📞 **Phone:** +52 (55) 5273 5194 / +52 (55) 5276 5463\n✉️ **Email:** recepcion@infertilidadabc.com\n🚗 On-site hospital parking and valet service available.",
                "suggested_actions": ["Directions (Concierge)", "Book an appointment"]
            }
        return {
            "reply": "Nuestra clínica se localiza en el **Centro Médico ABC Campus Santa Fe**:\n\n📍 **Dirección:** Av. Carlos Graef Fernández #154, Consultorio 332 (Entrada por Av. Vasco de Quiroga), Col. Tlaxala Santa Fe, Cuajimalpa 05300, CDMX.\n\n📞 **Teléfonos:** (55) 5273 5194 / (55) 5276 5463\n✉️ **Correo:** recepcion@infertilidadabc.com\n🚗 Estacionamiento y valet parking disponibles en el hospital.",
            "suggested_actions": ["Cómo llegar (Concierge)", "Agendar una cita"]
        }

    if any(k in msg_lower for k in ["seguridad", "ri witness", "testigo", "error", "confusion", "safety"]):
        if is_en:
            return {
                "reply": "At CFA, sample safety and traceability are paramount:\n\n🔒 We were the **first in Mexico** to implement **RI Witness**, a British RFID electronic radiofrequency tracking platform providing continuous electronic verification of oocytes, sperm, and embryos, eliminating human error.",
                "suggested_actions": ["Explore our laboratory", "Book consultation"]
            }
        return {
            "reply": "En CFA la seguridad de tus muestras es máxima:\n\n🔒 Fuimos los **primeros en México** en incorporar **RI Witness**, un sistema británico de vigilancia electrónica por radiofrecuencia (RFID) que realiza una supervisión continua de óvulos, espermatozoides y embriones, eliminando cualquier posibilidad de error o confusión humana.",
            "suggested_actions": ["Conocer el laboratorio", "Agendar cita"]
        }

    if any(k in msg_lower for k in ["ia", "inteligencia artificial", "machine learning", "innovacion", "cercle", "ai"]):
        if is_en:
            return {
                "reply": "In **Medical Innovation**, we are pioneers in Mexico with our **Timelapse Incubator** and AI platforms developed with **CercleAI**:\n\n- Machine Learning models trained on 15+ years of clinical data to optimize individualized ovarian stimulation protocols.\n- Continuous Timelapse morphokinetic monitoring evaluating embryo cell division kinetics to identify the blastocyst with highest live birth potential.",
                "suggested_actions": ["View Innovation page", "Book consultation"]
            }
        return {
            "reply": "En **Innovación y Tecnología**, desarrollamos junto a **CercleAI** soluciones de Inteligencia Artificial:\n\n- Modelos de Machine Learning entrenados con más de 15 años de datos para optimizar los protocolos de estimulación ovárica.\n- Algoritmos morfocinéticos que analizan imágenes continuas del desarrollo embrionario para identificar el blastocisto con mayor potencial de éxito.",
            "suggested_actions": ["Ver página de Innovación", "Agendar cita"]
        }

    if is_en:
        return {
            "reply": f"I would be glad to help you regarding *\"{message}\"*. At the **ABC Assisted Fertilization Clinic**, we combine over 30 years of clinical leadership, cutting-edge laboratory technology, and a warm, personalized medical faculty dedicated to helping you build your family.\n\nWould you like to connect with our patient concierge team to schedule your initial consultation?",
            "suggested_actions": ["View available treatments", "How does first visit work?", "Book a consultation", "Contact reception"]
        }

    return {
        "reply": f"Con gusto atiendo tu duda sobre *\"{message}\"*. En la **Clínica de Fertilización Asistida ABC** contamos con más de 30 años de experiencia, alta tecnología de primer mundo y un equipo médico cálido enfocado en lograr tu anhelo de formar una familia.\n\n¿Te gustaría que te comuniquemos con nuestro equipo de recepción para agendar tu primera valoración médica?",
        "suggested_actions": ["Ver tratamientos disponibles", "¿Cómo es la primera cita?", "Agendar una consulta", "Hablar con recepción"]
    }

def ask_baby_ia(user_message: str, history: List[Dict] = None, language: str = "es") -> Dict:
    is_en = (language == "en")
    if GEMINI_API_KEY:
        try:
            url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={GEMINI_API_KEY}"
            headers = {"Content-Type": "application/json"}
            
            system_prompt = CLINIC_KNOWLEDGE_PROMPT + ("\nIMPORTANT: Respond fluently and professionally in ENGLISH." if is_en else "\nIMPORTANTE: Responde en español cálido y profesional.")
            contents = [
                {"role": "user", "parts": [{"text": system_prompt}]}
            ]
            if history:
                for h in history:
                    r = "user" if h.get("role") == "user" else "model"
                    contents.append({"role": r, "parts": [{"text": h.get("content", "")}]})
            contents.append({"role": "user", "parts": [{"text": user_message}]})

            payload = {
                "contents": contents,
                "generationConfig": {
                    "temperature": 0.3,
                    "maxOutputTokens": 800
                }
            }

            resp = requests.post(url, headers=headers, json=payload, timeout=8)
            if resp.status_code == 200:
                data = resp.json()
                reply_text = data["candidates"][0]["content"]["parts"][0]["text"]
                return {
                    "reply": reply_text,
                    "suggested_actions": ["Book appointment", "View treatments", "Santa Fe Location"] if is_en else ["Agendar cita", "¿Qué tratamientos ofrecen?", "Ubicación en Santa Fe"]
                }
        except Exception as e:
            print(f"Error calling Gemini API: {e}. Falling back to specialized knowledge engine.")

    return generate_local_response(user_message, language=language)
