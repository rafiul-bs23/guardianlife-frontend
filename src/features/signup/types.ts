export interface SendOtpRequest {
  email: string | null;
  mobileNumber: string | null;
  type: 'SIGNUP';
}

export interface ValidateOtpRequest {
  email: string | null;
  mobileNumber: string | null;
  otp: string;
}

export interface ValidateOtpResponse {
  securityKey: string;
}

export interface SignupRequest {
  firstName: string;
  lastName: string;
  password: string;
  securityKey: string;
  dateOfBirth: string; // YYYY-MM-DD
}

export interface SignupResponse {
  message: string;
  // Add other fields if necessary
}

export type SignupStep = 'IDENTITY' | 'OTP' | 'INFO' | 'PASSWORD';
