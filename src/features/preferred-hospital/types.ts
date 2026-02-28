// Hospital type enum matching API param values
export type HospitalType = 'national_hospital' | 'national_diagnostic' | 'international_hospital';

// Hospital Data (snake_case as per rules1.md)
export interface Hospital {
    country_name: string | null;
    hospital_name: string;
    division_name: string | null;
    district_name: string | null;
    area_name: string | null;
    address: string | null;
    facilities: string | null;
    contact_person_phone_number: string[];
    contact_person_email: string[];
    remarks: string | null;
}

// API Response Types
export interface HospitalApiSuccessResponse {
    success: true;
    transaction_id: string;
    data: Hospital[];
}

export interface HospitalApiErrorResponse {
    success: false;
    transaction_id: string;
    message: string;
}

export type HospitalApiResult = HospitalApiSuccessResponse | HospitalApiErrorResponse;

// Query Params
export interface HospitalQueryParams {
    type?: HospitalType;
    hospital_name?: string;
}

// Frontend filter state
export interface HospitalFrontendFilters {
    hospital_name: string;
    division_name: string;
    district_name: string;
    area_name: string;
    country_name: string;
}

// Hook Result
export interface UsePreferredHospitalResult {
    hospitals: Hospital[];
    filtered_hospitals: Hospital[];
    is_loading: boolean;
    error: string | null;
    active_type: HospitalType;
    frontend_filters: HospitalFrontendFilters;
    set_active_type: (type: HospitalType) => void;
    set_frontend_filters: (filters: HospitalFrontendFilters) => void;
    reset_filters: () => void;
    // Derived filter options
    division_options: string[];
    district_options: string[];
    area_options: string[];
    country_options: string[];
}
