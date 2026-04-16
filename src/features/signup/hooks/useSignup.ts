import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendOtp, validateOtp, signUp } from '../api/signupApi';
import type { SignupStep, SendOtpRequest, ValidateOtpRequest, SignupRequest } from '../types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmail = (value: string): boolean => EMAIL_REGEX.test(value.trim());

export const useSignup = () => {
  const navigate = useNavigate();

  // Step state
  const [currentStep, setCurrentStep] = useState<SignupStep>('IDENTITY');

  // Form data
  const [identity, setIdentity] = useState('');
  const [otp, setOtp] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
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

    const request: SendOtpRequest = {
      email: isEmail(identity) ? identity.trim() : null,
      mobileNumber: !isEmail(identity) ? identity.trim() : null,
      type: 'SIGNUP',
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

    const request: ValidateOtpRequest = {
      email: isEmail(identity) ? identity.trim() : null,
      mobileNumber: !isEmail(identity) ? identity.trim() : null,
      otp,
    };

    setLoading(true);
    try {
      const response = await validateOtp(request);
      setSecurityKey(response.securityKey);
      setCurrentStep('INFO');
    } catch {
      setError('Invalid OTP. Please check and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBasicInfo = () => {
    setError(null);
    if (!firstName.trim() || !lastName.trim() || !dateOfBirth) {
      setError('Please fill in all required fields.');
      return;
    }
    setCurrentStep('PASSWORD');
  };

  const handleSignup = async () => {
    setError(null);
    if (!password) {
      setError('Please enter a password.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const request: SignupRequest = {
      firstName,
      lastName,
      password,
      securityKey,
      dateOfBirth,
    };

    setLoading(true);
    try {
      await signUp(request);
      // Success! Maybe redirect to login with a success message
      navigate('/login', { state: { message: 'Signup successful! Please log in.' } });
    } catch {
      setError('Signup failed. Please check your details and try again.');
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    setError(null);
    if (currentStep === 'OTP') setCurrentStep('IDENTITY');
    else if (currentStep === 'INFO') setCurrentStep('OTP');
    else if (currentStep === 'PASSWORD') setCurrentStep('INFO');
    else navigate('/login');
  };

  return {
    currentStep,
    identity,
    setIdentity,
    otp,
    setOtp,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    dateOfBirth,
    setDateOfBirth,
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
    handleBasicInfo,
    handleSignup,
    goBack,
  };
};
