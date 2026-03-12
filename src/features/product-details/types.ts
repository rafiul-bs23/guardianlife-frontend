import type {
  ContentItem,
  CardItem,
  PlanBenefitsSection,
  ProductDocumentsSection,
  LearnMoreSection,
} from '../../shared/types/product';

export interface QuickProductSection {
  content: ContentItem[];
}

export interface JourneyStep {
  percentage: number;
  bottom_label: string;
  top_label: string | null;
}

export interface ProductJourneySection {
  content: JourneyStep[];
}

export interface KeyHighlightsSection {
  description: string;
  points: string[];
  cards: CardItem[];
}

// PlanBenefitsSection is now imported from shared

export interface SupplementaryBenefitsSection {
  content: ContentItem[];
}

export interface BreakdownAdditionalData {
  min: number;
  max: number;
}

export interface BreakdownItem {
  title: string;
  points: string[];
  additional_data: BreakdownAdditionalData | null;
}

export interface PlanBreakdownSection {
  content: BreakdownItem[];
}

// DocumentItem & ProductDocumentsSection are now imported from shared

// VideoItem is now imported from shared

// LearnMoreSection is now imported from shared

export interface PlanNumber {
  plan_no: string;
  name: string;
}

export interface ProductData {
  plan_numbers: PlanNumber[];
  quick_product_section: QuickProductSection;
  product_journey_section: ProductJourneySection;
  key_highlights_section: KeyHighlightsSection;
  plan_benefits_section: PlanBenefitsSection;
  supplementary_benefits_section: SupplementaryBenefitsSection;
  plan_breakdown_section: PlanBreakdownSection;
  product_documents_section: ProductDocumentsSection;
  learn_more_section: LearnMoreSection;
}

export interface ProductSuccessResponse {
  status: true;
  transactionId: string;
  data: ProductData;
}

// Error Response 
export interface ValidationError {
  field: string;
  message: string;
}

export interface ProductErrorResponse {
  status: false;
  transactionId: string;
  message: string;
  errors: ValidationError[];
}

export type ProductApiResponse = ProductSuccessResponse | ProductErrorResponse;

export interface UseProductResult {
  data: ProductData | null;
  isLoading: boolean;
  error: string | null;
  fieldErrors: ValidationError[];
  refetch: () => void;
}

// Boost Your Coverage types
export interface BoostCoveragePlan {
  name: string;
  limit_per_year: number;
}

export interface BoostCoverageItem {
  title: string;
  description: string;
  features_title?: string;
  features_description?: string;
  highlights?: string[];
  terms_title?: string;
  terms_description?: string;
  terms_highlights?: string[];
  plans?: BoostCoveragePlan[];
  brochure_pdf?: string;
}

export type BoostYourCoverage = Record<string, BoostCoverageItem>;

export interface ProposalCreatePayload {
  full_name: string;
  contact_no: string;
  date_of_birth: string;
  gender: string;
  plan_no: string;
  policy_term: number;
  annuity_pension_unit: number;
  hi_premium: number;
  maternity_premium: number;
  ci_premium: number;
  pdab_premium: number;
  diab_premium: number;
  supplementary_premium: number;
  total_premium: number;
  hi_sum_assured: number;
  ci_sum_assured: number;
  pdab_sum_assured: number;
  diab_sum_assured: number;
  sum_assured: number;
  sum_at_risk: number;
  pay_mode: number;
}

export interface ProposalCreateResponse {
  status: boolean;
  message: string;
  transactionId?: string;
}