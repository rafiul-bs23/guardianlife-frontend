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
  bottomLabel: string;
  topLabel: string | null;
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
  additionalData: BreakdownAdditionalData | null;
}

export interface PlanBreakdownSection {
  content: BreakdownItem[];
}

// DocumentItem & ProductDocumentsSection are now imported from shared

// VideoItem is now imported from shared

export interface WhyChooseCoverageSection {
  title: string;
  description: string;
  mainCard: CardItem;
  cards: CardItem[];
}


// LearnMoreSection is now imported from shared


export interface ProductData {
  quickProductSection: QuickProductSection;
  productJourneySection: ProductJourneySection;
  keyHighlightsSection: KeyHighlightsSection;
  planBenefitsSection: PlanBenefitsSection;
  supplementaryBenefitsSection: SupplementaryBenefitsSection;
  planBreakdownSection: PlanBreakdownSection;
  productDocumentsSection: ProductDocumentsSection;
  whyChooseCoverageSection: WhyChooseCoverageSection;
  learnMoreSection: LearnMoreSection;
}

export interface ProductSuccessResponse {
  success: true;
  transactionId: string;
  data: ProductData;
}

// Error Response 
export interface ValidationError {
  field: string;
  message: string;
}

export interface ProductErrorResponse {
  success: false;
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