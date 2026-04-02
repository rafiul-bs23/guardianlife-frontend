import * as realApi from './claimSubmitApi';
import * as mockApi from './mockClaimSubmitApi';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const fetchMemberInfo = USE_MOCK ? mockApi.fetchMemberInfo : realApi.fetchMemberInfo;
export const fetchHospitalAreaList = USE_MOCK ? mockApi.fetchHospitalAreaList : realApi.fetchHospitalAreaList;
export const fetchHospitalList = USE_MOCK ? mockApi.fetchHospitalList : realApi.fetchHospitalList;
export const fetchFileSettings = USE_MOCK ? mockApi.fetchFileSettings : realApi.fetchFileSettings;
export const uploadFile = USE_MOCK ? mockApi.uploadFile : realApi.uploadFile;
export const submitHiClaim = USE_MOCK ? mockApi.submitHiClaim : realApi.submitHiClaim;
export const submitGopClaim = USE_MOCK ? mockApi.submitGopClaim : realApi.submitGopClaim;
