import axiosClient from "../../../lib/axios";
import type { EmployeeApiResponse } from "../types";

export const getRealEmployeesData = async (query?: string): Promise<EmployeeApiResponse> => {
    const params = query ? { query } : {};
    const { data } = await axiosClient.get<EmployeeApiResponse>("/about/employees", { params });
    return data;
};
