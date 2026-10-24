export const bloodGroupOptions = [
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
] as const;

export type BloodGroup = (typeof bloodGroupOptions)[number];

export const locations = [
    "Dhaka",
    "Chattogram",
    "Rajshahi",
    "Khulna",
    "Sylhet",
    "Barishal",
    "Rangpur",
    "Mymensingh",
] as const;

export type Donor = {
    id: string;
    name: string;
    bloodGroup: BloodGroup;
    location: (typeof locations)[number];
    area: string;
    lastDonated: string;
    totalDonations: number;
    available: boolean;
    phone: string;
};

export const donors: Donor[] = [
    { id: "dn-1", name: "Rafiq Ahmed", bloodGroup: "O+", location: "Dhaka", area: "Mirpur", lastDonated: "4 months ago", totalDonations: 12, available: true, phone: "01711-000001" },
    { id: "dn-2", name: "Nusrat Jahan", bloodGroup: "A+", location: "Dhaka", area: "Dhanmondi", lastDonated: "6 months ago", totalDonations: 7, available: true, phone: "01811-000002" },
    { id: "dn-3", name: "Tanvir Hasan", bloodGroup: "B+", location: "Chattogram", area: "Agrabad", lastDonated: "2 months ago", totalDonations: 5, available: false, phone: "01911-000003" },
    { id: "dn-4", name: "Mehnaz Akter", bloodGroup: "AB+", location: "Sylhet", area: "Zindabazar", lastDonated: "8 months ago", totalDonations: 3, available: true, phone: "01611-000004" },
    { id: "dn-5", name: "Sakib Rahman", bloodGroup: "O-", location: "Dhaka", area: "Uttara", lastDonated: "5 months ago", totalDonations: 9, available: true, phone: "01511-000005" },
    { id: "dn-6", name: "Farhana Yasmin", bloodGroup: "B-", location: "Rajshahi", area: "Boalia", lastDonated: "1 year ago", totalDonations: 4, available: true, phone: "01711-000006" },
    { id: "dn-7", name: "Imran Hossain", bloodGroup: "A-", location: "Khulna", area: "Sonadanga", lastDonated: "3 months ago", totalDonations: 6, available: false, phone: "01811-000007" },
    { id: "dn-8", name: "Sumaiya Khatun", bloodGroup: "O+", location: "Barishal", area: "Kotwali", lastDonated: "7 months ago", totalDonations: 2, available: true, phone: "01911-000008" },
    { id: "dn-9", name: "Jahid Alam", bloodGroup: "AB-", location: "Rangpur", area: "Dhap", lastDonated: "9 months ago", totalDonations: 8, available: true, phone: "01611-000009" },
    { id: "dn-10", name: "Rima Sultana", bloodGroup: "A+", location: "Mymensingh", area: "Ganginarpar", lastDonated: "5 months ago", totalDonations: 5, available: true, phone: "01511-000010" },
    { id: "dn-11", name: "Kamal Uddin", bloodGroup: "B+", location: "Dhaka", area: "Mohammadpur", lastDonated: "4 months ago", totalDonations: 15, available: true, phone: "01711-000011" },
    { id: "dn-12", name: "Lamia Islam", bloodGroup: "O+", location: "Chattogram", area: "Panchlaish", lastDonated: "2 months ago", totalDonations: 3, available: false, phone: "01811-000012" },
];

export const findBloodStats = [
    { id: "donors", value: "1K+", label: "Registered Donors" },
    { id: "available", value: "720", label: "Available Now" },
    { id: "areas", value: "8", label: "Divisions Covered" },
    { id: "response", value: "<15 min", label: "Avg. Response" },
];

export const compatibility: { group: BloodGroup; canGiveTo: string; canReceiveFrom: string }[] = [
    { group: "A+", canGiveTo: "A+, AB+", canReceiveFrom: "A+, A-, O+, O-" },
    { group: "A-", canGiveTo: "A+, A-, AB+, AB-", canReceiveFrom: "A-, O-" },
    { group: "B+", canGiveTo: "B+, AB+", canReceiveFrom: "B+, B-, O+, O-" },
    { group: "B-", canGiveTo: "B+, B-, AB+, AB-", canReceiveFrom: "B-, O-" },
    { group: "AB+", canGiveTo: "AB+", canReceiveFrom: "All groups" },
    { group: "AB-", canGiveTo: "AB+, AB-", canReceiveFrom: "A-, B-, AB-, O-" },
    { group: "O+", canGiveTo: "A+, B+, AB+, O+", canReceiveFrom: "O+, O-" },
    { group: "O-", canGiveTo: "All groups", canReceiveFrom: "O-" },
];

export const requestSteps = [
    { id: "rs-1", step: "01", title: "Search donors", description: "Pick the blood group and location you need." },
    { id: "rs-2", step: "02", title: "Contact directly", description: "Call an available donor from the results." },
    { id: "rs-3", step: "03", title: "Donate safely", description: "Meet at a hospital or blood bank and complete the donation." },
];

export const safetyTips = [
    { id: "tip-1", title: "Verify the need", description: "Confirm the hospital and patient details before the donor travels." },
    { id: "tip-2", title: "Check eligibility", description: "Donors should be healthy, 18+ and not donated in the last 3 months." },
    { id: "tip-3", title: "Use hospitals", description: "Always donate at a hospital or licensed blood bank." },
];

export const emergencyHotline = "16263";
