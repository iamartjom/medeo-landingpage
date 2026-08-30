"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, MapPin, Truck } from "lucide-react";

const NAV_LINKS = [
  { name: "Напитки", href: "#drinks" },
  { name: "Хот-доги", href: "#hotdogs" },
  { name: "Десерты", href: "#desserts" },
  { name: "О нас", href: "#about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 90;
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
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111111]/95 backdrop-blur-md py-3 border-b border-[#FFC700]/20 shadow-2xl text-[#FAF8F5]"
          : "bg-transparent py-5 text-[#111111]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* LEFT LOGO + SUBTITLE */}
        <a href="#" className="group flex flex-col justify-center select-none">
          <div className="flex items-center gap-1.5 font-display text-2xl md:text-3xl font-black tracking-tighter leading-none">
            <span className={scrolled ? "text-[#FFC700]" : "text-[#111111]"}>
              MEDEO
            </span>
            <span
              className={`w-2 h-2 rounded-full transition-transform group-hover:scale-150 ${
                scrolled ? "bg-[#FAF8F5]" : "bg-[#111111]"
              }`}
            />
          </div>
          <span
            className={`font-display text-[9px] md:text-[10px] font-extrabold tracking-[0.25em] uppercase transition-colors -mt-0.5 ${
              scrolled ? "text-[#FAF8F5]/70" : "text-[#111111]/80"
            }`}
          >
            КОФЕ С СОБОЙ
          </span>
        </a>

        {/* CENTER NAVIGATION */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`font-sans text-sm font-semibold tracking-wide transition-colors relative py-1 hover:opacity-100 ${
                scrolled
                  ? "text-[#FAF8F5] opacity-80 hover:text-[#FFC700]"
                  : "text-[#111111] opacity-90 hover:text-[#111111]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE ACTIONS: 1. ДОСТАВКА ЯНДЕКС, 2. МЫ НА КАРТЕ */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* ACTION 1: YANDEX DELIVERY */}
          <a
            href="#location"
            onClick={(e) => scrollToSection(e, "#location")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-display text-xs font-bold tracking-wider transition-all duration-300 active:scale-95 ${
              scrolled
                ? "bg-[#FAF8F5]/10 text-[#FAF8F5] hover:bg-[#FAF8F5]/20 border border-[#FAF8F5]/20"
                : "bg-[#111111]/10 text-[#111111] hover:bg-[#111111]/20 border border-[#111111]/20"
            }`}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>ДОСТАВКА ЯНДЕКС</span>
          </a>

          {/* ACTION 2: PRIMARY CTA - МЫ НА КАРТЕ */}
          <a
            href="#location"
            onClick={(e) => scrollToSection(e, "#location")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-display text-xs font-black tracking-wider transition-all duration-300 active:scale-95 shadow-md ${
              scrolled
                ? "bg-[#FFC700] text-[#111111] hover:bg-[#FAF8F5]"
                : "bg-[#111111] text-[#FFC700] hover:bg-[#FAF8F5] hover:text-[#111111]"
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>МЫ НА КАРТЕ</span>
          </a>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-[#FFC700]" : "text-[#111111]"
          }`}
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#111111] border-b border-[#FFC700]/30 text-[#FAF8F5] overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="font-display text-xl font-bold text-[#FAF8F5] hover:text-[#FFC700] transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-[#FFC700]/20 space-y-3">
                <a
                  href="#location"
                  onClick={(e) => scrollToSection(e, "#location")}
                  className="w-full py-3.5 bg-[#FFC700] text-[#111111] font-display text-xs font-black tracking-wider rounded-xl flex items-center justify-center gap-2 uppercase shadow-lg"
                >
                  <MapPin className="w-4 h-4" />
                  <span>МЫ НА КАРТЕ</span>
                </a>

                <a
                  href="#location"
                  onClick={(e) => scrollToSection(e, "#location")}
                  className="w-full py-3 bg-[#FAF8F5]/10 text-[#FAF8F5] font-display text-xs font-bold tracking-wider rounded-xl flex items-center justify-center gap-2 uppercase border border-[#FAF8F5]/20"
                >
                  <Truck className="w-4 h-4 text-[#FFC700]" />
                  <span>ДОСТАВКА ЯНДЕКС</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
