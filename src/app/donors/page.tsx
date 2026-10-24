import CompatibilitySection from "@/components/find-blood/CompatibilitySection";
import DonorSearchSection from "@/components/find-blood/DonorSearchSection";
import EmergencyCtaSection from "@/components/find-blood/EmergencyCtaSection";
import FindBloodHeroSection from "@/components/find-blood/FindBloodHeroSection";
import RequestGuideSection from "@/components/find-blood/RequestGuideSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Find Blood | My Blood Care",
    description: "Search blood donors by blood group and location.",
};

export default function DonorsPage() {
    return (
        <main>
            <FindBloodHeroSection />
            <DonorSearchSection />
            <RequestGuideSection />
            <CompatibilitySection />
            <EmergencyCtaSection />
        </main>
    );
}
