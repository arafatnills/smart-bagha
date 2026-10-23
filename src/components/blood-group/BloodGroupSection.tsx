import Reveal from "../shared/nav/Reveal";
import BloodGroupCard, { type BloodGroupItem } from "./BloodGroupCard";

const bloodGroups = [
  { label: "A+", value: "A_POSITIVE" },
  { label: "A-", value: "A_NEGATIVE" },
  { label: "B+", value: "B_POSITIVE" },
  { label: "B-", value: "B_NEGATIVE" },
  { label: "AB+", value: "AB_POSITIVE" },
  { label: "AB-", value: "AB_NEGATIVE" },
  { label: "O+", value: "O_POSITIVE" },
  { label: "O-", value: "O_NEGATIVE" },
];
export default function BloodGroupSection() {
  const items = bloodGroups as BloodGroupItem[];

  return (
    <section className="container mx-auto px-4 py-8 md:px-8 md:py-12">
      <Reveal>
        <h2 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">
          Blood Group
        </h2>
      </Reveal>

      <div className="grid grid-cols-4 gap-2.5 sm:gap-4 lg:grid-cols-8 lg:gap-5">
        {items.map((item, index) => (
          <Reveal
            key={item.value}
            delay={0.1 + index * 0.05}
            y={20}
            className="h-full"
          >
            <BloodGroupCard {...item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
