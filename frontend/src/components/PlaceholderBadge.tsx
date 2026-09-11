import React from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

interface PlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: string;
}

export const PlaceholderBadge: React.FC<{ text?: string }> = ({ text = "Espacio temporal - Fotografía en proceso de reemplazo" }) => {
  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#69B3E7]/20 text-[#004C97] border border-[#69B3E7]/40 backdrop-blur-sm shadow-sm">
      <Camera className="w-3.5 h-3.5 text-[#004C97] animate-pulse" />
      <span>{text}</span>
    </div>
  );
};

export const ImagePlaceholder: React.FC<PlaceholderProps> = ({
  label,
  className = "w-full h-64",
  aspectRatio = "aspect-video"
}) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-cfa-softBlue/60 via-cfa-iceBlue to-cfa-iceBlue/80 flex flex-col items-center justify-center p-6 border-2 border-dashed border-cfa-sky/30 text-center ${aspectRatio} ${className}`}>
      <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-cfa-cyan mb-3">
        <ImageIcon className="w-6 h-6" />
      </div>
      <p className="text-sm font-semibold text-cfa-navy mb-1">{label}</p>
      <p className="text-xs text-cfa-grayText max-w-xs mb-3">
        Imagen médica de referencia en desarrollo
      </p>
      <PlaceholderBadge />
    </div>
  );
};
