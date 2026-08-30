"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import HeroProductStage from "./HeroProductStage";

export default function Hero() {
  const { scrollY } = useScroll();

  // Depth Parallax for MEDEO poster text and product showcase
  const textY = useTransform(scrollY, [0, 500], [0, -120]);
  const stageY = useTransform(scrollY, [0, 500], [0, -60]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0.3]);

  // Repeating marquee items
  const marqueeItems = [
    "КОФЕ",
    "ХОТ-ДОГИ",
    "ДЕСЕРТЫ",
    "ДОСТАВКА ЯНДЕКС",
    "МЫ НА КАРТЕ",
    "MEDEO",
  ];

  return (
    <section className="relative w-full h-screen min-h-[700px] max-h-[1080px] bg-[#FFC700] text-[#111111] overflow-hidden flex flex-col justify-between pt-20 bg-grain">
      {/* OVERSIZED ARCHITECTURAL POSTER BACKGROUND TYPOGRAPHY: ONLY "MEDEO" */}
      <motion.div
        style={{ y: textY, opacity: opacityHero }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 0.88, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[25vw] sm:text-[26vw] md:text-[27vw] font-black text-[#111111] opacity-90 leading-none tracking-tighter text-center"
        >
          MEDEO
        </motion.span>
      </motion.div>

      {/* CENTER AUTOMATED PRODUCT SHOWCASE STAGE */}
      <motion.div
        style={{ y: stageY }}
        className="relative z-10 w-full my-auto flex items-center justify-center"
      >
        <HeroProductStage />
      </motion.div>

      {/* ELEGANT EDITORIAL BOTTOM TRANSITION (BLACK / OFF-WHITE MARQUEE STRIP) */}
      <div className="relative z-20 w-full">
        {/* ASYMMETRIC OFF-WHITE CURVED TRANSITION CONTAINER */}
        <div className="relative w-full bg-[#111111] text-[#FAF8F5] py-4 border-t-2 border-[#111111] overflow-hidden shadow-2xl">
          <div className="flex w-full whitespace-nowrap overflow-hidden select-none">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex items-center space-x-8 font-display text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-[#FFC700]"
            >
              {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-8">
                  <span>{item}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FAF8F5]/40" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* OFF-WHITE/CREAM CURVED EDGE LEADING INTO NEXT SECTION */}
        <div className="w-full h-4 sm:h-6 bg-[#FAF8F5] rounded-t-[50%] sm:rounded-t-[100%] -mt-1" />
      </div>
    </section>
  );
}
