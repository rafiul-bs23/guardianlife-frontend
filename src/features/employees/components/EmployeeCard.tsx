import React from 'react';
import type { Employee } from '../types';

interface EmployeeCardProps {
    employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
    return (
        <div className="bg-[#F8F9FA] rounded-[30px] p-4 flex gap-4 items-center h-full">
            <div className="w-1/3 aspect-square overflow-hidden rounded-2xl">
                <img
                    src={employee.image_url}
                    alt={employee.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-2/3 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-[#212529] leading-tight mb-1">
                    {employee.name}
                </h3>
                <p className="text-sm font-semibold text-[#6C757D] mb-2 uppercase tracking-wide">
                    {employee.designation}
                </p>
                <p className="text-sm font-medium text-primary">
                    {employee.department}
                </p>
            </div>
        </div>
    );
};

export default EmployeeCard;
