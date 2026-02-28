export interface BancaBank {
    title: string;
    description: string;
    image_url: string;
    footer: string;
    active_since?: string;
}

export interface BancaProduct {
    title: string;
    description: string;
    logo_url: string; // Used as the top-left icon in new design
    thumbnail_url: string; // Used as the large center image in new design
    subtitle: string;
    subtitle_description: string;
}

export interface BancaBankInfoData {
    bank: BancaBank;
    products: BancaProduct[];
}

export interface BancaBankInfoResponse {
    status: boolean;
    transaction_id: string;
    data: BancaBankInfoData;
    message?: string;
    errors?: any[];
}
export interface BancaBranch {
    branch_name: string;
    area_name: string;
    district_name: string;
    division_name: string;
    bancassurance_available: boolean;
}

export interface PaginationData {
    current_page: number;
    total_pages: number;
    total_records: number;
    has_next: boolean;
    has_previous: boolean;
}

export interface BancaBranchData {
    pagination: PaginationData;
    branches: BancaBranch[];
}

export interface BancaBranchResponse {
    status: boolean;
    transaction_id: string;
    data: BancaBranchData;
    message?: string;
    errors?: any[];
}
