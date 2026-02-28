import React, { useEffect } from 'react';
import { X, Rocket, type LucideIcon } from 'lucide-react';

export interface InfoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  badge?: string;
  buttonLabel?: string;
  icon?: LucideIcon;
}

const InfoPopup: React.FC<InfoPopupProps> = ({
  isOpen,
  onClose,
  title = 'Coming Soon',
  message = "We're working hard to bring you something amazing. Stay tuned!",
  badge,
  buttonLabel = 'Got it!',
  icon: Icon = Rocket,
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card */}
      <div className="app-popup relative z-10 bg-white rounded-3xl shadow-2xl p-8 sm:p-12 max-w-md w-full flex flex-col items-center gap-5">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
            <Icon className="w-12 h-12 text-[#F37021]" />
          </div>
          <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#F37021] opacity-80" />
          <span className="absolute bottom-1 left-0 w-2.5 h-2.5 rounded-full bg-orange-300" />
        </div>

        {/* Badge */}
        {badge && (
          <div className="px-4 py-1 rounded-full bg-orange-50 border border-orange-200">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#F37021]">
              {badge}
            </span>
          </div>
        )}

        {/* Title + message */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1E3161] leading-tight">
            {title}
          </h2>
          <p className="mt-3 text-[#464646] text-base leading-relaxed">
            {message}
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100" />

        {/* CTA */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-full bg-[#F37021] text-white font-semibold text-base hover:bg-[#FF7D35] active:scale-[0.98] transition-all shadow-md"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default InfoPopup;
