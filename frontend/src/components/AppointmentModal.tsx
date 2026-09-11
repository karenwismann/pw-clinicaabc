'use client';

import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, HelpCircle, MessageSquare, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

export const AppointmentForm: React.FC<{ onSuccess?: () => void; className?: string }> = ({ onSuccess, className = "" }) => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    como_te_enteraste: 'internet',
    como_podemos_ayudarte: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error(language === 'es' ? 'No se pudo enviar la solicitud. Por favor intenta de nuevo.' : 'Failed to send request. Please try again.');
      }

      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err: any) {
      setError(err.message || (language === 'es' ? 'Ocurrió un error al procesar tu cita.' : 'An error occurred while booking.'));
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-soft text-center border border-cfa-softBlue">
        <div className="w-16 h-16 bg-[#69B3E7]/20 text-[#004C97] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-title text-2xl font-bold text-cfa-navy mb-2">
          {t.home.formSuccess}
        </h3>
        <p className="text-cfa-grayText mb-4 font-sans text-sm leading-relaxed">
          {t.home.formSuccessMsg}
        </p>
        <div className="p-4 bg-cfa-iceBlue rounded-xl text-xs text-cfa-cyan font-semibold mb-6">
          📍 Centro Médico ABC Santa Fe • Consultorio 332 • Tel: (55) 5273 5194
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              nombre: '',
              telefono: '',
              correo: '',
              como_te_enteraste: 'internet',
              como_podemos_ayudarte: ''
            });
          }}
          className="px-6 py-2.5 bg-cfa-cyan text-white text-sm font-bold rounded-xl hover:bg-cfa-deepBlue transition-colors shadow-sm font-title cursor-pointer"
        >
          {language === 'es' ? 'Enviar otra solicitud' : 'Send another request'}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 font-sans ${className}`}>
      {error && (
        <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-cfa-navy uppercase tracking-wider mb-1 font-title">
          {t.home.formName}
        </label>
        <div className="relative">
          <User className="w-4 h-4 text-cfa-grayText absolute left-3.5 top-3.5" />
          <input
            type="text"
            required
            placeholder={language === 'es' ? "Ej. María Rodríguez Morales" : "e.g. Mary Jane Watson"}
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-cfa-grayBorder bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cfa-cyan focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-cfa-navy uppercase tracking-wider mb-1 font-title">
            {t.home.formPhone}
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-cfa-grayText absolute left-3.5 top-3.5" />
            <input
              type="tel"
              required
              placeholder={language === 'es' ? "Ej. (55) 1234 5678" : "+1 (555) 123-4567"}
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-cfa-grayBorder bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cfa-cyan focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-cfa-navy uppercase tracking-wider mb-1 font-title">
            {t.home.formEmail}
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-cfa-grayText absolute left-3.5 top-3.5" />
            <input
              type="email"
              required
              placeholder="correo@ejemplo.com"
              value={formData.correo}
              onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-cfa-grayBorder bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cfa-cyan focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-cfa-navy uppercase tracking-wider mb-1 font-title">
          {t.home.formSource}
        </label>
        <div className="relative">
          <HelpCircle className="w-4 h-4 text-cfa-grayText absolute left-3.5 top-3.5" />
          <select
            value={formData.como_te_enteraste}
            onChange={(e) => setFormData({ ...formData, como_te_enteraste: e.target.value })}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-cfa-grayBorder bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cfa-cyan focus:border-transparent transition-all appearance-none cursor-pointer"
          >
            <option value="internet">{language === 'es' ? 'Internet / Búsqueda web' : 'Internet / Web search'}</option>
            <option value="podcast">{language === 'es' ? 'Podcast CFA / YouTube' : 'CFA Podcast / YouTube'}</option>
            <option value="referido">{language === 'es' ? 'Referido por familiar o amigo' : 'Referred by family or friend'}</option>
            <option value="redes sociales">{language === 'es' ? 'Redes sociales (Facebook, Instagram)' : 'Social media (Facebook, Instagram)'}</option>
            <option value="médico">{language === 'es' ? 'Recomendación médica' : 'Doctor recommendation'}</option>
            <option value="otro">{language === 'es' ? 'Otro' : 'Other'}</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-cfa-navy uppercase tracking-wider mb-1 font-title">
          {t.home.formMsg}
        </label>
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-cfa-grayText absolute left-3.5 top-3" />
          <textarea
            required
            rows={3}
            placeholder={language === 'es' ? "Cuéntanos brevemente tu motivo de consulta (ej. FIV, segunda opinión, preservación de óvulos)..." : "Briefly tell us your reason for consultation (e.g. IVF, second opinion, egg freezing)..."}
            value={formData.como_podemos_ayudarte}
            onChange={(e) => setFormData({ ...formData, como_podemos_ayudarte: e.target.value })}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-cfa-grayBorder bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cfa-cyan focus:border-transparent transition-all resize-none"
          ></textarea>
        </div>
      </div>

      <p className="text-[11px] text-cfa-grayText">
        🔒 {language === 'es' ? 'Información médica confidencial enviada directamente a' : 'Confidential medical data routed directly to'} <strong>recepcion@infertilidadabc.com</strong>
      </p>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cfa-cyan to-cfa-deepBlue text-white font-bold text-sm shadow-md hover:shadow-lg hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 font-title"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>{language === 'es' ? 'Procesando...' : 'Processing...'}</span>
          </>
        ) : (
          <>
            <Calendar className="w-4 h-4" />
            <span>{t.home.formSubmit}</span>
          </>
        )}
      </button>
    </form>
  );
};

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cfa-navy/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-cfa-softBlue/60 ring-1 ring-black/5 overflow-hidden max-h-[90vh] flex flex-col animate-scaleUp">
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white rounded-t-3xl flex-shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cfa-cyan/20 border border-cfa-cyan/30 flex items-center justify-center text-cfa-light">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-title text-lg font-bold text-white">
                {language === 'es' ? 'Agenda tu Cita Médica Directa' : 'Book Direct Consultation'}
              </h3>
              <p className="text-xs text-cfa-light font-sans">
                {language === 'es' ? 'Centro Médico ABC Campus Santa Fe • Consultorio 332' : 'ABC Medical Center Santa Fe Campus • Suite 332'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto">
          <AppointmentForm onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
};
