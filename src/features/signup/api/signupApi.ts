import axiosClient from '../../../lib/axios';
import type { 
  SendOtpRequest, 
  ValidateOtpRequest, 
  ValidateOtpResponse, 
  SignupRequest, 
  SignupResponse 
} from '../types';

const AUTH_BASE_URL = import.meta.env.VITE_AUTH_API_URL || 'https://gliapp-stg.myguardianbd.com/auth-gate/api/access';

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

export const signUp = async (data: SignupRequest): Promise<SignupResponse> => {
  const response = await axiosClient.post<SignupResponse>(`${AUTH_BASE_URL}/sign-up`, data, {
    headers: { Accept: 'text/plain' },
  });
  return response.data;
};
