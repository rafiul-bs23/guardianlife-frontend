import axiosClient from '../../../lib/axios';
import type { LoginRequest, LoginResponse } from '../types';

const AUTH_BASE_URL = import.meta.env.VITE_AUTH_API_URL || 'https://gliapp-stg.myguardianbd.com/auth-gate/api/access';

export const submitLogin = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosClient.post<LoginResponse>(`${AUTH_BASE_URL}/login`, data, {
    headers: { Accept: 'text/plain' },
  });
  return response.data;
};
