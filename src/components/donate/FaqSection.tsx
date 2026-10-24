import Reveal from "@/components/shared/nav/Reveal";
import { ChevronDown } from "lucide-react";
import { faqs } from "./donate-data";

export default function FaqSection() {
    return (
        <section className="container mx-auto px-4 py-8 pb-16 md:px-8 md:py-12 md:pb-20">
            <Reveal>
                <h2 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">
                    Frequently Asked Questions
                </h2>
            </Reveal>

            <div className="mx-auto max-w-3xl space-y-3 md:mx-0">
                {faqs.map((f, i) => (
                    <Reveal key={f.id} delay={0.05 + i * 0.06} y={16}>
                        <details className="group rounded-2xl border bg-card p-4 open:shadow-md">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold sm:text-base">
                                {f.question}
                                <ChevronDown className="h-4 w-4 shrink-0 text-red-600 transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 text-sm leading-6 text-muted-foreground">{f.answer}</p>
                        </details>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
