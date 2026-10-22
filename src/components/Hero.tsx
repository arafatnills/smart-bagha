import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function DonateHero() {
  return (
    <section className="relative isolate w-full overflow-hidden">
      <div className="container mx-auto flex min-h-[calc(100svh-72px)] flex-col items-center px-4 md:flex-row md:px-8">
        {/* LEFT CONTENT */}
        <div className="relative z-20 flex w-full flex-col justify-center pt-12 pb-8 md:w-[60%] md:py-16 lg:w-[50%]">
          <HeroContent />
        </div>

        {/* IMAGE */}
        <HeroImage />
      </div>
    </section>
  );
}
