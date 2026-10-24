"use client";

import Reveal from "@/components/shared/nav/Reveal";
import { SearchX } from "lucide-react";
import { useMemo, useState } from "react";
import DonorCard from "./DonorCard";
import DonorFilters, { ALL } from "./DonorFilters";
import { donors } from "./find-blood-data";

export default function DonorSearchSection() {
    const [bloodGroup, setBloodGroup] = useState(ALL);
    const [location, setLocation] = useState(ALL);

    const results = useMemo(
        () =>
            donors.filter(
                (d) =>
                    (bloodGroup === ALL || d.bloodGroup === bloodGroup) &&
                    (location === ALL || d.location === location),
            ),
        [bloodGroup, location],
    );

    const reset = () => {
        setBloodGroup(ALL);
        setLocation(ALL);
    };

    return (
        <section id="donor-search" className="container mx-auto px-4 py-8 md:px-8 md:py-12">
            <DonorFilters
                bloodGroup={bloodGroup}
                location={location}
                onBloodGroupChange={setBloodGroup}
                onLocationChange={setLocation}
                onReset={reset}
            />

            <div className="mt-8 mb-4 flex items-center justify-between md:mb-6">
                <h2 className="text-xl font-bold md:text-2xl">Available Donors</h2>
                <span className="text-sm text-muted-foreground">
                    {results.length} {results.length === 1 ? "result" : "results"}
                </span>
            </div>

            {results.length === 0 ? (
                <div className="flex flex-col items-center rounded-2xl border bg-card px-4 py-14 text-center">
                    <SearchX className="h-10 w-10 text-red-600" />
                    <h3 className="mt-3 text-base font-semibold">No donors found</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Try a different blood group or location.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-6">
                    {results.map(({ id, ...donor }, i) => (
                        <Reveal key={id} delay={0.05 + (i % 6) * 0.06} y={16} className="h-full">
                            <DonorCard {...donor} />
                        </Reveal>
                    ))}
                </div>
            )}
        </section>
    );
}
