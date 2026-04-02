import type {
  MemberInfoResponse,
  HospitalItem,
  FileSettingsResponse,
  FileUploadResponse,
} from '../types';

export const mockMemberInfo: MemberInfoResponse = {
  organization: 'GUARDIAN LIFE INSURANCE LIMITED',
  fullName: 'RAKIN SHAFQAT CHOWDHURY',
  members: [
    {
      id: 514303,
      policyNo: '7045220071-1',
      memberName: 'RAKIN SHAFQAT CHOWDHURY',
      relation: 'SELF',
      claimTypes: [
        { id: 1, name: 'IPD' },
        { id: 2, name: 'OPD' },
        { id: 3, name: 'MATERNITY' },
      ],
    },
    {
      id: 519532,
      policyNo: '7045220071-2',
      memberName: 'SAIMA ZAMAN',
      relation: 'SPOUSE',
      claimTypes: [
        { id: 1, name: 'IPD' },
        { id: 3, name: 'MATERNITY' },
      ],
    },
  ],
};

export const mockHospitalAreaList: string[] = [
  'Anowara',
  'Badda',
  'Bagerhat',
  'Banani',
  'Banasree',
  'Bangalore',
  'Baridhara',
  'Barisal',
  'Bashundhara',
  'Bhola',
  'Bogura',
  'Brahmanbaria',
  'Chandpur',
];

export const mockHospitalList: HospitalItem[] = [
  {
    id: '179',
    name: 'IBN SINA MEDICAL CHECK-UP UNIT (0179)',
    isGop: false,
  },
  {
    id: '188',
    name: 'LABAID DIAGNOSTICS (BADDA UNIT) (0188)',
    isGop: false,
  },
  {
    id: '305',
    name: 'DR. LAL PATH LABS BANGLADESH PVT. LTD. (0350)',
    isGop: false,
  },
  {
    id: '8328',
    name: 'ThyroCare Bangladesh (0418)',
    isGop: false,
  },
  {
    id: '12357',
    name: 'AMZ Hospital Limited (0465)',
    isGop: false,
  },
];

export const mockFileSettings: Record<string, FileSettingsResponse> = {
  '2': {
    feature: 'GOP',
    fileExtensions: '.pdf,.png,.jpg,.jpeg',
    minFileSize: 1,
    maxFileSize: 10240,
  },
  '3': {
    feature: 'HIClaim',
    fileExtensions: '.pdf,.png,.jpg,.jpeg',
    minFileSize: 1,
    maxFileSize: 10240,
  },
};

export const mockFileUploadResponse: FileUploadResponse = {
  id: 1001,
  service: 'HIClaim',
  subService: '',
  url: 'https://example.com/mock-upload-url-1001.pdf',
};
