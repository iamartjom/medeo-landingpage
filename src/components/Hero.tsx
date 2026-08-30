"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import HeroProductStage from "./HeroProductStage";

export default function Hero() {
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 500], [0, -100]);
  const stageY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0.4]);

  const marqueeItems = [
    "КОФЕ",
    "ХОТ-ДОГИ",
    "ДЕСЕРТЫ",
    "С СОБОЙ",
  ];

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen bg-[#FFC700] text-[#111111] overflow-hidden flex flex-col justify-between pt-24 bg-grain">
      {/* HUGE OVERSIZED BLACK POSTER TYPOGRAPHY: MEDEO */}
      <motion.div
        style={{ y: textY, opacity: opacityHero }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0"
      >
        <span className="font-display text-[26vw] sm:text-[27vw] md:text-[28vw] font-black text-[#111111] opacity-95 leading-none tracking-tighter text-center">
          MEDEO
        </span>
      </motion.div>

      {/* CENTER 3-PRODUCT ANIMATED SHOWCASE STAGE */}
      <motion.div
        style={{ y: stageY }}
        className="relative z-10 w-full my-auto flex items-center justify-center"
      >
        <HeroProductStage />
      </motion.div>

      {/* HERO BOTTOM BLACK CURVED MARQUEE STRIP */}
      <div className="relative z-20 w-full">
        <div className="relative w-full bg-[#111111] text-[#FFC700] py-3.5 border-t border-[#111111] overflow-hidden shadow-2xl">
          <div className="flex w-full whitespace-nowrap overflow-hidden select-none">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="flex items-center space-x-6 font-display text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-[#FFC700]"
            >
              {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-6">
                  <span>{item}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC700]/50" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CURVED CREAM EDGE TRANSITION LEADING TO MENU */}
        <div className="w-full h-5 sm:h-7 bg-[#FAF8F5] rounded-t-[50%] sm:rounded-t-[100%] -mt-1" />
      </div>
    </section>
  );
}
