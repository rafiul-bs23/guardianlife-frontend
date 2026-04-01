export interface Policy {
  policyId: number;
  planName: string;
  policyNumber: string;
  organizationName: string | null;
  isShowPremiumAmount: boolean;
  telemedicineType: string;
  phoneNumber: string;
  categoryName: string;
  channel: string;
  channelId: number;
  policyStatus: string;
  sumAssured: number;
  policyTerm: number;
  premiumAmount: number;
  suspenseAmount: number;
  dueAmount: number;
  lateFee: number;
  totalDueAmount: number;
  startDate: string;
  dateOfBirth: string;
  nextDueDate: string | null;
  maturityDate: string;
  isActive: boolean;
  segment: string;
  isEligibleForLoan: boolean;
  isEligibleForAlteration: boolean;
  isEligibleForRevive: boolean;
  isEligibleForAdjustment: boolean;
  isEligibleForNominee: boolean;
  totalSbBenefit: number;
  loanDuration: any[];
  eligibleLoanAmount: number;
  isEligibleForFinancialAlteration: boolean;
  isEligibleForGOP: boolean;
  riders: string[];
  totalLoanDue: number | null;
}

export interface Claim {
  intimationNo: string;
  policyNo: string;
  claimStatus: string;
  actualClaimStatus: string;
  claimDate: string;
  dueClaim: number;
  isActive: boolean;
  channelId: number;
  channel: string;
  planName: string;
  segmentName: string;
}

export interface LoyaltyCard {
  id: number;
  cardNumber: string;
  policyNumber: string;
  phoneNumber: string;
  expiryDate: string;
  channelSegmentType: string;
}

export interface DashboardApiResponse {
  isMapped: boolean;
  policies: Policy[];
  claims: Claim[];
  loyaltyCards: LoyaltyCard[];
}
