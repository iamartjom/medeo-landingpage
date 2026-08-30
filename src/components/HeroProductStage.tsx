"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export interface HeroSlide {
  id: string;
  mainImage: string;
  secondaryImage?: string;
  accentPosition?: "left-behind" | "right-behind" | "bottom-right";
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "cappuccino",
    mainImage: "/images/hero/hero-latte-cup.png",
  },
  {
    id: "caramel-tarts",
    mainImage: "/images/hero/hero-caramel-tarts.png",
    secondaryImage: "/images/hero/hero-whipped-cup.png",
    accentPosition: "right-behind",
  },
  {
    id: "greek-hotdog",
    mainImage: "/images/hero/hero-greek-hotdog.png",
  },
  {
    id: "whipped-latte",
    mainImage: "/images/hero/hero-whipped-cup.png",
    secondaryImage: "/images/hero/hero-brownie-stack.png",
    accentPosition: "left-behind",
  },
  {
    id: "brownie-stack",
    mainImage: "/images/hero/hero-brownie-stack.png",
  },
];

export default function HeroProductStage() {
  const [index, setIndex] = useState(0);

  // Mouse Parallax for subtle 3D depth
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_SLIDES.length);
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

  const currentSlide = HERO_SLIDES[index];

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] md:h-[560px] flex items-center justify-center perspective-1000 select-none overflow-visible">
      {/* PERSPECTIVE STAGE */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-5xl h-full flex items-center justify-center"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide.id}
            initial={{
              opacity: 0,
              scale: 0.82,
              x: 80,
              rotate: -6,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              rotate: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              x: -80,
              rotate: 6,
            }}
            transition={{
              duration: 1.0,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex items-center justify-center"
          >
            {/* SECONDARY DECORATIVE PRODUCT ACCENT (IF PRESENT) */}
            {currentSlide.secondaryImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 30 }}
                animate={{ opacity: 0.55, scale: 0.72, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: -30 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute z-10 w-[160px] sm:w-[220px] md:w-[280px] drop-shadow-xl filter grayscale-[20%] ${
                  currentSlide.accentPosition === "right-behind"
                    ? "right-[-25%] top-[-5%] rotate-[12deg]"
                    : "left-[-25%] top-[10%] rotate-[-12deg]"
                }`}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full aspect-square"
                >
                  <Image
                    src={currentSlide.secondaryImage}
                    alt="Medeo Accent"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>
            )}

            {/* MAIN DOMINANT PRODUCT */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-[240px] sm:w-[320px] md:w-[420px] lg:w-[460px] aspect-square drop-shadow-[0_35px_60px_rgba(0,0,0,0.38)]"
            >
              <Image
                src={currentSlide.mainImage}
                alt="MEDEO Showcase Product"
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
