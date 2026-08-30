"use client";

import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Напитки", href: "#menu" },
  { name: "Хот-доги", href: "#menu" },
  { name: "Десерты", href: "#menu" },
  { name: "Сезонное меню", href: "#menu" },
  { name: "О нас", href: "#about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="w-full bg-[#FFC700] text-[#111111] py-5 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LEFT: MEDEO LOGO + SUBTITLE */}
        <a href="#" className="flex flex-col justify-center select-none group">
          <span className="font-display text-2xl md:text-3xl font-black tracking-tighter text-[#111111] leading-none">
            MEDEO
          </span>
          <span className="font-display text-[8.5px] md:text-[9.5px] font-extrabold tracking-[0.22em] uppercase text-[#111111] mt-0.5">
            КОФЕ С СОБОЙ
          </span>
        </a>

        {/* CENTER NAVIGATION */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-sans text-xs md:text-sm font-bold text-[#111111] hover:opacity-75 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* RIGHT: OPENING HOURS WITH THIN VERTICAL BLACK DIVIDER */}
        <div className="hidden md:flex items-center space-x-4 pl-6 border-l border-[#111111]">
          <div className="font-sans text-[11px] md:text-xs font-bold text-[#111111] leading-tight">
            <p className="font-extrabold mb-0.5">Режим работы:</p>
            <p className="opacity-90">Будни: 8:00 – 21:00</p>
            <p className="opacity-90">Выходные: 10:00 – 20:00</p>
          </div>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-lg text-[#111111]"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
        </button>

      </div>

      {/* MOBILE MENU MODAL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FFC700] pt-4 pb-6 border-b border-[#111111]/20 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="font-display text-base font-bold text-[#111111]"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-[#111111]/20 font-sans text-xs font-bold text-[#111111]">
                <p className="font-extrabold mb-1">Режим работы:</p>
                <p>Будни: 8:00 – 21:00</p>
                <p>Выходные: 10:00 – 20:00</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
