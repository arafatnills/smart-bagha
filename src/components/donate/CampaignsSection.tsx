import Reveal from "@/components/shared/nav/Reveal";
import CampaignCard from "./CampaignCard";
import { campaigns } from "./donate-data";

export default function CampaignsSection() {
    return (
        <section className="container mx-auto px-4 py-8 md:px-8 md:py-12">
            <Reveal>
                <h2 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">Active Campaigns</h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 sm:gap-4 lg:gap-6">
                {campaigns.map(({ id, ...item }, i) => (
                    <Reveal key={id} delay={0.1 + i * 0.1} y={20} className="h-full">
                        <CampaignCard {...item} />
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
