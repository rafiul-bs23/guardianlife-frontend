import React, { useState } from 'react';
import { Search } from 'lucide-react';
import type { EmployeeListData } from '../types';
import EmployeeCard from './EmployeeCard';

interface EmployeeListProps {
    data: EmployeeListData;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ data }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredEmployees = data.employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.department.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-[#212529] mb-8">
                    {data.title}
                </h2>

                <div className="relative max-w-xl mx-auto">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-[#ADB5BD]" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-[#E9ECEF] border-none rounded-2xl py-4 pl-12 pr-4 text-[#495057] focus:ring-2 focus:ring-[#EB6925] outline-none transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEmployees.map((employee) => (
                    <div key={employee.id}>
                        <EmployeeCard employee={employee} />
                    </div>
                ))}
            </div>

            {filteredEmployees.length === 0 && (
                <div className="text-center py-20 text-[#6C757D]">
                    No employees found matching your search.
                </div>
            )}
        </section>
    );
};

export default EmployeeList;
