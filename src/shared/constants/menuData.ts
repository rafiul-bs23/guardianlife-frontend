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
                    { label: "Easylife Special", path: "/products/easylife-special" },
                    { label: "Easylife Plus Special", path: "/products/easylife-plus-special" },
                ]
            },
            {
                label: "Savings Plan",
                children: [
                    { label: "Easylife MSP", path: "/products/easylife-msp" },
                ]
            },
            {
                label: "Women's Savings Plan",
                children: [
                    { label: "JAYA", path: "/products/jaya" },
                ]
            },
            {
                label: "Special Insurance Plans",
                children: [
                    { label: "Cancer Care", path: "/products/cancer-care-plan" },
                    { label: "Guardian Accident Care", path: "/products/accident-care" },
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

// Home
// retail category
// 1. guardian-sanchay
// 2. guardian-probriddhi
// 3. guardian-shommriddhi
// 4. guardian-money-back-term
// 5. nrb-savings-plan
// 6. guardian-care-free-(3-stage)
// 7. guardian-care-free-pro-(4-stage)
// 8. guardian-care-free-pro-ultra-(5-stage)
// 9. nirbhor
// 10. child-protection-plan
// 11. guardian-projonmo
// 12. nishchit-pension-plan
// 13. ajibon-pension-plan
// 14. guardian-surokkha
// 15. guardian-shield
// Quick buy category
// 16. easylife-special
// 17. easylife-plus-special
// 18. easylife-special
// 19. easylife-msp
// 20. jaya
// 21. cancer-care-plan
// 22. accident-care
// 23. guardian-endowment
// 24. guardian-takaful-savings-plan
// 25. guardian-takaful-early-cash
// 26. guardian-takaful-projonmo
// group
// claims
// micro
// banca
// city-bank
// 27. banca-guardian-sanchay
// 28. banca-guardian-care-free-(3-stage)
// 29. banca-child-protection-plan
// 30. banca-nishchit-pension-plan
// 31. banca-guardian-probriddhi
// dbbl
// 27. banca-guardian-sanchay
// 28. banca-guardian-care-free-(3-stage)
// 29. banca-child-protection-plan
// 30. banca-nishchit-pension-plan
// 31. banca-guardian-probriddhi
// mtb
// 27. banca-guardian-sanchay
// 28. banca-guardian-care-free-(3-stage)
// 29. banca-child-protection-plan
// 30. banca-nishchit-pension-plan
// 31. banca-guardian-probriddhi
// about guardian
// Board of Directors
// Shareholder List
// Mancom
// Emc
// contact
// tax rebate
// Privacy Policy
// Partner Channels
// Payment Channels
// Preferred Hospital
// Branch Locations
// Form Libery
// Notice Board
// Career
// FAQ
// Staff List
// Agent List