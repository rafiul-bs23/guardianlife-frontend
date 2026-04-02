
export const AUTH_KEYS = {
  TOKEN: 'token',
  REFRESH_TOKEN: 'refreshToken',
  REFRESH_TOKEN_EXPIRY: 'refreshTokenExpiryTime',
  USER: 'user',
};

export const getAuthToken = () => localStorage.getItem(AUTH_KEYS.TOKEN);
export const getRefreshToken = () => localStorage.getItem(AUTH_KEYS.REFRESH_TOKEN);

export const saveAuthData = (data: {
  token: string;
  refreshToken: string;
  refreshTokenExpiryTime: string;
  user?: any;
}) => {
  localStorage.setItem(AUTH_KEYS.TOKEN, data.token);
  localStorage.setItem(AUTH_KEYS.REFRESH_TOKEN, data.refreshToken);
  localStorage.setItem(AUTH_KEYS.REFRESH_TOKEN_EXPIRY, data.refreshTokenExpiryTime);
  if (data.user) {
    localStorage.setItem(AUTH_KEYS.USER, JSON.stringify(data.user));
  }
};

export const clearAuthData = () => {
  localStorage.removeItem(AUTH_KEYS.TOKEN);
  localStorage.removeItem(AUTH_KEYS.REFRESH_TOKEN);
  localStorage.removeItem(AUTH_KEYS.REFRESH_TOKEN_EXPIRY);
  localStorage.removeItem(AUTH_KEYS.USER);
};

export const getUserData = () => {
  const user = localStorage.getItem(AUTH_KEYS.USER);
  return user ? JSON.parse(user) : null;
};
