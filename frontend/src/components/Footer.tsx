'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Youtube, Shield, ArrowUp, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-cfa-navy to-cfa-midnight text-white pt-16 pb-12 border-t border-cfa-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Columna 1: Nosotros */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded-2xl inline-block">
              <img
                src="/LOGOCFABC.png"
                alt="Clínica de Fertilización Asistida ABC"
                className="h-10 w-auto max-w-[180px] object-contain"
              />
            </div>
            <h4 className="font-title text-base font-bold text-white tracking-tight">{t.footer.aboutTitle}</h4>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-sans">
              {t.footer.aboutText}
            </p>
            <div className="pt-2">
              <h5 className="font-title text-xs font-semibold text-cfa-light uppercase tracking-wider mb-3">{t.footer.followUs}</h5>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/clinicafertilizacionasistida/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de CFA ABC @clinicafertilizacionasistida"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-cfa-cyan flex items-center justify-center text-white transition-all hover:scale-105"
                  title="Instagram @clinicafertilizacionasistida"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/ClinicadeFertilizacionAsistida"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de CFA ABC"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-cfa-cyan flex items-center justify-center text-white transition-all hover:scale-105"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/cl%C3%ADnica-de-fertilizaci%C3%B3n-asistida/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de CFA ABC"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-cfa-cyan flex items-center justify-center text-white transition-all hover:scale-105"
                  title="LinkedIn Clínica de Fertilización Asistida ABC"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                {/* Official YouTube Channel */}
                <a
                  href="https://www.youtube.com/@infertilidadabc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Canal oficial de YouTube @infertilidadabc"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-all hover:scale-105"
                  title="YouTube @infertilidadabc"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Columna 2: Ubicación */}
          <div className="space-y-3 font-sans">
            <h4 className="font-title text-base font-bold text-white tracking-tight flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cfa-light" />
              {t.footer.locationTitle}
            </h4>
            <div className="text-xs sm:text-sm text-blue-100 space-y-1.5 leading-relaxed">
              <p className="font-semibold text-white">{t.footer.locationText1}</p>
              <p>{t.footer.locationText2}</p>
              <p className="text-cfa-light text-xs font-medium">{t.footer.locationText3}</p>
              <p>{t.footer.locationText4}</p>
            </div>
            <div className="pt-2">
              <Link
                href="/concierge"
                className="inline-flex items-center gap-1.5 text-xs text-cfa-light hover:text-white underline font-medium font-title"
              >
                {t.footer.conciergeLink}
              </Link>
            </div>
          </div>

          {/* Columna 3: Contacto */}
          <div className="space-y-3 font-sans">
            <h4 className="font-title text-base font-bold text-white tracking-tight flex items-center gap-2">
              <Phone className="w-4 h-4 text-cfa-light" />
              {t.footer.contactTitle}
            </h4>
            <div className="text-xs sm:text-sm text-blue-100 space-y-2.5">
              <div>
                <p className="text-xs text-blue-200 font-medium">{t.footer.phonesLabel}</p>
                <div className="flex flex-col gap-1 mt-1">
                  <a href="tel:5552735194" className="text-white hover:text-cfa-light font-semibold transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cfa-cyan" />
                    (55) 5273 5194
                  </a>
                  <a href="tel:5552765463" className="text-white hover:text-cfa-light font-semibold transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cfa-cyan" />
                    (55) 5276 54 63
                  </a>
                </div>
              </div>
              <div>
                <p className="text-xs text-blue-200 font-medium">{t.footer.emailLabel}</p>
                <a
                  href="mailto:recepcion@infertilidadabc.com"
                  className="text-cfa-light hover:text-white font-medium transition-colors break-all block mt-1"
                >
                  recepcion@infertilidadabc.com
                </a>
              </div>
            </div>
          </div>

          {/* Columna 4: Menú (Nav Bar) */}
          <div className="space-y-3 font-title">
            <h4 className="text-base font-bold text-white tracking-tight">{t.footer.menuTitle}</h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-blue-100">
              <li>
                <Link href="/" className="hover:text-cfa-light transition-colors">{t.nav.home}</Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="hover:text-cfa-light transition-colors">{t.nav.aboutUs}</Link>
              </li>
              <li>
                <Link href="/pasos-a-seguir" className="hover:text-cfa-light transition-colors">{t.nav.steps}</Link>
              </li>
              <li>
                <Link href="/instalaciones" className="hover:text-cfa-light transition-colors">{t.nav.facilities}</Link>
              </li>
              <li>
                <Link href="/equipo" className="hover:text-cfa-light transition-colors">{t.nav.team}</Link>
              </li>
              <li>
                <Link href="/tratamientos" className="hover:text-cfa-light transition-colors">{t.nav.treatments}</Link>
              </li>
              <li>
                <Link href="/innovacion" className="hover:text-cfa-light transition-colors">{t.nav.innovation}</Link>
              </li>
              <li>
                <Link href="/resultados" className="hover:text-cfa-light transition-colors">{t.nav.results}</Link>
              </li>
              <li>
                <Link href="/concierge" className="hover:text-cfa-light transition-colors">{t.nav.concierge}</Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-cfa-light transition-colors">{t.nav.bookAppointment}</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Links Útiles y Sociedades Científicas Internacionales */}
        <div className="py-6 border-b border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 font-sans text-xs">
          <div className="flex items-center gap-2 text-cfa-light font-title uppercase font-bold tracking-wider text-[11px] flex-shrink-0">
            <ExternalLink className="w-3.5 h-3.5 text-cfa-light" />
            <span>{language === 'es' ? 'Links Útiles & Sociedades Científicas:' : 'Useful Links & Scientific Societies:'}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <a
              href="https://www.asrm.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#004C97] hover:text-white text-blue-100 transition-all flex items-center gap-1.5 font-title font-semibold shadow-xs border border-white/10 hover:border-[#69B3E7]"
              title="American Society for Reproductive Medicine (ASRM)"
            >
              <span className="font-extrabold text-white">ASRM</span>
              <span className="text-blue-200 text-[11px] hidden sm:inline">• American Society for Reproductive Medicine</span>
              <ExternalLink className="w-3 h-3 opacity-70 ml-0.5" />
            </a>

            <a
              href="https://www.sart.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#004C97] hover:text-white text-blue-100 transition-all flex items-center gap-1.5 font-title font-semibold shadow-xs border border-white/10 hover:border-[#69B3E7]"
              title="Society for Assisted Reproductive Technology (SART)"
            >
              <span className="font-extrabold text-white">SART</span>
              <span className="text-blue-200 text-[11px] hidden sm:inline">• Society for Assisted Reproductive Technology</span>
              <ExternalLink className="w-3 h-3 opacity-70 ml-0.5" />
            </a>

            <a
              href="https://www.eshre.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#004C97] hover:text-white text-blue-100 transition-all flex items-center gap-1.5 font-title font-semibold shadow-xs border border-white/10 hover:border-[#69B3E7]"
              title="European Society of Human Reproduction and Embryology (ESHRE)"
            >
              <span className="font-extrabold text-white">ESHRE</span>
              <span className="text-blue-200 text-[11px] hidden sm:inline">• European Society of Human Reproduction and Embryology</span>
              <ExternalLink className="w-3 h-3 opacity-70 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200 font-sans">
          <p>© {new Date().getFullYear()} Clínica de Fertilización Asistida en el Centro Médico ABC. {t.footer.rights}</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-blue-100">
              <Shield className="w-3.5 h-3.5 text-cfa-light" />
              Seguridad Electrónica RI Witness
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-cfa-light hover:text-white transition-colors font-title"
            >
              <span>{t.footer.scrollUp}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
