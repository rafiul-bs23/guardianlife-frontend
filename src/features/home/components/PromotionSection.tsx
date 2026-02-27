import { ArrowRight } from 'lucide-react';

import AppStoreButtons from '../../../shared/Components/AppStoreButtons';

import { MOCK_APP_PROMOTION_DATA } from '../api/mockData';

const AppPromotion = () => {
  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="mx-auto">
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
            className="overflow-hidden mx-auto w-full max-w-7xl relative"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)',
              borderRadius: '24px'
            }}
          >
            <img
              src={MOCK_APP_PROMOTION_DATA.image}
              alt="Guardian Life App"
              className="w-full h-auto aspect-[16/9] md:aspect-auto md:max-h-[579px] object-cover"
            />

            {/* Top-right circle icon (optional) */}
            <div
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Phone Image with rounded corners */}
    </div>
  )
};

export default AppPromotion;