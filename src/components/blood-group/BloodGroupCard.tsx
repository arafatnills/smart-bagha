import Link from "next/link";

export type BloodGroupItem = {
  label: string;
  value: string;
};

export default function BloodGroupCard({ label, value }: BloodGroupItem) {
  return (
    <Link
      href={`/donors?bloodGroup=${value}`}
      prefetch={false}
      aria-label={`Find ${label} blood donors`}
      className="group flex items-center justify-center rounded-xl border border-red-500 bg-muted/40 py-4 transition-colors hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 sm:py-6 lg:py-7"
    >
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14 lg:h-16 lg:w-16">
        <svg
          viewBox="0 0 48 56"
          fill="currentColor"
          aria-hidden="true"
          className="absolute inset-0 size-full text-red-500"
        >
          <path d="M24 2 C24 2 6 24 6 36 A18 18 0 0 0 42 36 C42 24 24 2 24 2 Z" />
        </svg>

        <span className="relative z-10 whitespace-nowrap text-[10px] font-bold leading-none text-white sm:text-xs lg:text-sm">
          {label}
        </span>
      </span>
    </Link>
  );
}
