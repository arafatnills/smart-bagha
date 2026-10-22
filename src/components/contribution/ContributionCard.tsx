export type ContributionColor =
    | "sky"
    | "emerald"
    | "indigo"
    | "fuchsia"
    | "rose"
    | "amber";

export type ContributionItem = {
    id: string;
    value: string;
    label: string;
    color: ContributionColor;
};

const colorStyles: Record<ContributionColor, { box: string; value: string }> = {
    sky: { box: "bg-sky-50 dark:bg-sky-500/10", value: "text-sky-400" },
    emerald: {
        box: "bg-emerald-50 dark:bg-emerald-500/10",
        value: "text-emerald-400",
    },
    indigo: {
        box: "bg-indigo-50 dark:bg-indigo-500/10",
        value: "text-indigo-400",
    },
    fuchsia: {
        box: "bg-fuchsia-50 dark:bg-fuchsia-500/10",
        value: "text-fuchsia-400",
    },
    rose: { box: "bg-rose-50 dark:bg-rose-500/10", value: "text-rose-400" },
    amber: { box: "bg-amber-50 dark:bg-amber-500/10", value: "text-amber-400" },
};

type ContributionCardProps = Omit<ContributionItem, "id">;

export default function ContributionCard({
    value,
    label,
    color,
}: ContributionCardProps) {
    const style = colorStyles[color];

    return (
        <div
            className={`flex h-full flex-col items-center justify-center rounded-2xl px-2 py-5 text-center sm:px-4 sm:py-7 lg:py-8 ${style.box}`}
        >
            <p
                className={`text-2xl font-bold leading-none sm:text-3xl lg:text-4xl ${style.value}`}
            >
                {value}
            </p>
            <p className="mt-2 text-xs leading-tight text-muted-foreground sm:mt-3 sm:text-sm lg:text-base">
                {label}
            </p>
        </div>
    );
}