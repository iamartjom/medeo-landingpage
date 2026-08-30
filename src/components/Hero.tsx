"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import HeroProductStage from "./HeroProductStage";
import { Coffee, Utensils, Cake, Truck } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();

  // Scroll parallax for continuous narrative
  const textY = useTransform(scrollY, [0, 500], [0, -100]);
  const cupsY = useTransform(scrollY, [0, 500], [0, -60]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0.4]);

  return (
    <section className="relative w-full min-h-[92vh] md:min-h-screen bg-[#FFC700] text-[#111111] overflow-hidden flex flex-col justify-between pt-24 pb-8 bg-grain">
      {/* OVERSIZED ARCHITECTURAL BACKGROUND TYPOGRAPHY */}
      <motion.div
        style={{ y: textY, opacity: opacityHero }}
        className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden z-0"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 0.85, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center leading-none tracking-tighter"
        >
          <span className="block font-display text-[17vw] sm:text-[18vw] font-black text-[#111111] opacity-90 leading-none">
            MEDEO
          </span>
          <span className="block font-display text-[7.5vw] sm:text-[8vw] font-extrabold text-[#111111] opacity-35 tracking-wider -mt-[3vw] uppercase">
            КОФЕ С СОБОЙ
          </span>
        </motion.div>
      </motion.div>

      {/* TOP TAGLINE BADGE */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#111111] text-[#FFC700] text-xs md:text-sm font-display font-bold tracking-widest uppercase shadow-lg"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFC700] animate-pulse" />
          <span>Маленькая кофейня — большая любовь</span>
        </motion.div>
      </div>

      {/* CENTER PRODUCT COMPOSITION */}
      <motion.div
        style={{ y: cupsY }}
        className="relative z-10 w-full my-auto"
      >
        <HeroProductStage />
      </motion.div>

      {/* BOTTOM INFORMATIONAL STRIP */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="border-t border-b border-[#111111]/20 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center backdrop-blur-xs bg-[#FFC700]/40 rounded-2xl"
        >
          <div className="flex items-center justify-center gap-2 font-display text-xs md:text-sm font-bold tracking-wider uppercase text-[#111111]">
            <Coffee className="w-4 h-4 text-[#111111]" />
            <span>ХОРОШИЙ КОФЕ</span>
          </div>

          <div className="flex items-center justify-center gap-2 font-display text-xs md:text-sm font-bold tracking-wider uppercase text-[#111111] border-l border-[#111111]/15 md:border-l">
            <Utensils className="w-4 h-4 text-[#111111]" />
            <span>ХОТ-ДОГИ</span>
          </div>

          <div className="flex items-center justify-center gap-2 font-display text-xs md:text-sm font-bold tracking-wider uppercase text-[#111111] border-t border-[#111111]/15 md:border-t-0 md:border-l">
            <Cake className="w-4 h-4 text-[#111111]" />
            <span>ДЕСЕРТЫ</span>
          </div>

          <div className="flex items-center justify-center gap-2 font-display text-xs md:text-sm font-bold tracking-wider uppercase text-[#111111] border-t border-[#111111]/15 border-l md:border-t-0">
            <Truck className="w-4 h-4 text-[#111111]" />
            <span>ЯНДЕКС ЕДА — ДОСТАВКА</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
