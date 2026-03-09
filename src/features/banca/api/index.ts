import * as banca_api from './bancaApi';
import * as mock_banca_api from './mockBancaApi';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const get_banca_products = USE_MOCK ? mock_banca_api.get_banca_products : banca_api.get_banca_products;
