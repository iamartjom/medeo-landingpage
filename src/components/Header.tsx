"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, MapPin, Coffee } from "lucide-react";

const NAV_LINKS = [
  { name: "Меню", href: "#menu" },
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
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // For direct category tabs or sections
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
      transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111111]/90 backdrop-blur-md py-3.5 border-b border-[#FFC700]/20 shadow-2xl text-[#FAF8F5]"
          : "bg-transparent py-6 text-[#111111]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#"
          className="group flex items-center gap-2 font-display text-2xl md:text-3xl font-black tracking-tighter"
        >
          <span className={scrolled ? "text-[#FFC700]" : "text-[#111111]"}>
            MEDEO
          </span>
          <span
            className={`w-2.5 h-2.5 rounded-full transition-transform group-hover:scale-150 ${
              scrolled ? "bg-[#FAF8F5]" : "bg-[#111111]"
            }`}
          />
        </a>

        {/* DESKTOP NAV */}
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

        {/* RIGHT CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#location"
            onClick={(e) => scrollToSection(e, "#location")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-display text-xs font-bold tracking-wider transition-all duration-300 transform active:scale-95 ${
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
          className={`md:hidden p-2 rounded-lg transition-colors ${
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
            className="md:hidden bg-[#111111] border-b border-[#FFC700]/30 text-[#FAF8F5] overflow-hidden"
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
              <div className="pt-4 border-t border-[#FFC700]/20">
                <a
                  href="#location"
                  onClick={(e) => scrollToSection(e, "#location")}
                  className="w-full py-4 bg-[#FFC700] text-[#111111] font-display text-sm font-black tracking-wider rounded-xl flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>МЫ НА КАРТЕ</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
