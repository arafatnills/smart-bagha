import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function DonateHero() {
    return (
        <section className="relative isolate h-[calc(100svh-65px)] min-h-136 w-full overflow-hidden">
            <div className="container mx-auto flex h-full flex-col px-4 md:flex-row md:items-center md:px-8">
                {/* LEFT CONTENT */}
                <div className="relative z-20 flex w-full flex-none flex-col justify-center pt-6 md:w-[60%] md:pt-0 lg:w-[50%]">
                    <HeroContent />
                </div>

                {/* IMAGE */}
                <HeroImage />
            </div>
        </section>
    );
}