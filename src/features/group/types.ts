export interface LifeCoverageType {
  id: number;
  title: string;
  description: string;
}

/* ── Benefits Section ── */
export interface BenefitItem {
  id: number;
  title: string;
  description: string;
}

export interface BenefitsHeader {
  title: string;
  description: string;
}

export interface BenefitsData {
  header: BenefitsHeader;
  image_url: string;
  benefits: BenefitItem[];
}
