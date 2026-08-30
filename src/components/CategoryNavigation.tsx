"use client";

import { CATEGORIES, CategoryType } from "@/data/menu";
import { motion } from "framer-motion";

interface CategoryNavigationProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export default function CategoryNavigation({
  activeCategory,
  onSelectCategory,
}: CategoryNavigationProps) {
  return (
    <div className="sticky top-[60px] md:top-[68px] z-40 bg-[#111111]/95 backdrop-blur-md border-b border-[#FFC700]/20 py-4 transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center space-x-3 overflow-x-auto no-scrollbar py-1 scroll-smooth">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full font-display text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 flex-shrink-0 cursor-pointer ${
                  isActive
                    ? "text-[#111111]"
                    : "text-[#FAF8F5]/70 hover:text-[#FFC700] hover:bg-[#FAF8F5]/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-[#FFC700] rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {cat.id === "autumn" && (
                    <span className="w-2 h-2 rounded-full bg-[#D9381E] animate-ping" />
                  )}
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
