import Reveal from "@/components/shared/nav/Reveal";
import { compatibility } from "./find-blood-data";

export default function CompatibilitySection() {
    return (
        <section className="container mx-auto px-4 py-8 md:px-8 md:py-12">
            <Reveal>
                <h2 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">
                    Blood Compatibility Guide
                </h2>
            </Reveal>

            <Reveal delay={0.1} y={16}>
                <div className="overflow-x-auto rounded-2xl border bg-card">
                    <table className="w-full min-w-[480px] text-left text-sm">
                        <thead className="bg-rose-50 dark:bg-rose-500/10">
                            <tr>
                                <th className="px-4 py-3 font-semibold">Group</th>
                                <th className="px-4 py-3 font-semibold">Can give to</th>
                                <th className="px-4 py-3 font-semibold">Can receive from</th>
                            </tr>
                        </thead>
                        <tbody>
                            {compatibility.map((c) => (
                                <tr key={c.group} className="border-t">
                                    <td className="px-4 py-3 font-bold text-red-600">{c.group}</td>
                                    <td className="px-4 py-3 text-muted-foreground">{c.canGiveTo}</td>
                                    <td className="px-4 py-3 text-muted-foreground">
                                        {c.canReceiveFrom}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Reveal>
        </section>
    );
}
