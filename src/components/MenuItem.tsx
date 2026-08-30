"use client";

import { MenuItemType } from "@/data/menu";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface MenuItemProps {
  item: MenuItemType;
  featured?: boolean;
}

export default function MenuItem({ item, featured }: MenuItemProps) {
  const getBadgeStyle = (badge?: string) => {
    switch (badge) {
      case "СЕЗОННОЕ":
        return "bg-[#D9381E] text-[#FAF8F5]";
      case "НОВИНКА":
        return "bg-[#FFC700] text-[#111111]";
      case "ХИТ":
        return "bg-[#111111] text-[#FFC700] border border-[#FFC700]/40";
      default:
        return "bg-[#111111] text-[#FAF8F5]";
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col justify-between overflow-hidden border-b border-[#111111]/15 pb-8 pt-4 transition-all duration-500 cursor-pointer ${
        featured ? "col-span-1 md:col-span-2 bg-[#111111] text-[#FAF8F5] p-6 md:p-8 rounded-3xl" : "bg-transparent text-[#111111]"
      }`}
    >
      <div>
        {/* IMAGE COMPOSITION */}
        <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-2xl bg-neutral-200/50 flex items-center justify-center p-4">
          {item.badge && (
            <div className="absolute top-4 left-4 z-10">
              <span
                className={`px-3.5 py-1 rounded-full font-display text-[10px] font-black tracking-widest uppercase ${getBadgeStyle(
                  item.badge
                )}`}
              >
                {item.badge}
              </span>
            </div>
          )}

          <motion.div
            whileHover={{ scale: 1.04, rotate: 1.5, y: -4 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-contain p-2 drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          {/* HOVER ARROW ACCENT */}
          <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-[#111111] text-[#FFC700] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-2">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        {/* TITLE & WEIGHT ROW */}
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <h3
            className={`font-display font-extrabold tracking-tight ${
              featured ? "text-2xl md:text-3xl text-[#FAF8F5]" : "text-xl md:text-2xl text-[#111111]"
            }`}
          >
            {item.name}
          </h3>
          {item.weight && (
            <span
              className={`font-sans text-xs font-semibold tracking-wider ${
                featured ? "text-[#FFC700]" : "text-[#111111]/60"
              }`}
            >
              {item.weight}
            </span>
          )}
        </div>

        {/* DESCRIPTION */}
        {item.description && (
          <p
            className={`font-sans text-sm line-clamp-2 mb-4 leading-relaxed ${
              featured ? "text-[#FAF8F5]/80" : "text-[#111111]/70"
            }`}
          >
            {item.description}
          </p>
        )}
      </div>

      {/* PRICE & EDITORIAL LINE */}
      <div className="flex items-center justify-between border-t border-current/10 pt-4 mt-2">
        <span className="font-sans text-xs font-bold tracking-widest uppercase opacity-60">
          MEDEO TAKEAWAY
        </span>
        <span
          className={`font-display text-lg md:text-xl font-black ${
            featured ? "text-[#FFC700]" : "text-[#111111]"
          }`}
        >
          {item.price}
        </span>
      </div>
    </motion.div>
  );
}
