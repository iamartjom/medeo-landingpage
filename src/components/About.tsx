"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Coffee, Smile } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#FFC700] text-[#111111] py-24 md:py-36 bg-grain overflow-hidden border-t-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT TYPOGRAPHY BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] text-[#FFC700] font-display text-xs font-black tracking-widest uppercase mb-8">
              <Heart className="w-3.5 h-3.5 fill-[#FFC700]" />
              <span>ФИЛОСОФИЯ MEDEO</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.95] mb-8 text-[#111111]">
              МАЛЕНЬКАЯ КОФЕЙНЯ <br />
              <span className="bg-[#111111] text-[#FFC700] px-3 py-1 inline-block my-1 rounded-lg">
                С БОЛЬШОЙ ЛЮБОВЬЮ
              </span>
            </h2>

            <div className="space-y-6 font-sans text-lg sm:text-xl font-medium leading-relaxed text-[#111111]/90 max-w-2xl">
              <p>
                <strong>Medeo Coffee</strong> — маленькая городская кофейня с большой любовью к хорошему кофе и вкусной еде без лишней суеты.
              </p>
              <p>
                Варим авторский кофе, готовим сочные хот-доги, собираем воздушные десерты и сезонные новинки. Всё самое вкусное удобно взять с собой или заказать с доставкой через Яндекс Еду.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-[#111111]/20 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#111111] text-[#FFC700] flex items-center justify-center font-display font-black text-lg">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-extrabold uppercase">100% Арабика</h4>
                  <p className="font-sans text-xs opacity-70">Свежая обжарка</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#111111] text-[#FFC700] flex items-center justify-center font-display font-black text-lg">
                  <Smile className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-extrabold uppercase">Быстро &amp; Вкусно</h4>
                  <p className="font-sans text-xs opacity-70">С собой и Яндекс Еда</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT EDITORIAL COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl bg-[#111111] p-6 shadow-2xl flex flex-col justify-between overflow-hidden text-[#FAF8F5]">
              <div className="relative z-10 flex justify-between items-start">
                <span className="font-display text-4xl font-black text-[#FFC700]">01</span>
                <span className="font-display text-xs font-bold tracking-widest uppercase bg-[#FFC700]/20 text-[#FFC700] px-3 py-1 rounded-full border border-[#FFC700]/40">
                  SPOT #1
                </span>
              </div>

              <div className="relative z-10 my-auto py-8">
                <div className="relative w-full h-[240px]">
                  <Image
                    src="/images/hero/medeo-cup-whipped.png"
                    alt="Medeo Specialty Cup"
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </div>
              </div>

              <div className="relative z-10 border-t border-[#FAF8F5]/20 pt-4 flex items-center justify-between">
                <span className="font-display text-xs font-bold tracking-wider">MEDEO COFFEE</span>
                <span className="font-sans text-xs opacity-60">WITH LOVE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
