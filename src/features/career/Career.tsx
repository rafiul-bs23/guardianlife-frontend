import { useState } from 'react';
import CareerHeader from "./components/CareerHeader";
import CareerFormSection from "./components/CareerFormSection";
import CareerJobsList from "./components/CareerJobsList";
import CareerJobDetails from "./components/CareerJobDetails";
import { mockJobs } from "./api/mockData";
import type { JobPosition } from "./types";

type CareerView = 'list' | 'detail' | 'form';

const Career = () => {
    const [view, setView] = useState<CareerView>('list');
    const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);

    const handleViewDetails = (job: JobPosition) => {
        setSelectedJob(job);
        setView('detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleApply = () => {
        setView('form');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => {
        if (view === 'form') {
            setView('detail');
        } else {
            setView('list');
            setSelectedJob(null);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen bg-white">
            {view === 'list' && (
                <>
                    <CareerHeader />
                    <CareerJobsList 
                        jobs={mockJobs} 
                        onViewDetails={handleViewDetails} 
                    />
                </>
            )}

            {view === 'detail' && selectedJob && (
                <CareerJobDetails 
                    job={selectedJob} 
                    onApply={handleApply} 
                    onBack={handleBack}
                />
            )}

            {view === 'form' && (
                <>
                    <CareerHeader title="Apply Now" />
                    <div className="max-w-[1400px] mx-auto px-4 pt-10">
                         <button
                            onClick={handleBack}
                            className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-4"
                        >
                            <span>← Back to Details</span>
                        </button>
                    </div>
                    <CareerFormSection jobTitle={selectedJob?.position_name} />
                </>
            )}
        </main>
    );
};

export default Career;
