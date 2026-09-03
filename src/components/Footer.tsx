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
    <footer className="w-full bg-[#111111] text-[#FAF8F5] pt-12 md:pt-16 pb-10 border-t border-[#FFC700]/20 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* TOP ROW: BRAND, NAVIGATION, GRAPHIC */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10">
          {/* LEFT BRAND */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="flex flex-col justify-center select-none group">
              <span className="font-display text-2xl md:text-3xl font-black tracking-tighter text-[#FFC700] leading-none">
                MEDEO
              </span>
              <span className="font-display text-[8.5px] md:text-[9.5px] font-extrabold tracking-[0.22em] uppercase text-[#FAF8F5]/70 mt-0.5">
                КОФЕ С СОБОЙ
              </span>
            </a>
          </div>

          {/* CENTER NAVIGATION */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-3 max-w-[310px] sm:max-w-none mx-auto text-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-sans text-xs md:text-sm font-semibold text-[#FAF8F5]/80 hover:text-[#FFC700] transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT DECORATIVE YELLOW LOGO */}
          <div className="relative w-20 h-20 hidden md:block flex-shrink-0">
            <Image
              src="/images/medeo-logo-yellow.png"
              alt="MEDEO Logo"
              fill
              className="object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* SUBTLE DIVIDER */}
        <div className="w-full h-px bg-[#FAF8F5]/10 mb-8" />

        {/* BOTTOM LEGAL & REQUISITES (DISCREET & COMPLIANT) */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 text-[11px] sm:text-xs text-[#FAF8F5]/40 text-center md:text-left leading-relaxed">
          
          {/* REQUISITES & CONTACTS */}
          <div className="space-y-1">
            <p className="font-medium text-[#FAF8F5]/50">ИП Дробышев Дмитрий Александрович</p>
            <p>ИНН 775112511856 · ОГРНИП 325774600620756</p>
            <p>
              Тел.:{" "}
              <a href="tel:+79150216912" className="hover:text-[#FAF8F5]/70 transition-colors">
                +7 915 021 69 12
              </a>
              {" · "}
              E-mail:{" "}
              <a href="mailto:info.medeocoffee@gmail.com" className="hover:text-[#FAF8F5]/70 transition-colors">
                info.medeocoffee@gmail.com
              </a>
            </p>
          </div>

          {/* LEGAL LINKS & COPYRIGHT */}
          <div className="flex flex-col md:items-end space-y-1">
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-2 gap-y-1">
              <a href="#" className="hover:text-[#FAF8F5]/70 hover:underline transition-colors">
                Политика конфиденциальности
              </a>
              <span>·</span>
              <a href="#" className="hover:text-[#FAF8F5]/70 hover:underline transition-colors">
                Публичная оферта
              </a>
            </div>
            <p className="text-[#FAF8F5]/30">
              © 2026 MEDEO. Все права защищены.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
