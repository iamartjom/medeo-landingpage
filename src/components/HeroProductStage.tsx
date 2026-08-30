"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const HERO_DRINKS = [
  {
    id: "whipped",
    title: "КАРАМЕЛЬНЫЙ РАФ С САХАРОМ",
    subtitle: "Нежные взбитые сливки, домашняя карамель и двойной эспрессо",
    price: "240 ₽",
    src: "/images/hero/hero-whipped-cup.png",
    alt: "MEDEO Caramel Whipped Raf",
    badge: "ХИТ СЕЗОНА",
    tilt: -18,
    scaleMultiplier: 1.0,
  },
  {
    id: "iced",
    title: "АЙС МОККО СПЕШЕЛТИ",
    subtitle: "Освежающий эспрессо со льдом, шоколадный ганаш и сливочная пенка",
    price: "260 ₽",
    src: "/images/hero/ChatGPT Image 30. Aug. 2026, 21_48_52.png",
    alt: "MEDEO Iced Mocha Specialty",
    badge: "NEW COLD BREW",
    tilt: -16,
    scaleMultiplier: 0.98,
  },
  {
    id: "latte",
    title: "КЛАССИЧЕСКИЙ ЛАТТЕ АРТ",
    subtitle: "Шелковистая текстура свежего фермерского молока и 100% арабика",
    price: "210 ₽",
    src: "/images/hero/hero-latte-cup.png",
    alt: "MEDEO Classic Latte Art",
    badge: "100% АРАБИКА",
    tilt: -18,
    scaleMultiplier: 0.80,
  },
];

export default function HeroProductStage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic clockwise transition every 4.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_DRINKS.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const currentDrink = HERO_DRINKS[currentIndex];

  return (
    <div className="relative w-full max-w-2xl h-[380px] sm:h-[480px] md:h-[560px] lg:h-[620px] flex items-center justify-center select-none">
      
      {/* SINGLE CUP CLOCKWISE SLIDING STAGE (MODERATE TILT TO THE LEFT) */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDrink.id}
            initial={{
              opacity: 0,
              rotate: 15, // Enters along arc from top right
              x: 90,
              y: -110,
              scale: 0.88 * currentDrink.scaleMultiplier,
            }}
            animate={{
              opacity: 1,
              rotate: currentDrink.tilt, // Gentle, moderate tilt to the left (-16° to -18°)
              x: 0,
              y: 0,
              scale: 1 * currentDrink.scaleMultiplier,
              transition: {
                duration: 0.95,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            exit={{
              opacity: 0,
              rotate: -55, // Exits down and left along clockwise arc
              x: -100,
              y: 130,
              scale: 0.88 * currentDrink.scaleMultiplier,
              transition: {
                duration: 0.75,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            className="relative w-[240px] sm:w-[340px] md:w-[420px] lg:w-[480px] h-[320px] sm:h-[440px] md:h-[520px] lg:h-[580px] flex items-center justify-center cursor-pointer"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % HERO_DRINKS.length)}
          >
            {/* Subtle organic hovering float while resting */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [currentDrink.tilt, currentDrink.tilt + 1.5, currentDrink.tilt],
              }}
              transition={{
                duration: 5.0,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-full drop-shadow-[0_35px_50px_rgba(0,0,0,0.38)]"
            >
              <Image
                src={currentDrink.src}
                alt={currentDrink.alt}
                fill
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 440px, 500px"
                priority
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* INTERACTIVE THUMBNAIL SELECTOR / DOTS IN BOTTOM-RIGHT */}
      <div className="absolute bottom-2 right-4 sm:right-8 z-30 flex items-center gap-2 bg-[#111111]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
        {HERO_DRINKS.map((drink, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={drink.id}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? "w-7 h-2.5 bg-[#FFC700]"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Show ${drink.title}`}
            />
          );
        })}
      </div>

    </div>
  );
}
