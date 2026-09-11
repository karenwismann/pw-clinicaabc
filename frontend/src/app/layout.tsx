import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BabyAIChatbot } from '@/components/BabyAIChatbot';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Clínica de Fertilización Asistida | Centro Médico ABC Santa Fe',
  description: 'Más de 35 años de experiencia en el diagnóstico y tratamiento de problemas reproductivos complejos. Centro Médico ABC Santa Fe. Dirección: Dr. Carlos Navarro.',
  keywords: 'fertilización in vitro, FIV, infertilidad, Centro Médico ABC, Dr. Carlos Navarro, ICSI, ovodonación, congelación de óvulos, genética embrionaria, CDMX',
  icons: {
    icon: '/LOGOCFABC.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-cfa-grayLight text-cfa-grayDark">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <BabyAIChatbot />
        </LanguageProvider>
      </body>
    </html>
  );
}
