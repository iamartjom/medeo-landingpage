"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export interface DrinkSlide {
  id: string;
  leftCup: string;
  centerCup: string;
  rightCup: string;
}

const DRINK_SLIDES: DrinkSlide[] = [
  {
    id: "slide-1",
    // BLUEPRINT EXACT INITIAL COMPOSITION:
    // Left: Paper cappuccino cup with latte art
    // Center: Transparent plastic cup with chocolate drips (DOMINANT FOCUS)
    // Right: Paper cup with whipped cream
    leftCup: "/images/hero/hero-latte-cup.png",
    centerCup: "/images/hero/hero-iced-plastic-cup.png",
    rightCup: "/images/hero/hero-whipped-cup.png",
  },
  {
    id: "slide-2",
    leftCup: "/images/hero/hero-whipped-cup.png",
    centerCup: "/images/hero/hero-latte-cup.png",
    rightCup: "/images/hero/hero-iced-plastic-cup.png",
  },
  {
    id: "slide-3",
    leftCup: "/images/hero/hero-iced-plastic-cup.png",
    centerCup: "/images/hero/hero-whipped-cup.png",
    rightCup: "/images/hero/hero-latte-cup.png",
  },
];

export default function HeroProductStage() {
  const [index, setIndex] = useState(0);

  // Autoplay every 3.8 seconds with physical sliding transitions
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % DRINK_SLIDES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = DRINK_SLIDES[index];

  return (
    <div className="relative w-full max-w-5xl h-[340px] sm:h-[420px] md:h-[500px] flex items-center justify-center select-none overflow-visible">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{
            duration: 1.3,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* LEFT DRINK PRODUCT */}
          <motion.div
            initial={{ scale: 0.8, x: -60 }}
            animate={{ scale: 0.84, x: 0, rotate: -2 }}
            transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
            className="absolute left-[2%] sm:left-[6%] md:left-[8%] lg:left-[10%] z-20 w-[150px] sm:w-[220px] md:w-[290px] lg:w-[320px] aspect-square drop-shadow-[0_25px_35px_rgba(0,0,0,0.3)]"
          >
            <Image
              src={currentSlide.leftCup}
              alt="MEDEO Cappuccino Cup"
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          {/* CENTER DRINK PRODUCT (DOMINANT VISUAL FOCUS - TRANSPARENT PLASTIC CUP) */}
          <motion.div
            initial={{ scale: 0.9, y: 15 }}
            animate={{ scale: 1.05, y: 0, rotate: 0 }}
            transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
            className="relative z-30 w-[190px] sm:w-[270px] md:w-[350px] lg:w-[390px] aspect-square drop-shadow-[0_35px_50px_rgba(0,0,0,0.38)]"
          >
            <Image
              src={currentSlide.centerCup}
              alt="MEDEO Iced Layered Coffee"
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          {/* RIGHT DRINK PRODUCT */}
          <motion.div
            initial={{ scale: 0.8, x: 60 }}
            animate={{ scale: 0.84, x: 0, rotate: 2 }}
            transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
            className="absolute right-[2%] sm:right-[6%] md:right-[8%] lg:right-[10%] z-20 w-[150px] sm:w-[220px] md:w-[290px] lg:w-[320px] aspect-square drop-shadow-[0_25px_35px_rgba(0,0,0,0.3)]"
          >
            <Image
              src={currentSlide.rightCup}
              alt="MEDEO Seasonal Specialty Drink"
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          {/* SMALL AUTUMN PUMPKIN ACCENT NEAR BOTTOM LEFT OF CUPS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="absolute left-[12%] sm:left-[18%] md:left-[22%] bottom-[2%] z-40 w-[60px] sm:w-[90px] md:w-[120px] aspect-square drop-shadow-md pointer-events-none"
          >
            <Image
              src="/images/hero/hero-pumpkin.png"
              alt="Medeo Autumn Pumpkin"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
