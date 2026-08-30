"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PopularItem {
  id: string;
  name: string;
  price: string;
  weight: string;
  image: string;
}

const POPULAR_ITEMS: PopularItem[] = [
  {
    id: "pop-1",
    name: "Чизкейк с пеканом",
    price: "220 ₽",
    weight: "180 г",
    image: "/images/hero/medeo-dessert-cheesecake.png",
  },
  {
    id: "pop-2",
    name: "Классический",
    price: "220 ₽",
    weight: "210 г",
    image: "/images/hero/hero-greek-hotdog.png",
  },
  {
    id: "pop-3",
    name: "Брауни",
    price: "180 ₽",
    weight: "135 г",
    image: "/images/hero/hero-brownie-stack.png",
  },
];

export default function PopularSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#111111] py-20 md:py-28 bg-grain">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* CENTERED HEADING: ПОПУЛЯРНОЕ */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[#111111] uppercase">
            ПОПУЛЯРНОЕ
          </h2>
        </div>

        {/* 3 LARGE PRODUCT CARDS WITH SIDE ARROWS */}
        <div className="relative">
          {/* CAROUSEL ARROWS */}
          <button
            aria-label="Previous"
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#FFFFFF] shadow-md border border-[#111111]/10 text-[#111111] flex items-center justify-center hover:bg-[#FFC700] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            aria-label="Next"
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#FFFFFF] shadow-md border border-[#111111]/10 text-[#111111] flex items-center justify-center hover:bg-[#FFC700] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {POPULAR_ITEMS.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-[#FFFFFF] p-4 rounded-2xl border border-[#111111]/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden rounded-xl bg-[#FAF8F5]/60 flex items-center justify-center p-2">
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain drop-shadow-sm"
                      />
                    </motion.div>
                  </div>

                  <h3 className="font-display font-black text-lg text-[#111111] mb-1">
                    {item.name}
                  </h3>
                </div>

                <div className="pt-2 flex items-baseline justify-between border-t border-[#111111]/5 mt-2">
                  <span className="font-display text-base font-black text-[#111111]">
                    {item.price}
                  </span>
                  <span className="font-sans text-xs font-medium text-[#111111]/50">
                    {item.weight}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
