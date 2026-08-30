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
        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl bg-[#FAF8F5]/60 flex items-center justify-center p-3">
          {item.badge && (
            <div className="absolute top-2.5 left-2.5 z-10">
              <span className="px-2.5 py-0.5 rounded-full font-display text-[9px] font-black tracking-wider uppercase bg-[#FFC700] text-[#111111]">
                {item.badge}
              </span>
            </div>
          )}

          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
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

        {/* TITLE */}
        <h3 className="font-display font-extrabold text-base md:text-lg text-[#111111] tracking-tight mb-1">
          {item.name}
        </h3>
      </div>

      {/* PRICE & WEIGHT/VOLUME */}
      <div className="pt-2 border-t border-[#111111]/5 flex items-baseline justify-between">
        <span className="font-display text-sm font-black text-[#111111]">
          {item.price}
        </span>
        {item.weight && (
          <span className="font-sans text-[11px] font-medium text-[#111111]/50">
            {item.weight}
          </span>
        )}
      </div>
    </motion.div>
  );
}
