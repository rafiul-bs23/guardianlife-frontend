import axiosClient from '../../../lib/axios';
import type { ResetPasswordRequest, ResetPasswordResponse } from '../types';

const AUTH_BASE_URL = import.meta.env.VITE_AUTH_API_URL || 'https://gliapp-stg.myguardianbd.com/auth-gate/api/access';

export interface SendOtpRequest {
  email: string | null;
  mobileNumber: string | null;
  type: 'Reset';
}

export interface ValidateOtpRequest {
  email: string | null;
  mobileNumber: string | null;
  otp: string;
}

export interface ValidateOtpResponse {
  securityKey: string;
}

export const sendOtp = async (data: SendOtpRequest): Promise<void> => {
  await axiosClient.post(`${AUTH_BASE_URL}/send-otp`, data, {
    headers: { Accept: 'text/plain' },
  });
};

export const validateOtp = async (data: ValidateOtpRequest): Promise<ValidateOtpResponse> => {
  const response = await axiosClient.post<ValidateOtpResponse>(`${AUTH_BASE_URL}/validate-otp`, data, {
    headers: { Accept: 'text/plain' },
  });
  return response.data;
};

export const resetPassword = async (data: ResetPasswordRequest): Promise<ResetPasswordResponse> => {
  const response = await axiosClient.post<ResetPasswordResponse>(`${AUTH_BASE_URL}/reset-password`, data, {
    headers: { Accept: 'text/plain' },
  });
  return response.data;
};
