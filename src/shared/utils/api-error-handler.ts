import type { AxiosError } from 'axios';

interface BackendError {
  code: string;
  description: string;
  type?: string;
}

interface BackendErrorResponse {
  status: number;
  type: string;
  title: string;
  detail: string;
  errors?: BackendError[];
}

/**
 * Parses an Axios error and returns a human-readable error message or array of messages.
 * Specifically handles the Guardian Life backend error structure.
 */
export const parseApiError = (error: unknown): string[] => {
  const axiosError = error as AxiosError<BackendErrorResponse>;
  
  if (axiosError.response?.data) {
    const data = axiosError.response.data;
    
    // If the backend returned a structured error array
    if (data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
      return data.errors.map(err => err.description);
    }
    
    // Fallback to the detail or title
    if (data.detail) return [data.detail];
    if (data.title) return [data.title];
  }

  // Fallback for network errors or other unknown errors
  if (axiosError.message) return [axiosError.message];
  
  return ['An unexpected error occurred. Please try again.'];
};
