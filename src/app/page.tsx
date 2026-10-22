import ActivitySection from "@/components/activity/ActivitySection";
import BloodGroupSection from "@/components/blood-group/BloodGroupSection";
import ContributionSection from "@/components/contribution/ContributionSection";
import DonateHero from "@/components/Hero";
import ServicesSection from "@/components/services/ServicesSection";


export default function HomePage() {
  return (
    <main>
      <DonateHero />
      <ActivitySection />
      <BloodGroupSection />
      <ServicesSection/>
      <ContributionSection/>
    </main>
  );
}