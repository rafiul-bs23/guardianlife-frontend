import { ArrowUpRight } from 'lucide-react'; // or you can use any icon library

import { MOCK_PARTNER_BANKS_DATA } from '../api/mockData';

const PartnerBanks = () => {


  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-gray-600 tracking-wide mb-4">
            {MOCK_PARTNER_BANKS_DATA.title}
          </h3>

          <h2 className="text-3xl font-bold text-gray-800">
            {MOCK_PARTNER_BANKS_DATA.heading.map((item, index) => (
              <span key={index} className={item.color === '#f97316' ? 'text-orange-500' : ''}>
                {item.text}
              </span>
            ))}
          </h2>
        </div>

        {/* Bank Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_PARTNER_BANKS_DATA.partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative group cursor-pointer"
            >
              {/* Arrow Icon - Top Right */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-500 transition-all duration-300">
                <ArrowUpRight
                  className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300"
                />
              </div>

              {/* Bank Logo - Center */}
              <div className="flex items-center justify-center h-32">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerBanks;