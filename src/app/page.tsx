import ActivitySection from "@/components/activity/ActivitySection";
import BloodGroupSection from "@/components/blood-group/BloodGroupSection";
import DonateHero from "@/components/Hero";


export default function HomePage() {
  return (
    <main>
      <DonateHero />
      <ActivitySection />
      <BloodGroupSection />
    </main>
  );
}