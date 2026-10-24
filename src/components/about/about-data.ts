export type AboutIconName =
    | "heart"
    | "shield"
    | "users"
    | "zap"
    | "target"
    | "eye";

export const aboutStats = [
    { id: "donors", value: "1K+", label: "Registered Donors" },
    { id: "lives", value: "1,150+", label: "Lives Supported" },
    { id: "camps", value: "46", label: "Camps Organized" },
    { id: "districts", value: "12", label: "Areas Covered" },
];

export const missionVision = [
    {
        id: "mission",
        icon: "target" as AboutIconName,
        title: "Our Mission",
        description:
            "To connect blood donors with people in need quickly, safely and free of cost, so no one waits for blood in an emergency.",
    },
    {
        id: "vision",
        icon: "eye" as AboutIconName,
        title: "Our Vision",
        description:
            "A community where every patient can find a willing donor within minutes, anywhere in Bangladesh.",
    },
];

export const ourStory = [
    {
        id: "story-1",
        year: "2022",
        title: "The Idea",
        description:
            "A group of friends started a small donor list after struggling to find blood for a relative.",
    },
    {
        id: "story-2",
        year: "2023",
        title: "First Camps",
        description:
            "We organized our first blood donation camps and grew the donor community to hundreds.",
    },
    {
        id: "story-3",
        year: "2024",
        title: "Going Digital",
        description:
            "My Blood Care launched online, making donor search possible 24/7 from any phone.",
    },
    {
        id: "story-4",
        year: "2025",
        title: "Growing Impact",
        description:
            "Over a thousand donors joined, with emergency support and health camps across many areas.",
    },
];

export const coreValues = [
    {
        id: "val-1",
        icon: "heart" as AboutIconName,
        title: "Compassion",
        description: "We act with care for every patient and family.",
    },
    {
        id: "val-2",
        icon: "shield" as AboutIconName,
        title: "Trust & Safety",
        description: "Donor information is protected and verified.",
    },
    {
        id: "val-3",
        icon: "zap" as AboutIconName,
        title: "Speed",
        description: "In emergencies every minute matters, so we move fast.",
    },
    {
        id: "val-4",
        icon: "users" as AboutIconName,
        title: "Community",
        description: "We grow stronger when volunteers work together.",
    },
];

export const teamMembers = [
    { id: "t1", name: "Arafat Nill", role: "Founder & Lead Developer" },
    { id: "t2", name: "Rahim Uddin", role: "Community Manager" },
    { id: "t3", name: "Sadia Islam", role: "Volunteer Coordinator" },
    { id: "t4", name: "Karim Hossain", role: "Medical Advisor" },
];

export const aboutFaqs = [
    {
        id: "af-1",
        question: "Who can become a blood donor?",
        answer: "Healthy adults aged 18 to 60 weighing at least 50 kg can usually donate blood.",
    },
    {
        id: "af-2",
        question: "How often can I donate?",
        answer: "Men can donate every 3 months and women every 4 months.",
    },
    {
        id: "af-3",
        question: "Is the service really free?",
        answer: "Yes. Finding donors on My Blood Care is completely free.",
    },
];
