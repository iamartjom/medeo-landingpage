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
      className="group bg-[#FFFFFF] p-3.5 sm:p-5 md:p-6 rounded-[22px] sm:rounded-[28px] border border-[#111111]/6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* PRODUCT IMAGE CONTAINER */}
        <div
          className={`relative w-full aspect-square mb-3 sm:mb-5 overflow-hidden rounded-2xl bg-[#FAF8F5]/60 flex items-center justify-center ${
            item.category === "hotdogs" ? "p-0" : "p-2 sm:p-3 pt-4 sm:pt-6 pb-2"
          }`}
        >
          {item.badge && (
            <div className="absolute top-2 left-2 z-10">
              <span
                className={`px-2 sm:px-2.5 py-0.5 rounded-full font-display text-[8.5px] sm:text-[9px] font-black tracking-wider uppercase shadow-sm flex items-center gap-1 ${
                  item.badge === "ХИТ СЕЗОНА"
                    ? "bg-[#9A1231] text-white"
                    : item.badge === "ТОП ПРОДАЖ"
                    ? "bg-[#C44E0E] text-white"
                    : item.badge === "ХИТ ОСЕНИ"
                    ? "bg-[#D45D18] text-white"
                    : item.badge === "ПИКАНТНЫЙ"
                    ? "bg-[#D32F2F] text-white"
                    : "bg-[#FFC700] text-[#111111]"
                }`}
              >
                {(item.badge === "ХИТ СЕЗОНА" ||
                  item.badge === "ТОП ПРОДАЖ" ||
                  item.badge === "ХИТ ОСЕНИ") && (
                  <span className="text-[9px] sm:text-[10px]">★</span>
                )}
                {item.badge === "ПИКАНТНЫЙ" && (
                  <span className="text-[10px] sm:text-[11px] leading-none">🌶</span>
                )}
                {item.badge}
              </span>
            </div>
          )}

          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              unoptimized
              className={
                item.category === "hotdogs"
                  ? "object-cover rounded-2xl"
                  : "object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
              }
            />
          </motion.div>
        </div>

        {/* TITLE & DESCRIPTOR */}
        <div className="mb-2 sm:mb-3 text-center min-h-[40px] sm:min-h-[54px] flex flex-col justify-center items-center">
          <h3 className="font-display font-black text-xs sm:text-base md:text-lg text-[#111111] tracking-tight leading-snug text-center px-0.5 sm:px-1">
            {item.name}
          </h3>
          {item.description && (
            <p className="font-sans text-[11px] sm:text-sm font-semibold text-[#111111]/70 mt-0.5 sm:mt-1 tracking-normal text-center">
              {item.description}
            </p>
          )}
        </div>

        {/* DETAILED PRICE / VOLUME TABLE (COLUMN-ALIGNED) */}
        {item.prices && item.prices.length > 0 && (
          <div className="mb-1 sm:mb-2 flex flex-col gap-1.5 sm:gap-2 bg-[#FAF8F5] p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-[#111111]/4">
            {item.prices.map((p) => (
              <div key={p.volume} className="grid grid-cols-2 items-center">
                <span className="font-display text-[11px] sm:text-sm font-semibold text-[#111111]/60 text-left">
                  {p.volume}
                </span>
                <span className="font-display text-[11px] sm:text-sm font-black text-[#111111] tabular-nums text-right">
                  {p.price}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* SINGLE PRICE PILL CONTAINER (HOTDOGS & DESSERTS) */}
        {!item.prices && (
          <div className="mb-1 sm:mb-2 flex items-center justify-center bg-[#FAF8F5] py-2 sm:py-2.5 px-3 sm:px-3.5 rounded-xl sm:rounded-2xl border border-[#111111]/4">
            <span className="font-display text-xs sm:text-sm font-black text-[#111111] tracking-wide">
              {item.price}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
