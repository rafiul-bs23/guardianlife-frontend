import type { EmployeeApiResponse } from "../types";
import { getRealEmployeesData } from "./employeesApi";
import { getMockEmployeesData } from "./mockEmployeesApi";

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const getEmployeesData = async (query?: string): Promise<EmployeeApiResponse> => {
    if (USE_MOCK) {
        return getMockEmployeesData(query);
    }
    return getRealEmployeesData(query);
};
