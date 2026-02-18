import React from 'react';
import { Check } from 'lucide-react';
import type { ClaimStatus } from '../types';
import Button from '../../../shared/Components/Button';

interface TrackClaimProps {
    data: ClaimStatus;
}

const TrackClaim: React.FC<TrackClaimProps> = ({ data }) => {
    return (
        <section className="py-20 bg-[#F8F9FA]">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16 max-w-[900px] mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-6 uppercase tracking-wider">
                        {data.trackingTitle}
                    </h2>
                    <p className="text-gray-600 text-lg font-medium leading-relaxed">
                        {data.trackingSubtitle}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
                    {/* Left Card: Track Form */}
                    <div className="flex-1 bg-white rounded-[40px] p-12 shadow-sm border border-gray-100 max-w-[600px]">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 mt-4">Track Your Claim</h3>

                        <div className="space-y-6">
                            {/* Policy No Input */}
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-gray-700">Policy No.</label>
                                <input
                                    type="text"
                                    placeholder="1627266"
                                    className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-[#FDFDFD] focus:outline-none focus:border-primary transition-colors text-gray-400 font-medium"
                                />
                            </div>

                            {/* Divider */}
                            <div className="flex items-center justify-center">
                                <span className="text-gray-500 font-medium">Or</span>
                            </div>

                            {/* Mobile Number Input */}
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-gray-700">Mobile Number</label>
                                <input
                                    type="text"
                                    placeholder="017XXXXXXX"
                                    className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-[#FDFDFD] focus:outline-none focus:border-primary transition-colors text-gray-400 font-medium"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center pt-4">
                                <Button
                                    label="Track Now"
                                    variant="solid-orange"
                                    className="w-full max-w-[300px] py-4 rounded-2xl"
                                    labelClass="text-lg font-bold"
                                    onClick={() => console.log('Track Now clicked')}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Card: Timeline */}
                    <div className="flex-1 bg-white rounded-[40px] p-12 shadow-sm border border-gray-100 max-w-[600px]">
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-[23px] top-6 bottom-6 w-[3px] bg-primary opacity-20"></div>

                            {/* Timeline Items */}
                            <div className="space-y-8 relative">
                                {data.timeline.map((item, index) => (
                                    <div key={index} className="flex items-start gap-6">
                                        {/* Icon Container */}
                                        <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-md">
                                            <Check className="w-7 h-7 text-white stroke-[3px]" />
                                        </div>

                                        {/* Content */}
                                        <div className="pt-2">
                                            <h4 className="text-lg font-bold text-gray-900 leading-none mb-1">
                                                {item.label}
                                            </h4>
                                            <p className="text-sm font-medium text-gray-500">
                                                {item.date}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrackClaim;
