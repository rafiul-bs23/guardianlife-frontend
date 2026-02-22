export interface Employee {
    name: string;
    designation: string;
    department: string;
    image_url: string;
}

export interface EmployeeApiResponse {
    success: boolean;
    transaction_id: string;
    data: Employee[];
    message?: string;
    errors?: ValidationError[];
}

export interface ValidationError {
    field: string;
    message: string;
}

export interface UseEmployeesResult {
    data: Employee[] | null;
    isLoading: boolean;
    error: string | null;
    fieldErrors: ValidationError[];
    refetch: () => void;
}
