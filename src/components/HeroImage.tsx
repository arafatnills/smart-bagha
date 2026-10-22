"use client";

import { motion } from "motion/react";
import Image from "next/image";

const HeroImage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: [0, -10, 0] }}
            transition={{
                opacity: { duration: 0.8, ease: "easeOut" },
                scale: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                x: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
            }}
            className="
        pointer-events-none relative z-10
        -mx-4 min-h-0 w-[calc(100%+2rem)] flex-1
        md:absolute md:inset-y-0 md:right-0 md:mx-0
        md:h-auto md:w-[50%] md:flex-none lg:w-[55%]
      "
        >
            <Image
                src="/donate_blood.png"
                alt="Donate blood and save a life"
                fill
                priority
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 55vw"
                className="object-contain object-right"
            />
        </motion.div>
    );
};

export default HeroImage;