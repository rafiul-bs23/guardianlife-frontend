import React, { useState } from 'react';

interface BranchSearchSectionProps {
    onSearch: (params: {
        branch_name?: string;
        division_name?: string;
        district_name?: string;
        area_name?: string;
    }) => void;
}

const BranchSearchSection: React.FC<BranchSearchSectionProps> = ({ onSearch }) => {
    const [branchName, setBranchName] = useState('');
    const [division, setDivision] = useState('');
    const [district, setDistrict] = useState('');
    const [area, setArea] = useState('');

    const handleSearch = () => {
        onSearch({
            branch_name: branchName || undefined,
            division_name: division || undefined,
            district_name: district || undefined,
            area_name: area || undefined,
        });
    };

    return (
        <section className="py-12 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
                        FIND A CITY BANK BRANCH OFFERING GUARDIAN LIFE INSURANCE
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto font-medium">
                        Guardian Life insurance products are available at selected City Bank branches across
                        Bangladesh. Use the filters below to find the nearest branch offering Bancassurance services.
                    </p>
                </div>

                <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {/* Search by Branch Name */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-700">Search by Branch Name</label>
                            <input
                                type="text"
                                placeholder="Enter branch name..."
                                value={branchName}
                                onChange={(e) => setBranchName(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-600"
                            />
                        </div>

                        {/* Select Division */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-700">Select Division</label>
                            <select
                                value={division}
                                onChange={(e) => setDivision(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-600 bg-white"
                            >
                                <option value="">Select Division</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chittagong">Chittagong</option>
                                <option value="Sylhet">Sylhet</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Barisal">Barisal</option>
                                <option value="Rangpur">Rangpur</option>
                                <option value="Mymensingh">Mymensingh</option>
                            </select>
                        </div>

                        {/* Select District */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-700">Select District</label>
                            <select
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-600 bg-white"
                            >
                                <option value="">Choose District</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chittagong">Chittagong</option>
                            </select>
                        </div>

                        {/* Choose Area */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-700">Choose Area</label>
                            <select
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-600 bg-white"
                            >
                                <option value="">Choose Area</option>
                                <option value="Gulshan">Gulshan</option>
                                <option value="Dhanmondi">Dhanmondi</option>
                            </select>
                        </div>
                    </div>

                    <button
                        onClick={handleSearch}
                        className="bg-[#EB6925] hover:bg-[#d55a1d] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-orange-200 flex items-center gap-2 text-lg"
                    >
                        Search Branch
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BranchSearchSection;
