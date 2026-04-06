import axios, { AxiosError } from 'axios';
import i18n from '../i18n';
import { getAuthToken, getRefreshToken, saveAuthData, clearAuthData, getUserData } from '../shared/utils/authUtils';

import type {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';
const AUTH_BASE_URL = import.meta.env.VITE_AUTH_API_URL || 'https://gliapp-stg.myguardianbd.com/auth-gate/api/access';
const AUTH_REFRESH_URL = `${AUTH_BASE_URL}/refresh-token`;

const axiosClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
  },
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// Request Interceptor
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAuthToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Set Accept-Language header based on current i18n language
    if (config.headers) {
      config.headers['Accept-Language'] = i18n.language || 'en';
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            return axiosClient(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = getRefreshToken();
      if (!refreshToken) {
        clearAuthData();
        window.location.href = '/login';
        return Promise.reject(error);
      }

      try {
        const response = await axios.post(AUTH_REFRESH_URL, { refreshToken });
        const { token, refreshToken: newRefreshToken, refreshTokenExpiryTime, fullName, mobile, gender, email } = response.data;

        // Obtain current user data to avoid overwriting with undefined if refresh response doesn't include it
        const currentUser = getUserData();
        const updatedUser = {
          full_name: fullName || currentUser?.full_name,
          mobile: mobile || currentUser?.mobile,
          gender: gender || currentUser?.gender,
          email: email || currentUser?.email,
        };

        saveAuthData({
          token,
          refreshToken: newRefreshToken,
          refreshTokenExpiryTime,
          user: updatedUser
        });

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${token}`;
        }

        processQueue(null, token);
        return axiosClient(originalRequest);
      } catch (refreshError: any) {
        processQueue(refreshError, null);
        clearAuthData();
        window.location.href = '/login';
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;