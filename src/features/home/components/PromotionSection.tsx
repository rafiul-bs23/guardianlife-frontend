import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../../../shared/hooks/useMediaQuery';
import AppStoreButtons from '../../../shared/Components/AppStoreButtons';
import { useTranslation } from 'react-i18next';
import { MOCK_APP_PROMOTION_DATA } from '../api/mockData';

/* ─── Direction-aware scroll reveal ───
   visible = true  → element entered viewport (scroll down)
   visible = false → element exited from BOTTOM (scroll back up)
   no change       → element exited from TOP (scrolled past) → stays visible
*/
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
          // Element is below viewport → user scrolled back up → reverse
          setVisible(false);
        }
        // top < 0 → element above viewport → scrolled past → keep visible
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
};

const AppPromotion = () => {
  const { t } = useTranslation('home');
  const isMobile = useIsMobile();
  const [topRef, isTopVisible] = useScrollReveal(isMobile ? 0.5 : 0.8);
  const [bottomRef, isBottomVisible] = useScrollReveal(0.2);

  return (
    <div className="bg-gray-50 py-16 px-8 overflow-hidden">
      <motion.div
        ref={topRef}
        initial={{ opacity: 0, y: -100 }}
        animate={isTopVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-8">
          <h3 className="text-sm font-semibold text-gray-600 tracking-wide mb-3">
            {t('promotion.title')}
          </h3>

          <h2 className="text-4xl font-bold mb-4">
            {t('promotion.heading')}
          </h2>

          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
            {t('promotion.description')}
          </p>
        </div>
        <AppStoreButtons className='flex flex-col sm:flex-row gap-4 justify-center items-center' />
      </motion.div>

      <motion.div
        ref={bottomRef}
        initial={{ opacity: 0, y: 100 }}
        animate={isBottomVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto"
      >
        <div className="relative mt-8 flex justify-center px-4 md:px-0">
          <div
            className="overflow-hidden mx-auto w-full max-w-6xl relative"
            style={{
              clipPath: 'polygon(120px 0, 100% 0, 100% calc(100% - 120px), calc(100% - 120px) 100%, 0 100%, 0 80px)',
              borderRadius: '24px'
            }}
          >
            <img
              src={MOCK_APP_PROMOTION_DATA.image}
              alt="Guardian Life App"
              className="w-full h-auto aspect-[16/10] md:aspect-auto md:max-h-[450px] object-cover"
            />

            {/* Top-right circle icon (optional) */}

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppPromotion;
