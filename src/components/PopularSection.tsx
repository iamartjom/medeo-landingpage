"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface PopularItem {
  id: string;
  name: string;
  price: string;
  image: string;
  isCover?: boolean;
}

const POPULAR_ITEMS: PopularItem[] = [
  {
    id: "pop-greek-dog",
    name: "Греческий дог",
    price: "229 ₽",
    image: "/images/hotdogs/menu-greek-dog.png",
    isCover: true,
  },
  {
    id: "pop-pecan-cheesecake",
    name: "Чизкейк с пеканом",
    price: "199 ₽",
    image: "/images/hero/menu-dessert-choco-pecan-cheesecake.png",
  },
  {
    id: "pop-salted-caramel-latte",
    name: "Латте соленая карамель",
    price: "от 189 ₽",
    image: "/images/hero/menu-salted-caramel-latte.png",
  },
];

export default function PopularSection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-[#111111] py-20 md:py-28 bg-grain">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* CENTERED HEADING: ПОПУЛЯРНОЕ */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[#111111] uppercase">
            ПОПУЛЯРНОЕ
          </h2>
        </div>

        {/* 3 LARGE PRODUCT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {POPULAR_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-[#FFFFFF] p-5 rounded-3xl border border-[#111111]/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`relative w-full aspect-square mb-4 overflow-hidden rounded-2xl bg-[#FAF8F5]/60 flex items-center justify-center ${
                    item.isCover ? "p-0" : "p-4"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      unoptimized
                      className={
                        item.isCover
                          ? "object-cover rounded-2xl"
                          : "object-contain drop-shadow-sm"
                      }
                    />
                  </motion.div>
                </div>

                <h3 className="font-display font-black text-lg md:text-xl text-[#111111] text-center mb-2 tracking-tight">
                  {item.name}
                </h3>
              </div>

              <div className="flex items-center justify-center bg-[#FAF8F5] py-2.5 px-3.5 rounded-2xl border border-[#111111]/4 mt-2">
                <span className="font-display text-sm sm:text-base font-black text-[#111111]">
                  {item.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
