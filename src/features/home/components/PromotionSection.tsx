import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useIsMobile } from '../../../shared/hooks/useMediaQuery';


import AppStoreButtons from '../../../shared/Components/AppStoreButtons';

import { MOCK_APP_PROMOTION_DATA } from '../api/mockData';

const AppPromotion = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isTopInView = useInView(topRef, { once: true, amount: isMobile ? 0.5 : 0.8 });
  const isBottomInView = useInView(bottomRef, { once: true, amount: isMobile ? 0.2 : 0.2 });

  return (
    <div className="bg-gray-50 py-16 px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -100, }}
        animate={isTopInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto"
        ref={topRef}
      >
        {/* Header Section */}
        <div className="text-center mb-8">
          <h3 className="text-sm font-semibold text-gray-600 tracking-wide mb-3">
            {MOCK_APP_PROMOTION_DATA.title}
          </h3>

          <h2 className="text-4xl font-bold mb-4">
            {MOCK_APP_PROMOTION_DATA.heading.map((item, index) => (
              <span key={index} style={{ color: item.color }} className={item.color === '#f97316' ? 'text-orange-500' : ''}>
                {item.text}
              </span>
            ))}
          </h2>

          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
            {MOCK_APP_PROMOTION_DATA.description}
          </p>
        </div>
        <AppStoreButtons className='flex flex-col sm:flex-row gap-4 justify-center items-center' />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isBottomInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto"
        ref={bottomRef}
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