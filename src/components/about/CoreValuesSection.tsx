import Reveal from "@/components/shared/nav/Reveal";
import { Heart, ShieldCheck, Users, Zap } from "lucide-react";
import { coreValues, type AboutIconName } from "./about-data";

const icons: Partial<Record<AboutIconName, React.ElementType>> = {
    heart: Heart,
    shield: ShieldCheck,
    zap: Zap,
    users: Users,
};

export default function CoreValuesSection() {
    return (
        <section className="container mx-auto px-4 py-8 md:px-8 md:py-12">
            <Reveal>
                <h2 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">Our Core Values</h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6">
                {coreValues.map((v, i) => {
                    const Icon = icons[v.icon] ?? Heart;
                    return (
                        <Reveal key={v.id} delay={0.1 + i * 0.08} y={20} className="h-full">
                            <div className="h-full rounded-2xl border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="mt-4 text-base font-semibold">{v.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                    {v.description}
                                </p>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}
