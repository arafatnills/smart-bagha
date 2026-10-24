import { Progress } from "@/components/ui/progress";
import { Clock, Users } from "lucide-react";
import { formatTaka, type campaigns } from "./donate-data";

export type CampaignItem = (typeof campaigns)[number];

export default function CampaignCard({
    title,
    description,
    raised,
    goal,
    donors,
    daysLeft,
}: Omit<CampaignItem, "id">) {
    const percent = Math.min(100, Math.round((raised / goal) * 100));

    return (
        <div className="flex h-full flex-col rounded-2xl border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{description}</p>

            <div className="mt-5">
                <div className="mb-2 flex items-end justify-between text-sm">
                    <span className="font-bold text-red-600">{formatTaka(raised)}</span>
                    <span className="text-muted-foreground">of {formatTaka(goal)}</span>
                </div>
                <Progress
                    value={percent}
                    className="h-2 [&_[data-slot=progress-indicator]]:bg-red-600"
                />
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" /> {donors} donors
                    </span>
                    <span className="font-semibold">{percent}%</span>
                    <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {daysLeft} days left
                    </span>
                </div>
            </div>
        </div>
    );
}
