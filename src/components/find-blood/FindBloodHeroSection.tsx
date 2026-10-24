import Reveal from "@/components/shared/nav/Reveal";
import { Droplet } from "lucide-react";
import { findBloodStats } from "./find-blood-data";

export default function FindBloodHeroSection() {
    return (
        <section className="container mx-auto px-4 pt-8 md:px-8 md:pt-14">
            <div className="max-w-3xl">
                <Reveal>
                    <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 dark:border-red-900 dark:bg-red-950/40">
                        <Droplet className="h-3.5 w-3.5 fill-current" /> Find Blood
                    </span>
                </Reveal>
                <Reveal delay={0.1}>
                    <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                        Find a blood donor <span className="text-red-600">near you</span>
                    </h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mt-4 text-base leading-7 text-muted-foreground">
                        Search verified donors by blood group and location, and contact them
                        directly in an emergency.
                    </p>
                </Reveal>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {findBloodStats.map((s, i) => (
                    <Reveal key={s.id} delay={0.25 + i * 0.07} y={16}>
                        <div className="rounded-2xl border bg-card/80 p-4 shadow-sm backdrop-blur">
                            <p className="text-2xl font-bold text-red-600">{s.value}</p>
                            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
