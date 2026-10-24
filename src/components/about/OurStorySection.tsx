import Reveal from "@/components/shared/nav/Reveal";
import { ourStory } from "./about-data";

export default function OurStorySection() {
    return (
        <section className="container mx-auto px-4 py-8 md:px-8 md:py-12">
            <Reveal>
                <h2 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">Our Story</h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6">
                {ourStory.map((s, i) => (
                    <Reveal key={s.id} delay={0.1 + i * 0.08} y={20} className="h-full">
                        <div className="h-full rounded-2xl border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10">
                            <span className="text-2xl font-extrabold text-red-600">{s.year}</span>
                            <h3 className="mt-2 text-base font-semibold">{s.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                {s.description}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
