import { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useIsMobile } from '../../../shared/hooks/useMediaQuery';

import { MOCK_OUR_SOLUTIONS_DATA } from '../api/mockData';

const SolutionsComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const isMobile = useIsMobile();

  // Triggers when 10% (mobile) or 40% (PC) of the section is visible
  const isInView = useInView(containerRef, { once: true, amount: isMobile ? 0.1 : 0.3 });

  const getStackOrder = () => {
    const order = [];
    for (let i = 0; i < MOCK_OUR_SOLUTIONS_DATA.solutions.length; i++) {
      const index = (activeIndex + i) % MOCK_OUR_SOLUTIONS_DATA.solutions.length;
      order.push(index);
    }
    return order;
  };

  const stackOrder = getStackOrder();

  return (
    <section
      ref={containerRef}
      className="bg-[#F4F4F4] py-24 overflow-hidden my-2 md:my-0"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

        {/* Left Content Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: isMobile ? 0 : 2 }}
          className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <h5
            className="text-[#1E3161] text-lg font-bold tracking-[.2em] mb-4 uppercase"
          >
            {MOCK_OUR_SOLUTIONS_DATA.title}
          </h5>

          <h2
            className="text-[30px] lg:text-[35px] font-semibold leading-[1.2] text-[#333333] mb-6 max-w-[600px]"
          >
            {MOCK_OUR_SOLUTIONS_DATA.heading.map((item, index) => (
              <span key={index} style={{ color: item.color }} className={item.color === '#f97316' ? 'text-primary' : ''}>
                {item.text}
              </span>
            ))}
          </h2>

          {/* Tab Navigation */}
          <div className="flex flex-row items-center gap-4 lg:gap-4 flex-wrap">
            <div className="w-[10%] lg:w-8 h-[2px] bg-[#1E3161]" />
            <div className="flex items-center gap-4 lg:gap-4 flex-wrap w-[80%] lg:w-auto">
              {MOCK_OUR_SOLUTIONS_DATA.solutions.map((solution, index) => (
                <button
                  key={solution.id}
                  onClick={() => setActiveIndex(index)}
                  className={`text-sm font-semibold transition-all duration-500 px-3 py-2 rounded-full ${activeIndex === index
                    ? 'bg-[#2E3192] text-white shadow-lg'
                    : 'text-[#1E3161]/60 hover:text-[#1E3161]'
                    }`}
                >
                  {solution.title}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Stack Section */}
        <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] flex items-center justify-center lg:justify-start pr-0 lg:pr-2 lg:mr-[-100px]">
          <div className="relative w-[320px] h-[400px] md:w-[420px] md:h-[520px]">
            {MOCK_OUR_SOLUTIONS_DATA.solutions.map((solution, index) => {
              const position = stackOrder.indexOf(index);
              const zIndex = 40 - position * 10;
              const scale = 0.9 - position * 0.15;
              const translateX = position * 180;
              const translateY = position * 1;

              return (
                <motion.div
                  key={solution.id}
                  // Initial state: Hidden and shifted left
                  initial={{ x: translateX + 100, opacity: 0 }}
                  // Animate based on scroll (isInView) AND current state (position)
                  animate={isInView ? {
                    x: translateX,
                    y: translateY,
                    scale: scale,
                    opacity: position > 2 ? 0 : 1,
                    zIndex: zIndex
                  } : {}}
                  transition={{
                    x: { duration: 0.8, delay: isMobile ? (position + 0.8) * 0.8 : position * 0.8, ease: "easeOut" },
                    opacity: { duration: 0.8, delay: isMobile ? (position + 0.8) * 0.8 : position * 0.8 },
                    scale: { duration: 0.5 },
                    zIndex: { duration: 0 } // Immediate z-index switch
                  }}
                  onClick={() => setActiveIndex(index)}
                  className="absolute inset-0 cursor-pointer origin-center"
                  style={{ zIndex }}
                >
                  <div
                    className="relative w-full h-full shadow-2xl overflow-hidden rounded-tr-[20px] rounded-bl-[20px]"
                    style={{
                      clipPath: 'polygon(80px 0, 100% 0, 100% calc(100% - 80px), calc(100% - 80px) 100%, 0 100%, 0 80px)'
                    }}
                  >
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover object-center select-none"
                    />

                    <div className={`absolute inset-0 transition-opacity duration-500 ${position === 0 ? 'opacity-100' : 'opacity-80'}`}>
                      {position === 0 ? (
                        <Link
                          to={`/category?tabIndex=${index}`}
                          className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowUpRight size={20} />
                        </Link>
                      ) : (
                        <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-sm">
                          <ArrowUpRight size={20} />
                        </div>
                      )}

                      <div className="absolute bottom-10 left-10">
                        <h3 className="text-white text-xl md:text-2xl uppercase tracking-wider">
                          {solution.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsComponent;