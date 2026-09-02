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
      className="group bg-[#FFFFFF] p-5 sm:p-6 rounded-[28px] border border-[#111111]/6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* PRODUCT IMAGE CONTAINER */}
        <div className="relative w-full aspect-square mb-5 overflow-hidden rounded-2xl bg-[#FAF8F5]/60 flex items-center justify-center p-4">
          {item.badge && (
            <div className="absolute top-3 left-3 z-10">
              <span
                className={`px-3 py-1 rounded-full font-display text-[9px] font-black tracking-wider uppercase shadow-sm flex items-center gap-1 ${
                  item.badge === "ХИТ СЕЗОНА"
                    ? "bg-[#9A1231] text-white"
                    : item.badge === "ТОП ПРОДАЖ"
                    ? "bg-[#C44E0E] text-white"
                    : "bg-[#FFC700] text-[#111111]"
                }`}
              >
                {(item.badge === "ХИТ СЕЗОНА" || item.badge === "ТОП ПРОДАЖ") && (
                  <span className="text-[10px]">★</span>
                )}
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
              className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
            />
          </motion.div>
        </div>

        {/* TITLE & DESCRIPTOR */}
        <div className="mb-3 text-center min-h-[48px] sm:min-h-[54px] flex flex-col justify-center">
          <h3 className="font-display font-black text-xl md:text-2xl text-[#111111] tracking-tight leading-none">
            {item.name}
          </h3>
          {item.description && (
            <p className="font-sans text-xs sm:text-sm font-semibold text-[#111111]/70 mt-1 tracking-normal">
              {item.description}
            </p>
          )}
        </div>

        {/* DETAILED PRICE / VOLUME TABLE (COLUMN-ALIGNED) */}
        {item.prices && item.prices.length > 0 && (
          <div className="mb-2 flex flex-col gap-2 bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#111111]/4">
            {item.prices.map((p) => (
              <div key={p.volume} className="grid grid-cols-2 items-center">
                <span className="font-display text-xs sm:text-sm font-semibold text-[#111111]/60 text-left">
                  {p.volume}
                </span>
                <span className="font-display text-xs sm:text-sm font-black text-[#111111] tabular-nums text-right">
                  {p.price}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SINGLE PRICE (FOR HOTDOGS / DESSERTS) */}
      {!item.prices && (
        <div className="pt-3 border-t border-[#111111]/5 flex items-baseline justify-between mt-2">
          <span className="font-display text-base font-black text-[#111111]">
            {item.price}
          </span>
          {item.weight && (
            <span className="font-sans text-xs font-medium text-[#111111]/50">
              {item.weight}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
}
