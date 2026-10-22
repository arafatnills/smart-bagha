import Link from "next/link";
import { serviceIcons, type ServiceIconKey } from "./serviceIcons";

export type ServiceColor =
    | "rose"
    | "red"
    | "amber"
    | "sky"
    | "emerald"
    | "indigo"
    | "fuchsia"
    | "orange"
    | "teal";

export type ServiceItem = {
    id: string;
    title: string;
    href: string;
    icon: ServiceIconKey;
    color: ServiceColor;
};

const colorStyles: Record<ServiceColor, { box: string; icon: string }> = {
    rose: { box: "bg-rose-50 dark:bg-rose-500/10", icon: "text-rose-500" },
    red: { box: "bg-red-50 dark:bg-red-500/10", icon: "text-red-500" },
    amber: { box: "bg-amber-50 dark:bg-amber-500/10", icon: "text-amber-500" },
    sky: { box: "bg-sky-50 dark:bg-sky-500/10", icon: "text-sky-500" },
    emerald: {
        box: "bg-emerald-50 dark:bg-emerald-500/10",
        icon: "text-emerald-500",
    },
    indigo: { box: "bg-indigo-50 dark:bg-indigo-500/10", icon: "text-indigo-500" },
    fuchsia: {
        box: "bg-fuchsia-50 dark:bg-fuchsia-500/10",
        icon: "text-fuchsia-500",
    },
    orange: { box: "bg-orange-50 dark:bg-orange-500/10", icon: "text-orange-500" },
    teal: { box: "bg-teal-50 dark:bg-teal-500/10", icon: "text-teal-500" },
};

type ServiceCardProps = Omit<ServiceItem, "id">;

export default function ServiceCard({
    title,
    href,
    icon,
    color,
}: ServiceCardProps) {
    const Icon = serviceIcons[icon];
    const style = colorStyles[color];

    return (
        <Link
            href={href}
            prefetch={false}
            draggable={false}
            className="group flex h-full select-none flex-col items-start gap-3 rounded-2xl border bg-muted/40 p-4 transition-colors hover:border-red-300 hover:bg-red-50/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 sm:p-5"
        >
            <span
                className={`flex size-12 items-center justify-center rounded-xl sm:size-14 ${style.box}`}
            >
                <Icon className={`size-6 sm:size-7 ${style.icon}`} strokeWidth={1.8} />
            </span>

            <span className="text-sm font-semibold leading-tight sm:text-base">
                {title}
            </span>
        </Link>
    );
}