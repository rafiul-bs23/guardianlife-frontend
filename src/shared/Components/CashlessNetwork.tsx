import React from 'react';
import Button from './Button';
import { sharedCashlessNetworkData } from '../api/mockData';

const CashlessNetwork: React.FC = () => {
    const data = sharedCashlessNetworkData;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="bg-[#F6DECE] rounded-[48px] p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 overflow-hidden shadow-sm">
                    {/* Content Left */}
                    <div className="flex-1 space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-gray-900 tracking-tight">{data.title}</h2>
                            <p className="text-gray-700 text-[15px] font-medium leading-relaxed max-w-xl">
                                {data.description}
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-16 lg:gap-24">
                            {data.stats.map((stat, index) => (
                                <div key={index} className="flex flex-col gap-1">
                                    <div className="text-4xl font-black text-gray-900 leading-none">{stat.value}</div>
                                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* How it works */}
                        <div className="space-y-6 pt-4">
                            <h3 className="text-base font-extrabold text-gray-900">{data.stepsTitle}</h3>
                            <div className="space-y-4">
                                {data.steps.map((step, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-black text-xs shrink-0 shadow-lg shadow-orange-500/20">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-800 text-sm font-bold tracking-tight">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4 flex gap-4">
                            <Button
                                label="Cashless"
                                variant="solid-orange"
                                className="rounded-full "
                                labelClass="text-sm font-bold"
                                href='https://acps.myguardianbd.com/claim/online/gop/request/'
                            />
                            <Button
                                label="Hospital List"
                                variant="outline-orange"
                                className="rounded-full"
                                labelClass="text-sm font-bold"
                                to='/preferred-hospital'
                            />
                        </div>
                    </div>

                    {/* Image Right */}
                    <div className="flex-1 w-full max-w-[550px]">
                        <div className="rounded-[40px] overflow-hidden shadow-2xl">
                            <img
                                src={`/${data.image}`}
                                alt="Cashless Hospital"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CashlessNetwork;
