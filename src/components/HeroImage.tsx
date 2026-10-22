"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const HeroImage = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="
  pointer-events-none relative z-10
  -mx-4 mt-2 h-64 w-[calc(100%+2rem)] shrink-0 sm:h-80
  md:absolute md:inset-y-0 md:right-0 md:mx-0 md:mt-0
  md:h-auto md:w-[50%] lg:w-[55%]
"
    >
      <motion.div
        className="absolute inset-0"
        animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1,
        }}
      >
        <Image
          src="/donate_blood.png"
          alt="Donate blood and save a life"
          fill
          priority
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 55vw"
          className="object-contain object-top-right md:object-right"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;
