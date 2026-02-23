import type { EmployeeApiResponse } from "../types";
import { MOCK_EMPLOYEES_DATA } from "./mockData";

export const getMockEmployeesData = async (query?: string): Promise<EmployeeApiResponse> => {
    const allEmployees = MOCK_EMPLOYEES_DATA.data;

    const filteredEmployees = query
        ? allEmployees.filter(emp =>
            emp.name.toLowerCase().includes(query.toLowerCase()) ||
            emp.designation.toLowerCase().includes(query.toLowerCase()) ||
            emp.department.toLowerCase().includes(query.toLowerCase())
        )
        : allEmployees;

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    return {
        success: true,
        transaction_id: "MOCK-TXN-ID",
        data: filteredEmployees
    };
};
