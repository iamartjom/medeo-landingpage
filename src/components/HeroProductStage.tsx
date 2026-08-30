"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export interface FanProductItem {
  id: string;
  name: string;
  image: string;
}

const HERO_PRODUCTS: FanProductItem[] = [
  {
    id: "whipped-latte",
    name: "Карамельный Латте MEDEO",
    image: "/images/hero/hero-whipped-cup.png",
  },
  {
    id: "caramel-tarts",
    name: "Тарталетки с Карамелью",
    image: "/images/hero/hero-caramel-tarts.png",
  },
  {
    id: "latte-art",
    name: "Классический Капучино MEDEO",
    image: "/images/hero/hero-latte-cup.png",
  },
  {
    id: "brownie-stack",
    name: "Шоколадный Брауни",
    image: "/images/hero/hero-brownie-stack.png",
  },
  {
    id: "greek-hotdog",
    name: "Хот-Дог Греческий",
    image: "/images/hero/hero-greek-hotdog.png",
  },
];

export default function HeroProductStage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Fanned Position Calculation helper
  const getFanTransform = (offset: number, mobile: boolean) => {
    // offset = 0: Active Center
    // offset = 1: Right Peek
    // offset = -1: Left Peek
    // offset = 2 or >: Offstage Right
    // offset = -2 or <: Offstage Left

    if (offset === 0) {
      return {
        x: 0,
        y: 0,
        rotation: 0,
        scale: mobile ? 0.95 : 1.15,
        opacity: 1,
        zIndex: 30,
        filter: "drop-shadow(0 35px 50px rgba(0,0,0,0.38))",
      };
    } else if (offset === 1) {
      return {
        x: mobile ? 120 : 280,
        y: mobile ? 30 : 45,
        rotation: 20,
        scale: mobile ? 0.65 : 0.75,
        opacity: 0.85,
        zIndex: 15,
        filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.25))",
      };
    } else if (offset === -1) {
      return {
        x: mobile ? -120 : -280,
        y: mobile ? 30 : 45,
        rotation: -20,
        scale: mobile ? 0.65 : 0.75,
        opacity: 0.85,
        zIndex: 15,
        filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.25))",
      };
    } else if (offset > 1) {
      return {
        x: mobile ? 220 : 500,
        y: 100,
        rotation: 40,
        scale: 0.4,
        opacity: 0,
        zIndex: 5,
        filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.1))",
      };
    } else {
      // offset < -1
      return {
        x: mobile ? -220 : -500,
        y: 100,
        rotation: -40,
        scale: 0.4,
        opacity: 0,
        zIndex: 5,
        filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.1))",
      };
    }
  };

  // Animate items on index change using GSAP fan motion curve
  const animateCarousel = (targetIndex: number, duration: number = 1.3) => {
    const total = HERO_PRODUCTS.length;

    HERO_PRODUCTS.forEach((_, idx) => {
      const el = itemsRef.current[idx];
      if (!el) return;

      // Compute shortest wrapped distance relative to targetIndex
      let rawOffset = idx - targetIndex;
      if (rawOffset > total / 2) rawOffset -= total;
      if (rawOffset < -total / 2) rawOffset += total;

      const tf = getFanTransform(rawOffset, isMobile);

      gsap.to(el, {
        x: tf.x,
        y: tf.y,
        rotation: tf.rotation,
        scale: tf.scale,
        opacity: tf.opacity,
        zIndex: tf.zIndex,
        duration: duration,
        ease: "power2.inOut",
        overwrite: "auto",
      });
    });
  };

  // Initial layout set without duration + autoplay interval setup
  useEffect(() => {
    // Set initial positions immediately
    HERO_PRODUCTS.forEach((_, idx) => {
      const el = itemsRef.current[idx];
      if (!el) return;
      let rawOffset = idx - activeIndexRef.current;
      const tf = getFanTransform(rawOffset, isMobile);
      gsap.set(el, {
        x: tf.x,
        y: tf.y,
        rotation: tf.rotation,
        scale: tf.scale,
        opacity: tf.opacity,
        zIndex: tf.zIndex,
      });
    });

    // Autoplay every 3.5 seconds
    const interval = setInterval(() => {
      activeIndexRef.current = (activeIndexRef.current + 1) % HERO_PRODUCTS.length;
      animateCarousel(activeIndexRef.current, 1.3);
    }, 3500);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto h-[380px] sm:h-[460px] md:h-[540px] flex items-center justify-center select-none overflow-visible px-4"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {HERO_PRODUCTS.map((prod, idx) => (
          <div
            key={prod.id}
            ref={(el) => {
              itemsRef.current[idx] = el;
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[310px] md:w-[400px] lg:w-[440px] aspect-square flex items-center justify-center pointer-events-none"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative w-full h-full">
              <Image
                src={prod.image}
                alt={prod.name}
                fill
                priority={idx === 0}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
