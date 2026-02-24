export type PaymentTab = 'mobile_banking' | 'cards' | 'internet_banking' | 'direct_bank';

export interface PaymentPartner {
    id: string;
    name: string;
    logo_url?: string;
}

export interface BankAccountDetails {
    sl_no: number;
    name_of_bank: string;
    account_name: string;
    ac_type: string;
    ac_no: string;
    routing_no: string;
    branch_name: string;
}

export interface PaymentChanelData {
    mobile_banking: PaymentPartner[];
    cards: PaymentPartner[];
    internet_banking: PaymentPartner[];
    direct_bank: BankAccountDetails[];
}
