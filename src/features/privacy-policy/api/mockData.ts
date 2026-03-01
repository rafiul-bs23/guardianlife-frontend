export interface PrivacyPolicySection {
    title: string;
    content?: string;
    paragraphs?: string[];
    list?: string[];
}

export const privacyPolicyData: PrivacyPolicySection[] = [
    {
        title: "DATA",
        content: "The type of personal data we collect depends upon the circumstances in which that data is collected. We may collect details about prospective and existing customers including name; National identity card number, passport number, date of birth, telephone number, postal address, email address, bio-data and health information, employment information, financial information, investment portfolios, the same personal data relating to any other relevant individuals (e.g. family members or beneficiaries) to enable the provision of insured benefits, and other personal data relevant to the insurance being applied for."
    },
    {
        title: "PURPOSE",
        content: "We collect personal data as required by our business purposes including, but not limited to:",
        list: [
            "Assessing, evaluating and processing applications for insurance;",
            "Administering an insurance policy (including a group policy) and providing services in relation to it;",
            "Assessing and investigating claims made under an insurance policy, and processing and paying claims under it;",
            "Contacting you regarding enquiries, the collection of insurance premium, payment discrepancies, renewals, changes to an insurance policy mid-term or any other matter relating to an insurance policy or a claim under it;",
            "Underwriting and reinsuring risk;",
            "Verifying identities;",
            "For our own internal records;",
            "Marketing (please see below for more information);",
            "Commencing or defending any legal proceedings brought against us, our Directors, Executives, Officers, Employees, Subcontractors, Agents, Affiliates and Subsidiaries;",
            "Compliance with applicable laws, regulations (ie IDRA) or any industry codes or guidelines; and",
            "For other ancillary purposes which are directly related to the above purposes."
        ]
    },
    {
        title: "PROVISION OF DATA",
        content: "We will let you know whether it is obligatory or voluntary to supply your personal data when we ask you for it. In most cases, it will be obligatory. We will also explain to you the consequences of failing to supply the data we ask for; the purpose for which the data is being collected; persons to whom the data may be transferred; your rights to request access to and correct your data, and the contact details of the Data Protection Officer who will handle these requests."
    },
    {
        title: "COLLECTION",
        content: "We ensure that we will not collect data beyond what we require for our business activities. We ensure that we collect data by lawful and fair means in compliance with applicable data protection legislation of the nation."
    },
    {
        title: "CONSENT",
        content: "We will obtain your consent before using, collecting or disclosing your personal data for any purpose and will notify you of your right to withdraw consent at any time and the consequences of doing so."
    },
    {
        title: "USAGE",
        content: "The purposes for which personal data will be used will depend on the circumstances in which that personal data is collected. Details of the purposes for which we use personal data are contained in our Personal Information Collection Statement which we will issue to you at or before the time we collect your personal data. Generally, we may use personal data for the purpose for which it was provided to us, purposes which are directly related to the purpose for which it was provided to us, and any other purpose to which you have consented."
    },
    {
        title: "ACCURACY",
        content: "We will make a reasonable effort to accurately record your personal data in our systems. This will include reviewing the completeness of any submitted forms and/or other written documentation, and verifying identities and particulars against identification documents. We may assume that personal data collected directly is accurate and complete and we may ask you for a verbal or written declaration that the personal data provided to us is accurate and complete. In certain situations, we may request that personal data is provided again to ensure that records are current and we will make a reasonable effort to accurately record the updated personal data provided in our systems."
    },
    {
        title: "CONFIDENTIALITY",
        content: "We are committed to protecting the confidentiality and security of personal data. We will comply with applicable data protection requirements and will only collect, use or disclose personal data in accordance with applicable data protection laws. Personal data may be shared with third parties, such as Reinsurers, Service providers (e.g., IT services, legal services), Regulators and law enforcement authorities, Business partners, but only when necessary for the fulfillment of insurance services. All third parties are required to comply with our data protection policies and are subject to contractual agreements to ensure the security and confidentiality of personal data. We may use policy information of real cases for our training purposes internally. In these circumstances, we will not share any personal data that will enable you to be identified."
    },
    {
        title: "MARKETING",
        content: "Where we need to disclose information for a purpose for which you have not consented, we will first ask you for your consent. We will inform you of your options to receive or opt-out of direct marketing communications from us and/or other companies."
    },
    {
        title: "MEDICAL INFORMATION",
        content: "We will keep all medical information confidential. It will only be disclosed to those involved with your treatment or care, including your General Practitioner/Primary Health Physician, or to their agents."
    },
    {
        title: "RETENTION",
        content: "We will keep personal data for no longer than is necessary depending on the circumstances and type of personal data. For more details about our retention policies, please see our Retention Statement."
    },
    {
        title: "SECURITY",
        content: "We will take all practicable steps to ensure that personal data is protected against unauthorized access, processing, erasure, loss, collection, use, disclosure, copying, modification, disposal and other similar risks. We have in place appropriate physical, electronic and managerial measures to safeguard and secure personal data from unauthorized access. However complete confidentiality and security is not guaranteed, especially in relation to electronically held information. We do not provide any warranty against third parties' unauthorized access to personal data. We are not responsible in any manner for direct, indirect, special or consequential damages, howsoever caused, arising out of the provision of personal data to us."
    },
    {
        title: "DATA ACCESS",
        paragraphs: [
            "You may request a copy of the personal data which we hold about you and information about the ways personal data has been or may have been used or disclosed in the past year by us. You may also request correction of your personal data through online ticketing system. The protection of personal data, we will need to verify identities before processing a request.",
            "Data may not be provided where it could reasonably be expected to reveal the identity of someone whose consent to the disclosure of their identity has not been given.",
            "If the data provided by the customer does not match the information on their ID (e.g., Smart Card, NID, Passport), GLIL will use the data from the ID unless the customer provides a valid justification for the discrepancy along with supporting documents. This policy should be explicitly disclosed."
        ]
    }
];
