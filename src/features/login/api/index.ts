import * as realApi from './loginApi';
import * as mockApi from './mockLoginApi';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const submitLogin = USE_MOCK ? mockApi.submitLogin : realApi.submitLogin;
