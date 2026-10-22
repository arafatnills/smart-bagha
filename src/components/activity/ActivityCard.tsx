import Link from "next/link";
import { activityIcons, type ActivityIconKey } from "./ActivityIcons";

export type ActivityItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: ActivityIconKey;
  href?: string;
};

type ActivityCardProps = Omit<ActivityItem, "id">;

const cardClass =
    "group flex h-full items-center gap-3 rounded-xl border bg-muted/40 p-3 sm:gap-4 sm:p-4 lg:p-5";
export default function ActivityCard({
  title,
  subtitle,
  icon,
  href,
}: ActivityCardProps) {
  const Icon = activityIcons[icon];

  const content = (
    <>
      <Icon className="size-10 shrink-0 text-red-500 sm:size-12 lg:size-14" />
      <div className="min-w-0">
        <h3 className="text-[15px] font-semibold leading-tight sm:text-base lg:text-lg">
          {title}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          {subtitle}
        </p>
      </div>
    </>
  );

  if (!href) return <div className={cardClass}>{content}</div>;

  return (
    <Link
      href={href}
      prefetch={false}
      className={`${cardClass} transition-colors hover:border-red-300 hover:bg-red-50/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500`}
    >
      {content}
    </Link>
  );
}
