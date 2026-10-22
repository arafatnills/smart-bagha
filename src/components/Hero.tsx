import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function DonateHero() {
    return (
        <section className="relative isolate w-full overflow-hidden md:h-[calc(100svh-65px)] md:min-h-136">
            <div className="container mx-auto flex flex-col px-4 md:h-full md:flex-row md:items-center md:px-8">
                {/* LEFT CONTENT */}
                <div className="relative z-20 flex w-full flex-none flex-col pt-8 md:w-[60%] md:justify-center md:pt-0 lg:w-[50%]">
                    <HeroContent />
                </div>

                {/* IMAGE */}
                <HeroImage />
            </div>
        </section>
    );
}