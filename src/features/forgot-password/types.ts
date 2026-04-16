export interface ResetPasswordRequest {
  securityKey: string;
  newPassword: string;
}

export interface ResetPasswordResponse {
  message: string;
}

export type ForgotPasswordStep = 'IDENTITY' | 'OTP' | 'RESET';
