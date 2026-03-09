export interface PrivacyPolicySection {
    title: string;
    content?: string;
    paragraphs?: string[];
    list?: string[];
}

// Translatable content has been moved to public/locales/{lng}/privacy_policy.json
export const privacyPolicyData: PrivacyPolicySection[] = [];
