import React from 'react';
import type { Employee } from '../types';
import Card from '../../../shared/Components/Card';

interface EmployeeCardProps {
    employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
    return (
        <Card className="bg-[#F8F9FA] rounded-[30px]  flex gap-4 items-center h-full">

            <div className=" flex flex-col justify-center">
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
        </Card>
    );
};

export default EmployeeCard;
