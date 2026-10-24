import Reveal from "@/components/shared/nav/Reveal";
import { Heart } from "lucide-react";
import DonationForm from "./DonationForm";
import { donationStats } from "./donate-data";

export default function DonateHeroSection() {
    return (
        <section className="container mx-auto px-4 py-8 md:px-8 md:py-14">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <div>
                    <Reveal>
                        <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 dark:border-red-900 dark:bg-red-950/40">
                            <Heart className="h-3.5 w-3.5 fill-current" /> Support Blood Care
                        </span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                            Your small gift can{" "}
                            <span className="text-red-600">save a life</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                            Every donation funds blood testing, emergency transport and health
                            camps for people who need help the most.
                        </p>
                    </Reveal>

                    <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                        {donationStats.map((s, i) => (
                            <Reveal key={s.id} delay={0.25 + i * 0.07} y={16}>
                                <div className="rounded-2xl border bg-card/80 p-4 shadow-sm backdrop-blur">
                                    <p className="text-2xl font-bold text-red-600">{s.value}</p>
                                    <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <Reveal delay={0.2}>
                    <DonationForm />
                </Reveal>
            </div>
        </section>
    );
}
