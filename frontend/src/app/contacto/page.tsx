'use client';

import React from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, Sparkles } from 'lucide-react';
import { AppointmentForm } from '@/components/AppointmentModal';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactoPage() {
  const { language } = useLanguage();

  return (
    <div className="space-y-16 pb-20">
      <section className="bg-gradient-to-r from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-cfa-light text-xs font-semibold uppercase tracking-wider font-title">
            <Calendar className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Atención Personalizada' : 'Personalized Patient Care'}</span>
          </div>
          <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-light text-white">
            {language === 'es' ? 'Contacto & Citas Médicas' : 'Contact & Medical Appointments'}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-sans">
            {language === 'es'
              ? 'Estamos a tu disposición en el Centro Médico ABC Campus Santa Fe para acompañarte en cada paso.'
              : 'We are at your disposal at ABC Medical Center Santa Fe Campus to guide you through every step.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-cfa-softBlue shadow-soft space-y-6">
              <h3 className="font-title text-xl font-normal text-cfa-navy">
                {language === 'es' ? 'Información de Contacto' : 'Contact Information'}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-cfa-grayDark font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cfa-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-cfa-navy block font-title">Centro Médico ABC Santa Fe</strong>
                    <span>Av. Carlos Graef Fernández #154, edificio CEGOP, Piso 3, consultorio 332 (Entrada por Av. Vasco de Quiroga)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-cfa-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-cfa-navy block font-title">{language === 'es' ? 'Teléfonos de atención:' : 'Phone numbers:'}</strong>
                    <div className="space-y-0.5 mt-0.5">
                      <a href="tel:5552735194" className="text-cfa-cyan hover:underline block font-semibold">(55) 5273 5194</a>
                      <a href="tel:5552765463" className="text-cfa-cyan hover:underline block font-semibold">(55) 5276 54 63</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-cfa-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-cfa-navy block font-title">{language === 'es' ? 'Correo electrónico:' : 'Email address:'}</strong>
                    <a href="mailto:recepcion@infertilidadabc.com" className="text-cfa-cyan hover:underline font-semibold break-all">
                      recepcion@infertilidadabc.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-cfa-softBlue shadow-soft">
            <h3 className="font-title text-xl font-normal text-cfa-navy mb-4">
              {language === 'es' ? 'Envíanos un Mensaje o Agenda Cita' : 'Send a Message or Book Appointment'}
            </h3>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </div>
  );
}
