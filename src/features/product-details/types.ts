
export interface ContentItem {
  title: string;
  description: string;
}

export interface CardItem {
  title: string;
  description: string;
  image?: string;
}



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

export interface PlanBenefitsSection {
  description: string;
  cards: CardItem[];
  points: ContentItem[];
}

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

export interface DocumentItem {
  type: 'file' | string;
  title: string;
  url: string;
}

export interface ProductDocumentsSection {
  content: DocumentItem[];
}

export interface VideoItem {
  title: string;
  videoUrl: string;
}

export interface WhyChooseCoverageSection {
  title: string;
  description: string;
  mainCard: CardItem;
  cards: CardItem[];
}


export interface LearnMoreSection {
  content: VideoItem[];
}


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