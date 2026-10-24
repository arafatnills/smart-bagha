import AboutFaqSection from "@/components/about/AboutFaqSection";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import OurStorySection from "@/components/about/OurStorySection";
import TeamSection from "@/components/about/TeamSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | My Blood Care",
    description: "Learn about My Blood Care, our mission, story, values and team.",
};

export default function AboutPage() {
    return (
        <main>
            <AboutHeroSection />
            <MissionVisionSection />
            <OurStorySection />
            <CoreValuesSection />
            <TeamSection />
            <AboutFaqSection />
        </main>
    );
}
