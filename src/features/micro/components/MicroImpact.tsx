import React from 'react';
import { useMicroImpact } from '../hooks/useMicroImpact';
import { mockMicroData } from '../api/mockData';
import { ShieldCheck } from 'lucide-react';

const MicroImpact: React.FC = () => {
    const { data: metrics, isLoading, error } = useMicroImpact();
    const staticData = mockMicroData.impactStatic;

    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16 space-y-3">
                    <h2 className="text-[26px] font-extrabold text-[#111827] uppercase tracking-wider">
                        {staticData.title}
                    </h2>
                    <p className="text-gray-500 text-[14px] font-medium leading-relaxed max-w-[600px] mx-auto opacity-80">
                        {staticData.subtitle}
                    </p>
                </div>

                {/* Main Content: Side-by-Side */}
                <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 mb-12">
                    {/* Left: Image Container */}
                    <div className="w-full lg:w-[48%] relative">
                        <div className="h-full rounded-[40px] overflow-hidden shadow-sm border border-gray-100 flex">
                            <img
                                src={`/${staticData.image}`}
                                alt="Impact Background"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Stats Grid and Awards */}
                    <div className="w-full lg:w-[52%] flex flex-col gap-6">
                        {/* 2x2 Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {isLoading ? (
                                Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i} className="bg-white rounded-[24px] p-8 border border-[#FDE6D7] animate-pulse">
                                        <div className="h-8 bg-gray-100 rounded w-1/2 mx-auto mb-4"></div>
                                        <div className="h-4 bg-gray-50 rounded w-3/4 mx-auto mb-2"></div>
                                        <div className="h-3 bg-gray-50 rounded w-1/2 mx-auto"></div>
                                    </div>
                                ))
                            ) : error ? (
                                <div className="col-span-full p-8 bg-white rounded-[24px] border border-red-100 text-center">
                                    <p className="text-red-500 font-bold">Failed to load impact metrics</p>
                                </div>
                            ) : (
                                metrics?.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-[24px] p-8 border border-[#FDE6D7] flex flex-col items-center text-center gap-1.5 transition-all hover:shadow-md hover:border-primary/20 group"
                                    >
                                        <span className={`text-[32px] font-black leading-tight text-[#EB6925]`}>
                                            {stat.metric}
                                        </span>
                                        <h4 className="text-[14px] font-extrabold text-[#111827] uppercase tracking-tight">
                                            {stat.title}
                                        </h4>
                                        <p className="text-gray-400 text-[12px] font-bold leading-relaxed">
                                            {stat.description}
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Awards Section */}
                        <div className="bg-white rounded-[24px] p-8 border border-[#FDE6D7] flex flex-col gap-5">
                            <h4 className="text-[14px] font-extrabold text-[#111827] uppercase tracking-wider opacity-80">
                                {staticData.awardsTitle}
                            </h4>
                            <div className="space-y-4">
                                {staticData.awards.map((award, index) => (
                                    <div key={index} className="flex gap-4 items-center">
                                        <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-6 h-6 text-[#F59E0B]" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="text-[15px] font-black text-[#111827] leading-tight mb-0.5">
                                                {award.title}
                                            </span>
                                            <span className="text-[12px] font-bold text-gray-400 uppercase tracking-wide">
                                                {award.description}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Banner CTA */}
                <div className="bg-gradient-to-r from-[#EF6925] to-[#F97316] rounded-[32px] p-10 text-center text-white shadow-xl shadow-orange-500/10">
                    <h3 className="text-[20px] font-black mb-2 leading-tight uppercase tracking-wide">
                        {staticData.bannerTitle}
                    </h3>
                    <p className="text-white/90 font-bold text-[15px] leading-relaxed">
                        {staticData.bannerSubtitle}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MicroImpact;
