import type {
  MemberInfoResponse,
  HospitalItem,
  FileSettingsResponse,
  FileUploadPayload,
  FileUploadResponse,
  ClaimSubmitRequest,
  GopSubmitRequest,
} from '../types';
import {
  mockMemberInfo,
  mockHospitalAreaList,
  mockHospitalList,
  mockFileSettings,
  mockFileUploadResponse,
} from './mockData';

export const fetchMemberInfo = async (policyNumber: string): Promise<MemberInfoResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMemberInfo);
    }, 500);
  });
};

export const fetchHospitalAreaList = async (isGop: boolean): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockHospitalAreaList);
    }, 500);
  });
};

export const fetchHospitalList = async (isGop: boolean, area: string): Promise<HospitalItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockHospitalList);
    }, 500);
  });
};

export const fetchFileSettings = async (feature: string | number): Promise<FileSettingsResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const settings = mockFileSettings[String(feature)] || mockFileSettings['3'];
      resolve(settings);
    }, 500);
  });
};

export const uploadFile = async (payload: FileUploadPayload): Promise<FileUploadResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...mockFileUploadResponse,
        service: payload.service,
      });
    }, 800);
  });
};

export const submitHiClaim = async (payload: ClaimSubmitRequest): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 'success', message: 'Claim submitted successfully.' });
    }, 1000);
  });
};

export const submitGopClaim = async (payload: GopSubmitRequest): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 'success', message: 'GOP submitted successfully.' });
    }, 1000);
  });
};
