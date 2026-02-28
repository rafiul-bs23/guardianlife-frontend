// Agent Data (snake_case as per rules1.md)
export interface Agent {
    name: string;
    address: string;
    national_id: string;
    mobile_number: string;
    fa_code: string;
    um_code: string | null;
    license_number: string;
    license_issue_date: string;
    license_expiry_date: string;
    working_area: string;
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
export interface AgentListData {
    pagination: Pagination;
    agents: Agent[];
}

// API Response Types
export interface AgentApiSuccessResponse {
    success: true;
    transaction_id: string;
    data: AgentListData;
}

export interface AgentApiErrorResponse {
    success: false;
    transaction_id: string;
    message: string;
}

export type AgentApiResult = AgentApiSuccessResponse | AgentApiErrorResponse;

// Query Params
export interface AgentQueryParams {
    page?: number;
    limit?: number;
}

// Hook Result
export interface UseAgentListResult {
    agents: Agent[];
    pagination: Pagination | null;
    is_loading: boolean;
    error: string | null;
    current_page: number;
    go_to_page: (page: number) => void;
}
