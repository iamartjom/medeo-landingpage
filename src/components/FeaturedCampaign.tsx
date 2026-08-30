"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

export default function FeaturedCampaign() {
  return (
    <section className="relative w-full bg-[#111111] text-[#FAF8F5] py-24 md:py-32 overflow-hidden my-12 bg-grain-dark border-y border-[#FFC700]/20">
      {/* BACKGROUND ACCENT TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 overflow-hidden select-none">
        <span className="font-display text-[25vw] font-black text-[#FFC700] leading-none tracking-tighter">
          MORE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT EDITORIAL TYPOGRAPHY */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC700] text-[#111111] font-display text-xs font-black tracking-widest uppercase mb-8 w-max">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MEDEO SPECIALTY CAMPAIGN</span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#FAF8F5] leading-none tracking-tighter mb-6">
              ЕЩЁ <span className="text-[#FFC700]">ОДИН?</span>
            </h2>

            <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF8F5]/80 mb-8 tracking-tight">
              Почему бы и нет.
            </p>

            <p className="font-sans text-lg text-[#FAF8F5]/70 max-w-xl leading-relaxed mb-10">
              Второй эспрессо, горячий хот-дог с поджаристой сосиской или карамельный синнокейк на десерт. В MEDEO настроение создаётся в пару кликов и один глоток.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="px-8 py-4 bg-[#FFC700] text-[#111111] font-display text-sm font-black tracking-wider uppercase rounded-full hover:bg-[#FAF8F5] transition-all duration-300 flex items-center gap-3 group"
              >
                <span>ВЫБРАТЬ В МЕНЮ</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT PRODUCT FEATURE FRAME */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-b from-[#FFC700]/20 to-transparent p-2 border border-[#FFC700]/30 shadow-2xl flex items-center justify-center">
              <div className="relative w-full h-full rounded-2xl bg-[#0D0D0D] overflow-hidden flex items-center justify-center p-8">
                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/images/cups/medeo-cup-yellow.svg"
                    alt="MEDEO Specialty Campaign Cup"
                    fill
                    className="object-contain drop-shadow-[0_20px_30px_rgba(255,199,0,0.2)]"
                  />
                </motion.div>

                {/* EDITORIAL STAMP */}
                <div className="absolute bottom-6 left-6 right-6 border-t border-[#FFC700]/20 pt-4 flex items-center justify-between font-display text-xs text-[#FFC700]">
                  <span>FRESH ROASTED</span>
                  <span>100% ARABICA</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
