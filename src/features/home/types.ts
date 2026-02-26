export interface LeadRequest {
  full_name: string;
  email: string;
  phone: string;
  type: 'lead';
  applying_position: null;
  message: string;
  channel?: string;
}

export interface LeadApiSuccessResponse {
  success: true;
  transaction_id: string;
  data: {
    status: string;
    received_at: string;
  };
}

export interface LeadApiErrorResponse {
  success: false;
  transaction_id: string;
  message: string;
}

export type LeadApiResult = LeadApiSuccessResponse | LeadApiErrorResponse;

export interface Partner {
  id: number;
  name: string;
  logo: string;
}

export interface LogoGridProps {
  partners: Partner[];
  rowHeight: number | null;
}

export interface LogoCardProps {
  logo: string;
  name: string;
}