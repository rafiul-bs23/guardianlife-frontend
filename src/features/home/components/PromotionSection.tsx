import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import AppStoreButtons from '../../../shared/Components/AppStoreButtons';

import { MOCK_APP_PROMOTION_DATA } from '../api/mockData';

const AppPromotion = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <div ref={containerRef} className="bg-gray-50 py-16 px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto"
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
            <div
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppPromotion;