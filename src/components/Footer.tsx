"use client";

import Image from "next/image";

const NAV_LINKS = [
  { name: "Напитки", href: "#menu" },
  { name: "Хот-доги", href: "#menu" },
  { name: "Десерты", href: "#menu" },
  { name: "Сезонное меню", href: "#menu" },
  { name: "О нас", href: "#about" },
];

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="w-full bg-[#111111] text-[#FAF8F5] py-12 md:py-16 border-t border-[#FFC700]/20 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* LEFT BRAND & COPYRIGHT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#" className="flex flex-col justify-center select-none group mb-2">
            <span className="font-display text-2xl md:text-3xl font-black tracking-tighter text-[#FFC700] leading-none">
              MEDEO
            </span>
            <span className="font-display text-[8.5px] md:text-[9.5px] font-extrabold tracking-[0.22em] uppercase text-[#FAF8F5]/70 mt-0.5">
              КОФЕ С СОБОЙ
            </span>
          </a>
          
          <p className="font-sans text-xs text-[#FAF8F5]/50 mt-2">
            © {new Date().getFullYear()} MEDEO. Все права защищены.
          </p>
        </div>

        {/* CENTER NAVIGATION */}
        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-sans text-xs md:text-sm font-semibold text-[#FAF8F5]/80 hover:text-[#FFC700] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* RIGHT DECORATIVE COFFEE CUP GRAPHIC */}
        <div className="relative w-24 h-28 hidden md:block flex-shrink-0">
          <Image
            src="/images/hero/medeo-cup-latte.png"
            alt="MEDEO Coffee Cup"
            fill
            className="object-contain drop-shadow-lg opacity-90"
          />
        </div>

      </div>
    </footer>
  );
}
