"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#FAF8F5] text-[#111111] py-20 md:py-28 bg-grain overflow-hidden border-t border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* LEFT ATMOSPHERIC PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/barista-about.jpg"
                alt="MEDEO Coffee Barista"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT WARM STORY CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-6 flex flex-col justify-center pl-0 md:pl-6"
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] tracking-tighter uppercase mb-6">
              О НАС
            </h2>

            <div className="font-sans text-base sm:text-lg text-[#111111]/85 space-y-4 font-medium leading-relaxed max-w-md">
              <p>
                <strong>MEDEO</strong> — маленькая кофейня с большой любовью.
              </p>
              <p>
                Мы варим кофе, готовим хот-доги и создаём десерты, чтобы вы улыбались каждый день.
              </p>
              <p>
                Спасибо, что вы с нами.
              </p>
            </div>

            {/* HANDWRITTEN CURSIVE ACCENT */}
            <div className="mt-8">
              <span className="font-serif italic text-2xl sm:text-3xl font-bold text-[#FFC700] drop-shadow-xs">
                Команда MEDEO
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
