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
    src: "/images/hero/hero-iced-cup.png",
    alt: "MEDEO Iced Mocha Specialty",
    badge: "NEW COLD BREW",
    tilt: -16,
    scaleMultiplier: 1.0,
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
    scaleMultiplier: 1.0,
  },
];

export default function HeroProductStage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Automatic transition every 4.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_DRINKS.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const currentDrink = HERO_DRINKS[currentIndex];
  const activeTilt = isMobile ? 0 : currentDrink.tilt;
  const baseScale = isMobile ? 1.18 : 1.0;

  return (
    <div className="relative w-full max-w-2xl h-[300px] sm:h-[370px] md:h-[450px] lg:h-[580px] flex items-center justify-center select-none overflow-visible">
      
      {/* MOBILE ONLY: MEDEO INSTA GRAPHIC BACKGROUND ELEMENT BEHIND THE CUP */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 lg:hidden overflow-visible">
        <div className="relative w-[360px] sm:w-[440px] md:w-[520px] aspect-[914/823] opacity-95">
          <Image
            src="/images/hero/medeo-insta-bg.png"
            alt="MEDEO Brand Art Backdrop"
            fill
            sizes="(max-width: 640px) 360px, 440px"
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* SINGLE CUP STAGE (VERTICAL ON MOBILE, TILTED ON DESKTOP) */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDrink.id}
            initial={{
              opacity: 0,
              rotate: isMobile ? 0 : 15,
              x: isMobile ? 70 : 80,
              y: isMobile ? 0 : -90,
              scale: baseScale * 0.9,
            }}
            animate={{
              opacity: 1,
              rotate: activeTilt, // Exactly 0 on mobile, tilted on desktop
              x: 0,
              y: 0,
              scale: baseScale,
              transition: {
                duration: 0.95,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            exit={{
              opacity: 0,
              rotate: isMobile ? 0 : -55,
              x: isMobile ? -70 : -90,
              y: isMobile ? 0 : 110,
              scale: baseScale * 0.9,
              transition: {
                duration: 0.75,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[460px] h-[290px] sm:h-[360px] md:h-[440px] lg:h-[540px] flex items-center justify-center cursor-pointer"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % HERO_DRINKS.length)}
          >
            {/* Subtle organic hovering float while resting */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: isMobile ? 0 : [activeTilt, activeTilt + 1.5, activeTilt],
              }}
              transition={{
                duration: 5.0,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-full drop-shadow-[0_28px_45px_rgba(0,0,0,0.36)]"
            >
              <Image
                src={currentDrink.src}
                alt={currentDrink.alt}
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 400px, 480px"
                priority
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DESKTOP ONLY: INTERACTIVE THUMBNAIL SELECTOR / DOTS (HIDDEN ON MOBILE) */}
      <div className="hidden lg:flex absolute bottom-1 right-6 z-30 items-center gap-2 bg-[#111111]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
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
