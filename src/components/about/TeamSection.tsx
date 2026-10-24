import Reveal from "@/components/shared/nav/Reveal";
import { teamMembers } from "./about-data";

export default function TeamSection() {
    return (
        <section className="container mx-auto px-4 py-8 md:px-8 md:py-12">
            <Reveal>
                <h2 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">Meet Our Team</h2>
            </Reveal>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
                {teamMembers.map((m, i) => (
                    <Reveal key={m.id} delay={0.1 + i * 0.08} y={20} className="h-full">
                        <div className="flex h-full flex-col items-center rounded-2xl border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-lg font-bold text-red-600 dark:bg-red-950">
                                {m.name
                                    .split(" ")
                                    .map((p) => p[0])
                                    .join("")
                                    .slice(0, 2)}
                            </div>
                            <h3 className="mt-3 text-sm font-semibold sm:text-base">{m.name}</h3>
                            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{m.role}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
