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
    <section className="relative w-full min-h-screen lg:h-screen lg:min-h-[640px] lg:max-h-[1080px] bg-[#FFC700] text-[#111111] overflow-hidden flex flex-col justify-center pt-20 sm:pt-24 pb-8 lg:py-0 select-none bg-grain">
      
      {/* AMBIENT STUDIO LIGHTING & CAST SHADOW SYSTEM ON THE YELLOW BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Soft Ambient Light Falloff & Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_15%,rgba(255,248,200,0.55)_0%,transparent_55%),radial-gradient(ellipse_at_85%_85%,rgba(175,100,0,0.22)_0%,transparent_65%),radial-gradient(ellipse_at_10%_90%,rgba(175,100,0,0.14)_0%,transparent_50%),linear-gradient(to_bottom,transparent_60%,rgba(180,105,0,0.12)_100%)]" />

        {/* Soft Organic Cast Shadows (Simulating Ambient Daylight & Object/Foliage Silhouettes) */}
        <svg
          className="absolute -top-12 -left-12 w-[650px] sm:w-[850px] lg:w-[1100px] h-[550px] sm:h-[700px] lg:h-[900px] opacity-[0.08] mix-blend-multiply blur-[40px] lg:blur-[55px] transform -rotate-12"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Organic shadow paths */}
          <path
            d="M50,120 Q180,40 320,110 T620,80 Q720,180 650,320 T420,520 Q220,580 120,440 Z"
            fill="#3B2300"
          />
          <path
            d="M200,50 Q360,-20 480,90 T690,260 Q620,420 480,460 T160,340 Q80,200 200,50 Z"
            fill="#2B1800"
          />
          <path
            d="M380,180 Q520,120 640,240 T580,480 Q420,560 300,420 T380,180 Z"
            fill="#1E1100"
          />
        </svg>

        {/* Diagonal Soft Ambient Light Beams / Negative Space Shadows */}
        <div className="hidden lg:block absolute -top-1/4 -right-1/4 w-[1200px] h-[1200px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.03)_40%,transparent_70%)] blur-[60px] pointer-events-none transform rotate-45" />

        {/* Subtle Grounding Depth Shadow under the Center Stage */}
        <div className="absolute bottom-[-10%] left-1/4 w-3/4 h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(160,85,0,0.18)_0%,transparent_70%)] blur-[50px] pointer-events-none" />
      </div>

      {/* DESKTOP ONLY: QUARTER CIRCLE BACKDROP IN BOTTOM-RIGHT */}
      <div
        className="hidden lg:block absolute bottom-0 right-0 w-[480px] xl:w-[520px] h-[480px] xl:h-[520px] rounded-tl-full bg-[#E5A100] pointer-events-none z-0 shadow-[-15px_-15px_45px_rgba(0,0,0,0.06)]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 my-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center relative z-10">
        
        {/* CUP ANIMATION STAGE - LARGE & PROMINENT ON MOBILE (order-1), SECOND ON DESKTOP (lg:order-2) */}
        <div className="order-1 lg:order-2 lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end w-full">
          <HeroProductStage />
        </div>

        {/* HERO TEXT & CTA CONTENT - SECOND ON MOBILE (order-2), FIRST ON DESKTOP (lg:order-1) */}
        <div className="order-2 lg:order-1 lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left items-start pt-2 sm:pt-4 lg:pt-0 pb-2 lg:pb-0">
          
          {/* MAIN HEADLINE */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] uppercase leading-[0.95] mb-4 sm:mb-5 lg:mb-6 text-left">
            ХОРОШИЙ ДЕНЬ <br />
            НАЧИНАЕТСЯ <br />
            С MEDEO
          </h1>

          {/* PARAGRAPH TEXT */}
          <p className="hidden lg:block font-sans text-sm md:text-base text-[#111111]/90 font-medium leading-relaxed max-w-xl mb-3">
            Мы готовим любимый кофе, сочные хот-доги и свежую выпечку, <br />
            чтобы вы чувствовали тепло и заботу в каждой детали.
          </p>

          {/* SUB-PARAGRAPH WITH BOLDER CALLOUT */}
          <div className="hidden lg:block font-sans text-sm md:text-base text-[#111111] leading-relaxed max-w-xl mb-8">
            <p className="font-bold">
              Забегайте за своим настроением! <span className="font-medium text-[#111111]/85">Мы всегда рады вас видеть.</span>
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap items-center justify-start gap-3 mt-1 sm:mt-2 lg:mt-0">
            {/* PRIMARY BLACK BUTTON */}
            <a
              href="#location"
              onClick={(e) => scrollToSection(e, "#location")}
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-display text-xs md:text-sm font-black tracking-wider bg-[#111111] text-[#FFC700] hover:bg-[#FAF8F5] hover:text-[#111111] transition-all duration-300 shadow-md active:scale-95 uppercase"
            >
              <MapPin className="w-4 h-4 fill-[#FFC700]" />
              <span>МЫ НА КАРТЕ</span>
            </a>

            {/* SECONDARY OUTLINE BUTTON */}
            <a
              href="#delivery"
              onClick={(e) => scrollToSection(e, "#delivery")}
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-display text-xs md:text-sm font-bold tracking-wider border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#FFC700] transition-all duration-300 active:scale-95 uppercase"
            >
              <span>ДОСТАВКА ЯНДЕКС</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
