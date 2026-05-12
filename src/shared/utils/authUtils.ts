
import Cookies from 'js-cookie';

export const AUTH_KEYS = {
  TOKEN: 'token',
  REFRESH_TOKEN: 'refreshToken',
  USER: 'user',
};

export const getAuthToken = () => Cookies.get(AUTH_KEYS.TOKEN);
export const getRefreshToken = () => Cookies.get(AUTH_KEYS.REFRESH_TOKEN);

export const saveAuthData = (data: {
  token: string;
  refreshToken: string;
  refreshTokenExpiryTime: string;
  user?: any;
}) => {
  // Use refreshTokenExpiryTime for cookie expiration if valid
  const expiry = new Date(data.refreshTokenExpiryTime);
  const cookieOptions: Cookies.CookieAttributes = {
    secure: true,
    sameSite: 'lax',
    expires: isNaN(expiry.getTime()) ? undefined : expiry,
  };

  Cookies.set(AUTH_KEYS.TOKEN, data.token, cookieOptions);
  Cookies.set(AUTH_KEYS.REFRESH_TOKEN, data.refreshToken, cookieOptions);

  if (data.user) {
    localStorage.setItem(AUTH_KEYS.USER, JSON.stringify(data.user));
  }
};

export const clearAuthData = () => {
  Cookies.remove(AUTH_KEYS.TOKEN);
  Cookies.remove(AUTH_KEYS.REFRESH_TOKEN);
  localStorage.removeItem(AUTH_KEYS.USER);
};

export const getUserData = () => {
  const user = localStorage.getItem(AUTH_KEYS.USER);
  return user ? JSON.parse(user) : null;
};
