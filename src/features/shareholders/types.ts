export interface ShareholderItem {
    shareholder_name: string;
    number_of_shares: number;
    percentage_of_shareholding: number;
}

export interface ShareholdersResponse {
    success: boolean;
    transaction_id: string;
    data: ShareholderItem[];
}
