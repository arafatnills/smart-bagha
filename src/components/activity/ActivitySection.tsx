import Reveal from "../shared/Reveal";
import ActivityCard, { type ActivityItem } from "./ActivityCard";
const activities = [
  {
    id: "donor",
    title: "Blood Donor",
    subtitle: "120 post",
    icon: "donor",
    href: "/donors",
  },
  {
    id: "recipient",
    title: "Blood Recepent",
    subtitle: "120 post",
    icon: "recipient",
    href: "/emergency",
  },
  {
    id: "create-post",
    title: "Create Post",
    subtitle: "It's Easy! 3 Step",
    icon: "post",
    href: "/posts/create",
  },
  {
    id: "blood-given",
    title: "Blood Given",
    subtitle: "It's Easy! 1 Step",
    icon: "given",
    href: "/donations",
  },
];

export default function ActivitySection() {
    const items = activities as ActivityItem[];

    return (
        <section className="container mx-auto px-4 py-8 md:px-8 md:py-12">
            <Reveal>
                <h2 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">
                    Activity As
                </h2>
            </Reveal>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
                {items.map(({ id, ...item }, index) => (
                    <Reveal key={id} delay={0.1 + index * 0.08} className="h-full">
                        <ActivityCard {...item} />
                    </Reveal>
                ))}
            </div>
        </section>
    );
}