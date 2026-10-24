import Reveal from "@/components/shared/nav/Reveal";
import { Ambulance, Droplet, Stethoscope, Users } from "lucide-react";
import { formatTaka, impactTiers, type ImpactIconName } from "./donate-data";

const icons = {
    droplet: Droplet,
    ambulance: Ambulance,
    stethoscope: Stethoscope,
    users: Users,
} satisfies Record<ImpactIconName, React.ElementType>;

export default function ImpactSection() {
    return (
        <section className="container mx-auto px-4 py-8 md:px-8 md:py-12">
            <Reveal>
                <h2 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">
                    What Your Donation Does
                </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6">
                {impactTiers.map((tier, i) => {
                    const Icon = icons[tier.icon];
                    return (
                        <Reveal key={tier.id} delay={0.1 + i * 0.08} y={20} className="h-full">
                            <div className="h-full rounded-2xl border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <p className="mt-4 text-2xl font-bold text-red-600">
                                    {formatTaka(tier.amount)}
                                </p>
                                <h3 className="mt-1 text-base font-semibold">{tier.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                    {tier.description}
                                </p>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}
