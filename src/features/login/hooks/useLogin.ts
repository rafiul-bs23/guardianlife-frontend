import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitLogin } from '../api';
import type { LoginRequest } from '../types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isEmail = (value: string): boolean => EMAIL_REGEX.test(value.trim());

export const useLogin = () => {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError(null);

      if (!identifier.trim()) {
        setError('Please enter your email or mobile number.');
        return;
      }
      if (!password.trim()) {
        setError('Please enter your password.');
        return;
      }

      const request: LoginRequest = {
        email: isEmail(identifier) ? identifier.trim() : null,
        mobileNumber: !isEmail(identifier) ? identifier.trim() : null,
        password,
      };

      setLoading(true);
      try {
        const response = await submitLogin(request);
        localStorage.setItem('token', response?.token ?? '');
        localStorage.setItem(
          'user',
          JSON.stringify({
            full_name: response?.fullName,
            mobile: response?.mobile,
            gender: response?.gender,
          })
        );
        navigate('/');
      } catch {
        setError('Invalid credentials. Please check your details and try again.');
      } finally {
        setLoading(false);
      }
    },
    [identifier, password, navigate]
  );

  return {
    identifier,
    setIdentifier,
    password,
    setPassword,
    showPassword,
    toggleShowPassword,
    loading,
    error,
    handleSubmit,
  };
};
