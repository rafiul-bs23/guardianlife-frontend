import type { HeaderData } from "../../../shared/types/header";
import type { EmployeeListData } from "../types";

export const MOCK_EMPLOYEES_HEADER_DATA: HeaderData = {
    badge: null,
    title: [],
    description: undefined,
    background_image_url: "src/assets/images/headers/employees.png",
};

export const MOCK_EMPLOYEE_LIST_DATA: EmployeeListData = {
    title: "GUARDIAN EMPLOYEE LIST",
    employees: [
        {
            id: "1",
            name: "MOHAMMAD EUNUS DAUD",
            designation: "SENIOR VICE PRESIDENT",
            department: "Marketing & Communications",
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3087&auto=format&fit=crop"
        },
        {
            id: "2",
            name: "DR. FATEMA BINTE JALAL",
            designation: "VICE PRESIDENT",
            department: "Claims Department",
            imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop"
        },
        {
            id: "3",
            name: "DR. FATEMA BINTE JALAL",
            designation: "VICE PRESIDENT",
            department: "Claims Department",
            imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3270&auto=format&fit=crop"
        },
        {
            id: "4",
            name: "PAPIYA SEN GUPTA",
            designation: "SENIOR ASSISTANT VICE PRESIDENT",
            department: "Underwriting & Policy Servicing Department",
            imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3176&auto=format&fit=crop"
        },
        {
            id: "5",
            name: "A S M SAKHAWAT HOSSAIN",
            designation: "ASSISTANT VICE PRESIDENT",
            department: "Bancassurance Department",
            imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3087&auto=format&fit=crop"
        },
        {
            id: "6",
            name: "MD. RAKIBUL HASSAN",
            designation: "SENIOR ASSISTANT VICE PRESIDENT",
            department: "Administration & Procurement Department",
            imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3270&auto=format&fit=crop"
        }
    ]
};
