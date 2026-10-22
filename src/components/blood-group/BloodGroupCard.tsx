import Link from "next/link";

export type BloodGroupItem = {
    label: string; // A+, AB- ...
    value: string; // A_POSITIVE ... (DB enum)
};

export default function BloodGroupCard({ label, value }: BloodGroupItem) {
    return (
        <Link
            href={`/donors?bloodGroup=${value}`}
            prefetch={false}
            aria-label={`Find ${label} blood donors`}
            className="group flex items-center justify-center rounded-xl border border-red-500 bg-muted/40 py-4 transition-colors hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 sm:py-6 lg:py-7"
        >
            <span className="relative block h-12 w-10 sm:h-14 sm:w-12 lg:h-16 lg:w-14">
                <svg
                    viewBox="0 0 48 56"
                    fill="currentColor"
                    aria-hidden="true"
                    className="size-full text-red-500"
                >
                    <path d="M24 2 C24 2 6 24 6 36 A18 18 0 0 0 42 36 C42 24 24 2 24 2 Z" />
                </svg>

                <span className="absolute left-1/2 top-[64%] -translate-x-1/2 -translate-y-1/2 text-[11px] font-semibold leading-none text-white sm:text-sm lg:text-base">
                    {label}
                </span>
            </span>
        </Link>
    );
}