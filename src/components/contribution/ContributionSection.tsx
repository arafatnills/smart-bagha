import Reveal from "@/components/shared/Reveal";
import ContributionCard, {
    type ContributionItem,
} from "./ContributionCard";

const contributions = [
    { id: "donors", value: "1K+", label: "Blood Donner", color: "sky" },
    { id: "posts-1", value: "20", label: "Post everyday", color: "emerald" },
    { id: "posts-2", value: "20", label: "Post everyday", color: "indigo" },
];

export default function ContributionSection() {
    const items = contributions as ContributionItem[];

    return (
        <section className="container mx-auto px-4 py-8 md:px-8 md:py-12">
            <Reveal>
                <h2 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">
                    Our Contribution
                </h2>
            </Reveal>

            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 lg:gap-6">
                {items.map(({ id, ...item }, index) => (
                    <Reveal
                        key={id}
                        delay={0.1 + index * 0.1}
                        y={20}
                        className="h-full"
                    >
                        <ContributionCard {...item} />
                    </Reveal>
                ))}
            </div>
        </section>
    );
}