import { mockLoginResponse } from './mockData';
import type { LoginRequest, LoginResponse } from '../types';

export const submitLogin = async (_data: LoginRequest): Promise<LoginResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a basic credential check in mock mode
      if (_data.password === '') {
        reject(new Error('Password is required'));
        return;
      }
      resolve(mockLoginResponse);
    }, 600);
  });
};
