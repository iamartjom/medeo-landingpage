"use client";

import { MenuItemType } from "@/data/menu";
import { motion } from "framer-motion";
import Image from "next/image";

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-[#FFFFFF] p-5 rounded-2xl border border-[#111111]/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* PRODUCT IMAGE CONTAINER */}
        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl bg-[#FAF8F5]/80 flex items-center justify-center p-3">
          {item.badge && (
            <div className="absolute top-2.5 left-2.5 z-10">
              <span className="px-2.5 py-0.5 rounded-full font-display text-[9px] font-black tracking-wider uppercase bg-[#FFC700] text-[#111111]">
                {item.badge}
              </span>
            </div>
          )}

          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              unoptimized
              className="object-contain drop-shadow-md"
            />
          </motion.div>
        </div>

        {/* TITLE */}
        <h3 className="font-display font-black text-base md:text-lg text-[#111111] tracking-tight mb-2">
          {item.name}
        </h3>

        {/* DETAILED PRICE / VOLUME TABLE IF AVAILABLE (DRINKS) */}
        {item.prices && item.prices.length > 0 && (
          <div className="mb-3 flex flex-col gap-1 bg-[#FAF8F5] p-2.5 rounded-xl border border-[#111111]/5">
            {item.prices.map((p) => (
              <div key={p.volume} className="flex items-center justify-between text-xs font-bold text-[#111111]">
                <span className="font-sans text-[11px] font-semibold text-[#111111]/65">{p.volume}</span>
                <span className="font-display text-[11.5px] font-extrabold text-[#111111]">{p.price}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* BASE PRICE FOOTER */}
      <div className="pt-2.5 border-t border-[#111111]/5 flex items-baseline justify-between">
        <span className="font-display text-sm md:text-base font-black text-[#111111]">
          {item.price}
        </span>
        {item.weight && !item.prices && (
          <span className="font-sans text-[11px] font-medium text-[#111111]/50">
            {item.weight}
          </span>
        )}
      </div>
    </motion.div>
  );
}
