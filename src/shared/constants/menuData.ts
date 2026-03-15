import type { MenuItem } from "../types/menu";

export const MENU_DATA: MenuItem[] = [
    { label: "Home", path: "/" },
    { label: "About Guardian", path: "/about" },
    { label: "Chairman's Message", path: "/chairman" },
    { label: "Board of Directors", path: "/board-directors" },
    { label: "Management Committee", path: "/mancom" },
    { label: "Extended Management Committee", path: "/emc" },
    { label: "Shareholder List", path: "/shareholders" },
    { label: "Category", path: "/category" },
    { label: "Quick Buy Category", path: "/quick-buy-category" },
    {
        label: "For You",
        children: [
            {
                label: "Saving",
                children: [
                    { label: "Guardian Sanchay", path: "/products/guardian-sanchay" },
                    { label: "Guardian Probriddhi", path: "/products/guardian-probriddhi" },
                    { label: "Guardian Somridhi", path: "/products/guardian-shommriddhi" },
                    { label: "Guardian Money Back Term", path: "/products/guardian-money-back-term" },
                ]
            },
            {
                label: "Early Cash",
                children: [
                    { label: "Guardian Care Free (3 Stage)", path: "/products/guardian-care-free-(3-stage)" },
                    { label: "Guardian Care Free Pro (4 Stage)", path: "/products/guardian-care-free-pro-(4-stage)" },
                    { label: "Guardian Care Free Pro Ultra (5 Stage)", path: "/products/guardian-care-free-pro-ultra-(5-stage)" },
                    { label: "Nirbhor", path: "/products/nirbhor" },
                ]
            },
            {
                label: "Investment",
                children: [
                    { label: "Guardian Surokkha", path: "/products/guardian-surokkha" },
                ]
            },
            {
                label: "Term Life",
                children: [
                    { label: "Guardian Shield", path: "/products/guardian-shield" },
                ]
            }
        ]
    },
    {
        label: "For Your Family",
        children: [
            {
                label: "Children",
                children: [
                    { label: "Child Protection Plan", path: "/products/child-protection-plan" },
                    { label: "Guardian Projonmo", path: "/products/guardian-projonmo" },
                ]
            },
            {
                label: "Retirement",
                children: [
                    { label: "NISHCHIT PENSION PLAN", path: "/products/nishchit-pension-plan" },
                    { label: "Ajibon Pension Plan", path: "/products/ajibon-pension-plan" },
                ]
            }
        ]
    },
    {
        label: "Islamic",
        children: [
            {
                label: "Guardian Takaful",
                children: [
                    { label: "Guardian Endowment", path: "/products/guardian-endowment" },
                    { label: "Guardian Takaful Savings Plan", path: "/products/guardian-takaful-savings-plan" },
                    { label: "Guardian Takaful Early Cash", path: "/products/guardian-takaful-early-cash" },
                    { label: "Guardian Takaful Projonmo", path: "/products/guardian-takaful-projonmo" },
                ]
            }
        ]
    },
    {
        label: "QuickBuy",
        children: [
            {
                label: "Term Life Insurance",
                children: [
                    { label: "Easylife Special", path: "/quick-buy-details/easylife-special" },
                    { label: "Easylife Plus Special", path: "/quick-buy-details/easylife-plus-special" },
                ]
            },
            {
                label: "Savings Plan",
                children: [
                    { label: "Easylife MSP", path: "/quick-buy-details/easylife-msp" },
                ]
            },
            {
                label: "Women's Savings Plan",
                children: [
                    { label: "JAYA", path: "/quick-buy-details/jaya" },
                ]
            },
            {
                label: "Special Insurance Plans",
                children: [
                    { label: "Cancer Care", path: "/quick-buy-details/cancer-care-plan" },
                    { label: "Guardian Accident Care", path: "/quick-buy-details/accident-care" },
                ]
            }
        ]
    },
    { label: "Group insurance", path: "/group" },
    { label: "Microinsurance", path: "/micro" },
    { label: "Bancassurance", path: "/banca" },
    { label: "Claims", path: "/claim" },
    { label: "Tax Certificate", path: "/tax-rebate" },
    { label: "Partner Channels", path: "/partner-channels" },
    { label: "Form Library", path: "/form-library" },
    { label: "FAQ", path: "/faq" },
    { label: "Preferred Hospitals", path: "/preferred-hospital" },
    { label: "Branch Locations", path: "/locate-branch" },
    { label: "Career", path: "/career" },
    { label: "Contact", path: "/contact" },
    { label: "Employees", path: "/employees" },
    { label: "Directors", path: "/directors" },
    { label: "Payment", path: "/payment" },
    { label: "Agent List", path: "/agent-list" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Quick Buy Details", path: "/quick-buy-details/:id" },
];
