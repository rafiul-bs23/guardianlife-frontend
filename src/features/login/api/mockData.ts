import type { LoginResponse } from '../types';

export const mockLoginResponse: LoginResponse = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock_token',
  refreshToken: 'mock_refresh_token_abc123=',
  refreshTokenExpiryTime: '2026-04-05T08:50:58.9128491Z',
  fullName: 'Demo User',
  gender: null,
  mobile: '01678040024',
};
