"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroProductStage() {
  return (
    <div className="relative w-full max-w-5xl h-[340px] sm:h-[440px] md:h-[520px] flex items-center justify-center select-none overflow-visible px-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full drop-shadow-[0_25px_40px_rgba(0,0,0,0.3)]"
        >
          <Image
            src="/images/hero/medeo-hero-composite-exact.png"
            alt="MEDEO Hero Specialty Coffee Showcase"
            fill
            priority
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
