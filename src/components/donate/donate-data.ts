export const presetAmounts = [100, 250, 500, 1000, 2500, 5000] as const;

export const MIN_DONATION = 50;
export const MAX_DONATION = 500000;

export type ImpactIconName = "droplet" | "ambulance" | "stethoscope" | "users";

export const impactTiers = [
    {
        id: "tier-100",
        amount: 100,
        icon: "droplet" as ImpactIconName,
        title: "Blood Bag Testing",
        description: "Covers safety screening for one blood bag.",
    },
    {
        id: "tier-500",
        amount: 500,
        icon: "ambulance" as ImpactIconName,
        title: "Emergency Transport",
        description: "Helps a donor reach a patient in an emergency.",
    },
    {
        id: "tier-1000",
        amount: 1000,
        icon: "stethoscope" as ImpactIconName,
        title: "Free Health Checkup",
        description: "Funds a health camp checkup for 5 donors.",
    },
    {
        id: "tier-5000",
        amount: 5000,
        icon: "users" as ImpactIconName,
        title: "Donation Camp",
        description: "Supports a full community blood donation camp.",
    },
];

export const donationStats = [
    { id: "raised", value: "৳12.4L", label: "Total Raised" },
    { id: "donors", value: "3,280", label: "Generous Donors" },
    { id: "lives", value: "1,150+", label: "Lives Supported" },
    { id: "camps", value: "46", label: "Camps Organized" },
];

export const campaigns = [
    {
        id: "camp-1",
        title: "Thalassemia Patient Support",
        description: "Monthly blood and medicine support for children with thalassemia.",
        raised: 185000,
        goal: 250000,
        donors: 412,
        daysLeft: 18,
    },
    {
        id: "camp-2",
        title: "Free Ambulance for Donors",
        description: "Fuel and maintenance for the volunteer emergency ambulance.",
        raised: 92000,
        goal: 150000,
        donors: 205,
        daysLeft: 30,
    },
    {
        id: "camp-3",
        title: "Rural Blood Donation Camp",
        description: "Organize a donation camp with equipment for remote villages.",
        raised: 61000,
        goal: 80000,
        donors: 148,
        daysLeft: 9,
    },
];

export const recentDonors = [
    { id: "d1", name: "Rafiq Ahmed", amount: 1000, time: "2 minutes ago" },
    { id: "d2", name: "Anonymous", amount: 500, time: "12 minutes ago" },
    { id: "d3", name: "Nusrat Jahan", amount: 2500, time: "35 minutes ago" },
    { id: "d4", name: "Tanvir Hasan", amount: 250, time: "1 hour ago" },
    { id: "d5", name: "Anonymous", amount: 5000, time: "3 hours ago" },
    { id: "d6", name: "Mehnaz Akter", amount: 100, time: "5 hours ago" },
];

export const howItWorks = [
    {
        id: "step-1",
        step: "01",
        title: "Enter an amount",
        description: "Choose a preset or type any amount you wish to give.",
    },
    {
        id: "step-2",
        step: "02",
        title: "Confirm donation",
        description: "Review your contribution and confirm in one click.",
    },
    {
        id: "step-3",
        step: "03",
        title: "Save lives",
        description: "Your money goes directly to blood care programs.",
    },
];

export const faqs = [
    {
        id: "faq-1",
        question: "Where does my donation go?",
        answer: "100% of your donation goes to blood testing, emergency transport, health camps and patient support programs.",
    },
    {
        id: "faq-2",
        question: "Is there a minimum donation amount?",
        answer: `You can donate any amount starting from ৳${MIN_DONATION}. Every taka helps.`,
    },
    {
        id: "faq-3",
        question: "Will I receive a receipt?",
        answer: "Yes. A donation receipt is sent to your account once the donation is confirmed.",
    },
    {
        id: "faq-4",
        question: "Can I donate anonymously?",
        answer: "Absolutely. Your name is only shown on the supporters list if you choose to share it.",
    },
];

export function formatTaka(amount: number) {
    return `৳${amount.toLocaleString("en-IN")}`;
}
