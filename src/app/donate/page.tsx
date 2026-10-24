import CampaignsSection from "@/components/donate/CampaignsSection";
import DonateHeroSection from "@/components/donate/DonateHeroSection";
import FaqSection from "@/components/donate/FaqSection";
import HowItWorksSection from "@/components/donate/HowItWorksSection";
import ImpactSection from "@/components/donate/ImpactSection";
import RecentDonorsSection from "@/components/donate/RecentDonorsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Donate | My Blood Care",
    description: "Support blood care programs with a donation of any amount.",
};

export default function DonatePage() {
    return (
        <main>
            <DonateHeroSection />
            <ImpactSection />
            <HowItWorksSection />
            <CampaignsSection />
            <RecentDonorsSection />
            <FaqSection />
        </main>
    );
}
