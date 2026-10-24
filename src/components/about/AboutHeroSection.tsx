import Reveal from "@/components/shared/nav/Reveal";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";
import { aboutStats } from "./about-data";

export default function AboutHeroSection() {
    return (
        <section className="container mx-auto px-4 py-8 md:px-8 md:py-14">
            <div className="max-w-3xl">
                <Reveal>
                    <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 dark:border-red-900 dark:bg-red-950/40">
                        <Heart className="h-3.5 w-3.5 fill-current" /> About My Blood Care
                    </span>
                </Reveal>
                <Reveal delay={0.1}>
                    <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                        Connecting donors with <span className="text-red-600">those in need</span>
                    </h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mt-4 text-base leading-7 text-muted-foreground">
                        We are a volunteer-driven community that makes finding blood fast, free and
                        reliable, because every drop can save a life.
                    </p>
                </Reveal>
                <Reveal delay={0.3}>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Button asChild className="h-11 bg-red-600 px-6 text-white hover:bg-red-700">
                            <Link href="/donors">Find Blood</Link>
                        </Button>
                        <Button asChild variant="outline" className="h-11 px-6">
                            <Link href="/donate">Donate</Link>
                        </Button>
                    </div>
                </Reveal>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {aboutStats.map((s, i) => (
                    <Reveal key={s.id} delay={0.3 + i * 0.07} y={16}>
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
