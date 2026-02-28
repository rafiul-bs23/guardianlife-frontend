import React, { createContext, useContext, useState, useCallback } from 'react';
import InfoPopup, { type InfoPopupProps } from '../Components/InfoPopup';
import { type LucideIcon } from 'lucide-react';

export interface PopupOptions {
  title?: string;
  message?: string;
  badge?: string;
  buttonLabel?: string;
  icon?: LucideIcon;
}

interface PopupContextValue {
  showPopup: (options?: PopupOptions) => void;
}

const PopupContext = createContext<PopupContextValue | null>(null);

export const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<PopupOptions>({});

  const showPopup = useCallback((opts?: PopupOptions) => {
    console.log(opts);
    setOptions(opts ?? {});
    setIsOpen(true);
  }, []);

  const popupProps: InfoPopupProps = {
    isOpen,
    onClose: () => setIsOpen(false),
    ...options,
  };

  return (
    <PopupContext.Provider value={{ showPopup }}>
      {children}
      <InfoPopup {...popupProps} />
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const ctx = useContext(PopupContext);
  if (!ctx) throw new Error('usePopup must be used within PopupProvider');
  return ctx;
};
