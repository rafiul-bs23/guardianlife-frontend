import { useState } from 'react';
import { mockPaymentChanelData } from '../api/mockData';
import type { PaymentTab, PaymentPartner } from '../types';

const TABS = [
    { id: 'mobile_banking', label: 'MOBILE BANKING' },
    { id: 'cards', label: 'CARDS' },
    { id: 'internet_banking', label: 'INTERNET BANKING' },
    { id: 'direct_bank', label: 'DIRECT BANK' },
] as const;

const PartnerGrid = ({ partners }: { partners: PaymentPartner[] }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 py-10">
            {partners.map(partner => (
                <div key={partner.id} className="flex flex-col items-center justify-center p-4 min-h-[100px] border border-transparent hover:shadow-lg transition-shadow rounded-lg bg-white">
                    {partner.logo_url ? (
                        <img
                            src={partner.logo_url}
                            alt={partner.name}
                            className="w-full max-w-[120px] object-contain"
                        />
                    ) : (
                        <div className="text-center font-semibold text-gray-800 tracking-wide text-lg sm:text-xl">
                            {partner.name}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

const PaymentChanel = () => {
    const [activeTab, setActiveTab] = useState<PaymentTab>('mobile_banking');
    const data = mockPaymentChanelData;

    return (
        <section className="w-full py-16 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-900 mb-8 tracking-wider">
                    Payment we support
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 w-full mb-12">
                    {TABS.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as PaymentTab)}
                                className={`
                                    min-w-[150px] md:min-w-[200px] xl:min-w-[240px] py-3 px-6 rounded-full font-medium text-sm md:text-base border transition-colors duration-300
                                    ${isActive
                                        ? 'bg-primary text-white border-primary'
                                        : 'bg-white  border-primary hover:bg-gray-50'
                                    }
                                `}
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div className="w-full max-w-5xl">
                    {activeTab === 'mobile_banking' && <PartnerGrid partners={data.mobile_banking} />}
                    {activeTab === 'cards' && <PartnerGrid partners={data.cards} />}
                    {activeTab === 'internet_banking' && <PartnerGrid partners={data.internet_banking} />}
                    {activeTab === 'direct_bank' && (
                        <div className="w-full overflow-x-auto py-10">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="bg-[#FFF3E6]">
                                        <th className="p-4 border border-[#E5E7EB] font-semibold text-[#262161] whitespace-nowrap">SL No.</th>
                                        <th className="p-4 border border-[#E5E7EB] font-semibold text-[#262161]">Name of Bank</th>
                                        <th className="p-4 border border-[#E5E7EB] font-semibold text-[#262161]">Account Name</th>
                                        <th className="p-4 border border-[#E5E7EB] font-semibold text-[#262161]">A/C Type</th>
                                        <th className="p-4 border border-[#E5E7EB] font-semibold text-[#262161] whitespace-nowrap">A/C No</th>
                                        <th className="p-4 border border-[#E5E7EB] font-semibold text-[#262161] whitespace-nowrap">Routing No.</th>
                                        <th className="p-4 border border-[#E5E7EB] font-semibold text-[#262161]">Branch Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.direct_bank.map((row) => (
                                        <tr key={row.sl_no} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 border border-[#E5E7EB] text-gray-700">{row.sl_no}</td>
                                            <td className="p-4 border border-[#E5E7EB] text-gray-700">{row.name_of_bank}</td>
                                            <td className="p-4 border border-[#E5E7EB] text-gray-700">{row.account_name}</td>
                                            <td className="p-4 border border-[#E5E7EB] text-gray-700">{row.ac_type}</td>
                                            <td className="p-4 border border-[#E5E7EB] text-gray-700">{row.ac_no}</td>
                                            <td className="p-4 border border-[#E5E7EB] text-gray-700">{row.routing_no}</td>
                                            <td className="p-4 border border-[#E5E7EB] text-gray-700">{row.branch_name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PaymentChanel;
