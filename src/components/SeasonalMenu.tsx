"use client";

import { MENU_ITEMS } from "@/data/menu";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export default function SeasonalMenu() {
  const autumnItems = MENU_ITEMS.filter((item) => item.category === "autumn");

  return (
    <section id="autumn" className="w-full bg-[#FAF8F5] text-[#111111] py-20 md:py-28 bg-grain">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-2 border-[#111111] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D9381E] text-[#FAF8F5] font-display text-[10px] font-black tracking-widest uppercase mb-4">
              <Flame className="w-3.5 h-3.5" />
              <span>ОСЕНЬ В MEDEO</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[#111111] uppercase">
              ОСЕННЕЕ <span className="text-[#D9381E]">МЕНЮ</span>
            </h2>
          </div>

          <p className="font-sans text-base text-[#111111]/70 max-w-md mt-4 md:mt-0 font-medium">
            Теплые согревающие ароматы корицы, печеных яблок, карамели и обжаренного ореха пекан. Настоящий осенний спешел MEDEO.
          </p>
        </div>

        {/* EDITORIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {autumnItems.map((item, idx) => (
            <MenuItem key={item.id} item={item} featured={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
