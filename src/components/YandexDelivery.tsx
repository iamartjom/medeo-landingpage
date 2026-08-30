"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function YandexDelivery() {
  return (
    <section id="delivery" className="w-full bg-[#111111] text-[#FAF8F5] py-20 md:py-28 bg-grain-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* LEFT PROMOTIONAL CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 flex flex-col justify-center"
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#FAF8F5] tracking-tighter uppercase leading-[0.95] mb-6">
              ДОСТАВКА <br />
              <span className="text-[#FFC700]">ЯНДЕКС</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#FAF8F5]/80 max-w-md leading-relaxed mb-8 font-medium">
              Быстро, удобно и горячо. <br />
              Ваш любимый MEDEO приедет прямо к вам.
            </p>

            <div>
              <a
                href="https://eda.yandex.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#FFC700] text-[#111111] font-display text-xs md:text-sm font-black tracking-wider uppercase hover:bg-[#FAF8F5] transition-all duration-300 shadow-lg active:scale-95"
              >
                ЗАКАЗАТЬ ДОСТАВКУ
              </a>
            </div>
          </motion.div>

          {/* RIGHT TAKEAWAY BAG & CUP PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full aspect-[4/3] max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-[#FAF8F5]/10">
              <Image
                src="/images/yandex-bag.jpg"
                alt="MEDEO Yandex Delivery Packaging"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
