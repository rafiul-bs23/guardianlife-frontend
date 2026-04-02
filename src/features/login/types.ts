export interface LoginRequest {
  email: string | null;
  mobileNumber: string | null;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  refreshTokenExpiryTime: string;
  fullName: string;
  gender: string | null;
  mobile: string;
  email: string;
}

export interface LoginFormValues {
  identifier: string;
  password: string;
}
