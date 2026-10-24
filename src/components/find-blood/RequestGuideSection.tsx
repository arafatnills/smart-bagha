import Reveal from "@/components/shared/nav/Reveal";
import { requestSteps, safetyTips } from "./find-blood-data";

export default function RequestGuideSection() {
    return (
        <section className="container mx-auto px-4 py-8 md:px-8 md:py-12">
            <Reveal>
                <h2 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">How to Request Blood</h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 sm:gap-4 lg:gap-6">
                {requestSteps.map((s, i) => (
                    <Reveal key={s.id} delay={0.1 + i * 0.1} y={20} className="h-full">
                        <div className="h-full rounded-2xl border bg-rose-50 p-5 dark:bg-rose-500/10">
                            <span className="text-3xl font-extrabold text-red-600/80">{s.step}</span>
                            <h3 className="mt-2 text-base font-semibold">{s.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                {s.description}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>

            <Reveal>
                <h2 className="mt-10 mb-4 text-xl font-bold md:mb-6 md:text-2xl">Safety Tips</h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 sm:gap-4 lg:gap-6">
                {safetyTips.map((t, i) => (
                    <Reveal key={t.id} delay={0.1 + i * 0.1} y={20} className="h-full">
                        <div className="h-full rounded-2xl border bg-card p-5">
                            <h3 className="text-base font-semibold">{t.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                {t.description}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
