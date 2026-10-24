import Reveal from "@/components/shared/nav/Reveal";
import { Eye, Target } from "lucide-react";
import { missionVision, type AboutIconName } from "./about-data";

const icons: Partial<Record<AboutIconName, React.ElementType>> = {
    target: Target,
    eye: Eye,
};

export default function MissionVisionSection() {
    return (
        <section className="container mx-auto px-4 py-8 md:px-8 md:py-12">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 sm:gap-4 lg:gap-6">
                {missionVision.map((m, i) => {
                    const Icon = icons[m.icon] ?? Target;
                    return (
                        <Reveal key={m.id} delay={0.1 + i * 0.1} y={20} className="h-full">
                            <div className="h-full rounded-2xl border bg-rose-50 p-6 dark:bg-rose-500/10">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h2 className="mt-4 text-xl font-bold">{m.title}</h2>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                    {m.description}
                                </p>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}
