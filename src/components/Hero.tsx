"use client";

import { MapPin } from "lucide-react";
import HeroProductStage from "./HeroProductStage";

export default function Hero() {
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
    <section className="relative w-full min-h-[90vh] md:min-h-screen bg-[#FFC700] text-[#111111] overflow-hidden flex flex-col justify-between pt-6 pb-12 select-none bg-grain">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 my-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
        
        {/* LEFT HERO CONTENT */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left">
          
          {/* MAIN HEADLINE */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111111] uppercase leading-[0.95] mb-6">
            ХОРОШИЙ ДЕНЬ <br />
            НАЧИНАЕТСЯ <br />
            С MEDEO
          </h1>

          {/* PARAGRAPH TEXT */}
          <p className="font-sans text-sm sm:text-base text-[#111111]/90 font-medium leading-relaxed max-w-sm mb-4">
            Мы готовим любимый кофе, <br />
            сочные хот-доги и свежую выпечку, <br />
            чтобы вы чувствовали тепло <br />
            и заботу в каждой детали.
          </p>

          {/* SUB-PARAGRAPH WITH BOLDER CALLOUT */}
          <div className="font-sans text-sm sm:text-base text-[#111111] leading-relaxed max-w-sm mb-8">
            <p className="font-bold">Забегайте за своим настроением!</p>
            <p className="font-medium text-[#111111]/85">Мы всегда рады вас видеть.</p>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap items-center gap-3">
            {/* PRIMARY BLACK BUTTON */}
            <a
              href="#location"
              onClick={(e) => scrollToSection(e, "#location")}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-display text-xs md:text-sm font-black tracking-wider bg-[#111111] text-[#FFC700] hover:bg-[#FAF8F5] hover:text-[#111111] transition-all duration-300 shadow-md active:scale-95 uppercase"
            >
              <MapPin className="w-4 h-4 fill-[#FFC700]" />
              <span>МЫ НА КАРТЕ</span>
            </a>

            {/* SECONDARY OUTLINE BUTTON */}
            <a
              href="#delivery"
              onClick={(e) => scrollToSection(e, "#delivery")}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-display text-xs md:text-sm font-bold tracking-wider border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#FFC700] transition-all duration-300 active:scale-95 uppercase"
            >
              <span>ДОСТАВКА ЯНДЕКС</span>
            </a>
          </div>

        </div>

        {/* RIGHT HERO CONTENT (EXACT UPLOADED PHOTO SHOWCASE) */}
        <div className="lg:col-span-7 relative flex items-center justify-center min-h-[360px] sm:min-h-[440px] md:min-h-[500px]">
          <HeroProductStage />
        </div>

      </div>

    </section>
  );
}
