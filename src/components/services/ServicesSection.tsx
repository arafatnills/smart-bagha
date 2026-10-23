import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Reveal from "@/components/shared/nav/Reveal";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import ServiceCard, { type ServiceItem } from "./ServiceCard";

const services = [
  {
    id: "tuition",
    title: "Find tuition",
    href: "/services/tuition",
    icon: "tuition",
    color: "fuchsia",
  },
  {
    id: "blood",
    title: "Blood Donor",
    href: "/services/blood",
    icon: "blood",
    color: "red",
  },
  {
    id: "repair",
    title: "Repair service",
    href: "/services/repair",
    icon: "repair",
    color: "amber",
  },
  {
    id: "housing",
    title: "House rental",
    href: "/services/housing",
    icon: "housing",
    color: "sky",
  },
  {
    id: "ride",
    title: "Ride Hero",
    href: "/services/ride",
    icon: "ride",
    color: "rose",
  },
  {
    id: "recycle",
    title: "Recycle Market",
    href: "/services/recycle",
    icon: "recycle",
    color: "emerald",
  },
  {
    id: "job",
    title: "Job news",
    href: "/services/job",
    icon: "job",
    color: "indigo",
  },

  {
    id: "sports",
    title: "Sports & Events",
    href: "/services/sports",
    icon: "sports",
    color: "orange",
  },
  {
    id: "doctor",
    title: "Doctor Directory",
    href: "/services/doctor-directory",
    icon: "doctor",
    color: "teal",
  },
];

export default function ServicesSection() {
  const items = services as ServiceItem[];

  return (
    <section className="container mx-auto px-4 py-8 md:px-8 md:py-12">
      <Reveal>
        <div className="mb-4 flex items-center justify-between md:mb-6">
          <h2 className="text-xl font-bold md:text-2xl">All Services</h2>

          <Link
            href="/services"
            prefetch={false}
            className="inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700 md:text-base"
          >
            View All
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.1} y={20}>
        <Carousel
          aria-label="All services"
          opts={{ align: "start", dragFree: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 py-1">
            {items.map(({ id, ...item }) => (
              <CarouselItem
                key={id}
                className="basis-[42%] pl-3 min-[480px]:basis-[30%] md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <ServiceCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden size-9 bg-background shadow-sm md:inline-flex md:-left-4" />
          <CarouselNext className="hidden size-9 bg-background shadow-sm md:inline-flex md:-right-4" />
        </Carousel>
      </Reveal>
    </section>
  );
}
