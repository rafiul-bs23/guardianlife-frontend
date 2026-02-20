import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useEmployees } from '../hooks/useEmployees';
import EmployeeCard from './EmployeeCard';

const EmployeeList: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');

    // Debounce search query to avoid frequent API calls
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 500);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    const { data: employees, isLoading, error } = useEmployees(debouncedQuery);

    return (
        <section className="py-16 px-4 max-w-full mx-auto ">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-[#212529] mb-8 uppercase">
                    GUARDIAN EMPLOYEE LIST
                </h2>

                <div className="relative max-w-xl mx-auto">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-[#ADB5BD]" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-gray-300 border-none rounded-2xl py-3 pl-12 pr-4 text-[#495057] focus:ring-2 focus:ring-[#EB6925] outline-none transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {isLoading ? (
                <div className="flex items-center justify-center min-h-[200px] bg-white">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EB6925]"></div>
                </div>
            ) : error ? (
                <div className="text-center py-20 text-red-500 bg-white">
                    {error}
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white w-full p-2 md:p-8">
                        {employees?.map((employee, index) => (
                            <div key={index}>
                                <EmployeeCard employee={employee} />
                            </div>
                        ))}
                    </div>

                    {(!employees || employees.length === 0) && (
                        <div className="text-center py-20 text-[#6C757D] bg-white">
                            No employees found matching your search.
                        </div>
                    )}
                </>
            )}
        </section>
    );
};

export default EmployeeList;
