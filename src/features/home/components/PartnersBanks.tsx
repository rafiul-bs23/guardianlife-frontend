import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { useIsMobile } from '../../../shared/hooks/useMediaQuery';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_PARTNER_BANKS_DATA } from '../api/mockData';

const PartnerBanks = () => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: true, amount: isMobile ? 0.1 : 0.2 });

  // Variants for the staggered card container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each card animation
        delayChildren: 0.4,   // Wait for header animation to finish
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <div ref={ref} className=" py-16 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h3 className="text-sm font-semibold text-gray-600 tracking-wide mb-4 uppercase">
            {MOCK_PARTNER_BANKS_DATA.title}
          </h3>

          <h2 className="text-3xl font-bold text-gray-800">
            {MOCK_PARTNER_BANKS_DATA.heading.map((item, index) => (
              <span key={index} className={item.color === '#f97316' ? 'text-orange-500' : ''}>
                {item.text}
              </span>
            ))}
          </h2>
        </motion.div>

        {/* Bank Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {MOCK_PARTNER_BANKS_DATA.partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative group cursor-pointer"
            >
              {/* Arrow Icon */}
              <Link
                to={partner.link}
                className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-500 transition-all duration-300"
              >
                <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </Link>

              {/* Bank Logo */}
              <div className="flex items-center justify-center h-32">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerBanks;