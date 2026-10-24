import Reveal from "@/components/shared/nav/Reveal";
import { formatTaka, recentDonors } from "./donate-data";

function initials(name: string) {
    return name === "Anonymous"
        ? "?"
        : name
              .split(" ")
              .map((p) => p[0])
              .join("")
              .slice(0, 2);
}

export default function RecentDonorsSection() {
    return (
        <section className="container mx-auto px-4 py-8 md:px-8 md:py-12">
            <Reveal>
                <h2 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">Recent Supporters</h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
                {recentDonors.map((d, i) => (
                    <Reveal key={d.id} delay={0.05 + i * 0.06} y={16}>
                        <div className="flex items-center gap-4 rounded-2xl border bg-card p-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600 dark:bg-red-950">
                                {initials(d.name)}
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-semibold">{d.name}</p>
                                <p className="text-xs text-muted-foreground">{d.time}</p>
                            </div>
                            <span className="text-base font-bold text-red-600">
                                {formatTaka(d.amount)}
                            </span>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
