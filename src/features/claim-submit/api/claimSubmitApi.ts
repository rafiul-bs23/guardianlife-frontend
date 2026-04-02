import axiosClient from '../../../lib/axios';
import type {
  MemberInfoResponse,
  HospitalItem,
  FileSettingsResponse,
  FileUploadPayload,
  FileUploadResponse,
  ClaimSubmitRequest,
  GopSubmitRequest,
} from '../types';

const CLAIMS_BASE_URL = import.meta.env.VITE_DASHBOARD_API_URL || 'https://gliapp-stg.myguardianbd.com/base-gate/api';

export const fetchMemberInfo = async (policyNumber: string): Promise<MemberInfoResponse> => {
  const response = await axiosClient.get(`${CLAIMS_BASE_URL}/claim/member-info?PolicyNumber=${policyNumber}`);
  return response.data;
};

export const fetchHospitalAreaList = async (isGop: boolean): Promise<string[]> => {
  const response = await axiosClient.get(`${CLAIMS_BASE_URL}/claim/hospital-area-list?IsGop=${isGop}`);
  return response.data;
};

export const fetchHospitalList = async (isGop: boolean, area: string): Promise<HospitalItem[]> => {
  const response = await axiosClient.get(`${CLAIMS_BASE_URL}/claim/hospital-list?IsGop=${isGop}&Area=${area}`);
  return response.data;
};

export const fetchFileSettings = async (feature: string | number): Promise<FileSettingsResponse> => {
  const response = await axiosClient.get(`${CLAIMS_BASE_URL}/filesettings/get-by-feature?Feature=${feature}`);
  return response.data;
};

export const uploadFile = async (payload: FileUploadPayload): Promise<FileUploadResponse> => {
  const response = await axiosClient.post(`${CLAIMS_BASE_URL}/file/file-upload`, payload);
  return response.data;
};

export const submitHiClaim = async (payload: ClaimSubmitRequest): Promise<any> => {
  const response = await axiosClient.post(`${CLAIMS_BASE_URL}/claim/hi-claim-submission`, payload);
  return response.data;
};

export const submitGopClaim = async (payload: GopSubmitRequest): Promise<any> => {
  const response = await axiosClient.post(`${CLAIMS_BASE_URL}/claim/gop-submission`, payload);
  return response.data;
};
