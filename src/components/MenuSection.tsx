"use client";

import { useState } from "react";
import { MENU_ITEMS, CATEGORIES } from "@/data/menu";
import MenuItem from "./MenuItem";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("drinks");

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="w-full bg-[#FAF8F5] text-[#111111] py-16 md:py-24 bg-grain">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* CENTERED HEADING: МЕНЮ */}
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[#111111] uppercase">
            МЕНЮ
          </h2>

          {/* CATEGORY FILTER TABS */}
          <div className="flex items-center justify-center space-x-2 md:space-x-3 overflow-x-auto no-scrollbar py-2 mt-6">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full font-display text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer flex-shrink-0 ${
                    isActive
                      ? "bg-[#FFC700] text-[#111111] shadow-sm"
                      : "bg-[#FFFFFF] text-[#111111]/70 hover:text-[#111111] hover:bg-[#FFFFFF]/80 border border-[#111111]/5"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* PRODUCT CAROUSEL / GRID (4-5 VISIBLE PRODUCTS) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 my-8"
          >
            {filteredItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CENTERED YELLOW BUTTON: СМОТРЕТЬ ВСЁ МЕНЮ */}
        <div className="flex justify-center mt-10">
          <a
            href="#menu"
            className="px-8 py-3.5 rounded-full bg-[#FFC700] text-[#111111] font-display text-xs md:text-sm font-black tracking-wider uppercase hover:bg-[#111111] hover:text-[#FFC700] transition-all duration-300 shadow-md active:scale-95"
          >
            СМОТРЕТЬ ВСЁ МЕНЮ
          </a>
        </div>
      </div>
    </section>
  );
}
