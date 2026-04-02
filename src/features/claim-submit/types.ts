export interface ClaimTypeItem {
  id: number;
  name: string;
}

export interface MemberItem {
  id: number;
  policyNo: string;
  memberName: string;
  relation: string;
  claimTypes: ClaimTypeItem[];
}

export interface MemberInfoResponse {
  organization: string;
  fullName: string;
  members: MemberItem[];
}

export interface HospitalItem {
  id: string;
  name: string;
  isGop: boolean;
}

export interface FileSettingsResponse {
  feature: string;
  fileExtensions: string;
  minFileSize: number;
  maxFileSize: number;
}

export interface FileUploadPayload {
  service: string;
  fileName: string;
  extension: string;
  base64Data: string;
}

export interface FileUploadResponse {
  id: number;
  service: string;
  subService: string;
  url: string;
}

export interface ClaimSubmitRequest {
  policyNumber: string;
  memberId: string | number;
  claimType: string | number;
  treatmentDate?: string;
  dischargeDate?: string;
  claimCategory?: string;
  claimedAmount: number;
  hospitalId: number;
  physicianName: string;
  cabinNo?: string;
  claimDocuments: number[];
}

export interface GopSubmitRequest {
  policyNo: string;
  memberId: string;
  claimType: string;
  treatmentDate?: string;
  hospitalId: number;
  cabinOrBedNo?: string;
  contactNo: string;
  admissionReason?: string;
  claimDocuments: number[];
}
