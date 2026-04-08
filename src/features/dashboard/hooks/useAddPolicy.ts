import { useState, useCallback } from 'react';
import { validatePolicyMappingApi, withOtpMappingApi } from '../api';

export const useAddPolicy = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [contactNumber, setContactNumber] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [partialSuccessMsg, setPartialSuccessMsg] = useState<string | null>(null);

  const validatePolicy = useCallback(async (policyNumber: string, dateOfBirth: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await validatePolicyMappingApi(policyNumber, dateOfBirth);
      
      // Success case for validation
      if (data && data.contact) {
        setContactNumber(data.contact);
        return { success: true, contact: data.contact };
      } else {
        // Handle failure response structure
        const errorDesc = data?.errors?.[0]?.description || 'Invalid policy details';
        setError(errorDesc);
        return { success: false, error: errorDesc };
      }
    } catch (err: any) {
      const errorDesc = err.response?.data?.errors?.[0]?.description || 'An error occurred during validation';
      setError(errorDesc);
      console.error(err);
      return { success: false, error: errorDesc };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const verifyOtp = useCallback(async (phoneNumber: string, otp: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await withOtpMappingApi(phoneNumber, otp);

      // According to user, if it's not a 400/500 error, we check isPartialSuccess
      if (data && data.errors === undefined) {
        const isPartial = !!data.isPartialSuccess;
        const message = data.message || null;
        
        if (isPartial && message) {
          setPartialSuccessMsg(message);
        } else if (!isPartial && message === null) {
          setIsSuccess(true);
        }
        return { success: true, isPartial, message };
      } else {
        const errorDesc = data?.errors?.[0]?.description || 'Invalid OTP';
        setError(errorDesc);
        return { success: false, error: errorDesc };
      }
    } catch (err: any) {
      const errorDesc = err.response?.data?.errors?.[0]?.description || 'An error occurred during OTP verification';
      setError(errorDesc);
      console.error(err);
      return { success: false, error: errorDesc };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setIsLoading(false);
    setError(null);
    setContactNumber(null);
    setIsSuccess(true); // Reset to false? No, this hook stays active until unmount or manual reset
    setIsSuccess(false);
    setPartialSuccessMsg(null);
  }, []);

  return { 
    isLoading, 
    error, 
    contactNumber, 
    isSuccess, 
    partialSuccessMsg, 
    validatePolicy, 
    verifyOtp, 
    reset 
  };
};
