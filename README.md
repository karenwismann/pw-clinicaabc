# Clínica de Fertilización Asistida en el Centro Médico ABC (CFA)

Sitio web oficial desarrollado para la **Clínica de Fertilización Asistida en el Centro Médico ABC Santa Fe**, basado fielmente en los requerimientos, contenidos, estructura clínica y componentes definidos en el documento maestro `core.pdf`.

---

## 🎨 Paleta Institucional de Colores

- **Azul Fuerte / Marino**: `#0A2540`, `#0F172A`, `#1E3A8A` (Header, navegación, títulos y footer)
- **Azul Claro / Celeste**: `#0284C7`, `#38BDF8`, `#E0F2FE` (Botones de acción, acentos y chatbot)
- **Blanco**: `#FFFFFF` (Superficies limpias y legibilidad clínica)
- **Gris Médico / Neutro**: `#F8FAFC`, `#F1F5F9`, `#64748B` (Tarjetas, bordes sutiles y textos)

---

## 🚀 Tecnologías Utilizadas

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Iconografía:** Lucide React
- **Imágenes:** `baby1.jpg`, `baby2.jpg`, logo oficial `LOGOCFABC.png` y placeholders de referencia médica claramente señalizados con badges interactivos.

### Backend
- **Framework:** Python FastAPI
- **ORM / Base de Datos:** SQLAlchemy + SQLite (`cfa_database.db`)
- **Validaciones:** Pydantic
- **Asistente Virtual:** Motor de Inteligencia Artificial Gemini + Base de conocimiento especializada de la Clínica ABC.

---

## 🤖 Chatbot Flotante: Baby.IA

- **Ubicación:** Burbuja flotante fija en la esquina inferior derecha (`bottom-6 right-6`), siempre visible sobre todo el contenido.
- **Motor:** Inteligencia Artificial Gemini de Google con fallback de base médica experta.
- **Funciones:**
  - Respuestas inmediatas y empáticas sobre FIV, ICSI, Ovodonación, costos, preparación médica y dudas frecuentes.
  - Información sobre el Dr. Carlos Navarro Martínez y el equipo médico del Centro Médico ABC Santa Fe.
  - Botón integrado para agendar cita de primera vez en cualquier momento.

---

## 📂 Estructura de Páginas y Componentes

1. **Inicio (`/`)**:
   - Carrusel informativo full-screen con `baby1`, `baby2` y `baby3` (placeholder referenciado).
   - Bloque destacado: *"Más de 30 años ayudando a transformar familias"*.
   - Línea de tiempo interactiva (1985 - 2010+).
   - Despliegue interactivo de los 11 tratamientos.
   - Formulario de agendamiento de cita conectado a `recepcion@infertilidadabc.com`.
2. **Sobre Nosotros (`/sobre-nosotros`)**:
   - Quiénes somos y equipo multidisciplinario desde 1994.
   - Nuestra Historia detallada del Dr. Carlos Navarro Martínez.
   - Carrusel interactivo de Misión y Visión.
   - Nuestra práctica médica en Santa Fe.
   - Componente interactivo **"Valores que nos mueven"** (Apoyo Holístico, Planeación, Calidad Humana, Trato Personalizado con **RI Witness**, Innovación, Responsabilidad Social, y Equidad de Género con 90% mujeres).
3. **Pasos a Seguir (`/pasos-a-seguir`)**:
   - Pasos 1 al 5 estructurados para pacientes + Botón CTA de agenda de cita.
4. **Instalaciones (`/instalaciones`)**:
   - Laboratorio de reproducción asistida, incubadoras trigas a 37°C, quirófanos y sistema RI Witness.
5. **El Equipo (`/equipo`)**:
   - Biografía completa y trayectoria del Dr. Carlos Navarro Martínez.
   - Tarjetas con botón "Conocer más" (Dra. Tanya Montañez, Dr. Fernando Galván, Dra. Stephanie Lizmi, Dr. Jose Manuel Muñoz de Cote).
   - Cuadros interactivos de Ginecólogos Asociados (13 médicos), Urología (`www.urologiamd.mx`), Genética, Embriología, Andrología, Oncofertilidad, Donación y Apoyo Psicológico.
6. **Tratamientos (`/tratamientos`)**:
   - Despliegue completo con filtros de los 11 tratamientos: FIV (5 pasos detallados), ICSI (>80% éxito), Hatch Asistido (Láser), Transferencia (Fresco vs Congelado), Diagnóstico Genético (PGD/NGS), Congelación de Óvulos, Embriones y Esperma (>15 años), Donación con **Flujograma interactivo** y **Prohibición estricta de Egg Splitting**, Oncofertilidad y Cirugía Reproductiva/Robótica.
7. **Innovación (`/innovacion`)**:
   - Machine Learning con **CercleAI** (15 años de datos estadísticos).
   - Inteligencia Artificial y Morfocinética embrionaria.
   - Cronograma interactivo (ML, Morfo Cinética, IA, Genética Molecular).
   - Sección de Blogs y enlace al Podcast en YouTube.
8. **Resultados (`/resultados`)**:
   - Estadísticas de éxito por grupo de edad, comparativas internacionales y testimonios.
9. **Concierge (`/concierge`)**:
   - Cómo llegar a Centro Médico ABC Santa Fe (mapa e indicaciones).
   - Hoteles recomendados en Santa Fe.
   - Instrucciones médicas pre y post procedimientos.
   - Farmacias especializadas cercanas y directorio de páginas útiles.
10. **Contacto (`/contacto`)**:
    - Directorio directo, teléfonos `(55) 5273 5194` y `(55) 5276 54 63`, email `recepcion@infertilidadabc.com` y formulario.

---

## 💻 Instrucciones para Ejecutar el Proyecto

### Opción 1: Ejecución Rápida con `start.sh`
```bash
./start.sh
```

### Opción 2: Ejecución Manual

#### 1. Iniciar Backend (FastAPI):
```bash
cd backend
./venv/bin/uvicorn main:app --reload --port 8000
```
*API y documentación interactiva disponible en: `http://localhost:8000/docs`*

#### 2. Iniciar Frontend (Next.js):
```bash
cd frontend
export PATH="$(pwd)/../.tools/node-v20.18.0-darwin-arm64/bin:$PATH" # si usa node integrado
npm run dev
```
*Portal web disponible en: `http://localhost:3000`*
