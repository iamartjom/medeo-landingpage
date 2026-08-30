"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export interface HeroTripleComposition {
  id: string;
  leftImage: string;
  centerImage: string;
  rightImage: string;
}

const HERO_COMPOSITIONS: HeroTripleComposition[] = [
  {
    id: "comp-1",
    leftImage: "/images/hero/medeo-dessert-cheesecake.png",
    centerImage: "/images/hero/medeo-cup-latte.png",
    rightImage: "/images/hero/hero-greek-hotdog.png",
  },
  {
    id: "comp-2",
    leftImage: "/images/hero/hero-caramel-tarts.png",
    centerImage: "/images/hero/medeo-cup-whipped.png",
    rightImage: "/images/hero/hero-brownie-stack.png",
  },
  {
    id: "comp-3",
    leftImage: "/images/hero/medeo-dessert-slice.png",
    centerImage: "/images/hero/medeo-cup-latte.png",
    rightImage: "/images/hero/hero-greek-hotdog.png",
  },
];

export default function HeroProductStage() {
  const [index, setIndex] = useState(0);

  // Mouse Parallax for subtle depth
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_COMPOSITIONS.length);
    }, 4500);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearInterval(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const currentComp = HERO_COMPOSITIONS[index];

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[380px] sm:h-[460px] md:h-[540px] flex items-center justify-center perspective-1000 select-none overflow-visible px-4">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentComp.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* LEFT PRODUCT (DESSERT) */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-4, -2, -4] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[0%] sm:left-[5%] md:left-[8%] lg:left-[10%] z-20 w-[140px] sm:w-[210px] md:w-[280px] lg:w-[320px] aspect-square drop-shadow-[0_25px_35px_rgba(0,0,0,0.32)]"
            >
              <Image
                src={currentComp.leftImage}
                alt="MEDEO Dessert"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* CENTER DOMINANT PRODUCT (MEDEO COFFEE CUP) */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-30 w-[190px] sm:w-[270px] md:w-[360px] lg:w-[410px] aspect-square drop-shadow-[0_35px_50px_rgba(0,0,0,0.4)]"
            >
              <Image
                src={currentComp.centerImage}
                alt="MEDEO Specialty Coffee"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* RIGHT PRODUCT (HOT DOG) */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [4, 6, 4] }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute right-[0%] sm:right-[5%] md:right-[8%] lg:right-[10%] z-20 w-[140px] sm:w-[210px] md:w-[280px] lg:w-[320px] aspect-square drop-shadow-[0_25px_35px_rgba(0,0,0,0.32)]"
            >
              <Image
                src={currentComp.rightImage}
                alt="MEDEO Hot Dog"
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
