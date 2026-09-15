'use client';

import React from 'react';
import { MapPin, Navigation, Hotel, Pill, Phone, Plane, Sparkles, Building2, Star, Clock, Mail, ExternalLink, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CONCIERGE_HOTELS, CONCIERGE_PHARMACIES } from '@/data/concierge';

export default function ConciergePage() {
  const { language } = useLanguage();

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-cfa-light text-xs font-semibold uppercase tracking-wider font-title">
            <Plane className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Atención al Paciente Nacional e Internacional' : 'National & International Patient Care'}</span>
          </div>
          <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            {language === 'es' ? 'Servicio de Concierge & Ubicación' : 'Concierge Services & Directions'}
          </h1>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-sans">
            {language === 'es'
              ? 'Todo lo que necesitas para tu estancia, hospedaje, farmacias y visita médica al Centro Médico ABC Campus Santa Fe.'
              : 'Everything you need for your stay, accommodations, pharmacies, and medical visit at ABC Medical Center Santa Fe Campus.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. Ubicación y Cómo Llegar */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cfa-softBlue shadow-soft space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-cfa-softBlue text-cfa-cyan flex items-center justify-center font-bold">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cfa-cyan uppercase tracking-wider font-title">
                {language === 'es' ? 'Dirección Exacta' : 'Exact Address'}
              </span>
              <h2 className="font-title text-2xl sm:text-3xl font-bold text-cfa-navy">
                Centro Médico ABC Campus Santa Fe
              </h2>
            </div>
          </div>

          <div className="p-5 bg-cfa-iceBlue rounded-2xl border border-cfa-softBlue space-y-2.5 text-sm text-cfa-navy font-sans">
            <p className="font-bold text-base text-cfa-navy flex items-center gap-2">
              <Building2 className="w-5 h-5 text-cfa-cyan flex-shrink-0" />
              <span>Av. Carlos Graef Fernández #154, edificio CEGOP, Piso 3, consultorio 332</span>
            </p>
            <div className="p-3 bg-white/90 rounded-xl border border-cfa-softBlue/80 text-xs sm:text-sm text-cfa-navy font-medium flex items-start gap-2">
              <span className="text-amber-500 font-bold">🚗</span>
              <p>
                <strong>{language === 'es' ? 'IMPORTANTE: ' : 'IMPORTANT: '}</strong>
                {language === 'es'
                  ? 'La entrada a estacionamiento y consultorios es por Avenida Vasco de Quiroga.'
                  : 'Parking and clinical suites entrance is located on Vasco de Quiroga Avenue.'}
              </p>
            </div>
            <p className="text-xs text-cfa-grayText pt-1">
              Col. Tlaxala Santa Fe, Cuajimalpa de Morelos, CP 05300, Ciudad de México, CDMX.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2 font-title">
            <a
              href="https://maps.google.com/?q=Centro+Medico+ABC+Santa+Fe"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-cfa-cyan text-white text-xs sm:text-sm font-bold hover:bg-cfa-deepBlue transition-colors flex items-center gap-2 shadow-soft"
            >
              <Navigation className="w-4 h-4" />
              <span>{language === 'es' ? 'Abrir en Google Maps' : 'Open in Google Maps'}</span>
            </a>

            <a
              href="https://waze.com/ul?q=Centro+Medico+ABC+Santa+Fe"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white border border-cfa-grayBorder text-cfa-navy text-xs sm:text-sm font-bold hover:bg-cfa-graySlate transition-colors flex items-center gap-2 shadow-xs"
            >
              <span>{language === 'es' ? 'Abrir en Waze' : 'Open in Waze'}</span>
            </a>
          </div>
        </div>

        {/* 2. Hoteles Recomendados en Santa Fe */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cfa-softBlue text-cfa-cyan text-xs font-semibold uppercase tracking-wider font-title">
              <Hotel className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Hospedaje & Alojamiento' : 'Accommodations & Lodging'}</span>
            </div>
            <h2 className="font-title text-2xl sm:text-3xl font-bold text-cfa-navy">
              {language === 'es' ? 'Hoteles Recomendados en Santa Fe' : 'Recommended Hotels in Santa Fe'}
            </h2>
            <p className="text-xs sm:text-sm text-cfa-grayText font-sans">
              {language === 'es'
                ? 'Opciones hoteleras de alto nivel ubicadas a pocos minutos del Centro Médico ABC Santa Fe con máxima comodidad para tu tratamiento.'
                : 'Premium hotels located minutes away from ABC Medical Center Santa Fe offering exceptional comfort during your treatment.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONCIERGE_HOTELS.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-cfa-softBlue shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-4">
                  {/* Top: Icon + Stars */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-cfa-softBlue text-cfa-cyan flex items-center justify-center font-bold">
                      <Hotel className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/70">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < hotel.stars
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-amber-200 fill-transparent'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="font-title text-base sm:text-lg font-bold text-cfa-navy group-hover:text-cfa-cyan transition-colors leading-snug">
                    {hotel.name}
                  </h3>

                  {/* Details: Phone & Address */}
                  <div className="space-y-2.5 text-xs text-cfa-grayDark font-sans pt-1">
                    <a
                      href={`tel:${hotel.phoneRaw}`}
                      className="flex items-center gap-2 font-semibold text-cfa-cyan hover:text-cfa-deepBlue transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-cfa-cyan flex-shrink-0" />
                      <span>{hotel.phone}</span>
                    </a>

                    <p className="flex items-start gap-2 text-cfa-grayDark leading-relaxed">
                      <MapPin className="w-3.5 h-3.5 text-cfa-cyan flex-shrink-0 mt-0.5" />
                      <span>{hotel.address}</span>
                    </p>
                  </div>
                </div>

                {/* Bottom: Google Maps Link */}
                <div className="pt-3 border-t border-cfa-grayBorder">
                  <a
                    href={hotel.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cfa-cyan group-hover:text-cfa-deepBlue transition-colors font-title"
                  >
                    <span>{language === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Farmacias de Alta Especialidad */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cfa-softBlue text-cfa-cyan text-xs font-semibold uppercase tracking-wider font-title">
              <Pill className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Medicamentos & Farmacia' : 'Medications & Pharmacy'}</span>
            </div>
            <h2 className="font-title text-2xl sm:text-3xl font-bold text-cfa-navy">
              {language === 'es' ? 'Farmacias de Alta Especialidad' : 'Specialty Fertility Pharmacies'}
            </h2>
            <p className="text-xs sm:text-sm text-cfa-grayText font-sans">
              {language === 'es'
                ? 'Establecimientos autorizados para la adquisición puntual de medicamentos hormonales, refrigerados y soporte de tratamientos de fertilidad.'
                : 'Accredited pharmacies for temperature-sensitive hormonal medications and specialized fertility care support.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONCIERGE_PHARMACIES.map((pharmacy) => (
              <div
                key={pharmacy.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-cfa-softBlue shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-4">
                  {/* Top: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-cfa-softBlue text-cfa-cyan flex items-center justify-center font-bold">
                      <Pill className="w-5 h-5" />
                    </div>
                    {pharmacy.is24Hours ? (
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold font-title border border-emerald-300">
                        {language === 'es' ? '24 Horas' : '24/7 Service'}
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-cfa-softBlue text-cfa-cyan text-[11px] font-bold font-title border border-cfa-softBlue">
                        {language === 'es' ? 'Especialidad' : 'Specialty'}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="font-title text-base sm:text-lg font-bold text-cfa-navy group-hover:text-cfa-cyan transition-colors leading-snug">
                    {pharmacy.name}
                  </h3>

                  {/* Details */}
                  <div className="space-y-3 text-xs text-cfa-grayDark font-sans pt-1">
                    {/* Phones */}
                    <div className="space-y-1">
                      <span className="font-bold text-cfa-navy flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-cfa-cyan" />
                        <span>{language === 'es' ? 'Teléfonos de Contacto:' : 'Phone Numbers:'}</span>
                      </span>
                      <div className="pl-5 space-y-1">
                        {pharmacy.phones.map((p, pIdx) => (
                          <a
                            key={pIdx}
                            href={`tel:${p.raw}`}
                            className="block font-semibold text-cfa-cyan hover:text-cfa-deepBlue transition-colors"
                          >
                            {p.display}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Address */}
                    <p className="flex items-start gap-2 leading-relaxed">
                      <MapPin className="w-3.5 h-3.5 text-cfa-cyan flex-shrink-0 mt-0.5" />
                      <span>{pharmacy.address}</span>
                    </p>

                    {/* Hours */}
                    <div className="flex items-start gap-2 leading-relaxed p-3 bg-cfa-grayLight rounded-xl border border-cfa-grayBorder/70">
                      <Clock className="w-3.5 h-3.5 text-cfa-cyan flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold block text-cfa-navy">{language === 'es' ? 'Horario de Atención:' : 'Hours of Operation:'}</span>
                        <span className="text-cfa-grayText">{pharmacy.hours[language] || pharmacy.hours.es}</span>
                      </div>
                    </div>

                    {/* Email if available */}
                    {pharmacy.email && (
                      <a
                        href={`mailto:${pharmacy.email}`}
                        className="flex items-center gap-2 font-semibold text-cfa-cyan hover:text-cfa-deepBlue transition-colors break-all"
                      >
                        <Mail className="w-3.5 h-3.5 text-cfa-cyan flex-shrink-0" />
                        <span>{pharmacy.email}</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom: Google Maps Link */}
                <div className="pt-3 border-t border-cfa-grayBorder">
                  <a
                    href={pharmacy.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cfa-cyan group-hover:text-cfa-deepBlue transition-colors font-title"
                  >
                    <span>{language === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Páginas Útiles & Canales Digitales Oficiales */}
        <div className="bg-gradient-to-br from-[#004C97] via-[#0B2559] to-[#071A40] rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-cfa-softBlue space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-cfa-cyan uppercase tracking-wider font-title">
              {language === 'es' ? 'Recursos & Redes Oficiales' : 'Official Resources & Channels'}
            </span>
            <h3 className="font-title text-2xl sm:text-3xl font-bold text-white">
              {language === 'es' ? 'Páginas Útiles y Enlaces Oficiales' : 'Useful Links & Official Portals'}
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 font-sans leading-relaxed max-w-3xl">
              {language === 'es'
                ? 'Accede a nuestras redes sociales oficiales verificadas, canal de podcast en video y plataformas médicas del Centro Médico ABC.'
                : 'Access our verified social media accounts, video podcast channel, and official ABC Medical Center clinical portals.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 font-sans">
            {/* Instagram Oficial */}
            <a
              href="https://www.instagram.com/clinicafertilizacionasistida/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 transition-all hover:scale-[1.02] group flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-cfa-cyan flex items-center justify-center text-white">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </span>
                <span className="text-[11px] font-bold text-cfa-light group-hover:underline font-title">
                  {language === 'es' ? 'Ver Perfil' : 'View Profile'} →
                </span>
              </div>
              <div>
                <h4 className="font-title font-bold text-white text-sm">Instagram</h4>
                <p className="text-xs text-blue-100">@clinicafertilizacionasistida</p>
              </div>
            </a>

            {/* YouTube Oficial */}
            <a
              href="https://www.youtube.com/@infertilidadabc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 transition-all hover:scale-[1.02] group flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </span>
                <span className="text-[11px] font-bold text-cfa-light group-hover:underline font-title">
                  {language === 'es' ? 'Ver Canal' : 'View Channel'} →
                </span>
              </div>
              <div>
                <h4 className="font-title font-bold text-white text-sm">YouTube Oficial</h4>
                <p className="text-xs text-blue-100">@infertilidadabc • Podcast</p>
              </div>
            </a>

            {/* Centro Médico ABC */}
            <a
              href="https://centromedicoabc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 transition-all hover:scale-[1.02] group flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-cfa-cyan flex items-center justify-center text-white">
                  <Building2 className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-bold text-cfa-light group-hover:underline font-title">
                  {language === 'es' ? 'Portal ABC' : 'ABC Portal'} →
                </span>
              </div>
              <div>
                <h4 className="font-title font-bold text-white text-sm">Centro Médico ABC</h4>
                <p className="text-xs text-blue-100">Campus Santa Fe</p>
              </div>
            </a>

            {/* Recepción CFA */}
            <a
              href="mailto:recepcion@infertilidadabc.com"
              className="p-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 transition-all hover:scale-[1.02] group flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-cfa-navy border border-white/30 flex items-center justify-center text-cfa-light">
                  <Phone className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-bold text-cfa-light group-hover:underline font-title">
                  {language === 'es' ? 'Escribir' : 'Email Us'} →
                </span>
              </div>
              <div>
                <h4 className="font-title font-bold text-white text-sm">Recepción Directa</h4>
                <p className="text-xs text-blue-100 break-all">recepcion@infertilidadabc.com</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
