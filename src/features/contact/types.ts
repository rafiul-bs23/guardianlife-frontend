export interface ContactHeaderData {
    title: string;
    description: string;
}

export interface ContactInfoData {
    visitUs: {
        title: string;
        subtitle: string;
        address: string;
    };
    callUs: {
        title: string;
        subtitle: string;
        phone1: string;
        phone2: string;
    };
    chatWithUs: {
        title: string;
        subtitle: string;
        email: string;
    };
    socialMedia: {
        title: string;
        links: {
            facebook: string;
            linkedin: string;
            instagram: string;
            youtube: string;
        };
    };
}

export interface ContactData {
    header: ContactHeaderData;
    info: ContactInfoData;
}
