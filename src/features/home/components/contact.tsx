import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "../../../shared/hooks/useMediaQuery";

import ContactForm from '../../../shared/Components/ContactForm';
import { useTranslation } from 'react-i18next';

const useScrollReveal = (threshold: number) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else if (entry.boundingClientRect.top > 0) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
};

const ContactSection = () => {
  const { t } = useTranslation('home');
  const isMobile = useIsMobile();
  const [ref, isVisible] = useScrollReveal(isMobile ? 0.1 : 0.5);

  return (
    <div ref={ref} className="flex flex-col lg:flex-row gap-8 w-full px-4 xl:px-0 overflow-hidden">
      {/* Left: image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:flex-1 rounded-[32px] lg:rounded-tr-[32px] lg:rounded-br-[32px] lg:rounded-tl-none lg:rounded-bl-none h-64 lg:h-[567px] my-auto overflow-hidden"
      >
        <img
          src="/assets/images/home/GetInTouch.png"
          alt="/assets/images/home/GetInTouch.png"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right: form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        className="w-full lg:flex-1 flex flex-col py-8 lg:py-[62.5px] lg:pl-8 justify-center"
      >
        <ContactForm
          channel="home"
          variant="flat"
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          className="p-6 sm:p-12 lg:p-16 lg:mr-16"
        />
      </motion.div>
      <div></div>
    </div>
  );
};

export default ContactSection;
