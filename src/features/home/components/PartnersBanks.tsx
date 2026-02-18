// import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react'; // or you can use any icon library

// Import bank logos
import partner1 from '../../../assets/images/home/PartnersBanks/partner1.jpg';
import partner2 from '../../../assets/images/home/PartnersBanks/partner2.jpg';
import partner3 from '../../../assets/images/home/PartnersBanks/partner3.jpg';

const PartnerBanks = () => {
  const partners = [
    { id: 1, name: 'City Bank', logo: partner1, link: '#' },
    { id: 2, name: 'Dutch-Bangla Bank', logo: partner2, link: '#' },
    { id: 3, name: 'MTB', logo: partner3, link: '#' },
  ];

  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-gray-600 tracking-wide mb-4">
            OUR PARTNERS BANK
          </h3>

          <h2 className="text-3xl font-bold text-gray-800">
            DROP BY A <span className="text-orange-500">PARTNER BANK</span> OR HOP ONLINE TO{' '}
            <span className="text-orange-500">EXPLORE AND GRAB</span> YOUR{' '}
            <span className="text-orange-500">GUARDIAN LIFE INSURANCE</span>{' '}
            PLAN—SIMPLE AND TAILORED FOR YOU.
          </h2>
        </div>

        {/* Bank Cards Grid */}
        <div className="grid grid-cols-3 gap-6">
          {partners.map((partner) => (
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