import React from 'react';
import type { BancaBranch } from '../types';

interface BranchTableSectionProps {
    branches: BancaBranch[];
}

const BranchTableSection: React.FC<BranchTableSectionProps> = ({ branches }) => {
    return (
        <section className="pb-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-[#F8FAFC]">
                                <tr>
                                    <th className="px-8 py-5 text-sm font-bold text-gray-600 uppercase tracking-tight">Branch Name</th>
                                    <th className="px-8 py-5 text-sm font-bold text-gray-600 uppercase tracking-tight">Area</th>
                                    <th className="px-8 py-5 text-sm font-bold text-gray-600 uppercase tracking-tight">District</th>
                                    <th className="px-8 py-5 text-sm font-bold text-gray-600 uppercase tracking-tight">Division</th>
                                    <th className="px-8 py-5 text-sm font-bold text-gray-600 uppercase tracking-tight text-center">Bancassurance Services</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {branches.length > 0 ? (
                                    branches.map((branch, index) => (
                                        <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-8 py-6 text-[15px] font-semibold text-gray-700">{branch.branch_name} Branch</td>
                                            <td className="px-8 py-6 text-[14px] text-gray-600 font-medium">{branch.area_name}</td>
                                            <td className="px-8 py-6 text-[14px] text-gray-600 font-medium">{branch.district_name}</td>
                                            <td className="px-8 py-6 text-[14px] text-gray-600 font-medium">{branch.division_name}</td>
                                            <td className="px-8 py-6 text-center">
                                                {branch.bancassurance_available && (
                                                    <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-600 text-[12px] font-bold rounded-full border border-green-100">
                                                        Available
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="px-8 py-10 text-center text-gray-500 font-medium">
                                            No branches found matching your criteria.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BranchTableSection;
