'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, User, Loader2, Calendar, Phone, RefreshCw, ExternalLink } from 'lucide-react';
import { AppointmentModal } from './AppointmentModal';
import { CalendlyModal } from './CalendlyModal';
import { useLanguage } from '@/context/LanguageContext';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export const BabyAIChatbot: React.FC = () => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize initial message depending on language
  useEffect(() => {
    setMessages([
      {
        id: '1',
        sender: 'bot',
        text: language === 'es'
          ? '¡Hola! Soy Baby.IA, tu asistente médica virtual de la Clínica de Fertilización Asistida en el Centro Médico ABC Santa Fe.\n\nPuedo orientarte sobre nuestros 11 tratamientos (FIV, ICSI, Ovodonación sin Egg Splitting, PGD/NGS), el Dr. Carlos Navarro Martínez, costos generales o coordinar tu cita en línea por Calendly.\n\n¿En qué puedo ayudarte hoy?'
          : 'Hello! I am Baby.IA, your virtual medical assistant from the Assisted Fertilization Clinic at ABC Medical Center Santa Fe.\n\nI can assist you with our 11 specialized treatments (IVF, ICSI, Egg Donation with zero Egg Splitting, PGD/NGS), Dr. Carlos Navarro Martínez, or help you schedule a consultation via Calendly.\n\nHow can I help you today?',
        timestamp: new Date()
      }
    ]);
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickActions = [
    t.chatbot.quickAction1,
    t.chatbot.quickAction2,
    t.chatbot.quickAction3,
    t.chatbot.quickAction4,
    t.chatbot.quickAction5
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const message = textToSend || inputMessage.trim();
    if (!message) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    if (!textToSend) setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message,
          language 
        })
      });

      if (!response.ok) throw new Error('Error al conectar con Baby.IA');

      const data = await response.json();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: data.reply || (language === 'es' ? 'Disculpa, no pude procesar tu solicitud.' : 'Sorry, I could not process your request.'),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: language === 'es'
          ? 'En la Clínica de Fertilización Asistida del Centro Médico ABC Santa Fe contamos con más de 35 años de experiencia bajo la dirección del Dr. Carlos Navarro Martínez. Puedes agendar tu consulta médica al (55) 5273 5194, (55) 5276 54 63 o directamente vía Calendly.'
          : 'At the Assisted Fertilization Clinic in ABC Medical Center Santa Fe, we have over 35 years of medical experience directed by Dr. Carlos Navarro Martínez. You can schedule your consultation at +52 (55) 5273 5194, +52 (55) 5276 54 63 or directly via Calendly.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {!isOpen && (
          <div className="mb-2 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-cfa-softBlue text-xs text-cfa-navy animate-bounce">
            <span className="w-2 h-2 rounded-full bg-[#69B3E7] animate-ping"></span>
            <span className="font-medium font-sans">
              {t.chatbot.onlineText} <strong>Baby.IA</strong>
            </span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir asistente Baby.IA"
          className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-cfa-navy via-cfa-cyan to-cfa-light text-white shadow-floating flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-cfa-light/40 cursor-pointer"
        >
          <div className="absolute inset-0 rounded-full bg-cfa-cyan/30 animate-ping -z-10 group-hover:block"></div>
          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <div className="relative flex items-center justify-center">
              <Bot className="w-7 h-7 text-white" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#69B3E7] border-2 border-white rounded-full"></span>
            </div>
          )}
        </button>

        {/* Chat Window */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-[92vw] sm:w-[420px] h-[560px] max-h-[82vh] bg-white rounded-3xl shadow-2xl border border-cfa-softBlue flex flex-col overflow-hidden animate-scaleUp z-50">
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-cfa-navy via-cfa-midnight to-cfa-deepBlue text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cfa-cyan to-cfa-light flex items-center justify-center text-white shadow-inner">
                    <Bot className="w-6 h-6" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#69B3E7] border-2 border-cfa-navy rounded-full"></span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-title font-bold text-base text-white tracking-wide">Baby.IA</h3>
                    <span className="px-2 py-0.5 rounded-full bg-cfa-light/20 text-cfa-light text-[10px] font-semibold tracking-wider uppercase border border-cfa-light/30">
                      Gemini IA
                    </span>
                  </div>
                  <p className="text-xs text-blue-100 font-sans">
                    {t.chatbot.assistantSubtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsCalendlyModalOpen(true)}
                  title="Calendly"
                  className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick action bar */}
            <div className="px-3 py-2 bg-cfa-iceBlue border-b border-cfa-softBlue flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
              <span className="text-[11px] font-semibold text-cfa-cyan whitespace-nowrap pl-1 font-title">
                {language === 'es' ? 'Sugerencias:' : 'Suggestions:'}
              </span>
              {quickActions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(action)}
                  className="px-3 py-1 bg-white hover:bg-cfa-softBlue text-cfa-navy rounded-full text-xs whitespace-nowrap border border-cfa-grayBorder transition-colors shadow-xs flex-shrink-0 cursor-pointer font-sans"
                >
                  {action}
                </button>
              ))}
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-cfa-grayLight text-sm font-sans">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-xl bg-cfa-softBlue text-cfa-cyan flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-cfa-cyan to-cfa-deepBlue text-white rounded-tr-xs shadow-sm font-medium'
                        : 'bg-white text-cfa-navy rounded-tl-xs shadow-soft border border-cfa-softBlue/80'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-xl bg-cfa-navy text-white flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 text-cfa-grayText text-xs p-2">
                  <div className="w-7 h-7 rounded-xl bg-cfa-softBlue text-cfa-cyan flex items-center justify-center">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                  <span className="italic">{language === 'es' ? 'Baby.IA está consultando la base médica...' : 'Baby.IA is consulting clinical database...'}</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Bottom Actions & Input */}
            <div className="p-3 bg-white border-t border-cfa-grayBorder space-y-2">
              <div className="flex items-center justify-between px-1 text-[11px] text-cfa-grayText">
                <span className="flex items-center gap-1 font-sans">
                  <Phone className="w-3 h-3 text-cfa-cyan" />
                  (55) 5273 5194
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsCalendlyModalOpen(true)}
                    className="font-bold text-cfa-cyan hover:underline flex items-center gap-1 cursor-pointer font-title"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>Calendly</span>
                  </button>
                  <span className="text-gray-300">|</span>
                  <button
                    onClick={() => setIsAppointmentModalOpen(true)}
                    className="font-bold text-cfa-cyan hover:underline flex items-center gap-1 cursor-pointer font-title"
                  >
                    <span>{language === 'es' ? 'Agendar Cita' : 'Book Form'}</span>
                  </button>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder={t.chatbot.placeholder}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 bg-cfa-grayLight text-cfa-navy rounded-xl border border-cfa-grayBorder focus:outline-none focus:ring-2 focus:ring-cfa-cyan focus:bg-white text-xs font-sans transition-all"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputMessage.trim()}
                  className="w-10 h-10 rounded-xl bg-cfa-cyan hover:bg-cfa-deepBlue text-white flex items-center justify-center transition-all disabled:opacity-50 shadow-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Appointment & Calendly Modals */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />

      <CalendlyModal
        isOpen={isCalendlyModalOpen}
        onClose={() => setIsCalendlyModalOpen(false)}
      />
    </>
  );
};
