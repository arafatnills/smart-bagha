"use client";

import { motion } from "motion/react";
import Image from "next/image";

const HeroImage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="
        pointer-events-none relative z-10
        -mx-4 mt-2 min-h-64 w-[calc(100%+2rem)] flex-1
        md:absolute md:inset-y-0 md:right-0 md:mx-0 md:mt-0
        md:min-h-0 md:w-[50%] md:flex-none lg:w-[55%]
      "
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
    );
};

export default HeroImage;