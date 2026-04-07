import React from 'react';
import { motion } from 'framer-motion';
import type { JobPosition } from '../types';

interface CareerJobsListProps {
    jobs: JobPosition[];
    onViewDetails: (job: JobPosition) => void;
}

const CareerJobsList: React.FC<CareerJobsListProps> = ({ jobs, onViewDetails }) => {
    // Group jobs by department or category if needed
    // For now, I'll just group the mock data as "BANCASSURANCE" as shown in the image
    const categories = Array.from(new Set(jobs.map(() => "BANCASSURANCE"))); 

    return (
        <section className="py-20 px-4 md:px-12 max-w-[1400px] mx-auto">
            <div className="text-center mb-16 px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-[#141B4D] mb-4">
                   Explore Jobs At Guardian
                </h2>
            </div>

            <div className="space-y-16">
                {categories.map((category) => (
                    <div key={category} className="space-y-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#141B4D] tracking-tight border-l-4 border-primary pl-4">
                            {category}
                        </h3>

                        <div className="grid gap-6">
                            {jobs.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
                                >
                                    <div className="flex-1 space-y-4">
                                        <div className="space-y-1">
                                            <h4 className="text-xl md:text-2xl font-bold text-[#141B4D] group-hover:text-primary transition-colors">
                                                {job.position_name}
                                            </h4>
                                            <div className="flex items-center gap-2 text-indigo-900 font-medium">
                                                <span>{job.address}</span>
                                                <span className="text-gray-300">|</span>
                                                <span>{job.job_type}</span>
                                            </div>
                                        </div>
                                        
                                        <p className="text-gray-500 line-clamp-2 max-w-3xl text-base leading-relaxed">
                                            {/* Strip HTML for the list preview */}
                                            {job.description.replace(/<[^>]*>/g, '').substring(0, 180)}...
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => onViewDetails(job)}
                                        className="px-8 py-3 rounded-full border-2 border-[#141B4D] text-[#141B4D] font-bold hover:bg-[#141B4D] hover:text-white transition-all duration-300 whitespace-nowrap"
                                    >
                                        View Details
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CareerJobsList;
