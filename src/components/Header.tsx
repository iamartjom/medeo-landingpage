"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, MapPin, Truck } from "lucide-react";

const NAV_LINKS = [
  { name: "Напитки", href: "#menu" },
  { name: "Хот-доги", href: "#menu" },
  { name: "Десерты", href: "#menu" },
  { name: "Сезонное меню", href: "#menu" },
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
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFC700]/95 backdrop-blur-md py-3 shadow-lg text-[#111111] border-b border-[#111111]/10"
          : "bg-[#FFC700] py-4 text-[#111111]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* LEFT LOGO + SUBTITLE */}
        <a href="#" className="flex flex-col justify-center select-none group">
          <span className="font-display text-2xl md:text-3xl font-black tracking-tighter text-[#111111] leading-none">
            MEDEO
          </span>
          <span className="font-display text-[8px] md:text-[9.5px] font-extrabold tracking-[0.22em] uppercase text-[#111111]/80 mt-0.5">
            КОФЕ С СОБОЙ
          </span>
        </a>

        {/* CENTER NAVIGATION */}
        <nav className="hidden md:flex items-center space-x-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-sans text-xs md:text-sm font-bold text-[#111111] opacity-90 hover:opacity-100 transition-opacity relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE ACTIONS */}
        <div className="hidden lg:flex items-center space-x-3">
          {/* ACTION 1: YANDEX DELIVERY */}
          <a
            href="#delivery"
            onClick={(e) => scrollToSection(e, "#delivery")}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-display text-[11px] font-extrabold tracking-wider border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#FFC700] transition-all duration-300 active:scale-95 uppercase"
          >
            <span>ДОСТАВКА ЯНДЕКС</span>
          </a>

          {/* ACTION 2: PRIMARY BLACK BUTTON - МЫ НА КАРТЕ */}
          <a
            href="#location"
            onClick={(e) => scrollToSection(e, "#location")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-display text-[11px] font-black tracking-wider bg-[#111111] text-[#FFC700] hover:bg-[#FAF8F5] hover:text-[#111111] transition-all duration-300 active:scale-95 uppercase shadow-md"
          >
            <MapPin className="w-3.5 h-3.5 fill-[#FFC700]" />
            <span>МЫ НА КАРТЕ</span>
          </a>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
          className="lg:hidden p-2 rounded-lg text-[#111111] transition-colors"
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
            className="lg:hidden bg-[#FFC700] border-b border-[#111111]/20 text-[#111111] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="font-display text-lg font-bold text-[#111111] hover:opacity-70 transition-opacity"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-[#111111]/20 space-y-3">
                <a
                  href="#location"
                  onClick={(e) => scrollToSection(e, "#location")}
                  className="w-full py-3 bg-[#111111] text-[#FFC700] font-display text-xs font-black tracking-wider rounded-full flex items-center justify-center gap-2 uppercase shadow-md"
                >
                  <MapPin className="w-4 h-4 fill-[#FFC700]" />
                  <span>МЫ НА КАРТЕ</span>
                </a>

                <a
                  href="#delivery"
                  onClick={(e) => scrollToSection(e, "#delivery")}
                  className="w-full py-3 bg-transparent text-[#111111] border border-[#111111] font-display text-xs font-bold tracking-wider rounded-full flex items-center justify-center gap-2 uppercase"
                >
                  <Truck className="w-4 h-4" />
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
