import type { HeaderData } from "../../../shared/types/header";
import type { EmployeeApiResponse } from "../types";

export const MOCK_EMPLOYEES_HEADER_DATA: HeaderData = {
    badge: null,
    title: [],
    description: undefined,
    background_image_url: "src/assets/images/headers/employees.png",
};


export const MOCK_EMPLOYEES_DATA: EmployeeApiResponse = {
    status: true,
    transaction_id: "MOCK-TXN-ID",
    data: [
        {
            name: "MOCK: MOHAMMAD EUNUS DAUD",
            designation: "SENIOR VICE PRESIDENT",
            department: "Marketing & Communications",
            image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3087&auto=format&fit=crop"
        },
        {
            name: "MOCK: DR. FATEMA BINTE JALAL",
            designation: "VICE PRESIDENT",
            department: "Claims Department",
            image_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop"
        },
        {
            name: "MOCK: PAPIYA SEN GUPTA",
            designation: "SENIOR ASSISTANT VICE PRESIDENT",
            department: "Underwriting & Policy Servicing Department",
            image_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3176&auto=format&fit=crop"
        },
        {
            name: "MOCK: PAPIYA SEN GUPTA",
            designation: "SENIOR ASSISTANT VICE PRESIDENT",
            department: "Underwriting & Policy Servicing Department",
            image_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3176&auto=format&fit=crop"
        },
        {
            name: "MOCK: PAPIYA SEN GUPTA",
            designation: "SENIOR ASSISTANT VICE PRESIDENT",
            department: "Underwriting & Policy Servicing Department",
            image_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3176&auto=format&fit=crop"
        },
        {
            name: "MOCK: PAPIYA SEN GUPTA",
            designation: "SENIOR ASSISTANT VICE PRESIDENT",
            department: "Underwriting & Policy Servicing Department",
            image_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3176&auto=format&fit=crop"
        },
        {
            name: "MOCK: PAPIYA SEN GUPTA",
            designation: "SENIOR ASSISTANT VICE PRESIDENT",
            department: "Underwriting & Policy Servicing Department",
            image_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3176&auto=format&fit=crop"
        },
        {
            name: "MOCK: PAPIYA SEN GUPTA",
            designation: "SENIOR ASSISTANT VICE PRESIDENT",
            department: "Underwriting & Policy Servicing Department",
            image_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3176&auto=format&fit=crop"
        }
    ]
};