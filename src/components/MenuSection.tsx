"use client";

import { useState } from "react";
import { MENU_ITEMS, CATEGORIES } from "@/data/menu";
import MenuItem from "./MenuItem";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("hotdogs");
  const [showAll, setShowAll] = useState<boolean>(false);

  const categoryItems = MENU_ITEMS.filter((item) => item.category === activeCategory);
  const visibleItems = showAll ? categoryItems : categoryItems.slice(0, 5);
  const hasMoreItems = categoryItems.length > 5;

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setShowAll(false);
  };

  return (
    <section id="menu" className="w-full bg-[#FAF8F5] text-[#111111] py-16 md:py-24 bg-grain">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* CENTERED HEADING: МЕНЮ */}
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[#111111] uppercase">
            МЕНЮ
          </h2>

          {/* CATEGORY FILTER TABS: 2x2 GRID ON MOBILE, SINGLE ROW ON DESKTOP */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-2 sm:gap-3 max-w-sm sm:max-w-none mx-auto mt-6">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`w-full sm:w-auto px-3.5 sm:px-5 py-2.5 sm:py-2 rounded-full font-display text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center justify-center text-center select-none active:scale-95 ${
                    isActive
                      ? "bg-[#FFC700] text-[#111111] shadow-sm font-black"
                      : "bg-[#FFFFFF] text-[#111111]/70 hover:text-[#111111] hover:bg-[#FFFFFF]/90 border border-[#111111]/5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* PRODUCT GRID (INITIAL 5 OR EXPANDED FULL MENU) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + (showAll ? "-all" : "-preview")}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 my-8"
          >
            {visibleItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CENTERED YELLOW BUTTON: СМОТРЕТЬ ВСЁ МЕНЮ / СВЕРНУТЬ */}
        {hasMoreItems && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3.5 rounded-full bg-[#FFC700] text-[#111111] font-display text-xs md:text-sm font-black tracking-wider uppercase hover:bg-[#111111] hover:text-[#FFC700] transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
            >
              {showAll ? "СВЕРНУТЬ" : "СМОТРЕТЬ ВСЁ МЕНЮ"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
