import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendOtp, validateOtp, resetPassword } from '../api/forgotPasswordApi';
import type { ForgotPasswordStep, ResetPasswordRequest } from '../types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmail = (value: string): boolean => EMAIL_REGEX.test(value.trim());

export const useForgotPassword = () => {
  const navigate = useNavigate();

  // Step state
  const [currentStep, setCurrentStep] = useState<ForgotPasswordStep>('IDENTITY');

  // Form data
  const [identity, setIdentity] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityKey, setSecurityKey] = useState('');

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = useCallback(() => setShowPassword((prev) => !prev), []);

  const handleSendOtp = async () => {
    setError(null);
    if (!identity.trim()) {
      setError('Please enter your email or mobile number.');
      return;
    }

    const request = {
      email: isEmail(identity) ? identity.trim() : null,
      mobileNumber: !isEmail(identity) ? identity.trim() : null,
      type: 'Reset' as const,
    };

    setLoading(true);
    try {
      await sendOtp(request);
      setCurrentStep('OTP');
    } catch {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleValidateOtp = async () => {
    setError(null);
    if (otp.length < 6) {
      setError('Please enter a valid 6-digit OTP.');
      return;
    }

    const request = {
      email: isEmail(identity) ? identity.trim() : null,
      mobileNumber: !isEmail(identity) ? identity.trim() : null,
      otp,
    };

    setLoading(true);
    try {
      const response = await validateOtp(request);
      setSecurityKey(response.securityKey);
      setCurrentStep('RESET');
    } catch {
      setError('Invalid OTP. Please check and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    setError(null);
    if (!password) {
      setError('Please enter a new password.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const request: ResetPasswordRequest = {
      securityKey,
      newPassword: password,
    };

    setLoading(true);
    try {
      await resetPassword(request);
      navigate('/login', { state: { message: 'Password reset successful! Please log in with your new password.' } });
    } catch {
      setError('Failed to reset password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    setError(null);
    if (currentStep === 'OTP') setCurrentStep('IDENTITY');
    else if (currentStep === 'RESET') setCurrentStep('OTP');
    else navigate('/login');
  };

  return {
    currentStep,
    identity,
    setIdentity,
    otp,
    setOtp,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    toggleShowPassword,
    loading,
    error,
    handleSendOtp,
    handleValidateOtp,
    handleResetPassword,
    goBack,
  };
};
