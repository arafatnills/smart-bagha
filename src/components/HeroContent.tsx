
"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Find Blood",
    description:
      "Find the right blood group when every second matters. Connect with blood donors and help save a life.",
    primary: "Find Donors",
    href: "/donors",
  },
  {
    title: "Emergency Services",
    description:
      "Get quick access to emergency blood requests and essential services when you or your loved ones need help.",
    primary: "Get Emergency Help",
    href: "/emergency",
  },
  {
    title: "Find Hospitals",
    description:
      "Discover nearby hospitals and healthcare facilities to get the care you need, when you need it.",
    primary: "Explore Hospitals",
    href: "/hospitals",
  },
  {
    title: "Find Diagnostic Labs",
    description:
      "Explore diagnostic centers and laboratory services to help you find the right healthcare support.",
    primary: "Find Labs",
    href: "/labs",
  },
  {
    title: "Become a Hero",
    description:
      "Your blood donation can give someone another chance at life. Become a donor and make a difference in your community.",
    primary: "Become a Donor",
    href: "/register",
  },
];

const HeroContent = () => {
  const [welcomeText, setWelcomeText] = useState("");
  const [serviceIndex, setServiceIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  const welcome = "Welcome to Smart Bagha";
  const currentService = services[serviceIndex];

  // Welcome text typing effect
  useEffect(() => {
    let index = 0;

    const timer = window.setInterval(() => {
      index += 1;
      setWelcomeText(welcome.slice(0, index));

      if (index >= welcome.length) {
        window.clearInterval(timer);
        setTypingDone(true);
      }
    }, 75);

    return () => window.clearInterval(timer);
  }, []);

  // Rotate services after the welcome text is typed
  useEffect(() => {
    if (!typingDone) return;

    const timer = window.setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [typingDone]);

  return (
    <div className="max-w-2xl">
      {/* Welcome typing effect */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-red-600 sm:text-base">
          {welcomeText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="ml-1 inline-block h-4 w-0.5 translate-y-0.5 bg-red-600"
          />
        </p>
      </motion.div>

      {/* Changing service headline and description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={serviceIndex}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {currentService.title}
            <span className="text-red-600">.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            {currentService.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-red-600 px-7 text-white hover:bg-red-700"
            >
              <Link href={currentService.href}>
                {currentService.primary}
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-7"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Service indicators */}
      <div className="mt-8 flex items-center gap-2">
        {services.map((service, index) => (
          <button
            key={service.title}
            type="button"
            aria-label={`Show ${service.title}`}
            aria-current={serviceIndex === index ? "true" : undefined}
            onClick={() => setServiceIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${serviceIndex === index
                ? "w-8 bg-red-600"
                : "w-2 bg-red-200 hover:bg-red-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroContent;
