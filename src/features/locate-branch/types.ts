// Branch Data
export interface Branch {
    office_category: string;
    office_name: string;
    division_name: string;
    district_name: string;
    area_name: string;
    address: string;
    contact_person_name: string;
    contact_person_email: string | null;
    contact_person_phone_number: string;
}

// Pagination
export interface Pagination {
    current_page: number;
    total_pages: number;
    total_records: number;
    has_next: boolean;
    has_previous: boolean;
}

// API Response Data shape
export interface BranchListData {
    pagination: Pagination;
    branches: Branch[];
}

// API Response Types
export interface BranchApiSuccessResponse {
    success: true;
    transaction_id: string;
    data: BranchListData;
}

export interface BranchApiErrorResponse {
    success: false;
    transaction_id: string;
    message: string;
}

export type BranchApiResult = BranchApiSuccessResponse | BranchApiErrorResponse;

// Query Params
export interface BranchQueryParams {
    office_category?: string;
    branch_name?: string;
    area_name?: string;
    division_name?: string;
    district_name?: string;
    page?: number;
    limit?: number;
}

// Hook Result
export interface UseLocateBranchResult {
    branches: Branch[];
    pagination: Pagination | null;
    isLoading: boolean;
    error: string | null;
    filters: BranchQueryParams;
    setFilters: (filters: BranchQueryParams) => void;
    resetFilters: () => void;
    goToPage: (page: number) => void;
}

// Filter Options
export interface FilterOptions {
    office_categories: string[];
    divisions: string[];
    districts: string[];
    areas: string[];
}
