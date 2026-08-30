"use client";

import { useState } from "react";
import { MENU_ITEMS, MenuItemType } from "@/data/menu";
import CategoryNavigation from "./CategoryNavigation";
import MenuItem from "./MenuItem";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  return (
    <section id="menu" className="w-full bg-[#FAF8F5] text-[#111111] pt-20 pb-28 bg-grain">
      {/* MAIN HEADLINE */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <span className="font-display text-xs md:text-sm font-black tracking-widest uppercase text-[#FFC700] bg-[#111111] px-4 py-1.5 rounded-full inline-block mb-4">
            КАТАЛОГ С СОБОЙ
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#111111] tracking-tighter uppercase leading-none">
            ЧТО БУДЕМ <span className="text-[#FFC700] underline decoration-[#111111] decoration-4 underline-offset-8">СЕГОДНЯ?</span>
          </h2>
        </motion.div>
      </div>

      {/* STICKY CATEGORY NAV */}
      <CategoryNavigation
        activeCategory={activeCategory}
        onSelectCategory={(id) => setActiveCategory(id)}
      />

      {/* EDITORIAL CATALOG GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {filteredItems.map((item, idx) => (
              <MenuItem
                key={item.id}
                item={item}
                featured={item.featured && idx % 4 === 0}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
