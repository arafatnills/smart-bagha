import { Button } from "@/components/ui/button";
import { Droplet, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type { Donor } from "./find-blood-data";

export default function DonorCard({
    id,
    name,
    bloodGroup,
    location,
    area,
    lastDonated,
    totalDonations,
    available,
    phone,
}: Donor) {
    return (
        <div className="flex h-full flex-col rounded-2xl border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10">
            <div className="flex items-start justify-between gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-100 text-lg font-extrabold text-red-600 dark:bg-red-950">
                    {bloodGroup}
                </div>
                <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        available
                            ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10"
                            : "bg-muted text-muted-foreground"
                    }`}
                >
                    {available ? "Available" : "Unavailable"}
                </span>
            </div>

            <h3 className="mt-4 text-base font-semibold">
                <Link href={`/donors/${id}`} className="hover:text-red-600">
                    {name}
                </Link>
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> {area}, {location}
            </p>

            <div className="mt-3 flex flex-1 items-end gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                    <Droplet className="h-3.5 w-3.5 text-red-600" /> {totalDonations} donations
                </span>
                <span>Last: {lastDonated}</span>
            </div>

            <Button
                asChild={available}
                disabled={!available}
                className="mt-4 h-10 w-full bg-red-600 text-white hover:bg-red-700"
            >
                {available ? (
                    <a href={`tel:${phone.replace(/-/g, "")}`}>
                        <Phone className="h-4 w-4" /> Call {phone}
                    </a>
                ) : (
                    <span>Not available</span>
                )}
            </Button>
            <Link
                href={`/donors/${id}`}
                className="mt-2 block text-center text-sm font-medium text-red-600 hover:underline"
            >
                View profile &amp; tracking
            </Link>
        </div>
    );
}
