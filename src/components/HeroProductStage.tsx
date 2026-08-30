"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export interface CarouselItem {
  id: string;
  name: string;
  category: "cup" | "dessert" | "hotdog";
  badge: string;
  image: string;
  description: string;
  weightOrVolume: string;
}

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: "whipped-latte",
    name: "Карамельный Латте MEDEO",
    category: "cup",
    badge: "СЕЗОННЫЙ СПЕШЕЛ",
    image: "/images/hero/hero-whipped-cup.png",
    description: "Авторский латте с пышной шапкой взбитых сливок, карамелью и пряной крошкой",
    weightOrVolume: "350 мл",
  },
  {
    id: "caramel-tarts",
    name: "Тарталетки с Карамелью",
    category: "dessert",
    badge: "ХИТ ДЕСЕРТ",
    image: "/images/hero/hero-caramel-tarts.png",
    description: "Песочные тарталетки с тягучей домашней карамелью и обжаренным орехом",
    weightOrVolume: "180 г",
  },
  {
    id: "latte-art",
    name: "Классический Капучино MEDEO",
    category: "cup",
    badge: "100% АРАБИКА",
    image: "/images/hero/hero-latte-cup.png",
    description: "Плотный капучино с авторским рисунком молочной пены и богатым ароматом",
    weightOrVolume: "300 мл",
  },
  {
    id: "brownie-stack",
    name: "Шоколадный Брауни-Спешел",
    category: "dessert",
    badge: "НОВИНКА",
    image: "/images/hero/hero-brownie-stack.png",
    description: "Трехслойный плотный шоколадный брауни с хрустящей карамельной корочкой",
    weightOrVolume: "220 г",
  },
  {
    id: "greek-hotdog",
    name: "Хот-Дог Греческий",
    category: "hotdog",
    badge: "ХИТ STREET-FOOD",
    image: "/images/hero/hero-greek-hotdog.png",
    description: "Сочная сосиска гриль, сыр фета, свежие томаты, оливки и фирменный соус",
    weightOrVolume: "210 г",
  },
];

export default function HeroProductStage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play carousel every 3.8 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3800);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
  };

  const activeItem = CAROUSEL_ITEMS[currentIndex];

  const prevIndex = (currentIndex - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length;
  const nextIndex = (currentIndex + 1) % CAROUSEL_ITEMS.length;

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center select-none"
    >
      {/* 3D CAROUSEL STAGE CONTAINER */}
      <div className="relative w-full h-[380px] sm:h-[450px] md:h-[500px] flex items-center justify-center perspective-1000 overflow-visible">
        
        {/* PREVIOUS ITEM (PEEK LEFT) */}
        <motion.div
          key={`prev-${prevIndex}`}
          onClick={handlePrev}
          className="absolute left-[2%] sm:left-[8%] md:left-[12%] z-10 w-[140px] sm:w-[200px] md:w-[250px] cursor-pointer opacity-40 hover:opacity-75 transition-opacity"
          initial={{ opacity: 0, x: -100, scale: 0.5, rotateY: -35 }}
          animate={{ opacity: 0.45, x: 0, scale: 0.65, rotateY: -25, zIndex: 10 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-full aspect-square drop-shadow-xl filter grayscale-[25%]">
            <Image
              src={CAROUSEL_ITEMS[prevIndex].image}
              alt={CAROUSEL_ITEMS[prevIndex].name}
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* ACTIVE ITEM (CENTER SHOWCASE) */}
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={activeItem.id}
            custom={direction}
            initial={{
              opacity: 0,
              scale: 0.7,
              x: direction > 0 ? 120 : -120,
              rotateY: direction > 0 ? 30 : -30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              rotateY: 0,
              zIndex: 30,
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
              x: direction > 0 ? -120 : 120,
              rotateY: direction > 0 ? -30 : 30,
              zIndex: 10,
            }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-30 w-[220px] sm:w-[300px] md:w-[380px] lg:w-[420px] flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full aspect-square drop-shadow-[0_30px_50px_rgba(0,0,0,0.35)]"
            >
              <Image
                src={activeItem.image}
                alt={activeItem.name}
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* NEXT ITEM (PEEK RIGHT) */}
        <motion.div
          key={`next-${nextIndex}`}
          onClick={handleNext}
          className="absolute right-[2%] sm:right-[8%] md:right-[12%] z-10 w-[140px] sm:w-[200px] md:w-[250px] cursor-pointer opacity-40 hover:opacity-75 transition-opacity"
          initial={{ opacity: 0, x: 100, scale: 0.5, rotateY: 35 }}
          animate={{ opacity: 0.45, x: 0, scale: 0.65, rotateY: 25, zIndex: 10 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-full aspect-square drop-shadow-xl filter grayscale-[25%]">
            <Image
              src={CAROUSEL_ITEMS[nextIndex].image}
              alt={CAROUSEL_ITEMS[nextIndex].name}
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* NAV ARROWS */}
        <button
          onClick={handlePrev}
          aria-label="Предыдущий товар"
          className="absolute left-2 sm:left-6 z-40 p-3 rounded-full bg-[#111111] text-[#FFC700] hover:bg-[#FAF8F5] hover:text-[#111111] transition-all shadow-xl active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Следующий товар"
          className="absolute right-2 sm:right-6 z-40 p-3 rounded-full bg-[#111111] text-[#FFC700] hover:bg-[#FAF8F5] hover:text-[#111111] transition-all shadow-xl active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* ACTIVE PRODUCT DETAIL OVERLAY */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeItem.id + "-info"}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="relative z-40 text-center max-w-lg px-4 -mt-2 sm:mt-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111] text-[#FFC700] font-display text-[10px] sm:text-xs font-black tracking-widest uppercase mb-2 shadow-md">
            <Sparkles className="w-3 h-3" />
            <span>{activeItem.badge}</span>
            <span className="text-[#FAF8F5]/60">•</span>
            <span className="text-[#FAF8F5]">{activeItem.weightOrVolume}</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-black text-[#111111] tracking-tight uppercase leading-tight">
            {activeItem.name}
          </h3>

          <p className="font-sans text-xs sm:text-sm text-[#111111]/80 mt-1 font-medium leading-normal line-clamp-2">
            {activeItem.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* CAROUSEL PAGINATION DOTS */}
      <div className="flex items-center space-x-2 mt-4 z-40">
        {CAROUSEL_ITEMS.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === idx
                ? "w-8 h-2.5 bg-[#111111]"
                : "w-2.5 h-2.5 bg-[#111111]/30 hover:bg-[#111111]/60"
            }`}
            aria-label={`Перейти к ${item.name}`}
          />
        ))}
      </div>
    </div>
  );
}
