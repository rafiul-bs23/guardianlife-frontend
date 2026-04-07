import React from 'react';
import { motion } from 'framer-motion';
import type { JobPosition } from '../types';
import { ChevronLeft } from 'lucide-react';

interface CareerJobDetailsProps {
    job: JobPosition;
    onApply: () => void;
    onBack: () => void;
}

const CareerJobDetails: React.FC<CareerJobDetailsProps> = ({ job, onApply, onBack }) => {
    return (
        <section className="pb-20 opacity-100">
            {/* Detail Header Banner */}
            <div className="bg-primary py-16 px-4 text-center space-y-6">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mx-auto mb-4"
                >
                    <ChevronLeft className="w-5 h-5" />
                    <span>Back to Jobs</span>
                </button>

                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                    {job.position_name}
                </h2>

                <div className="flex items-center justify-center gap-4 text-[#F37021] font-bold text-lg">
                    <span>{job.address}</span>
                    <span className="text-white/30 font-normal">|</span>
                    <span>{job.job_type}</span>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 mt-20 flex flex-col lg:flex-row gap-12">
                {/* Left: Description Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:flex-1 prose prose-lg prose-slate max-w-none prose-p:text-gray-700 prose-headings:text-[#141B4D] prose-strong:text-[#141B4D] prose-strong:font-bold prose-headings:font-bold"
                >
                    <div
                        dangerouslySetInnerHTML={{ __html: job.description }}
                        className="career-job-description"
                    />
                </motion.div>

                {/* Right: Sticky Apply Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:w-[400px] flex-shrink-0"
                >
                    <div className="sticky top-32 p-8 bg-gray-50 rounded-[32px] border border-gray-100 shadow-sm space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-[#141B4D]">
                                Apply today
                            </h3>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                Please read the requirements carefully, if you feel you are fit for the position, please apply through the link
                            </p>
                        </div>

                        <button
                            onClick={onApply}
                            className="w-full py-4 rounded-full bg-primary text-white font-bold text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Apply Now
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CareerJobDetails;
